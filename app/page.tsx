import { GateClient } from '@/components/ui/GateClient'
import { DeckClient } from '@/components/deck/DeckClient'

export default function Home() {
  return (
    <GateClient>
      <DeckClient />
    </GateClient>
  )
}
