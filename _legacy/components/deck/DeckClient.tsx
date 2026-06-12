'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { S01_Cover } from './slides/S01_Cover'
import { S02_Problem } from './slides/S02_Problem'
import { S03_Market } from './slides/S03_Market'
import { S04_Tech } from './slides/S04_Tech'
import { S05_Numbers } from './slides/S05_Numbers'
import { S06_Pilot } from './slides/S06_Pilot'
import { S07_Vision } from './slides/S07_Vision'
import { S08_CTA } from './slides/S08_CTA'

const SLIDES = [
  S01_Cover,
  S02_Problem,
  S03_Market,
  S04_Tech,
  S05_Numbers,
  S06_Pilot,
  S07_Vision,
  S08_CTA,
]

const TOTAL = SLIDES.length

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
}

const transition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
}

export function DeckClient() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(1)
  const [touchStart, setTouchStart] = useState<number | null>(null)

  const goTo = useCallback((index: number, dir: number) => {
    if (index < 0 || index >= TOTAL) return
    setDirection(dir)
    setCurrentSlide(index)
  }, [])

  const next = useCallback(() => {
    goTo(currentSlide + 1, 1)
  }, [currentSlide, goTo])

  const prev = useCallback(() => {
    goTo(currentSlide - 1, -1)
  }, [currentSlide, goTo])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next()
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return
    const delta = touchStart - e.changedTouches[0].clientX
    if (Math.abs(delta) > 50) {
      if (delta > 0) next()
      else prev()
    }
    setTouchStart(null)
  }

  const SlideComponent = SLIDES[currentSlide]
  const progressWidth = TOTAL > 1 ? (currentSlide / (TOTAL - 1)) * 100 : 0

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        background: '#1C1A14',
        zIndex: 20,
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Progress bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'rgba(201,168,76,0.15)',
          zIndex: 50,
        }}
      >
        <motion.div
          style={{
            height: '100%',
            background: 'var(--color-gold)',
            originX: 0,
          }}
          animate={{ width: `${progressWidth}%` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </div>

      {/* Slide counter */}
      <div
        style={{
          position: 'absolute',
          bottom: '1.25rem',
          right: '1.5rem',
          zIndex: 50,
          fontFamily: 'var(--font-hanken), sans-serif',
          fontSize: '0.6rem',
          letterSpacing: '0.12em',
          color: 'rgba(247,246,235,0.4)',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        {currentSlide + 1} / {TOTAL}
      </div>

      {/* Arrow left */}
      <motion.button
        onClick={prev}
        animate={{ opacity: currentSlide === 0 ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        style={{
          position: 'absolute',
          left: '1.25rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 50,
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          background: 'rgba(247,246,235,0.1)',
          border: '1px solid rgba(247,246,235,0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: currentSlide === 0 ? 'default' : 'pointer',
          pointerEvents: currentSlide === 0 ? 'none' : 'auto',
          backdropFilter: 'blur(6px)',
        }}
        aria-label="Anterior"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 3L5 8L10 13" stroke="#F7F6EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.button>

      {/* Arrow right */}
      <motion.button
        onClick={next}
        animate={{ opacity: currentSlide === TOTAL - 1 ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        style={{
          position: 'absolute',
          right: '1.25rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 50,
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          background: 'rgba(247,246,235,0.1)',
          border: '1px solid rgba(247,246,235,0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: currentSlide === TOTAL - 1 ? 'default' : 'pointer',
          pointerEvents: currentSlide === TOTAL - 1 ? 'none' : 'auto',
          backdropFilter: 'blur(6px)',
        }}
        aria-label="Siguiente"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 3L11 8L6 13" stroke="#F7F6EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.button>

      {/* Slides */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={transition}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <SlideComponent />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
