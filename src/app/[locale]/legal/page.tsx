import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PageHero } from '@/components/PageHero'
import { isLocale, localeMeta } from '@/i18n/config'
import { fill, formatDate, getDictionary } from '@/i18n/dictionaries'
import { pageMetadata, type LocaleParams } from '@/lib/seo'
import { site } from '@/lib/site'

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = await getDictionary(locale)
  return pageMetadata(locale, 'legal', dict.legal.title, dict.legal.sections[0].body)
}

export default async function LegalPage({ params }: LocaleParams) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dict = await getDictionary(locale)
  const l = dict.legal
  const updated = fill(l.updated, { date: formatDate(site.contentReviewed, localeMeta[locale].htmlLang) })

  return (
    <>
      <PageHero eyebrow={dict.footer.legal} title={l.title} intro={updated} />
      <section className="shell section">
        <div className="border-t border-ink">
          {l.sections.map((section) => (
            <section key={section.title} className="grid gap-x-8 gap-y-3 border-b border-rule py-9 lg:grid-cols-12">
              <h2 className="h4 lg:col-span-4">{section.title}</h2>
              <p className="max-w-3xl text-ink-soft lg:col-span-8">{section.body}</p>
            </section>
          ))}
        </div>
      </section>
    </>
  )
}
