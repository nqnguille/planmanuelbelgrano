'use client'

import { useEffect, useRef } from 'react'

const FRAME_COUNT = 9
const FRAME_SRCS = Array.from({ length: FRAME_COUNT }, (_, i) =>
  `/hero/frames/f${String(i + 1).padStart(2, '0')}.jpg`
)

function coverGeo(srcW: number, srcH: number, dstW: number, dstH: number) {
  const sAR = srcW / srcH
  const dAR = dstW / dstH
  let dW: number, dH: number, ox: number, oy: number
  if (sAR > dAR) {
    dH = dstH; dW = dstH * sAR; ox = (dstW - dW) / 2; oy = 0
  } else {
    dW = dstW; dH = dstW / sAR; ox = 0; oy = (dstH - dH) / 2
  }
  return { dW, dH, ox, oy }
}

const STATES = [
  {
    id: 's0',
    eyebrow: 'Patagonia · 1810',
    headline: 'Doscientos años\ndel mismo ciclo.',
    body: 'Extraer. Exportar. Sin transformar. La Patagonia sigue esperando la industria que Belgrano imaginó.',
    cta: null,
  },
  {
    id: 's1',
    eyebrow: 'Semilla',
    headline: 'Una planta\nque rompe el ciclo.',
    body: 'Crece en condiciones extremas. Sin riego intensivo. Sin agroquímicos. En la misma tierra que hoy se usa para extraer.',
    cta: null,
  },
  {
    id: 's2',
    eyebrow: 'Cultivo',
    headline: 'Mientras crece,\ncaptura.',
    body: 'Entre 8 y 12 toneladas de CO₂ por hectárea, por año. Cada planta es un activo financiero en formación antes de ser cosechada.',
    cta: null,
  },
  {
    id: 's3',
    eyebrow: 'Cosecha',
    headline: 'Una cosecha.\nCuatro industrias.',
    body: 'De una sola biomasa nacen cuatro cadenas de valor: carbono certificable, fibra industrial, energía y proteína vegetal.',
    cta: null,
  },
  {
    id: 's4',
    eyebrow: 'Procesamiento',
    headline: 'No exportamos\nmateria prima.',
    body: 'Construimos la industria completa. Fibra. Hurda. Hempcrete. Aceite. Proteína. Valor en cada etapa del proceso.',
    cta: null,
  },
  {
    id: 's5',
    eyebrow: 'Materiales',
    headline: 'Cada muro fija\ncarbono para siempre.',
    body: '75 a 165 kg de CO₂ fijados por metro cúbico según formulación. De forma permanente. Una estimación de 300 a 500 años de vida útil.',
    cta: null,
  },
  {
    id: 's6',
    eyebrow: 'Construcción',
    headline: 'Cada vivienda\nes un activo\ncertificado.',
    body: 'No solo reduce el déficit habitacional. Genera un crédito de carbono certificable, exportable y con precio de mercado verificado.',
    cta: null,
  },
  {
    id: 's7',
    eyebrow: 'Carbono',
    headline: 'YPF ya tiene\nla plataforma.\nFalta activarla.',
    body: 'Tierra irrigable. Logística. Escala federal. Capital humano. Todo lo que una industria de clase mundial necesita para arrancar hoy.',
    cta: null,
  },
  {
    id: 's8',
    eyebrow: 'Plan Manuel Belgrano · 2026',
    headline: 'YPF no compra\ncréditos de carbono.\nLos produce.',
    body: null,
    cta: { label: 'Agendar reunión', href: 'mailto:contacto@planmanuelbelgrano.com.ar' },
  },
]

// Posiciones GSAP normalizadas (0→1)
// s0 fades out at 0.06 | cada estado ocupa ~0.11 del timeline
const TIMING = [
  { outAt: 0.06 },
  { inAt: 0.10, outAt: 0.20 },
  { inAt: 0.23, outAt: 0.33 },
  { inAt: 0.36, outAt: 0.46 },
  { inAt: 0.49, outAt: 0.58 },
  { inAt: 0.61, outAt: 0.70 },
  { inAt: 0.73, outAt: 0.81 },
  { inAt: 0.83, outAt: 0.90 },
  { inAt: 0.92 },
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

    let loadedCount = 0
    let ready = false
    let lastP = 0
    let rafPending = false
    let gsapCtx: ReturnType<typeof import('gsap').gsap.context> | null = null

    function onImgLoad() {
      loadedCount++
      if (loadedCount === FRAME_COUNT) {
        ready = true
        resizeCanvas()
        drawFrame(0)
      }
    }
    imgs.forEach((img) => {
      if (img.complete && img.naturalWidth) onImgLoad()
      else { img.onload = onImgLoad; img.onerror = onImgLoad }
    })

    function resizeCanvas() {
      const dpr = window.devicePixelRatio || 1
      const W = window.innerWidth, H = window.innerHeight
      const tw = Math.round(W * dpr), th = Math.round(H * dpr)
      if (canvas!.width !== tw || canvas!.height !== th) {
        canvas!.width = tw; canvas!.height = th
        canvas!.style.width = W + 'px'; canvas!.style.height = H + 'px'
        ctx.scale(dpr, dpr)
      }
    }

    function coverDraw(img: HTMLImageElement) {
      if (!img.naturalWidth) return
      const cw = window.innerWidth, ch = window.innerHeight
      const g = coverGeo(img.naturalWidth, img.naturalHeight, cw, ch)
      ctx.drawImage(img, g.ox, g.oy, g.dW, g.dH)
    }

    function drawFrame(p: number) {
      if (!ready) return
      resizeCanvas()
      const cw = window.innerWidth, ch = window.innerHeight
      ctx.clearRect(0, 0, cw, ch)
      const frameFloat = Math.min(p * (FRAME_COUNT - 1), FRAME_COUNT - 1 - 0.001)
      const idx = Math.floor(frameFloat)
      const t = frameFloat - idx
      ctx.globalAlpha = 1
      coverDraw(imgs[idx])
      if (t > 0 && idx + 1 < FRAME_COUNT) {
        ctx.globalAlpha = t
        coverDraw(imgs[idx + 1])
        ctx.globalAlpha = 1
      }
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
      resizeCanvas(); drawFrame(lastP)
    }, { passive: true })

    async function initTextAnimations() {
      const { gsap, ScrollTrigger } = await import('@/lib/gsap')
      gsapCtx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '#hero-pin-container',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.2,
          },
        })

        const D = 0.04

        // S0 → fade out
        tl.to('#hs0', { opacity: 0, y: -30, duration: D }, TIMING[0].outAt)

        // S1
        tl.fromTo('#hs1', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: D }, TIMING[1].inAt!)
        tl.to('#hs1', { opacity: 0, y: -30, duration: D }, TIMING[1].outAt!)

        // S2
        tl.fromTo('#hs2', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: D }, TIMING[2].inAt!)
        tl.to('#hs2', { opacity: 0, y: -30, duration: D }, TIMING[2].outAt!)

        // S3
        tl.fromTo('#hs3', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: D }, TIMING[3].inAt!)
        tl.to('#hs3', { opacity: 0, y: -30, duration: D }, TIMING[3].outAt!)

        // S4
        tl.fromTo('#hs4', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: D }, TIMING[4].inAt!)
        tl.to('#hs4', { opacity: 0, y: -30, duration: D }, TIMING[4].outAt!)

        // S5
        tl.fromTo('#hs5', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: D }, TIMING[5].inAt!)
        tl.to('#hs5', { opacity: 0, y: -30, duration: D }, TIMING[5].outAt!)

        // S6
        tl.fromTo('#hs6', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: D }, TIMING[6].inAt!)
        tl.to('#hs6', { opacity: 0, y: -30, duration: D }, TIMING[6].outAt!)

        // S7
        tl.fromTo('#hs7', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: D }, TIMING[7].inAt!)
        tl.to('#hs7', { opacity: 0, y: -30, duration: D }, TIMING[7].outAt!)

        // S8 — stays
        tl.fromTo('#hs8', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: D }, TIMING[8].inAt!)
      })
    }
    initTextAnimations()

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (gsapCtx) gsapCtx.revert()
    }
  }, [])

  return (
    <section
      id="hero-pin-container"
      style={{ height: '800vh' }}
      aria-label="Hero — De la semilla a la industria"
    >
      <div
        id="hero-sticky"
        style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}
      >
        <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 1, display: 'block' }} />

        {/* Overlay */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none',
          background: 'linear-gradient(to left, rgba(26,43,34,0.85) 0%, rgba(26,43,34,0.45) 42%, transparent 65%), linear-gradient(to bottom, transparent 0%, rgba(26,43,34,0.5) 75%, rgba(26,43,34,0.97) 100%)',
        }} />

        {/* ESTADOS DE TEXTO */}
        {STATES.map((state, i) => (
          <div
            key={state.id}
            id={`hs${i}`}
            style={{
              position: 'absolute',
              bottom: i === 8 ? '12%' : '16%',
              right: '5%',
              zIndex: 5,
              maxWidth: i === 8 ? 'min(620px, 52vw)' : 'min(540px, 46vw)',
              textAlign: 'right',
              opacity: i === 0 ? 1 : 0,
            }}
          >
            <p style={{
              fontFamily: 'var(--font-hanken)',
              fontSize: '0.68rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#71CE6A',
              fontWeight: 400,
              marginBottom: '1rem',
            }}>
              {state.eyebrow}
            </p>

            <h2 style={{
              fontFamily: 'var(--font-garamond), "EB Garamond", serif',
              fontWeight: 400,
              fontSize: i === 8
                ? 'clamp(2.8rem, 5.5vw, 5rem)'
                : 'clamp(3.2rem, 6.5vw, 6rem)',
              lineHeight: 1.0,
              color: '#F7F6EB',
              marginBottom: '1.25rem',
            }}>
              {state.headline.split('\n').map((line, j) => (
                <span key={j}>
                  {j === state.headline.split('\n').length - 1 && i === 8
                    ? <em style={{ color: '#71CE6A', fontStyle: 'italic' }}>{line}</em>
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
                color: 'rgba(247,246,235,0.72)',
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
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                    padding: '1rem 2.25rem',
                    backgroundColor: '#71CE6A', color: '#1C1A14',
                    fontFamily: 'var(--font-hanken)', fontSize: '0.72rem',
                    letterSpacing: '0.18em', textTransform: 'uppercase',
                    fontWeight: 500, textDecoration: 'none',
                    transition: 'background-color 0.25s ease',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#5db856' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#71CE6A' }}
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

        {/* Indicador de etapa */}
        <div style={{
          position: 'absolute', bottom: '2rem', left: '2.5rem', zIndex: 6,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem',
        }}>
          <span style={{
            fontFamily: 'var(--font-hanken)', fontSize: '0.6rem',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: 'rgba(247,246,235,0.3)', writingMode: 'vertical-rl',
          }}>scroll</span>
          <div style={{
            width: '1px', height: '3rem',
            background: 'linear-gradient(to bottom, rgba(201,168,76,0.6), transparent)',
            animation: 'scrollPulse 2s ease-in-out infinite',
          }} />
        </div>

        {/* Flora badge */}
        <div style={{
          position: 'absolute', bottom: '1.25rem', right: '1.5rem', zIndex: 10,
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          background: 'rgba(26,43,34,0.75)', backdropFilter: 'blur(8px)',
          padding: '0.4rem 0.75rem', borderRadius: '4px',
          border: '1px solid rgba(113,206,106,0.2)',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
            <path d="M12 2C12 2 7 7 7 12C7 14.5 8.5 16.5 10 17.5L10 22H14V17.5C15.5 16.5 17 14.5 17 12C17 7 12 2 12 2Z" fill="#71CE6A" opacity="0.9" />
          </svg>
          <span style={{
            fontFamily: 'var(--font-hanken)', fontSize: '0.58rem',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'rgba(247,246,235,0.75)', fontWeight: 500, whiteSpace: 'nowrap',
          }}>
            Flora Cáñamo Neuquino
          </span>
        </div>

        <style>{`@keyframes scrollPulse { 0%,100%{transform:scaleY(1);opacity:.6} 50%{transform:scaleY(.6);opacity:1} }`}</style>
      </div>
    </section>
  )
}
