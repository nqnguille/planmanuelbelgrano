'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { HempBotanical } from '@/components/ui/HempBotanical'

const STATS = [
  { val: '75–165 kg', label: 'CO₂ fijado por m³', sub: 'sellado de forma permanente en cada muro' },
  { val: 'USD 40–80', label: 'por tCO₂e', sub: 'precio de referencia sectorial · WBCSD 2024' },
  { val: 'USD 1T', label: 'mercado proyectado', sub: 'créditos de alta integridad · BNEF 2037', accent: true },
]

export function CarbonFlipSection() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  /* ── Scroll-driven values ── */
  const compraOpacity   = useTransform(scrollYProgress, [0.05, 0.35, 0.52], [1, 1, 0])
  const compraScale     = useTransform(scrollYProgress, [0.35, 0.52], [1, 0.94])
  const strikeScaleX    = useTransform(scrollYProgress, [0.28, 0.48], [0, 1])
  const produceOpacity  = useTransform(scrollYProgress, [0.44, 0.62], [0, 1])
  const produceY        = useTransform(scrollYProgress, [0.44, 0.62], [32, 0])
  const statsOpacity    = useTransform(scrollYProgress, [0.58, 0.72], [0, 1])
  const statsY          = useTransform(scrollYProgress, [0.58, 0.72], [20, 0])
  const bitcoinOpacity  = useTransform(scrollYProgress, [0.74, 0.88], [0, 1])
  const bitcoinY        = useTransform(scrollYProgress, [0.74, 0.88], [16, 0])
  const greenGlow       = useTransform(scrollYProgress, [0.42, 0.72], [0, 0.07])
  const progressLine    = scrollYProgress

  return (
    <section
      ref={ref}
      id="carbon"
      style={{ height: '270vh', position: 'relative' }}
    >
      {/* ── STICKY VIEWPORT ── */}
      <div style={{
        position: 'sticky', top: 0, height: '100vh',
        backgroundColor: 'var(--color-ink)',
        overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
      }}>

        {/* Scroll progress bar */}
        <motion.div style={{
          position: 'absolute', top: 0, left: 0,
          height: '2px', width: '100%',
          scaleX: progressLine,
          transformOrigin: 'left',
          background: 'linear-gradient(to right, rgba(201,168,76,0.5), rgba(113,206,106,0.6))',
          zIndex: 10,
        }} />

        {/* Green glow que emerge al hacer el giro */}
        <motion.div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 70% 60% at 55% 42%, rgba(113,206,106,1) 0%, transparent 70%)',
          opacity: greenGlow,
          pointerEvents: 'none', zIndex: 0,
        }} />

        {/* Botanical watermark */}
        <div style={{
          position: 'absolute', right: '-4%', top: '50%',
          transform: 'translateY(-50%)', opacity: 0.03,
          pointerEvents: 'none', zIndex: 0,
        }}>
          <HempBotanical opacity={0.08} />
        </div>

        {/* ── CONTENIDO ── */}
        <div
          className="max-w-[1400px] mx-auto px-8 lg:px-20 xl:px-28 w-full"
          style={{
            position: 'relative', zIndex: 1,
            flex: 1, display: 'flex', flexDirection: 'column',
            justifyContent: 'space-between',
            paddingTop: '5vh', paddingBottom: '5vh',
          }}
        >

          {/* Fila superior — label + scroll hint */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{
              fontFamily: 'var(--font-hanken)', fontSize: '0.62rem',
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'rgba(113,206,106,0.55)',
            }}>
              CO₂ · El Giro
            </p>
            <p style={{
              fontFamily: 'var(--font-hanken)', fontSize: '0.5rem',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'rgba(247,246,235,0.15)',
            }}>
              desplazá para continuar
            </p>
          </div>

          {/* ── PIEZA CENTRAL — la inversión ── */}
          <div style={{ textAlign: 'center', userSelect: 'none' }}>

            {/* "YPF" eyebrow */}
            <p style={{
              fontFamily: 'var(--font-hanken)', fontSize: '0.7rem',
              letterSpacing: '0.35em', textTransform: 'uppercase',
              color: 'rgba(247,246,235,0.22)',
              marginBottom: '1.5rem',
            }}>
              YPF
            </p>

            {/* Contenedor del flip — altura fija para evitar colapso */}
            <div style={{
              position: 'relative',
              height: 'clamp(100px, 15vw, 165px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '1.25rem',
            }}>

              {/* COMPRA — se tacha y desvanece */}
              <motion.div
                style={{
                  position: 'absolute',
                  opacity: compraOpacity,
                  scale: compraScale,
                  display: 'inline-block',
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-garamond)', fontStyle: 'italic',
                  fontSize: 'clamp(4.5rem, 11vw, 9.5rem)',
                  fontWeight: 400, lineHeight: 1,
                  color: 'rgba(180,48,28,0.75)',
                  display: 'block',
                }}>
                  compra
                </span>
                {/* Línea de tachado animada */}
                <motion.div style={{
                  position: 'absolute',
                  top: '50%', left: '-1%',
                  height: '3px', width: '102%',
                  backgroundColor: 'rgba(180,48,28,0.65)',
                  scaleX: strikeScaleX,
                  transformOrigin: 'left',
                  borderRadius: '2px',
                  marginTop: '-1.5px',
                }} />
              </motion.div>

              {/* PRODUCE — emerge */}
              <motion.div
                style={{
                  position: 'absolute',
                  opacity: produceOpacity,
                  y: produceY,
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-garamond)', fontStyle: 'italic',
                  fontSize: 'clamp(4.5rem, 11vw, 9.5rem)',
                  fontWeight: 400, lineHeight: 1,
                  color: '#71CE6A',
                  display: 'block',
                }}>
                  produce
                </span>
              </motion.div>
            </div>

            {/* "créditos de carbono" */}
            <p style={{
              fontFamily: 'var(--font-garamond)', fontStyle: 'italic',
              fontSize: 'clamp(1.2rem, 2.2vw, 1.85rem)',
              color: 'rgba(247,246,235,0.35)',
              letterSpacing: '0.03em',
            }}>
              créditos de carbono
            </p>
          </div>

          {/* ── FRANJA INFERIOR — stats + Bitcoin ── */}
          <div>

            {/* Stats strip */}
            <motion.div style={{ opacity: statsOpacity, y: statsY }}>
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1px', backgroundColor: 'rgba(201,168,76,0.08)',
                border: '1px solid rgba(201,168,76,0.1)',
                marginBottom: '2rem',
              }}>
                {STATS.map((s, i) => (
                  <div key={i} style={{
                    backgroundColor: s.accent ? 'rgba(113,206,106,0.04)' : 'var(--color-ink)',
                    padding: '1.5rem 2rem',
                  }}>
                    <p style={{
                      fontFamily: 'var(--font-garamond)',
                      fontSize: 'clamp(1.4rem, 2.2vw, 2rem)',
                      fontWeight: 400, lineHeight: 1,
                      color: s.accent ? '#71CE6A' : 'var(--color-gold)',
                      marginBottom: '0.35rem',
                    }}>
                      {s.val}
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-hanken)', fontSize: '0.52rem',
                      letterSpacing: '0.14em', textTransform: 'uppercase',
                      color: s.accent ? 'rgba(113,206,106,0.45)' : 'rgba(201,168,76,0.45)',
                      marginBottom: '0.3rem',
                    }}>
                      {s.label}
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-hanken)', fontWeight: 300,
                      fontSize: '0.57rem', color: 'rgba(247,246,235,0.2)',
                      lineHeight: 1.5,
                    }}>
                      {s.sub}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Analogía Bitcoin */}
            <motion.div style={{ opacity: bitcoinOpacity, y: bitcoinY }}>
              <div style={{
                display: 'flex', alignItems: 'flex-start', gap: '1.5rem',
              }}>
                <div style={{
                  borderLeft: '2px solid rgba(113,206,106,0.22)',
                  paddingLeft: '1.5rem', flex: 1,
                }}>
                  <p style={{
                    fontFamily: 'var(--font-garamond)', fontStyle: 'italic',
                    fontSize: 'clamp(0.88rem, 1.3vw, 1.1rem)',
                    color: 'rgba(247,246,235,0.45)', lineHeight: 1.55,
                  }}>
                    Producir créditos de carbono hoy es como minar Bitcoin en 2010.
                    El activo existe, la demanda global crece, y la oferta certificada en Argentina es casi cero.
                  </p>
                </div>
                <p style={{
                  fontFamily: 'var(--font-garamond)', fontStyle: 'italic',
                  fontSize: '0.7rem', color: 'rgba(113,206,106,0.35)',
                  whiteSpace: 'nowrap', paddingTop: '0.2rem',
                }}>
                  La ventana no va a<br />estar abierta para siempre.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
