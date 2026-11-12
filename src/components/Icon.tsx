import type { ReactNode, SVGProps } from 'react'

/** Small set of functional line icons (24×24, square caps to match the flat, ruled design). */
const paths = {
  arrow: <path d="M4 12h15M13 6l6 6-6 6" />,
  external: <path d="M7 17L17 7M9 7h8v8" />,
  chevron: <path d="M6 9l6 6 6-6" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  plus: <path d="M12 5v14M5 12h14" />,
  menu: <path d="M4 8h16M4 16h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.8 3 4.2 6 4.2 9s-1.4 6-4.2 9c-2.8-3-4.2-6-4.2-9S9.2 6 12 3z" />
    </>
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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
      className={`${flip ? 'rtl:-scale-x-100 ' : ''}${className}`}
      {...rest}
    >
      {paths[name]}
    </svg>
  )
}
