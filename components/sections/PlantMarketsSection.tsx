'use client'
import { Reveal } from '@/components/ui/Reveal'
import { HempBotanical } from '@/components/ui/HempBotanical'
import { CONTENT } from '@/lib/content'

export function PlantMarketsSection() {
  const { markets, metrics } = CONTENT.plant
  const [perm, dual, market, tech] = markets

  const BORDER = '1px solid rgba(201,168,76,0.12)'
  const GAP_BG = 'rgba(201,168,76,0.12)'

  return (
    <section style={{ backgroundColor: 'var(--color-ink)', position: 'relative' }}>
      {/* Franja de transición parchment→ink */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '2px',
        background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)',
      }} />

      <div className="max-w-[1400px] mx-auto px-8 lg:px-20 xl:px-28 pt-0 pb-28 lg:pb-40">

        {/* ── FILA SUPERIOR: 2 cards grandes ── */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '1px', backgroundColor: GAP_BG,
          border: BORDER, borderBottom: 'none',
        }}>

          {/* Card 1 — Permanencia */}
          <Reveal delay={0.06}>
            <div style={{
              backgroundColor: 'var(--color-ink)',
              padding: '3rem 3rem 3.5rem',
              position: 'relative', overflow: 'hidden',
            }}>
              {/* Watermark botanical */}
              <div style={{
                position: 'absolute', bottom: '-20%', right: '-8%',
                opacity: 0.04, pointerEvents: 'none',
                transform: 'scale(0.65)',
                transformOrigin: 'bottom right',
              }}>
                <HempBotanical opacity={0.08} />
              </div>

              <p style={{
                fontFamily: 'var(--font-hanken)', fontSize: '0.57rem',
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: 'var(--color-gold)', marginBottom: '1.75rem',
              }}>
                {perm.category}
              </p>

              <p style={{
                fontFamily: 'var(--font-garamond)',
                fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
                fontWeight: 400, lineHeight: 0.95,
                color: '#71CE6A', marginBottom: '0.3rem',
              }}>
                {perm.metric}
              </p>
              <p style={{
                fontFamily: 'var(--font-hanken)', fontSize: '0.62rem',
                color: 'rgba(113,206,106,0.55)', marginBottom: '1.5rem',
              }}>
                {perm.metricLabel}
              </p>

              <div style={{ width: '24px', height: '1px', backgroundColor: 'rgba(201,168,76,0.35)', marginBottom: '1.5rem' }} />

              <h3 style={{
                fontFamily: 'var(--font-garamond)',
                fontSize: 'clamp(1.15rem, 1.8vw, 1.45rem)',
                fontWeight: 400, lineHeight: 1.15,
                color: 'var(--color-cream)', marginBottom: '1rem',
              }}>
                {perm.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-hanken)', fontWeight: 300,
                fontSize: 'clamp(0.78rem, 1.1vw, 0.88rem)',
                color: 'rgba(247,246,235,0.48)',
                lineHeight: 1.75, maxWidth: '42ch',
              }}>
                {perm.body}
              </p>
            </div>
          </Reveal>

          {/* Card 2 — Doble Activo */}
          <Reveal delay={0.12}>
            <div style={{
              backgroundColor: 'var(--color-ink)',
              padding: '3rem 3rem 3.5rem',
            }}>
              <p style={{
                fontFamily: 'var(--font-hanken)', fontSize: '0.57rem',
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: 'var(--color-gold)', marginBottom: '1.75rem',
              }}>
                {dual.category}
              </p>

              <p style={{
                fontFamily: 'var(--font-garamond)',
                fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
                fontWeight: 400, lineHeight: 1.15,
                color: 'var(--color-cream)', marginBottom: '0.3rem',
              }}>
                {dual.metric}
              </p>
              <p style={{
                fontFamily: 'var(--font-hanken)', fontSize: '0.62rem',
                color: 'rgba(247,246,235,0.3)', marginBottom: '2.5rem',
              }}>
                {dual.metricLabel}
              </p>

              {/* Diagrama bifurcación */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{
                  display: 'flex', justifyContent: 'center',
                  marginBottom: '0.75rem',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-hanken)', fontSize: '0.6rem',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: 'rgba(201,168,76,0.5)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    padding: '0.4rem 1.25rem',
                  }}>
                    1 m³ de muro
                  </div>
                </div>

                {/* Línea bifurcada SVG */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
                  <svg width="160" height="24" viewBox="0 0 160 24" fill="none">
                    <path d="M80 0 L80 12 L20 12 L20 24" stroke="rgba(201,168,76,0.3)" strokeWidth="1"/>
                    <path d="M80 12 L140 12 L140 24" stroke="rgba(201,168,76,0.3)" strokeWidth="1"/>
                  </svg>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', backgroundColor: 'rgba(201,168,76,0.12)' }}>
                  <div style={{
                    backgroundColor: 'rgba(247,246,235,0.03)',
                    padding: '1rem 1.25rem',
                    textAlign: 'center',
                  }}>
                    <p style={{
                      fontFamily: 'var(--font-hanken)', fontSize: '0.55rem',
                      letterSpacing: '0.14em', textTransform: 'uppercase',
                      color: 'var(--color-gold)', marginBottom: '0.4rem',
                    }}>Material</p>
                    <p style={{
                      fontFamily: 'var(--font-hanken)', fontSize: '0.68rem',
                      fontWeight: 300, color: 'rgba(247,246,235,0.55)',
                      lineHeight: 1.5,
                    }}>Precio de mercado</p>
                  </div>
                  <div style={{
                    backgroundColor: 'rgba(113,206,106,0.04)',
                    padding: '1rem 1.25rem',
                    textAlign: 'center',
                  }}>
                    <p style={{
                      fontFamily: 'var(--font-hanken)', fontSize: '0.55rem',
                      letterSpacing: '0.14em', textTransform: 'uppercase',
                      color: '#71CE6A', marginBottom: '0.4rem', opacity: 0.7,
                    }}>Crédito CO₂</p>
                    <p style={{
                      fontFamily: 'var(--font-hanken)', fontSize: '0.68rem',
                      fontWeight: 300, color: 'rgba(247,246,235,0.55)',
                      lineHeight: 1.5,
                    }}>Certificable y exportable</p>
                  </div>
                </div>
              </div>

              <div style={{ width: '24px', height: '1px', backgroundColor: 'rgba(201,168,76,0.35)', marginBottom: '1.25rem' }} />

              <p style={{
                fontFamily: 'var(--font-hanken)', fontWeight: 300,
                fontSize: 'clamp(0.78rem, 1.1vw, 0.88rem)',
                color: 'rgba(247,246,235,0.48)', lineHeight: 1.75,
              }}>
                {dual.body}
              </p>
            </div>
          </Reveal>
        </div>

        {/* ── FILA INFERIOR: 2 stat cards + botanical ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 200px',
          gap: '1px', backgroundColor: GAP_BG,
          border: BORDER,
        }}>

          {/* Card 3 — Mercado doméstico */}
          <Reveal delay={0.18}>
            <div style={{
              backgroundColor: 'var(--color-ink)',
              padding: '2.5rem 2.75rem',
              height: '100%',
            }}>
              <p style={{
                fontFamily: 'var(--font-hanken)', fontSize: '0.57rem',
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: 'var(--color-gold)', marginBottom: '1.5rem',
              }}>
                {market.category}
              </p>

              <p style={{
                fontFamily: 'var(--font-garamond)',
                fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)',
                fontWeight: 400, lineHeight: 0.95,
                color: 'var(--color-gold)', marginBottom: '0.35rem',
              }}>
                {market.metric}
              </p>
              <p style={{
                fontFamily: 'var(--font-hanken)', fontSize: '0.6rem',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                color: 'rgba(201,168,76,0.45)', marginBottom: '1.5rem',
              }}>
                {market.metricLabel}
              </p>

              <div style={{ width: '20px', height: '1px', backgroundColor: 'rgba(201,168,76,0.3)', marginBottom: '1.25rem' }} />

              <p style={{
                fontFamily: 'var(--font-hanken)', fontWeight: 300,
                fontSize: '0.8rem', color: 'rgba(247,246,235,0.45)',
                lineHeight: 1.75,
              }}>
                {market.body}
              </p>
            </div>
          </Reveal>

          {/* Card 4 — Tecnología probada */}
          <Reveal delay={0.24}>
            <div style={{
              backgroundColor: 'var(--color-ink)',
              padding: '2.5rem 2.75rem',
              height: '100%',
            }}>
              <p style={{
                fontFamily: 'var(--font-hanken)', fontSize: '0.57rem',
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: 'var(--color-gold)', marginBottom: '1.5rem',
              }}>
                {tech.category}
              </p>

              <p style={{
                fontFamily: 'var(--font-garamond)',
                fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)',
                fontWeight: 400, lineHeight: 0.95,
                color: 'var(--color-gold)', marginBottom: '0.35rem',
              }}>
                {tech.metric}
              </p>
              <p style={{
                fontFamily: 'var(--font-hanken)', fontSize: '0.6rem',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                color: 'rgba(201,168,76,0.45)', marginBottom: '1.5rem',
              }}>
                {tech.metricLabel}
              </p>

              <div style={{ width: '20px', height: '1px', backgroundColor: 'rgba(201,168,76,0.3)', marginBottom: '1.25rem' }} />

              <p style={{
                fontFamily: 'var(--font-hanken)', fontWeight: 300,
                fontSize: '0.8rem', color: 'rgba(247,246,235,0.45)',
                lineHeight: 1.75,
              }}>
                {tech.body}
              </p>

              <p style={{
                fontFamily: 'var(--font-garamond)', fontStyle: 'italic',
                fontSize: '0.88rem',
                color: 'rgba(247,246,235,0.28)',
                marginTop: '1.25rem',
              }}>
                La ventana está abierta.
              </p>
            </div>
          </Reveal>

          {/* Col 3 — Botanical watermark */}
          <Reveal delay={0.32} className="hidden lg:flex">
            <div style={{
              backgroundColor: 'var(--color-ink)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              padding: '1.5rem 1rem',
              height: '100%',
            }}>
              <p style={{
                fontFamily: 'var(--font-garamond)', fontStyle: 'italic',
                fontSize: '0.58rem', color: 'rgba(247,246,235,0.18)',
                marginBottom: '0.75rem', textAlign: 'center',
                letterSpacing: '0.04em',
              }}>
                Cannabis sativa L.
              </p>

              <HempBotanical className="w-full" opacity={0.25} />

              <div style={{ marginTop: '0.75rem', textAlign: 'center' }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                }}>
                  <div style={{ width: '10px', height: '1px', backgroundColor: 'rgba(247,246,235,0.15)' }} />
                  <p style={{
                    fontFamily: 'var(--font-hanken)', fontSize: '0.46rem',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: 'rgba(247,246,235,0.18)',
                  }}>
                    Hurda → Hempcrete
                  </p>
                  <div style={{ width: '10px', height: '1px', backgroundColor: 'rgba(247,246,235,0.15)' }} />
                </div>
              </div>
            </div>
          </Reveal>

        </div>

        {/* Footer stat strip */}
        <Reveal delay={0.4}>
          <div style={{
            borderTop: '1px solid rgba(201,168,76,0.1)',
            paddingTop: '2rem', marginTop: '3rem',
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
          }}>
            {metrics.map((m, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <p style={{
                  fontFamily: 'var(--font-garamond)',
                  fontSize: 'clamp(1rem, 1.5vw, 1.3rem)',
                  fontWeight: 400, color: 'rgba(247,246,235,0.5)',
                  lineHeight: 1.1, marginBottom: '0.35rem',
                }}>{m.value}</p>
                <p style={{
                  fontFamily: 'var(--font-hanken)', fontSize: '0.56rem',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'rgba(247,246,235,0.22)',
                }}>{m.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  )
}
