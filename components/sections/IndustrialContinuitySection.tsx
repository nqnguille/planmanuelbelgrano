import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { CONTENT } from '@/lib/content'

export function IndustrialContinuitySection() {
  const c = CONTENT.continuity
  return (
    <section
      id="s09"
      className="px-8 lg:px-20 xl:px-28 py-28 lg:py-40"
      style={{ backgroundColor: 'var(--color-warm)' }}
    >
      <div className="max-w-6xl mx-auto">

        <Reveal>
          <SectionLabel label={c.label} light />
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            className="font-normal leading-[1.15] mb-16 max-w-3xl"
            style={{
              fontFamily: 'var(--font-garamond)',
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
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

        {/* Tabla comparativa */}
        <Reveal delay={0.2}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(201,168,76,0.2)' }}>
                  {c.tableHeaders.map((h, i) => (
                    <th
                      key={i}
                      className="py-4 px-6 text-left text-xs tracking-[0.18em] uppercase"
                      style={{
                        fontFamily: 'var(--font-hanken)',
                        fontWeight: 500,
                        color: i === 0
                          ? 'rgba(247,246,235,0.3)'
                          : i === 3
                          ? 'var(--color-green)'
                          : 'rgba(247,246,235,0.5)',
                        minWidth: i === 0 ? '100px' : 'auto',
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.tableRows.map((row, ri) => (
                  <tr
                    key={ri}
                    style={{
                      borderBottom: '1px solid rgba(247,246,235,0.06)',
                    }}
                  >
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className="py-5 px-6"
                        style={{
                          fontFamily: 'var(--font-hanken)',
                          fontSize: ci === 0 ? '11px' : '0.875rem',
                          fontWeight: ci === 0 ? 500 : ci === 3 ? 500 : 300,
                          letterSpacing: ci === 0 ? '0.15em' : 'normal',
                          textTransform: ci === 0 ? 'uppercase' : 'none',
                          color: ci === 0
                            ? 'var(--color-gold)'
                            : ci === 3
                            ? 'var(--color-green)'
                            : 'rgba(247,246,235,0.65)',
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Quote footer */}
        <Reveal delay={0.5} className="mt-16">
          <p
            className="italic leading-relaxed max-w-2xl"
            style={{
              fontFamily: 'var(--font-garamond)',
              fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
              color: 'rgba(247,246,235,0.45)',
            }}
          >
            &ldquo;{c.footer}&rdquo;
          </p>
        </Reveal>

      </div>
    </section>
  )
}
