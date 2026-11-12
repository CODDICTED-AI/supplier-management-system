import type { IconName } from '@/components/Icon'

export const treatmentIds = ['checkup', 'oncology', 'tcm', 'dental', 'eye', 'ortho', 'cardio', 'remote'] as const

export type TreatmentId = (typeof treatmentIds)[number]

export const treatmentIcons: Record<TreatmentId, IconName> = {
  checkup: 'clipboard',
  oncology: 'target',
  tcm: 'leaf',
  dental: 'tooth',
  eye: 'eye',
  ortho: 'bone',
  cardio: 'heart',
  remote: 'video',
}
