import type { Metadata, Viewport } from 'next'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'
import '@fontsource-variable/source-sans-3/index.css'
import '@fontsource-variable/source-serif-4/opsz.css'
import '@fontsource-variable/noto-sans-arabic/index.css'
import '@fontsource-variable/noto-naskh-arabic/index.css'
import '../globals.css'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { isLocale, localeMeta, locales } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { site } from '@/lib/site'

type Props = { children: ReactNode; params: Promise<{ locale: string }> }

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

// Only the locales above exist; anything else is a 404.
export const dynamicParams = false

export const viewport: Viewport = {
  themeColor: '#f8f5ee',
  width: 'device-width',
  initialScale: 1,
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = await getDictionary(locale)
  return {
    metadataBase: new URL(site.url),
    title: { default: `${site.name} — ${dict.meta.tagline}`, template: `%s | ${site.name}` },
    description: dict.meta.description,
    applicationName: site.name,
    formatDetection: { telephone: false },
  }
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dict = await getDictionary(locale)
  const meta = localeMeta[locale]

  return (
    <html lang={meta.htmlLang} dir={meta.dir}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-jade-700 focus:px-5 focus:py-2.5 focus:text-white"
        >
          {dict.nav.skip}
        </a>
        <Header locale={locale} dict={dict} />
        <main id="content" className="flex-1">
          {children}
        </main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  )
}
