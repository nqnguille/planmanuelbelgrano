'use client'
import { Reveal } from '@/components/ui/Reveal'

const BORDER_GOLD = '1px solid rgba(201,168,76,0.2)'
const BORDER_GREEN = '1px solid rgba(113,206,106,0.2)'
const BG_GOLD = 'rgba(201,168,76,0.08)'
const BG_GREEN = 'rgba(113,206,106,0.08)'
const BG_NEUTRAL = 'rgba(28,26,20,0.04)'
const BORDER_NEUTRAL = '1px solid rgba(28,26,20,0.12)'

interface StepProps {
  number: string
  label: string
  description: string
  variant?: 'neutral' | 'gold' | 'green'
}

function Step({ number, label, description, variant = 'neutral' }: StepProps) {
  const bg = variant === 'gold' ? BG_GOLD : variant === 'green' ? BG_GREEN : BG_NEUTRAL
  const border = variant === 'gold' ? BORDER_GOLD : variant === 'green' ? BORDER_GREEN : BORDER_NEUTRAL
  const numColor = variant === 'gold' ? 'var(--color-gold)' : variant === 'green' ? 'var(--color-green)' : 'rgba(28,26,20,0.3)'

  return (
    <div style={{
      backgroundColor: bg,
      border,
      borderRadius: '4px',
      padding: '1.25rem 1.25rem 1.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      minWidth: '140px',
      flex: '1',
    }}>
      <span style={{
        fontFamily: 'var(--font-hanken)',
        fontSize: '0.58rem',
        fontWeight: 700,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: numColor,
      }}>
        {number}
      </span>
      <span style={{
        fontFamily: 'var(--font-hanken)',
        fontSize: '0.62rem',
        fontWeight: 600,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--color-ink)',
        lineHeight: 1.3,
      }}>
        {label}
      </span>
      <span style={{
        fontFamily: 'var(--font-hanken)',
        fontSize: '0.72rem',
        color: 'rgba(28,26,20,0.6)',
        lineHeight: 1.5,
      }}>
        {description}
      </span>
    </div>
  )
}

function Arrow({ color = 'rgba(28,26,20,0.25)' }: { color?: string }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0,
      paddingTop: '1.5rem',
    }}>
      <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="6" x2="18" y2="6" stroke={color} strokeWidth="1.5" />
        <polyline points="13,1 19,6 13,11" fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

export function ProcessSection() {
  return (
    <section
      id="proceso"
      style={{
        backgroundColor: 'var(--color-parchment)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* línea decorativa superior */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)',
      }} />

      <div
        className="max-w-[1400px] mx-auto px-8 lg:px-20 xl:px-28 py-28 lg:py-40"
        style={{ position: 'relative', zIndex: 1 }}
      >

        {/* ── ENCABEZADO ── */}
        <Reveal>
          <p style={{
            fontFamily: 'var(--font-hanken)',
            fontSize: '0.62rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(28,26,20,0.4)',
            marginBottom: '2rem',
          }}>
            Proceso productivo · De la semilla al activo
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 style={{
            fontFamily: 'var(--font-garamond)',
            fontStyle: 'italic',
            fontSize: 'clamp(2.4rem, 4vw, 4rem)',
            fontWeight: 400,
            lineHeight: 1.05,
            color: 'var(--color-ink)',
            marginBottom: '1.75rem',
            whiteSpace: 'pre-line',
          }}>
            {'Una cosecha.\nDos productos.\nCero residuos.'}
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p style={{
            fontFamily: 'var(--font-hanken)',
            fontSize: 'clamp(0.9rem, 1.1vw, 1.05rem)',
            color: 'rgba(28,26,20,0.65)',
            lineHeight: 1.75,
            maxWidth: '560px',
            marginBottom: '4.5rem',
          }}>
            La misma biomasa que produce hempcrete genera biochar con los residuos del proceso. Cada etapa de la cadena produce valor.
          </p>
        </Reveal>

        {/* ── DIAGRAMA ── */}

        {/* FILA 1: pasos comunes */}
        <Reveal delay={0.16}>
          <div style={{ marginBottom: '2rem' }}>
            <p style={{
              fontFamily: 'var(--font-hanken)',
              fontSize: '0.58rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(28,26,20,0.35)',
              marginBottom: '1rem',
            }}>
              Proceso común
            </p>

            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.5rem',
              flexWrap: 'wrap',
            }}>
              <Step number="01" label="Cosecha" description="Tallo entero cortado a máquina en campo propio" />
              <Arrow />
              <Step number="02" label="Secado en campo" description="5–7 días al sol, humedad final ≤ 15%" />
              <Arrow />
              <Step number="03" label="Decortización" description="Separación mecánica: shiv (médula) + fibra (corteza)" />
              <Arrow />

              {/* bifurcación */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                flexShrink: 0,
                paddingTop: '1.5rem',
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '2px',
                }}>
                  <svg width="40" height="48" viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* línea horizontal de entrada */}
                    <line x1="0" y1="24" x2="14" y2="24" stroke="rgba(28,26,20,0.25)" strokeWidth="1.5" />
                    {/* bifurcación hacia arriba (rama A) */}
                    <line x1="14" y1="24" x2="14" y2="10" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5" />
                    <line x1="14" y1="10" x2="40" y2="10" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5" />
                    <polyline points="35,5 41,10 35,15" fill="none" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5" strokeLinejoin="round" />
                    {/* bifurcación hacia abajo (rama B) */}
                    <line x1="14" y1="24" x2="14" y2="38" stroke="rgba(113,206,106,0.5)" strokeWidth="1.5" />
                    <line x1="14" y1="38" x2="40" y2="38" stroke="rgba(113,206,106,0.5)" strokeWidth="1.5" />
                    <polyline points="35,33 41,38 35,43" fill="none" stroke="rgba(113,206,106,0.5)" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* RAMAS A + B */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1.5rem',
        }}>

          {/* RAMA A — HEMPCRETE */}
          <Reveal delay={0.22}>
            <div style={{
              border: BORDER_GOLD,
              borderRadius: '6px',
              overflow: 'hidden',
            }}>
              {/* header rama */}
              <div style={{
                backgroundColor: BG_GOLD,
                padding: '0.75rem 1.25rem',
                borderBottom: BORDER_GOLD,
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}>
                <span style={{
                  fontFamily: 'var(--font-hanken)',
                  fontSize: '0.58rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(28,26,20,0.4)',
                }}>
                  Rama A
                </span>
                <span style={{
                  fontFamily: 'var(--font-garamond)',
                  fontSize: '1.1rem',
                  fontStyle: 'italic',
                  color: 'var(--color-gold)',
                  fontWeight: 500,
                }}>
                  Hempcrete
                </span>
              </div>

              {/* pasos */}
              <div style={{
                padding: '1.25rem',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'flex-start',
                gap: '0.5rem',
                backgroundColor: 'rgba(201,168,76,0.03)',
              }}>
                <Step number="04A" label="Shiv + Cal" description="Mezcla shiv con cal hidráulica en proporción 4:1" variant="gold" />
                <Arrow color="rgba(201,168,76,0.4)" />
                <Step number="05A" label="Mezclado" description="Amasado en seco + incorporación de agua" variant="gold" />
                <Arrow color="rgba(201,168,76,0.4)" />
                <Step number="06A" label="Encofrado" description="Vertido en encofrado modular o prensado en bloques" variant="gold" />
                <Arrow color="rgba(201,168,76,0.4)" />
                <Step number="07A" label="Curado" description="28 días de carbonatación progresiva" variant="gold" />
                <Arrow color="rgba(201,168,76,0.4)" />
                <Step number="08A" label="Muro terminado" description="Panel estructural listo para instalación" variant="gold" />
              </div>

              {/* stats */}
              <div style={{
                borderTop: BORDER_GOLD,
                padding: '1rem 1.25rem',
                backgroundColor: BG_GOLD,
                display: 'flex',
                gap: '2rem',
                flexWrap: 'wrap',
              }}>
                <div>
                  <span style={{
                    fontFamily: 'var(--font-garamond)',
                    fontSize: '1.4rem',
                    fontStyle: 'italic',
                    color: 'var(--color-gold)',
                    fontWeight: 500,
                    display: 'block',
                  }}>
                    75–165 kg CO₂/m³
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-hanken)',
                    fontSize: '0.65rem',
                    color: 'rgba(28,26,20,0.55)',
                    letterSpacing: '0.04em',
                  }}>
                    fijado en muro terminado
                  </span>
                </div>
                <div>
                  <span style={{
                    fontFamily: 'var(--font-garamond)',
                    fontSize: '1.4rem',
                    fontStyle: 'italic',
                    color: 'var(--color-gold)',
                    fontWeight: 500,
                    display: 'block',
                  }}>
                    300–500 años
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-hanken)',
                    fontSize: '0.65rem',
                    color: 'rgba(28,26,20,0.55)',
                    letterSpacing: '0.04em',
                  }}>
                    vida útil del material
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* RAMA B — BIOCHAR */}
          <Reveal delay={0.28}>
            <div style={{
              border: BORDER_GREEN,
              borderRadius: '6px',
              overflow: 'hidden',
            }}>
              {/* header rama */}
              <div style={{
                backgroundColor: BG_GREEN,
                padding: '0.75rem 1.25rem',
                borderBottom: BORDER_GREEN,
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}>
                <span style={{
                  fontFamily: 'var(--font-hanken)',
                  fontSize: '0.58rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(28,26,20,0.4)',
                }}>
                  Rama B
                </span>
                <span style={{
                  fontFamily: 'var(--font-garamond)',
                  fontSize: '1.1rem',
                  fontStyle: 'italic',
                  color: 'var(--color-green)',
                  fontWeight: 500,
                }}>
                  Biochar
                </span>
              </div>

              {/* pasos */}
              <div style={{
                padding: '1.25rem',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'flex-start',
                gap: '0.5rem',
                backgroundColor: 'rgba(113,206,106,0.03)',
              }}>
                <Step number="04B" label="Fibra + Residuos" description="Fibra de corteza + biomasa residual del proceso" variant="green" />
                <Arrow color="rgba(113,206,106,0.4)" />
                <Step number="05B" label="Pirólisis" description="500–600°C en atmósfera controlada sin oxígeno" variant="green" />
                <Arrow color="rgba(113,206,106,0.4)" />
                <Step number="06B" label="Biochar" description="Material carbonoso poroso, pH neutro a alcalino" variant="green" />
                <Arrow color="rgba(113,206,106,0.4)" />
                <Step number="07B" label="Certificación EBC" description="Análisis de laboratorio + trazabilidad de cadena" variant="green" />
              </div>

              {/* stats */}
              <div style={{
                borderTop: BORDER_GREEN,
                padding: '1rem 1.25rem',
                backgroundColor: BG_GREEN,
                display: 'flex',
                gap: '2rem',
                flexWrap: 'wrap',
              }}>
                <div>
                  <span style={{
                    fontFamily: 'var(--font-garamond)',
                    fontSize: '1.4rem',
                    fontStyle: 'italic',
                    color: 'var(--color-green)',
                    fontWeight: 500,
                    display: 'block',
                  }}>
                    2,9 t CO₂e / ton
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-hanken)',
                    fontSize: '0.65rem',
                    color: 'rgba(28,26,20,0.55)',
                    letterSpacing: '0.04em',
                  }}>
                    créditos de carbono por tonelada
                  </span>
                </div>
                <div>
                  <span style={{
                    fontFamily: 'var(--font-garamond)',
                    fontSize: '1.4rem',
                    fontStyle: 'italic',
                    color: 'var(--color-green)',
                    fontWeight: 500,
                    display: 'block',
                  }}>
                    +1.000 años
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-hanken)',
                    fontSize: '0.65rem',
                    color: 'rgba(28,26,20,0.55)',
                    letterSpacing: '0.04em',
                  }}>
                    permanencia en suelo
                  </span>
                </div>
                <div>
                  <span style={{
                    fontFamily: 'var(--font-garamond)',
                    fontSize: '1.4rem',
                    fontStyle: 'italic',
                    color: 'var(--color-green)',
                    fontWeight: 500,
                    display: 'block',
                  }}>
                    USD 148–170/t
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-hanken)',
                    fontSize: '0.65rem',
                    color: 'rgba(28,26,20,0.55)',
                    letterSpacing: '0.04em',
                  }}>
                    precio de mercado actual
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── FOOTER — TRES MÉTRICAS ── */}
        <Reveal delay={0.34}>
          <div style={{
            marginTop: '4.5rem',
            paddingTop: '3rem',
            borderTop: '1px solid rgba(28,26,20,0.1)',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            backgroundColor: 'rgba(28,26,20,0.08)',
          }}>

            {[
              {
                value: '0%',
                label: 'Residuos de la cosecha',
                description: 'Toda la biomasa ingresa a una de las dos ramas productivas.',
              },
              {
                value: '2',
                label: 'Líneas de negocio por ciclo',
                description: 'Hempcrete y biochar operan simultáneamente con la misma materia prima.',
              },
              {
                value: '3',
                label: 'Flujos de créditos de carbono',
                description: 'Captura durante el cultivo, fijación en hempcrete, y permanencia en biochar.',
              },
            ].map((metric, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'var(--color-parchment)',
                  padding: '2.5rem 2rem 2rem',
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-garamond)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(3rem, 4vw, 4.5rem)',
                  fontWeight: 400,
                  color: 'var(--color-ink)',
                  lineHeight: 1,
                  display: 'block',
                  marginBottom: '0.75rem',
                }}>
                  {metric.value}
                </span>
                <span style={{
                  fontFamily: 'var(--font-hanken)',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-ink)',
                  display: 'block',
                  marginBottom: '0.6rem',
                }}>
                  {metric.label}
                </span>
                <span style={{
                  fontFamily: 'var(--font-hanken)',
                  fontSize: '0.8rem',
                  color: 'rgba(28,26,20,0.55)',
                  lineHeight: 1.6,
                  display: 'block',
                }}>
                  {metric.description}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

      </div>

      {/* línea decorativa inferior */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)',
      }} />
    </section>
  )
}
