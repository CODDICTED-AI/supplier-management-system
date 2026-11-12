import Link from 'next/link'
import { localeMeta, locales, type Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries'
import { href, site } from '@/lib/site'
import { Wordmark } from './Brand'

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const explore = [
    { href: href(locale, 'treatments'), label: dict.nav.treatments },
    { href: href(locale, 'hospitals'), label: dict.nav.hospitals },
    { href: href(locale, 'visa'), label: dict.nav.visa },
    { href: href(locale, 'costs'), label: dict.nav.costs },
  ]
  const support = [
    { href: href(locale, 'faq'), label: dict.nav.faq },
    { href: href(locale, 'contact'), label: dict.nav.contact },
    { href: href(locale, 'legal'), label: dict.footer.legal },
  ]

  return (
    <footer className="border-t border-ink">
      <div className="shell grid gap-x-8 gap-y-12 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:py-16">
        <div className="sm:col-span-2 lg:col-span-5">
          <Link href={href(locale)} className="inline-block" aria-label={site.name}>
            <Wordmark showChinese={locale === 'zh'} />
          </Link>
          <p className="mt-5 max-w-xs text-ink-soft">{dict.footer.tagline}</p>
        </div>

        <FooterColumn title={dict.footer.explore} links={explore} className="lg:col-span-2" />
        <FooterColumn title={dict.footer.support} links={support} className="lg:col-span-2" />

        <div className="sm:col-span-2 lg:col-span-3">
          <h2 className="label">{dict.nav.language}</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-[0.9375rem]">
            {locales.map((code) => (
              <li key={code}>
                <a
                  href={href(code)}
                  hrefLang={localeMeta[code].htmlLang}
                  lang={localeMeta[code].htmlLang}
                  className={`transition-colors hover:text-cobalt ${code === locale ? 'font-medium text-ink' : 'text-ink-soft'}`}
                  style={{ fontFamily: 'var(--ff-system)' }}
                >
                  {localeMeta[code].name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="shell">
        <div className="flex flex-col gap-3 border-t border-rule py-7 text-sm text-ink-mute lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <p className="max-w-3xl">{dict.footer.disclaimer}</p>
          <p className="shrink-0">
            © {new Date().getFullYear()} <span dir="ltr">{site.name}</span>. {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  links,
  className = '',
}: {
  title: string
  links: { href: string; label: string }[]
  className?: string
}) {
  return (
    <div className={className}>
      <h2 className="label">{title}</h2>
      <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-ink-soft transition-colors hover:text-cobalt">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
