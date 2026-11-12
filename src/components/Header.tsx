import Link from 'next/link'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries'
import { href, site } from '@/lib/site'
import { Logo } from './Icon'
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
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/85 backdrop-blur-md">
      <div className="shell flex h-[4.5rem] items-center justify-between gap-4">
        <Link href={href(locale)} className="flex shrink-0 items-center gap-2.5" aria-label={site.name}>
          <Logo className="size-9" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-[1.3rem] font-semibold tracking-tight text-ink" lang="en" dir="ltr">
              {site.name}
            </span>
            {locale === 'zh' && <span className="mt-1 text-xs font-medium text-ink-mute">{site.nameZh}</span>}
          </span>
        </Link>

        <nav className="hidden items-center lg:flex" aria-label={dict.nav.menu}>
          {links.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <div className="hidden sm:block">
            <LanguageSwitcher locale={locale} label={dict.nav.language} />
          </div>
          <Link href={cta.href} className="btn btn-primary btn-sm hidden md:inline-flex">
            {cta.label}
          </Link>
          <div className="lg:hidden">
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
