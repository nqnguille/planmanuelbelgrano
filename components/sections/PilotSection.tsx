import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { CONTENT } from '@/lib/content'

export function PilotSection() {
  const c = CONTENT.pilot
  return (
    <section id="s06" className="bg-[#F7F6EB] px-8 lg:px-20 xl:px-28 py-28 lg:py-36">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionLabel label={c.label} />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div>
            <Reveal delay={0.1}>
              <h2
                className="text-[#1A1A1A] font-normal leading-[1.1] mb-8"
                style={{
                  fontFamily: 'var(--font-garamond)',
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                }}
              >
                {c.headline.split('\n').map((line, i) => (
                  <span key={i}>{line}{i < 1 && <br />}</span>
                ))}
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="space-y-3 mb-10">
                {c.advantages.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-[#C8A46A] flex-shrink-0" />
                    <span className="text-[#1A1A1A]/70 text-sm"
                      style={{ fontFamily: 'var(--font-hanken)', fontWeight: 300 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-[#1A1A1A]/60 text-sm leading-relaxed border-l-2 border-[#C8A46A]/40 pl-6"
                style={{ fontFamily: 'var(--font-hanken)', fontWeight: 300 }}>
                {c.body}
              </p>
            </Reveal>
          </div>

          {/* Right — Neuquén map */}
          <Reveal delay={0.2} className="flex flex-col items-center">
            <div className="relative">
              <svg viewBox="0 0 240 340" className="w-full max-w-xs" fill="none">
                <path
                  d="M80 20 L160 15 L190 40 L200 80 L195 130 L185 170 L180 210 L170 250 L155 290 L140 320 L120 330 L100 310 L85 270 L75 230 L65 185 L55 150 L50 110 L55 70 L65 40 Z"
                  stroke="#C8A46A"
                  strokeWidth="1.5"
                  fill="#C8A46A"
                  fillOpacity="0.06"
                />
                {/* Añelo pin */}
                <circle cx="130" cy="148" r="5" fill="#C8A46A" />
                <circle cx="130" cy="148" r="12" stroke="#C8A46A" strokeWidth="1" strokeDasharray="3 2" opacity="0.4" />
                <line x1="135" y1="143" x2="155" y2="128" stroke="#C8A46A" strokeWidth="0.8" />
                <text x="158" y="126" fill="#C8A46A" fontSize="9" fontFamily="sans-serif">Añelo</text>
              </svg>
              <div className="mt-4 text-center">
                <p className="text-[#C8A46A] text-xs tracking-[0.2em] uppercase mb-1"
                  style={{ fontFamily: 'var(--font-hanken)' }}>
                  {c.location}
                </p>
                <p className="text-[#1A1A1A]/50 text-xs"
                  style={{ fontFamily: 'var(--font-hanken)', fontWeight: 300 }}>
                  {c.locationSub}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
