'use client'
import { motion } from 'framer-motion'
import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { CONTENT } from '@/lib/content'

export function MasterplanSection() {
  const c = CONTENT.masterplan
  return (
    <section id="s05" className="manuscript-bg px-8 lg:px-20 xl:px-28 py-28 lg:py-36 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionLabel label={c.label} />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <Reveal delay={0.1}>
            <h2
              className="text-[#2D1E0F] font-normal leading-[1.1]"
              style={{
                fontFamily: 'var(--font-garamond)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              }}
            >
              {c.headline.split('\n').map((line, i) => (
                <span key={i}>{line}{i < 1 && <br />}</span>
              ))}
            </h2>
          </Reveal>
          <Reveal delay={0.2} className="flex items-end">
            <div>
              <p className="text-[#2D1E0F]/70 text-xl italic mb-4"
                style={{ fontFamily: 'var(--font-garamond)' }}>
                {c.sub}
              </p>
              <p className="text-[#8A6C3A] text-sm tracking-[0.1em] uppercase"
                style={{ fontFamily: 'var(--font-hanken)' }}>
                {c.tagline}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Flow nodes */}
        <div className="relative">
          {/* Connecting line */}
          <motion.div
            className="absolute top-[2.2rem] left-[2.5%] right-[2.5%] h-px bg-[#8A6C3A]/30"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          />

          <div className="grid grid-cols-4 lg:grid-cols-8 gap-4">
            {c.nodes.map((node, i) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.4 + i * 0.1,
                }}
                className="flex flex-col items-center text-center group"
              >
                <motion.div
                  className="w-[18px] h-[18px] rounded-full bg-[#8A6C3A] mb-4 group-hover:bg-[#C8A46A] group-hover:shadow-[0_0_12px_rgba(200,164,106,0.4)] transition-all duration-300"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                />
                <p className="text-[#2D1E0F] text-[11px] tracking-[0.12em] uppercase font-medium mb-1"
                  style={{ fontFamily: 'var(--font-hanken)' }}>
                  {node.label}
                </p>
                <p className="text-[#2D1E0F]/50 text-[10px] leading-tight hidden lg:block"
                  style={{ fontFamily: 'var(--font-hanken)', fontWeight: 300 }}>
                  {node.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Connectors label */}
        <Reveal delay={0.8} className="mt-16 text-center">
          <div className="inline-block border border-[#8A6C3A]/30 px-8 py-4">
            <p className="text-[#2D1E0F]/70 text-sm italic"
              style={{ fontFamily: 'var(--font-garamond)' }}>
              &ldquo;{c.tagline}&rdquo;
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
