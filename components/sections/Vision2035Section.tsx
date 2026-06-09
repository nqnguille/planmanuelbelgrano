import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { CONTENT } from '@/lib/content'

export function Vision2035Section() {
  const c = CONTENT.vision
  return (
    <section
      id="s08"
      className="relative px-8 lg:px-20 xl:px-28 py-28 lg:py-40 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, var(--color-forest) 0%, #0E1A12 100%)',
      }}
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: `url(${c.bgImage})`,
          opacity: 0.18,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(45,66,57,0.7) 0%, transparent 50%, rgba(14,26,18,0.8) 100%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto">

        <Reveal>
          <SectionLabel label={c.label} light />
        </Reveal>

        {/* Headline */}
        <Reveal delay={0.1}>
          <h2
            className="font-normal leading-[1.08] mb-6"
            style={{
              fontFamily: 'var(--font-garamond)',
              fontSize: 'clamp(2.5rem, 5.5vw, 5rem)',
              color: 'var(--color-cream)',
            }}
          >
            {c.headline.split('\n').map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </h2>
        </Reveal>

        {/* Subtítulo — opacity 0.75 */}
        <Reveal delay={0.2}>
          <p
            className="mb-20 max-w-lg"
            style={{
              fontFamily: 'var(--font-hanken)',
              fontWeight: 300,
              fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
              color: 'rgba(247,246,235,0.75)',
              lineHeight: 1.7,
            }}
          >
            {c.sub}
          </p>
        </Reveal>

        {/* Grid de métricas */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
        >
          {c.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.1 * i}>
              <div
                className="p-8 lg:p-10 text-center"
                style={{ backgroundColor: 'rgba(14,26,18,0.7)', backdropFilter: 'blur(4px)' }}
              >
                <p
                  className="font-light mb-3 leading-none"
                  style={{
                    fontFamily: 'var(--font-garamond)',
                    fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)',
                    color: 'var(--color-cream)',
                  }}
                >
                  <AnimatedCounter target={stat.target} />
                </p>
                {/* Subtítulo stats — opacity 0.75 */}
                <p
                  className="text-[11px] tracking-[0.18em] uppercase leading-snug"
                  style={{
                    fontFamily: 'var(--font-hanken)',
                    color: 'rgba(201,168,76,0.8)',
                  }}
                >
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Extra badge */}
        <Reveal delay={0.55}>
          <div className="mt-10 text-center">
            <div
              className="inline-block px-8 py-5 text-center"
              style={{
                border: '1px solid rgba(113,206,106,0.3)',
                backgroundColor: 'rgba(45,66,57,0.5)',
              }}
            >
              <p
                className="text-xs tracking-[0.22em] uppercase font-medium leading-loose"
                style={{
                  fontFamily: 'var(--font-hanken)',
                  color: 'var(--color-green)',
                }}
              >
                {c.extra.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < c.extra.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
