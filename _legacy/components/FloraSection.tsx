'use client'
import { Reveal } from '@/components/ui/Reveal'

export function FloraSection() {
  return (
    <section style={{ backgroundColor: 'var(--color-ink)' }}>
      <div className="pt-28 pb-24 lg:pt-40 lg:pb-32 px-8 lg:px-20 xl:px-28">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

          {/* Label superior */}
          <Reveal>
            <p
              style={{
                fontFamily: 'var(--font-hanken)',
                fontSize: '0.62rem',
                fontWeight: 400,
                textTransform: 'uppercase',
                letterSpacing: '0.22em',
                color: 'var(--color-gold, #C9A84C)',
                marginBottom: '1.5rem',
              }}
            >
              Flora Cáñamo Neuquino SRL · Neuquén, Patagonia
            </p>
          </Reveal>

          {/* Logo placeholder */}
          <Reveal delay={0.05}>
            <div style={{ marginBottom: '2.5rem' }}>
              {/* TODO: reemplazar con <Image src="/flora-logo.svg" width={80} height={80} alt="Flora Cáñamo Neuquino" /> */}
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  border: '1px solid rgba(201,168,76,0.30)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-garamond)',
                    fontStyle: 'italic',
                    fontSize: '2.5rem',
                    color: 'var(--color-gold, #C9A84C)',
                    lineHeight: 1,
                    userSelect: 'none',
                  }}
                >
                  F
                </span>
              </div>
            </div>
          </Reveal>

          {/* Headline principal */}
          <Reveal delay={0.1}>
            <h2
              style={{
                fontFamily: 'var(--font-garamond)',
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
                lineHeight: 1.08,
                marginBottom: '3rem',
              }}
            >
              <span style={{ color: '#F7F6EB' }}>
                {'Somos los que'}
                <br />
              </span>
              <span style={{ color: 'var(--color-gold, #C9A84C)' }}>
                lo estamos haciendo posible.
              </span>
            </h2>
          </Reveal>

          {/* Grid 2 columnas */}
          <div
            className="flex flex-col lg:flex-row gap-12 lg:gap-16"
            style={{ marginBottom: '3rem' }}
          >
            {/* Columna izquierda — 60% */}
            <Reveal delay={0.15} className="lg:w-3/5">
              <p
                style={{
                  fontFamily: 'var(--font-hanken)',
                  fontWeight: 300,
                  fontSize: '0.95rem',
                  color: 'rgba(247,246,235,0.60)',
                  lineHeight: 1.85,
                }}
              >
                Flora Cáñamo Neuquino SRL nació en Neuquén en 2023 con una convicción: que el cáñamo industrial podía ser la plataforma agroindustrial que la Patagonia necesitaba. Empezamos cultivando. Aprendimos haciendo. Construimos el primer prototipo de hempcrete en Añelo. Obtuvimos la licencia ARICCAME. Y desarrollamos el sistema productivo que hoy presentamos al país.
              </p>
            </Reveal>

            {/* Columna derecha — 40% */}
            <Reveal delay={0.2} className="lg:w-2/5">
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  'Licencia ARICCAME — ene. 2024',
                  'Primer prototipo hempcrete en Añelo',
                  'Sistema productivo certificable INTI',
                  'Benchmark binacional en marcha — 2026',
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                    }}
                  >
                    <span
                      style={{
                        color: 'var(--color-gold, #C9A84C)',
                        fontFamily: 'var(--font-hanken)',
                        fontWeight: 400,
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                        flexShrink: 0,
                      }}
                    >
                      ›
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-hanken)',
                        fontWeight: 300,
                        fontSize: '0.95rem',
                        color: 'rgba(247,246,235,0.60)',
                        lineHeight: 1.6,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Línea divisoria */}
          <div
            style={{
              height: '1px',
              backgroundColor: 'rgba(201,168,76,0.15)',
              marginBottom: '2rem',
            }}
          />

          {/* Footer row */}
          <Reveal delay={0.25}>
            <div
              className="flex flex-col md:flex-row md:justify-between md:items-center gap-4"
            >
              {/* Fundadores */}
              <p
                style={{
                  fontFamily: 'var(--font-hanken)',
                  fontWeight: 300,
                  fontSize: '0.7rem',
                  color: 'rgba(247,246,235,0.35)',
                }}
              >
                Guillermo Sandoval &amp; Hernán Allemandi · Fundadores
              </p>

              {/* Links de contacto */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', textAlign: 'right' }}>
                <a
                  href="mailto:contacto@planmanuelbelgrano.com.ar"
                  style={{
                    fontFamily: 'var(--font-hanken)',
                    fontWeight: 300,
                    fontSize: '0.7rem',
                    color: 'rgba(247,246,235,0.35)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => ((e.target as HTMLAnchorElement).style.color = 'var(--color-gold, #C9A84C)')}
                  onMouseLeave={e => ((e.target as HTMLAnchorElement).style.color = 'rgba(247,246,235,0.35)')}
                >
                  contacto@planmanuelbelgrano.com.ar
                </a>
                <a
                  href="tel:+5429942299436"
                  style={{
                    fontFamily: 'var(--font-hanken)',
                    fontWeight: 300,
                    fontSize: '0.7rem',
                    color: 'rgba(247,246,235,0.35)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => ((e.target as HTMLAnchorElement).style.color = 'var(--color-gold, #C9A84C)')}
                  onMouseLeave={e => ((e.target as HTMLAnchorElement).style.color = 'rgba(247,246,235,0.35)')}
                >
                  +54 299 422 9436
                </a>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
