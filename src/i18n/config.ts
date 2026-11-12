export const locales = ['en', 'zh', 'ru', 'ar', 'fr', 'es', 'id', 'vi'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

export const LOCALE_COOKIE = 'NEXT_LOCALE'

type LocaleMeta = {
  /** Name of the language written in that language (shown in the switcher). */
  name: string
  /** BCP 47 tag used for <html lang> and hreflang. */
  htmlLang: string
  dir: 'ltr' | 'rtl'
  /** Open Graph locale. */
  og: string
}

export const localeMeta: Record<Locale, LocaleMeta> = {
  en: { name: 'English', htmlLang: 'en', dir: 'ltr', og: 'en_US' },
  zh: { name: '简体中文', htmlLang: 'zh-Hans', dir: 'ltr', og: 'zh_CN' },
  ru: { name: 'Русский', htmlLang: 'ru', dir: 'ltr', og: 'ru_RU' },
  ar: { name: 'العربية', htmlLang: 'ar', dir: 'rtl', og: 'ar_AR' },
  fr: { name: 'Français', htmlLang: 'fr', dir: 'ltr', og: 'fr_FR' },
  es: { name: 'Español', htmlLang: 'es', dir: 'ltr', og: 'es_ES' },
  id: { name: 'Bahasa Indonesia', htmlLang: 'id', dir: 'ltr', og: 'id_ID' },
  vi: { name: 'Tiếng Việt', htmlLang: 'vi', dir: 'ltr', og: 'vi_VN' },
}

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (locales as readonly string[]).includes(value)
}

/**
 * Picks the best supported locale for an Accept-Language header.
 * Matching is done on the primary language subtag ("zh-TW" → "zh").
 */
export function matchLocale(acceptLanguage: string | null | undefined): Locale {
  if (!acceptLanguage) return defaultLocale

  const ranked = acceptLanguage
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().split(';')
      const q = params.find((p) => p.trim().startsWith('q='))
      const weight = q ? Number.parseFloat(q.trim().slice(2)) : 1
      return { tag: tag.trim().toLowerCase(), weight: Number.isFinite(weight) ? weight : 0 }
    })
    .filter((entry) => entry.tag && entry.weight > 0)
    .sort((a, b) => b.weight - a.weight)

  for (const { tag } of ranked) {
    let primary = tag.split('-')[0]
    if (primary === 'in') primary = 'id' // legacy code for Indonesian
    if (isLocale(primary)) return primary
  }
  return defaultLocale
}
