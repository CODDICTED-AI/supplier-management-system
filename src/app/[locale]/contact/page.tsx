import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/Icon'
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
  const hasDirect = Boolean(email || whatsapp || wechat)

  return (
    <>
      <PageHero eyebrow={dict.nav.contact} title={c.title} intro={c.intro} />

      <section className="shell section grid gap-10 lg:grid-cols-[1.45fr_1fr] lg:gap-14">
        <InquiryForm
          locale={locale}
          labels={c.form}
          legalHref={href(locale, 'legal')}
          treatments={treatmentIds.map((id) => ({ value: id, label: dict.treatments.items[id].name }))}
          cities={cityIds.map((id) => ({ value: id, label: dict.hospitals.cities[id].name }))}
        />

        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-[1.25rem] bg-jade-800 p-7 text-white sm:p-8">
            <h2 className="title-sm font-sans font-semibold text-white">{c.aside.title}</h2>
            <ol className="mt-5 space-y-5">
              {c.aside.steps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-sand" dir="ltr">
                    {index + 1}
                  </span>
                  <span className="text-[0.9688rem] text-jade-100">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <p className="flex gap-3.5 rounded-2xl border border-line-strong bg-paper-deep/70 p-5 text-[0.9375rem] text-ink-soft">
            <Icon name="shield" className="mt-0.5 size-5 shrink-0 text-jade-700" />
            <span>{c.aside.privacy}</span>
          </p>

          {hasDirect && (
            <div className="card p-7">
              <h2 className="title-sm font-sans font-semibold">{c.aside.directTitle}</h2>
              <ul className="mt-4 space-y-3.5 text-[0.9688rem]">
                {email && (
                  <li className="flex items-center gap-3">
                    <Icon name="mail" className="size-5 shrink-0 text-jade-600" />
                    <span className="text-ink-mute">{c.aside.email}</span>
                    <a href={`mailto:${email}`} className="link" dir="ltr">
                      {email}
                    </a>
                  </li>
                )}
                {whatsapp && (
                  <li className="flex items-center gap-3">
                    <Icon name="message" className="size-5 shrink-0 text-jade-600" />
                    <span className="text-ink-mute">{c.aside.whatsapp}</span>
                    <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="link" dir="ltr">
                      +{whatsapp}
                    </a>
                  </li>
                )}
                {wechat && (
                  <li className="flex items-center gap-3">
                    <Icon name="message" className="size-5 shrink-0 text-jade-600" />
                    <span className="text-ink-mute">{c.aside.wechat}</span>
                    <span className="font-semibold" dir="ltr">
                      {wechat}
                    </span>
                  </li>
                )}
              </ul>
            </div>
          )}
        </aside>
      </section>
    </>
  )
}
