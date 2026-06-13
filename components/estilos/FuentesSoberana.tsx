'use client'

/* Paleta Soberana fija (azul YPF) — variando solo la tipografía. */

const BG = '#071A38'
const SURFACE = '#0E2A52'
const INK = '#F3F1E7'
const SUB = 'rgba(243,241,231,0.6)'
const ACCENT = '#74ACDF' // celeste
const GOLD = '#F2B544'
const GREEN = '#5BC46A'

type Pair = {
  id: string
  label: string
  blurb: string
  display: string
  ui: string
  italic: boolean
  ar?: boolean
}

const PAIRS: Pair[] = [
  { id: 'caslon', label: 'Libre Caslon · Libre Franklin', blurb: 'Editorial argentino — la actual', display: "'Libre Caslon Display', Georgia, serif", ui: "'Libre Franklin', sans-serif", italic: true, ar: true },
  { id: 'fraunces', label: 'Fraunces · Archivo', blurb: 'Serif moderna con carácter + grotesca argentina', display: "'Fraunces', Georgia, serif", ui: "'Archivo', sans-serif", italic: true, ar: true },
  { id: 'playfair', label: 'Playfair Display · Source Sans 3', blurb: 'Elegante, alto contraste', display: "'Playfair Display', Georgia, serif", ui: "'Source Sans 3', sans-serif", italic: true },
  { id: 'lora', label: 'Lora · Inter', blurb: 'Institucional, confiable, muy legible', display: "'Lora', Georgia, serif", ui: "'Inter', sans-serif", italic: true },
  { id: 'bitter', label: 'Bitter · IBM Plex Sans', blurb: 'Serio y técnico, tono energético (slab)', display: "'Bitter', Georgia, serif", ui: "'IBM Plex Sans', sans-serif", italic: true },
  { id: 'space', label: 'Space Grotesk · Inter', blurb: 'Corporativo sin serif — el más “empresa tech”', display: "'Space Grotesk', system-ui, sans-serif", ui: "'Inter', sans-serif", italic: false },
]

function SunOfMay({ size = 78 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden style={{ opacity: 0.85 }}>
      {Array.from({ length: 16 }).map((_, i) => (
        <line key={i} x1="50" y1="50" x2="50" y2="7" stroke={GOLD} strokeWidth="2.4" transform={`rotate(${(360 / 16) * i} 50 50)`} opacity={0.5} />
      ))}
      <circle cx="50" cy="50" r="16" fill="none" stroke={GOLD} strokeWidth="3" />
    </svg>
  )
}

function Band({ p, alt }: { p: Pair; alt: boolean }) {
  return (
    <section style={{ background: alt ? SURFACE : BG, padding: 'clamp(3rem, 7vw, 5.5rem) clamp(1.5rem, 6vw, 7rem)', position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(116,172,223,0.12)' }}>
      <div style={{ position: 'absolute', top: '1.75rem', right: 'clamp(1.5rem, 6vw, 7rem)', pointerEvents: 'none' }}><SunOfMay /></div>
      <div style={{ maxWidth: '1080px', margin: '0 auto', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.9rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
          <span style={{ fontFamily: p.ui, fontSize: '0.64rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: GOLD, fontWeight: 600, border: `1px solid ${GOLD}`, padding: '0.32rem 0.7rem' }}>
            {p.label}{p.ar ? ' 🇦🇷' : ''}
          </span>
          <span style={{ fontFamily: p.ui, fontSize: '0.78rem', color: SUB }}>{p.blurb}</span>
        </div>

        <p style={{ fontFamily: p.ui, fontSize: '0.7rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: ACCENT, fontWeight: 600, margin: 0 }}>
          Plan Manuel Belgrano · Energía y tierra argentina
        </p>
        <h2 style={{
          fontFamily: p.display, fontStyle: p.italic ? 'italic' : 'normal',
          fontWeight: p.italic ? 400 : 600, letterSpacing: p.italic ? 0 : '-0.01em',
          fontSize: 'clamp(2.5rem, 5.6vw, 4.9rem)', lineHeight: 1.04, color: INK, margin: '1.1rem 0 1.4rem',
        }}>
          Vaca Muerta ya rinde.
          <br />
          Ahora, <span style={{ color: GREEN }}>Vaca Verde.</span>
        </h2>
        <p style={{ fontFamily: p.ui, fontWeight: 300, fontSize: 'clamp(0.95rem, 1.2vw, 1.08rem)', lineHeight: 1.75, color: SUB, maxWidth: '58ch', margin: 0 }}>
          Cáñamo industrial, hempcrete y créditos de carbono en la misma cuenca que el gas.
          De la semilla a la llave, una industria nueva para que YPF la lidere.
        </p>

        <div style={{ display: 'flex', gap: 'clamp(2rem, 5vw, 4rem)', flexWrap: 'wrap', margin: '2.5rem 0' }}>
          {[{ n: '40.000', l: 'puestos de trabajo' }, { n: 'USD 27,5M', l: 'por año en créditos' }, { n: '+500', l: 'años de carbono fijado' }].map((s) => (
            <div key={s.l}>
              <div style={{ fontFamily: p.display, fontStyle: p.italic ? 'italic' : 'normal', fontWeight: p.italic ? 400 : 600, fontSize: 'clamp(1.7rem, 2.8vw, 2.4rem)', color: INK, lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontFamily: p.ui, fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: SUB, marginTop: '0.4rem' }}>{s.l}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: p.ui, background: GOLD, color: '#071A38', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', padding: '0.85rem 1.9rem' }}>
            Ver masterplan →
          </span>
          <span style={{ fontFamily: p.ui, border: `1px solid ${ACCENT}`, color: ACCENT, fontWeight: 500, fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', padding: '0.85rem 1.9rem' }}>
            Contacto
          </span>
        </div>
      </div>
    </section>
  )
}

export function FuentesSoberana() {
  return (
    <main style={{ background: BG }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600&family=Fraunces:ital,opsz,wght@0,9..144,400;1,9..144,400;1,9..144,600&family=Libre+Caslon+Display&family=Libre+Franklin:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&family=Source+Sans+3:wght@300;400;600&family=Lora:ital,wght@0,400;0,600;1,400;1,600&family=Inter:wght@300;400;500;600&family=Bitter:ital,wght@0,400;0,600;1,400;1,600&family=IBM+Plex+Sans:wght@300;400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap"
      />

      <header style={{
        position: 'sticky', top: 0, zIndex: 30, background: 'rgba(7,26,56,0.95)', backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(116,172,223,0.2)', padding: '0 clamp(1.25rem, 4vw, 3rem)', height: '3.5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <span style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: INK, fontWeight: 500 }}>
          Paleta Soberana · 6 tipografías
        </span>
        <a href="/estilos/" style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.58rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: GOLD, textDecoration: 'none', border: '1px solid rgba(242,181,68,0.45)', padding: '0.35rem 0.8rem' }}>
          ← Paletas
        </a>
      </header>

      {PAIRS.map((p, i) => <Band key={p.id} p={p} alt={i % 2 === 1} />)}

      <footer style={{ background: BG, padding: '2.5rem clamp(1.5rem, 6vw, 7rem)', textAlign: 'center', borderTop: '1px solid rgba(116,172,223,0.15)' }}>
        <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.8rem', color: SUB, lineHeight: 1.7, maxWidth: '58ch', margin: '0 auto' }}>
          Misma paleta YPF en las seis. Decime qué número de tipografía te gusta y la aplico a todo el sitio.
        </p>
      </footer>
    </main>
  )
}
