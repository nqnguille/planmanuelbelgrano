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
    icon: '⟳',
    eyebrow: 'El ciclo que nunca se cerró.',
    headline: 'Doscientos años de improductividad.',
    body: 'Argentina exporta recursos naturales desde 1816. Ni un solo eslabón de valor agregado consolidado en escala. El modelo extractivo no genera industria, no acumula tecnología, no produce empleo calificado. La Patagonia tiene suelo, agua, sol y viento — y los regala sin procesar. Belgrano lo llamó el error fundacional. Sigue siendo el mismo.',
    cta: null,
  },
  {
    id: 's1',
    icon: '◈',
    eyebrow: 'La biología como ventaja competitiva.',
    headline: 'La planta más eficiente del planeta.',
    body: 'El cáñamo industrial es el segundo cultivo con mayor captura de CO₂ rankada globalmente — 8 a 12 toneladas por hectárea en 90 a 120 días. Sin riego intensivo, sin agroquímicos, en suelos áridos que hoy no producen nada. La naturaleza hace el trabajo a costo energético casi cero. Cada planta genera un activo certificable en el mercado de carbono antes de ser cosechada.',
    cta: null,
  },
  {
    id: 's2',
    icon: '◎',
    eyebrow: 'Hempcrete · Biochar · Fibra · Créditos',
    headline: 'De la semilla a la llave. Toda la cadena.',
    body: 'Hempcrete (fijación permanente, siglos de permanencia), biochar (USD 164/t certificado, compradores: Microsoft, Shell, Google), fibra industrial y créditos de carbono verificados. Todo desde la misma hectárea. Con la desregulación del Decreto 883 ya vigente y la escala de Neuquén disponible, la cadena completa puede operar en 2026.',
    cta: null,
  },
  {
    id: 's3',
    icon: '✦',
    eyebrow: 'Plan Manuel Belgrano · 2026',
    headline: 'YPF no compra créditos de carbono.\nLos produce.',
    body: 'Europa exige certificación de huella de carbono vía CS3D. Sin ella, el GNL argentino es commodity. Con ella: USD 7–17M de premium por cargo. YPF puede ser el primer productor soberano de créditos de carbono de América Latina — no como compensación, como línea de negocio. 4.000 ha generan USD 2,2M/año. A escala Neuquén: USD 27,5M anuales.',
    cta: { label: 'Conocé el master plan', href: '#s05' },
  },
]

// Posiciones GSAP normalizadas (0→1) — sin dead zones entre estados
const TIMING = [
  { outAt: 0.10 },
  { inAt: 0.11, outAt: 0.38 },
  { inAt: 0.39, outAt: 0.62 },
  { inAt: 0.63 },
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
            scrub: 0.8,
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

        // S3 — stays
        tl.fromTo('#hs3', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: D }, TIMING[3].inAt!)
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
      style={{ height: '700vh' }}
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
              color: '#71CE6A',
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
              color: '#F7F6EB',
              marginBottom: '1.25rem',
            }}>
              {state.headline.split('\n').map((line, j) => (
                <span key={j}>
                  {j === state.headline.split('\n').length - 1 && i === 3
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

        {/* Mouse scroll indicator */}
        <div style={{
          position: 'absolute', bottom: '2.5rem', left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 6,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
          pointerEvents: 'none',
        }}>
          <svg width="24" height="38" viewBox="0 0 24 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.75" y="0.75" width="22.5" height="36.5" rx="11.25" stroke="rgba(247,246,235,0.28)" strokeWidth="1.5"/>
            <circle cx="12" cy="11" r="2.5" fill="rgba(201,168,76,0.65)" className="scroll-wheel"/>
          </svg>
          <span style={{
            fontFamily: 'var(--font-hanken)', fontSize: '0.52rem',
            letterSpacing: '0.28em', textTransform: 'uppercase' as const,
            color: 'rgba(247,246,235,0.2)',
          }}>scroll</span>
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

        <style>{`
          @keyframes wheelBounce {
            0%,100% { transform: translateY(0); opacity: 0.65; }
            50% { transform: translateY(6px); opacity: 0.15; }
          }
          .scroll-wheel { animation: wheelBounce 1.8s ease-in-out infinite; }
        `}</style>
      </div>
    </section>
  )
}
