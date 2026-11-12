import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CtaBand } from '@/components/CtaBand'
import { Icon } from '@/components/Icon'
import { PageHero } from '@/components/PageHero'
import { treatmentIcons, treatmentIds } from '@/data/treatments'
import { isLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { pageMetadata, type LocaleParams } from '@/lib/seo'

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = await getDictionary(locale)
  return pageMetadata(locale, 'treatments', dict.treatments.title, dict.treatments.intro)
}

export default async function TreatmentsPage({ params }: LocaleParams) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dict = await getDictionary(locale)
  const t = dict.treatments

  return (
    <>
      <PageHero eyebrow={dict.nav.treatments} title={t.title} intro={t.intro} />

      <section className="shell section">
        <ul className="grid gap-6 lg:grid-cols-2">
          {treatmentIds.map((id) => {
            const item = t.items[id]
            return (
              <li key={id} id={id} className="card flex flex-col p-7 sm:p-9">
                <div className="flex items-start gap-5">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-jade-600 text-white">
                    <Icon name={treatmentIcons[id]} />
                  </span>
                  <div>
                    <h2 className="title-md">{item.name}</h2>
                    <p className="mt-2 text-ink-soft">{item.summary}</p>
                  </div>
                </div>

                <h3 className="mt-7 text-[0.8125rem] font-semibold uppercase tracking-[var(--caps-tracking)] text-ink-mute [font-family:var(--ff-body)]">
                  {t.popular}
                </h3>
                <ul className="mt-3 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-[0.9688rem] leading-snug">
                      <Icon name="check" className="mt-0.5 size-[1.05rem] shrink-0 text-jade-600" />
                      {point}
                    </li>
                  ))}
                </ul>

                <p className="mt-auto flex items-center gap-2.5 pt-7 text-[0.9375rem] text-ink-soft">
                  <Icon name="clock" className="size-[1.1rem] shrink-0 text-cinnabar" />
                  <span>
                    <span className="font-semibold text-ink">{dict.common.typicalStay}:</span> {item.stay}
                  </span>
                </p>
              </li>
            )
          })}
        </ul>

        <aside className="mt-10 flex gap-5 rounded-[1.25rem] border border-line-strong bg-paper-deep/70 p-7 sm:p-9">
          <Icon name="shield" className="size-7 shrink-0 text-jade-700" />
          <div>
            <h2 className="title-sm font-sans font-semibold">{t.notOffered.title}</h2>
            <p className="mt-2 max-w-3xl text-ink-soft">{t.notOffered.body}</p>
          </div>
        </aside>
      </section>

      <CtaBand locale={locale} dict={dict} />
    </>
  )
}
