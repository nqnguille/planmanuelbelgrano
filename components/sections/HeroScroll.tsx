'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export function HeroScroll() {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    let ctx: ReturnType<typeof import('gsap').gsap.context> | null = null

    async function initGsap() {
      const { gsap, ScrollTrigger } = await import('@/lib/gsap')

      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '#hero-pin-container',
            start: 'top top',
            end: '+=300%',
            scrub: 2,
            pin: '#hero-sticky',
          },
        })

        // 0 → 0.25: texto s0 + sketch desaparecen
        tl.to('#hero-text-s0', { opacity: 0, y: -30, duration: 0.15 }, 0.1)
          .to('#sketch-notes', { opacity: 0, duration: 0.2 }, 0.1)

        // 0.25 → 0.65: crossfade a frame-1, texto s1 aparece
          .to('#frame-1', { opacity: 1, duration: 0.3 }, 0.25)
          .fromTo(
            '#hero-text-s1',
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.25 },
            0.35
          )

        // 0.6 → 0.85: texto s1 desaparece, texto s2 aparece
          .to('#hero-text-s1', { opacity: 0, y: -20, duration: 0.2 }, 0.6)
          .fromTo(
            '#hero-text-s2',
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.25 },
            0.72
          )

        // overlay se aclara progresivamente
          .to(
            '#hero-overlay',
            {
              background:
                'linear-gradient(to bottom, transparent 0%, rgba(26,43,34,0.4) 70%, rgba(26,43,34,0.95) 100%)',
              duration: 1,
            },
            0
          )
      })
    }

    initGsap()

    return () => {
      if (ctx) ctx.revert()
    }
  }, [])

  return (
    <section
      id="hero-pin-container"
      style={{ height: '400vh' }}
      aria-label="Hero — De Vaca Muerta a Vaca Verde"
    >
      <div
        id="hero-sticky"
        style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}
      >
        {/* FRAME 0 — el antes: estepa + industria */}
        <div
          id="frame-0"
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            opacity: 1,
          }}
        >
          <Image
            src="/hero/frame-0-estepa.png"
            alt="Belgrano parado frente a la tierra árida de Patagonia, chimeneas de industria oil & gas al fondo"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
            sizes="100vw"
          />
        </div>

        {/* FRAME 1 — la visión: ciudad verde, golden hour */}
        <div
          id="frame-1"
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            opacity: 0,
          }}
        >
          <Image
            src="/hero/frame-1-vision.png"
            alt="Belgrano parado frente a una ciudad verde floreciente, viviendas sustentables, golden hour"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="100vw"
          />
        </div>

        {/* OVERLAY GRADIENTE */}
        <div
          id="hero-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 3,
            background:
              'linear-gradient(to bottom, transparent 0%, rgba(26,43,34,0.85) 85%, rgba(26,43,34,1) 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* SKETCH NOTES — anotaciones manuscritas top-right */}
        <div
          id="sketch-notes"
          style={{
            position: 'absolute',
            top: '8%',
            right: '6%',
            zIndex: 4,
            opacity: 0.2,
            pointerEvents: 'none',
            fontFamily: 'var(--font-garamond), "EB Garamond", serif',
            fontStyle: 'italic',
            color: '#F7F6EB',
            fontSize: 'clamp(0.85rem, 1.2vw, 1.1rem)',
            lineHeight: 1.8,
            textAlign: 'right',
          }}
        >
          Industria
          <br />
          de materiales
          <br />
          <span style={{ opacity: 0.5 }}>—</span>
          <br />
          Energía
          <br />
          y logística
          <br />
          <span style={{ opacity: 0.5 }}>—</span>
          <br />
          Viviendas
          <br />
          sustentables
        </div>

        {/* ESTADO 0 — visible al inicio, scroll 0-25% */}
        <div
          id="hero-text-s0"
          style={{
            position: 'absolute',
            bottom: '18%',
            left: '6%',
            zIndex: 5,
            maxWidth: 'min(700px, 90vw)',
            padding: '0 clamp(1rem, 4vw, 2rem)',
          }}
        >
          <p className="eyebrow" style={{ marginBottom: '1.25rem' }}>
            Patagonia · 1810
          </p>
          <h1
            className="hero-xl"
            style={{
              fontFamily: 'var(--font-garamond), "EB Garamond", serif',
              fontWeight: 400,
              color: '#F7F6EB',
              marginBottom: '1.25rem',
            }}
          >
            La tierra espera.
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-hanken), "Plus Jakarta Sans", sans-serif',
              fontWeight: 300,
              fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
              color: 'rgba(247,246,235,0.65)',
              lineHeight: 1.5,
            }}
          >
            Un continente de recursos. Sin industria que los transforme.
          </p>
        </div>

        {/* ESTADO 1 — visible scroll 25-65% */}
        <div
          id="hero-text-s1"
          style={{
            position: 'absolute',
            bottom: '14%',
            left: '6%',
            zIndex: 5,
            maxWidth: 'min(760px, 90vw)',
            padding: '0 clamp(1rem, 4vw, 2rem)',
            opacity: 0,
          }}
        >
          <p className="eyebrow" style={{ marginBottom: '1.25rem' }}>
            Plan Manuel Belgrano · 2026
          </p>
          <h2
            className="hero-xl"
            style={{
              fontFamily: 'var(--font-garamond), "EB Garamond", serif',
              fontWeight: 400,
              color: '#F7F6EB',
              marginBottom: '1.25rem',
            }}
          >
            De Vaca Muerta
            <br />
            a{' '}
            <em
              style={{
                color: '#71CE6A',
                fontStyle: 'italic',
              }}
            >
              Vaca Verde.
            </em>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-garamond), "EB Garamond", serif',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 'clamp(1.15rem, 2vw, 1.55rem)',
              color: '#C9A84C',
              marginBottom: '1rem',
              lineHeight: 1.3,
            }}
          >
            La próxima plataforma industrial argentina no se extrae. Se cultiva.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-hanken), "Plus Jakarta Sans", sans-serif',
              fontWeight: 300,
              fontSize: 'clamp(0.9rem, 1.4vw, 1.1rem)',
              color: 'rgba(247,246,235,0.55)',
              lineHeight: 1.6,
              marginBottom: '2rem',
              maxWidth: '560px',
            }}
          >
            Un masterplan para capturar carbono, construir viviendas, generar empleo
            y desarrollar una nueva industria federal basada en cáñamo industrial.
          </p>
          <a
            href="#s02"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.875rem 2rem',
              backgroundColor: '#71CE6A',
              color: '#1C1A14',
              fontFamily: 'var(--font-hanken), "Plus Jakarta Sans", sans-serif',
              fontSize: '0.72rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'background-color 0.25s ease',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#5db856'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#71CE6A'
            }}
          >
            Explorar el Plan
            <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
              <path
                d="M0 4H14M14 4L11 1M14 4L11 7"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </a>
        </div>

        {/* ESTADO 2 — visible scroll 65-100% */}
        <div
          id="hero-text-s2"
          style={{
            position: 'absolute',
            bottom: '16%',
            left: '6%',
            zIndex: 5,
            maxWidth: 'min(700px, 90vw)',
            padding: '0 clamp(1rem, 4vw, 2rem)',
            opacity: 0,
          }}
        >
          <p className="eyebrow" style={{ marginBottom: '1.25rem' }}>
            Argentina · 2035 · Visión ejecutada
          </p>
          <h2
            className="hero-xl"
            style={{
              fontFamily: 'var(--font-garamond), "EB Garamond", serif',
              fontWeight: 400,
              color: '#F7F6EB',
              marginBottom: '1.25rem',
            }}
          >
            Lo que
            <br />
            Belgrano
            <br />
            <em
              style={{
                color: '#C9A84C',
                fontStyle: 'italic',
              }}
            >
              imaginó.
            </em>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-garamond), "EB Garamond", serif',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 'clamp(1.15rem, 2vw, 1.55rem)',
              color: 'rgba(247,246,235,0.75)',
              marginBottom: '2rem',
              lineHeight: 1.3,
            }}
          >
            Esto ya está pasando.
          </p>
          <a
            href="#s08"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.875rem 2rem',
              backgroundColor: 'transparent',
              color: '#F7F6EB',
              fontFamily: 'var(--font-hanken), "Plus Jakarta Sans", sans-serif',
              fontSize: '0.72rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 500,
              textDecoration: 'none',
              border: '1px solid rgba(247,246,235,0.4)',
              transition: 'border-color 0.25s ease, color 0.25s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.borderColor = '#C9A84C'
              el.style.color = '#C9A84C'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.borderColor = 'rgba(247,246,235,0.4)'
              el.style.color = '#F7F6EB'
            }}
          >
            Ver los números
            <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
              <path
                d="M0 4H14M14 4L11 1M14 4L11 7"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </a>
        </div>

        {/* SCROLL CUE */}
        <div
          id="scroll-cue"
          style={{
            position: 'absolute',
            bottom: '3rem',
            right: '2.5rem',
            zIndex: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-hanken), "Plus Jakarta Sans", sans-serif',
              fontSize: '0.6rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'rgba(247,246,235,0.3)',
              writingMode: 'vertical-rl',
            }}
          >
            scroll
          </span>
          <div
            style={{
              width: '1px',
              height: '3rem',
              background:
                'linear-gradient(to bottom, rgba(201,168,76,0.6), transparent)',
              animation: 'scrollPulse 2s ease-in-out infinite',
            }}
          />
        </div>

        <style>{`
          @keyframes scrollPulse {
            0%, 100% { transform: scaleY(1); opacity: 0.6; }
            50% { transform: scaleY(0.6); opacity: 1; }
          }
        `}</style>
      </div>
    </section>
  )
}
