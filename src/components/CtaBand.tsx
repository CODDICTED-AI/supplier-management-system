import Link from 'next/link'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries'
import { href } from '@/lib/site'
import { Glyph } from './Brand'
import { Icon } from './Icon'

/** Closing call-to-action shown at the bottom of most pages. */
export function CtaBand({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const { cta } = dict.home
  return (
    <section className="relative overflow-hidden bg-cobalt text-white">
      {/* The character 路 ("road") bleeds off the edge as a quiet watermark. */}
      <Glyph
        name="lu"
        className="pointer-events-none absolute -bottom-16 -end-10 hidden size-[26rem] text-white/[0.07] md:block"
      />
      <div className="shell relative grid gap-x-8 gap-y-8 py-16 lg:grid-cols-12 lg:items-end lg:py-24">
        <div className="lg:col-span-8">
          <h2 className="h1">{cta.title}</h2>
          <p className="mt-5 max-w-2xl text-lg text-white/80">{cta.body}</p>
        </div>
        <div className="lg:col-span-4 lg:justify-self-end">
          <Link href={href(locale, 'contact')} className="btn btn-invert">
            {cta.button}
            <Icon name="arrow" flip className="size-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
