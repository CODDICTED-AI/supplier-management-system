import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CtaBand } from '@/components/CtaBand'
import { PageHero } from '@/components/PageHero'
import { cityAirports, cityIds, hospitalsByCity } from '@/data/hospitals'
import { isLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { pageMetadata, type LocaleParams } from '@/lib/seo'

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = await getDictionary(locale)
  return pageMetadata(locale, 'hospitals', dict.hospitals.title, dict.hospitals.intro)
}

const typeColor = {
  public: 'text-ink-mute',
  private: 'text-seal-deep',
  zone: 'text-cobalt',
} as const

export default async function HospitalsPage({ params }: LocaleParams) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dict = await getDictionary(locale)
  const h = dict.hospitals

  return (
    <>
      <PageHero eyebrow={dict.nav.hospitals} title={h.title} intro={h.intro}>
        <nav className="mt-10 flex flex-wrap gap-x-7 gap-y-3" aria-label={h.title}>
          {cityIds.map((city) => (
            <a
              key={city}
              href={`#${city}`}
              className="inline-flex items-baseline gap-2 border-b border-rule-strong pb-1 transition-colors hover:border-cobalt hover:text-cobalt"
            >
              <span className="font-mono text-xs font-medium text-cobalt" dir="ltr">
                {cityAirports[city]}
              </span>
              {h.cities[city].name}
            </a>
          ))}
        </nav>
      </PageHero>

      <section className="shell pb-8 pt-14 lg:pt-20">
        <p className="max-w-3xl border-s-2 border-cobalt ps-5 text-[0.9688rem] text-ink-soft">{h.disclaimer}</p>

        <div className="mt-14">
          {cityIds.map((city) => (
            <section key={city} id={city} className="grid gap-x-8 gap-y-8 border-t border-ink py-12 lg:grid-cols-12 lg:py-16">
              <div className="lg:col-span-4">
                <p className="font-mono text-sm font-medium text-cobalt" dir="ltr">
                  {cityAirports[city]}
                </p>
                <h2 className="h2 mt-3">{h.cities[city].name}</h2>
                <p className="mt-5 text-ink-soft">{h.cities[city].blurb}</p>
              </div>

              <ul className="lg:col-span-8">
                {hospitalsByCity[city].map((hospital) => (
                  <li
                    key={hospital.name}
                    className="grid gap-x-8 gap-y-2 border-b border-rule py-5 first:pt-0 sm:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]"
                  >
                    <div>
                      <h3 className="font-medium leading-snug">
                        <bdi lang="en">{hospital.name}</bdi>
                      </h3>
                      <p className="mt-1 text-[0.9375rem] text-ink-mute">
                        <bdi lang="zh-Hans">{hospital.nameZh}</bdi>
                      </p>
                    </div>
                    <div>
                      <p className={`label ${typeColor[hospital.type]}`}>{h.types[hospital.type]}</p>
                      <p className="mt-1 text-[0.9375rem] text-ink-soft">
                        {hospital.tags.map((tag) => h.tags[tag]).join(' · ')}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <section className="bg-wash">
        <div className="shell section">
          <h2 className="h2 max-w-2xl">{h.choose.title}</h2>
          <ol className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-3">
            {h.choose.items.map((item, index) => (
              <li key={item.title} className="border-t border-ink pt-6">
                <span className="font-mono text-sm font-medium text-cobalt" dir="ltr">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="h3 mt-4">{item.title}</h3>
                <p className="mt-3 text-ink-soft">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand locale={locale} dict={dict} />
    </>
  )
}
