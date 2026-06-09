import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { CONTENT } from '@/lib/content'

export function ChallengeSection() {
  const c = CONTENT.challenge
  return (
    <section id="s02" style={{ backgroundColor: 'var(--color-dusk)' }} className="px-8 lg:px-20 xl:px-28 py-28 lg:py-40">
      <div className="max-w-6xl mx-auto">

        <Reveal>
          <SectionLabel label={c.label} light />
        </Reveal>

        {/* Headline principal */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
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
            <p
              className="text-base leading-relaxed"
              style={{
                fontFamily: 'var(--font-hanken)',
                fontWeight: 300,
                color: 'rgba(247,246,235,0.70)',
              }}
            >
              {c.body}
            </p>
          </Reveal>
        </div>

        {/* Cards — tres pilares */}
        <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
          {c.cards.map((card, i) => (
            <Reveal key={card.title} delay={0.12 * i}>
              <div
                className="h-full p-10 transition-colors duration-300"
                style={{ backgroundColor: 'var(--color-dusk)' }}
              >
                <p
                  className="font-normal mb-6 leading-none"
                  style={{
                    fontFamily: 'var(--font-garamond)',
                    fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                    color: 'var(--color-gold)',
                  }}
                >
                  {card.number}
                </p>
                <h3
                  className="text-xs tracking-[0.18em] uppercase mb-4 font-medium"
                  style={{
                    fontFamily: 'var(--font-hanken)',
                    color: 'rgba(247,246,235,0.8)',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-hanken)',
                    fontWeight: 300,
                    color: 'rgba(247,246,235,0.75)',
                  }}
                >
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
