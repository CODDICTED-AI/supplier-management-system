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
        <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-line-strong bg-white/70 px-4 py-2 text-sm text-ink-soft">
          <Icon name="clock" className="size-4 text-cinnabar" />
          {reviewed}
        </p>
      </PageHero>

      <section className="shell section grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
        <ol className="space-y-6">
          {v.options.map((option, index) => (
            <li key={option.title} className="card p-7 sm:p-9">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="font-display text-3xl font-medium leading-none text-cinnabar" dir="ltr">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="rounded-full bg-jade-50 px-3 py-1 text-[0.8125rem] font-semibold text-jade-800">{option.badge}</span>
              </div>
              <h2 className="title-md mt-4">{option.title}</h2>
              <p className="mt-3 text-ink-soft">{option.body}</p>
              <ul className="mt-5 space-y-2.5">
                {option.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-[0.9688rem]">
                    <Icon name="check" className="mt-1 size-[1.05rem] shrink-0 text-jade-600" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-[1.25rem] bg-jade-800 p-7 text-white">
            <Icon name="passport" className="size-7 text-jade-200" />
            <h2 className="title-sm mt-4 font-sans font-semibold text-white">{v.arrival.title}</h2>
            <p className="mt-2 text-[0.9688rem] text-jade-100">{v.arrival.body}</p>
          </div>

          <div className="card p-7">
            <h2 className="title-sm font-sans font-semibold">{v.checklist.title}</h2>
            <ul className="mt-4 space-y-3">
              {v.checklist.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.9688rem] leading-snug">
                  <span aria-hidden="true" className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border border-line-strong bg-paper">
                    <Icon name="check" className="size-3.5 text-jade-600" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-7">
            <h2 className="title-sm font-sans font-semibold">{dict.common.officialSources}</h2>
            <ul className="mt-4 space-y-3">
              {official.map((link) => (
                <li key={link.url}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1.5 text-[0.9688rem]">
                    {link.label}
                    <Icon name="arrow" className="size-4 -rotate-45 rtl:-scale-x-100 rtl:rotate-45" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <section className="shell pb-20">
        <p className="flex gap-4 rounded-2xl border border-line-strong bg-paper-deep/70 p-5 text-[0.9688rem] text-ink-soft sm:p-6">
          <Icon name="info" className="mt-0.5 size-5 shrink-0 text-jade-700" />
          <span>{v.disclaimer}</span>
        </p>
      </section>

      <CtaBand locale={locale} dict={dict} />
    </>
  )
}
