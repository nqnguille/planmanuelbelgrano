'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'left' | 'none'
}

export function Reveal({ children, delay = 0, className = '', direction = 'up' }: RevealProps) {
  const initial =
    direction === 'up' ? { opacity: 0, y: 32 }
    : direction === 'left' ? { opacity: 0, x: -24 }
    : { opacity: 0 }

  const animate = direction === 'up' ? { opacity: 1, y: 0 }
    : direction === 'left' ? { opacity: 1, x: 0 }
    : { opacity: 1 }

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
