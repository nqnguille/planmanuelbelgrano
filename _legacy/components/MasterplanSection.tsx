'use client'
import { motion } from 'framer-motion'
import { Reveal } from '@/components/ui/Reveal'
import { CONTENT } from '@/lib/content'

const NODE_ICONS = [
  /* SEMILLA — seed */
  <svg key="s" viewBox="0 0 32 32" fill="none" width="22" height="22">
    <ellipse cx="16" cy="16" rx="7" ry="10" stroke="currentColor" strokeWidth="1.1"/>
    <path d="M16 26C16 26 10 20 10 14" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <path d="M16 26C16 26 22 20 22 14" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <line x1="16" y1="6" x2="16" y2="26" stroke="currentColor" strokeWidth="0.8"/>
  </svg>,
  /* CAMPO — plant field */
  <svg key="c" viewBox="0 0 32 32" fill="none" width="22" height="22">
    <path d="M16 28V10" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
    <path d="M16 16C16 16 10 13 8 8C12 8 16 12 16 12" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
    <path d="M16 20C16 20 22 17 24 12C20 11 16 16 16 16" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
    <path d="M8 28H24" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
  </svg>,
  /* FIBRA — bundled fibers */
  <svg key="f" viewBox="0 0 32 32" fill="none" width="22" height="22">
    <path d="M8 10C10 14 10 18 8 22" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <path d="M12 8C14 13 14 19 12 24" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <path d="M16 7C18 13 18 19 16 25" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
    <path d="M20 8C22 13 22 19 20 24" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <path d="M24 10C26 14 26 18 24 22" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <path d="M6 14H26M6 18H26" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round"/>
  </svg>,
  /* PROCESAMIENTO — gear */
  <svg key="p" viewBox="0 0 32 32" fill="none" width="22" height="22">
    <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.1"/>
    <path d="M16 6v3M16 23v3M6 16h3M23 16h3M8.9 8.9l2.1 2.1M21 21l2.1 2.1M8.9 23.1l2.1-2.1M21 11l2.1-2.1" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
  </svg>,
  /* MATERIALES — blocks */
  <svg key="m" viewBox="0 0 32 32" fill="none" width="22" height="22">
    <rect x="5" y="16" width="10" height="10" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round"/>
    <rect x="17" y="16" width="10" height="10" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round"/>
    <rect x="11" y="7" width="10" height="10" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round"/>
  </svg>,
  /* VIVIENDAS — house */
  <svg key="v" viewBox="0 0 32 32" fill="none" width="22" height="22">
    <path d="M4 14L16 4L28 14" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 12V26H25V12" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="13" y="19" width="6" height="7" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
    <rect x="9" y="16" width="5" height="4" stroke="currentColor" strokeWidth="0.9" strokeLinejoin="round"/>
  </svg>,
  /* CARBONO — CO₂ leaf */
  <svg key="co2" viewBox="0 0 32 32" fill="none" width="22" height="22">
    <path d="M7 27C7 27 9 16 16 11C23 6 28 8 28 8C28 8 26 15 20 19C14 23 7 27 7 27Z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 27C7 27 11 23 16 19" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <text x="4" y="13" fontSize="5" fontFamily="sans-serif" fill="currentColor" fontWeight="500">CO₂</text>
  </svg>,
  /* BIOCHAR — flame/fire */
  <svg key="bio" viewBox="0 0 32 32" fill="none" width="22" height="22">
    <path d="M16 28C10 28 6 23 6 18C6 13 10 10 13 8C12 12 14 13 14 13C14 13 12 10 16 6C16 6 18 11 20 12C20 12 22 9 21 7C24 10 26 14 26 18C26 23 22 28 16 28Z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 28C16 28 13 24 13 21C13 19 14 18 16 17C18 18 19 19 19 21C19 24 16 28 16 28Z" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
]

const BIOCHAR_NODES = [
  { id: 'residuos', label: 'Residuos', desc: 'Fibra + polvo de shiv' },
  { id: 'pirolisis', label: 'Pirólisis', desc: '500–600°C' },
  { id: 'biochar', label: 'Biochar', desc: 'Carbono estabilizado' },
  { id: 'credito-bio', label: 'Crédito CDR', desc: '+1.000 años' },
]

const BIOCHAR_NODE_ICONS = [
  /* RESIDUOS */
  <svg key="r" viewBox="0 0 32 32" fill="none" width="22" height="22">
    <path d="M8 12L16 8L24 12L24 20L16 24L8 20Z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round"/>
    <path d="M8 12L16 16M16 16L24 12M16 16L16 24" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round"/>
  </svg>,
  /* PIRÓLISIS — flame */
  <svg key="pir" viewBox="0 0 32 32" fill="none" width="22" height="22">
    <path d="M16 28C10 28 6 23 6 18C6 13 10 10 13 8C12 12 14 13 14 13C14 13 12 10 16 6C16 6 18 11 20 12C20 12 22 9 21 7C24 10 26 14 26 18C26 23 22 28 16 28Z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  /* BIOCHAR — carbon atom */
  <svg key="bc" viewBox="0 0 32 32" fill="none" width="22" height="22">
    <circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="1.1"/>
    <ellipse cx="16" cy="16" rx="10" ry="5" stroke="currentColor" strokeWidth="1" strokeDasharray="2 1.5"/>
    <ellipse cx="16" cy="16" rx="5" ry="10" stroke="currentColor" strokeWidth="1" strokeDasharray="2 1.5"/>
  </svg>,
  /* CRÉDITO CDR — shield check */
  <svg key="cdr" viewBox="0 0 32 32" fill="none" width="22" height="22">
    <path d="M16 4L6 8V16C6 21.5 10.5 26.5 16 28C21.5 26.5 26 21.5 26 16V8L16 4Z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round"/>
    <path d="M11 16L14 19L21 13" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
]

export function MasterplanSection() {
  const c = CONTENT.masterplan
  return (
    <section
      id="s05"
      className="overflow-hidden"
      style={{ backgroundColor: 'var(--color-cream)' }}
    >
      <div style={{ height: '1px', backgroundColor: 'rgba(139,100,42,0.15)' }} />

      <div className="px-8 lg:px-20 xl:px-28 py-24 lg:py-36">
        <div className="max-w-7xl mx-auto">

          {/* Header row */}
          <div className="grid lg:grid-cols-2 gap-10 mb-20 lg:mb-24">
            <div>
              <Reveal>
                <p style={{
                  fontFamily: 'var(--font-hanken)', fontSize: '0.62rem',
                  letterSpacing: '0.22em', textTransform: 'uppercase',
                  color: 'var(--color-gold)', marginBottom: '2rem',
                }}>
                  {c.label}
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 style={{
                  fontFamily: 'var(--font-garamond)',
                  fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
                  fontWeight: 400, lineHeight: 1.08, color: 'var(--color-ink)',
                }}>
                  {c.headline.split('\n').map((l, i, a) => (
                    <span key={i}>{l}{i < a.length - 1 && <br />}</span>
                  ))}
                </h2>
              </Reveal>
            </div>

            <Reveal delay={0.16} className="flex flex-col justify-end">
              <p style={{
                fontFamily: 'var(--font-garamond)', fontStyle: 'italic',
                fontSize: 'clamp(1rem, 1.6vw, 1.3rem)',
                color: 'rgba(28,26,20,0.58)', lineHeight: 1.5,
                marginBottom: '1rem',
              }}>
                {c.sub}
              </p>
            </Reveal>
          </div>

          {/* Pipeline */}
          <div className="relative">
            {/* Animated connector line */}
            <motion.div
              style={{
                position: 'absolute', top: '27px',
                left: '4%', right: '4%', height: '1px',
                backgroundColor: 'rgba(139,100,42,0.25)',
                transformOrigin: 'left',
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            />

            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${c.nodes.length}, 1fr)`,
              gap: '0.25rem',
            }}>
              {c.nodes.map((node, i) => (
                <motion.div
                  key={node.id}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.35 + i * 0.08 }}
                >
                  {/* Node circle with icon */}
                  <motion.div
                    style={{
                      width: '54px', height: '54px', borderRadius: '50%',
                      border: '1px solid rgba(139,100,42,0.32)',
                      backgroundColor: 'var(--color-cream)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: '0.9rem', position: 'relative', zIndex: 1,
                      color: 'rgba(139,100,42,0.7)',
                      transition: 'all 0.25s',
                      cursor: 'default',
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.45 + i * 0.08 }}
                    whileHover={{
                      borderColor: 'rgba(201,168,76,0.65)',
                      backgroundColor: 'rgba(201,168,76,0.06)',
                      scale: 1.08,
                    }}
                  >
                    {NODE_ICONS[i]}
                  </motion.div>

                  {/* Arrow between nodes (except last) */}
                  {i < c.nodes.length - 1 && (
                    <div style={{
                      position: 'absolute',
                      top: '27px',
                      left: `calc(${(i + 1) * (100 / c.nodes.length)}% - 6px)`,
                      transform: 'translateX(-50%)',
                      zIndex: 2,
                      color: 'rgba(139,100,42,0.35)',
                      fontSize: '10px',
                      lineHeight: 1,
                    }}>
                      ›
                    </div>
                  )}

                  <p style={{
                    fontFamily: 'var(--font-hanken)', fontWeight: 500,
                    fontSize: 'clamp(0.6rem, 0.85vw, 0.72rem)',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: 'var(--color-ink)', marginBottom: '0.35rem',
                    lineHeight: 1.2,
                  }}>
                    {node.label}
                  </p>

                  <p className="hidden lg:block" style={{
                    fontFamily: 'var(--font-hanken)', fontWeight: 300,
                    fontSize: '0.62rem', color: 'rgba(28,26,20,0.48)',
                    lineHeight: 1.45,
                  }}>
                    {node.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── RAMA B: BIOCHAR ── */}
          <div style={{ marginTop: '2rem', position: 'relative' }}>
            {/* Label de rama */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '2.5rem', height: '1px', backgroundColor: 'rgba(113,206,106,0.4)' }} />
              <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '0.56rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(113,206,106,0.7)' }}>
                Rama B · Biochar — aprovechamiento de residuos del proceso
              </p>
              <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(113,206,106,0.15)' }} />
            </div>

            {/* 4 nodos biochar — alineados empezando desde la posición de Procesamiento */}
            <div style={{ marginLeft: `calc(3 / ${c.nodes.length} * 100%)`, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.25rem', position: 'relative' }}>
              {/* línea horizontal verde */}
              <div style={{ position: 'absolute', top: '27px', left: '0', right: '0', height: '1px', backgroundColor: 'rgba(113,206,106,0.2)' }} />

              {BIOCHAR_NODES.map((node, i) => (
                <div key={node.id} className="flex flex-col items-center text-center">
                  <div style={{
                    width: '54px', height: '54px', borderRadius: '50%',
                    border: '1px solid rgba(113,206,106,0.35)',
                    backgroundColor: 'var(--color-cream)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '0.9rem', position: 'relative', zIndex: 1,
                    color: 'rgba(113,206,106,0.7)',
                  }}>
                    {BIOCHAR_NODE_ICONS[i]}
                  </div>
                  <p style={{ fontFamily: 'var(--font-hanken)', fontWeight: 500, fontSize: 'clamp(0.6rem, 0.85vw, 0.72rem)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-ink)', marginBottom: '0.35rem', lineHeight: 1.2 }}>
                    {node.label}
                  </p>
                  <p className="hidden lg:block" style={{ fontFamily: 'var(--font-hanken)', fontWeight: 300, fontSize: '0.62rem', color: 'rgba(28,26,20,0.48)', lineHeight: 1.45 }}>
                    {node.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tagline */}
          <Reveal delay={1}>
            <div style={{
              marginTop: '3.5rem', paddingTop: '2.5rem',
              borderTop: '1px solid rgba(139,100,42,0.14)',
              textAlign: 'center',
            }}>
              <p style={{
                fontFamily: 'var(--font-garamond)', fontStyle: 'italic',
                fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)',
                color: 'rgba(28,26,20,0.55)', letterSpacing: '0.02em',
              }}>
                {c.tagline}
              </p>
            </div>
          </Reveal>

        </div>
      </div>

      <div style={{ height: '1px', backgroundColor: 'rgba(139,100,42,0.15)' }} />
    </section>
  )
}
