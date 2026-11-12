import type { ReactNode } from 'react'

/** Title block used at the top of every inner page. */
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string
  title: string
  intro: string
  children?: ReactNode
}) {
  return (
    <section className="border-b border-rule">
      <div className="shell pb-12 pt-12 lg:pb-16 lg:pt-20">
        <p className="label flex items-center gap-3">
          <span aria-hidden="true" className="size-2 bg-seal" />
          {eyebrow}
        </p>
        <h1 className="h1 mt-6 max-w-4xl">{title}</h1>
        <p className="lede mt-6 max-w-3xl">{intro}</p>
        {children}
      </div>
    </section>
  )
}
