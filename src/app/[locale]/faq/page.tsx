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

  const guides = [
    { href: href(locale, 'visa'), label: dict.nav.visa },
    { href: href(locale, 'costs'), label: dict.nav.costs },
    { href: href(locale, 'contact'), label: dict.nav.contact },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <PageHero eyebrow={dict.nav.faq} title={f.title} intro={f.intro} />

      <section className="shell section grid gap-x-8 gap-y-14 lg:grid-cols-12">
        <div className="border-t border-ink lg:col-span-8">
          {f.items.map((item, index) => (
            <details key={item.q} className="group border-b border-rule" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-[1.1875rem] font-medium leading-snug transition-colors hover:text-cobalt [&::-webkit-details-marker]:hidden">
                {item.q}
                <Icon name="plus" className="mt-0.5 size-5 shrink-0 transition-transform group-open:rotate-45" />
              </summary>
              <p className="max-w-2xl pb-7 pe-10 text-ink-soft">{item.a}</p>
            </details>
          ))}
        </div>

        <aside className="lg:col-span-3 lg:col-start-10">
          <h2 className="label">{dict.footer.explore}</h2>
          <ul className="mt-4 border-t border-rule">
            {guides.map((guide) => (
              <li key={guide.href} className="border-b border-rule">
                <Link
                  href={guide.href}
                  className="flex items-center justify-between gap-4 py-3.5 transition-colors hover:text-cobalt"
                >
                  {guide.label}
                  <Icon name="arrow" flip className="size-[1.125rem] shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <CtaBand locale={locale} dict={dict} />
    </>
  )
}
