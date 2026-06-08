import { Reveal } from '@/components/ui/Reveal'
import { CONTENT } from '@/lib/content'

export function CTAFinalSection() {
  const c = CONTENT.cta
  return (
    <section id="s10" className="bg-[#2D4239] px-8 lg:px-20 xl:px-28 py-32 lg:py-44">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <p className="text-white/50 text-sm leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-hanken)', fontWeight: 300 }}>
            {c.body.split('\n').map((line, i) => (
              <span key={i}>{line}{i < 1 && <br />}</span>
            ))}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <h2
            className="text-white font-normal leading-[1.1] mb-14"
            style={{
              fontFamily: 'var(--font-garamond)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            }}
          >
            {c.headline}
          </h2>
        </Reveal>

        <Reveal delay={0.3}>
          <a
            href="mailto:contacto@planmanuelbelgrano.ar"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#C8A46A] text-[#1A1A1A] text-xs tracking-[0.25em] uppercase font-medium hover:bg-[#d4b07a] transition-colors duration-300 mb-20"
            style={{ fontFamily: 'var(--font-hanken)' }}
          >
            {c.cta}
          </a>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="mt-16 opacity-40">
            <p
              className="text-white/80"
              style={{
                fontFamily: 'var(--font-garamond)',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontStyle: 'italic',
                fontWeight: 400,
              }}
            >
              {c.signature}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
