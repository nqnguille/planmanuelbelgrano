'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { CONTENT } from '@/lib/content'

export function Header() {
  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 120], [0, 1])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{}}
    >
      <motion.div
        className="absolute inset-0 bg-[#111111]/90 backdrop-blur-sm"
        style={{ opacity: bgOpacity }}
      />
      <div className="relative flex items-center justify-between px-8 lg:px-16 h-16">
        <div className="flex items-center gap-4">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="opacity-80">
            <path d="M10 2C10 2 7 6 7 11C7 14 8.5 16 10 17C11.5 16 13 14 13 11C13 6 10 2 10 2Z" fill="#C8A46A" opacity="0.9"/>
            <path d="M10 17V19" stroke="#C8A46A" strokeWidth="1.2" strokeLinecap="round"/>
            <path d="M6.5 9L4 7" stroke="#C8A46A" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
            <path d="M13.5 9L16 7" stroke="#C8A46A" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
          </svg>
          <span className="text-white/90 text-xs tracking-[0.25em] uppercase font-medium"
            style={{ fontFamily: 'var(--font-hanken)' }}>
            {CONTENT.nav.logo}
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {CONTENT.nav.links.map((link) => (
            <a key={link} href="#"
              className="text-white/60 hover:text-white text-xs tracking-[0.15em] uppercase transition-colors duration-200"
              style={{ fontFamily: 'var(--font-hanken)' }}>
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <span className="text-white/40 text-xs tracking-[0.15em]"
            style={{ fontFamily: 'var(--font-hanken)' }}>
            ES · EN
          </span>
          <a href="mailto:contacto@planmanuelbelgrano.ar"
            className="hidden md:block text-xs tracking-[0.15em] uppercase px-4 py-2 border border-[#C8A46A]/60 text-[#C8A46A] hover:bg-[#C8A46A]/10 transition-colors duration-200"
            style={{ fontFamily: 'var(--font-hanken)' }}>
            {CONTENT.nav.cta}
          </a>
        </div>
      </div>
    </motion.header>
  )
}
