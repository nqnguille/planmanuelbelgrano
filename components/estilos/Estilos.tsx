'use client'

import type { CSSProperties } from 'react'

/* Comparador de combinaciones fuente + color — dirección "patriota + YPF".
   Cada variante se renderiza como una banda a escala real. */

type Variant = {
  id: string
  name: string
  concept: string
  displayFont: string
  uiFont: string
  fontNote: string
  bg: string
  surface: string
  ink: string
  sub: string
  accent: string   // celeste / azul
  gold: string     // sol de mayo
  green?: string
  swatches: { hex: string; label: string }[]
}

const VARIANTS: Variant[] = [
  {
    id: 'bandera',
    name: 'Bandera',
    concept: 'Celeste, blanco y sol de mayo. Luminoso, patrio clásico.',
    displayFont: "'Fraunces', Georgia, serif",
    uiFont: "'Archivo', system-ui, sans-serif",
    fontNote: 'Fraunces + Archivo · Archivo es de Omnibus-Type (Buenos Aires) 🇦🇷',
    bg: '#F5F8FC',
    surface: '#FFFFFF',
    ink: '#10243F',
    sub: 'rgba(16,36,63,0.62)',
    accent: '#5B9BD5',
    gold: '#E8A920',
    swatches: [
      { hex: '#10243F', label: 'Azul noche' },
      { hex: '#5B9BD5', label: 'Celeste' },
      { hex: '#E8A920', label: 'Sol de mayo' },
      { hex: '#F5F8FC', label: 'Blanco' },
    ],
  },
  {
    id: 'soberana',
    name: 'YPF Soberana',
    concept: 'Azul YPF profundo, institucional. Acentos celeste y dorado sobre fondo oscuro.',
    displayFont: "'Libre Caslon Display', Georgia, serif",
    uiFont: "'Libre Franklin', system-ui, sans-serif",
    fontNote: 'Libre Caslon + Libre Franklin · ambas de Omnibus-Type (Buenos Aires) 🇦🇷',
    bg: '#071A38',
    surface: '#0E2A52',
    ink: '#F3F1E7',
    sub: 'rgba(243,241,231,0.6)',
    accent: '#74ACDF',
    gold: '#F2B544',
    swatches: [
      { hex: '#071A38', label: 'Azul YPF' },
      { hex: '#74ACDF', label: 'Celeste' },
      { hex: '#F2B544', label: 'Dorado' },
      { hex: '#F3F1E7', label: 'Crema' },
    ],
  },
  {
    id: 'vacaverde',
    name: 'Vaca Verde Patria',
    concept: 'Puente entre lo agro y lo patrio: verde cáñamo + celeste + dorado sobre crema.',
    displayFont: "var(--font-garamond), 'EB Garamond', serif",
    uiFont: "var(--font-hanken), system-ui, sans-serif",
    fontNote: 'EB Garamond + Plus Jakarta · la base actual, reencuadrada en clave patria',
    bg: '#F7F6EB',
    surface: '#FFFFFF',
    ink: '#14241C',
    sub: 'rgba(20,36,28,0.6)',
    accent: '#3E7CB1',
    gold: '#C9A84C',
    green: '#4DAA47',
    swatches: [
      { hex: '#14241C', label: 'Verde tinta' },
      { hex: '#3E7CB1', label: 'Celeste' },
      { hex: '#C9A84C', label: 'Dorado' },
      { hex: '#4DAA47', label: 'Verde cáñamo' },
    ],
  },
]

function SunOfMay({ color, size = 64 }: { color: string; size?: number }) {
  const rays = Array.from({ length: 16 })
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden style={{ opacity: 0.9 }}>
      {rays.map((_, i) => (
        <line key={i} x1="50" y1="50" x2="50" y2="6"
          stroke={color} strokeWidth="2.4"
          transform={`rotate(${(360 / 16) * i} 50 50)`} opacity={0.55} />
      ))}
      <circle cx="50" cy="50" r="17" fill="none" stroke={color} strokeWidth="3" />
    </svg>
  )
}

function Band({ v }: { v: Variant }) {
  const eyebrow: CSSProperties = {
    fontFamily: v.uiFont, fontSize: '0.7rem', letterSpacing: '0.26em',
    textTransform: 'uppercase', color: v.accent, fontWeight: 600, margin: 0,
  }
  return (
    <section style={{ background: v.bg, padding: 'clamp(3.5rem, 8vw, 6.5rem) clamp(1.5rem, 6vw, 7rem)', position: 'relative', overflow: 'hidden' }}>
      {/* franja patria sutil arriba */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: `linear-gradient(90deg, ${v.accent} 0 33%, ${v.bg === '#FFFFFF' ? '#E9EEF4' : 'rgba(255,255,255,0.6)'} 33% 66%, ${v.accent} 66% 100%)`, opacity: 0.5 }} />
      <div style={{ position: 'absolute', top: '2rem', right: 'clamp(1.5rem, 6vw, 7rem)', pointerEvents: 'none' }}>
        <SunOfMay color={v.gold} size={84} />
      </div>

      <div style={{ maxWidth: '1080px', margin: '0 auto', position: 'relative' }}>
        {/* etiqueta de variante */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.9rem', flexWrap: 'wrap', marginBottom: '2.25rem' }}>
          <span style={{ fontFamily: v.uiFont, fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: v.gold, fontWeight: 600, border: `1px solid ${v.gold}`, padding: '0.3rem 0.7rem' }}>
            {v.name}
          </span>
          <span style={{ fontFamily: v.uiFont, fontSize: '0.78rem', color: v.sub }}>{v.concept}</span>
        </div>

        <p style={eyebrow}>Plan Manuel Belgrano · Energía y tierra argentina</p>
        <h2 style={{
          fontFamily: v.displayFont, fontStyle: 'italic', fontWeight: 400,
          fontSize: 'clamp(2.6rem, 6vw, 5.2rem)', lineHeight: 1.04, color: v.ink,
          margin: '1.25rem 0 1.5rem',
        }}>
          Vaca Muerta ya rinde.
          <br />
          Ahora, <span style={{ color: v.green ?? v.accent }}>Vaca Verde.</span>
        </h2>
        <p style={{ fontFamily: v.uiFont, fontWeight: 300, fontSize: 'clamp(0.95rem, 1.3vw, 1.12rem)', lineHeight: 1.75, color: v.sub, maxWidth: '58ch', margin: 0 }}>
          Cáñamo industrial, hempcrete y créditos de carbono en la misma cuenca que el gas.
          De la semilla a la llave, una industria nueva para que YPF la lidere.
        </p>

        {/* datos */}
        <div style={{ display: 'flex', gap: 'clamp(2rem, 5vw, 4rem)', flexWrap: 'wrap', margin: '2.75rem 0' }}>
          {[
            { n: '40.000', l: 'puestos de trabajo' },
            { n: 'USD 27,5M', l: 'por año en créditos' },
            { n: '+500', l: 'años de carbono fijado' },
          ].map((s) => (
            <div key={s.l}>
              <div style={{ fontFamily: v.displayFont, fontStyle: 'italic', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: v.ink, lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontFamily: v.uiFont, fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: v.sub, marginTop: '0.4rem' }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* boton + swatches */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <span style={{
            fontFamily: v.uiFont, display: 'inline-flex', alignItems: 'center', gap: '0.7rem',
            background: v.gold, color: '#10243F', fontWeight: 600,
            fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            padding: '0.85rem 1.9rem',
          }}>
            Ver masterplan →
          </span>
          <span style={{
            fontFamily: v.uiFont, display: 'inline-flex', alignItems: 'center', gap: '0.7rem',
            border: `1px solid ${v.accent}`, color: v.accent, fontWeight: 500,
            fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            padding: '0.85rem 1.9rem',
          }}>
            Contacto
          </span>
        </div>

        {/* paleta */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '3rem', alignItems: 'center' }}>
          {v.swatches.map((sw) => (
            <div key={sw.hex} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '1.6rem', height: '1.6rem', background: sw.hex, border: '1px solid rgba(128,128,128,0.3)', display: 'inline-block', borderRadius: '3px' }} />
              <span style={{ fontFamily: v.uiFont, fontSize: '0.64rem', color: v.sub }}>
                <strong style={{ color: v.ink, fontWeight: 600 }}>{sw.label}</strong> {sw.hex}
              </span>
            </div>
          ))}
        </div>

        <p style={{ fontFamily: v.uiFont, fontSize: '0.66rem', letterSpacing: '0.05em', color: v.sub, marginTop: '1.75rem' }}>
          Tipografías: {v.fontNote}
        </p>
      </div>
    </section>
  )
}

export function Estilos() {
  return (
    <main style={{ background: '#0b0b0c' }}>
      {/* fuentes de las variantes (React 19 las hoistea al head) */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600&family=Fraunces:ital,opsz,wght@0,9..144,400;1,9..144,400;1,9..144,600&family=Libre+Caslon+Display&family=Libre+Franklin:wght@300;400;500;600&display=swap"
      />

      <header style={{
        position: 'sticky', top: 0, zIndex: 30, background: 'rgba(11,11,12,0.95)', backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '0 clamp(1.25rem, 4vw, 3rem)', height: '3.5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <span style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#fff', fontWeight: 500 }}>
          Estilos · 3 direcciones patria + YPF
        </span>
        <a href="/masterplan/" style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#E8A920', textDecoration: 'none', border: '1px solid rgba(232,169,32,0.45)', padding: '0.35rem 0.8rem' }}>
          ← Masterplan
        </a>
      </header>

      {VARIANTS.map((v) => <Band key={v.id} v={v} />)}

      <footer style={{ background: '#0b0b0c', padding: '2.5rem clamp(1.5rem, 6vw, 7rem)', textAlign: 'center' }}>
        <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: '60ch', margin: '0 auto' }}>
          Decime cuál te gusta (o qué mezclar de cada una) y la aplico a todo el sitio:
          tokens de color y tipografías globales.
        </p>
      </footer>
    </main>
  )
}
