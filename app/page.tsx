import { Header } from '@/components/layout/Header'
import { HeroScrollClient } from '@/components/sections/HeroScrollClient'
import { PlantHistorySection } from '@/components/sections/PlantHistorySection'
import { PlantMarketsSection } from '@/components/sections/PlantMarketsSection'
import { MasterplanSection } from '@/components/sections/MasterplanSection'
import { PilotSection } from '@/components/sections/PilotSection'
import { AssetSection } from '@/components/sections/AssetSection'
import { OpportunitySection } from '@/components/sections/OpportunitySection'
import { Vision2035Section } from '@/components/sections/Vision2035Section'
import { IndustrialContinuitySection } from '@/components/sections/IndustrialContinuitySection'
import { CTAFinalSection } from '@/components/sections/CTAFinalSection'

export default function Home() {
  return (
    <main>
      <Header />
      <HeroScrollClient />
      <PlantHistorySection />
      <PlantMarketsSection />
      <MasterplanSection />
      <PilotSection />
      <AssetSection />
      <OpportunitySection />
      <Vision2035Section />
      <IndustrialContinuitySection />
      <CTAFinalSection />
    </main>
  )
}
