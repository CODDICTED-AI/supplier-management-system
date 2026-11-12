import type { ReactNode, SVGProps } from 'react'

/** Minimal line-icon set (24×24, 1.6 stroke) drawn for this site. */
const paths = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  chevron: <path d="M6 9l6 6 6-6" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.8 3 4.2 6 4.2 9s-1.4 6-4.2 9c-2.8-3-4.2-6-4.2-9S9.2 6 12 3z" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4.5" width="14" height="16" rx="2.5" />
      <path d="M9 4.5V4a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 4v.5M9 13l2.2 2.2 4-4.2" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </>
  ),
  leaf: <path d="M5 19c0-8.5 5-13.5 14.5-14.5C19.5 14 15 19 7.5 19H5zm0 0c2.6-4.6 5.8-7.8 10-10" />,
  tooth: (
    <path d="M8 3.5C5.5 3.5 4 5.3 4 7.8c0 2 .8 3.3 1.2 5.2.5 2.3.7 7.5 2.4 7.5 1.7 0 1.6-5 4.4-5s2.7 5 4.4 5c1.7 0 1.9-5.2 2.4-7.5.4-1.9 1.2-3.2 1.2-5.2 0-2.5-1.5-4.3-4-4.3-1.5 0-2.2.8-4 .8s-2.5-.8-4-.8z" />
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  bone: (
    <path
      transform="rotate(-45 12 12)"
      d="M7.5 10.4A2.3 2.3 0 1 0 4 12a2.3 2.3 0 1 0 3.5 1.6h9A2.3 2.3 0 1 0 20 12a2.3 2.3 0 1 0-3.5-1.6z"
    />
  ),
  heart: (
    <>
      <path d="M12 20.5s-8-4.9-8-11a4.5 4.5 0 0 1 8-2.8 4.5 4.5 0 0 1 8 2.8c0 6.1-8 11-8 11z" />
      <path d="M7 12h2.2l1.3-2.4 2.2 4.6 1.3-2.2H17" />
    </>
  ),
  video: (
    <>
      <rect x="3" y="6" width="13" height="12" rx="2.5" />
      <path d="M16 10.5l5-3v9l-5-3" />
    </>
  ),
  building: (
    <path d="M4 20.5V6a1.5 1.5 0 0 1 1.5-1.5h9A1.5 1.5 0 0 1 16 6v14.5M16 10h2.5A1.5 1.5 0 0 1 20 11.5v9M2.5 20.5h19M10 7.5v4M8 9.5h4M8 20.5v-4h4v4" />
  ),
  passport: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2.5" />
      <circle cx="12" cy="10.5" r="3" />
      <path d="M9 16.5h6" />
    </>
  ),
  card: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
      <path d="M3 10h18M7 14.5h3" />
    </>
  ),
  send: <path d="M21 3.5L2.5 10.5l7 3 3 7L21 3.5zM9.5 13.5L21 3.5" />,
  message: <path d="M20 12a7.5 7.5 0 0 1-11 6.6L4.5 20l1.3-4.2A7.5 7.5 0 1 1 20 12z" />,
  shield: (
    <>
      <path d="M12 3l7.5 3v5.5c0 4.6-3.1 8-7.5 9.5-4.400-1.500-7.500-4.900-7.500-9.500V6L12 3z" />
      <path d="M9 12l2.200 2.200 4-4.200" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3.500 7.500l8.500 6 8.500-6" />
    </>
  ),
  sparkle: <path d="M12 3.500l1.900 5.300 5.600 1.900-5.600 1.900L12 18l-1.900-5.400-5.600-1.900 5.600-1.900L12 3.500z" />,
  users: (
    <path d="M8.500 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM2.500 19.500c0-3 2.700-5 6-5s6 2 6 5M16 11a2.600 2.600 0 1 0-.9-5M17 14.700c2.600.4 4.500 2.200 4.500 4.800" />
  ),
  pin: (
    <>
      <path d="M12 21s-6.500-5.600-6.500-11a6.500 6.500 0 0 1 13 0c0 5.400-6.500 11-6.500 11z" />
      <circle cx="12" cy="10" r="2.300" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5.500M12 7.700v.2" />
    </>
  ),
  wallet: (
    <>
      <path d="M4 7.500A2.500 2.500 0 0 1 6.500 5H17a2 2 0 0 1 2 2v1.500" />
      <path d="M4 7.500V17a2.500 2.500 0 0 0 2.500 2.500h11A2.500 2.500 0 0 0 20 17v-6a2.500 2.500 0 0 0-2.500-2.500h-11A2.500 2.500 0 0 1 4 7.500z" />
      <path d="M16 14h.2" />
    </>
  ),
  plane: (
    <path d="M10.500 13.500L3 11l1-2 6.500 1 4.700-5.400c.9-1 2.400-1.200 3.300-.3.900.9.700 2.400-.3 3.300L12.800 12l1 6.500-2 1-2.500-7.500L6 15.500" />
  ),
} satisfies Record<string, ReactNode>

export type IconName = keyof typeof paths

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName
  /** Mirror the icon in right-to-left layouts (use for directional icons such as arrows). */
  flip?: boolean
}

export function Icon({ name, flip, className = '', ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={`${flip ? 'rtl:-scale-x-100 ' : ''}${className}`}
      {...rest}
    >
      {paths[name]}
    </svg>
  )
}

/** Brand mark: a cinnabar seal with a cross whose arm continues as a path ("yi lu" — the road to care). */
export function Logo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true" focusable="false" className={className}>
      <rect width="40" height="40" rx="11" fill="#c0442c" />
      <rect x="3.500" y="3.500" width="33" height="33" rx="8" fill="none" stroke="#fff" strokeOpacity="0.28" />
      <path
        d="M20 10.500v19M10.500 20h13c3.300 0 6 2.700 6 6v3.500"
        fill="none"
        stroke="#fff"
        strokeWidth="3.600"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
