'use client'

import { motion } from 'framer-motion'

export function S08_CTA() {
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
        padding: 'clamp(2rem, 5vw, 4rem) clamp(2rem, 7vw, 10rem)',
      }}
    >
      {/* Subtle radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70vw',
          height: '70vh',
          background: 'radial-gradient(ellipse, rgba(113,206,106,0.04) 0%, transparent 65%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 'clamp(1.25rem, 2.5vw, 2rem)',
          maxWidth: '720px',
          width: '100%',
        }}
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          style={{
            fontFamily: 'var(--font-hanken), sans-serif',
            fontSize: '0.62rem',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'var(--color-green)',
          }}
        >
          Plan Manuel Belgrano · 2026
        </motion.p>

        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'var(--font-garamond), serif',
            fontStyle: 'italic',
            fontSize: 'clamp(2rem, 4vw, 4rem)',
            lineHeight: 1.1,
            fontWeight: 400,
            margin: 0,
          }}
        >
          <span style={{ color: 'var(--color-cream)' }}>Belgrano lo soñó.</span>
          <br />
          <span style={{ color: 'var(--color-cream)' }}>Sturzenegger lo ve venir.</span>
          <br />
          <span style={{ color: 'var(--color-green)' }}>Nosotros tendemos el puente.</span>
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'var(--font-hanken), sans-serif',
            fontWeight: 300,
            fontSize: 'clamp(0.78rem, 1.05vw, 0.92rem)',
            lineHeight: 1.75,
            color: 'rgba(247,246,235,0.45)',
            maxWidth: '58ch',
          }}
        >
          Hempcrete para construir las viviendas. Créditos de carbono para que YPF acceda al mercado GNL premium de Europa. Biochar con compradores confirmados: Microsoft, Shell, Google. El Plan Manuel Belgrano es la infraestructura productiva que convierte una obligación regulatoria europea en ventaja competitiva argentina.
        </motion.p>

        {/* Three contracts summary */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.42 }}
          style={{
            display: 'flex',
            gap: 'clamp(0.75rem, 1.5vw, 1.5rem)',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {[
            { label: 'Créditos de carbono', sub: 'Captura + fijación certificada' },
            { label: 'Premio GNL', sub: 'USD 7–17M por cargo CS3D' },
            { label: 'Biochar', sub: 'USD 164/t · Microsoft, Shell, Google' },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                padding: '0.6rem 1rem',
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: '3px',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-hanken), sans-serif',
                  fontSize: '0.7rem',
                  color: 'var(--color-gold)',
                  marginBottom: '0.2rem',
                  letterSpacing: '0.04em',
                }}
              >
                {item.label}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-hanken), sans-serif',
                  fontSize: '0.6rem',
                  color: 'rgba(247,246,235,0.3)',
                }}
              >
                {item.sub}
              </p>
            </div>
          ))}
        </motion.div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          <a
            href="mailto:contacto@planmanuelbelgrano.com.ar"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'var(--color-green)',
              color: '#1C1A14',
              fontFamily: 'var(--font-hanken), sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(0.78rem, 1vw, 0.9rem)',
              letterSpacing: '0.06em',
              padding: '0.85rem 2rem',
              borderRadius: '2px',
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Agendar reunión · Horacio Marín · YPF
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="#1C1A14" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          style={{
            display: 'flex',
            gap: '1.5rem',
            alignItems: 'center',
          }}
        >
          <a
            href="mailto:contacto@planmanuelbelgrano.com.ar"
            style={{
              fontFamily: 'var(--font-hanken), sans-serif',
              fontSize: '0.65rem',
              color: 'rgba(247,246,235,0.3)',
              textDecoration: 'none',
              letterSpacing: '0.04em',
            }}
          >
            contacto@planmanuelbelgrano.com.ar
          </a>
          <span style={{ color: 'rgba(247,246,235,0.1)', fontSize: '0.7rem' }}>·</span>
          <a
            href="https://wa.me/5492994229436"
            style={{
              fontFamily: 'var(--font-hanken), sans-serif',
              fontSize: '0.65rem',
              color: 'rgba(247,246,235,0.3)',
              textDecoration: 'none',
              letterSpacing: '0.04em',
            }}
          >
            +54 299 422 9436
          </a>
        </motion.div>
      </div>

      {/* Bottom signature */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.85 }}
        style={{
          position: 'absolute',
          bottom: '1.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'var(--font-hanken), sans-serif',
          fontSize: '0.55rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'rgba(247,246,235,0.18)',
          whiteSpace: 'nowrap',
        }}
      >
        Flora Cáñamo Neuquino SRL · Guillermo Sandoval · Neuquén, Patagonia Argentina
      </motion.div>
    </div>
  )
}
