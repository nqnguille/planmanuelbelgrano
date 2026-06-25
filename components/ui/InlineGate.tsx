'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '@/lib/i18n'

const PASSWORD = 'elsueñodemanuel'
const STORAGE_KEY = 'pmb_access'
/* CTA para agendar directamente una reunión (Meet) y solicitar la clave en vivo. */
const MEET_URL = 'https://calendar.app.google/PBcbPHeEvsxKNR4X8'

const COPY = {
  es: {
    eyebrow: 'Flora Cáñamo Neuquino · Confidencial',
    title1: 'El masterplan continúa',
    title2: 'puertas adentro.',
    intro: 'Lo que sigue fue preparado para esta conversación. El contenido es confidencial y el acceso, personal.',
    placeholder: 'Clave de acceso',
    submit: 'Ingresar',
    error: 'Esa clave no abre esta puerta.',
    or: 'o',
    requestIntro: '¿Todavía no tenés la clave? Pedila y te la damos en vivo, en una breve reunión, o escribinos directo por WhatsApp.',
    meet: 'Solicitar acceso por Meet',
    whatsapp: 'Solicitar por WhatsApp',
    whatsappMsg: 'Hola, quiero conocer más sobre el Plan Manuel Belgrano.',
  },
  en: {
    eyebrow: 'Flora Cáñamo Neuquino · Confidential',
    title1: 'The masterplan continues',
    title2: 'behind closed doors.',
    intro: 'What follows was prepared for this conversation. The content is confidential and access is personal.',
    placeholder: 'Access key',
    submit: 'Enter',
    error: "That key doesn't open this door.",
    or: 'or',
    requestIntro: "Don't have the key yet? Request it and we'll share it live, in a short meeting, or message us directly on WhatsApp.",
    meet: 'Request access via Meet',
    whatsapp: 'Request via WhatsApp',
    whatsappMsg: "Hi, I'd like to learn more about the Manuel Belgrano Plan.",
  },
} as const

/* Gate en el flujo (no overlay): aparece como sección a continuación del hero
   cinematográfico, igual que el WelcomeGate de CONFIDENT. */
export function InlineGate({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const { lang } = useLang()
  const t = COPY[lang]
  const whatsappUrl = 'https://wa.me/5492994229436?text=' + encodeURIComponent(t.whatsappMsg)

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
          {t.eyebrow}
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
          {t.title1}<br />{t.title2}
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
          {t.intro}
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <motion.input
            ref={inputRef}
            type="password"
            value={value}
            onChange={(e) => { setValue(e.target.value); setError(false) }}
            placeholder={t.placeholder}
            autoComplete="off"
            aria-label={t.placeholder}
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
            {t.submit}
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
          {t.error}
        </p>

        {/* CTA: solicitar la clave por reunión / Meet */}
        <div style={{ marginTop: '1.6rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: '100%', maxWidth: '300px', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <span style={{ flex: 1, height: 1, background: 'rgba(243,241,231,0.12)' }} />
            <span style={{ fontFamily: 'var(--font-hanken)', fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(243,241,231,0.32)' }}>{t.or}</span>
            <span style={{ flex: 1, height: 1, background: 'rgba(243,241,231,0.12)' }} />
          </div>
          <p style={{ fontFamily: 'var(--font-hanken)', fontWeight: 300, fontSize: '0.85rem', lineHeight: 1.6, color: 'rgba(243,241,231,0.6)', maxWidth: '320px', margin: 0 }}>
            {t.requestIntro}
          </p>
          <a
            href={MEET_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.55rem',
              width: '100%', maxWidth: '300px', justifyContent: 'center',
              padding: '0.85rem 1.5rem',
              background: 'transparent',
              border: '1px solid rgba(242,181,68,0.55)',
              color: '#F2B544',
              fontFamily: 'var(--font-hanken)',
              fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 500,
              textDecoration: 'none', cursor: 'pointer',
            }}
          >
            {t.meet}
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              width: '100%', maxWidth: '300px', justifyContent: 'center',
              padding: '0.85rem 1.5rem',
              background: 'rgba(91,196,106,0.12)',
              border: '1px solid rgba(91,196,106,0.55)',
              color: '#5BC46A',
              fontFamily: 'var(--font-hanken)',
              fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500,
              textDecoration: 'none', cursor: 'pointer',
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.42 5.82c0 4.54-3.7 8.24-8.25 8.24a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24Zm-3.2 4.4c-.15 0-.4.06-.6.29-.21.23-.8.78-.8 1.9 0 1.12.82 2.2.93 2.36.11.15 1.6 2.55 3.95 3.47 1.95.77 2.35.62 2.77.58.42-.04 1.36-.55 1.55-1.09.19-.54.19-1 .13-1.09-.06-.1-.21-.15-.44-.27-.23-.11-1.36-.67-1.57-.75-.21-.08-.36-.11-.51.12-.15.23-.59.75-.72.9-.13.15-.27.17-.5.06-.23-.12-.96-.36-1.83-1.13-.68-.6-1.13-1.35-1.27-1.58-.13-.23-.01-.35.1-.47.1-.1.23-.27.34-.4.11-.14.15-.23.23-.39.08-.15.04-.29-.02-.4-.06-.12-.5-1.25-.7-1.71-.18-.44-.37-.38-.5-.39h-.44Z" />
            </svg>
            {t.whatsapp}
          </a>
        </div>
      </motion.div>
    </section>
  )
}
