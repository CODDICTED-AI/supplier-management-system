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
        className="inline-flex size-11 items-center justify-center rounded-full border border-line-strong bg-white/60 text-ink"
      >
        <Icon name={open ? 'close' : 'menu'} />
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-[4.5rem] z-40 overflow-y-auto border-t border-line bg-paper"
        >
          <nav className="shell flex flex-col gap-1 py-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === link.href ? 'page' : undefined}
                className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-xl font-semibold text-ink aria-[current=page]:bg-jade-50 aria-[current=page]:text-jade-800"
              >
                {link.label}
                <Icon name="arrow" flip className="size-5 text-ink-mute" />
              </Link>
            ))}

            <Link href={cta.href} onClick={() => setOpen(false)} className="btn btn-primary mt-5">
              {cta.label}
            </Link>

            <p className="mt-8 px-1 text-sm font-semibold uppercase tracking-[var(--caps-tracking)] text-ink-mute">
              {labels.language}
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-2">
              {locales.map((code) => {
                const meta = localeMeta[code]
                const active = code === locale
                return (
                  <li key={code}>
                    <a
                      href={switchLocalePath(pathname, code)}
                      hrefLang={meta.htmlLang}
                      lang={meta.htmlLang}
                      dir={meta.dir}
                      aria-current={active ? 'true' : undefined}
                      onClick={() => rememberLocale(code)}
                      className={`block rounded-xl border px-3 py-2.5 text-center text-[0.9375rem] ${
                        active
                          ? 'border-jade-600 bg-jade-50 font-semibold text-jade-800'
                          : 'border-line bg-white text-ink-soft'
                      }`}
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
