import 'server-only'
import type { Locale } from './config'
import type { Dictionary } from './locales/en'

const loaders: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import('./locales/en').then((m) => m.default),
  zh: () => import('./locales/zh').then((m) => m.default),
  ru: () => import('./locales/ru').then((m) => m.default),
  ar: () => import('./locales/ar').then((m) => m.default),
  fr: () => import('./locales/fr').then((m) => m.default),
  es: () => import('./locales/es').then((m) => m.default),
  id: () => import('./locales/id').then((m) => m.default),
  vi: () => import('./locales/vi').then((m) => m.default),
}

export const getDictionary = (locale: Locale): Promise<Dictionary> => loaders[locale]()

export type { Dictionary }

/** Replaces {placeholders} in a translated string. */
export function fill(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match)
}

/** Formats an ISO date (YYYY-MM-DD) for display in the given locale, always with Latin digits. */
export function formatDate(iso: string, htmlLang: string): string {
  const date = new Date(`${iso}T00:00:00Z`)
  return new Intl.DateTimeFormat(`${htmlLang}-u-nu-latn-ca-gregory`, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date)
}
