import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Glyph } from '@/components/Brand'
import { CtaBand } from '@/components/CtaBand'
import { Icon } from '@/components/Icon'
import { cityAirports, cityIds, hospitalsByCity } from '@/data/hospitals'
import { treatmentIds } from '@/data/treatments'
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

const two = (n: number) => String(n).padStart(2, '0')

/** Cell borders of the key-figures row: 2×2 on small screens, one row of four on large ones. */
const statCell = [
  'border-b border-rule pe-5 xl:border-b-0 xl:pe-8',
  'border-b border-s border-rule ps-5 xl:border-b-0 xl:px-8',
  'pe-5 xl:border-s xl:border-rule xl:px-8',
  'border-s border-rule ps-5 xl:ps-8',
]

export default async function HomePage({ params }: LocaleParams) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dict = await getDictionary(locale)
  const { hero, stats, why, treatments, process, destinations, entry } = dict.home

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section>
        <div className="shell grid gap-x-8 gap-y-12 pb-14 pt-12 lg:grid-cols-12 lg:pb-20 lg:pt-20">
          <div className="lg:col-span-8">
            <p className="label flex items-center gap-3">
              <span aria-hidden="true" className="size-2 bg-seal" />
              {hero.eyebrow}
            </p>
            <h1 className="display mt-7">{hero.title}</h1>
            <p className="lede mt-8 max-w-[38rem]">{hero.subtitle}</p>

            <div className="mt-10 flex flex-col gap-x-9 gap-y-6 sm:flex-row sm:items-center">
              <Link href={href(locale, 'contact')} className="btn btn-primary">
                {hero.primary}
                <Icon name="arrow" flip className="size-5" />
              </Link>
              <Link href="#how-it-works" className="golink self-start sm:self-auto">
                {hero.secondary}
              </Link>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-2 text-[0.9375rem] text-ink-soft">
              {hero.notes.map((note) => (
                <li key={note} className="flex items-center gap-2">
                  <Icon name="check" className="size-4 text-cobalt" />
                  {note}
                </li>
              ))}
            </ul>
          </div>

          {/* The brand name, spelled out: 医 (medicine) + 路 (road). Chinese reads left to right, so the
              side-by-side pair keeps that order in right-to-left layouts too. */}
          <div className="flex gap-10 border-t border-rule pt-8 lg:col-span-4 lg:flex-col lg:items-end lg:gap-5 lg:border-t-0 lg:pt-0 max-lg:rtl:flex-row-reverse max-lg:rtl:justify-end">
            {(['yi', 'lu'] as const).map((name) => (
              <figure key={name} className="flex flex-col gap-3 lg:flex-row lg:items-end lg:gap-5">
                <Glyph name={name} className="size-[4.5rem] shrink-0 text-cobalt sm:size-24 lg:order-2 lg:size-[12.5rem] xl:size-[14.5rem]" />
                <figcaption className="lg:order-1 lg:pb-4 lg:text-end">
                  <span className="block font-mono text-lg leading-tight text-cobalt" dir="ltr">
                    {name === 'yi' ? 'yī' : 'lù'}
                  </span>
                  <span className="label mt-1 block">{hero.glyphs[name]}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Key figures */}
        <div className="shell">
          <dl className="grid grid-cols-2 border-t border-ink xl:grid-cols-4">
            {stats.items.map((item, index) => (
              <div key={item.label} className={`flex flex-col-reverse justify-end py-7 lg:py-9 ${statCell[index]}`}>
                <dt className="mt-3 text-[0.9375rem] leading-snug text-ink-soft">{item.label}</dt>
                <dd className="text-[2.125rem] leading-none tracking-[-0.03em] sm:text-5xl xl:text-[3.25rem]">
                  <bdi>{item.value}</bdi>
                </dd>
              </div>
            ))}
          </dl>
          <p className="border-t border-rule py-4 text-sm text-ink-mute">{stats.source}</p>
        </div>
      </section>

      {/* ── Why China ────────────────────────────────────────── */}
      <section className="shell section">
        <div className="grid gap-x-8 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="h2">{why.title}</h2>
            <p className="mt-5 text-ink-soft lg:max-w-xs">{why.subtitle}</p>
          </div>
          <ul className="grid gap-x-8 border-b border-rule sm:grid-cols-2 lg:col-span-8">
            {why.items.map((item) => (
              <li key={item.title} className="border-t border-rule py-6">
                <h3 className="h4">{item.title}</h3>
                <p className="mt-2 text-[0.9688rem] text-ink-soft">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Treatments ───────────────────────────────────────── */}
      <section className="border-t border-rule">
        <div className="shell section">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="h2">{treatments.title}</h2>
              <p className="mt-4 text-ink-soft">{treatments.subtitle}</p>
            </div>
            <Link href={href(locale, 'treatments')} className="golink shrink-0 self-start md:self-auto">
              {treatments.all}
              <Icon name="arrow" flip className="size-[1.125rem]" />
            </Link>
          </div>

          <ul className="mt-12 border-t border-ink">
            {treatmentIds.map((id, index) => (
              <li key={id} className="border-b border-rule">
                <Link
                  href={href(locale, 'treatments', id)}
                  className="group grid grid-cols-[2.25rem_minmax(0,1fr)_1.25rem] items-baseline gap-x-4 gap-y-2 py-6 lg:grid-cols-12 lg:gap-x-8 lg:py-7"
                >
                  <span className="label lg:col-span-1" dir="ltr">
                    {two(index + 1)}
                  </span>
                  <h3 className="h3 transition-colors group-hover:text-cobalt lg:col-span-4">
                    {dict.treatments.items[id].name}
                  </h3>
                  <p className="col-start-2 text-[0.9688rem] text-ink-soft lg:col-span-6 lg:col-start-auto">
                    {dict.treatments.items[id].summary}
                  </p>
                  <Icon
                    name="arrow"
                    flip
                    className="col-start-3 row-start-1 size-5 self-center justify-self-end text-ink-mute transition-colors group-hover:text-cobalt lg:col-start-12"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────── */}
      <section id="how-it-works" className="bg-indigo text-white">
        <div className="shell section">
          <div className="grid gap-x-8 gap-y-4 lg:grid-cols-12">
            <h2 className="h2 lg:col-span-5">{process.title}</h2>
            <p className="text-lg text-white/70 lg:col-span-5 lg:col-start-8 lg:pt-2">{process.subtitle}</p>
          </div>

          {/* A route with five stops: a vertical line on small screens, horizontal on large ones. */}
          <ol className="mt-14 grid lg:mt-20 lg:grid-cols-5">
            {process.steps.map((step, index) => (
              <li
                key={step.title}
                className="relative border-s border-white/25 pb-10 ps-7 last:pb-0 lg:border-s-0 lg:border-t lg:pb-0 lg:pe-8 lg:ps-0 lg:pt-8"
              >
                <span
                  aria-hidden="true"
                  className={`absolute -start-[5px] top-[5px] size-[9px] rounded-full lg:-top-[5px] lg:start-0 ${
                    index === 0 ? 'bg-seal' : 'bg-white'
                  }`}
                />
                <p className="label text-white/55">{step.when}</p>
                <h3 className="h4 mt-3 text-white">{step.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-white/70">{step.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-12 text-sm text-white/50">{process.note}</p>
        </div>
      </section>

      {/* ── Destinations ─────────────────────────────────────── */}
      <section className="shell section">
        <div className="grid gap-x-8 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="h2">{destinations.title}</h2>
            <p className="mt-5 text-ink-soft lg:max-w-xs">{destinations.subtitle}</p>
            <Link href={href(locale, 'hospitals')} className="golink mt-8">
              {destinations.cta}
              <Icon name="arrow" flip className="size-[1.125rem]" />
            </Link>
          </div>

          <ul className="border-t border-ink lg:col-span-8">
            {cityIds.map((city) => {
              const tags = [...new Set(hospitalsByCity[city].flatMap((hospital) => hospital.tags))].slice(0, 3)
              return (
                <li key={city} className="border-b border-rule">
                  <Link
                    href={href(locale, 'hospitals', city)}
                    className="group grid grid-cols-[3rem_minmax(0,1fr)_1.25rem] items-baseline gap-x-4 gap-y-1 py-5 sm:grid-cols-[3.5rem_minmax(0,0.8fr)_minmax(0,1.5fr)_1.25rem] sm:gap-x-6"
                  >
                    <span className="font-mono text-sm font-medium text-cobalt" dir="ltr">
                      {cityAirports[city]}
                    </span>
                    <h3 className="h3 transition-colors group-hover:text-cobalt">{dict.hospitals.cities[city].name}</h3>
                    <p className="col-start-2 text-[0.9375rem] text-ink-soft sm:col-start-3 sm:row-start-1">
                      {tags.map((tag) => dict.hospitals.tags[tag]).join(' · ')}
                    </p>
                    <Icon
                      name="arrow"
                      flip
                      className="col-start-3 row-start-1 size-5 self-center justify-self-end text-ink-mute transition-colors group-hover:text-cobalt sm:col-start-4"
                    />
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* ── Entry ────────────────────────────────────────────── */}
      <section className="bg-wash">
        <div className="shell section">
          <div className="grid gap-x-8 gap-y-4 lg:grid-cols-12">
            <h2 className="h2 lg:col-span-6">{entry.title}</h2>
            <p className="text-lg text-ink-soft lg:col-span-5 lg:col-start-8 lg:pt-2">{entry.subtitle}</p>
          </div>
          <ol className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-3 lg:mt-16">
            {entry.items.map((item, index) => (
              <li key={item.title} className="border-t border-ink pt-6">
                <span className="font-mono text-sm font-medium text-cobalt" dir="ltr">
                  {two(index + 1)}
                </span>
                <h3 className="h3 mt-4">{item.title}</h3>
                <p className="mt-3 text-ink-soft">{item.body}</p>
              </li>
            ))}
          </ol>
          <Link href={href(locale, 'visa')} className="golink mt-12">
            {entry.cta}
            <Icon name="arrow" flip className="size-[1.125rem]" />
          </Link>
        </div>
      </section>

      <CtaBand locale={locale} dict={dict} />
    </>
  )
}
