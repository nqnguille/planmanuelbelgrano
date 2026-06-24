'use client'

import { useEffect, useRef } from 'react'

// Secuencia de cuadros del "relato vivo" (scrub por scroll, estilo Apple)
const FRAME_COUNT = 104
const FRAME_SRCS = Array.from({ length: FRAME_COUNT }, (_, i) =>
  `/hero/seqv/f${String(i + 1).padStart(3, '0')}.jpg`
)
const HERO_POSTER = '/hero/seqv/f001.jpg'

// El scrub completa la secuencia antes del final (FRAME_END), dejando un "hold"
// para que se pueda leer el último estado (Vaca Verde).
const FRAME_END = 0.86
// Sesgo vertical del recorte cover: 0 = ancla arriba (muestra la industria del
// horizonte), 0.5 = centrado. Bajo a propósito para no perder la franja industrial.
const VERTICAL_BIAS = 0.18

function coverGeo(srcW: number, srcH: number, dstW: number, dstH: number) {
  const sAR = srcW / srcH
  const dAR = dstW / dstH
  let dW: number, dH: number, ox: number, oy: number
  if (sAR > dAR) {
    dH = dstH; dW = dstH * sAR; ox = (dstW - dW) / 2; oy = 0
  } else {
    dW = dstW; dH = dstW / sAR; ox = 0; oy = (dstH - dH) * VERTICAL_BIAS
  }
  return { dW, dH, ox, oy }
}

const STATES = [
  {
    id: 's0',
    icon: '✦',
    eyebrow: 'Plan Manuel Belgrano · Cáñamo industrial en la Patagonia',
    headline: 'Belgrano tenía razón.',
    body: 'En 1796, Belgrano propuso el cáñamo como una de las primeras industrias del país. Se adelantó dos siglos: hoy la Patagonia tiene el suelo, el agua, la energía y la escala para cumplirlo.',
    cta: null,
  },
  {
    id: 's1',
    icon: '◈',
    eyebrow: 'La biología como ventaja competitiva.',
    headline: 'El cultivo que más carbono fija por hectárea.',
    body: 'En pocos meses captura más CO₂ por hectárea que cualquier otro cultivo terrestre, crece en suelos áridos con poca agua y entrega fibra, material y energía de una misma siembra. La naturaleza hace el trabajo a costo casi nulo.',
    cta: null,
  },
  {
    id: 's2',
    icon: '◎',
    eyebrow: 'Hempcrete · Fibra · Biochar · Créditos',
    headline: 'De la semilla a la llave. Toda la cadena.',
    body: 'El cáñamo se transforma en hempcrete: aísla, resiste el fuego y dura siglos. Detrás hay una cadena completa —cultivo, procesamiento, materiales y construcción— con empleo técnico en cada eslabón, más biochar certificado como segunda línea de valor.',
    cta: null,
  },
  {
    id: 's3',
    icon: '✦',
    eyebrow: 'Plan Manuel Belgrano · 2026',
    headline: 'Juntos podemos convertir Vaca Muerta\nen Vaca Verde.',
    body: 'Vaca Muerta le dio a Neuquén energía, trabajo y escala. Sobre esa misma tierra, el cáñamo suma una industria que planta, construye y regenera. La misma cuenca, la misma potencia —ahora también verde.',
    cta: { label: 'Acceder al masterplan', href: '#gate' },
  },
]

// Posiciones GSAP normalizadas (0→1) — sin dead zones entre estados
const TIMING = [
  { outAt: 0.18 },
  { inAt: 0.21, outAt: 0.42 },
  { inAt: 0.45, outAt: 0.62 },
  { inAt: 0.66 },
]

export function HeroScroll() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    const imgs: HTMLImageElement[] = FRAME_SRCS.map((src) => {
      const img = new Image()
      img.src = src
      return img
    })

    let ready = false
    let lastP = 0
    let lastDrawn = -1
    let rafPending = false
    let gsapCtx: ReturnType<typeof import('gsap').gsap.context> | null = null

    function markReadyAndDraw() {
      if (!ready) {
        ready = true
        resizeCanvas()
      }
      drawFrame(lastP)
    }
    // El primer cuadro habilita el dibujo; el resto se va cargando en segundo plano
    if (imgs[0].complete && imgs[0].naturalWidth) markReadyAndDraw()
    else { imgs[0].onload = markReadyAndDraw; imgs[0].onerror = markReadyAndDraw }
    // Redibujar cuando cada cuadro termina de cargar (por si el usuario está quieto en ese punto)
    imgs.forEach((img) => { img.onload = img.onload || (() => { if (ready) drawFrame(lastP) }) })

    function resizeCanvas() {
      const dpr = window.devicePixelRatio || 1
      const W = window.innerWidth, H = window.innerHeight
      const tw = Math.round(W * dpr), th = Math.round(H * dpr)
      if (canvas!.width !== tw || canvas!.height !== th) {
        canvas!.width = tw; canvas!.height = th
        canvas!.style.width = W + 'px'; canvas!.style.height = H + 'px'
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        ctx.scale(dpr, dpr)
      }
    }

    function nearestLoaded(idx: number): HTMLImageElement | null {
      for (let d = 0; d < FRAME_COUNT; d++) {
        const a = imgs[idx - d], b = imgs[idx + d]
        if (a && a.complete && a.naturalWidth) return a
        if (b && b.complete && b.naturalWidth) return b
      }
      return null
    }

    function drawFrame(p: number) {
      if (!ready) return
      const pf = Math.min(1, p / FRAME_END)
      const idx = Math.min(FRAME_COUNT - 1, Math.max(0, Math.round(pf * (FRAME_COUNT - 1))))
      if (idx === lastDrawn && imgs[idx].complete && imgs[idx].naturalWidth) return
      const img = (imgs[idx].complete && imgs[idx].naturalWidth) ? imgs[idx] : nearestLoaded(idx)
      if (!img) return
      resizeCanvas()
      const cw = window.innerWidth, ch = window.innerHeight
      const g = coverGeo(img.naturalWidth, img.naturalHeight, cw, ch)
      ctx.clearRect(0, 0, cw, ch)
      ctx.drawImage(img, g.ox, g.oy, g.dW, g.dH)
      lastDrawn = idx
    }

    function onScroll() {
      const container = document.getElementById('hero-pin-container')
      if (!container) return
      const rect = container.getBoundingClientRect()
      const scrolled = Math.max(0, -rect.top)
      const total = container.offsetHeight - window.innerHeight
      lastP = total > 0 ? Math.min(1, scrolled / total) : 0
      if (!rafPending) {
        rafPending = true
        requestAnimationFrame(() => { rafPending = false; drawFrame(lastP) })
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', () => {
      canvas!.width = 0; canvas!.height = 0
      lastDrawn = -1
      resizeCanvas(); drawFrame(lastP)
    }, { passive: true })

    async function initTextAnimations() {
      const { gsap } = await import('@/lib/gsap')
      gsapCtx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '#hero-pin-container',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.8,
          },
        })

        const D = 0.05

        // La invitación a deslizar se desvanece apenas el usuario arranca a scrollear
        tl.to('#hero-scroll-cue', { opacity: 0, y: 14, duration: 0.04 }, 0.02)

        // S0 → fade out
        tl.to('#hs0', { opacity: 0, y: -30, duration: D }, TIMING[0].outAt)

        // S1
        tl.fromTo('#hs1', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: D }, TIMING[1].inAt!)
        tl.to('#hs1', { opacity: 0, y: -30, duration: D }, TIMING[1].outAt!)

        // S2
        tl.fromTo('#hs2', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: D }, TIMING[2].inAt!)
        tl.to('#hs2', { opacity: 0, y: -30, duration: D }, TIMING[2].outAt!)

        // S3 — stays
        tl.fromTo('#hs3', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: D }, TIMING[3].inAt!)
      })
    }
    initTextAnimations()
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (gsapCtx) gsapCtx.revert()
    }
  }, [])

  return (
    <section
      id="hero-pin-container"
      style={{ height: '950vh' }}
      aria-label="Hero — De la semilla a la industria"
    >
      <div
        id="hero-sticky"
        style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}
      >
        {/* Poster de fondo hasta que el primer cuadro esté listo */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: `url(${HERO_POSTER})`, backgroundSize: 'cover', backgroundPosition: 'center',
        }} />

        <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 1, display: 'block' }} />

        {/* Overlay */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none',
          background: 'linear-gradient(to left, rgba(7,26,56,0.6) 0%, rgba(7,26,56,0.26) 42%, transparent 62%), linear-gradient(to bottom, transparent 0%, rgba(7,26,56,0.32) 78%, rgba(7,26,56,0.82) 100%)',
        }} />

        {/* ESTADOS DE TEXTO */}
        {STATES.map((state, i) => (
          <div
            key={state.id}
            id={`hs${i}`}
            style={{
              position: 'absolute',
              bottom: i === 3 ? '12%' : '16%',
              right: '5%',
              zIndex: 5,
              maxWidth: i === 3 ? 'min(780px, 65vw)' : 'min(860px, 70vw)',
              textAlign: 'right',
              opacity: i === 0 ? 1 : 0,
            }}
          >
            <p style={{
              fontFamily: 'var(--font-hanken)',
              fontSize: i === 0 ? '0.75rem' : '0.68rem',
              letterSpacing: i === 0 ? '0.08em' : '0.2em',
              textTransform: i === 0 ? 'none' : 'uppercase',
              color: '#5BC46A',
              fontWeight: 400,
              marginBottom: '1rem',
              fontStyle: 'normal',
            }}>
              <span style={{ marginRight: '0.5em', opacity: 0.8 }}>{state.icon}</span>{state.eyebrow}
            </p>

            <h2 style={{
              fontFamily: 'var(--font-garamond), "EB Garamond", serif',
              fontWeight: 400,
              fontSize: i === 3
                ? 'clamp(2.8rem, 5.5vw, 5rem)'
                : 'clamp(3.2rem, 6.5vw, 6rem)',
              lineHeight: 1.0,
              color: '#F3F1E7',
              marginBottom: '1.25rem',
            }}>
              {state.headline.split('\n').map((line, j) => (
                <span key={j}>
                  {j === state.headline.split('\n').length - 1 && i === 3
                    ? <em style={{ color: '#5BC46A', fontStyle: 'italic' }}>{line}</em>
                    : line}
                  {j < state.headline.split('\n').length - 1 && <br />}
                </span>
              ))}
            </h2>

            {state.body && (
              <p style={{
                fontFamily: 'var(--font-hanken)',
                fontWeight: 300,
                fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
                color: 'rgba(243,241,231,0.72)',
                lineHeight: 1.65,
                marginBottom: state.cta ? '2rem' : 0,
              }}>
                {state.body}
              </p>
            )}

            {state.cta && (
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href={state.cta.href}
                  onClick={(e) => {
                    if (state.cta!.href.startsWith('#')) {
                      e.preventDefault()
                      document.getElementById(state.cta!.href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                    padding: '1rem 2.25rem',
                    backgroundColor: '#5BC46A', color: '#071A38',
                    fontFamily: 'var(--font-hanken)', fontSize: '0.72rem',
                    letterSpacing: '0.18em', textTransform: 'uppercase',
                    fontWeight: 500, textDecoration: 'none',
                    transition: 'background-color 0.25s ease',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#4FB05E' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#5BC46A' }}
                >
                  {state.cta.label}
                  <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                    <path d="M0 4H14M14 4L11 1M14 4L11 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        ))}

        {/* Invitación a deslizar — protagonista al inicio, se desvanece al scrollear */}
        <div id="hero-scroll-cue" style={{
          position: 'absolute', bottom: '2rem', left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 8,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem',
          pointerEvents: 'none', textAlign: 'center',
        }}>
          <span style={{
            fontFamily: 'var(--font-hanken)', fontSize: '0.8rem',
            letterSpacing: '0.22em', textTransform: 'uppercase' as const,
            color: 'rgba(243,241,231,0.92)', fontWeight: 500,
            textShadow: '0 2px 14px rgba(7,26,56,0.85)',
          }}>Deslizá para descubrirlo</span>
          <svg width="30" height="46" viewBox="0 0 30 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="28" height="44" rx="14" stroke="rgba(91,196,106,0.85)" strokeWidth="1.6"/>
            <circle cx="15" cy="13" r="3" fill="#5BC46A" className="scroll-wheel"/>
          </svg>
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none" className="scroll-chevron" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L9 8L17 1" stroke="rgba(242,181,68,0.95)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Flora badge */}
        <div style={{
          position: 'absolute', bottom: '1.25rem', right: '1.5rem', zIndex: 10,
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          background: 'rgba(7,26,56,0.75)', backdropFilter: 'blur(8px)',
          padding: '0.4rem 0.75rem', borderRadius: '4px',
          border: '1px solid rgba(91,196,106,0.2)',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
            <path d="M12 2C12 2 7 7 7 12C7 14.5 8.5 16.5 10 17.5L10 22H14V17.5C15.5 16.5 17 14.5 17 12C17 7 12 2 12 2Z" fill="#5BC46A" opacity="0.9" />
          </svg>
          <span style={{
            fontFamily: 'var(--font-hanken)', fontSize: '0.58rem',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'rgba(243,241,231,0.75)', fontWeight: 500, whiteSpace: 'nowrap',
          }}>
            Flora Cáñamo Neuquino
          </span>
        </div>

        <style>{`
          @keyframes wheelBounce {
            0%,100% { transform: translateY(0); opacity: 0.9; }
            50% { transform: translateY(8px); opacity: 0.2; }
          }
          .scroll-wheel { animation: wheelBounce 1.6s ease-in-out infinite; }
          @keyframes chevBounce {
            0%,100% { transform: translateY(0); opacity: 0.5; }
            50% { transform: translateY(5px); opacity: 1; }
          }
          .scroll-chevron { animation: chevBounce 1.6s ease-in-out infinite; }
        `}</style>
      </div>
    </section>
  )
}
