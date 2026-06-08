import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { CONTENT } from '@/lib/content'

export function IndustrialContinuitySection() {
  const c = CONTENT.continuity
  return (
    <section id="s09" className="bg-[#F7F6EB] px-8 lg:px-20 xl:px-28 py-28 lg:py-36">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionLabel label={c.label} />
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            className="text-[#1A1A1A] font-normal leading-[1.15] mb-16 max-w-2xl"
            style={{
              fontFamily: 'var(--font-garamond)',
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            }}
          >
            {c.headline.split('\n').map((line, i) => (
              <span key={i}>{line}{i < 1 && <br />}</span>
            ))}
          </h2>
        </Reveal>

        {/* Comparison table */}
        <Reveal delay={0.2}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  {c.tableHeaders.map((h, i) => (
                    <th
                      key={i}
                      className={`py-4 px-6 text-left border-b-2 text-xs tracking-[0.18em] uppercase ${
                        i === 0
                          ? 'text-[#8A9080] border-black/10 w-28'
                          : i < 3
                          ? 'text-[#1A1A1A]/60 border-black/10'
                          : 'text-[#2D4239] border-[#2D4239]/30'
                      }`}
                      style={{ fontFamily: 'var(--font-hanken)', fontWeight: 500 }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.tableRows.map((row, ri) => (
                  <tr key={ri} className="border-b border-black/5 hover:bg-black/2 transition-colors">
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className={`py-5 px-6 ${
                          ci === 0
                            ? 'text-[#8A6C3A] text-xs tracking-[0.15em] uppercase'
                            : ci < 3
                            ? 'text-[#1A1A1A]/65 text-sm'
                            : 'text-[#2D4239] text-sm font-medium'
                        }`}
                        style={{ fontFamily: ci === 0 ? 'var(--font-hanken)' : 'var(--font-hanken)', fontWeight: ci === 0 ? 500 : 300 }}
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

        <Reveal delay={0.4} className="mt-16">
          <p className="text-[#1A1A1A]/50 text-sm italic leading-relaxed max-w-2xl"
            style={{ fontFamily: 'var(--font-garamond)' }}>
            &ldquo;{c.footer}&rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  )
}
