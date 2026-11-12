'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

/** Header link that marks itself as the current page. */
export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname()
  const active = pathname === href
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className="relative whitespace-nowrap py-2 text-[0.9688rem] text-ink-soft transition-colors hover:text-ink aria-[current=page]:text-ink aria-[current=page]:after:absolute aria-[current=page]:after:inset-x-0 aria-[current=page]:after:-bottom-[0.6rem] aria-[current=page]:after:h-0.5 aria-[current=page]:after:bg-ink"
    >
      {children}
    </Link>
  )
}
