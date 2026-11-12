import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CtaBand } from '@/components/CtaBand'
import { Icon } from '@/components/Icon'
import { PageHero } from '@/components/PageHero'
import { isLocale, localeMeta } from '@/i18n/config'
import { fill, formatDate, getDictionary } from '@/i18n/dictionaries'
import { pageMetadata, type LocaleParams } from '@/lib/seo'
import { site } from '@/lib/site'

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = await getDictionary(locale)
  return pageMetadata(locale, 'visa', dict.visa.title, dict.visa.intro)
}

export default async function VisaPage({ params }: LocaleParams) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dict = await getDictionary(locale)
  const v = dict.visa
  const reviewed = fill(dict.common.reviewed, { date: formatDate(site.contentReviewed, localeMeta[locale].htmlLang) })

  const official = [
    { label: v.links.nia, url: site.official.nia },
    { label: v.links.visaCenter, url: site.official.visaCenter },
    { label: v.links.arrivalCard, url: site.official.arrivalCard },
  ]

  return (
    <>
      <PageHero eyebrow={dict.nav.visa} title={v.title} intro={v.intro}>
        <p className="mt-8 text-sm text-ink-mute">{reviewed}</p>
      </PageHero>

      <section className="shell section grid gap-x-8 gap-y-16 lg:grid-cols-12">
        <ol className="border-t border-ink lg:col-span-8">
          {v.options.map((option, index) => (
            <li
              key={option.title}
              className="grid gap-x-8 gap-y-3 border-b border-rule py-10 sm:grid-cols-[4.5rem_minmax(0,1fr)] lg:py-12"
            >
              <span className="font-mono text-[1.75rem] leading-none text-cobalt" dir="ltr">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <p className="label">{option.badge}</p>
                <h2 className="h3 mt-2">{option.title}</h2>
                <p className="mt-4 text-ink-soft">{option.body}</p>
                <ul className="mt-5 space-y-2.5 text-[0.9688rem]">
                  {option.points.map((point) => (
                    <li key={point} className="tick">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <aside className="space-y-10 lg:col-span-4">
          <div className="bg-cobalt-wash p-6 sm:p-7">
            <h2 className="h4">{v.arrival.title}</h2>
            <p className="mt-3 text-[0.9375rem] text-ink-soft">{v.arrival.body}</p>
          </div>

          {/* A printable checklist: empty boxes, like a paper form. */}
          <div className="border border-ink p-6 sm:p-7">
            <h2 className="h4">{v.checklist.title}</h2>
            <ul className="mt-5 space-y-3.5">
              {v.checklist.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.9375rem] leading-snug">
                  <span aria-hidden="true" className="mt-0.5 size-4 shrink-0 border border-ink" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="label">{dict.common.officialSources}</h2>
            <ul className="mt-4 border-t border-rule">
              {official.map((link) => (
                <li key={link.url} className="border-b border-rule">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 py-3.5 text-[0.9688rem] transition-colors hover:text-cobalt"
                  >
                    {link.label}
                    <Icon name="external" flip className="size-[1.125rem] shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <section className="shell pb-20 lg:pb-28">
        <p className="max-w-3xl border-s-2 border-cobalt ps-5 text-[0.9688rem] text-ink-soft">{v.disclaimer}</p>
      </section>

      <CtaBand locale={locale} dict={dict} />
    </>
  )
}
