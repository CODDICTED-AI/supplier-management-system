export const treatmentIds = ['checkup', 'oncology', 'tcm', 'dental', 'eye', 'ortho', 'cardio', 'remote'] as const

export type TreatmentId = (typeof treatmentIds)[number]
