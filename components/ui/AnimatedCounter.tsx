'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedCounterProps {
  target: number
  suffix?: string
  className?: string
}

export function AnimatedCounter({ target, suffix = '', className = '' }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  useEffect(() => {
    if (!isInView) return
    const duration = 2200
    const steps = 80
    const stepTime = duration / steps
    let current = 0
    const increment = target / steps
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepTime)
    return () => clearInterval(timer)
  }, [isInView, target])

  const formatted = count >= 1000000
    ? (count / 1000000).toFixed(count % 1000000 === 0 ? 0 : 1) + 'M'
    : count.toLocaleString('es-AR')

  return (
    <span ref={ref} className={className}>
      {formatted}{suffix}
    </span>
  )
}
