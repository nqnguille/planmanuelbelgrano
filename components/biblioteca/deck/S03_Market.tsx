'use client'

import { motion } from 'framer-motion'

export function S03_Market() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--color-cream)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 5vw, 6rem)',
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
          width: '100%',
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'var(--font-hanken), sans-serif',
            fontSize: '0.62rem',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: '#4daa47',
            marginBottom: '0.75rem',
          }}
        >
          El Giro Estratégico
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'var(--font-garamond), serif',
            fontStyle: 'italic',
            fontSize: 'clamp(1.8rem, 3.2vw, 3.2rem)',
            lineHeight: 1.1,
            color: '#1C1A14',
            fontWeight: 400,
            maxWidth: '700px',
            margin: '0 auto',
          }}
        >
          El crédito de carbono no es el producto.
          <br />
          Es la llave.
        </motion.h2>
      </div>

      {/* Cards */}
      <div
        style={{
          display: 'flex',
          gap: 'clamp(1rem, 2.5vw, 2rem)',
          width: '100%',
          maxWidth: '900px',
          flex: 1,
          minHeight: 0,
        }}
      >
        {/* Card left — HOY / Rojo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            flex: 1,
            background: '#fff5f5',
            border: '1px solid rgba(180,30,30,0.15)',
            borderRadius: '6px',
            padding: 'clamp(1.25rem, 2.5vw, 2rem)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'rgba(180,30,30,0.4)',
            }}
          />
          <p
            style={{
              fontFamily: 'var(--font-hanken), sans-serif',
              fontSize: '0.58rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'rgba(180,30,30,0.7)',
            }}
          >
            HOY · Sin certificación
          </p>
          <h3
            style={{
              fontFamily: 'var(--font-garamond), serif',
              fontStyle: 'italic',
              fontSize: 'clamp(2.2rem, 4vw, 4rem)',
              lineHeight: 1,
              color: 'rgba(180,30,30,0.6)',
              fontWeight: 400,
              margin: 0,
            }}
          >
            Commodity
          </h3>
          <ul
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
              'Compite con Qatar en precio',
              'Sin acceso al mercado premium',
              'Margen erosionado por commodity',
              'CS3D bloquea acceso desde 2025',
            ].map((item) => (
              <li
                key={item}
                style={{
                  fontFamily: 'var(--font-hanken), sans-serif',
                  fontSize: 'clamp(0.72rem, 1vw, 0.82rem)',
                  color: 'rgba(28,26,20,0.6)',
                  lineHeight: 1.5,
                  paddingLeft: '1rem',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    color: 'rgba(180,30,30,0.5)',
                  }}
                >
                  ×
                </span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Card right — CON PLAN BELGRANO / Verde */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          style={{
            flex: 1,
            background: '#f2faf0',
            border: '1px solid rgba(77,170,71,0.2)',
            borderRadius: '6px',
            padding: 'clamp(1.25rem, 2.5vw, 2rem)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: '#4daa47',
            }}
          />
          <p
            style={{
              fontFamily: 'var(--font-hanken), sans-serif',
              fontSize: '0.58rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#4daa47',
            }}
          >
            Con Plan Belgrano
          </p>
          <h3
            style={{
              fontFamily: 'var(--font-garamond), serif',
              fontStyle: 'italic',
              fontSize: 'clamp(2.2rem, 4vw, 4rem)',
              lineHeight: 1,
              color: '#4daa47',
              fontWeight: 400,
              margin: 0,
            }}
          >
            Premium
          </h3>
          <ul
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
              'USD 2–5/MMBtu de prima sobre el spot',
              'USD 7–17M por cargo de GNL',
              'Certificación verificable ante Verra / GS',
              'Primer mover en mercado de integridad',
            ].map((item) => (
              <li
                key={item}
                style={{
                  fontFamily: 'var(--font-hanken), sans-serif',
                  fontSize: 'clamp(0.72rem, 1vw, 0.82rem)',
                  color: 'rgba(28,26,20,0.7)',
                  lineHeight: 1.5,
                  paddingLeft: '1rem',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    color: '#4daa47',
                  }}
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Bottom note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.55 }}
        style={{
          fontFamily: 'var(--font-hanken), sans-serif',
          fontSize: '0.6rem',
          letterSpacing: '0.1em',
          color: 'rgba(28,26,20,0.35)',
          marginTop: '1.25rem',
          textAlign: 'center',
        }}
      >
        CS3D exige certificación de carbono a partir de 2025–2027 · Aplica a toda la cadena de suministro de gas
      </motion.p>
    </div>
  )
}
