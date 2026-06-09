'use client'
import { motion } from 'framer-motion'
import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { CONTENT } from '@/lib/content'

export function MasterplanSection() {
  const c = CONTENT.masterplan
  return (
    <section
      id="s05"
      className="px-8 lg:px-20 xl:px-28 py-28 lg:py-40 overflow-hidden"
      style={{ backgroundColor: 'var(--color-parchment)' }}
    >
      <div className="max-w-6xl mx-auto">

        <Reveal>
          <SectionLabel label={c.label} />
        </Reveal>

        {/* Headline + tagline */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <Reveal delay={0.1}>
            <h2
              className="font-normal leading-[1.1]"
              style={{
                fontFamily: 'var(--font-garamond)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                color: 'var(--color-ink)',
              }}
            >
              {c.headline.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < c.headline.split('\n').length - 1 && <br />}
                </span>
              ))}
            </h2>
          </Reveal>

          <Reveal delay={0.2} className="flex items-end">
            <div>
              <p
                className="italic text-xl mb-5 leading-relaxed"
                style={{
                  fontFamily: 'var(--font-garamond)',
                  color: 'rgba(28,26,20,0.75)',
                }}
              >
                {c.sub}
              </p>
              <p
                className="text-sm tracking-[0.12em] uppercase"
                style={{
                  fontFamily: 'var(--font-hanken)',
                  color: 'var(--color-sepia, #8A6C3A)',
                }}
              >
                {c.tagline}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Pipeline — nodos conectados */}
        <div className="relative">
          {/* Línea conectora animada */}
          <motion.div
            className="absolute h-px"
            style={{
              top: '1.25rem',
              left: '2%',
              right: '2%',
              backgroundColor: 'rgba(138,108,58,0.3)',
              transformOrigin: 'left',
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          />

          <div className="grid grid-cols-4 lg:grid-cols-8 gap-3 lg:gap-4">
            {c.nodes.map((node, i) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.4 + i * 0.1,
                }}
                className="flex flex-col items-center text-center group"
              >
                {/* Nodo */}
                <motion.div
                  className="w-[14px] h-[14px] rounded-full mb-4 relative z-10 transition-all duration-300"
                  style={{ backgroundColor: '#8A6C3A' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLDivElement).style.backgroundColor = '#C9A84C'
                    ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 14px rgba(201,168,76,0.5)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLDivElement).style.backgroundColor = '#8A6C3A'
                    ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
                  }}
                />

                {/* Label — mínimo 13px, opacity 0.85 */}
                <p
                  className="font-medium tracking-[0.1em] uppercase mb-1"
                  style={{
                    fontFamily: 'var(--font-hanken)',
                    fontSize: '13px',
                    color: 'rgba(28,26,20,0.85)',
                    lineHeight: 1.3,
                  }}
                >
                  {node.label}
                </p>

                {/* Desc — visible desde md */}
                <p
                  className="leading-tight hidden lg:block"
                  style={{
                    fontFamily: 'var(--font-hanken)',
                    fontSize: '11px',
                    fontWeight: 300,
                    color: 'rgba(28,26,20,0.55)',
                    lineHeight: 1.4,
                  }}
                >
                  {node.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tagline footer */}
        <Reveal delay={0.9} className="mt-20 text-center">
          <div
            className="inline-block px-10 py-5"
            style={{ border: '1px solid rgba(138,108,58,0.28)' }}
          >
            <p
              className="italic"
              style={{
                fontFamily: 'var(--font-garamond)',
                fontSize: '1.05rem',
                color: 'rgba(28,26,20,0.7)',
              }}
            >
              &ldquo;{c.tagline}&rdquo;
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
