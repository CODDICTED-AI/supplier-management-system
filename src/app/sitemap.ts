import type { MetadataRoute } from 'next'
import { defaultLocale, localeMeta, locales } from '@/i18n/config'
import { routes, site } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(`${site.contentReviewed}T00:00:00Z`)

  return routes.flatMap((route) => {
    const path = route ? `/${route}` : ''
    const languages: Record<string, string> = { 'x-default': `${site.url}/${defaultLocale}${path}` }
    for (const code of locales) languages[localeMeta[code].htmlLang] = `${site.url}/${code}${path}`

    return locales.map((locale) => ({
      url: `${site.url}/${locale}${path}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : route === 'legal' ? 0.3 : 0.7,
      alternates: { languages },
    }))
  })
}
