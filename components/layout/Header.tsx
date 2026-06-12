'use client'
import { useEffect, useState } from 'react'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(26,43,34,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.12)' : 'none',
      }}
    >
      <div className="flex items-center justify-between px-6 lg:px-16 h-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ opacity: 0.85 }} aria-hidden>
            <path d="M10 2C10 2 7 6 7 11C7 14 8.5 16 10 17C11.5 16 13 14 13 11C13 6 10 2 10 2Z" fill="#C9A84C" opacity="0.9"/>
            <path d="M10 17V19" stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round"/>
            <path d="M6.5 9L4 7" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
            <path d="M13.5 9L16 7" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
          </svg>
          <span
            className="text-white/90 text-xs tracking-[0.22em] uppercase font-medium"
            style={{ fontFamily: 'var(--font-hanken)' }}
          >
            Plan Manuel Belgrano
          </span>
        </div>

        {/* CTA */}
        <a
          href="/masterplan/"
          className="text-xs tracking-[0.15em] uppercase px-4 py-2 border border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C]/10 transition-colors duration-200"
          style={{ fontFamily: 'var(--font-hanken)' }}
        >
          Ver masterplan
        </a>
      </div>
    </header>
  )
}
