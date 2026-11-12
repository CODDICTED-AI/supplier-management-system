import Link from 'next/link'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries'
import { href, site } from '@/lib/site'
import { Wordmark } from './Brand'
import { LanguageSwitcher } from './LanguageSwitcher'
import { MobileMenu } from './MobileMenu'
import { NavLink } from './NavLink'

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const links = [
    { href: href(locale, 'treatments'), label: dict.nav.treatments },
    { href: href(locale, 'hospitals'), label: dict.nav.hospitals },
    { href: href(locale, 'visa'), label: dict.nav.visa },
    { href: href(locale, 'costs'), label: dict.nav.costs },
    { href: href(locale, 'faq'), label: dict.nav.faq },
  ]
  const cta = { href: href(locale, 'contact'), label: dict.nav.cta }

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper">
      <div className="shell flex h-[4.25rem] items-center justify-between gap-6">
        <Link href={href(locale)} className="shrink-0" aria-label={site.name}>
          <Wordmark showChinese={locale === 'zh'} />
        </Link>

        <nav className="hidden items-center gap-8 xl:flex" aria-label={dict.nav.menu}>
          {links.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <div className="hidden sm:block">
            <LanguageSwitcher locale={locale} label={dict.nav.language} />
          </div>
          <Link href={cta.href} className="btn btn-primary btn-sm hidden whitespace-nowrap md:inline-flex">
            {cta.label}
          </Link>
          <div className="xl:hidden">
            <MobileMenu
              locale={locale}
              links={[...links, { href: href(locale, 'contact'), label: dict.nav.contact }]}
              cta={cta}
              labels={{ menu: dict.nav.menu, close: dict.nav.close, language: dict.nav.language }}
            />
          </div>
        </div>
      </div>
    </header>
  )
}
