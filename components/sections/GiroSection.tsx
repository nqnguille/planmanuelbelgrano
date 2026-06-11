'use client'
import { Reveal } from '@/components/ui/Reveal'
import { HempBotanical } from '@/components/ui/HempBotanical'
import { GNLFlowDiagram } from '@/components/ui/GNLFlowDiagram'

const DIVIDER_GOLD = (
  <div style={{
    width: '28px', height: '1px',
    backgroundColor: 'rgba(201,168,76,0.45)',
    marginBottom: '1.5rem',
  }} />
)

const DIVIDER_GREEN = (
  <div style={{
    width: '28px', height: '1px',
    backgroundColor: 'rgba(113,206,106,0.45)',
    marginBottom: '1.5rem',
  }} />
)

const BULLET_STYLE: React.CSSProperties = {
  fontFamily: 'var(--font-hanken)',
  fontWeight: 300,
  fontSize: 'clamp(0.88rem, 1.2vw, 0.95rem)',
  color: 'rgba(28,26,20,0.6)',
  lineHeight: 1.75,
  paddingLeft: '1.25em',
  position: 'relative',
  marginBottom: '0.6rem',
}

function Bullet({ children, accent = 'rgba(28,26,20,0.25)' }: { children: React.ReactNode; accent?: string }) {
  return (
    <p style={{ ...BULLET_STYLE }}>
      <span style={{
        position: 'absolute',
        left: 0,
        top: '0.1em',
        display: 'inline-block',
        width: '0.55em',
        height: '0.55em',
        borderRadius: '50%',
        backgroundColor: accent,
        marginTop: '0.45em',
      }} />
      {children}
    </p>
  )
}

export function GiroSection() {
  return (
    <section
      id="giro"
      style={{ backgroundColor: 'var(--color-cream)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Transition line — top */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)',
        pointerEvents: 'none',
      }} />

      {/* Watermark botanical */}
      <div style={{
        position: 'absolute',
        top: '5%',
        right: '-4%',
        width: '320px',
        opacity: 0.04,
        pointerEvents: 'none',
      }}>
        <HempBotanical opacity={1} />
      </div>

      <div className="max-w-[1400px] mx-auto px-8 lg:px-20 xl:px-28 py-28 lg:py-40">

        {/* ── BLOQUE 1 — Hero ── */}
        <div style={{ marginBottom: '5rem' }}>
          <Reveal delay={0.06}>
            <p style={{
              fontFamily: 'var(--font-hanken)',
              fontSize: '0.62rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase' as const,
              color: 'var(--color-gold)',
              marginBottom: '2rem',
            }}>
              El Giro Estratégico
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <h2 style={{
              fontFamily: 'var(--font-garamond)',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 'clamp(2.8rem, 5vw, 4.8rem)',
              lineHeight: 1.0,
              color: 'var(--color-ink)',
              marginBottom: '0',
            }}>
              El crédito de carbono no es el producto.
            </h2>
            <h2 style={{
              fontFamily: 'var(--font-garamond)',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 'clamp(2.8rem, 5vw, 4.8rem)',
              lineHeight: 1.0,
              color: '#4daa47',
              marginBottom: '2.5rem',
            }}>
              Es la llave.
            </h2>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '2rem 4rem', maxWidth: '900px' }}>
              <p style={{
                fontFamily: 'var(--font-hanken)',
                fontWeight: 300,
                fontSize: 'clamp(0.88rem, 1.2vw, 0.95rem)',
                lineHeight: 1.75,
                color: 'rgba(28,26,20,0.6)',
              }}>
                CS3D exige certificación de carbono para contratos de GNL europeo de largo plazo desde 2025–2027.
                Sin ella, YPF compite en precio contra Qatar y Australia. Con ella, accede a un mercado donde el gas certificado vale USD 2–5/MMBtu más.
                Los créditos forestales — rankeados #10 global, reversibles en décadas por incendios y plagas — ya no pasan el estándar.
              </p>
              <p style={{
                fontFamily: 'var(--font-hanken)',
                fontWeight: 300,
                fontSize: 'clamp(0.88rem, 1.2vw, 0.95rem)',
                lineHeight: 1.75,
                color: 'rgba(28,26,20,0.6)',
              }}>
                Plan Belgrano activa simultáneamente los tres mecanismos de mayor integridad científica disponibles: cáñamo industrial — Captura #2 global, fotosíntesis de alta tasa a costo energético casi cero — hempcrete como Fijación #3 global, permanencia de siglos en cada muro construido — y biochar como Fijación #4 global, sellado por 500 a más de 1.000 años en el suelo. Es la combinación exacta que los compradores europeos exigen: remoción permanente verificada, no promesas forestales reversibles.
              </p>
            </div>
          </Reveal>
        </div>

        {/* ── DIAGRAMA DE FLUJO ── */}
        <Reveal delay={0.22}>
          <div style={{
            display: 'flex', justifyContent: 'center',
            marginBottom: '4rem',
            padding: '2.5rem 0',
            borderTop: '1px solid rgba(201,168,76,0.18)',
            borderBottom: '1px solid rgba(201,168,76,0.18)',
          }}>
            <GNLFlowDiagram className="w-full max-w-[680px]" />
          </div>
        </Reveal>

        {/* ── BLOQUE 2 — Dos estados ── */}
        <Reveal delay={0.24}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1px',
            backgroundColor: 'rgba(201,168,76,0.12)',
            border: '1px solid rgba(201,168,76,0.18)',
            marginBottom: '1px',
          }}>

            {/* Card izquierda — HOY · Sin certificación */}
            <div style={{
              backgroundColor: 'rgba(247,244,238,0.7)',
              padding: '3rem 3rem 3.5rem',
            }}>
              <p style={{
                fontFamily: 'var(--font-hanken)',
                fontSize: '0.62rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase' as const,
                color: 'rgba(180,48,28,0.7)',
                marginBottom: '1.75rem',
              }}>
                HOY · Sin certificación
              </p>

              <p style={{
                fontFamily: 'var(--font-garamond)',
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 'clamp(2.8rem, 4vw, 4rem)',
                lineHeight: 1.0,
                color: 'rgba(180,48,28,0.8)',
                marginBottom: '0.4rem',
              }}>
                Commodity
              </p>
              <p style={{
                fontFamily: 'var(--font-hanken)',
                fontWeight: 300,
                fontSize: 'clamp(0.88rem, 1.2vw, 0.95rem)',
                color: 'rgba(28,26,20,0.45)',
                marginBottom: '2rem',
              }}>
                precio mercado spot · sin diferenciación
              </p>

              {DIVIDER_GOLD}

              <div>
                <Bullet accent="rgba(180,48,28,0.4)">
                  Compra créditos de carbono en mercado abierto → costo operativo
                </Bullet>
                <Bullet accent="rgba(180,48,28,0.4)">
                  Compite con Qatar, Australia y EE.UU. en precio
                </Bullet>
                <Bullet accent="rgba(180,48,28,0.4)">
                  Sin acceso al mercado certificado de largo plazo
                </Bullet>
              </div>
            </div>

            {/* Card derecha — CON PLAN BELGRANO */}
            <div style={{
              backgroundColor: 'rgba(113,206,106,0.07)',
              padding: '3rem 3rem 3.5rem',
            }}>
              <p style={{
                fontFamily: 'var(--font-hanken)',
                fontSize: '0.62rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase' as const,
                color: 'rgba(55,130,50,0.75)',
                marginBottom: '1.75rem',
              }}>
                CON PLAN BELGRANO
              </p>

              <p style={{
                fontFamily: 'var(--font-garamond)',
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 'clamp(2.8rem, 4vw, 4rem)',
                lineHeight: 1.0,
                color: '#4daa47',
                marginBottom: '0.4rem',
              }}>
                Premium
              </p>
              <p style={{
                fontFamily: 'var(--font-hanken)',
                fontWeight: 300,
                fontSize: 'clamp(0.88rem, 1.2vw, 0.95rem)',
                color: 'rgba(28,26,20,0.45)',
                marginBottom: '2rem',
              }}>
                USD 2–5/MMBtu sobre precio base · CS3D certified
              </p>

              {DIVIDER_GREEN}

              <div>
                <Bullet accent="rgba(55,130,50,0.5)">
                  Produce créditos propios de fijación permanente → activo certificable
                </Bullet>
                <Bullet accent="rgba(55,130,50,0.5)">
                  GNL verificado bajo en carbono · diferenciado de la competencia
                </Bullet>
                <Bullet accent="rgba(55,130,50,0.5)">
                  Contratos de largo plazo con compradores europeos premium
                </Bullet>
              </div>
            </div>

          </div>
        </Reveal>

        {/* ── BLOQUE 3 — Strip de 3 números ── */}
        <Reveal delay={0.30}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            backgroundColor: 'rgba(201,168,76,0.12)',
            border: '1px solid rgba(201,168,76,0.18)',
            borderTop: 'none',
            marginBottom: '4rem',
          }}>

            {/* Stat 1 */}
            <div style={{
              backgroundColor: 'rgba(247,244,238,0.7)',
              padding: '2.5rem 2.75rem',
            }}>
              <p style={{
                fontFamily: 'var(--font-garamond)',
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 'clamp(2rem, 3vw, 2.8rem)',
                lineHeight: 1.0,
                color: 'var(--color-ink)',
                marginBottom: '0.35rem',
              }}>
                USD 7–17M
              </p>
              <p style={{
                fontFamily: 'var(--font-hanken)',
                fontSize: '0.62rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase' as const,
                color: 'rgba(201,168,76,0.75)',
                marginBottom: '1.25rem',
              }}>
                premium por cargo
              </p>
              <div style={{ width: '28px', height: '1px', backgroundColor: 'rgba(201,168,76,0.45)', marginBottom: '1.25rem' }} />
              <p style={{
                fontFamily: 'var(--font-hanken)',
                fontWeight: 300,
                fontSize: 'clamp(0.88rem, 1.2vw, 0.95rem)',
                color: 'rgba(28,26,20,0.55)',
                lineHeight: 1.75,
              }}>
                por cargo típico de 3.4B BTU · GNL certificado CS3D
              </p>
            </div>

            {/* Stat 2 */}
            <div style={{
              backgroundColor: 'rgba(247,244,238,0.7)',
              padding: '2.5rem 2.75rem',
            }}>
              <p style={{
                fontFamily: 'var(--font-garamond)',
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 'clamp(2rem, 3vw, 2.8rem)',
                lineHeight: 1.0,
                color: 'var(--color-ink)',
                marginBottom: '0.35rem',
              }}>
                USD 2–5
              </p>
              <p style={{
                fontFamily: 'var(--font-hanken)',
                fontSize: '0.62rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase' as const,
                color: 'rgba(201,168,76,0.75)',
                marginBottom: '1.25rem',
              }}>
                por MMBtu adicional
              </p>
              <div style={{ width: '28px', height: '1px', backgroundColor: 'rgba(201,168,76,0.45)', marginBottom: '1.25rem' }} />
              <p style={{
                fontFamily: 'var(--font-hanken)',
                fontWeight: 300,
                fontSize: 'clamp(0.88rem, 1.2vw, 0.95rem)',
                color: 'rgba(28,26,20,0.55)',
                lineHeight: 1.75,
              }}>
                sobre precio spot · mercado premium de GNL bajo carbono
              </p>
            </div>

            {/* Stat 3 */}
            <div style={{
              backgroundColor: 'rgba(247,244,238,0.7)',
              padding: '2.5rem 2.75rem',
            }}>
              <p style={{
                fontFamily: 'var(--font-garamond)',
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 'clamp(2rem, 3vw, 2.8rem)',
                lineHeight: 1.0,
                color: 'var(--color-gold)',
                marginBottom: '0.35rem',
              }}>
                18–24 meses
              </p>
              <p style={{
                fontFamily: 'var(--font-hanken)',
                fontSize: '0.62rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase' as const,
                color: 'rgba(201,168,76,0.75)',
                marginBottom: '1.25rem',
              }}>
                ventana first mover
              </p>
              <div style={{ width: '28px', height: '1px', backgroundColor: 'rgba(201,168,76,0.45)', marginBottom: '1.25rem' }} />
              <p style={{
                fontFamily: 'var(--font-hanken)',
                fontWeight: 300,
                fontSize: 'clamp(0.88rem, 1.2vw, 0.95rem)',
                color: 'rgba(28,26,20,0.55)',
                lineHeight: 1.75,
              }}>
                para posicionarse antes que los contratos LNG europeos se cierren
              </p>
            </div>

          </div>
        </Reveal>

        {/* ── BLOQUE 4 — Síntesis blockquote ── */}
        <Reveal delay={0.36}>
          <div style={{
            backgroundColor: 'rgba(247,244,238,0.6)',
            borderLeft: '2px solid rgba(55,130,50,0.35)',
            padding: '2.5rem',
            marginBottom: '3rem',
          }}>
            <p style={{
              fontFamily: 'var(--font-garamond)',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 'clamp(1.1rem, 1.8vw, 1.55rem)',
              lineHeight: 1.45,
              color: 'var(--color-ink)',
              marginBottom: '1.25rem',
            }}>
              "Vendidos solos, los créditos de Fase 1 valen USD 2,2M por año.
              Bundleados con un cargo de GNL, los mismos créditos habilitan USD 7–17M de premium por cargo.
              No es ESG. Es aritmética."
            </p>
            <p style={{
              fontFamily: 'var(--font-hanken)',
              fontWeight: 300,
              fontSize: '0.82rem',
              color: 'rgba(55,130,50,0.65)',
              lineHeight: 1.65,
            }}>
              El mismo activo. Diez veces el valor cuando se usa como llave de acceso al mercado.
            </p>
          </div>
        </Reveal>

        {/* ── Footer strip — nota regulatoria ── */}
        <Reveal delay={0.42}>
          <div style={{
            borderTop: '1px solid rgba(201,168,76,0.18)',
            paddingTop: '1.75rem',
          }}>
            <p style={{
              fontFamily: 'var(--font-hanken)',
              fontWeight: 300,
              fontSize: '0.68rem',
              color: 'rgba(28,26,20,0.35)',
              lineHeight: 1.7,
              maxWidth: '80ch',
            }}>
              Alineado con CS3D (Corporate Sustainability Due Diligence Directive) y EU Taxonomy Regulation.
              Los contratos LNG europeos de largo plazo exigen certificación de huella de carbono a partir de 2025–2027.
              Plan Belgrano aporta el perfil de mayor integridad disponible: Captura #2 + Fijación #3 y #4 en ranking técnico global independiente —
              frente a créditos forestales rankeados #10 con permanencia de décadas y alta vulnerabilidad a reversión.
            </p>
          </div>
        </Reveal>

      </div>

      {/* Transition line — bottom */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)',
        pointerEvents: 'none',
      }} />
    </section>
  )
}
