'use client'
import { motion } from 'framer-motion'
import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { CONTENT } from '@/lib/content'

export function ThesisTimelineSection() {
  const c = CONTENT.thesis
  return (
    <section id="s03" className="parchment-bg px-8 lg:px-20 xl:px-28 py-28 lg:py-36">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionLabel label={c.label} />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <Reveal delay={0.1}>
            <p className="text-[#8A6C3A] text-lg leading-relaxed italic"
              style={{ fontFamily: 'var(--font-garamond)' }}>
              {c.teaser.split('\n').map((line, i) => (
                <span key={i}>{line}{i < 1 && <br />}</span>
              ))}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <h2
              className="text-[#1A1A1A] font-normal leading-[1.2]"
              style={{
                fontFamily: 'var(--font-garamond)',
                fontSize: 'clamp(1.8rem, 2.8vw, 2.5rem)',
              }}
            >
              {c.headline}
              <br />
              <span className="text-[#8A9080]">{c.body}</span>
            </h2>
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <Reveal className="mb-0">
            <motion.div
              className="absolute top-[1.4rem] left-0 right-0 h-px bg-[#C8A46A]/30"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            />
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {c.timeline.map((item, i) => (
              <Reveal key={item.year} delay={0.15 * i}>
                <div className="relative pt-2">
                  {/* Node */}
                  <div className={`w-3 h-3 rounded-full mb-4 ${
                    item.accent
                      ? 'bg-[#71CE6A] shadow-[0_0_16px_rgba(113,206,106,0.5)]'
                      : 'bg-[#C8A46A]'
                  }`} />
                  <p className={`text-xs mb-2 font-medium tracking-[0.1em] ${
                    item.accent ? 'text-[#71CE6A]' : 'text-[#C8A46A]'
                  }`} style={{ fontFamily: 'var(--font-hanken)' }}>
                    {item.year}
                  </p>
                  <h3
                    className="text-[#1A1A1A] mb-2"
                    style={{
                      fontFamily: 'var(--font-garamond)',
                      fontSize: item.accent ? '1.35rem' : '1.2rem',
                      fontWeight: item.accent ? 600 : 400,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#1A1A1A]/60 text-sm leading-relaxed"
                    style={{ fontFamily: 'var(--font-hanken)', fontWeight: 300 }}>
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
