/**
 * Central site configuration.
 * Brand, contact channels and review dates live here so they can be changed in one place.
 */

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
  if (explicit) return explicit.replace(/\/+$/, '')
  // Provided automatically on Vercel deployments.
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL
  if (vercel) return `https://${vercel}`
  return 'http://localhost:3000'
}

const clean = (value: string | undefined) => (value && value.trim() ? value.trim() : null)

export const site = {
  /** Brand name (not translated). */
  name: 'YiLu Health',
  /** Chinese brand name, shown next to the logo on the Chinese site. */
  nameZh: '医路健康',
  url: resolveSiteUrl(),

  /**
   * Date on which visa, entry and price information was last checked (ISO date).
   * Update this whenever the content of the visa / costs pages is re-verified.
   */
  contentReviewed: '2026-11-11',

  /** Contact channels. A channel that is not configured is hidden from the site. */
  contact: {
    email: clean(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
    /** Digits only, including country code. */
    whatsapp: clean(process.env.NEXT_PUBLIC_WHATSAPP)?.replace(/\D/g, '') || null,
    wechat: clean(process.env.NEXT_PUBLIC_WECHAT_ID),
  },

  /** Official resources linked from the visa page. */
  official: {
    nia: 'https://en.nia.gov.cn/',
    visaCenter: 'https://www.visaforchina.cn/',
    arrivalCard: 'https://s.nia.gov.cn/ArrivalCardFillingPC/',
  },
} as const

export const routes = ['', 'treatments', 'hospitals', 'visa', 'costs', 'faq', 'contact', 'legal'] as const
export type Route = (typeof routes)[number]

/** Builds a locale-prefixed path, e.g. href('ru', 'visa') → "/ru/visa". */
export function href(locale: string, route: Route = '', hash?: string): string {
  return `/${locale}${route ? `/${route}` : ''}${hash ? `#${hash}` : ''}`
}
