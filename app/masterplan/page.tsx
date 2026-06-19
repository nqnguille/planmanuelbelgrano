import type { Metadata } from 'next'
import { MasterplanExperience } from '@/components/masterplan/MasterplanExperience'

export const metadata: Metadata = {
  title: 'Plan Manuel Belgrano — Masterplan',
  description: 'Documento confidencial. Acceso con clave.',
  robots: { index: false, follow: false },
}

export default function MasterplanPage() {
  return <MasterplanExperience />
}
