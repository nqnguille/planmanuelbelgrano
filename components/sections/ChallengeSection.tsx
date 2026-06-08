import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { CONTENT } from '@/lib/content'

export function ChallengeSection() {
  const c = CONTENT.challenge
  return (
    <section id="s02" className="bg-[#1A1A1A] px-8 lg:px-20 xl:px-28 py-28 lg:py-36">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionLabel label={c.label} light />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <Reveal delay={0.1}>
            <h2
              className="text-white font-normal leading-[1.15]"
              style={{
                fontFamily: 'var(--font-garamond)',
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              }}
            >
              {c.headline}
            </h2>
          </Reveal>

          <Reveal delay={0.2} className="flex items-end">
            <p className="text-white/55 text-base leading-relaxed"
              style={{ fontFamily: 'var(--font-hanken)', fontWeight: 300 }}>
              {c.body}
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/8">
          {c.cards.map((card, i) => (
            <Reveal key={card.number} delay={0.1 * i}>
              <div className="bg-[#1A1A1A] hover:bg-[#222] transition-colors duration-300 p-10 h-full group">
                <p className="text-[#C8A46A]/50 text-4xl font-light mb-6"
                  style={{ fontFamily: 'var(--font-garamond)' }}>
                  {card.number}
                </p>
                <h3 className="text-white text-xs tracking-[0.18em] uppercase mb-4 font-medium"
                  style={{ fontFamily: 'var(--font-hanken)' }}>
                  {card.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-hanken)', fontWeight: 300 }}>
                  {card.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
