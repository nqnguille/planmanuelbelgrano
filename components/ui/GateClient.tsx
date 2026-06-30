'use client'

import { useState, useEffect, useRef } from 'react'
import { trackGate, verifyGate } from '@/lib/gateTrack'

// Mismas claves que el gate del masterplan (InlineGate), para una sola convención.
const PASSWORDS = ['elsueñodemanuel', 'thedreamofmanuel']
const STORAGE_KEY = 'pmb_access'

export function GateClient({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false)
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  const [checked, setChecked] = useState(false)
  const [locked, setLocked] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const MAX_FAILS = 3
  const FAILS_KEY = 'pmb_fails'

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === '1') setUnlocked(true)
    else trackGate('view', 'interno')
    try { if ((parseInt(localStorage.getItem(FAILS_KEY) || '0', 10) || 0) >= MAX_FAILS) setLocked(true) } catch {}
    setChecked(true)
  }, [])

  useEffect(() => {
    if (checked && !unlocked) inputRef.current?.focus()
  }, [checked, unlocked])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (locked) return
    const key = value.trim()
    // Valida contra la consola central (mismas llaves del masterplan); respaldo local si no responde.
    let ok = await verifyGate('interno', key)
    if (ok === null) ok = PASSWORDS.includes(key.toLowerCase())
    if (ok) {
      try { localStorage.removeItem(FAILS_KEY) } catch {}
      sessionStorage.setItem(STORAGE_KEY, '1')
      setUnlocked(true)
    } else {
      let n = 0
      try { n = (parseInt(localStorage.getItem(FAILS_KEY) || '0', 10) || 0) + 1; localStorage.setItem(FAILS_KEY, String(n)) } catch {}
      if (n >= MAX_FAILS) setLocked(true)
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
          disabled={locked}
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
          disabled={locked}
          style={{
            width: '100%',
            padding: '0.875rem 2rem',
            backgroundColor: locked ? 'rgba(180,48,28,0.5)' : '#5BC46A',
            color: '#071A38',
            fontFamily: 'var(--font-hanken)',
            fontSize: '0.72rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase' as const,
            fontWeight: 500,
            border: 'none',
            cursor: locked ? 'not-allowed' : 'pointer',
          }}
        >
          {locked ? 'Bloqueado' : 'Acceder'}
        </button>
        {(error || locked) && (
          <p style={{
            fontFamily: 'var(--font-hanken)',
            fontSize: '0.72rem',
            color: 'rgba(180,48,28,0.75)',
            letterSpacing: '0.1em',
            marginTop: '0.25rem',
          }}>
            {locked ? 'Demasiados intentos. Acceso bloqueado.' : 'Clave incorrecta'}
          </p>
        )}
      </form>
      {locked && (
        <div style={{ marginTop: '1.4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.7rem', width: '100%', maxWidth: '300px' }}>
          <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '0.78rem', color: 'rgba(243,241,231,0.6)', margin: 0 }}>¿No tenés la clave? Pedila:</p>
          <a href="https://calendar.app.google/PBcbPHeEvsxKNR4X8" target="_blank" rel="noopener noreferrer" style={{ width: '100%', textAlign: 'center', padding: '0.8rem 1.25rem', borderRadius: '999px', border: '1px solid rgba(242,181,68,0.55)', color: '#F2B544', textDecoration: 'none', fontFamily: 'var(--font-hanken)', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 500 }}>Solicitar acceso por Meet</a>
          <a href={'https://wa.me/5492994229436?text=' + encodeURIComponent('Hola, quiero acceso al Plan Manuel Belgrano.')} target="_blank" rel="noopener noreferrer" style={{ width: '100%', textAlign: 'center', padding: '0.8rem 1.25rem', borderRadius: '999px', background: 'rgba(91,196,106,0.12)', border: '1px solid rgba(91,196,106,0.55)', color: '#5BC46A', textDecoration: 'none', fontFamily: 'var(--font-hanken)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>Solicitar por WhatsApp</a>
        </div>
      )}
    </div>
  )
}
