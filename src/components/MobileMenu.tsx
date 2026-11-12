'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { localeMeta, locales, type Locale } from '@/i18n/config'
import { Icon } from './Icon'
import { rememberLocale, switchLocalePath } from './LanguageSwitcher'

type Props = {
  locale: Locale
  links: { href: string; label: string }[]
  cta: { href: string; label: string }
  labels: { menu: string; close: string; language: string }
}

export function MobileMenu({ locale, links, cta, labels }: Props) {
  const pathname = usePathname() ?? `/${locale}`
  const [open, setOpen] = useState(false)

  // Lock page scroll while the menu is open.
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? labels.close : labels.menu}
        onClick={() => setOpen((value) => !value)}
        className="-me-2 inline-flex size-11 items-center justify-center text-ink"
      >
        <Icon name={open ? 'close' : 'menu'} className="size-6" />
      </button>

      {open && (
        // Anchored to the sticky header (its positioned ancestor), filling the rest of the viewport.
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full z-40 h-[calc(100dvh-4.25rem)] overflow-y-auto border-t border-rule bg-paper"
        >
          <nav className="shell flex flex-col pb-10 pt-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === link.href ? 'page' : undefined}
                className="flex items-center justify-between border-b border-rule py-4 text-[1.375rem] font-medium tracking-[-0.01em] text-ink aria-[current=page]:text-cobalt"
              >
                {link.label}
                <Icon name="arrow" flip className="size-5 text-ink-mute" />
              </Link>
            ))}

            <Link href={cta.href} onClick={() => setOpen(false)} className="btn btn-primary mt-7">
              {cta.label}
            </Link>

            <p className="label mt-10">{labels.language}</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-6">
              {locales.map((code) => {
                const meta = localeMeta[code]
                const active = code === locale
                return (
                  <li key={code}>
                    <a
                      href={switchLocalePath(pathname, code)}
                      hrefLang={meta.htmlLang}
                      lang={meta.htmlLang}
                      aria-current={active ? 'true' : undefined}
                      onClick={() => rememberLocale(code)}
                      className={`block border-b border-rule py-3 text-base ${active ? 'font-medium text-cobalt' : 'text-ink-soft'}`}
                      style={{ fontFamily: 'var(--ff-system)' }}
                    >
                      {meta.name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}
