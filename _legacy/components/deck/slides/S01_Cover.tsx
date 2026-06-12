'use client'

import { motion } from 'framer-motion'

export function S01_Cover() {
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
        src="/hero/frames/f05.jpg"
        alt="Cáñamo industrial en Patagonia"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      {/* Overlay gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(26,43,34,0.82)',
          zIndex: 1,
        }}
      />

      {/* Top left brand */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          position: 'absolute',
          top: '1.75rem',
          left: '2rem',
          zIndex: 10,
          fontFamily: 'var(--font-hanken), sans-serif',
          fontSize: '0.6rem',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'rgba(201,168,76,0.7)',
        }}
      >
        Plan MB
      </motion.div>

      {/* Center content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: '0 2rem',
          maxWidth: '900px',
        }}
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'var(--font-hanken), sans-serif',
            fontSize: '0.65rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--color-gold)',
            marginBottom: '1.5rem',
          }}
        >
          Flora Cáñamo Neuquino · Neuquén, Patagonia
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'var(--font-garamond), serif',
            fontStyle: 'italic',
            fontSize: 'clamp(4.5rem, 10vw, 9.5rem)',
            lineHeight: 1.0,
            color: 'var(--color-cream)',
            margin: '0 0 2rem 0',
            fontWeight: 400,
          }}
        >
          Plan Manuel
          <br />
          Belgrano
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'var(--font-hanken), sans-serif',
            fontWeight: 300,
            fontSize: '1rem',
            color: 'rgba(247,246,235,0.5)',
            letterSpacing: '0.03em',
          }}
        >
          La plataforma industrial que Argentina necesita.
        </motion.p>
      </div>

      {/* Bottom scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-hanken), sans-serif',
            fontSize: '0.55rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(247,246,235,0.25)',
          }}
        >
          avanzar →
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
            <path
              d="M7 1V19M7 19L1 13M7 19L13 13"
              stroke="rgba(247,246,235,0.2)"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  )
}
