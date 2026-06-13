import type { Metadata } from 'next'
import { GateClient } from '@/components/ui/GateClient'
import { Biblioteca } from '@/components/biblioteca/Biblioteca'

export const metadata: Metadata = {
  title: 'Biblioteca de módulos — Plan Manuel Belgrano',
  description: 'Catálogo interno de módulos reciclables. Acceso con clave.',
  robots: { index: false, follow: false },
}

export default function BibliotecaPage() {
  return (
    <GateClient>
      <Biblioteca />
    </GateClient>
  )
}
