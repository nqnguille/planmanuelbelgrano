'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const PASSWORD = 'elsueñodemanuel'
const STORAGE_KEY = 'pmb_access'

/* Gate en el flujo (no overlay): aparece como sección a continuación del hero
   cinematográfico, igual que el WelcomeGate de CONFIDENT. */
export function InlineGate({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (value === PASSWORD) {
      try { sessionStorage.setItem(STORAGE_KEY, '1') } catch {}
      onUnlock()
    } else {
      setError(true)
      setValue('')
    }
  }

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '92svh',
        background: '#071A38',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(3rem, 8vw, 6rem) 1.5rem',
        overflow: 'hidden',
      }}
    >
      {/* halo sutil */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: '70vw', height: '70vh',
        background: 'radial-gradient(ellipse, rgba(242,181,68,0.06) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '440px', width: '100%' }}
      >
        <p style={{
          fontFamily: 'var(--font-hanken)',
          fontSize: '0.6rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'rgba(242,181,68,0.6)',
          marginBottom: '1.5rem',
        }}>
          Flora Cáñamo Neuquino · Confidencial
        </p>

        <h2 style={{
          fontFamily: 'var(--font-garamond), "EB Garamond", serif',
          fontStyle: 'italic',
          fontWeight: 400,
          fontSize: 'clamp(1.9rem, 4vw, 3rem)',
          lineHeight: 1.15,
          color: '#F3F1E7',
          marginBottom: '1.4rem',
        }}>
          El masterplan continúa<br />puertas adentro.
        </h2>

        <p style={{
          fontFamily: 'var(--font-hanken)',
          fontWeight: 300,
          fontSize: '0.9rem',
          lineHeight: 1.7,
          color: 'rgba(243,241,231,0.55)',
          maxWidth: '360px',
          margin: '0 auto 2.6rem',
        }}>
          Lo que sigue fue preparado para esta conversación. El contenido es
          confidencial y el acceso, personal.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <motion.input
            ref={inputRef}
            type="password"
            value={value}
            onChange={(e) => { setValue(e.target.value); setError(false) }}
            placeholder="Clave de acceso"
            autoComplete="off"
            aria-label="Clave de acceso"
            aria-invalid={error}
            animate={error ? { x: [0, -9, 9, -6, 6, 0] } : { x: 0 }}
            transition={{ duration: 0.42 }}
            style={{
              width: '100%',
              maxWidth: '300px',
              padding: '0.9rem 1.25rem',
              background: error ? 'rgba(180,48,28,0.12)' : 'rgba(243,241,231,0.05)',
              border: `1px solid ${error ? 'rgba(180,48,28,0.55)' : 'rgba(242,181,68,0.22)'}`,
              color: '#F3F1E7',
              fontFamily: 'var(--font-hanken)',
              fontSize: '0.9rem',
              letterSpacing: '0.06em',
              textAlign: 'center',
              outline: 'none',
              transition: 'border-color 0.2s, background-color 0.2s',
            }}
          />
          <button
            type="submit"
            style={{
              width: '100%',
              maxWidth: '300px',
              padding: '0.9rem 2rem',
              background: '#5BC46A',
              color: '#071A38',
              fontFamily: 'var(--font-hanken)',
              fontSize: '0.72rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 500,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Ingresar
          </button>
        </form>

        <p style={{
          minHeight: '1.2rem',
          marginTop: '1.3rem',
          fontFamily: 'var(--font-hanken)',
          fontSize: '0.7rem',
          letterSpacing: '0.08em',
          color: 'rgba(220,80,60,0.85)',
          opacity: error ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}>
          Esa clave no abre esta puerta.
        </p>
      </motion.div>
    </section>
  )
}
