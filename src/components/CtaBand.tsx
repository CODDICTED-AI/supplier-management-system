import Link from 'next/link'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries'
import { href } from '@/lib/site'
import { Icon } from './Icon'

/** Closing call-to-action shown at the bottom of most pages. */
export function CtaBand({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const { cta } = dict.home
  return (
    <section className="shell pb-20 lg:pb-28">
      <div className="dark-bg relative overflow-hidden rounded-[2rem] px-6 py-14 text-center text-white sm:px-12 lg:py-20">
        <h2 className="title-lg mx-auto max-w-2xl">{cta.title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-jade-100">{cta.body}</p>
        <Link href={href(locale, 'contact')} className="btn btn-light mt-9">
          {cta.button}
          <Icon name="arrow" flip className="size-5" />
        </Link>
      </div>
    </section>
  )
}
