import type { Metadata } from 'next'
import { defaultLocale, localeMeta, locales, type Locale } from '@/i18n/config'
import { site, type Route } from './site'

/** Canonical URL, hreflang alternates and Open Graph data for one page in one language. */
export function pageMetadata(locale: Locale, route: Route, title: string, description: string): Metadata {
  const path = route ? `/${route}` : ''
  const languages: Record<string, string> = { 'x-default': `/${defaultLocale}${path}` }
  for (const code of locales) languages[localeMeta[code].htmlLang] = `/${code}${path}`

  const fullTitle = route ? `${title} | ${site.name}` : title

  return {
    title: route ? title : { absolute: title },
    description,
    alternates: { canonical: `/${locale}${path}`, languages },
    openGraph: {
      type: 'website',
      siteName: site.name,
      title: fullTitle,
      description,
      url: `/${locale}${path}`,
      locale: localeMeta[locale].og,
    },
  }
}

/** Resolves the `[locale]` route param to a supported locale or renders the 404 page. */
export type LocaleParams = { params: Promise<{ locale: string }> }
