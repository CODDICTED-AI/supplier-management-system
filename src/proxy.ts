import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { LOCALE_COOKIE, isLocale, locales, matchLocale } from '@/i18n/config'

/**
 * Every page lives under a locale prefix (/en, /zh, /ar …).
 * Requests without one are redirected to the visitor's preferred language:
 * the language they last chose (cookie), otherwise their browser language.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  )
  if (hasLocale) return

  const saved = request.cookies.get(LOCALE_COOKIE)?.value
  const locale = isLocale(saved) ? saved : matchLocale(request.headers.get('accept-language'))

  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  // Skip API routes, Next.js internals and any file with an extension (icons, robots.txt, sitemap.xml …).
  matcher: ['/((?!api|_next/static|_next/image|.*\\..*).*)'],
}
