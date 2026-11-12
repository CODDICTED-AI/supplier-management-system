import { isLocale, type Locale } from '@/i18n/config'
import { cityIds } from '@/data/hospitals'
import { treatmentIds } from '@/data/treatments'

export const timeframeIds = ['asap', 'month', 'quarter', 'exploring'] as const

export type Inquiry = {
  name: string
  email: string
  phone: string
  country: string
  treatment: string
  city: string
  timeframe: string
  message: string
  locale: Locale
}

export type InquiryField = keyof Omit<Inquiry, 'locale'> | 'consent'

type Result = { ok: true; inquiry: Inquiry } | { ok: false; fields: InquiryField[] }

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function text(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

/** Validates and normalises a raw form submission. */
export function parseInquiry(raw: unknown): Result {
  const data = (raw && typeof raw === 'object' ? raw : {}) as Record<string, unknown>
  const invalid: InquiryField[] = []

  const name = text(data.name, 120)
  if (name.length < 2) invalid.push('name')

  const email = text(data.email, 200)
  if (!EMAIL.test(email)) invalid.push('email')

  const country = text(data.country, 100)
  if (country.length < 2) invalid.push('country')

  const treatment = text(data.treatment, 40)
  if (treatment !== 'other' && !(treatmentIds as readonly string[]).includes(treatment)) invalid.push('treatment')

  const city = text(data.city, 40)
  if (city && city !== 'any' && !(cityIds as readonly string[]).includes(city)) invalid.push('city')

  const timeframe = text(data.timeframe, 40)
  if (timeframe && !(timeframeIds as readonly string[]).includes(timeframe)) invalid.push('timeframe')

  const message = text(data.message, 4000)
  if (message.length < 10) invalid.push('message')

  if (data.consent !== true) invalid.push('consent')

  if (invalid.length > 0) return { ok: false, fields: invalid }

  const locale = typeof data.locale === 'string' && isLocale(data.locale) ? data.locale : 'en'
  return {
    ok: true,
    inquiry: { name, email, phone: text(data.phone, 60), country, treatment, city, timeframe, message, locale },
  }
}
