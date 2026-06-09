'use client'
import { Reveal } from '@/components/ui/Reveal'

const TIMELINE = [
  {
    year: '~500 d.C.',
    text: 'Primera estructura de hempcrete documentada. Valle del Mosa, Francia. Todavía en pie.',
    type: 'dim',
  },
  {
    year: '1809',
    text: 'Belgrano escribe sobre el cáñamo como cultivo estratégico para el Río de la Plata.',
    type: 'normal',
  },
  {
    year: '1937',
    text: 'EE.UU. dicta la Marihuana Tax Act. La semilla queda prohibida. El mundo entero sigue el decreto.',
    type: 'villain',
  },
  {
    year: '2022',
    text: 'Decreto 883/2022. Argentina re-legaliza el cáñamo industrial.',
    type: 'normal',
  },
  {
    year: '2026',
    text: 'Plan Manuel Belgrano.',
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
        backgroundImage: `radial-gradient(ellipse 60% 70% at 5% 50%, rgba(139,100,42,0.07) 0%, transparent 65%)`,
      }} />

      <div
        className="relative max-w-[1400px] mx-auto px-8 lg:px-20 xl:px-28 py-28 lg:py-44"
        style={{ zIndex: 1 }}
      >
        <Reveal>
          <p style={{
            fontFamily: 'var(--font-hanken)', fontSize: '0.62rem',
            letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'var(--color-gold)', marginBottom: '3rem',
          }}>
            04 · La Planta
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_440px] gap-16 lg:gap-24 items-start">

          {/* Col izquierda — narrativa */}
          <div>
            <Reveal delay={0.06}>
              <h2 style={{
                fontFamily: 'var(--font-garamond)',
                fontStyle: 'italic',
                fontSize: 'clamp(2.8rem, 4.8vw, 4.4rem)',
                fontWeight: 400,
                lineHeight: 1.04,
                color: 'var(--color-ink)',
                marginBottom: '2.5rem',
              }}>
                No es una innovación.<br />Es una restitución.
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <div style={{
                fontFamily: 'var(--font-hanken)', fontWeight: 300,
                fontSize: 'clamp(0.88rem, 1.3vw, 1rem)',
                color: 'rgba(28,26,20,0.62)',
                lineHeight: 1.9,
                display: 'flex', flexDirection: 'column', gap: '1.5rem',
                maxWidth: '50ch',
              }}>
                <p>
                  El hempcrete no nació en el siglo XXI. Los romanos construían con cáñamo. La estructura más antigua documentada tiene mil quinientos años y todavía está en pie en el Valle del Mosa, Francia.
                </p>
                <p>
                  Belgrano lo conocía. Escribía sobre el cáñamo como cultivo estratégico para el Río de la Plata.
                </p>
                <p>
                  La única razón por la que Argentina no construyó con esto durante el siglo XX es que en 1937, desde Washington, prohibieron la semilla. Y nosotros seguimos el decreto.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.38}>
              <blockquote style={{
                borderLeft: '2px solid rgba(201,168,76,0.55)',
                paddingLeft: '1.75rem',
                marginTop: '3.5rem',
              }}>
                <p style={{
                  fontFamily: 'var(--font-garamond)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(1.35rem, 2.4vw, 1.9rem)',
                  fontWeight: 400,
                  lineHeight: 1.2,
                  color: 'var(--color-ink)',
                  marginBottom: '0.6rem',
                }}>
                  Belgrano tenía razón.
                </p>
                <p style={{
                  fontFamily: 'var(--font-garamond)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(1rem, 1.6vw, 1.3rem)',
                  color: 'rgba(28,26,20,0.48)',
                  lineHeight: 1.3,
                }}>
                  Tardamos doscientos años en volver.
                </p>
              </blockquote>
            </Reveal>
          </div>

          {/* Col derecha — timeline */}
          <div style={{ paddingTop: '3.5rem' }}>
            <Reveal delay={0.22}>
              <p style={{
                fontFamily: 'var(--font-hanken)', fontSize: '0.57rem',
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: 'rgba(139,100,42,0.45)', marginBottom: '2.5rem',
              }}>
                La historia que no se contó
              </p>
            </Reveal>

            <div style={{ position: 'relative' }}>
              {/* Línea vertical */}
              <div style={{
                position: 'absolute',
                left: '72px',
                top: '10px',
                bottom: '10px',
                width: '1px',
                backgroundColor: 'rgba(139,100,42,0.18)',
              }} />

              {TIMELINE.map((item, i) => (
                <Reveal key={item.year} delay={0.28 + i * 0.09}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '72px 1fr',
                    gap: '0 1.25rem',
                    marginBottom: i < TIMELINE.length - 1 ? '2.25rem' : 0,
                    alignItems: 'start',
                    opacity: item.type === 'dim' ? 0.5 : 1,
                  }}>
                    {/* Año */}
                    <p style={{
                      fontFamily: 'var(--font-garamond)',
                      fontStyle: 'italic',
                      fontSize: item.type === 'accent' ? '0.92rem' : '0.8rem',
                      color:
                        item.type === 'villain' ? 'rgba(160,50,30,0.8)' :
                        item.type === 'accent' ? 'var(--color-green)' :
                        'var(--color-gold)',
                      textAlign: 'right',
                      paddingTop: '0.2rem',
                      lineHeight: 1.3,
                    }}>
                      {item.year}
                    </p>

                    {/* Punto + texto */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                      <div style={{
                        width: '7px', height: '7px',
                        borderRadius: '50%', flexShrink: 0,
                        marginTop: '0.38rem',
                        backgroundColor:
                          item.type === 'villain' ? 'rgba(160,50,30,0.55)' :
                          item.type === 'accent' ? 'var(--color-green)' :
                          'rgba(201,168,76,0.45)',
                      }} />
                      <p style={{
                        fontFamily: 'var(--font-hanken)',
                        fontWeight: item.type === 'villain' ? 400 : 300,
                        fontSize: '0.78rem',
                        lineHeight: 1.75,
                        color:
                          item.type === 'villain' ? 'rgba(28,26,20,0.72)' :
                          item.type === 'accent' ? 'rgba(28,26,20,0.8)' :
                          'rgba(28,26,20,0.55)',
                      }}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
