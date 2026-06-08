import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { CONTENT } from '@/lib/content'

export function Vision2035Section() {
  const c = CONTENT.vision
  return (
    <section
      id="s08"
      className="relative px-8 lg:px-20 xl:px-28 py-28 lg:py-36 bg-[#111111] overflow-hidden"
    >
      {/* Aerial photo background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${c.bgImage})`,
          opacity: 0.25,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/60 via-transparent to-[#111111]/60" />

      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <SectionLabel label={c.label} light />
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            className="text-white font-normal leading-[1.05] mb-6"
            style={{
              fontFamily: 'var(--font-garamond)',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            }}
          >
            {c.headline.split('\n').map((line, i) => (
              <span key={i}>{line}{i < c.headline.split('\n').length - 1 && <br />}</span>
            ))}
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-white/55 text-base leading-relaxed mb-20 max-w-lg"
            style={{ fontFamily: 'var(--font-hanken)', fontWeight: 300 }}>
            {c.sub}
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-white/8">
          {c.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.1 * i}>
              <div className="bg-[#111111]/80 backdrop-blur-sm p-8 text-center">
                <p
                  className="text-white font-light mb-2"
                  style={{
                    fontFamily: 'var(--font-garamond)',
                    fontSize: 'clamp(2rem, 3vw, 2.8rem)',
                  }}
                >
                  <AnimatedCounter target={stat.target} />
                </p>
                <p className="text-[#C8A46A]/70 text-[10px] tracking-[0.18em] uppercase"
                  style={{ fontFamily: 'var(--font-hanken)' }}>
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.5}>
            <div className="bg-[#2D4239]/80 backdrop-blur-sm p-8 text-center flex items-center justify-center">
              <p className="text-[#71CE6A] text-xs tracking-[0.2em] uppercase text-center font-medium leading-relaxed"
                style={{ fontFamily: 'var(--font-hanken)' }}>
                {c.extra}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
