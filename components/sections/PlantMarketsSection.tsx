import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { CONTENT } from '@/lib/content'

export function PlantMarketsSection() {
  const c = CONTENT.plant
  return (
    <section id="s04" className="relative bg-[#F7F6EB] px-8 lg:px-20 xl:px-28 py-28 lg:py-36 overflow-hidden">
      {/* Hemp plant watermark */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-end pointer-events-none overflow-hidden">
        <svg viewBox="0 0 300 600" className="h-full opacity-[0.04]" fill="none">
          <line x1="150" y1="600" x2="150" y2="50" stroke="#2D4239" strokeWidth="3"/>
          <ellipse cx="150" cy="200" rx="80" ry="35" stroke="#2D4239" strokeWidth="2" transform="rotate(-25 150 200)"/>
          <ellipse cx="150" cy="260" rx="80" ry="35" stroke="#2D4239" strokeWidth="2" transform="rotate(25 150 260)"/>
          <ellipse cx="150" cy="320" rx="70" ry="30" stroke="#2D4239" strokeWidth="2" transform="rotate(-20 150 320)"/>
          <ellipse cx="150" cy="380" rx="70" ry="30" stroke="#2D4239" strokeWidth="2" transform="rotate(20 150 380)"/>
          <ellipse cx="150" cy="430" rx="55" ry="25" stroke="#2D4239" strokeWidth="2" transform="rotate(-15 150 430)"/>
          <ellipse cx="150" cy="470" rx="40" ry="20" stroke="#2D4239" strokeWidth="1.5" transform="rotate(15 150 470)"/>
          <circle cx="150" cy="50" r="18" stroke="#2D4239" strokeWidth="2"/>
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <SectionLabel label={c.label} />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <Reveal delay={0.1}>
            <h2
              className="text-[#1A1A1A] font-normal leading-[1.1]"
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
            <p className="text-[#1A1A1A]/60 text-base leading-relaxed"
              style={{ fontFamily: 'var(--font-hanken)', fontWeight: 300 }}>
              {c.body}
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {c.markets.map((m, i) => (
            <Reveal key={m.category} delay={0.1 * i}>
              <div className="bg-white border border-black/8 p-8 hover:border-[#C8A46A]/40 hover:shadow-lg transition-all duration-300 h-full">
                <p className="text-[#C8A46A] text-xs tracking-[0.2em] uppercase mb-4"
                  style={{ fontFamily: 'var(--font-hanken)' }}>
                  {m.category}
                </p>
                <p className="text-[#1A1A1A] font-light mb-1"
                  style={{
                    fontFamily: 'var(--font-garamond)',
                    fontSize: 'clamp(1.8rem, 2.5vw, 2.2rem)',
                  }}>
                  {m.metric}
                </p>
                <p className="text-[#8A9080] text-xs mb-6 tracking-wide"
                  style={{ fontFamily: 'var(--font-hanken)' }}>
                  {m.metricLabel}
                </p>
                <h3 className="text-[#1A1A1A] text-sm font-medium mb-3"
                  style={{ fontFamily: 'var(--font-hanken)' }}>
                  {m.title}
                </h3>
                <p className="text-[#1A1A1A]/55 text-xs leading-relaxed"
                  style={{ fontFamily: 'var(--font-hanken)', fontWeight: 300 }}>
                  {m.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
