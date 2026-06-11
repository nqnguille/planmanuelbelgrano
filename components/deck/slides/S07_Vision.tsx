'use client'

import { motion } from 'framer-motion'

export function S07_Vision() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        background: '#1A2B22',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background image */}
      <img
        src="/hero/frames/f09.jpg"
        alt="Visión 2035 — Patagonia"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(16,24,20,0.75) 0%, rgba(16,24,20,0.88) 60%, rgba(16,24,20,0.96) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: 'clamp(2rem, 5vw, 4rem) clamp(2rem, 7vw, 10rem)',
          maxWidth: '820px',
          width: '100%',
          gap: 'clamp(1.5rem, 3vw, 2.5rem)',
        }}
      >
        {/* Blockquote */}
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            margin: 0,
            borderLeft: '3px solid var(--color-gold)',
            paddingLeft: 'clamp(1.25rem, 2.5vw, 2rem)',
            textAlign: 'left',
            alignSelf: 'flex-start',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-garamond), serif',
              fontStyle: 'italic',
              fontSize: 'clamp(1.5rem, 2.8vw, 2.8rem)',
              lineHeight: 1.2,
              color: 'var(--color-cream)',
              fontWeight: 400,
              marginBottom: '0.75rem',
            }}
          >
            "A Neuquén se van a venir a vivir
            <br />
            un millón de personas."
          </p>
          <footer
            style={{
              fontFamily: 'var(--font-hanken), sans-serif',
              fontSize: '0.65rem',
              letterSpacing: '0.12em',
              color: 'rgba(201,168,76,0.7)',
              textTransform: 'uppercase',
            }}
          >
            Federico Sturzenegger · Ministro de Desregulación · 2025
          </footer>
        </motion.blockquote>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-garamond), serif',
              fontStyle: 'italic',
              fontSize: 'clamp(2.2rem, 4vw, 4rem)',
              lineHeight: 1.05,
              fontWeight: 400,
              margin: 0,
            }}
          >
            <span style={{ color: 'var(--color-cream)' }}>Belgrano lo soñó.</span>
            <br />
            <span style={{ color: 'var(--color-green)' }}>Nosotros lo construimos.</span>
          </h2>
        </motion.div>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'var(--font-hanken), sans-serif',
            fontWeight: 300,
            fontSize: 'clamp(0.8rem, 1.1vw, 0.95rem)',
            lineHeight: 1.75,
            color: 'rgba(247,246,235,0.5)',
            maxWidth: '60ch',
            textAlign: 'center',
          }}
        >
          Un millón de neuquinos necesita viviendas, empleo e industria limpia. Hempcrete para construir con materiales que fijan carbono mientras se usan. Biochar para la segunda línea de valor. De la semilla a la llave — empleo técnico en cada eslabón.
        </motion.p>
      </div>
    </div>
  )
}
