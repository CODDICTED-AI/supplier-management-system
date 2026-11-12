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
      className="relative rounded-full px-3 py-2 text-[0.9688rem] font-medium text-ink-soft transition hover:text-jade-700 aria-[current=page]:text-jade-800 aria-[current=page]:after:absolute aria-[current=page]:after:inset-x-3 aria-[current=page]:after:-bottom-0.5 aria-[current=page]:after:h-0.5 aria-[current=page]:after:rounded-full aria-[current=page]:after:bg-cinnabar"
    >
      {children}
    </Link>
  )
}
