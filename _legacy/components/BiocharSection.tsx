'use client'
import { Reveal } from '@/components/ui/Reveal'

const BORDER = '1px solid rgba(201,168,76,0.12)'
const GAP_BG = 'rgba(201,168,76,0.08)'

const cards = [
  {
    category: 'Feedstock',
    metric: '700 kg/ha',
    metricColor: 'var(--color-cream)',
    metricLabelColor: 'rgba(247,246,235,0.35)',
    metricLabel: 'de hurda y residuos disponibles por hectárea',
    body: 'La fibra sobrante del proceso de hempcrete, los recortes y el polvo de shiv se convierten en feedstock para el reactor de pirólisis. Cero materia prima adicional.',
  },
  {
    category: 'Crédito de carbono',
    metric: '2,9 t CO₂e',
    metricColor: '#71CE6A',
    metricLabelColor: 'rgba(113,206,106,0.45)',
    metricLabel: 'secuestradas por tonelada de biochar producido',
    body: 'El carbono pirogenico del biochar es estable a escala milenial. La permanencia certificada supera los 1.000 años, lo que le da acceso al mercado de CDR (Carbon Dioxide Removal) de alta integridad, el segmento con mayor precio del mercado voluntario.',
  },
  {
    category: 'Precio de mercado 2025–2026',
    metric: 'USD 164/t',
    metricColor: 'var(--color-gold)',
    metricLabelColor: 'rgba(201,168,76,0.45)',
    metricLabel: 'precio promedio crédito BCR (Biochar Carbon Removal)',
    body: 'Rango: USD 125–170/t CO₂e según estándar de certificación. Verificado por Puro.earth, Isometric, DNV/SGS. Incremento del 25% vs 2023. Compradores activos: Microsoft, Shell, Google.',
  },
  {
    category: 'Certificación',
    metric: 'EBC',
    metricColor: 'var(--color-cream)',
    metricLabelColor: 'rgba(247,246,235,0.35)',
    metricLabel: 'European Biochar Certificate — el estándar internacional',
    body: 'La EBC version 10.5 (agosto 2025) es el estándar de referencia. Proceso: pre-auditoría técnica + muestreo + auditoría online. La paja de cáñamo está en la lista positiva de feedstocks elegibles.',
  },
]

export function BiocharSection() {
  return (
    <section style={{ backgroundColor: 'var(--color-ink)', position: 'relative', overflow: 'hidden' }}>

      {/* Top separator */}
      <div style={{
        height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.28), transparent)',
      }} />

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
                Biochar · Segunda línea de negocio
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 style={{
                fontFamily: 'var(--font-garamond)', fontStyle: 'italic',
                fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
                fontWeight: 400, lineHeight: 1.08,
                color: 'var(--color-cream)',
                whiteSpace: 'pre-line',
              }}>
                {'Los residuos\ndel proceso\nson el segundo activo.'}
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.16} className="flex flex-col justify-end">
            <p style={{
              fontFamily: 'var(--font-hanken)', fontWeight: 300,
              fontSize: 'clamp(0.82rem, 1.2vw, 0.95rem)',
              color: 'rgba(247,246,235,0.42)', lineHeight: 1.85,
              maxWidth: '52ch',
            }}>
              El biochar producido con los residuos de cáñamo es carbono estabilizado que permanece fijo por más de 1.000 años. No es compensación: es remoción permanente verificada. El mercado de créditos de biochar cotiza entre USD 148 y 170 por tonelada de CO₂e, muy por encima del precio de los créditos de cultivo convencional.
            </p>
          </Reveal>
        </div>

        {/* ── GRID 2x2 CARDS ── */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: '1px', backgroundColor: GAP_BG, border: BORDER }}
        >
          {cards.map((card, i) => (
            <Reveal key={i} delay={0.06 + i * 0.08}>
              <div style={{
                backgroundColor: 'var(--color-ink)',
                padding: '3rem 3rem 3.5rem',
                height: '100%',
              }}>
                {/* Category */}
                <p style={{
                  fontFamily: 'var(--font-hanken)', fontSize: '0.57rem',
                  letterSpacing: '0.22em', textTransform: 'uppercase',
                  color: 'var(--color-gold)', marginBottom: '1.75rem',
                }}>
                  {card.category}
                </p>

                {/* Metric */}
                <p style={{
                  fontFamily: 'var(--font-garamond)',
                  fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)',
                  fontWeight: 400, lineHeight: 0.95,
                  color: card.metricColor, marginBottom: '0.35rem',
                }}>
                  {card.metric}
                </p>

                {/* Metric label */}
                <p style={{
                  fontFamily: 'var(--font-hanken)', fontSize: '0.62rem',
                  color: card.metricLabelColor, marginBottom: '2rem',
                  lineHeight: 1.5,
                }}>
                  {card.metricLabel}
                </p>

                {/* Divider */}
                <div style={{
                  width: '24px', height: '1px',
                  backgroundColor: 'rgba(201,168,76,0.35)',
                  marginBottom: '1.75rem',
                }} />

                {/* Body */}
                <p style={{
                  fontFamily: 'var(--font-hanken)', fontWeight: 300,
                  fontSize: 'clamp(0.78rem, 1.1vw, 0.88rem)',
                  color: 'rgba(247,246,235,0.45)',
                  lineHeight: 1.8, maxWidth: '44ch',
                }}>
                  {card.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── FOOTER ── */}
        <Reveal delay={0.42}>
          <div style={{
            borderTop: '1px solid rgba(201,168,76,0.12)',
            paddingTop: '2.5rem',
            marginTop: '0',
            textAlign: 'center',
          }}>
            <p style={{
              fontFamily: 'var(--font-garamond)', fontStyle: 'italic',
              fontSize: 'clamp(0.88rem, 1.3vw, 1.05rem)',
              color: 'rgba(247,246,235,0.35)',
              lineHeight: 1.7,
            }}>
              Con 100 toneladas de biochar por año: ~250 t CO₂e → USD 37.000–42.500 anuales solo en créditos, más USD 20.000–60.000 en producto físico.
            </p>
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
