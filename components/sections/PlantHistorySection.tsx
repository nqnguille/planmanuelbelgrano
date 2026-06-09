'use client'
import { Reveal } from '@/components/ui/Reveal'

const TIMELINE = [
  {
    era: 'La antigüedad',
    text: 'Una de las primeras plantas cultivadas por el ser humano. Asia Central. China. Miles de años de uso.',
    type: 'normal',
  },
  {
    era: 'El mundo clásico',
    text: 'Cuerdas y velas en los barcos romanos. Hempcrete en las primeras construcciones documentadas. Todavía en pie.',
    type: 'normal',
  },
  {
    era: 'La Edad Media',
    text: 'Iglesias y puentes europeos construidos con cáñamo. El material de construcción más durable conocido.',
    type: 'normal',
  },
  {
    era: 'El Río de la Plata',
    text: 'Belgrano escribe sobre el cáñamo como cultivo estratégico para la nación.',
    type: 'belgrano',
  },
  {
    era: 'El decreto',
    text: 'Desde Washington, prohibieron la semilla. El mundo entero se creyó la mentira.',
    type: 'villain',
  },
  {
    era: 'Hoy',
    text: 'Argentina re-legaliza el cáñamo industrial. La planta vuelve.',
    type: 'accent',
  },
]

export function PlantHistorySection() {
  return (
    <section
      id="s04"
      style={{ backgroundColor: 'var(--color-parchment)', position: 'relative', overflow: 'hidden' }}
    >
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: `radial-gradient(ellipse 55% 65% at 4% 45%, rgba(139,100,42,0.07) 0%, transparent 60%)`,
      }} />

      <div
        className="relative max-w-[1400px] mx-auto px-8 lg:px-20 xl:px-28 pt-28 lg:pt-40 pb-20 lg:pb-28"
        style={{ zIndex: 1 }}
      >

        {/* Eyebrow */}
        <Reveal>
          <p style={{
            fontFamily: 'var(--font-hanken)', fontSize: '0.62rem',
            letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'var(--color-gold)', marginBottom: '2.75rem',
          }}>
            04 · La Planta
          </p>
        </Reveal>

        {/* Headline — ancho completo */}
        <Reveal delay={0.06}>
          <h2 style={{
            fontFamily: 'var(--font-garamond)',
            fontStyle: 'italic',
            fontSize: 'clamp(2.8rem, 5vw, 4.6rem)',
            fontWeight: 400,
            lineHeight: 1.03,
            color: 'var(--color-ink)',
            marginBottom: '3rem',
            maxWidth: '22ch',
          }}>
            No es una innovación.<br />Es una restitución.
          </h2>
        </Reveal>

        {/* Narrativa — 2 cols: copy | pull quote */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 mb-20 lg:mb-28">
          <Reveal delay={0.14}>
            <div style={{
              fontFamily: 'var(--font-hanken)', fontWeight: 300,
              fontSize: 'clamp(0.88rem, 1.25vw, 0.98rem)',
              color: 'rgba(28,26,20,0.60)',
              lineHeight: 1.9,
              display: 'flex', flexDirection: 'column', gap: '1.4rem',
            }}>
              <p>
                El hempcrete no nació en el siglo XXI. Los romanos construían con cáñamo. La estructura más antigua documentada tiene mil quinientos años y todavía está en pie en el Valle del Mosa, Francia.
              </p>
              <p>
                Belgrano lo conocía. Escribía sobre el cáñamo como cultivo estratégico para el Río de la Plata.
              </p>
              <p>
                La única razón por la que Argentina no construyó con esto durante el siglo pasado es que desde Washington, prohibieron la semilla. Y nosotros seguimos el decreto.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div style={{
              display: 'flex', alignItems: 'flex-start', paddingTop: '0.5rem',
            }}>
              <blockquote style={{
                borderLeft: '2px solid rgba(201,168,76,0.5)',
                paddingLeft: '2rem',
              }}>
                <p style={{
                  fontFamily: 'var(--font-garamond)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                  fontWeight: 400,
                  lineHeight: 1.18,
                  color: 'var(--color-ink)',
                  marginBottom: '0.75rem',
                }}>
                  Belgrano tenía razón.
                </p>
                <p style={{
                  fontFamily: 'var(--font-garamond)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(1rem, 1.7vw, 1.35rem)',
                  color: 'rgba(28,26,20,0.42)',
                  lineHeight: 1.3,
                }}>
                  Tardamos doscientos años en volver.
                </p>
              </blockquote>
            </div>
          </Reveal>
        </div>

        {/* ── TIMELINE HORIZONTAL ── */}
        <Reveal delay={0.3}>
          <div style={{
            borderTop: '1px solid rgba(139,100,42,0.15)',
            paddingTop: '0.25rem',
          }}>
            <p style={{
              fontFamily: 'var(--font-hanken)', fontSize: '0.56rem',
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'rgba(139,100,42,0.38)', marginBottom: '2.5rem',
              marginTop: '1.5rem',
            }}>
              La historia que no se contó
            </p>

            {/* Nodos */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${TIMELINE.length}, 1fr)`,
              position: 'relative',
            }}>

              {/* Línea horizontal conectando los puntos */}
              <div style={{
                position: 'absolute',
                top: '4px',
                left: `calc(100% / ${TIMELINE.length * 2})`,
                right: `calc(100% / ${TIMELINE.length * 2})`,
                height: '1px',
                background: `linear-gradient(to right,
                  rgba(201,168,76,0.2) 0%,
                  rgba(201,168,76,0.25) 55%,
                  rgba(160,50,30,0.35) 72%,
                  rgba(160,50,30,0.2) 85%,
                  rgba(113,206,106,0.35) 100%
                )`,
              }} />

              {TIMELINE.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingRight: i < TIMELINE.length - 1 ? '1rem' : 0,
                    paddingLeft: i > 0 ? '1rem' : 0,
                  }}
                >
                  {/* Dot */}
                  <div style={{
                    width: item.type === 'villain' ? '10px' : item.type === 'accent' ? '10px' : '8px',
                    height: item.type === 'villain' ? '10px' : item.type === 'accent' ? '10px' : '8px',
                    borderRadius: '50%',
                    flexShrink: 0,
                    marginBottom: '1.25rem',
                    position: 'relative', zIndex: 1,
                    backgroundColor:
                      item.type === 'villain' ? 'rgba(160,50,30,0.65)' :
                      item.type === 'accent' ? 'var(--color-green)' :
                      item.type === 'belgrano' ? 'rgba(201,168,76,0.7)' :
                      'rgba(201,168,76,0.35)',
                    boxShadow:
                      item.type === 'villain' ? '0 0 0 3px rgba(160,50,30,0.12)' :
                      item.type === 'accent' ? '0 0 0 3px rgba(113,206,106,0.15)' :
                      'none',
                  }} />

                  {/* Era */}
                  <p style={{
                    fontFamily: 'var(--font-garamond)',
                    fontStyle: 'italic',
                    fontSize: 'clamp(0.82rem, 1.1vw, 1rem)',
                    fontWeight: 400,
                    color:
                      item.type === 'villain' ? 'rgba(160,50,30,0.8)' :
                      item.type === 'accent' ? 'var(--color-green)' :
                      item.type === 'belgrano' ? 'var(--color-gold)' :
                      'var(--color-ink)',
                    textAlign: 'center',
                    marginBottom: '0.65rem',
                    lineHeight: 1.2,
                  }}>
                    {item.era}
                  </p>

                  {/* Descripción */}
                  <p style={{
                    fontFamily: 'var(--font-hanken)',
                    fontWeight: item.type === 'villain' ? 400 : 300,
                    fontSize: 'clamp(0.65rem, 0.9vw, 0.75rem)',
                    color:
                      item.type === 'villain' ? 'rgba(28,26,20,0.65)' :
                      item.type === 'accent' ? 'rgba(28,26,20,0.65)' :
                      'rgba(28,26,20,0.45)',
                    textAlign: 'center',
                    lineHeight: 1.65,
                  }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
