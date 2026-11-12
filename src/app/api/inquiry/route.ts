import { NextResponse } from 'next/server'
import { parseInquiry, type Inquiry } from '@/lib/inquiry'
import { site } from '@/lib/site'

export const runtime = 'nodejs'

/**
 * Receives inquiry form submissions and forwards them to the configured channel(s):
 * a JSON webhook (INQUIRY_WEBHOOK_URL) and/or e-mail through Resend (RESEND_API_KEY).
 *
 * Nothing is stored by this application, and message contents are never written to logs.
 */

const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const hits = new Map<string, number[]>()

/** Best-effort, per-instance rate limit. Put a WAF / edge rule in front for stronger protection. */
function rateLimited(key: string): boolean {
  const now = Date.now()
  const recent = (hits.get(key) ?? []).filter((time) => now - time < WINDOW_MS)
  recent.push(now)
  hits.set(key, recent)
  if (hits.size > 5000) {
    for (const [k, times] of hits) if (times.every((time) => now - time >= WINDOW_MS)) hits.delete(k)
  }
  return recent.length > MAX_PER_WINDOW
}

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]!)

function rows(inquiry: Inquiry): [string, string][] {
  return [
    ['Name', inquiry.name],
    ['Email', inquiry.email],
    ['Phone / WhatsApp', inquiry.phone || '—'],
    ['Country / region', inquiry.country],
    ['Service', inquiry.treatment],
    ['Preferred city', inquiry.city || '—'],
    ['Timeframe', inquiry.timeframe || '—'],
    ['Site language', inquiry.locale],
    ['Message', inquiry.message],
  ]
}

async function sendWebhook(inquiry: Inquiry): Promise<void> {
  const url = process.env.INQUIRY_WEBHOOK_URL!
  const secret = process.env.INQUIRY_WEBHOOK_SECRET
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(secret ? { 'X-Webhook-Secret': secret } : {}),
    },
    body: JSON.stringify({ type: 'inquiry', receivedAt: new Date().toISOString(), ...inquiry }),
    signal: AbortSignal.timeout(10_000),
  })
  if (!response.ok) throw new Error(`webhook responded ${response.status}`)
}

async function sendEmail(inquiry: Inquiry): Promise<void> {
  const html = `<table cellpadding="6" style="font-family:sans-serif;font-size:14px;border-collapse:collapse">${rows(inquiry)
    .map(
      ([label, value]) =>
        `<tr><td style="vertical-align:top;color:#64736d;white-space:nowrap">${escapeHtml(label)}</td><td style="white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
    )
    .join('')}</table>`

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.INQUIRY_FROM_EMAIL,
      to: [process.env.INQUIRY_TO_EMAIL],
      reply_to: inquiry.email,
      subject: `New inquiry (${inquiry.treatment}, ${inquiry.country}) — ${site.name}`,
      html,
    }),
    signal: AbortSignal.timeout(10_000),
  })
  if (!response.ok) throw new Error(`email API responded ${response.status}`)
}

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid' }, { status: 400 })
  }

  // Honeypot: real visitors never fill this hidden field. Pretend success so bots learn nothing.
  if (body && typeof body === 'object' && (body as Record<string, unknown>).website) {
    return NextResponse.json({ ok: true })
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: 'rate' }, { status: 429 })
  }

  const parsed = parseInquiry(body)
  if (!parsed.ok) {
    return NextResponse.json({ ok: false, error: 'validation', fields: parsed.fields }, { status: 422 })
  }

  const channels: Promise<void>[] = []
  if (process.env.INQUIRY_WEBHOOK_URL) channels.push(sendWebhook(parsed.inquiry))
  if (process.env.RESEND_API_KEY && process.env.INQUIRY_TO_EMAIL && process.env.INQUIRY_FROM_EMAIL) {
    channels.push(sendEmail(parsed.inquiry))
  }

  if (channels.length === 0) {
    if (process.env.NODE_ENV !== 'production') {
      // Local development: accept the submission so the flow can be tested without credentials.
      console.info('[inquiry] accepted in development mode — no delivery channel is configured')
      return NextResponse.json({ ok: true })
    }
    console.error('[inquiry] no delivery channel configured; set INQUIRY_WEBHOOK_URL or the RESEND_* variables')
    return NextResponse.json({ ok: false, error: 'unavailable' }, { status: 503 })
  }

  const results = await Promise.allSettled(channels)
  const failures = results.filter((result) => result.status === 'rejected')
  for (const failure of failures) console.error('[inquiry] delivery failed:', String((failure as PromiseRejectedResult).reason))

  // The inquiry counts as delivered if at least one channel accepted it.
  if (failures.length === results.length) {
    return NextResponse.json({ ok: false, error: 'unavailable' }, { status: 502 })
  }
  return NextResponse.json({ ok: true })
}
