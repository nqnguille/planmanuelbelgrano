import type { Metadata } from 'next'
import { MasterplanExperience } from '@/components/masterplan/MasterplanExperience'

export const metadata: Metadata = {
  title: 'Plan Manuel Belgrano — Masterplan V2',
  description: 'Rediseño alternativo del masterplan para revisión interna.',
  robots: { index: false, follow: false },
}

export default function MasterplanV2Page() {
  return <MasterplanExperience />
}
