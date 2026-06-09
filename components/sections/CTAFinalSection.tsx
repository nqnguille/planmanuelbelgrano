import { Reveal } from '@/components/ui/Reveal'
import { CONTENT } from '@/lib/content'

export function CTAFinalSection() {
  const c = CONTENT.cta
  return (
    <footer id="s10" style={{ backgroundColor: 'var(--color-ink)' }}>

      {/* Sección principal de cierre */}
      <div className="px-8 lg:px-20 xl:px-28 py-32 lg:py-48">
        <div className="max-w-4xl mx-auto">

          {/* Eyebrow */}
          <Reveal>
            <p
              className="text-xs tracking-[0.28em] uppercase mb-8"
              style={{
                fontFamily: 'var(--font-hanken)',
                color: 'var(--color-green)',
              }}
            >
              {c.eyebrow}
            </p>
          </Reveal>

          {/* Headline */}
          <Reveal delay={0.1}>
            <h2
              className="font-normal leading-[1.05] mb-10"
              style={{
                fontFamily: 'var(--font-garamond)',
                fontSize: 'clamp(3rem, 7vw, 6.5rem)',
                color: 'var(--color-cream)',
              }}
            >
              {c.headline}
            </h2>
          </Reveal>

          {/* Body */}
          <Reveal delay={0.2}>
            <p
              className="mb-16 max-w-xl leading-relaxed"
              style={{
                fontFamily: 'var(--font-hanken)',
                fontWeight: 300,
                fontSize: 'clamp(1rem, 1.6vw, 1.2rem)',
                color: 'rgba(247,246,235,0.6)',
              }}
            >
              {c.body}
            </p>
          </Reveal>

          {/* CTA principal */}
          <Reveal delay={0.3}>
            <a
              href={c.ctaHref}
              className="inline-flex items-center gap-4 text-xs tracking-[0.28em] uppercase font-medium"
              style={{
                fontFamily: 'var(--font-hanken)',
                padding: '1.1rem 2.5rem',
                backgroundColor: 'var(--color-green)',
                color: 'var(--color-ink)',
                transition: 'background-color 0.25s ease',
              }}
            >
              {c.cta}
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                <path d="M0 4H14M14 4L11 1M14 4L11 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </a>
          </Reveal>

        </div>
      </div>

      {/* Separador */}
      <div
        className="mx-8 lg:mx-20 xl:mx-28"
        style={{ height: '1px', backgroundColor: 'rgba(247,246,235,0.07)' }}
      />

      {/* Firma + contacto */}
      <div className="px-8 lg:px-20 xl:px-28 py-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">

          {/* Firma Manuel Belgrano */}
          <Reveal delay={0.4}>
            <div>
              <p
                className="italic mb-2"
                style={{
                  fontFamily: 'var(--font-garamond)',
                  fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                  color: 'rgba(247,246,235,0.85)',
                  fontWeight: 400,
                }}
              >
                {c.signature}
              </p>
              <p
                className="text-xs tracking-[0.15em] uppercase"
                style={{
                  fontFamily: 'var(--font-hanken)',
                  fontWeight: 300,
                  color: 'rgba(247,246,235,0.35)',
                }}
              >
                {c.signatureSub}
              </p>
            </div>
          </Reveal>

          {/* Contacto */}
          <Reveal delay={0.5}>
            <div className="flex flex-col gap-3 lg:text-right">
              <a
                href={`mailto:${c.contactEmail}`}
                className="text-sm"
                style={{
                  fontFamily: 'var(--font-hanken)',
                  fontWeight: 300,
                  color: 'rgba(247,246,235,0.45)',
                  transition: 'color 0.2s ease',
                }}
              >
                {c.contactEmail}
              </a>
              <a
                href={`https://wa.me/${c.contactWhatsApp.replace(/[\s+]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm"
                style={{
                  fontFamily: 'var(--font-hanken)',
                  fontWeight: 300,
                  color: 'rgba(247,246,235,0.45)',
                  transition: 'color 0.2s ease',
                }}
              >
                WhatsApp {c.contactWhatsApp}
              </a>
            </div>
          </Reveal>

        </div>
      </div>

      {/* Tagline final */}
      <div
        className="px-8 lg:px-20 xl:px-28 py-6 border-t"
        style={{ borderColor: 'rgba(247,246,235,0.05)' }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="text-xs tracking-[0.2em] uppercase"
            style={{
              fontFamily: 'var(--font-hanken)',
              color: 'rgba(247,246,235,0.2)',
            }}
          >
            Plan Manuel Belgrano · Flora Cáñamo Neuquino SRL · Neuquén, Patagonia Argentina
          </p>
          <p
            className="text-xs"
            style={{
              fontFamily: 'var(--font-hanken)',
              color: 'rgba(247,246,235,0.15)',
            }}
          >
            2026
          </p>
        </div>
      </div>

    </footer>
  )
}
