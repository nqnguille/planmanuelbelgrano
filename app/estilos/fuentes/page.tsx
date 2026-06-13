import type { Metadata } from 'next'
import { GateClient } from '@/components/ui/GateClient'
import { FuentesSoberana } from '@/components/estilos/FuentesSoberana'

export const metadata: Metadata = {
  title: 'Tipografías Soberana — Plan Manuel Belgrano',
  description: 'Opciones tipográficas sobre la paleta YPF. Acceso con clave.',
  robots: { index: false, follow: false },
}

export default function FuentesPage() {
  return (
    <GateClient>
      <FuentesSoberana />
    </GateClient>
  )
}
