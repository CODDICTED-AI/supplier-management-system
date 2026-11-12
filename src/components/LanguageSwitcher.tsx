'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useId, useRef, useState } from 'react'
import { LOCALE_COOKIE, localeMeta, locales, type Locale } from '@/i18n/config'
import { Icon } from './Icon'

/** Swaps the locale prefix of the current path, keeping the rest of the URL. */
export function switchLocalePath(pathname: string, target: Locale): string {
  const segments = pathname.split('/')
  // segments[0] is "" and segments[1] is the current locale.
  segments[1] = target
  return segments.join('/') || `/${target}`
}

export function rememberLocale(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`
}

export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname() ?? `/${locale}`
  const [open, setOpen] = useState(false)
  const root = useRef<HTMLDivElement>(null)
  const menuId = useId()

  useEffect(() => {
    if (!open) return
    const onPointer = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={root} className="relative">
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`${label}: ${localeMeta[locale].name}`}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-10 items-center gap-2 whitespace-nowrap text-[0.9375rem] text-ink-soft transition-colors hover:text-ink"
      >
        <Icon name="globe" className="size-[1.125rem]" />
        <span>{localeMeta[locale].name}</span>
        <Icon name="chevron" className={`size-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <ul id={menuId} className="absolute end-0 top-[calc(100%+0.75rem)] z-50 w-56 border border-ink bg-paper py-1.5">
          {locales.map((code) => {
            const meta = localeMeta[code]
            const active = code === locale
            return (
              <li key={code}>
                {/* A plain link (full navigation) so the new <html lang/dir> is applied cleanly. */}
                <a
                  href={switchLocalePath(pathname, code)}
                  hrefLang={meta.htmlLang}
                  lang={meta.htmlLang}
                  aria-current={active ? 'true' : undefined}
                  onClick={() => rememberLocale(code)}
                  className={`flex items-center justify-between gap-3 px-4 py-2 text-[0.9375rem] transition-colors ${
                    active ? 'font-medium text-cobalt' : 'text-ink-soft hover:bg-wash hover:text-ink'
                  }`}
                  style={{ fontFamily: 'var(--ff-system)' }}
                >
                  <span>{meta.name}</span>
                  {active && <Icon name="check" className="size-4" />}
                </a>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
