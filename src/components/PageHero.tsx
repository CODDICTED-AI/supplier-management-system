import type { ReactNode } from 'react'

/** Title block used at the top of every inner page. */
export function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children?: ReactNode }) {
  return (
    <section className="hero-bg border-b border-line">
      <div className="shell py-14 lg:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="title-xl mt-5 max-w-4xl">{title}</h1>
        <p className="lede mt-6 max-w-3xl">{intro}</p>
        {children}
      </div>
    </section>
  )
}
