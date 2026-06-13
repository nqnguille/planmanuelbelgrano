'use client'
import Image from 'next/image'
import { Reveal } from '@/components/ui/Reveal'

type NodeType = 'normal' | 'belgrano' | 'villain' | 'accent'

const TIMELINE: {
  era: string; date: string; text: string
  type: NodeType; img: string
}[] = [
  { era: 'La antigüedad', date: '~8.000 a.C.', text: 'Una de las primeras plantas cultivadas por el ser humano. Asia Central. China. Miles de años de uso cotidiano.', type: 'normal', img: '/illustrations/01.png' },
  { era: 'El mundo clásico', date: '~200 a.C.', text: 'Cuerdas y velas en los barcos romanos. Hempcrete en las primeras construcciones documentadas. Todavía en pie.', type: 'normal', img: '/illustrations/02.png' },
  { era: 'La Edad Media', date: '~600 d.C.', text: 'Iglesias y puentes europeos construidos con cáñamo. El material de construcción más durable conocido.', type: 'normal', img: '/illustrations/03.png' },
  { era: 'El Río de la Plata', date: '~1810', text: 'Belgrano escribe sobre el cáñamo como cultivo estratégico para la nación.', type: 'belgrano', img: '/illustrations/04.png' },
  { era: 'El decreto', date: 'Siglo XX', text: 'La prohibición del siglo XX interrumpió el uso industrial en todo el mundo. Una decisión regulatoria sin base técnica ni agronómica.', type: 'villain', img: '/illustrations/05.png' },
  { era: 'Hoy', date: '2026', text: 'Argentina re-legaliza el cáñamo industrial. La planta vuelve.', type: 'accent', img: '/illustrations/06.png' },
]

function dotColor(type: NodeType) {
  if (type === 'villain')  return 'rgba(140,38,22,0.7)'
  if (type === 'accent')   return 'var(--color-green)'
  if (type === 'belgrano') return 'rgba(201,168,76,0.8)'
  return 'rgba(201,168,76,0.38)'
}

function eraColor(type: NodeType) {
  if (type === 'villain')  return 'rgba(140,38,22,0.85)'
  if (type === 'accent')   return 'var(--color-green)'
  if (type === 'belgrano') return 'var(--color-gold)'
  return 'var(--color-ink)'
}

function dateColor(type: NodeType) {
  if (type === 'villain')  return 'rgba(140,38,22,0.5)'
  if (type === 'accent')   return 'rgba(90,170,84,0.6)'
  if (type === 'belgrano') return 'rgba(201,168,76,0.6)'
  return 'rgba(28,26,20,0.3)'
}

export function PlantHistorySection() {
  return (
    <section id="s04" style={{ backgroundColor: 'var(--color-parchment)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, backgroundImage: 'radial-gradient(ellipse 55% 65% at 4% 45%, rgba(139,100,42,0.07) 0%, transparent 60%)' }}/>

      <div className="relative max-w-[1400px] mx-auto px-8 lg:px-20 xl:px-28 pt-28 lg:pt-40 pb-20 lg:pb-28" style={{ zIndex: 1 }}>

        <Reveal>
          <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '2.75rem' }}>Cannabis sativa L. · Cáñamo industrial</p>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 style={{ fontFamily: 'var(--font-garamond)', fontStyle: 'italic', fontSize: 'clamp(2.8rem, 5vw, 4.6rem)', fontWeight: 400, lineHeight: 1.03, color: 'var(--color-ink)', marginBottom: '2rem', maxWidth: '22ch' }}>
            La planta más versátil<br />de la historia humana.
          </h2>
        </Reveal>

        {/* Foto de plantación — reemplazar src con foto real de cáñamo */}
        <Reveal delay={0.10}>
          <div style={{
            position: 'relative', width: '100%', height: 'clamp(220px, 30vw, 420px)',
            marginBottom: '3rem', overflow: 'hidden', borderRadius: '2px',
            background: 'linear-gradient(135deg, #2a4d12 0%, #3e6e22 45%, #2d5518 100%)',
          }}>
            <Image
              src="/illustrations/06.png"
              alt="Plantación de cáñamo industrial — Cannabis sativa L., variedad industrial THC < 1%"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top', opacity: 0.82 }}
              sizes="(max-width: 1400px) 100vw, 1400px"
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 55%, rgba(232,224,200,0.35) 100%)' }}/>
            <p style={{
              position: 'absolute', bottom: '1.25rem', left: '2rem',
              fontFamily: 'var(--font-hanken)', fontSize: '0.56rem',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'rgba(28,26,20,0.45)',
            }}>Cannabis sativa L. · Variedad industrial · THC &lt; 1%</p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20 lg:mb-28">
          <Reveal delay={0.14}>
            <div style={{ fontFamily: 'var(--font-hanken)', fontWeight: 300, fontSize: 'clamp(0.88rem, 1.25vw, 0.98rem)', color: 'rgba(28,26,20,0.60)', lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
              <p>El hempcrete no nació en el siglo XXI. Los romanos construían con cáñamo. La estructura más antigua documentada tiene mil quinientos años y todavía está en pie en el Valle del Mosa, Francia.</p>
              <p>Belgrano lo conocía. Escribía sobre el cáñamo como cultivo estratégico para el Río de la Plata.</p>
              <p>El uso del cáñamo como material de construcción fue documentado en Europa, Asia y América durante siglos. Su interrupción en el siglo XX fue regulatoria, no técnica ni económica: una decisión política que paralizó el desarrollo industrial del sector en todo el mundo.</p>
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <blockquote style={{ borderLeft: '2px solid rgba(201,168,76,0.5)', paddingLeft: '2rem', paddingTop: '0.5rem' }}>
              <p style={{ fontFamily: 'var(--font-garamond)', fontStyle: 'italic', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 400, lineHeight: 1.18, color: 'var(--color-ink)', marginBottom: '0.75rem' }}>Belgrano tenía razón.</p>
              <p style={{ fontFamily: 'var(--font-garamond)', fontStyle: 'italic', fontSize: 'clamp(1rem, 1.7vw, 1.35rem)', color: 'rgba(28,26,20,0.42)', lineHeight: 1.3 }}>Tardamos doscientos años en volver.</p>
            </blockquote>
          </Reveal>
        </div>

        {/* ── TIMELINE ── */}
        <Reveal delay={0.32}>
          <div style={{ borderTop: '1px solid rgba(139,100,42,0.15)', paddingTop: '2.5rem' }}>
            <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '0.56rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(139,100,42,0.38)', marginBottom: '2.75rem' }}>
              Historia documentada · 10.000 años de usos industriales
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${TIMELINE.length}, 1fr)`, position: 'relative' }}>
              {/* línea horizontal de conexión */}
              <div style={{
                position: 'absolute', top: '209px',
                left: `calc(100% / ${TIMELINE.length * 2})`,
                right: `calc(100% / ${TIMELINE.length * 2})`,
                height: '1px',
                background: 'linear-gradient(to right, rgba(139,100,42,0.2) 0%, rgba(139,100,42,0.25) 50%, rgba(140,38,22,0.4) 70%, rgba(140,38,22,0.2) 82%, rgba(90,170,84,0.45) 100%)',
              }}/>

              {TIMELINE.map((item) => (
                <div key={item.era} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 0.5rem' }}>

                  {/* Ilustración */}
                  <div style={{
                    position: 'relative',
                    width: '150px', height: '200px',
                    marginBottom: '1rem',
                    overflow: 'hidden',
                    borderRadius: '2px',
                    filter: item.type === 'villain' ? 'sepia(0.3) contrast(1.05)' : item.type === 'accent' ? 'none' : 'sepia(0.15)',
                    opacity: item.type === 'villain' ? 0.75 : 1,
                    boxShadow: item.type === 'belgrano'
                      ? '0 0 0 1px rgba(201,168,76,0.35), 0 4px 18px rgba(0,0,0,0.18)'
                      : item.type === 'villain'
                      ? '0 0 0 1px rgba(140,38,22,0.35), 0 4px 14px rgba(0,0,0,0.15)'
                      : item.type === 'accent'
                      ? '0 0 0 1px rgba(90,170,84,0.3), 0 4px 16px rgba(0,0,0,0.14)'
                      : '0 0 0 1px rgba(139,100,42,0.18), 0 4px 12px rgba(0,0,0,0.1)',
                  }}>
                    <Image
                      src={item.img}
                      alt={item.era}
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'top center' }}
                      sizes="150px"
                    />
                  </div>

                  {/* Punto del timeline */}
                  <div style={{
                    width: item.type === 'villain' || item.type === 'accent' ? '9px' : '7px',
                    height: item.type === 'villain' || item.type === 'accent' ? '9px' : '7px',
                    borderRadius: '50%', flexShrink: 0, margin: '0 auto 1rem', position: 'relative', zIndex: 1,
                    backgroundColor: dotColor(item.type),
                    boxShadow: item.type === 'villain' ? '0 0 0 3px rgba(140,38,22,0.12)' : item.type === 'accent' ? '0 0 0 3px rgba(113,206,106,0.15)' : 'none',
                  }}/>

                  <p style={{ fontFamily: 'var(--font-garamond)', fontStyle: 'italic', fontSize: 'clamp(0.8rem, 1.05vw, 0.98rem)', fontWeight: 400, color: eraColor(item.type), textAlign: 'center', marginBottom: '0.3rem', lineHeight: 1.2 }}>
                    {item.era}
                  </p>

                  <p style={{ fontFamily: 'var(--font-hanken)', fontSize: 'clamp(0.62rem, 0.8vw, 0.7rem)', letterSpacing: '0.1em', color: dateColor(item.type), textAlign: 'center', marginBottom: '0.65rem' }}>
                    {item.date}
                  </p>

                  <p style={{ fontFamily: 'var(--font-hanken)', fontWeight: item.type === 'villain' ? 400 : 300, fontSize: 'clamp(0.68rem, 0.95vw, 0.8rem)', color: item.type === 'villain' || item.type === 'accent' ? 'rgba(28,26,20,0.65)' : 'rgba(28,26,20,0.44)', textAlign: 'center', lineHeight: 1.7 }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
