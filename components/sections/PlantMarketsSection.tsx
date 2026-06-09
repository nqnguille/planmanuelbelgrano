'use client'
import { Reveal } from '@/components/ui/Reveal'
import { HempBotanical } from '@/components/ui/HempBotanical'
import { CONTENT } from '@/lib/content'

const MARKET_SVG_ICONS = [
  // Candado — carbono permanente sellado
  <svg key="lock" viewBox="0 0 40 40" fill="none" width="32" height="32">
    <rect x="8" y="20" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
    <path d="M13 20v-6a7 7 0 0 1 14 0v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <circle cx="20" cy="28" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M20 30.5v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>,
  // Split arrow — doble flujo de valor
  <svg key="split" viewBox="0 0 40 40" fill="none" width="32" height="32">
    <path d="M6 20h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M16 20l6-8h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 20l6 8h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M30 10l4 2-4 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M30 26l4 2-4 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  // Casa — déficit habitacional
  <svg key="house" viewBox="0 0 40 40" fill="none" width="32" height="32">
    <path d="M5 19L20 6l15 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 16v16h22V16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="15" y="25" width="10" height="7" rx="1" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M20 25v7" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
  </svg>,
  // Globo — tecnología probada en 50+ países
  <svg key="globe" viewBox="0 0 40 40" fill="none" width="32" height="32">
    <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.2"/>
    <ellipse cx="20" cy="20" rx="6" ry="14" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M6 20h28" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M8 13h24M8 27h24" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>,
]

export function PlantMarketsSection() {
  const c = CONTENT.plant
  return (
    <section
      id="s04"
      className="relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-parchment)' }}
    >
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: `
          radial-gradient(ellipse 80% 60% at 80% 50%, rgba(139,100,42,0.05) 0%, transparent 70%),
          radial-gradient(ellipse 40% 40% at 10% 90%, rgba(139,100,42,0.04) 0%, transparent 60%)
        `,
      }} />

      <div className="relative max-w-[1400px] mx-auto px-8 lg:px-20 xl:px-28 py-24 lg:py-36" style={{ zIndex: 1 }}>

        <Reveal>
          <p style={{
            fontFamily: 'var(--font-hanken)', fontSize: '0.62rem',
            letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'var(--color-gold)', marginBottom: '2.5rem',
          }}>
            {c.label}
          </p>
        </Reveal>

        {/* 3-col grid: headline | 2×2 cards | illustration */}
        <div className="grid lg:grid-cols-[1fr_1fr_240px] xl:grid-cols-[1fr_1fr_280px] gap-0 items-start">

          {/* Col 1 — Headline + body + secondary metrics */}
          <div className="lg:pr-16 xl:pr-20 pb-12 lg:pb-0">
            <Reveal delay={0.06}>
              <h2 style={{
                fontFamily: 'var(--font-garamond)',
                fontSize: 'clamp(2.4rem, 4vw, 3.8rem)',
                fontWeight: 400, lineHeight: 1.08,
                color: 'var(--color-ink)', marginBottom: '1.5rem',
              }}>
                {c.headline.split('\n').map((l, i, a) => (
                  <span key={i}>{l}{i < a.length - 1 && <br />}</span>
                ))}
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p style={{
                fontFamily: 'var(--font-hanken)', fontWeight: 300,
                fontSize: 'clamp(0.85rem, 1.3vw, 0.98rem)',
                color: 'rgba(28,26,20,0.60)', lineHeight: 1.85,
                marginBottom: '2.5rem', maxWidth: '42ch',
              }}>
                {c.body}
              </p>
            </Reveal>

            <Reveal delay={0.45}>
              <div style={{
                borderTop: '1px solid rgba(139,100,42,0.18)',
                paddingTop: '1.5rem',
                display: 'grid', gridTemplateColumns: '1fr 1fr',
                gap: '1rem 2rem',
              }}>
                {c.metrics.map((m, i) => (
                  <div key={i}>
                    <p style={{
                      fontFamily: 'var(--font-garamond)',
                      fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)',
                      fontWeight: 400, color: 'var(--color-ink)', lineHeight: 1.1,
                    }}>{m.value}</p>
                    <p style={{
                      fontFamily: 'var(--font-hanken)', fontSize: '0.62rem',
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      color: 'rgba(28,26,20,0.42)', marginTop: '0.2rem',
                    }}>{m.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Col 2 — 2×2 market cards */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: '1px', backgroundColor: 'rgba(139,100,42,0.15)',
            border: '1px solid rgba(139,100,42,0.15)', alignSelf: 'start',
          }}>
            {c.markets.map((m, i) => (
              <Reveal key={m.category} delay={0.1 + i * 0.07}>
                <div style={{
                  backgroundColor: 'var(--color-parchment)',
                  padding: '1.5rem 1.4rem', minHeight: '200px',
                }}>
                  <div style={{ color: 'rgba(139,100,42,0.65)', marginBottom: '0.9rem' }}>
                    {MARKET_SVG_ICONS[i]}
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-hanken)', fontSize: '0.58rem',
                    letterSpacing: '0.2em', textTransform: 'uppercase',
                    color: 'var(--color-gold)', marginBottom: '0.5rem',
                  }}>{m.category}</p>
                  <p style={{
                    fontFamily: 'var(--font-garamond)',
                    fontSize: 'clamp(1.4rem, 2vw, 1.9rem)',
                    fontWeight: 400, lineHeight: 1.1,
                    color: 'var(--color-ink)', marginBottom: '0.2rem',
                  }}>{m.metric}</p>
                  <p style={{
                    fontFamily: 'var(--font-hanken)', fontSize: '0.62rem',
                    color: 'rgba(28,26,20,0.4)', marginBottom: '0.8rem',
                  }}>{m.metricLabel}</p>
                  <div style={{ width: '1.5rem', height: '1px', backgroundColor: 'rgba(139,100,42,0.28)', marginBottom: '0.7rem' }} />
                  <p style={{
                    fontFamily: 'var(--font-hanken)', fontWeight: 500,
                    fontSize: '0.72rem', color: 'var(--color-ink)',
                    marginBottom: '0.3rem', lineHeight: 1.3,
                  }}>{m.title}</p>
                  <p style={{
                    fontFamily: 'var(--font-hanken)', fontWeight: 300,
                    fontSize: '0.66rem', lineHeight: 1.6,
                    color: 'rgba(28,26,20,0.52)',
                  }}>{m.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Col 3 — Botanical illustration */}
          <Reveal delay={0.3} className="hidden lg:flex flex-col items-center pl-8 xl:pl-10">
            <div style={{ position: 'relative', width: '100%' }}>
              <p style={{
                fontFamily: 'var(--font-garamond)', fontStyle: 'italic',
                fontSize: '0.72rem', color: 'rgba(139,100,42,0.45)',
                textAlign: 'center', marginBottom: '0.6rem',
              }}>
                Cannabis sativa L.
              </p>

              <HempBotanical className="w-full" opacity={0.85} />

              <div style={{
                position: 'absolute', left: '0', top: '30%',
                display: 'flex', alignItems: 'center', gap: '0.35rem',
              }}>
                <div style={{ width: '18px', height: '1px', backgroundColor: 'rgba(139,100,42,0.3)' }} />
                <p style={{
                  fontFamily: 'var(--font-hanken)', fontSize: '0.5rem',
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: 'rgba(28,26,20,0.3)', whiteSpace: 'nowrap',
                }}>8–12 t CO₂/ha</p>
              </div>

              <div style={{
                position: 'absolute', right: '0', top: '56%',
                display: 'flex', alignItems: 'center', gap: '0.35rem',
                flexDirection: 'row-reverse',
              }}>
                <div style={{ width: '18px', height: '1px', backgroundColor: 'rgba(139,100,42,0.3)' }} />
                <p style={{
                  fontFamily: 'var(--font-hanken)', fontSize: '0.5rem',
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: 'rgba(28,26,20,0.3)', whiteSpace: 'nowrap',
                }}>Hurda → Hempcrete</p>
              </div>

              <p style={{
                fontFamily: 'var(--font-hanken)', fontSize: '0.5rem',
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'rgba(139,100,42,0.35)', textAlign: 'center',
                marginTop: '0.8rem', borderTop: '1px solid rgba(139,100,42,0.15)',
                paddingTop: '0.6rem',
              }}>
                Patagonia · Argentina
              </p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
