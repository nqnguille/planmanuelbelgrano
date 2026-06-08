import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { CONTENT } from '@/lib/content'

export function OpportunitySection() {
  const c = CONTENT.opportunity
  return (
    <section id="s07" className="bg-[#111111] px-8 lg:px-20 xl:px-28 py-28 lg:py-36 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 mb-20">
          <div className="lg:w-1/2">
            <Reveal>
              <SectionLabel label={c.label} light />
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="text-white font-normal leading-[1.1]"
                style={{
                  fontFamily: 'var(--font-garamond)',
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                }}
              >
                {c.headline}
              </h2>
            </Reveal>
          </div>
          <div className="lg:w-1/2 flex items-end">
            <Reveal delay={0.2}>
              <p className="text-white/55 text-base leading-relaxed"
                style={{ fontFamily: 'var(--font-hanken)', fontWeight: 300 }}>
                {c.body}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Hemp plant glyph */}
        <div className="flex justify-center mb-16">
          <Reveal>
            <svg viewBox="0 0 80 120" className="w-16 opacity-30" fill="none">
              <line x1="40" y1="120" x2="40" y2="20" stroke="#71CE6A" strokeWidth="2"/>
              <ellipse cx="40" cy="55" rx="28" ry="12" stroke="#71CE6A" strokeWidth="1.5" transform="rotate(-20 40 55)"/>
              <ellipse cx="40" cy="70" rx="28" ry="12" stroke="#71CE6A" strokeWidth="1.5" transform="rotate(20 40 70)"/>
              <ellipse cx="40" cy="85" rx="20" ry="9" stroke="#71CE6A" strokeWidth="1.2" transform="rotate(-15 40 85)"/>
              <circle cx="40" cy="20" r="7" stroke="#71CE6A" strokeWidth="1.5"/>
            </svg>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/5">
          {c.features.map((f, i) => (
            <Reveal key={f.title} delay={0.1 * i}>
              <div className="bg-[#111111] hover:bg-[#181818] transition-colors duration-300 p-10">
                <h3 className="text-white text-xs tracking-[0.18em] uppercase mb-4"
                  style={{ fontFamily: 'var(--font-hanken)', fontWeight: 500 }}>
                  {f.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-hanken)', fontWeight: 300 }}>
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
