'use client'

import Link from 'next/link'
import { useState, type FormEvent } from 'react'
import type { Dictionary } from '@/i18n/locales/en'
import type { InquiryField } from '@/lib/inquiry'
import { Icon } from './Icon'

type Option = { value: string; label: string }

type Props = {
  locale: string
  labels: Dictionary['contact']['form']
  treatments: Option[]
  cities: Option[]
  legalHref: string
}

type Status = 'idle' | 'sending' | 'success' | 'error'

export function InquiryForm({ locale, labels, treatments, cities, legalHref }: Props) {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')
  const [invalid, setInvalid] = useState<InquiryField[]>([])

  const bad = (field: InquiryField) => (invalid.includes(field) ? true : undefined)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const payload = {
      ...Object.fromEntries([...form.entries()].filter(([key]) => key !== 'consent')),
      consent: form.get('consent') === 'on',
      locale,
    }

    setStatus('sending')
    setError('')
    setInvalid([])

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = (await response.json().catch(() => ({}))) as { ok?: boolean; error?: string; fields?: InquiryField[] }

      if (response.ok && result.ok) {
        setStatus('success')
        return
      }
      if (result.error === 'validation') {
        setInvalid(result.fields ?? [])
        setError(labels.errorValidation)
      } else if (result.error === 'rate') {
        setError(labels.errorRate)
      } else if (result.error === 'unavailable') {
        setError(labels.errorUnavailable)
      } else {
        setError(labels.errorGeneric)
      }
      setStatus('error')
    } catch {
      setError(labels.errorGeneric)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="border border-ink p-8 sm:p-12" role="status">
        <span className="flex size-12 items-center justify-center bg-cobalt text-white">
          <Icon name="check" className="size-6" />
        </span>
        <h2 className="h3 mt-7">{labels.successTitle}</h2>
        <p className="mt-3 max-w-md text-ink-soft">{labels.successBody}</p>
        <button type="button" className="btn btn-outline mt-9" onClick={() => setStatus('idle')}>
          {labels.again}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
      <div>
        <label htmlFor="inq-name" className="field-label">
          {labels.name}
        </label>
        <input id="inq-name" name="name" className="field" required minLength={2} maxLength={120} autoComplete="name" aria-invalid={bad('name')} />
      </div>

      <div>
        <label htmlFor="inq-email" className="field-label">
          {labels.email}
        </label>
        <input
          id="inq-email"
          name="email"
          type="email"
          dir="ltr"
          className="field"
          required
          maxLength={200}
          autoComplete="email"
          aria-invalid={bad('email')}
        />
      </div>

      <div>
        <label htmlFor="inq-country" className="field-label">
          {labels.country}
        </label>
        <input
          id="inq-country"
          name="country"
          className="field"
          required
          minLength={2}
          maxLength={100}
          autoComplete="country-name"
          aria-invalid={bad('country')}
        />
      </div>

      <div>
        <label htmlFor="inq-phone" className="field-label">
          {labels.phone}
        </label>
        <input id="inq-phone" name="phone" type="tel" dir="ltr" className="field" maxLength={60} autoComplete="tel" />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="inq-treatment" className="field-label">
          {labels.treatment}
        </label>
        <select id="inq-treatment" name="treatment" className="field" required defaultValue="" aria-invalid={bad('treatment')}>
          <option value="" disabled>
            {labels.select}
          </option>
          {treatments.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
          <option value="other">{labels.other}</option>
        </select>
      </div>

      <div>
        <label htmlFor="inq-city" className="field-label">
          {labels.city}
        </label>
        <select id="inq-city" name="city" className="field" defaultValue="any">
          <option value="any">{labels.anyCity}</option>
          {cities.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="inq-timeframe" className="field-label">
          {labels.timeframe}
        </label>
        <select id="inq-timeframe" name="timeframe" className="field" defaultValue="">
          <option value="">{labels.select}</option>
          {Object.entries(labels.timeframes).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="inq-message" className="field-label">
          {labels.message}
        </label>
        <textarea
          id="inq-message"
          name="message"
          className="field min-h-36 resize-y"
          required
          minLength={10}
          maxLength={4000}
          aria-describedby="inq-message-hint"
          aria-invalid={bad('message')}
        />
        <p id="inq-message-hint" className="mt-2 text-sm text-ink-mute">
          {labels.messageHint}
        </p>
      </div>

      {/* Honeypot field: hidden from people, tempting for bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="inq-website">Website</label>
        <input id="inq-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="sm:col-span-2">
        <label className="flex items-start gap-3 text-[0.9375rem] text-ink-soft">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-1 size-[1.15rem] shrink-0 accent-cobalt"
            aria-invalid={bad('consent')}
          />
          <span>
            {labels.consent}{' '}
            <Link href={legalHref} className="link" target="_blank">
              {labels.privacyLink}
            </Link>
          </span>
        </label>
      </div>

      {error && (
        <p role="alert" className="border-s-2 border-seal bg-seal-wash px-4 py-3 text-[0.9375rem] font-medium text-seal-deep sm:col-span-2">
          {error}
        </p>
      )}

      <div className="sm:col-span-2">
        <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={status === 'sending'}>
          {status === 'sending' ? labels.sending : labels.submit}
          {status !== 'sending' && <Icon name="arrow" flip className="size-5" />}
        </button>
      </div>
    </form>
  )
}
