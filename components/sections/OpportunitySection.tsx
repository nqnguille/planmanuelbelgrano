import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { CONTENT } from '@/lib/content'

export function OpportunitySection() {
  const c = CONTENT.opportunity
  return (
    <section
      id="s07"
      className="px-8 lg:px-20 xl:px-28 py-28 lg:py-40 overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, var(--color-dusk) 0%, var(--color-forest) 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto">

        <Reveal>
          <SectionLabel label={c.label} light />
        </Reveal>

        {/* Headline grande + body */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <Reveal delay={0.1}>
            <h2
              className="font-normal leading-[1.1]"
              style={{
                fontFamily: 'var(--font-garamond)',
                fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
                color: 'var(--color-cream)',
              }}
            >
              {c.headline}
            </h2>
          </Reveal>

          <Reveal delay={0.2} className="flex items-end">
            <p
              className="text-base leading-relaxed italic"
              style={{
                fontFamily: 'var(--font-garamond)',
                fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
                color: 'var(--color-gold)',
                lineHeight: 1.7,
              }}
            >
              {c.body}
            </p>
          </Reveal>
        </div>

        {/* Glyph cáñamo */}
        <div className="flex justify-center mb-16">
          <Reveal>
            <svg viewBox="0 0 80 120" className="w-14" fill="none" style={{ opacity: 0.28 }}>
              <line x1="40" y1="120" x2="40" y2="20" stroke="#71CE6A" strokeWidth="2" />
              <ellipse cx="40" cy="55" rx="28" ry="12" stroke="#71CE6A" strokeWidth="1.5" transform="rotate(-20 40 55)" />
              <ellipse cx="40" cy="70" rx="28" ry="12" stroke="#71CE6A" strokeWidth="1.5" transform="rotate(20 40 70)" />
              <ellipse cx="40" cy="85" rx="20" ry="9" stroke="#71CE6A" strokeWidth="1.2" transform="rotate(-15 40 85)" />
              <circle cx="40" cy="20" r="7" stroke="#71CE6A" strokeWidth="1.5" />
            </svg>
          </Reveal>
        </div>

        {/* Features grid */}
        <div
          className="grid md:grid-cols-2 gap-px"
          style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
        >
          {c.features.map((f, i) => (
            <Reveal key={f.title} delay={0.1 * i}>
              <div
                className="p-10"
                style={{ backgroundColor: 'rgba(26,43,34,0.5)' }}
              >
                {/* Número */}
                <p
                  className="mb-4 font-medium"
                  style={{
                    fontFamily: 'var(--font-hanken)',
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    color: 'var(--color-green)',
                  }}
                >
                  0{i + 1}
                </p>
                <h3
                  className="text-xs tracking-[0.18em] uppercase mb-4 font-medium"
                  style={{
                    fontFamily: 'var(--font-hanken)',
                    color: 'rgba(247,246,235,0.9)',
                  }}
                >
                  {f.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-hanken)',
                    fontWeight: 300,
                    color: 'rgba(247,246,235,0.55)',
                  }}
                >
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
