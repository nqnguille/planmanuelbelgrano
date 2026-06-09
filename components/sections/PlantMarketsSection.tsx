import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { CONTENT } from '@/lib/content'

export function PlantMarketsSection() {
  const c = CONTENT.plant
  return (
    <section
      id="s04"
      className="relative px-8 lg:px-20 xl:px-28 py-28 lg:py-40 overflow-hidden"
      style={{ backgroundColor: 'var(--color-parchment)' }}
    >
      {/* Hemp plant watermark fondo */}
      <div className="absolute right-[-2%] top-0 bottom-0 w-[45%] flex items-center justify-end pointer-events-none overflow-hidden">
        <svg viewBox="0 0 300 600" className="h-full" fill="none" style={{ opacity: 0.04 }}>
          <line x1="150" y1="600" x2="150" y2="50" stroke="#2D4239" strokeWidth="3" />
          <ellipse cx="150" cy="200" rx="80" ry="35" stroke="#2D4239" strokeWidth="2" transform="rotate(-25 150 200)" />
          <ellipse cx="150" cy="260" rx="80" ry="35" stroke="#2D4239" strokeWidth="2" transform="rotate(25 150 260)" />
          <ellipse cx="150" cy="320" rx="70" ry="30" stroke="#2D4239" strokeWidth="2" transform="rotate(-20 150 320)" />
          <ellipse cx="150" cy="380" rx="70" ry="30" stroke="#2D4239" strokeWidth="2" transform="rotate(20 150 380)" />
          <ellipse cx="150" cy="430" rx="55" ry="25" stroke="#2D4239" strokeWidth="2" transform="rotate(-15 150 430)" />
          <ellipse cx="150" cy="470" rx="40" ry="20" stroke="#2D4239" strokeWidth="1.5" transform="rotate(15 150 470)" />
          <circle cx="150" cy="50" r="18" stroke="#2D4239" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto">

        <Reveal>
          <SectionLabel label={c.label} />
        </Reveal>

        {/* Headline + body */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <Reveal delay={0.1}>
            <h2
              className="font-normal leading-[1.1]"
              style={{
                fontFamily: 'var(--font-garamond)',
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
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
            <p
              className="text-base leading-relaxed"
              style={{
                fontFamily: 'var(--font-hanken)',
                fontWeight: 300,
                color: 'rgba(28,26,20,0.65)',
              }}
            >
              {c.body}
            </p>
          </Reveal>
        </div>

        {/* Cards de 4 mercados */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {c.markets.map((m, i) => (
            <Reveal key={m.category} delay={0.1 * i}>
              <div
                className="h-full p-8 border transition-colors duration-300"
                style={{
                  backgroundColor: 'white',
                  borderColor: 'rgba(28,26,20,0.08)',
                }}
              >
                {/* Categoría */}
                <p
                  className="text-xs tracking-[0.22em] uppercase mb-5"
                  style={{
                    fontFamily: 'var(--font-hanken)',
                    color: 'var(--color-gold)',
                  }}
                >
                  {m.category}
                </p>

                {/* Métrica grande */}
                <p
                  className="font-light mb-1 leading-none"
                  style={{
                    fontFamily: 'var(--font-garamond)',
                    fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
                    color: 'var(--color-ink)',
                  }}
                >
                  {m.metric}
                </p>

                {/* Label métrica */}
                <p
                  className="text-xs mb-6 tracking-wide"
                  style={{
                    fontFamily: 'var(--font-hanken)',
                    color: 'rgba(28,26,20,0.45)',
                  }}
                >
                  {m.metricLabel}
                </p>

                {/* Separador */}
                <div className="w-8 h-px mb-5" style={{ backgroundColor: 'rgba(201,168,76,0.35)' }} />

                {/* Título */}
                <h3
                  className="text-sm font-medium mb-3"
                  style={{
                    fontFamily: 'var(--font-hanken)',
                    color: 'var(--color-ink)',
                  }}
                >
                  {m.title}
                </h3>

                {/* Body */}
                <p
                  className="text-xs leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-hanken)',
                    fontWeight: 300,
                    color: 'rgba(28,26,20,0.6)',
                  }}
                >
                  {m.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Métricas secundarias — barra */}
        <Reveal delay={0.5}>
          <div
            className="grid grid-cols-2 md:grid-cols-4 border-t"
            style={{ borderColor: 'rgba(28,26,20,0.1)' }}
          >
            {c.metrics.map((m, i) => (
              <div
                key={i}
                className="py-6 px-4 border-r last:border-r-0"
                style={{ borderColor: 'rgba(28,26,20,0.1)' }}
              >
                <p
                  className="font-light mb-1"
                  style={{
                    fontFamily: 'var(--font-garamond)',
                    fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
                    color: 'var(--color-ink)',
                  }}
                >
                  {m.value}
                </p>
                <p
                  className="text-xs uppercase tracking-[0.14em]"
                  style={{
                    fontFamily: 'var(--font-hanken)',
                    color: 'rgba(28,26,20,0.5)',
                  }}
                >
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  )
}
