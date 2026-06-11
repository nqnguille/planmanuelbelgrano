'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useState } from 'react'

interface CounterProps {
  from: number
  to: number
  delay: number
  prefix?: string
  suffix?: string
  color: string
  label: string
  sublabel?: string
}

function AnimatedMetric({ from, to, delay, prefix = '', suffix = '', color, label, sublabel }: CounterProps) {
  const count = useMotionValue(from)
  const [display, setDisplay] = useState(prefix + formatNum(from) + suffix)

  function formatNum(n: number): string {
    if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M'
    if (n >= 1000) return (n / 1000).toFixed(n >= 10000 ? 0 : 1) + 'K'
    return n.toString()
  }

  useEffect(() => {
    const controls = animate(count, to, {
      duration: 1.4,
      delay,
      ease: [0.22, 1, 0.36, 1],
    })
    const unsub = count.on('change', (latest) => {
      setDisplay(prefix + formatNum(Math.round(latest)) + suffix)
    })
    return () => {
      controls.stop()
      unsub()
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-garamond), serif',
          fontStyle: 'italic',
          fontSize: 'clamp(3.5rem, 7vw, 6.5rem)',
          lineHeight: 1,
          color,
          fontWeight: 400,
        }}
      >
        {display}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-hanken), sans-serif',
          fontSize: 'clamp(0.62rem, 0.85vw, 0.75rem)',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'rgba(247,246,235,0.4)',
          marginTop: '0.5rem',
          maxWidth: '28ch',
          lineHeight: 1.5,
        }}
      >
        {label}
      </span>
      {sublabel && (
        <span
          style={{
            fontFamily: 'var(--font-hanken), sans-serif',
            fontSize: '0.6rem',
            color: 'rgba(247,246,235,0.25)',
            marginTop: '0.2rem',
          }}
        >
          {sublabel}
        </span>
      )}
    </motion.div>
  )
}

export function S05_Numbers() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        background: '#1C1A14',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(2rem, 5vw, 4rem) clamp(2rem, 6vw, 8rem)',
      }}
    >
      {/* Subtle grid pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      {/* Eyebrow */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0 }}
        style={{
          fontFamily: 'var(--font-hanken), sans-serif',
          fontSize: '0.6rem',
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: 'var(--color-gold)',
          marginBottom: 'clamp(2rem, 4vw, 3.5rem)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        El retorno
      </motion.p>

      {/* Metrics */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'clamp(1.5rem, 3.5vw, 3rem)',
          width: '100%',
        }}
      >
        <AnimatedMetric
          from={0}
          to={2200000}
          delay={0.1}
          prefix="USD "
          color="var(--color-cream)"
          label="por año · Fase 1 · 4.000 ha"
          sublabel="Proyección Flora Cáñamo Neuquino"
        />

        {/* Divider */}
        <div style={{ width: '1px', height: '1.5rem', background: 'rgba(201,168,76,0.15)' }} />

        <AnimatedMetric
          from={0}
          to={17000000}
          delay={0.35}
          prefix="hasta USD "
          color="var(--color-green)"
          label="premio por cargo de GNL certificado"
          sublabel="Premio CS3D · USD 2–5/MMBtu"
        />

        {/* Divider */}
        <div style={{ width: '1px', height: '1.5rem', background: 'rgba(201,168,76,0.15)' }} />

        <AnimatedMetric
          from={0}
          to={6}
          delay={0.6}
          suffix=" semanas"
          color="var(--color-gold)"
          label="de operación plena para recuperar inversión"
          sublabel="Inversión total: USD 265K–300K"
        />
      </div>

      {/* Scale note */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        style={{
          position: 'relative',
          zIndex: 1,
          marginTop: 'clamp(2rem, 4vw, 3.5rem)',
          borderLeft: '2px solid var(--color-gold)',
          paddingLeft: '1rem',
          maxWidth: '480px',
          textAlign: 'left',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-hanken), sans-serif',
            fontSize: 'clamp(0.72rem, 1vw, 0.82rem)',
            color: 'rgba(247,246,235,0.4)',
            lineHeight: 1.6,
          }}
        >
          <strong style={{ color: 'rgba(247,246,235,0.6)' }}>USD 27,5M/año a escala Neuquén</strong>
          &nbsp;· 50.000 ha · Proyección Flora Cáñamo Neuquino
        </p>
      </motion.div>
    </div>
  )
}
