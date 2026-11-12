import Link from 'next/link'
import { localeMeta, locales, type Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries'
import { href, site } from '@/lib/site'
import { Logo } from './Icon'

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
    <footer className="bg-jade-950 text-jade-100">
      <div className="shell grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] lg:gap-20">
        <div>
          <Link href={href(locale)} className="inline-flex items-center gap-2.5">
            <Logo className="size-9" />
            <span className="font-display text-[1.3rem] font-semibold tracking-tight text-white" lang="en" dir="ltr">
              {site.name}
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-jade-200">{dict.footer.tagline}</p>

          <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label={dict.nav.language}>
            {locales.map((code) => (
              <li key={code}>
                <a
                  href={href(code)}
                  hrefLang={localeMeta[code].htmlLang}
                  lang={localeMeta[code].htmlLang}
                  className={`transition hover:text-white ${code === locale ? 'font-semibold text-white' : 'text-jade-300'}`}
                  style={{ fontFamily: 'var(--ff-system)' }}
                >
                  {localeMeta[code].name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <FooterColumn title={dict.footer.explore} links={explore} />
        <FooterColumn title={dict.footer.support} links={support} />
      </div>

      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-3 py-8 text-sm text-jade-300 md:flex-row md:items-start md:justify-between md:gap-10">
          <p className="max-w-3xl">{dict.footer.disclaimer}</p>
          <p className="shrink-0">
            © {new Date().getFullYear()} <span dir="ltr">{site.name}</span>. {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-[var(--caps-tracking)] text-jade-300 [font-family:var(--ff-body)]">
        {title}
      </h2>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-white/90 transition hover:text-white hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
