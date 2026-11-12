import Link from 'next/link'
import { locale as rootLocale } from 'next/root-params'
import { Icon } from '@/components/Icon'
import { defaultLocale, isLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { href } from '@/lib/site'

export default async function NotFound() {
  const param = await rootLocale()
  const locale = isLocale(param) ? param : defaultLocale
  const dict = await getDictionary(locale)

  return (
    <section className="shell flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="font-mono text-lg font-medium text-cobalt" dir="ltr">
        404
      </p>
      <h1 className="h1 mt-5">{dict.notFound.title}</h1>
      <p className="lede mt-5 max-w-xl">{dict.notFound.body}</p>
      <Link href={href(locale)} className="btn btn-primary mt-10">
        {dict.notFound.cta}
        <Icon name="arrow" flip className="size-5" />
      </Link>
    </section>
  )
}
