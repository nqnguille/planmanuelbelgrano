'use client'

import { useState, useEffect, useRef } from 'react'

const PASSWORD = 'Manolo420'
const STORAGE_KEY = 'pmb_access'

export function GateClient({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false)
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  const [checked, setChecked] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === '1') setUnlocked(true)
    setChecked(true)
  }, [])

  useEffect(() => {
    if (checked && !unlocked) inputRef.current?.focus()
  }, [checked, unlocked])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (value === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, '1')
      setUnlocked(true)
    } else {
      setError(true)
      setValue('')
      setTimeout(() => setError(false), 1200)
    }
  }

  if (!checked) return null
  if (unlocked) return <>{children}</>

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      backgroundColor: '#071A38',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexDirection: 'column',
    }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p style={{
          fontFamily: 'var(--font-hanken)',
          fontSize: '0.62rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase' as const,
          color: 'rgba(242,181,68,0.6)',
          marginBottom: '1.5rem',
        }}>
          Flora Cáñamo Neuquino
        </p>
        <h1 style={{
          fontFamily: 'var(--font-garamond)',
          fontStyle: 'italic',
          fontWeight: 400,
          fontSize: 'clamp(2rem, 4vw, 3.2rem)',
          lineHeight: 1.1,
          color: '#F3F1E7',
        }}>
          Plan Manuel Belgrano
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', width: '100%', maxWidth: '300px' }}
      >
        <input
          ref={inputRef}
          type="password"
          value={value}
          onChange={e => { setValue(e.target.value); setError(false) }}
          placeholder="Clave de acceso"
          style={{
            width: '100%',
            padding: '0.875rem 1.25rem',
            backgroundColor: error ? 'rgba(180,48,28,0.12)' : 'rgba(243,241,231,0.05)',
            border: `1px solid ${error ? 'rgba(180,48,28,0.5)' : 'rgba(242,181,68,0.2)'}`,
            color: '#F3F1E7',
            fontFamily: 'var(--font-hanken)',
            fontSize: '0.9rem',
            letterSpacing: '0.06em',
            outline: 'none',
            textAlign: 'center',
            transition: 'border-color 0.2s, background-color 0.2s',
          }}
        />
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '0.875rem 2rem',
            backgroundColor: '#5BC46A',
            color: '#071A38',
            fontFamily: 'var(--font-hanken)',
            fontSize: '0.72rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase' as const,
            fontWeight: 500,
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Acceder
        </button>
        {error && (
          <p style={{
            fontFamily: 'var(--font-hanken)',
            fontSize: '0.72rem',
            color: 'rgba(180,48,28,0.75)',
            letterSpacing: '0.1em',
            marginTop: '0.25rem',
          }}>
            Clave incorrecta
          </p>
        )}
      </form>
    </div>
  )
}
