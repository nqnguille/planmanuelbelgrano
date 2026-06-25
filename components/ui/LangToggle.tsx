'use client'

import { useLang, type Lang } from '@/lib/i18n'

/* Toggle ES/EN fijo arriba a la derecha. Sobrio, paleta Soberana. */
export function LangToggle() {
  const { lang, setLang } = useLang()

  const opt = (value: Lang, label: string) => {
    const active = lang === value
    return (
      <button
        type="button"
        onClick={() => setLang(value)}
        aria-pressed={active}
        aria-label={value === 'es' ? 'Español' : 'English'}
        style={{
          appearance: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '0.32rem 0.62rem',
          fontFamily: 'var(--font-hanken), sans-serif',
          fontSize: '0.62rem',
          letterSpacing: '0.14em',
          fontWeight: 600,
          textTransform: 'uppercase',
          borderRadius: '999px',
          transition: 'background-color 0.2s ease, color 0.2s ease',
          background: active ? '#F2B544' : 'transparent',
          color: active ? '#071A38' : 'rgba(243,241,231,0.82)',
        }}
      >
        {label}
      </button>
    )
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '0.15rem',
        padding: '0.18rem',
        borderRadius: '999px',
        background: 'rgba(7,26,56,0.7)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(91,196,106,0.25)',
        boxShadow: '0 2px 12px rgba(7,26,56,0.35)',
      }}
    >
      {opt('es', 'ES')}
      {opt('en', 'EN')}
    </div>
  )
}
