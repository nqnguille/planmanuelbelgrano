import type { Metadata } from 'next'
import { MasterplanDoc } from '@/components/masterplan/MasterplanDoc'

export const metadata: Metadata = {
  title: 'Plan Manuel Belgrano — Masterplan (preview)',
  description: 'Versión de revisión, sin publicar.',
  robots: { index: false, follow: false },
}

export default function PreviewPage() {
  return <MasterplanDoc />
}
