'use client'

import { useEffect, useRef } from 'react'
import { useLang } from '@/lib/i18n'

// Secuencia de cuadros del "relato vivo" (scrub por scroll, estilo Apple)
const FRAME_COUNT = 104
const FRAME_SRCS = Array.from({ length: FRAME_COUNT }, (_, i) =>
  `/hero/seqv/f${String(i + 1).padStart(3, '0')}.jpg`
)
const HERO_POSTER = '/hero/seqv/f001.jpg'

// Cuánto scroll dura el hero, en múltiplos de la altura del viewport (~5 = ~500vh).
// Más distancia = el video avanza más lento y fluido por cuadro al scrollear.
const SCROLL_MULTIPLIER = 5
// Fracción del timeline (0→1) en la que corre toda la secuencia y entran los textos.
// El resto (1 - SEQ) es un HOLD explícito: frame final + "Vaca Verde" congelados,
// con la pantalla pinneada, para que dé tiempo de leer antes de pasar al gate.
const SEQ = 0.70

function coverGeo(srcW: number, srcH: number, dstW: number, dstH: number) {
  const sAR = srcW / srcH
  const dAR = dstW / dstH
  let dW: number, dH: number
  if (sAR > dAR) {
    dH = dstH; dW = dstH * sAR   // llena el alto, recorta a la derecha
  } else {
    dW = dstW; dH = dstW / sAR   // llena el ancho, recorta abajo
  }
  // Alineación superior-izquierda: conserva la industria del horizonte (arriba) y
  // a Belgrano con la bandera (izquierda).
  return { dW, dH, ox: 0, oy: 0 }
}

// Metadatos de cada estado (idénticos en ambos idiomas): id de animación, icono y
// destino del CTA. El texto sale del diccionario COPY según el idioma activo.
const STATES_META = [
  { id: 's0', icon: '', hasCta: false, ctaHref: '' },
  { id: 's1', icon: '◈', hasCta: false, ctaHref: '' },
  { id: 's2', icon: '◎', hasCta: false, ctaHref: '' },
  { id: 's3', icon: '✦', hasCta: true, ctaHref: '#gate' },
] as const

type HeroState = {
  eyebrow: string
  headline: string
  body: string
  ctaLabel: string
}

const COPY: Record<'es' | 'en', { states: HeroState[]; scrollCue: string }> = {
  es: {
    states: [
      {
        eyebrow: '',
        headline: 'Manuel Belgrano tenía razón.',
        body: 'En 1796, Manuel Belgrano propuso el cáñamo como una de las primeras industrias del país: producir y agregar valor, en lugar de solo extraer. Se adelantó más de dos siglos. Hoy, sobre la misma tierra que hizo grande a Vaca Muerta, la Patagonia tiene el suelo, el agua, la energía y la escala para cumplir aquella visión.',
        ctaLabel: '',
      },
      {
        eyebrow: 'La planta',
        headline: 'Crece rápido, en suelo árido y con poca agua.',
        body: 'El cáñamo industrial madura en pocos meses y prospera donde otros cultivos no llegan: poca agua, suelo difícil, clima patagónico. De una sola siembra entrega fibra, materiales y energía — el punto de partida de toda la cadena.',
        ctaLabel: '',
      },
      {
        eyebrow: 'De la semilla a la llave',
        headline: 'Una cadena entera, de la semilla a la llave.',
        body: 'El cáñamo se transforma en hempcrete —un material probado en más de 50 países que aísla, resiste el fuego y almacena carbono durante toda la vida de la construcción—, con el que se levantan viviendas accesibles allí donde más faltan. De sus residuos nace el biochar, que fija carbono por siglos. Cultivo, industria y construcción, con empleo técnico en cada eslabón.',
        ctaLabel: '',
      },
      {
        eyebrow: 'La invitación',
        headline: 'Juntos podemos convertir Vaca Muerta\nen Vaca Verde.',
        body: 'Vaca Muerta le dio a Neuquén energía, trabajo y escala. Sobre esa misma tierra, el cáñamo suma una industria que planta, construye y regenera: empleo local, vivienda para quienes llegan y carbono verificable. La misma cuenca que mueve al país puede ser también su motor verde —y la industria que hoy la impulsa, su mejor aliada para lograrlo.',
        ctaLabel: 'Acceder al masterplan',
      },
    ],
    scrollCue: 'Deslizá para descubrirlo',
  },
  en: {
    states: [
      {
        eyebrow: '',
        headline: 'Manuel Belgrano was right.',
        body: "In 1796, Manuel Belgrano proposed hemp as one of the country's first industries: to produce and add value, rather than merely extract. He was more than two centuries ahead of his time. Today, on the very land that made Vaca Muerta great, Patagonia has the soil, the water, the energy and the scale to fulfill that vision.",
        ctaLabel: '',
      },
      {
        eyebrow: 'The plant',
        headline: 'It grows fast, in arid soil, with little water.',
        body: "Industrial hemp matures in a few months and thrives where other crops can't: little water, difficult soil, a Patagonian climate. From a single planting it yields fiber, materials and energy — the starting point of the entire chain.",
        ctaLabel: '',
      },
      {
        eyebrow: 'From seed to key',
        headline: 'An entire chain, from seed to key.',
        body: 'Hemp becomes hempcrete — a material proven in more than 50 countries that insulates, resists fire and stores carbon for the entire life of the building — used to raise affordable homes where they are needed most. Its residues yield biochar, which sequesters carbon for centuries. Farming, industry and construction, with skilled jobs at every link.',
        ctaLabel: '',
      },
      {
        eyebrow: 'The invitation',
        headline: 'Together we can turn Vaca Muerta\ninto Vaca Verde.',
        body: 'Vaca Muerta gave Neuquén energy, jobs and scale. On that same land, hemp adds an industry that plants, builds and regenerates: local employment, homes for those who arrive and verifiable carbon. The same basin that drives the country can also be its green engine — and the industry that powers it today, its best ally in getting there.',
        ctaLabel: 'Open the masterplan',
      },
    ],
    scrollCue: 'Scroll to discover',
  },
}

// Posiciones sobre el eje del timeline (0→1). Frames y textos comparten este eje,
// así que la sincronía es exacta. Escenas reales (verificadas en los cuadros):
// f001 árido · f030 campo · f058 construcción · f104 ciudad verde.
// Los frames corren de 0 a SEQ (0.62); cada texto entra junto a su escena.
// Transiciones SECUENCIALES (in = out anterior + D): sin solape de títulos ni baches.
const TIMING = [
  { out: 0.135 },                // S0 árido + industria
  { in: 0.192, out: 0.361 },     // S1 campo de cáñamo
  { in: 0.418, out: 0.587 },     // S2 construcción
  { in: 0.644 },                 // S3 ciudad verde — entra antes del frame final y se sostiene en el HOLD
]

export function HeroScroll() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const initialized = useRef(false)
  const { lang } = useLang()
  const copy = COPY[lang]
  const states = STATES_META.map((meta, i) => ({ ...meta, ...copy.states[i] }))

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    const imgs: HTMLImageElement[] = FRAME_SRCS.map(() => new Image())

    let ready = false
    let lastDrawn = -1
    let curIdx = 0
    let gsapCtx: ReturnType<typeof import('gsap').gsap.context> | null = null

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

    function drawFrame(rawIdx: number) {
      const idx = Math.min(FRAME_COUNT - 1, Math.max(0, Math.round(rawIdx)))
      curIdx = idx
      if (!ready) return
      const exact = imgs[idx].complete && imgs[idx].naturalWidth > 0
      if (exact && idx === lastDrawn) return
      const img = exact ? imgs[idx] : nearestLoaded(idx)
      if (!img) return
      resizeCanvas()
      const cw = window.innerWidth, ch = window.innerHeight
      const g = coverGeo(img.naturalWidth, img.naturalHeight, cw, ch)
      ctx.clearRect(0, 0, cw, ch)
      ctx.drawImage(img, g.ox, g.oy, g.dW, g.dH)
      // Si dibujamos un cuadro "cercano" (el exacto aún no cargó), dejamos lastDrawn
      // en -1 para repintar cuando el exacto termine de cargar.
      lastDrawn = exact ? idx : -1
    }

    function markReadyAndDraw() {
      if (!ready) { ready = true; resizeCanvas() }
      lastDrawn = -1
      drawFrame(curIdx)
    }
    // Carga ORDENADA (f001→f104) con un pipeline de concurrencia limitada: los cuadros
    // que se ven primero están listos primero. Así nearestLoaded nunca "salta hacia
    // adelante" (sólo cae a un cuadro ya pasado) y el scrub se ve continuo, sin saltos.
    let loadIdx = 0
    const CONCURRENCY = 6
    function loadNext() {
      if (loadIdx >= FRAME_COUNT) return
      const i = loadIdx++
      const img = imgs[i]
      img.decoding = 'async'
      img.onload = () => {
        if (i === 0) markReadyAndDraw()
        else if (ready && i === curIdx) { lastDrawn = -1; drawFrame(curIdx) }
        loadNext()
      }
      img.onerror = () => loadNext()
      img.src = FRAME_SRCS[i]
    }
    for (let c = 0; c < CONCURRENCY; c++) loadNext()

    async function initTimeline() {
      const { gsap } = await import('@/lib/gsap')
      gsapCtx = gsap.context(() => {
        const frameState = { f: 0 }
        const D = 0.05

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '#hero-sticky',
            start: 'top top',
            end: () => '+=' + window.innerHeight * SCROLL_MULTIPLIER,
            pin: '#hero-sticky',
            pinSpacing: true,
            anticipatePin: 1,
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        })

        // CANVAS (fondo) — es un tween del MISMO timeline que el texto → sincronía exacta.
        tl.to(frameState, {
          f: FRAME_COUNT - 1,
          ease: 'none',
          duration: SEQ,
          onUpdate: () => drawFrame(frameState.f),
        }, 0)

        // La invitación a deslizar se desvanece apenas arranca el scroll
        tl.to('#hero-scroll-cue', { opacity: 0, y: 14, duration: 0.04 }, 0.02)

        // TEXTOS (mismo eje que los frames)
        tl.to('#hs0', { opacity: 0, y: -30, duration: D }, TIMING[0].out)
        tl.fromTo('#hs1', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: D }, TIMING[1].in!)
        tl.to('#hs1', { opacity: 0, y: -30, duration: D }, TIMING[1].out!)
        tl.fromTo('#hs2', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: D }, TIMING[2].in!)
        tl.to('#hs2', { opacity: 0, y: -30, duration: D }, TIMING[2].out!)
        tl.fromTo('#hs3', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: D }, TIMING[3].in!)

        // HOLD: extiende el timeline hasta 1.0 sin animar nada. El tramo SEQ→1.0 es
        // scroll real con la pantalla pinneada y todo congelado (frame final + S3).
        tl.to({}, { duration: 0.01 }, 0.99)
      })
    }
    initTimeline()

    function onResize() {
      canvas!.width = 0; canvas!.height = 0
      lastDrawn = -1
      resizeCanvas(); drawFrame(curIdx)
      import('@/lib/gsap').then(({ ScrollTrigger }) => ScrollTrigger.refresh())
    }
    window.addEventListener('resize', onResize, { passive: true })

    return () => {
      window.removeEventListener('resize', onResize)
      if (gsapCtx) gsapCtx.revert()
    }
  }, [])

  return (
    <section id="hero-pin-container" aria-label="Hero — Plan Manuel Belgrano">
      <div
        id="hero-sticky"
        style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}
      >
        {/* Poster de fondo hasta que el primer cuadro esté listo */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: `url(${HERO_POSTER})`, backgroundSize: 'cover', backgroundPosition: 'top left',
        }} />

        <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 1, display: 'block' }} />

        {/* Overlay */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none',
          background: 'linear-gradient(to left, rgba(7,26,56,0.6) 0%, rgba(7,26,56,0.26) 42%, transparent 62%), linear-gradient(to bottom, transparent 0%, rgba(7,26,56,0.32) 78%, rgba(7,26,56,0.82) 100%)',
        }} />

        {/* ESTADOS DE TEXTO */}
        {states.map((state, i) => (
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
            {state.eyebrow && (
              <p style={{
                fontFamily: 'var(--font-hanken)',
                fontSize: '0.68rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#5BC46A',
                fontWeight: 400,
                marginBottom: '1rem',
                fontStyle: 'normal',
              }}>
                {state.icon && <span style={{ marginRight: '0.5em', opacity: 0.8 }}>{state.icon}</span>}{state.eyebrow}
              </p>
            )}

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
                marginBottom: state.hasCta ? '2rem' : 0,
              }}>
                {state.body}
              </p>
            )}

            {state.hasCta && (
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href={state.ctaHref}
                  onClick={(e) => {
                    if (state.ctaHref.startsWith('#')) {
                      e.preventDefault()
                      document.getElementById(state.ctaHref.slice(1))?.scrollIntoView({ behavior: 'smooth' })
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
                  {state.ctaLabel}
                  <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                    <path d="M0 4H14M14 4L11 1M14 4L11 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        ))}

        {/* Invitación a deslizar — sobria, se desvanece al scrollear */}
        <div id="hero-scroll-cue" style={{
          position: 'absolute', bottom: '2.2rem', left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 8,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.9rem',
          pointerEvents: 'none', textAlign: 'center',
        }}>
          <span style={{
            fontFamily: 'var(--font-hanken)', fontSize: '0.72rem',
            letterSpacing: '0.24em', textTransform: 'uppercase' as const,
            color: 'rgba(243,241,231,0.82)', fontWeight: 400,
            textShadow: '0 2px 14px rgba(7,26,56,0.85)',
          }}>{copy.scrollCue}</span>
          <svg width="20" height="34" viewBox="0 0 20 34" fill="none" className="scroll-arrow" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 1V31M10 31L3 24M10 31L17 24" stroke="rgba(243,241,231,0.7)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
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
          @keyframes arrowBounce {
            0%,100% { transform: translateY(0); opacity: 0.5; }
            50% { transform: translateY(7px); opacity: 1; }
          }
          .scroll-arrow { animation: arrowBounce 1.8s ease-in-out infinite; }
        `}</style>
      </div>
    </section>
  )
}
