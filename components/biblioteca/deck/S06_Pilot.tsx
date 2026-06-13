'use client'

import { motion } from 'framer-motion'

const STATS = [
  { value: '4.000 ha × 2', label: 'benchmark simultáneo' },
  { value: '30 variedades', label: 'protocolo DBCA' },
  { value: 'USD 265K–300K', label: 'inversión total' },
  { value: '18 meses', label: 'duración del piloto' },
]

export function S06_Pilot() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--color-parchment)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(2rem, 5vw, 4rem) clamp(2rem, 6vw, 7rem)',
      }}
    >
      {/* Two columns */}
      <div
        style={{
          display: 'flex',
          gap: 'clamp(2rem, 5vw, 5rem)',
          width: '100%',
          maxWidth: '1000px',
          alignItems: 'center',
        }}
      >
        {/* Left — headline + body */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            style={{
              fontFamily: 'var(--font-hanken), sans-serif',
              fontSize: '0.6rem',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#4daa47',
              marginBottom: '1rem',
            }}
          >
            Benchmark · Fase 1
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'var(--font-garamond), serif',
              fontStyle: 'italic',
              fontSize: 'clamp(1.9rem, 3.2vw, 3.2rem)',
              lineHeight: 1.1,
              color: '#1C1A14',
              fontWeight: 400,
              marginBottom: '1.5rem',
            }}
          >
            Dos provincias,
            <br />
            dos microclimas,
            <br />
            un benchmark simultáneo.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'var(--font-hanken), sans-serif',
              fontSize: 'clamp(0.78rem, 1.05vw, 0.92rem)',
              lineHeight: 1.75,
              color: 'rgba(28,26,20,0.6)',
              maxWidth: '46ch',
              marginBottom: '1.5rem',
            }}
          >
            El benchmark corre en paralelo: 4.000 hectáreas en Valle de Uco (Mendoza) y 4.000 en Canal Mari Menuco (Neuquén). Dos ecorregiones distintas, mismo protocolo experimental.
          </motion.p>

          {/* Advantages */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            {[
              'Valle de Uco, Mendoza — clima templado irrigado, Ley 9617',
              'Canal Mari Menuco, Neuquén — clima árido patagónico, infraestructura Vaca Muerta',
              'Protocolo DBCA con hasta 30 variedades por región',
              'Convenio UNCuyo + UNCo — validación científica certificable',
            ].map((adv, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                style={{
                  fontFamily: 'var(--font-hanken), sans-serif',
                  fontSize: 'clamp(0.68rem, 0.9vw, 0.78rem)',
                  color: 'rgba(28,26,20,0.55)',
                  lineHeight: 1.5,
                  paddingLeft: '1.2rem',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    color: '#4daa47',
                    fontWeight: 700,
                  }}
                >
                  —
                </span>
                {adv}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Right — stats grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(0.75rem, 1.5vw, 1.25rem)',
            minWidth: 'clamp(200px, 32vw, 320px)',
          }}
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: 'rgba(28,26,20,0.05)',
                border: '1px solid rgba(28,26,20,0.1)',
                borderRadius: '4px',
                padding: 'clamp(0.9rem, 1.5vw, 1.25rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-garamond), serif',
                  fontStyle: 'italic',
                  fontSize: 'clamp(1.2rem, 1.8vw, 1.7rem)',
                  lineHeight: 1,
                  color: '#1C1A14',
                  fontWeight: 400,
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-hanken), sans-serif',
                  fontSize: '0.62rem',
                  letterSpacing: '0.08em',
                  color: 'rgba(28,26,20,0.45)',
                  textTransform: 'uppercase',
                }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom location */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        style={{
          position: 'absolute',
          bottom: '1.75rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-hanken), sans-serif',
            fontSize: '0.62rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(28,26,20,0.4)',
          }}
        >
          Mendoza · Valle de Uco
        </span>
        <div style={{ width: '24px', height: '1px', background: 'var(--color-gold)' }} />
        <span
          style={{
            fontFamily: 'var(--font-hanken), sans-serif',
            fontSize: '0.62rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(28,26,20,0.4)',
          }}
        >
          Neuquén · Canal Mari Menuco
        </span>
      </motion.div>
    </div>
  )
}
