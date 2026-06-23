'use client'
import { Reveal } from '@/components/ui/Reveal'

const CARDS = [
  {
    country: 'Bélgica · Fernelmont',
    tag: 'Mayor fabricante de bloques premoldeados de hempcrete de Europa',
    metric: '5M bloques/año',
    name: 'IsoHemp',
    body: 'Fábrica de 2 hectáreas inaugurada en 2021 (inversión €5M). Distribuyen en FR, DE, NL, ES, DK, IT. Ofrecen capacitación certificada para arquitectos y constructores. Referencia de escala industrial.',
    url: 'isohemp.com',
    highlight: false,
  },
  {
    country: 'Ucrania / Polonia / USA',
    tag: 'Licencia territorial disponible para Argentina',
    metric: 'Fifth Element Binder',
    name: 'Hempire',
    body: 'Aglutinante 100% natural, sin cemento ni cal hidráulica. Hempcrete de muy baja densidad. Venden licencias exclusivas de 5 años por territorio — Argentina no está asignado. Incluye 24t de aditivo + training + soporte 365 días.',
    url: 'hempire.tech',
    highlight: true,
  },
  {
    country: 'Países Bajos · Oude Pekela',
    tag: 'La procesadora de cáñamo más antigua y grande de Europa',
    metric: '55.000 t/año',
    name: 'HempFlax',
    body: 'Fundada en 1993. Dos líneas de decortización de 77m y 55m. Integración vertical completa: cultivo + procesamiento + productos. El estándar de referencia para entender la cadena primaria a escala.',
    url: 'hempflax.com',
    highlight: false,
  },
  {
    country: 'Reino Unido · Derbyshire',
    tag: 'Cursos hands-on para emprendedores',
    metric: 'Cursos 1–2 días',
    name: 'UK Hempcrete',
    body: 'Ofrece formación práctica en obra: teoría + aplicación en vivo. Cursos públicos regulares y formación in-situ a medida. El punto de entrada más accesible para la escalera del conocimiento.',
    url: 'ukhempcrete.com',
    contact: 'training@ukhempcrete.com',
    highlight: false,
  },
]

export function BenchmarkSection() {
  const BORDER_GOLD = '1px solid rgba(201,168,76,0.15)'

  return (
    <section
      id="s-benchmarks"
      style={{ backgroundColor: 'var(--color-cream)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Línea de transición superior */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.35), transparent)',
      }} />

      <div className="max-w-[1400px] mx-auto px-8 lg:px-20 xl:px-28 py-28 lg:py-40" style={{ position: 'relative', zIndex: 1 }}>

        {/* Eyebrow */}
        <Reveal>
          <p style={{
            fontFamily: 'var(--font-hanken)', fontSize: '0.62rem',
            letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'rgba(201,168,76,0.7)', marginBottom: '2.5rem',
          }}>
            Benchmarks internacionales · La escalera del conocimiento
          </p>
        </Reveal>

        {/* Headline */}
        <Reveal delay={0.06}>
          <h2 style={{
            fontFamily: 'var(--font-garamond)', fontStyle: 'italic',
            fontSize: 'clamp(2.6rem, 4.5vw, 4.4rem)',
            fontWeight: 400, lineHeight: 1.05,
            color: 'var(--color-ink)',
            marginBottom: '2rem',
          }}>
            {['El modelo europeo', 'ya existe.', 'Nosotros lo traemos.'].map((line, i) => (
              <span key={i} style={{ display: 'block' }}>{line}</span>
            ))}
          </h2>
        </Reveal>

        {/* Body */}
        <Reveal delay={0.12}>
          <p style={{
            fontFamily: 'var(--font-hanken)', fontWeight: 300,
            fontSize: 'clamp(0.82rem, 1.15vw, 0.95rem)',
            color: 'rgba(28,28,24,0.6)', lineHeight: 1.8,
            maxWidth: '62ch', marginBottom: '5rem',
          }}>
            La industria del hempcrete lleva 30 años de desarrollo en Europa. Estas empresas ya resolvieron los problemas que Argentina tiene por delante. El Plan Manuel Belgrano no necesita inventar desde cero: necesita aprender, adaptar y escalar.
          </p>
        </Reveal>

        {/* Grid 2x2 de cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.5rem',
          marginBottom: '4rem',
        }}>
          {CARDS.map((card, i) => (
            <Reveal key={card.name} delay={0.16 + i * 0.08}>
              <div style={{
                backgroundColor: 'var(--color-ink)',
                border: card.highlight ? '1px solid rgba(113,206,106,0.3)' : BORDER_GOLD,
                padding: '2.5rem',
                height: '100%',
                display: 'flex', flexDirection: 'column', gap: '1.25rem',
                position: 'relative',
              }}>
                {/* Badge oportunidad activa */}
                {card.highlight && (
                  <div style={{
                    position: 'absolute', top: '1.5rem', right: '1.5rem',
                    backgroundColor: 'rgba(113,206,106,0.12)',
                    border: '1px solid rgba(113,206,106,0.3)',
                    borderRadius: '100px',
                    padding: '0.3rem 0.85rem',
                    fontFamily: 'var(--font-hanken)', fontSize: '0.55rem',
                    letterSpacing: '0.08em', fontWeight: 500,
                    color: '#71CE6A',
                  }}>
                    → Oportunidad activa
                  </div>
                )}

                {/* País */}
                <p style={{
                  fontFamily: 'var(--font-hanken)', fontSize: '0.55rem',
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: 'rgba(201,168,76,0.5)',
                }}>
                  {card.country}
                </p>

                {/* Tag */}
                <p style={{
                  fontFamily: 'var(--font-hanken)', fontSize: '0.68rem',
                  color: 'rgba(247,246,235,0.45)', lineHeight: 1.5,
                  paddingRight: card.highlight ? '8rem' : '0',
                }}>
                  {card.tag}
                </p>

                {/* Métrica */}
                <p style={{
                  fontFamily: 'var(--font-garamond)',
                  fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                  fontWeight: 400, lineHeight: 1,
                  color: card.highlight ? '#71CE6A' : 'var(--color-gold)',
                }}>
                  {card.metric}
                </p>

                {/* Divisor */}
                <div style={{
                  width: '24px', height: '1px',
                  backgroundColor: card.highlight ? 'rgba(113,206,106,0.25)' : 'rgba(201,168,76,0.2)',
                }} />

                {/* Body */}
                <p style={{
                  fontFamily: 'var(--font-hanken)', fontWeight: 300,
                  fontSize: 'clamp(0.75rem, 1.05vw, 0.84rem)',
                  color: 'rgba(247,246,235,0.38)', lineHeight: 1.75,
                  flexGrow: 1,
                }}>
                  {card.body}
                </p>

                {/* URL / contacto */}
                <div style={{ marginTop: 'auto', paddingTop: '0.75rem' }}>
                  <p style={{
                    fontFamily: 'var(--font-hanken)', fontSize: '0.58rem',
                    letterSpacing: '0.05em',
                    color: card.highlight ? 'rgba(113,206,106,0.4)' : 'rgba(201,168,76,0.35)',
                  }}>
                    {card.url}
                    {card.contact && (
                      <span style={{ color: 'rgba(247,246,235,0.2)', marginLeft: '0.75rem' }}>
                        · {card.contact}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Footer — caja con borde dorado */}
        <Reveal delay={0.5}>
          <div style={{
            border: '1px solid rgba(201,168,76,0.25)',
            padding: '2.5rem 3rem',
            textAlign: 'center',
            backgroundColor: 'rgba(201,168,76,0.03)',
          }}>
            <p style={{
              fontFamily: 'var(--font-garamond)', fontStyle: 'italic',
              fontSize: 'clamp(1rem, 1.6vw, 1.3rem)',
              color: 'rgba(28,28,24,0.65)', lineHeight: 1.7,
            }}>
              Un mes en Europa. Países Bajos → Bélgica → Francia → UK → Polonia.
              <br />
              <span style={{ color: 'var(--color-ink)', fontWeight: 400 }}>
                La escalera del conocimiento: de la decortización industrial a la licencia territorial.
              </span>
            </p>
          </div>
        </Reveal>

      </div>

      {/* Línea de transición inferior */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)',
      }} />
    </section>
  )
}
