'use client'
import { motion } from 'framer-motion'
import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { CONTENT } from '@/lib/content'

export function ThesisTimelineSection() {
  const c = CONTENT.thesis
  return (
    <section
      id="s03"
      className="px-8 lg:px-20 xl:px-28 py-28 lg:py-40 overflow-hidden"
      style={{ backgroundColor: 'var(--color-warm)' }}
    >
      <div className="max-w-6xl mx-auto">

        <Reveal>
          <SectionLabel label={c.label} light />
        </Reveal>

        {/* Teaser + headline */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <Reveal delay={0.1}>
            <p
              className="italic leading-relaxed"
              style={{
                fontFamily: 'var(--font-garamond)',
                fontSize: 'clamp(1.3rem, 2.2vw, 1.75rem)',
                color: 'var(--color-gold)',
                lineHeight: 1.5,
              }}
            >
              {c.teaser.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < c.teaser.split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <h2
              className="font-normal leading-[1.2]"
              style={{
                fontFamily: 'var(--font-garamond)',
                fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)',
                color: 'var(--color-cream)',
              }}
            >
              {c.headline}
              <br />
              <span style={{ color: 'rgba(247,246,235,0.55)', fontWeight: 300 }}>{c.body}</span>
            </h2>
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea horizontal animada */}
          <motion.div
            className="absolute top-[1.3rem] left-0 right-0 h-px"
            style={{ backgroundColor: 'rgba(201,168,76,0.25)', transformOrigin: 'left' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {c.timeline.map((item, i) => (
              <Reveal key={item.year} delay={0.15 + i * 0.12}>
                <div className="relative pt-2">
                  {/* Nodo */}
                  <div
                    className="w-[10px] h-[10px] rounded-full mb-5 relative z-10"
                    style={{
                      backgroundColor: item.accent ? 'var(--color-green)' : 'var(--color-gold)',
                      boxShadow: item.accent ? '0 0 18px rgba(113,206,106,0.55)' : 'none',
                    }}
                  />

                  {/* Año */}
                  <p
                    className="text-xs font-medium tracking-[0.12em] mb-2"
                    style={{
                      fontFamily: 'var(--font-hanken)',
                      color: item.accent ? 'var(--color-green)' : 'var(--color-gold)',
                    }}
                  >
                    {item.year}
                  </p>

                  {/* Título */}
                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: 'var(--font-garamond)',
                      fontSize: item.accent ? '1.4rem' : '1.2rem',
                      fontWeight: item.accent ? 600 : 400,
                      color: item.accent ? 'var(--color-cream)' : 'rgba(247,246,235,0.85)',
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Cuerpo */}
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      fontFamily: 'var(--font-hanken)',
                      fontWeight: 300,
                      color: item.accent ? 'rgba(247,246,235,0.75)' : 'rgba(247,246,235,0.5)',
                    }}
                  >
                    {item.body}
                  </p>

                  {/* Marca "próxima" en el item accent */}
                  {item.accent && (
                    <div
                      className="mt-4 inline-block px-3 py-1 text-[10px] tracking-[0.18em] uppercase"
                      style={{
                        fontFamily: 'var(--font-hanken)',
                        fontWeight: 500,
                        color: 'var(--color-green)',
                        border: '1px solid rgba(113,206,106,0.35)',
                      }}
                    >
                      La próxima
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
