/**
 * Indicative private-pay price ranges in China, in US dollars.
 *
 * Compiled from public reporting in 2026 (hospital and media figures differ widely).
 * These are orientation values only — review them regularly and update
 * `site.contentReviewed` when you do.
 */
export const priceRows = [
  { id: 'checkup', range: '$300 – $1,200' },
  { id: 'mri', range: '$100 – $500' },
  { id: 'implant', range: '$800 – $2,000' },
  { id: 'vision', range: '$1,500 – $2,500' },
  { id: 'proton', range: '$40,000 – $55,000' },
  { id: 'cart', range: '$150,000 – $230,000' },
] as const

export type PriceRowId = (typeof priceRows)[number]['id']
