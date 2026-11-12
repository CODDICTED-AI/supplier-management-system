import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CtaBand } from '@/components/CtaBand'
import { Icon } from '@/components/Icon'
import { PageHero } from '@/components/PageHero'
import { cityIds, hospitalsByCity } from '@/data/hospitals'
import { isLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { pageMetadata, type LocaleParams } from '@/lib/seo'

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = await getDictionary(locale)
  return pageMetadata(locale, 'hospitals', dict.hospitals.title, dict.hospitals.intro)
}

const typeStyles = {
  public: 'bg-jade-50 text-jade-800',
  private: 'bg-cinnabar-soft text-cinnabar-deep',
  zone: 'bg-[#f3ead8] text-[#6f531f]',
} as const

export default async function HospitalsPage({ params }: LocaleParams) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dict = await getDictionary(locale)
  const h = dict.hospitals

  return (
    <>
      <PageHero eyebrow={dict.nav.hospitals} title={h.title} intro={h.intro}>
        <nav className="mt-8 flex flex-wrap gap-2" aria-label={h.title}>
          {cityIds.map((city) => (
            <a
              key={city}
              href={`#${city}`}
              className="rounded-full border border-line-strong bg-white/70 px-4 py-2 text-[0.9375rem] font-medium text-ink-soft transition hover:border-jade-600 hover:text-jade-700"
            >
              {h.cities[city].name}
            </a>
          ))}
        </nav>
      </PageHero>

      <section className="shell section">
        <p className="flex gap-4 rounded-2xl border border-line-strong bg-paper-deep/70 p-5 text-[0.9688rem] text-ink-soft sm:p-6">
          <Icon name="info" className="mt-0.5 size-5 shrink-0 text-jade-700" />
          <span>{h.disclaimer}</span>
        </p>

        <div className="mt-14 space-y-16">
          {cityIds.map((city) => (
            <section key={city} id={city} className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
              <div>
                <h2 className="title-lg">{h.cities[city].name}</h2>
                <p className="mt-4 text-ink-soft">{h.cities[city].blurb}</p>
              </div>
              <ul className="divide-y divide-line overflow-hidden rounded-[1.25rem] border border-line bg-surface shadow-card">
                {hospitalsByCity[city].map((hospital) => (
                  <li key={hospital.name} className="p-5 sm:p-6">
                    <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                      <div>
                        <h3 className="text-[1.0625rem] font-semibold leading-snug [font-family:var(--ff-body)]" lang="en" dir="ltr">
                          {hospital.name}
                        </h3>
                        <p className="mt-0.5 text-[0.9375rem] text-ink-mute" lang="zh-Hans" dir="ltr">
                          {hospital.nameZh}
                        </p>
                      </div>
                      <span className={`rounded-full px-2.5 py-1 text-[0.8125rem] font-semibold ${typeStyles[hospital.type]}`}>
                        {h.types[hospital.type]}
                      </span>
                    </div>
                    <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[0.9375rem] text-ink-soft">
                      {hospital.tags.map((tag) => (
                        <li key={tag} className="flex items-center gap-1.5">
                          <span aria-hidden="true" className="size-1.5 rounded-full bg-jade-500" />
                          {h.tags[tag]}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="shell section">
          <h2 className="title-lg max-w-2xl">{h.choose.title}</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {h.choose.items.map((item, index) => (
              <li key={item.title} className="border-t border-line-strong pt-6">
                <span className="font-display text-3xl font-medium text-cinnabar" dir="ltr">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="title-sm mt-3 font-sans font-semibold">{item.title}</h3>
                <p className="mt-2 text-ink-soft">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="pt-20 lg:pt-28">
        <CtaBand locale={locale} dict={dict} />
      </div>
    </>
  )
}
