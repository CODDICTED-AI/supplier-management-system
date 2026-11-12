import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { InquiryForm } from '@/components/InquiryForm'
import { PageHero } from '@/components/PageHero'
import { cityIds } from '@/data/hospitals'
import { treatmentIds } from '@/data/treatments'
import { isLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { pageMetadata, type LocaleParams } from '@/lib/seo'
import { href, site } from '@/lib/site'

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = await getDictionary(locale)
  return pageMetadata(locale, 'contact', dict.contact.title, dict.contact.intro)
}

export default async function ContactPage({ params }: LocaleParams) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dict = await getDictionary(locale)
  const c = dict.contact
  const { email, whatsapp, wechat } = site.contact

  const direct = [
    email && { label: c.aside.email, value: email, link: `mailto:${email}` },
    whatsapp && { label: c.aside.whatsapp, value: `+${whatsapp}`, link: `https://wa.me/${whatsapp}` },
    wechat && { label: c.aside.wechat, value: wechat, link: null },
  ].filter((item): item is { label: string; value: string; link: string | null } => Boolean(item))

  return (
    <>
      <PageHero eyebrow={dict.nav.contact} title={c.title} intro={c.intro} />

      <section className="shell section grid gap-x-8 gap-y-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <InquiryForm
            locale={locale}
            labels={c.form}
            legalHref={href(locale, 'legal')}
            treatments={treatmentIds.map((id) => ({ value: id, label: dict.treatments.items[id].name }))}
            cities={cityIds.map((id) => ({ value: id, label: dict.hospitals.cities[id].name }))}
          />
        </div>

        <aside className="space-y-10 lg:col-span-4 lg:col-start-9">
          <div>
            <h2 className="h3">{c.aside.title}</h2>
            <ol className="mt-6 border-t border-ink">
              {c.aside.steps.map((step, index) => (
                <li key={step} className="flex gap-5 border-b border-rule py-4">
                  <span className="pt-0.5 font-mono text-sm font-medium text-cobalt" dir="ltr">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[0.9688rem] text-ink-soft">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <p className="border-s-2 border-cobalt ps-5 text-[0.9375rem] text-ink-soft">{c.aside.privacy}</p>

          {direct.length > 0 && (
            <div>
              <h2 className="h4">{c.aside.directTitle}</h2>
              <dl className="mt-4 border-t border-rule text-[0.9688rem]">
                {direct.map((item) => (
                  <div key={item.label} className="flex items-baseline justify-between gap-6 border-b border-rule py-3.5">
                    <dt className="label">{item.label}</dt>
                    <dd dir="ltr">
                      {item.link ? (
                        <a
                          href={item.link}
                          className="link"
                          {...(item.link.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="font-medium">{item.value}</span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </aside>
      </section>
    </>
  )
}
