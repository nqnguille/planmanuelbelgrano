import type { Metadata } from 'next'
import { GateClient } from '@/components/ui/GateClient'
import { Masterplan } from '@/components/masterplan/Masterplan'

export const metadata: Metadata = {
  title: 'Masterplan — Plan Manuel Belgrano',
  description: 'Documento confidencial. Acceso con clave.',
  robots: { index: false, follow: false },
}

export default function MasterplanPage() {
  return (
    <GateClient>
      <Masterplan />
    </GateClient>
  )
}
