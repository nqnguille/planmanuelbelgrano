import type { Metadata } from 'next'
import { DeckExperience } from '@/components/deck/DeckExperience'

export const metadata: Metadata = {
  title: 'Plan Manuel Belgrano — Banco de objeciones',
  description: 'Documento confidencial. Acceso con clave.',
  robots: { index: false, follow: false },
}

export default function DeckPage() {
  return <DeckExperience />
}
