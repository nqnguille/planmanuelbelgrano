import { Header } from '@/components/layout/Header'
import { HeroSection } from '@/components/sections/HeroSection'
import { ChallengeSection } from '@/components/sections/ChallengeSection'
import { ThesisTimelineSection } from '@/components/sections/ThesisTimelineSection'
import { PlantMarketsSection } from '@/components/sections/PlantMarketsSection'
import { MasterplanSection } from '@/components/sections/MasterplanSection'
import { PilotSection } from '@/components/sections/PilotSection'
import { OpportunitySection } from '@/components/sections/OpportunitySection'
import { Vision2035Section } from '@/components/sections/Vision2035Section'
import { IndustrialContinuitySection } from '@/components/sections/IndustrialContinuitySection'
import { CTAFinalSection } from '@/components/sections/CTAFinalSection'

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ChallengeSection />
      <ThesisTimelineSection />
      <PlantMarketsSection />
      <MasterplanSection />
      <PilotSection />
      <OpportunitySection />
      <Vision2035Section />
      <IndustrialContinuitySection />
      <CTAFinalSection />
    </main>
  )
}
