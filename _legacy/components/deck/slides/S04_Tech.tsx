'use client'

import { motion } from 'framer-motion'

const CARDS = [
  {
    rank: '#2',
    category: 'CAPTURA',
    name: 'Fotosíntesis de alta tasa',
    sub: 'Cáñamo industrial',
    detail: 'Costo energético: ~0',
    metric: '10–15 t CO₂/ha/año',
  },
  {
    rank: '#3',
    category: 'FIJACIÓN',
    name: 'Mineralización en materiales',
    sub: 'Hempcrete',
    detail: 'Permanencia: siglos / milenios',
    metric: '75–165 kg CO₂/m³',
  },
  {
    rank: '#4',
    category: 'FIJACIÓN',
    name: 'Biochar avanzado',
    sub: 'Residuos de cáñamo',
    detail: 'Permanencia: 500–1.000 años',
    metric: 'USD 164/t · Puro.earth',
  },
]

export function S04_Tech() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        background: '#1C1A14',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(2rem, 5vw, 4rem) clamp(2rem, 6vw, 8rem)',
      }}
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0, ease: [0.22, 1, 0.36, 1] }}
        style={{
          fontFamily: 'var(--font-garamond), serif',
          fontStyle: 'italic',
          fontSize: 'clamp(1.5rem, 2.8vw, 2.8rem)',
          lineHeight: 1.15,
          color: 'var(--color-cream)',
          fontWeight: 400,
          textAlign: 'center',
          marginBottom: 'clamp(1.5rem, 3vw, 3rem)',
          maxWidth: '700px',
        }}
      >
        La combinación de mayor integridad
        <br />
        científica del mercado.
      </motion.h2>

      {/* Ranking cards */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(0.75rem, 1.5vw, 1rem)',
          width: '100%',
          maxWidth: '760px',
        }}
      >
        {CARDS.map((card, i) => (
          <motion.div
            key={card.rank}
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(1rem, 2vw, 2rem)',
              background: 'rgba(247,246,235,0.04)',
              border: '1px solid rgba(201,168,76,0.15)',
              borderRadius: '4px',
              padding: 'clamp(0.9rem, 1.5vw, 1.25rem) clamp(1rem, 2vw, 1.75rem)',
            }}
          >
            {/* Rank number */}
            <div
              style={{
                fontFamily: 'var(--font-garamond), serif',
                fontStyle: 'italic',
                fontSize: 'clamp(2.4rem, 4vw, 4rem)',
                lineHeight: 1,
                color: 'rgba(201,168,76,0.6)',
                fontWeight: 400,
                minWidth: 'clamp(3rem, 5vw, 5rem)',
                textAlign: 'center',
              }}
            >
              {card.rank}
            </div>

            {/* Divider */}
            <div
              style={{
                width: '1px',
                height: '2.5rem',
                background: 'rgba(201,168,76,0.2)',
                flexShrink: 0,
              }}
            />

            {/* Info */}
            <div style={{ flex: 1 }}>
              <p
                style={{
                  fontFamily: 'var(--font-hanken), sans-serif',
                  fontSize: '0.55rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold)',
                  marginBottom: '0.3rem',
                }}
              >
                {card.category}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-hanken), sans-serif',
                  fontSize: 'clamp(0.85rem, 1.2vw, 1.05rem)',
                  color: 'var(--color-cream)',
                  marginBottom: '0.2rem',
                  fontWeight: 500,
                }}
              >
                {card.name} — <span style={{ fontWeight: 300 }}>{card.sub}</span>
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-hanken), sans-serif',
                  fontSize: 'clamp(0.7rem, 0.9vw, 0.8rem)',
                  color: 'rgba(247,246,235,0.4)',
                }}
              >
                {card.detail}
              </p>
            </div>

            {/* Metric */}
            <div
              style={{
                fontFamily: 'var(--font-hanken), sans-serif',
                fontSize: 'clamp(0.7rem, 0.9vw, 0.82rem)',
                color: 'var(--color-gold)',
                textAlign: 'right',
                minWidth: 'clamp(7rem, 10vw, 11rem)',
                letterSpacing: '0.02em',
              }}
            >
              {card.metric}
            </div>
          </motion.div>
        ))}
      </div>

      {/* VS Forestales */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.55 }}
        style={{
          marginTop: 'clamp(1.25rem, 2.5vw, 2rem)',
          width: '100%',
          maxWidth: '760px',
          borderTop: '1px solid rgba(247,246,235,0.08)',
          paddingTop: 'clamp(0.75rem, 1.5vw, 1rem)',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-hanken), sans-serif',
            fontSize: '0.58rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(220,80,60,0.6)',
            minWidth: '2.5rem',
          }}
        >
          vs
        </span>
        <p
          style={{
            fontFamily: 'var(--font-hanken), sans-serif',
            fontSize: 'clamp(0.68rem, 0.9vw, 0.78rem)',
            color: 'rgba(247,246,235,0.3)',
            lineHeight: 1.5,
          }}
        >
          <strong style={{ color: 'rgba(220,80,60,0.55)' }}>Créditos Forestales: #10 global</strong>
          &nbsp;· Décadas de permanencia · Alta reversibilidad · Vulnerabilidad por incendios —
          <em> YPF no debería respaldar su reputación regulatoria en activos que se queman.</em>
        </p>
      </motion.div>
    </div>
  )
}
