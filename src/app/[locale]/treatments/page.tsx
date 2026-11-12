import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CtaBand } from '@/components/CtaBand'
import { PageHero } from '@/components/PageHero'
import { treatmentIds } from '@/data/treatments'
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
        <ul className="border-t border-ink">
          {treatmentIds.map((id, index) => {
            const item = t.items[id]
            return (
              <li key={id} id={id} className="grid gap-x-8 gap-y-6 border-b border-rule py-10 lg:grid-cols-12 lg:py-14">
                <div className="lg:col-span-4">
                  <span className="font-mono text-sm font-medium text-cobalt" dir="ltr">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="h3 mt-3">{item.name}</h2>
                  <dl className="mt-6">
                    <dt className="label">{dict.common.typicalStay}</dt>
                    <dd className="mt-1 font-medium">{item.stay}</dd>
                  </dl>
                </div>

                <div className="lg:col-span-8">
                  <p className="lede">{item.summary}</p>
                  <h3 className="label mt-8">{t.popular}</h3>
                  <ul className="mt-4 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                    {item.points.map((point) => (
                      <li key={point} className="tick">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            )
          })}
        </ul>

        <aside className="mt-14 grid gap-x-8 gap-y-3 border border-ink p-7 sm:p-9 lg:grid-cols-12">
          <h2 className="h4 lg:col-span-4">{t.notOffered.title}</h2>
          <p className="text-ink-soft lg:col-span-8">{t.notOffered.body}</p>
        </aside>
      </section>

      <CtaBand locale={locale} dict={dict} />
    </>
  )
}
