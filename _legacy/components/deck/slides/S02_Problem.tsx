'use client'

import { motion } from 'framer-motion'

export function S02_Problem() {
  const items = [
    {
      text: 'Argentina tiene los recursos. Patagonia tiene el suelo y el agua. Pero doscientos años de ciclo extractivo — sacar, exportar, no procesar — convirtieron una ventaja natural en una renta sin industria.',
      delay: 0.1,
    },
    {
      text: 'El extractivismo no es un modelo. Es el síntoma de no haber decidido a tiempo. Vaca Muerta cambió eso en energía. El cáñamo industrial puede cambiarlo en bioeconomía.',
      delay: 0.2,
    },
    {
      text: 'La ventana para ser primer mover no está abierta para siempre. Ya pasó con los ferrocarriles, con el petróleo, con el shale. Ahora está abierta para quien llegue primero al mercado de carbono de alta integridad.',
      delay: 0.3,
    },
  ]

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        background: '#1C1A14',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Watermark number */}
      <div
        style={{
          position: 'absolute',
          left: '-4vw',
          top: '50%',
          transform: 'translateY(-50%)',
          fontFamily: 'var(--font-garamond), serif',
          fontStyle: 'italic',
          fontSize: 'clamp(12rem, 28vw, 26rem)',
          lineHeight: 1,
          color: 'rgba(201,168,76,0.07)',
          userSelect: 'none',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        200
      </div>

      {/* Content — right side */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          marginLeft: 'auto',
          width: '62%',
          paddingRight: 'clamp(2.5rem, 6vw, 7rem)',
          paddingLeft: '2rem',
          paddingTop: '2rem',
          paddingBottom: '2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'var(--font-hanken), sans-serif',
            fontSize: '0.62rem',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'var(--color-gold)',
            marginBottom: '1.25rem',
          }}
        >
          El error fundacional
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'var(--font-garamond), serif',
            fontStyle: 'italic',
            fontSize: 'clamp(2.4rem, 4.5vw, 4.8rem)',
            lineHeight: 1.05,
            color: 'var(--color-cream)',
            margin: '0 0 2rem 0',
            fontWeight: 400,
          }}
        >
          Doscientos años
          <br />
          de improductividad.
        </motion.h2>

        {/* Body paragraphs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {items.map((item, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: item.delay, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: 'var(--font-hanken), sans-serif',
                fontSize: 'clamp(0.8rem, 1.1vw, 0.95rem)',
                lineHeight: 1.7,
                color: 'rgba(247,246,235,0.55)',
                maxWidth: '52ch',
              }}
            >
              {item.text}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  )
}
