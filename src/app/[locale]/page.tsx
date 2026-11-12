import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CtaBand } from '@/components/CtaBand'
import { Icon, type IconName } from '@/components/Icon'
import { cityIds, hospitalsByCity } from '@/data/hospitals'
import { treatmentIcons, treatmentIds } from '@/data/treatments'
import { isLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { pageMetadata, type LocaleParams } from '@/lib/seo'
import { href, site } from '@/lib/site'

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = await getDictionary(locale)
  return pageMetadata(locale, '', `${site.name} — ${dict.meta.tagline}`, dict.meta.description)
}

const whyIcons: IconName[] = ['clock', 'sparkle', 'building', 'wallet', 'leaf', 'passport']
const entryIcons: IconName[] = ['passport', 'pin', 'clipboard']

export default async function HomePage({ params }: LocaleParams) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dict = await getDictionary(locale)
  const { hero, journey, stats, why, treatments, process, destinations, entry } = dict.home

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="hero-bg overflow-hidden">
        <div className="shell grid items-center gap-14 pb-16 pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-24 lg:pt-20">
          <div>
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1 className="display mt-6">{hero.title}</h1>
            <p className="lede mt-7 max-w-xl">{hero.subtitle}</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href={href(locale, 'contact')} className="btn btn-primary">
                {hero.primary}
                <Icon name="arrow" flip className="size-5" />
              </Link>
              <Link href="#how-it-works" className="btn btn-ghost">
                {hero.secondary}
              </Link>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[0.9375rem] text-ink-soft">
              {hero.notes.map((note) => (
                <li key={note} className="flex items-center gap-2">
                  <Icon name="check" className="size-[1.05rem] text-jade-600" />
                  {note}
                </li>
              ))}
            </ul>
          </div>

          {/* Journey card */}
          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">
            <svg
              viewBox="0 0 400 400"
              aria-hidden="true"
              className="pointer-events-none absolute -end-24 -top-20 size-[30rem] text-jade-300/50"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="200" cy="200" r="90" />
              <circle cx="200" cy="200" r="135" />
              <circle cx="200" cy="200" r="180" strokeDasharray="2 7" />
            </svg>

            <div className="card relative p-6 shadow-lift sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <h2 className="title-sm font-sans font-semibold">{journey.title}</h2>
                <span className="flex size-9 items-center justify-center rounded-full bg-jade-50 text-jade-600">
                  <Icon name="plane" className="size-5 rtl:-scale-x-100" />
                </span>
              </div>

              <ol className="mt-6">
                {journey.steps.map((step, index) => {
                  const last = index === journey.steps.length - 1
                  return (
                    <li key={step.when} className="relative flex gap-4 pb-6 last:pb-0">
                      {!last && <span aria-hidden="true" className="absolute start-[0.6875rem] top-6 h-full w-px bg-jade-200" />}
                      <span
                        aria-hidden="true"
                        className={`relative mt-0.5 flex size-[1.4375rem] shrink-0 items-center justify-center rounded-full border-2 ${
                          index === 0 ? 'border-cinnabar bg-cinnabar' : 'border-jade-500 bg-white'
                        }`}
                      >
                        <span className={`size-1.5 rounded-full ${index === 0 ? 'bg-white' : 'bg-jade-500'}`} />
                      </span>
                      <div>
                        <p className="text-[0.8125rem] font-semibold uppercase tracking-[var(--caps-tracking)] text-ink-mute">
                          {step.when}
                        </p>
                        <p className="mt-0.5 font-medium leading-snug text-ink">{step.text}</p>
                      </div>
                    </li>
                  )
                })}
              </ol>

              <p className="mt-6 border-t border-line pt-4 text-sm text-ink-mute">{journey.note}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key figures ──────────────────────────────────────── */}
      <section className="border-y border-line bg-surface" aria-label={why.title}>
        <div className="shell py-10 lg:py-12">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4 lg:gap-x-10">
            {stats.items.map((item) => (
              <div key={item.label} className="flex flex-col-reverse justify-end">
                <dt className="mt-2 text-[0.9375rem] leading-snug text-ink-soft">{item.label}</dt>
                <dd className="font-display text-[2.1rem] font-semibold leading-none tracking-tight text-jade-700 sm:text-[2.6rem]">
                  <bdi>{item.value}</bdi>
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-sm text-ink-mute">{stats.source}</p>
        </div>
      </section>

      {/* ── Why China ────────────────────────────────────────── */}
      <section className="section shell">
        <div className="max-w-3xl">
          <h2 className="title-lg">{why.title}</h2>
          <p className="lede mt-4">{why.subtitle}</p>
        </div>
        <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {why.items.map((item, index) => (
            <li key={item.title} className="border-t border-line-strong pt-6">
              <span className="flex size-11 items-center justify-center rounded-xl bg-jade-50 text-jade-600">
                <Icon name={whyIcons[index]} />
              </span>
              <h3 className="title-sm mt-5 font-sans font-semibold">{item.title}</h3>
              <p className="mt-2 text-ink-soft">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Treatments ───────────────────────────────────────── */}
      <section className="section border-y border-line bg-paper-deep/60">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="title-lg">{treatments.title}</h2>
              <p className="lede mt-4">{treatments.subtitle}</p>
            </div>
            <Link href={href(locale, 'treatments')} className="link inline-flex shrink-0 items-center gap-2">
              {treatments.all}
              <Icon name="arrow" flip className="size-[1.1rem]" />
            </Link>
          </div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {treatmentIds.map((id) => (
              <li key={id}>
                <Link
                  href={href(locale, 'treatments', id)}
                  className="card group flex h-full flex-col p-6 transition hover:-translate-y-0.5 hover:border-jade-300 hover:shadow-lift"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-jade-600 text-white transition group-hover:bg-cinnabar">
                    <Icon name={treatmentIcons[id]} />
                  </span>
                  <h3 className="title-sm mt-5 font-sans font-semibold">{dict.treatments.items[id].name}</h3>
                  <p className="mt-2 text-[0.9688rem] leading-relaxed text-ink-soft">{dict.treatments.items[id].summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────── */}
      <section id="how-it-works" className="dark-bg text-white">
        <div className="shell section">
          <div className="max-w-2xl">
            <h2 className="title-lg">{process.title}</h2>
            <p className="mt-4 text-lg text-jade-100">{process.subtitle}</p>
          </div>
          <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {process.steps.map((step, index) => (
              <li key={step.title} className="relative">
                <div className="flex items-center gap-4">
                  <span className="font-display text-[2.6rem] font-medium leading-none text-sand" dir="ltr">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span aria-hidden="true" className="h-px flex-1 bg-white/20" />
                </div>
                <h3 className="title-sm mt-5 font-sans font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-[0.9688rem] leading-relaxed text-jade-100">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Destinations ─────────────────────────────────────── */}
      <section className="section shell">
        <div className="max-w-3xl">
          <h2 className="title-lg">{destinations.title}</h2>
          <p className="lede mt-4">{destinations.subtitle}</p>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cityIds.map((city) => {
            const tags = [...new Set(hospitalsByCity[city].flatMap((hospital) => hospital.tags))].slice(0, 3)
            return (
              <li key={city}>
                <Link
                  href={href(locale, 'hospitals', city)}
                  className="card group flex h-full flex-col p-6 transition hover:-translate-y-0.5 hover:border-jade-300 hover:shadow-lift"
                >
                  <span className="flex items-center gap-2 text-jade-600">
                    <Icon name="pin" className="size-5" />
                  </span>
                  <h3 className="title-md mt-3">{dict.hospitals.cities[city].name}</h3>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <li key={tag} className="rounded-full bg-jade-50 px-2.5 py-1 text-[0.8125rem] font-medium text-jade-800">
                        {dict.hospitals.tags[tag]}
                      </li>
                    ))}
                  </ul>
                </Link>
              </li>
            )
          })}
          <li>
            <Link
              href={href(locale, 'hospitals')}
              className="flex h-full min-h-40 flex-col justify-between rounded-[1.25rem] bg-jade-700 p-6 text-white transition hover:bg-jade-800"
            >
              <Icon name="building" className="size-7 text-jade-200" />
              <span className="mt-6 flex items-center justify-between gap-3 text-lg font-semibold leading-snug">
                {destinations.cta}
                <Icon name="arrow" flip className="size-5 shrink-0" />
              </span>
            </Link>
          </li>
        </ul>
      </section>

      {/* ── Entry ────────────────────────────────────────────── */}
      <section className="section border-y border-line bg-surface">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <h2 className="title-lg">{entry.title}</h2>
            <p className="lede mt-4">{entry.subtitle}</p>
            <Link href={href(locale, 'visa')} className="btn btn-ghost mt-8">
              {entry.cta}
              <Icon name="arrow" flip className="size-5" />
            </Link>
          </div>
          <ul className="divide-y divide-line border-y border-line">
            {entry.items.map((item, index) => (
              <li key={item.title} className="flex gap-5 py-6">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-cinnabar-soft text-cinnabar-deep">
                  <Icon name={entryIcons[index]} />
                </span>
                <div>
                  <h3 className="title-sm font-sans font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-ink-soft">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="pt-20 lg:pt-28">
        <CtaBand locale={locale} dict={dict} />
      </div>
    </>
  )
}
