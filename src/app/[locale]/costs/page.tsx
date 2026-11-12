import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CtaBand } from '@/components/CtaBand'
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

export default async function CostsPage({ params }: LocaleParams) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dict = await getDictionary(locale)
  const c = dict.costs
  const reviewed = fill(dict.common.reviewed, { date: formatDate(site.contentReviewed, localeMeta[locale].htmlLang) })

  return (
    <>
      <PageHero eyebrow={dict.nav.costs} title={c.title} intro={c.intro} />

      {/* Price table */}
      <section className="shell section">
        <div className="grid gap-x-8 gap-y-4 lg:grid-cols-12">
          <h2 className="h2 lg:col-span-5">{c.table.title}</h2>
          <p className="text-ink-soft lg:col-span-6 lg:col-start-7 lg:pt-2">{c.table.caption}</p>
        </div>

        <table className="mt-12 w-full border-collapse border-t border-ink text-start">
          <thead className="hidden md:table-header-group">
            <tr className="border-b border-rule">
              <th scope="col" className="label py-3.5 pe-8 text-start">
                {c.table.service}
              </th>
              <th scope="col" className="label py-3.5 pe-8 text-start">
                {c.table.range}
              </th>
              <th scope="col" className="label py-3.5 text-start">
                {c.table.note}
              </th>
            </tr>
          </thead>
          <tbody>
            {priceRows.map((row) => (
              <tr key={row.id} className="flex flex-col gap-1.5 border-b border-rule py-5 md:table-row md:py-0">
                <th scope="row" className="text-start text-[1.0625rem] font-medium md:w-[36%] md:py-5 md:pe-8">
                  {c.table.rows[row.id].name}
                </th>
                <td className="md:w-[26%] md:py-5 md:pe-8">
                  <bdi dir="ltr" className="font-mono text-[1.0625rem] font-medium whitespace-nowrap text-cobalt">
                    {row.range}
                  </bdi>
                </td>
                <td className="text-[0.9375rem] text-ink-soft md:py-5">{c.table.rows[row.id].note}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-4 text-sm text-ink-mute">{reviewed}</p>
      </section>

      {/* Payment methods */}
      <section className="bg-wash">
        <div className="shell section">
          <h2 className="h2">{c.pay.title}</h2>
          <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {c.pay.items.map((item, index) => (
              <li key={item.title} className="border-t border-ink pt-6">
                <span className="font-mono text-sm font-medium text-cobalt" dir="ltr">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="h4 mt-4">{item.title}</h3>
                <p className="mt-2 text-[0.9688rem] text-ink-soft">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Insurance and cost factors */}
      <section className="shell section">
        <div className="grid gap-x-8 gap-y-14 lg:grid-cols-2">
          <div className="border-t border-ink pt-6">
            <h2 className="h3">{c.insurance.title}</h2>
            <ul className="mt-6 space-y-3 text-ink-soft">
              {c.insurance.points.map((point) => (
                <li key={point} className="tick">
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-ink pt-6">
            <h2 className="h3">{c.factors.title}</h2>
            <ul className="mt-6 space-y-3 text-ink-soft">
              {c.factors.items.map((item) => (
                <li key={item} className="tick">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-3 border border-ink p-7 sm:p-9 lg:grid-cols-12">
          <h2 className="h4 lg:col-span-4">{c.fees.title}</h2>
          <p className="text-ink-soft lg:col-span-8">{c.fees.body}</p>
        </div>
      </section>

      <CtaBand locale={locale} dict={dict} />
    </>
  )
}
