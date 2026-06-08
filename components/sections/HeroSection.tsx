'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { CONTENT } from '@/lib/content'

export function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section
      ref={ref}
      id="s01"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#111111]"
      aria-label="Hero — De Vaca Muerta a Vaca Verde"
    >
      {/* Video background — swap src for Belgrano video from Gemini when available */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ y: bgY }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${CONTENT.hero.videoId}?autoplay=1&mute=1&loop=1&controls=0&playlist=${CONTENT.hero.videoId}&vq=hd1080&modestbranding=1&iv_load_policy=3&rel=0&start=3`}
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
          className="absolute border-none"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '177.78vh',
            height: '100vh',
            minWidth: '100%',
          }}
          title="Background video — Patagonia"
        />
        {/* Fallback static image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://d8j0ntlcm91z4.cloudfront.net/user_3EpWXW9qhLTZowUY0tYkwH2OXOb/hf_20260608_054933_89194daa-d6f3-4ad1-bd60-3c2eff4066ac.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3,
          }}
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full px-8 lg:px-20 xl:px-28 pt-32 pb-24"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#C8A46A]/80 text-xs tracking-[0.25em] uppercase mb-8"
            style={{ fontFamily: 'var(--font-hanken)' }}
          >
            Plan Manuel Belgrano · Cáñamo Industrial
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-white font-normal leading-[1.05] mb-8"
            style={{
              fontFamily: 'var(--font-garamond)',
              fontSize: 'clamp(3.5rem, 7vw, 6rem)',
            }}
          >
            {CONTENT.hero.headline[0]}
            <br />
            <em>{CONTENT.hero.headline[1]}</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/70 text-lg leading-relaxed mb-4 max-w-lg"
            style={{ fontFamily: 'var(--font-hanken)', fontWeight: 300 }}
          >
            {CONTENT.hero.sub.split('\n').map((line, i) => (
              <span key={i}>{line}{i < 1 && <br />}</span>
            ))}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.1 }}
            className="text-white/45 text-sm leading-relaxed mb-12 max-w-md"
            style={{ fontFamily: 'var(--font-hanken)', fontWeight: 300 }}
          >
            {CONTENT.hero.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <a
              href="#s02"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#C8A46A] text-[#111111] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#d4b07a] transition-colors duration-300"
              style={{ fontFamily: 'var(--font-hanken)' }}
            >
              {CONTENT.hero.cta}
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                <path d="M0 4H14M14 4L11 1M14 4L11 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 right-10 flex flex-col items-center gap-3"
      >
        <span className="text-white/30 text-[10px] tracking-[0.25em] uppercase rotate-90 origin-center"
          style={{ fontFamily: 'var(--font-hanken)' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-12 bg-gradient-to-b from-[#C8A46A]/60 to-transparent"
        />
      </motion.div>
    </section>
  )
}
