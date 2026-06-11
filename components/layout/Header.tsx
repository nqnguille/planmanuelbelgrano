'use client'
import { useEffect, useState } from 'react'
import { CONTENT } from '@/lib/content'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => {
      const hero = document.getElementById('hero-pin-container')
      if (hero) {
        setScrolled(hero.getBoundingClientRect().bottom <= 0)
      } else {
        setScrolled(window.scrollY > 80)
      }
    }
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navHrefs = ['#giro', '#s04', '#s06', '#s08']

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled || menuOpen ? 'rgba(26,43,34,0.96)' : 'transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
          borderBottom: scrolled || menuOpen ? '1px solid rgba(201,168,76,0.12)' : 'none',
        }}
      >
        <div className="relative flex items-center justify-between px-6 lg:px-16 h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ opacity: 0.85 }}>
              <path d="M10 2C10 2 7 6 7 11C7 14 8.5 16 10 17C11.5 16 13 14 13 11C13 6 10 2 10 2Z" fill="#C9A84C" opacity="0.9"/>
              <path d="M10 17V19" stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round"/>
              <path d="M6.5 9L4 7" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
              <path d="M13.5 9L16 7" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
            </svg>
            <span
              className="text-white/90 text-xs tracking-[0.22em] uppercase font-medium"
              style={{ fontFamily: 'var(--font-hanken)' }}
            >
              {CONTENT.nav.logo}
            </span>
          </div>

          {/* Nav — desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {CONTENT.nav.links.map((link, i) => (
              <a
                key={link}
                href={navHrefs[i] || '#'}
                className="text-white/55 hover:text-white/90 text-xs tracking-[0.15em] uppercase transition-colors duration-200"
                style={{ fontFamily: 'var(--font-hanken)' }}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* CTA — desktop + hamburger mobile */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${CONTENT.cta.contactEmail}`}
              className="hidden md:block text-xs tracking-[0.15em] uppercase px-4 py-2 border border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C]/10 transition-colors duration-200"
              style={{ fontFamily: 'var(--font-hanken)' }}
            >
              {CONTENT.nav.cta}
            </a>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
            >
              <span
                className="block w-5 h-px bg-white/80 transition-all duration-300 origin-center"
                style={{ transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none' }}
              />
              <span
                className="block w-5 h-px bg-white/80 transition-all duration-300"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block w-5 h-px bg-white/80 transition-all duration-300 origin-center"
                style={{ transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none' }}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{ maxHeight: menuOpen ? '320px' : '0' }}
        >
          <nav
            className="flex flex-col px-6 pb-6 pt-2 gap-1"
            style={{ borderTop: '1px solid rgba(201,168,76,0.1)' }}
          >
            {CONTENT.nav.links.map((link, i) => (
              <a
                key={link}
                href={navHrefs[i] || '#'}
                onClick={() => setMenuOpen(false)}
                className="text-white/70 text-sm tracking-[0.15em] uppercase py-3 border-b border-white/5 last:border-0 transition-colors duration-200 hover:text-white/95"
                style={{ fontFamily: 'var(--font-hanken)' }}
              >
                {link}
              </a>
            ))}
            <a
              href={`mailto:${CONTENT.cta.contactEmail}`}
              onClick={() => setMenuOpen(false)}
              className="mt-4 text-center text-xs tracking-[0.18em] uppercase px-4 py-3 border border-[#C9A84C]/50 text-[#C9A84C]"
              style={{ fontFamily: 'var(--font-hanken)' }}
            >
              {CONTENT.nav.cta}
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}
