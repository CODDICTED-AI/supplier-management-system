import { notFound } from 'next/navigation'

// Any unknown path under a locale renders that locale's translated 404 page.
export default function CatchAll() {
  notFound()
}
