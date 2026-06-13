import type { Metadata } from 'next'
import { GateClient } from '@/components/ui/GateClient'
import { Estilos } from '@/components/estilos/Estilos'

export const metadata: Metadata = {
  title: 'Estilos — Plan Manuel Belgrano',
  description: 'Exploración de fuente y color. Acceso con clave.',
  robots: { index: false, follow: false },
}

export default function EstilosPage() {
  return (
    <GateClient>
      <Estilos />
    </GateClient>
  )
}
