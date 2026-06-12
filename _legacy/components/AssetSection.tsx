'use client'
import { Reveal } from '@/components/ui/Reveal'
import { HempBotanical } from '@/components/ui/HempBotanical'
import { CONTENT } from '@/lib/content'

export function AssetSection() {
  const c = CONTENT.asset
  const BORDER = '1px solid rgba(201,168,76,0.1)'
  const GAP_BG = 'rgba(201,168,76,0.08)'

  return (
    <section id="s07" style={{ backgroundColor: 'var(--color-ink)', position: 'relative', overflow: 'hidden' }}>

      {/* Transición superior */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.25), transparent)',
      }} />

      {/* Botanical watermark izquierda */}
      <div style={{
        position: 'absolute', left: '-6%', top: '50%',
        transform: 'translateY(-50%)',
        opacity: 0.03, pointerEvents: 'none',
      }}>
        <HempBotanical opacity={0.08} />
      </div>

      <div className="max-w-[1400px] mx-auto px-8 lg:px-20 xl:px-28 py-28 lg:py-40" style={{ position: 'relative', zIndex: 1 }}>

        {/* Label */}
        <Reveal>
          <p style={{
            fontFamily: 'var(--font-hanken)', fontSize: '0.62rem',
            letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'rgba(113,206,106,0.55)', marginBottom: '3.5rem',
          }}>
            {c.label}
          </p>
        </Reveal>

        {/* ── FILA SUPERIOR: headline + USD 1T ── */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '1px', backgroundColor: GAP_BG,
          border: BORDER, borderBottom: 'none',
        }}>

          {/* Card izquierda — headline + cuerpo */}
          <Reveal delay={0.08}>
            <div style={{
              backgroundColor: 'var(--color-ink)',
              padding: '3rem 3rem 3.5rem',
            }}>
              <h2 style={{
                fontFamily: 'var(--font-garamond)', fontStyle: 'italic',
                fontSize: 'clamp(2.4rem, 4vw, 4rem)',
                fontWeight: 400, lineHeight: 1.0,
                marginBottom: '2.5rem',
              }}>
                {c.headline.split('\n').map((line, i, arr) => (
                  <span key={i} style={{
                    color: i === arr.length - 1 ? '#71CE6A' : 'var(--color-cream)',
                    display: 'block',
                  }}>
                    {line}
                  </span>
                ))}
              </h2>

              <div style={{ width: '28px', height: '1px', backgroundColor: 'rgba(201,168,76,0.35)', marginBottom: '1.75rem' }} />

              <p style={{
                fontFamily: 'var(--font-hanken)', fontWeight: 300,
                fontSize: 'clamp(0.88rem, 1.2vw, 0.95rem)',
                color: 'rgba(247,246,235,0.45)', lineHeight: 1.75, maxWidth: '42ch',
              }}>
                YPF ya tiene la mayor plataforma de activos carbonizables de Argentina. Lo que falta es la plataforma que los active.
              </p>
            </div>
          </Reveal>

          {/* Card derecha — USD 1T hero stat */}
          <Reveal delay={0.14}>
            <div style={{
              backgroundColor: 'rgba(113,206,106,0.03)',
              padding: '3rem 3rem 3.5rem',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}>
              <div>
                <p style={{
                  fontFamily: 'var(--font-hanken)', fontSize: '0.56rem',
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: 'rgba(113,206,106,0.45)', marginBottom: '1.75rem',
                }}>
                  Mercado proyectado
                </p>

                <p style={{
                  fontFamily: 'var(--font-garamond)',
                  fontSize: 'clamp(3.5rem, 6vw, 5.5rem)',
                  fontWeight: 400, lineHeight: 0.9,
                  color: '#71CE6A', marginBottom: '0.5rem',
                }}>
                  USD 1T
                </p>
                <p style={{
                  fontFamily: 'var(--font-hanken)', fontSize: '0.62rem',
                  color: 'rgba(113,206,106,0.4)', letterSpacing: '0.06em',
                  marginBottom: '2.25rem',
                }}>
                  créditos de alta integridad · BNEF 2037
                </p>

                <div style={{ width: '28px', height: '1px', backgroundColor: 'rgba(113,206,106,0.2)', marginBottom: '1.75rem' }} />

                <p style={{
                  fontFamily: 'var(--font-hanken)', fontWeight: 300,
                  fontSize: 'clamp(0.88rem, 1.2vw, 0.95rem)',
                  color: 'rgba(247,246,235,0.35)', lineHeight: 1.75,
                }}>
                  BNEF proyecta que el mercado voluntario de créditos de alta integridad puede alcanzar ese orden de magnitud. El mercado existe. La oferta certificada en Argentina es casi cero.
                </p>
              </div>

              <blockquote style={{
                borderLeft: '2px solid rgba(113,206,106,0.2)',
                paddingLeft: '1.5rem', marginTop: '2.5rem',
              }}>
                <p style={{
                  fontFamily: 'var(--font-garamond)', fontStyle: 'italic',
                  fontSize: 'clamp(0.9rem, 1.3vw, 1.1rem)',
                  color: 'rgba(247,246,235,0.45)', lineHeight: 1.5,
                }}>
                  {c.tagline}
                </p>
              </blockquote>
            </div>
          </Reveal>
        </div>

        {/* ── FILA DE 4 STATS ── */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1px', backgroundColor: GAP_BG,
          border: BORDER,
        }}>
          {c.table.map((row, i) => (
            <Reveal key={i} delay={0.20 + i * 0.06}>
              <div style={{
                backgroundColor: i === 2 ? 'rgba(113,206,106,0.03)' : 'var(--color-ink)',
                padding: '2.5rem 2.25rem',
                height: '100%',
              }}>
                <p style={{
                  fontFamily: 'var(--font-hanken)', fontSize: '0.52rem',
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: i === 2 ? 'rgba(113,206,106,0.45)' : 'rgba(201,168,76,0.5)',
                  marginBottom: '1.25rem', lineHeight: 1.5,
                }}>
                  {row.concept}
                </p>

                <p style={{
                  fontFamily: 'var(--font-garamond)',
                  fontSize: 'clamp(1.3rem, 2vw, 1.85rem)',
                  fontWeight: 400, lineHeight: 1,
                  color: i === 2 ? '#71CE6A' : 'var(--color-gold)',
                  marginBottom: '1.25rem',
                }}>
                  {row.value}
                </p>

                <div style={{ width: '16px', height: '1px', backgroundColor: i === 2 ? 'rgba(113,206,106,0.2)' : 'rgba(201,168,76,0.2)', marginBottom: '0.75rem' }} />

                <p style={{
                  fontFamily: 'var(--font-hanken)', fontSize: '0.54rem',
                  color: 'rgba(247,246,235,0.2)', letterSpacing: '0.03em',
                  lineHeight: 1.5,
                }}>
                  {row.source}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Nota regulatoria */}
        <Reveal delay={0.44}>
          <div style={{
            borderTop: '1px solid rgba(201,168,76,0.08)',
            paddingTop: '1.75rem', marginTop: '3rem',
            display: 'flex', alignItems: 'flex-start', gap: '1.25rem',
          }}>
            <div style={{
              width: '3px', height: '3px', borderRadius: '50%',
              backgroundColor: 'rgba(113,206,106,0.3)',
              marginTop: '0.5rem', flexShrink: 0,
            }} />
            <p style={{
              fontFamily: 'var(--font-hanken)', fontWeight: 300,
              fontSize: '0.68rem', color: 'rgba(247,246,235,0.22)',
              lineHeight: 1.65, letterSpacing: '0.02em',
            }}>
              {c.note}
            </p>
          </div>
        </Reveal>

      </div>

      {/* Transición inferior */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)',
      }} />

    </section>
  )
}
