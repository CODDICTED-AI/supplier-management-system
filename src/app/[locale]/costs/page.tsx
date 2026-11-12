import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CtaBand } from '@/components/CtaBand'
import { Icon, type IconName } from '@/components/Icon'
import { PageHero } from '@/components/PageHero'
import { priceRows } from '@/data/prices'
import { isLocale, localeMeta } from '@/i18n/config'
import { fill, formatDate, getDictionary } from '@/i18n/dictionaries'
import { pageMetadata, type LocaleParams } from '@/lib/seo'
import { site } from '@/lib/site'

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = await getDictionary(locale)
  return pageMetadata(locale, 'costs', dict.costs.title, dict.costs.intro)
}

const payIcons: IconName[] = ['card', 'wallet', 'building', 'shield']

export default async function CostsPage({ params }: LocaleParams) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dict = await getDictionary(locale)
  const c = dict.costs
  const reviewed = fill(dict.common.reviewed, { date: formatDate(site.contentReviewed, localeMeta[locale].htmlLang) })

  return (
    <>
      <PageHero eyebrow={dict.nav.costs} title={c.title} intro={c.intro} />

      <section className="shell section">
        <div className="max-w-3xl">
          <h2 className="title-lg">{c.table.title}</h2>
          <p className="mt-4 text-ink-soft">{c.table.caption}</p>
        </div>

        <div className="mt-9 overflow-hidden rounded-[1.25rem] border border-line bg-surface shadow-card">
          <table className="w-full border-collapse text-start">
            <thead className="hidden bg-paper-deep/70 text-[0.8125rem] uppercase tracking-[var(--caps-tracking)] text-ink-mute md:table-header-group">
              <tr>
                <th scope="col" className="px-6 py-4 text-start font-semibold">
                  {c.table.service}
                </th>
                <th scope="col" className="px-6 py-4 text-start font-semibold">
                  {c.table.range}
                </th>
                <th scope="col" className="px-6 py-4 text-start font-semibold">
                  {c.table.note}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {priceRows.map((row) => (
                <tr key={row.id} className="flex flex-col gap-1 px-5 py-5 md:table-row md:p-0">
                  <th scope="row" className="text-start text-[1.0625rem] font-semibold md:w-[34%] md:px-6 md:py-5">
                    {c.table.rows[row.id].name}
                  </th>
                  <td className="md:w-[24%] md:px-6 md:py-5">
                    <bdi dir="ltr" className="font-display text-xl font-semibold whitespace-nowrap text-jade-700">
                      {row.range}
                    </bdi>
                  </td>
                  <td className="text-[0.9688rem] text-ink-soft md:px-6 md:py-5">{c.table.rows[row.id].note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-ink-mute">{reviewed}</p>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="shell section">
          <h2 className="title-lg">{c.pay.title}</h2>
          <ul className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {c.pay.items.map((item, index) => (
              <li key={item.title} className="border-t border-line-strong pt-6">
                <span className="flex size-11 items-center justify-center rounded-xl bg-jade-50 text-jade-600">
                  <Icon name={payIcons[index]} />
                </span>
                <h3 className="title-sm mt-5 font-sans font-semibold">{item.title}</h3>
                <p className="mt-2 text-[0.9688rem] text-ink-soft">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="shell section grid gap-6 lg:grid-cols-2">
        <div className="card p-7 sm:p-9">
          <h2 className="title-md">{c.insurance.title}</h2>
          <ul className="mt-5 space-y-3">
            {c.insurance.points.map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <Icon name="check" className="mt-1 size-[1.05rem] shrink-0 text-jade-600" />
                <span className="text-ink-soft">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card p-7 sm:p-9">
          <h2 className="title-md">{c.factors.title}</h2>
          <ul className="mt-5 space-y-3">
            {c.factors.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span aria-hidden="true" className="mt-[0.7rem] size-1.5 shrink-0 rounded-full bg-cinnabar" />
                <span className="text-ink-soft">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[1.25rem] bg-jade-800 p-7 text-white sm:p-9 lg:col-span-2">
          <h2 className="title-md text-white">{c.fees.title}</h2>
          <p className="mt-3 max-w-3xl text-jade-100">{c.fees.body}</p>
        </div>
      </section>

      <CtaBand locale={locale} dict={dict} />
    </>
  )
}
