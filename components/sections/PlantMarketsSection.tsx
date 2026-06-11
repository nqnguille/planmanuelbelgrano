'use client'
import { Reveal } from '@/components/ui/Reveal'
import { HempBotanical } from '@/components/ui/HempBotanical'
import { CONTENT } from '@/lib/content'

export function PlantMarketsSection() {
  const { markets, metrics } = CONTENT.plant
  const [perm, dual, market, tech] = markets

  const BORDER = '1px solid rgba(201,168,76,0.12)'
  const GAP_BG = 'rgba(201,168,76,0.08)'

  return (
    <section style={{ backgroundColor: 'var(--color-ink)', position: 'relative', overflow: 'hidden' }}>
      {/* Top separator */}
      <div style={{
        height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.28), transparent)',
      }} />

      {/* Botanical watermark — full-section bg */}
      <div style={{
        position: 'absolute', right: '-6%', top: '50%',
        transform: 'translateY(-50%)',
        opacity: 0.03, pointerEvents: 'none', zIndex: 0,
      }}>
        <HempBotanical opacity={0.1} />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-8 lg:px-20 xl:px-28 pt-24 lg:pt-36 pb-28 lg:pb-40" style={{ zIndex: 1 }}>

        {/* ── SECTION HEADER ── */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 mb-20 lg:mb-24">
          <div>
            <Reveal>
              <p style={{
                fontFamily: 'var(--font-hanken)', fontSize: '0.62rem',
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: 'var(--color-gold)', marginBottom: '2rem',
              }}>
                Hempcrete · Biochar · Dos industrias
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 style={{
                fontFamily: 'var(--font-garamond)', fontStyle: 'italic',
                fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
                fontWeight: 400, lineHeight: 1.08,
                color: 'var(--color-cream)',
              }}>
                El cáñamo da ocho productos.<br />Elegimos los dos<br />más transformadores.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.16} className="flex flex-col justify-end">
            <p style={{
              fontFamily: 'var(--font-hanken)', fontWeight: 300,
              fontSize: 'clamp(0.88rem, 1.2vw, 0.95rem)',
              color: 'rgba(247,246,235,0.42)', lineHeight: 1.85,
              maxWidth: '46ch',
            }}>
              El cáñamo produce fibra, aceite, proteína, semilla, papel, plástico biodegradable, textiles y materiales de construcción. Elegimos los dos con mayor potencial de escala, mayor impacto ambiental y mejor modelo financiero: hempcrete y biochar. Uno construye y fija carbono en el muro. El otro convierte los residuos en créditos permanentes.
            </p>
          </Reveal>
        </div>

        {/* ── FILA SUPERIOR: 2 cards grandes ── */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: '1px', backgroundColor: GAP_BG, border: BORDER, borderBottom: 'none' }}
        >

          {/* Card 1 — Permanencia */}
          <Reveal delay={0.06}>
            <div style={{
              backgroundColor: 'var(--color-ink)',
              padding: '3rem 3rem 3.5rem',
            }}>
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
                color: 'rgba(113,206,106,0.55)', marginBottom: '2rem',
              }}>
                {perm.metricLabel}
              </p>

              <div style={{ width: '24px', height: '1px', backgroundColor: 'rgba(201,168,76,0.35)', marginBottom: '1.75rem' }} />

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
                fontSize: 'clamp(0.88rem, 1.2vw, 0.95rem)',
                color: 'rgba(247,246,235,0.45)',
                lineHeight: 1.8, maxWidth: '42ch',
              }}>
                {perm.body}
              </p>
            </div>
          </Reveal>

          {/* Card 2 — Doble activo */}
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
                fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
                fontWeight: 400, lineHeight: 1.0,
                color: 'var(--color-cream)', marginBottom: '0.3rem',
              }}>
                {dual.metric}
              </p>
              <p style={{
                fontFamily: 'var(--font-hanken)', fontSize: '0.62rem',
                color: 'rgba(247,246,235,0.28)', marginBottom: '2.5rem',
              }}>
                {dual.metricLabel}
              </p>

              {/* Dos flujos de valor — panel limpio */}
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr',
                gap: '1px', backgroundColor: 'rgba(201,168,76,0.1)',
                border: '1px solid rgba(201,168,76,0.12)',
                marginBottom: '2rem',
              }}>
                <div style={{ backgroundColor: 'rgba(247,246,235,0.02)', padding: '1.5rem 1.75rem' }}>
                  <p style={{
                    fontFamily: 'var(--font-garamond)',
                    fontSize: 'clamp(1.05rem, 1.5vw, 1.3rem)',
                    fontWeight: 400, color: 'var(--color-gold)',
                    marginBottom: '0.5rem', lineHeight: 1,
                  }}>
                    Material
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-hanken)', fontWeight: 300,
                    fontSize: '0.68rem', color: 'rgba(247,246,235,0.32)',
                    lineHeight: 1.6,
                  }}>
                    Precio de mercado · hempcrete certificado
                  </p>
                </div>
                <div style={{ backgroundColor: 'rgba(113,206,106,0.04)', padding: '1.5rem 1.75rem' }}>
                  <p style={{
                    fontFamily: 'var(--font-garamond)',
                    fontSize: 'clamp(1.05rem, 1.5vw, 1.3rem)',
                    fontWeight: 400, color: '#71CE6A',
                    marginBottom: '0.5rem', lineHeight: 1,
                  }}>
                    Crédito CO₂
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-hanken)', fontWeight: 300,
                    fontSize: '0.68rem', color: 'rgba(113,206,106,0.32)',
                    lineHeight: 1.6,
                  }}>
                    Certificable · exportable · EU ETS
                  </p>
                </div>
              </div>

              <div style={{ width: '24px', height: '1px', backgroundColor: 'rgba(201,168,76,0.35)', marginBottom: '1.5rem' }} />

              <p style={{
                fontFamily: 'var(--font-hanken)', fontWeight: 300,
                fontSize: 'clamp(0.88rem, 1.2vw, 0.95rem)',
                color: 'rgba(247,246,235,0.45)', lineHeight: 1.8,
              }}>
                {dual.body}
              </p>
            </div>
          </Reveal>
        </div>

        {/* ── FILA INFERIOR: 2 stat cards ── */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: '1px', backgroundColor: GAP_BG, border: BORDER }}
        >

          {/* Card 3 — Mercado doméstico */}
          <Reveal delay={0.18}>
            <div style={{
              backgroundColor: 'var(--color-ink)',
              padding: '2.5rem 3rem',
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
                color: 'rgba(201,168,76,0.45)', marginBottom: '1.75rem',
              }}>
                {market.metricLabel}
              </p>

              <div style={{ width: '20px', height: '1px', backgroundColor: 'rgba(201,168,76,0.3)', marginBottom: '1.5rem' }} />

              <p style={{
                fontFamily: 'var(--font-hanken)', fontWeight: 300,
                fontSize: '0.9rem', color: 'rgba(247,246,235,0.45)',
                lineHeight: 1.8,
              }}>
                {market.body}
              </p>
            </div>
          </Reveal>

          {/* Card 4 — Tecnología probada */}
          <Reveal delay={0.24}>
            <div style={{
              backgroundColor: 'var(--color-ink)',
              padding: '2.5rem 3rem',
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
                color: 'rgba(201,168,76,0.45)', marginBottom: '1.75rem',
              }}>
                {tech.metricLabel}
              </p>

              <div style={{ width: '20px', height: '1px', backgroundColor: 'rgba(201,168,76,0.3)', marginBottom: '1.5rem' }} />

              <p style={{
                fontFamily: 'var(--font-hanken)', fontWeight: 300,
                fontSize: '0.9rem', color: 'rgba(247,246,235,0.45)',
                lineHeight: 1.8,
              }}>
                {tech.body}
              </p>

              <p style={{
                fontFamily: 'var(--font-garamond)', fontStyle: 'italic',
                fontSize: '0.92rem',
                color: 'rgba(247,246,235,0.22)',
                marginTop: '1.5rem',
              }}>
                La ventana está abierta.
              </p>
            </div>
          </Reveal>
        </div>

        {/* ── FOOTER METRICS ── */}
        <Reveal delay={0.4}>
          <div
            className="grid grid-cols-2 lg:grid-cols-4"
            style={{ borderTop: '1px solid rgba(201,168,76,0.12)', paddingTop: '2.5rem', marginTop: '0', gap: '1.5rem' }}
          >
            {metrics.map((m, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '0.5rem 0' }}>
                <p style={{
                  fontFamily: 'var(--font-garamond)',
                  fontSize: 'clamp(1.1rem, 1.7vw, 1.5rem)',
                  fontWeight: 400, color: 'rgba(247,246,235,0.65)',
                  lineHeight: 1.1, marginBottom: '0.4rem',
                }}>
                  {m.value}
                </p>
                <p style={{
                  fontFamily: 'var(--font-hanken)', fontSize: '0.56rem',
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'rgba(247,246,235,0.28)',
                }}>
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

      </div>

      {/* Bottom separator */}
      <div style={{
        height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.22), transparent)',
      }} />
    </section>
  )
}
