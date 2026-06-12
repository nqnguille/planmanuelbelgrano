import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { CONTENT } from '@/lib/content'

export function PilotSection() {
  const c = CONTENT.pilot
  return (
    <section
      id="s06"
      className="px-8 lg:px-20 xl:px-28 py-28 lg:py-40"
      style={{ backgroundColor: 'var(--color-dusk)' }}
    >
      <div className="max-w-6xl mx-auto">

        <Reveal>
          <SectionLabel label={c.label} light />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — texto */}
          <div>
            <Reveal delay={0.1}>
              <h2
                className="font-normal leading-[1.1] mb-10"
                style={{
                  fontFamily: 'var(--font-garamond)',
                  fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
                  color: 'var(--color-cream)',
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

            <Reveal delay={0.2}>
              <ul className="space-y-4 mb-12">
                {c.advantages.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                      style={{ backgroundColor: 'var(--color-gold)' }}
                    />
                    <span
                      className="text-sm leading-relaxed"
                      style={{
                        fontFamily: 'var(--font-hanken)',
                        fontWeight: 300,
                        color: 'rgba(247,246,235,0.75)',
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.3}>
              <p
                className="text-sm leading-relaxed pl-6"
                style={{
                  fontFamily: 'var(--font-hanken)',
                  fontWeight: 300,
                  color: 'rgba(247,246,235,0.55)',
                  borderLeft: '2px solid rgba(201,168,76,0.35)',
                }}
              >
                {c.body}
              </p>
            </Reveal>
          </div>

          {/* Right — mapa esquemático */}
          <Reveal delay={0.25} className="flex flex-col items-center justify-center">
            <div className="relative w-full max-w-xs mx-auto">
              {/* SVG del mapa de Neuquén */}
              <svg viewBox="0 0 240 340" className="w-full" fill="none">
                {/* Contorno Neuquén */}
                <path
                  d="M80 20 L160 15 L190 40 L200 80 L195 130 L185 170 L180 210 L170 250 L155 290 L140 320 L120 330 L100 310 L85 270 L75 230 L65 185 L55 150 L50 110 L55 70 L65 40 Z"
                  stroke="rgba(201,168,76,0.6)"
                  strokeWidth="1.5"
                  fill="rgba(201,168,76,0.04)"
                />
                {/* Río Neuquén esquemático */}
                <path
                  d="M50 110 Q90 130 130 148 Q165 165 190 130"
                  stroke="rgba(113,206,106,0.25)"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="4 2"
                />
                {/* Pin Añelo */}
                <circle cx="130" cy="148" r="5" fill="#C9A84C" />
                <circle cx="130" cy="148" r="14" stroke="#C9A84C" strokeWidth="0.8" strokeDasharray="3 2" style={{ opacity: 0.4 }} />
                <circle cx="130" cy="148" r="22" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="2 3" style={{ opacity: 0.2 }} />
                {/* Línea label */}
                <line x1="135" y1="143" x2="160" y2="122" stroke="#C9A84C" strokeWidth="0.7" />
                <text x="163" y="120" fill="#C9A84C" fontSize="10" fontFamily="sans-serif" fontWeight="400">Añelo</text>
                <text x="163" y="133" fill="rgba(201,168,76,0.5)" fontSize="8" fontFamily="sans-serif">Vaca Muerta</text>
              </svg>

              {/* Label ubicación */}
              <div className="mt-6 text-center">
                <p
                  className="text-xs tracking-[0.22em] uppercase mb-1"
                  style={{
                    fontFamily: 'var(--font-hanken)',
                    color: 'var(--color-gold)',
                  }}
                >
                  {c.location}
                </p>
                <p
                  className="text-xs"
                  style={{
                    fontFamily: 'var(--font-hanken)',
                    fontWeight: 300,
                    color: 'rgba(247,246,235,0.4)',
                  }}
                >
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
