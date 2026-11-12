import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CtaBand } from '@/components/CtaBand'
import { Icon } from '@/components/Icon'
import { PageHero } from '@/components/PageHero'
import { isLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { pageMetadata, type LocaleParams } from '@/lib/seo'
import { href } from '@/lib/site'

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = await getDictionary(locale)
  return pageMetadata(locale, 'faq', dict.faq.title, dict.faq.intro)
}

export default async function FaqPage({ params }: LocaleParams) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dict = await getDictionary(locale)
  const f = dict.faq

  // Structured data so search engines can show the questions directly.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: f.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <PageHero eyebrow={dict.nav.faq} title={f.title} intro={f.intro} />

      <section className="shell section">
        <div className="mx-auto max-w-3xl divide-y divide-line border-y border-line">
          {f.items.map((item, index) => (
            <details key={item.q} className="group" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-[1.1875rem] font-semibold leading-snug [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border border-line-strong text-ink-soft transition group-open:rotate-180 group-open:border-jade-600 group-open:bg-jade-600 group-open:text-white">
                  <Icon name="chevron" className="size-4" />
                </span>
              </summary>
              <p className="pb-7 pe-14 text-ink-soft">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap gap-x-8 gap-y-3">
          <Link href={href(locale, 'visa')} className="link inline-flex items-center gap-2">
            {dict.nav.visa}
            <Icon name="arrow" flip className="size-[1.1rem]" />
          </Link>
          <Link href={href(locale, 'costs')} className="link inline-flex items-center gap-2">
            {dict.nav.costs}
            <Icon name="arrow" flip className="size-[1.1rem]" />
          </Link>
        </div>
      </section>

      <CtaBand locale={locale} dict={dict} />
    </>
  )
}
