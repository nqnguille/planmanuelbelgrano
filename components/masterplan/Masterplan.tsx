'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, type CSSProperties, type ReactNode } from 'react'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

/* Hook: detecta viewport angosto para apilar layouts en mobile. */
function useNarrow(bp = 680) {
  const [narrow, setNarrow] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia(`(max-width:${bp}px)`)
    const on = () => setNarrow(mq.matches)
    on()
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [bp])
  return narrow
}

/* ============================================================
   PLAN MANUEL BELGRANO — MASTERPLAN (sitio gateado)
   Construido de cero — jun 2026.
   Narrativa: oportunidad operativa → solución → activo → plan
   → deal → upside carbono → ventana 2026-2031 → cierre Belgrano.
   ============================================================ */

const INK = '#071A38'
const DUSK = '#0E2A52'
const CREAM = '#F3F1E7'
const PARCHMENT = '#E7ECF3'
const GOLD = '#F2B544'
const GREEN_DARK = '#5BC46A'
const GREEN_LIGHT = '#2F6FB0'

const serif: CSSProperties = {
  fontFamily: 'var(--font-garamond), "EB Garamond", serif',
  fontWeight: 400,
}
const sans: CSSProperties = {
  fontFamily: 'var(--font-hanken), "Plus Jakarta Sans", sans-serif',
}

/* ---------- primitivas ---------- */

function Rise({ children, delay = 0, style }: { children: ReactNode; delay?: number; style?: CSSProperties }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      style={style}
    >
      {children}
    </motion.div>
  )
}

function Eyebrow({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <p style={{
      ...sans,
      fontSize: '0.62rem',
      letterSpacing: '0.28em',
      textTransform: 'uppercase',
      color: dark ? GREEN_LIGHT : GOLD,
      marginBottom: '1.25rem',
    }}>
      {children}
    </p>
  )
}

function H2({ children, dark, size = 'lg' }: { children: ReactNode; dark?: boolean; size?: 'lg' | 'xl' }) {
  return (
    <h2 style={{
      ...serif,
      fontStyle: 'italic',
      fontSize: size === 'xl' ? 'clamp(2.6rem, 5.5vw, 5rem)' : 'clamp(2.1rem, 4vw, 3.6rem)',
      lineHeight: 1.08,
      color: dark ? INK : CREAM,
      margin: '0 0 1.75rem 0',
    }}>
      {children}
    </h2>
  )
}

function Body({ children, dark, max = '62ch' }: { children: ReactNode; dark?: boolean; max?: string }) {
  return (
    <p style={{
      ...sans,
      fontWeight: 300,
      fontSize: 'clamp(0.92rem, 1.15vw, 1.05rem)',
      lineHeight: 1.78,
      color: dark ? 'rgba(14,42,82,0.68)' : 'rgba(243,241,231,0.62)',
      maxWidth: max,
      margin: 0,
    }}>
      {children}
    </p>
  )
}

function Section({ children, bg, id }: { children: ReactNode; bg: string; id?: string }) {
  return (
    <section id={id} style={{
      background: bg,
      padding: 'clamp(5rem, 11vw, 9.5rem) clamp(1.5rem, 6vw, 7rem)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {children}
      </div>
    </section>
  )
}

/* ---------- header fijo ---------- */

function MpHeader() {
  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 80,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 clamp(1.25rem, 4vw, 3rem)', height: '3.5rem',
      background: 'rgba(14,42,82,0.88)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(242,181,68,0.14)',
    }}>
      <span style={{ ...sans, fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(243,241,231,0.85)', fontWeight: 500 }}>
        Plan Manuel Belgrano <span style={{ color: 'rgba(242,181,68,0.7)', marginLeft: '0.6em' }}>· Masterplan</span>
      </span>
      <span style={{
        ...sans, fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase',
        color: GOLD, border: '1px solid rgba(242,181,68,0.35)', padding: '0.3rem 0.7rem',
      }}>
        Confidencial
      </span>
    </header>
  )
}

/* ---------- 00 · apertura ---------- */

function MpApertura() {
  return (
    <section style={{
      minHeight: '100vh', background: DUSK, position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <img
        src="/hero/frames/f05.jpg"
        alt="Cultivo de cáñamo industrial en la Patagonia"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(to bottom, rgba(7,26,56,0.55), rgba(7,26,56,0.92) 80%)`,
      }} />
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '6rem 1.5rem 4rem', maxWidth: '880px' }}>
        <Rise>
          <Eyebrow>Diseñado para YPF · Junio 2026</Eyebrow>
        </Rise>
        <Rise delay={0.12}>
          <h1 style={{
            ...serif, fontStyle: 'italic',
            fontSize: 'clamp(3.2rem, 8vw, 7rem)', lineHeight: 1.02, color: CREAM, margin: '0 0 2rem 0',
          }}>
            YPF pone primera
            <br />
            en una industria nueva.
          </h1>
        </Rise>
        <Rise delay={0.24}>
          <p style={{
            ...sans, fontWeight: 300, fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)',
            lineHeight: 1.75, color: 'rgba(243,241,231,0.6)', maxWidth: '58ch', margin: '0 auto',
          }}>
            El cáñamo industrial es una industria enorme que todavía no tiene dueño en la
            Argentina. El Plan Manuel Belgrano llega para encajar en la cultura y los
            objetivos de YPF: materiales de construcción y créditos de carbono en la misma
            cuenca que Vaca Muerta. De la semilla a la llave.
          </p>
        </Rise>
        <Rise delay={0.38}>
          <p style={{
            ...sans, fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'rgba(242,181,68,0.6)', marginTop: '3rem',
          }}>
            Flora Cáñamo Neuquino · Neuquén
          </p>
        </Rise>
      </div>
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 2,
        ...sans, fontSize: '0.55rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(243,241,231,0.25)',
      }}>
        scroll
      </div>
    </section>
  )
}

/* ---------- 01 · la oportunidad ---------- */

const OPP_STATS = [
  { value: '40.000', label: 'operadores que suma Vaca Muerta hacia 2031' },
  { value: 'USD 15.000M', label: 'exportación anual de Argentina LNG desde 2030' },
  { value: '30 años', label: 'estabilidad jurídica e impositiva del RIGI para las grandes inversiones' },
  { value: '2027', label: 'inicio de obras — la gente llega antes que la infraestructura' },
]

function MpOportunidad() {
  return (
    <Section bg={CREAM} id="oportunidad">
      <Rise><Eyebrow dark>01 · La oportunidad</Eyebrow></Rise>
      <Rise delay={0.08}>
        <H2 dark size="xl">
          Vaca Muerta va a sumar 40.000 operadores.
          <br />
          Es una ciudad entera llegando a la meseta.
        </H2>
      </Rise>
      <Rise delay={0.16}>
        <Body dark>
          Entre 2027 y 2031, Argentina LNG —el cuarto pilar de YPF— y la expansión de Vaca
          Muerta traen cuarenta mil operadores a la región. No es un pico pasajero: es población
          nueva, permanente, que necesita dónde vivir cerca del pozo — rápido, con calidad y a
          la temperatura del invierno patagónico.
        </Body>
      </Rise>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
        gap: '1px', background: 'rgba(14,42,82,0.12)', border: '1px solid rgba(14,42,82,0.12)',
        margin: '3.5rem 0',
      }}>
        {OPP_STATS.map((s, i) => (
          <Rise key={s.value} delay={0.1 + i * 0.08}>
            <div style={{ background: CREAM, padding: '1.75rem 1.5rem', height: '100%' }}>
              <p style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.7rem, 2.6vw, 2.4rem)', color: INK, margin: '0 0 0.5rem 0', lineHeight: 1 }}>
                {s.value}
              </p>
              <p style={{ ...sans, fontSize: '0.7rem', letterSpacing: '0.06em', color: 'rgba(14,42,82,0.55)', lineHeight: 1.55, margin: 0 }}>
                {s.label}
              </p>
            </div>
          </Rise>
        ))}
      </div>

      <Rise delay={0.2}>
        <div style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: 'clamp(1.25rem, 2.5vw, 2rem)', maxWidth: '760px' }}>
          <p style={{
            ...serif, fontStyle: 'italic', fontSize: 'clamp(1.4rem, 2.4vw, 2.1rem)',
            lineHeight: 1.3, color: INK, margin: '0 0 1rem 0',
          }}>
            El alojamiento es uno de los costos ocultos del yacimiento.
          </p>
          <p style={{ ...sans, fontWeight: 300, fontSize: 'clamp(0.92rem, 1.15vw, 1.05rem)', lineHeight: 1.78, color: 'rgba(14,42,82,0.68)', margin: 0 }}>
            Horas de viaje, campamentos transitorios, rotación: cada operador mal alojado es
            productividad que se paga. Y un déficit de vivienda de esta escala no lo resuelve
            la construcción tradicional, que es lenta, importa materiales y depende del clima.
          </p>
        </div>
      </Rise>
      <Rise delay={0.28}>
        <p style={{
          ...sans, fontWeight: 300, fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)', lineHeight: 1.78,
          color: INK, maxWidth: '62ch', marginTop: '2.25rem',
        }}>
          Ahí está la oportunidad: <strong style={{ fontWeight: 500 }}>producir las viviendas y
          los materiales de ese crecimiento desde la misma cuenca</strong>, con una cadena que
          nace al lado del pozo y emplea a la propia gente que llega.
        </p>
      </Rise>
    </Section>
  )
}

/* ---------- 02 · la solución ---------- */

const SPECS = [
  { value: '0,06–0,12 W/mK', label: 'Conductividad térmica', detail: 'Aislación superior: menos gas quemado en calefacción, invierno patagónico resuelto desde la pared.' },
  { value: 'Clase A', label: 'Resistencia al fuego', detail: 'Material incombustible. Apto para campamentos e instalaciones cercanas a operación.' },
  { value: '250–350 kg/m³', label: 'Densidad', detail: 'Liviano y de comportamiento monolítico. Construcción rápida con mano de obra local certificable.' },
  { value: '+500 años', label: 'Vida útil', detail: 'Norma europea EN 16101. Sistema constructivo usado en más de 50 países.' },
]

type Step = { n: string; img: string; name: string; data: string; carbon?: boolean; end?: boolean }

const CADENA_STEPS: Step[] = [
  { n: '01', img: '01-semilla', name: 'Semilla', data: 'Variedad certificada por ecorregión' },
  { n: '02', img: '02-cultivo', name: 'Cultivo', data: '120 días · captura 10–15 t CO₂/ha', carbon: true },
  { n: '03', img: '03-cosecha', name: 'Cosecha', data: 'Planta entera, sin desperdicio' },
  { n: '04', img: '04-decorticacion', name: 'Decortización', data: 'Separa el shiv (médula) y la fibra' },
  { n: '05', img: '05-mezclado', name: 'Mezclado', data: 'Shiv + aglutinante + agua' },
  { n: '06', img: '06-material', name: 'Material', data: 'Hempcrete: fija 75–165 kg CO₂/m³', carbon: true },
  { n: '07', img: '07-construccion', name: 'Construcción', data: 'Bloque premoldeado o vertido in situ' },
  { n: '08', img: '08-vivienda', name: 'Vivienda', data: 'La llave · +500 años de vida útil', end: true },
]

const BIOCHAR_STEPS: Step[] = [
  { n: 'B1', img: '09-pirolisis', name: 'Pirólisis', data: '~500 °C sin oxígeno, del residuo de fibra y polvo' },
  { n: 'B2', img: '10-biochar', name: 'Biochar', data: 'Carbono estable +1.000 años · crédito BCR', carbon: true },
]

function StepCard({ s }: { s: Step }) {
  return (
    <div style={{ position: 'relative', height: 'clamp(180px, 22vw, 230px)', overflow: 'hidden', border: s.end ? `1px solid ${GREEN_DARK}` : '1px solid rgba(242,181,68,0.18)' }}>
      <img src={`/cadena/${s.img}.jpg`} alt={s.name} loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,26,56,0.94) 0%, rgba(7,26,56,0.4) 55%, rgba(7,26,56,0.12) 100%)' }} />
      <span style={{ position: 'absolute', top: '0.7rem', left: '0.85rem', ...serif, fontStyle: 'italic', fontSize: '1.35rem', color: s.end ? GREEN_DARK : GOLD }}>{s.n}</span>
      {s.carbon && <span style={{ position: 'absolute', top: '0.85rem', right: '0.85rem', ...sans, fontSize: '0.5rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: GREEN_DARK, border: `1px solid ${GREEN_DARK}`, padding: '0.15rem 0.35rem', background: 'rgba(7,26,56,0.55)' }}>CO₂</span>}
      <div style={{ position: 'absolute', left: '0.85rem', right: '0.85rem', bottom: '0.85rem' }}>
        <h3 style={{ ...sans, fontSize: '0.95rem', fontWeight: 600, color: s.end ? GREEN_DARK : CREAM, margin: '0 0 0.25rem 0' }}>{s.name}</h3>
        <p style={{ ...sans, fontWeight: 300, fontSize: '0.7rem', lineHeight: 1.45, color: 'rgba(243,241,231,0.82)', margin: 0 }}>{s.data}</p>
      </div>
    </div>
  )
}

function CadLabel({ children, color }: { children: ReactNode; color: string }) {
  return <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color, margin: '3.5rem 0 1.4rem' }}>{children}</p>
}

function MpCadena() {
  return (
    <Section bg={INK} id="cadena">
      <Rise><Eyebrow>02 · La cadena</Eyebrow></Rise>
      <Rise delay={0.08}>
        <H2 size="xl">De la semilla a la llave — y a una segunda renta.</H2>
      </Rise>
      <Rise delay={0.16}>
        <Body max="68ch">
          Una sola planta abre una cadena industrial completa: cultivo, material de
          construcción (<strong style={{ color: GREEN_DARK, fontWeight: 500 }}>hempcrete</strong>)
          y, del residuo, biochar. Cada paso ocurre en la misma cuenca y es empleo técnico —
          del campo a la vivienda.
        </Body>
      </Rise>

      {/* Cadena principal con foto + overlay */}
      <Rise delay={0.2}><CadLabel color={GOLD}>La cadena principal · ocho pasos</CadLabel></Rise>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '0.75rem' }}>
        {CADENA_STEPS.map((s, i) => (
          <Rise key={s.n} delay={0.05 + i * 0.05}><StepCard s={s} /></Rise>
        ))}
      </div>

      {/* Rama biochar */}
      <Rise delay={0.18}><CadLabel color={GREEN_DARK}>La rama industrial · del residuo al biochar</CadLabel></Rise>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem' }}>
        {BIOCHAR_STEPS.map((s, i) => (
          <Rise key={s.n} delay={0.05 + i * 0.08}><StepCard s={s} /></Rise>
        ))}
      </div>
      <Rise delay={0.2}>
        <p style={{ ...sans, fontWeight: 300, fontSize: '0.82rem', lineHeight: 1.7, color: 'rgba(243,241,231,0.6)', maxWidth: '66ch', marginTop: '1.25rem' }}>
          La fibra corta y el polvo que no van al hempcrete se pirolizan en biochar: una
          segunda línea de créditos de la misma hectárea. EcoGaia ya opera biochar en la
          Argentina.
        </p>
      </Rise>

      {/* El material — hempcrete (SPECS) */}
      <Rise delay={0.18}><CadLabel color={GOLD}>El material · hempcrete</CadLabel></Rise>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 'clamp(1rem, 2vw, 1.5rem)' }}>
        {SPECS.map((s, i) => (
          <Rise key={s.label} delay={0.08 + i * 0.07}>
            <div style={{ background: 'rgba(243,241,231,0.04)', border: '1px solid rgba(242,181,68,0.16)', padding: '1.6rem 1.4rem', height: '100%' }}>
              <p style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.4rem, 2.1vw, 1.9rem)', color: GREEN_DARK, margin: '0 0 0.4rem 0', lineHeight: 1.05 }}>{s.value}</p>
              <p style={{ ...sans, fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: GOLD, margin: '0 0 0.7rem 0' }}>{s.label}</p>
              <p style={{ ...sans, fontWeight: 300, fontSize: '0.76rem', lineHeight: 1.6, color: 'rgba(243,241,231,0.5)', margin: 0 }}>{s.detail}</p>
            </div>
          </Rise>
        ))}
      </div>

      {/* Tecnologías a integrar (TECHS) */}
      <Rise delay={0.18}><CadLabel color={GREEN_DARK}>Tecnologías a integrar — el benchmark evalúa, YPF elige</CadLabel></Rise>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1px', background: 'rgba(242,181,68,0.16)', border: '1px solid rgba(242,181,68,0.16)' }}>
        {TECHS.map((t, i) => (
          <Rise key={t.name} delay={0.06 + i * 0.06}>
            <div style={{ background: INK, padding: '1.5rem 1.4rem', height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '0.7rem', gap: '0.5rem' }}>
                <h3 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.2rem, 1.7vw, 1.5rem)', color: CREAM, margin: 0, lineHeight: 1 }}>{t.name}</h3>
                <span style={{ ...sans, fontSize: '0.52rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: GOLD, whiteSpace: 'nowrap' }}>{t.origin}</span>
              </div>
              <p style={{ ...sans, fontWeight: 300, fontSize: '0.76rem', lineHeight: 1.6, color: 'rgba(243,241,231,0.6)', margin: 0 }}>{t.bring}</p>
            </div>
          </Rise>
        ))}
      </div>

      {/* Dos vías al mercado (VIAS) */}
      <Rise delay={0.18}><CadLabel color={GOLD}>Dos vías para llegar al mercado</CadLabel></Rise>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(1.25rem, 2.5vw, 2rem)' }}>
        {VIAS.map((v, i) => (
          <Rise key={v.tag} delay={0.1 + i * 0.12}>
            <div style={{ background: 'rgba(243,241,231,0.04)', border: '1px solid rgba(242,181,68,0.16)', borderTop: `2px solid ${GOLD}`, padding: 'clamp(1.6rem, 3vw, 2.2rem)', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <p style={{ ...sans, fontSize: '0.56rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: GREEN_DARK, margin: '0 0 0.7rem 0' }}>{v.tag}</p>
              <h3 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.5rem, 2.2vw, 2rem)', color: CREAM, margin: '0 0 0.9rem 0', lineHeight: 1.1 }}>{v.title}</h3>
              <p style={{ ...sans, fontWeight: 300, fontSize: '0.82rem', lineHeight: 1.7, color: 'rgba(243,241,231,0.6)', margin: '0 0 1.25rem 0' }}>{v.body}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 'auto 0 0', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                {v.points.map((pt) => (
                  <li key={pt} style={{ ...sans, fontSize: '0.76rem', lineHeight: 1.5, color: 'rgba(243,241,231,0.6)', paddingLeft: '1.1rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: GREEN_DARK, fontWeight: 700 }}>—</span>{pt}
                  </li>
                ))}
              </ul>
            </div>
          </Rise>
        ))}
      </div>

      {/* Tabla comparativa vs Retak (COMPARACION) */}
      <Rise delay={0.18}><CadLabel color={GREEN_DARK}>El bloque, frente al Retak</CadLabel></Rise>
      <Rise delay={0.2}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '620px' }}>
            <thead>
              <tr>
                {['', 'Bloque hempcrete', 'Bloque Retak · hormigón celular'].map((h, i) => (
                  <th key={i} style={{ ...sans, fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: i === 1 ? GREEN_DARK : 'rgba(243,241,231,0.45)', textAlign: 'left', padding: '0 1rem 0.85rem 0', borderBottom: '1px solid rgba(243,241,231,0.25)', fontWeight: 600 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARACION.map((row) => (
                <tr key={row.attr} style={row.highlight ? { background: 'rgba(91,196,106,0.1)' } : undefined}>
                  <td style={{ ...sans, fontSize: '0.72rem', letterSpacing: '0.04em', color: 'rgba(243,241,231,0.5)', padding: '0.85rem 1rem 0.85rem 0', borderBottom: '1px solid rgba(243,241,231,0.1)', whiteSpace: 'nowrap' }}>{row.attr}</td>
                  <td style={{ ...sans, fontSize: '0.82rem', fontWeight: row.highlight ? 600 : 400, color: row.highlight ? GREEN_DARK : 'rgba(243,241,231,0.85)', padding: '0.85rem 1rem 0.85rem 0', borderBottom: '1px solid rgba(243,241,231,0.1)' }}>
                    {row.hemp}{row.match && <span style={{ ...sans, fontSize: '0.6rem', color: GOLD, marginLeft: '0.5rem', letterSpacing: '0.1em' }}>=</span>}
                  </td>
                  <td style={{ ...sans, fontSize: '0.82rem', fontWeight: 300, color: 'rgba(243,241,231,0.55)', padding: '0.85rem 0', borderBottom: '1px solid rgba(243,241,231,0.1)' }}>{row.retak}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Rise>

      <Rise delay={0.2}>
        <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.03em', color: 'rgba(243,241,231,0.35)', marginTop: '2rem' }}>
          Imágenes: Wikimedia Commons (CC). Algunas son representativas del proceso industrial.
        </p>
      </Rise>
    </Section>
  )
}

/* ---------- 03 · el activo ---------- */

function MpActivo() {
  return (
    <Section bg={PARCHMENT} id="activo">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(2rem, 5vw, 5rem)', alignItems: 'center' }}>
        <div>
          <Rise><Eyebrow dark>03 · El activo</Eyebrow></Rise>
          <Rise delay={0.08}>
            <H2 dark>
              Replicable en cualquier
              <br />
              hectárea que YPF nos ceda.
            </H2>
          </Rise>
          <Rise delay={0.16}>
            <Body dark>
              El plan no depende de un campo en particular: es un modelo que se replica
              igual sobre cualquier superficie que YPF asigne, en cualquier clima y cualquier
              área. La tierra de Mendoza (4.000 ha en Valle de Uco) es la primera prueba; de
              ahí en más, donde YPF lo decida — Mari Menuco, Barreales, Añelo o el lote que
              elija. Cada hectárea cedida se convierte en biomasa, materiales de construcción
              y créditos certificables.
            </Body>
          </Rise>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(14,42,82,0.15)', border: '1px solid rgba(14,42,82,0.15)' }}>
          {[
            { value: '4.000 ha', label: 'Mendoza · Valle de Uco — primera prueba, tierra asegurada' },
            { value: 'Cualquier área', label: 'el modelo se replica igual sobre la tierra que YPF ceda' },
            { value: '50.000 ha', label: 'potencial irrigable de Neuquén a escala plena' },
            { value: '10–15 t CO₂', label: 'captura por hectárea/año, a validar en benchmark' },
          ].map((row, i) => (
            <Rise key={row.value} delay={0.12 + i * 0.08}>
              <div style={{ background: PARCHMENT, padding: '1.5rem 1.75rem', display: 'flex', alignItems: 'baseline', gap: '1.25rem' }}>
                <span style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.6rem, 2.4vw, 2.2rem)', color: INK, lineHeight: 1, minWidth: '7.5rem' }}>
                  {row.value}
                </span>
                <span style={{ ...sans, fontSize: '0.72rem', letterSpacing: '0.05em', color: 'rgba(14,42,82,0.55)', lineHeight: 1.5 }}>
                  {row.label}
                </span>
              </div>
            </Rise>
          ))}
        </div>
      </div>
    </Section>
  )
}

/* ---------- 04 · el plan ---------- */

const NUCLEO = [
  {
    n: '01',
    title: 'Diseño experimental',
    body: 'DBCA generado por IA: diseño en bloques completos al azar con varias variedades por ecorregión. El algoritmo optimiza repeticiones y aleatorización para máxima potencia estadística con la mínima superficie.',
  },
  {
    n: '02',
    title: 'Sensores en parcela · IoT',
    body: 'Humedad y temperatura de suelo, conductividad eléctrica y estación meteo por micro-bloque, con telemetría satelital — el mismo tipo de stack que YPF usa para leer sus tanques en tiempo real.',
  },
  {
    n: '03',
    title: 'Drones multiespectrales',
    body: 'Vuelos periódicos: índices NDVI y NDRE (vigor y clorofila), altura y volumen de biomasa por fotogrametría 3D, mapas de uniformidad parcela por parcela.',
  },
  {
    n: '04',
    title: 'Dashboard en tiempo real',
    body: 'Todo converge en un centro de operaciones espejo del RTIC de YPF: cada micro-parcela, en vivo. YPF ve crecer el activo como ve producir un pozo.',
  },
]

const ROADMAP = [
  {
    title: 'Visión por computadora',
    body: 'Conteo de plantas y germinación, seguimiento fenológico automático y detección temprana de estrés, plagas y enfermedades.',
  },
  {
    title: 'Modelos predictivos + gemelo digital',
    body: 'ML que predice rendimiento y captura por variedad × clima; un gemelo digital para probar decisiones antes de llevarlas al campo.',
  },
  {
    title: 'MRV digital de carbono',
    body: 'Medición directa de flujo de CO₂ y carbono en suelo, lista para certificación (Verra / Gold Standard) cuando el proyecto escale.',
  },
]

const TWO_REGIONS = [
  {
    region: 'Mendoza · Valle de Uco',
    detail: 'Clima templado irrigado · marco regulatorio provincial · validación con universidades',
    land: '4.000 ha aseguradas',
  },
  {
    region: 'Neuquén · a definir con YPF',
    detail: 'Clima árido patagónico · infraestructura Vaca Muerta · validación con universidades',
    land: 'Superficie a elección de YPF',
  },
]

const FASES = [
  {
    tag: 'Fase 1 · Meses 0–18',
    title: 'Benchmark AI-First',
    body: 'Los dos benchmarks en simultáneo, con el núcleo de medición corriendo en cada micro-parcela. Validación científica junto a universidades. El resultado: la variedad campeona por ecorregión, con datos propios.',
  },
  {
    tag: 'Fase 2 · Meses 12–24',
    title: 'Piloto y construcción',
    body: 'Con la biomasa del benchmark: procesamiento, primeros bloques y certificación del sistema constructivo. Las primeras viviendas piloto podrían levantarse en sitios operativos de YPF, para alojar al personal.',
  },
]

function MpPlan() {
  return (
    <Section bg={CREAM} id="plan">
      <Rise><Eyebrow dark>04 · El benchmark</Eyebrow></Rise>
      <Rise delay={0.08}>
        <H2 dark size="xl">
          Vamos a medir un cultivo
          <br />
          como YPF mide un pozo.
        </H2>
      </Rise>
      <Rise delay={0.14}>
        <Body dark max="68ch">
          Filosofía <strong style={{ color: INK }}>AI-First</strong>: medir en tiempo real cada
          variable de cada micro-parcela. Dos benchmarks de cultivo en simultáneo —Mendoza y
          Neuquén— para encontrar la variedad campeona por ecorregión. Es el RTIC de YPF
          aplicado, por primera vez, a un cultivo.
        </Body>
      </Rise>

      {/* Núcleo de medición · Fase 1 */}
      <Rise delay={0.18}>
        <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: GREEN_LIGHT, margin: '3.25rem 0 1.5rem' }}>
          Núcleo de medición · Fase 1
        </p>
      </Rise>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', background: 'rgba(14,42,82,0.12)', border: '1px solid rgba(14,42,82,0.12)' }}>
        {NUCLEO.map((l, i) => (
          <Rise key={l.n} delay={0.08 + i * 0.05}>
            <div style={{ background: CREAM, padding: 'clamp(1.5rem, 2.5vw, 1.9rem)', height: '100%', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
                <span style={{ ...serif, fontStyle: 'italic', fontSize: '1.5rem', color: 'rgba(242,181,68,0.85)', lineHeight: 1 }}>{l.n}</span>
                <h3 style={{ ...sans, fontSize: '0.92rem', fontWeight: 600, color: INK, margin: 0, letterSpacing: '0.01em' }}>{l.title}</h3>
              </div>
              <p style={{ ...sans, fontWeight: 300, fontSize: '0.78rem', lineHeight: 1.6, color: 'rgba(14,42,82,0.6)', margin: 0 }}>{l.body}</p>
            </div>
          </Rise>
        ))}
      </div>

      {/* Hoja de ruta */}
      <Rise delay={0.18}>
        <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(14,42,82,0.5)', margin: '2.5rem 0 1.25rem' }}>
          Lo que la IA permite escalar — hoja de ruta
        </p>
      </Rise>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'clamp(1rem, 2vw, 1.4rem)' }}>
        {ROADMAP.map((l, i) => (
          <Rise key={l.title} delay={0.06 + i * 0.06}>
            <div style={{ background: 'transparent', border: '1px dashed rgba(14,42,82,0.3)', padding: 'clamp(1.4rem, 2.2vw, 1.7rem)', height: '100%' }}>
              <span style={{ ...sans, fontSize: '0.52rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(14,42,82,0.45)', border: '1px solid rgba(14,42,82,0.2)', padding: '0.18rem 0.45rem' }}>Hoja de ruta</span>
              <h3 style={{ ...sans, fontSize: '0.88rem', fontWeight: 600, color: 'rgba(14,42,82,0.85)', margin: '0.8rem 0 0.5rem' }}>{l.title}</h3>
              <p style={{ ...sans, fontWeight: 300, fontSize: '0.76rem', lineHeight: 1.6, color: 'rgba(14,42,82,0.55)', margin: 0 }}>{l.body}</p>
            </div>
          </Rise>
        ))}
      </div>
      <Rise delay={0.2}>
        <p style={{ ...sans, fontWeight: 300, fontSize: '0.8rem', lineHeight: 1.7, color: 'rgba(14,42,82,0.5)', maxWidth: '64ch', marginTop: '1.25rem' }}>
          El núcleo corre desde el primer día. Las capas de la hoja de ruta se incorporan a
          medida que el proyecto crece hacia la certificación y la escala.
        </p>
      </Rise>

      {/* Dos regiones */}
      <Rise delay={0.18}>
        <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: GREEN_LIGHT, margin: '3.5rem 0 1.5rem' }}>
          Dos ecorregiones, el mismo protocolo
        </p>
      </Rise>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(1rem, 2vw, 1.5rem)' }}>
        {TWO_REGIONS.map((r, i) => (
          <Rise key={r.region} delay={0.1 + i * 0.1}>
            <div style={{ background: '#fff', border: '1px solid rgba(14,42,82,0.1)', borderTop: `2px solid ${GOLD}`, padding: 'clamp(1.5rem, 2.5vw, 2rem)', height: '100%' }}>
              <h3 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.4rem, 2vw, 1.8rem)', color: INK, margin: '0 0 0.75rem 0', lineHeight: 1.1 }}>{r.region}</h3>
              <p style={{ ...sans, fontWeight: 300, fontSize: '0.8rem', lineHeight: 1.6, color: 'rgba(14,42,82,0.6)', margin: '0 0 1rem 0' }}>{r.detail}</p>
              <p style={{ ...sans, fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: GREEN_LIGHT, margin: 0 }}>{r.land}</p>
            </div>
          </Rise>
        ))}
      </div>
      <Rise delay={0.2}>
        <p style={{ ...sans, fontWeight: 300, fontSize: '0.82rem', lineHeight: 1.7, color: 'rgba(14,42,82,0.55)', maxWidth: '64ch', marginTop: '1.5rem' }}>
          Correr los dos en paralelo diversifica el riesgo climático, valida directamente el
          territorio de escala de YPF e identifica la genética óptima para cada clima del país.
        </p>
      </Rise>

      {/* Fases */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(1.25rem, 2.5vw, 2rem)', margin: '3.5rem 0 0' }}>
        {FASES.map((f, i) => (
          <Rise key={f.title} delay={0.1 + i * 0.12}>
            <div style={{ background: '#fff', border: '1px solid rgba(14,42,82,0.1)', borderTop: `2px solid ${GOLD}`, padding: 'clamp(1.75rem, 3vw, 2.5rem)', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <p style={{ ...sans, fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: GREEN_LIGHT, margin: '0 0 0.75rem 0' }}>
                {f.tag}
              </p>
              <h3 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.6rem, 2.4vw, 2.1rem)', color: INK, margin: '0 0 1rem 0', lineHeight: 1.1 }}>
                {f.title}
              </h3>
              <p style={{ ...sans, fontWeight: 300, fontSize: '0.85rem', lineHeight: 1.7, color: 'rgba(14,42,82,0.6)', margin: 0 }}>
                {f.body}
              </p>
            </div>
          </Rise>
        ))}
      </div>

      <Rise delay={0.2}>
        <p style={{
          ...sans, fontSize: '0.78rem', letterSpacing: '0.04em', color: 'rgba(14,42,82,0.5)',
          marginTop: '2.25rem', textAlign: 'center', maxWidth: '60ch', marginLeft: 'auto', marginRight: 'auto',
        }}>
          Dos fases, en desembolsos contra hitos verificables. El alcance y los montos se
          definen junto a YPF según las hectáreas y el ritmo acordados.
        </p>
      </Rise>
    </Section>
  )
}

/* ---------- consts compartidos de la cadena (usados por MpCadena) ---------- */

const TECHS = [
  { name: 'Hempire', origin: 'Ucrania', bring: 'Fifth Element Binder: aglutinante 100% natural, sin cemento ni cal. Hempcrete de menor densidad del mundo. Licencia territorial para Argentina disponible.' },
  { name: 'IsoHemp', origin: 'Bélgica', bring: 'El mayor fabricante de bloques premoldeados: 5 millones de bloques al año. Referencia mundial para la vía del premoldeado a escala industrial.' },
  { name: 'Weber Tradical', origin: 'Francia', bring: 'El binder de cal estándar europeo (Grupo Saint-Gobain). La opción probada y certificada para la formulación tradicional.' },
  { name: 'UK Hempcrete', origin: 'Reino Unido', bring: 'Formación hands-on en aplicación in situ, vertido y proyectado. Transferencia de oficio para el equipo constructor.' },
]

const VIAS = [
  {
    tag: 'Vía 1 · Premoldeado',
    title: 'El bloque que reemplaza al Retak.',
    body: 'Producimos el bloque en planta y adoptamos las mismas medidas y el mismo sistema de colocación del bloque aislante tipo Retak. El constructor no cambia su método: cambia el material por uno que aísla mejor y fija carbono.',
    points: [
      'Compite en el segmento del bloque aislante de alto valor, no contra el ladrillo cerámico común',
      'Control de calidad y curado en planta, logística por palet',
      'Entrada directa a la obra tradicional: vivienda, ampliación, barrio',
    ],
  },
  {
    tag: 'Vía 2 · In situ',
    title: 'Vertido o proyectado, directo en obra.',
    body: 'La mezcla se aplica en el lugar: vertida dentro de un encofrado o proyectada con máquina (spray) contra la estructura. Muros monolíticos, sin juntas, con aislación continua.',
    points: [
      'Construcción rápida en escala: campamentos, barrios, ciudades enteras',
      'Menos transporte: la mezcla se elabora en obra con shiv y binder',
      'Muro continuo sin puentes térmicos — el mejor desempeño del sistema',
    ],
  },
]

const COMPARACION = [
  { attr: 'Formato de cara', hemp: '50 × 25 cm', retak: '50 × 25 cm', match: true },
  { attr: 'Espesores', hemp: '7,5 · 10 · 15 · 20 cm', retak: '7,5 · 10 · 15 cm', match: true },
  { attr: 'Colocación', hemp: 'Adhesivo de capa fina · 8 bloques/m²', retak: 'Adhesivo de capa fina · 8 bloques/m²', match: true },
  { attr: 'Densidad', hemp: '250–350 kg/m³', retak: '~450–550 kg/m³' },
  { attr: 'Conductividad térmica (λ)', hemp: '0,06–0,12 W/mK', retak: '~0,10–0,16 W/mK' },
  { attr: 'Resistencia al fuego', hemp: 'Alta — no sostiene combustión', retak: 'Incombustible (A1)' },
  { attr: 'Huella de carbono', hemp: 'Negativa — fija 75–165 kg CO₂/m³', retak: 'Positiva — cemento + cal + autoclave', highlight: true },
  { attr: 'Regulación de humedad', hemp: 'Alta (higroscópico)', retak: 'Media' },
]

/* ---------- 06 · el deal ---------- */

const CONTRATOS = [
  {
    num: 'I',
    title: 'Desarrollo de proveedor estratégico',
    body: 'YPF financia benchmark y piloto en dos desembolsos contra hitos verificables: siembra completada y primer corte de datos; sistema constructivo certificado. El monto se acuerda según el alcance y las hectáreas.',
  },
  {
    num: 'II',
    title: 'Offtake a 5 años',
    body: 'Compromiso de compra de créditos de carbono verificados (Verra VCS / Gold Standard) y de materiales para infraestructura de campamento. El offtake ancla la demanda y habilita el financiamiento privado del resto de la cadena.',
  },
  {
    num: 'III',
    title: 'Exclusividad Neuquén',
    body: 'First right of refusal sobre todos los créditos generados en la provincia. YPF asegura prioridad sobre el activo a medida que la escala crece de 4.000 a 50.000 hectáreas.',
  },
]

function MpDeal() {
  return (
    <Section bg={INK} id="deal">
      <Rise><Eyebrow>05 · El deal</Eyebrow></Rise>
      <Rise delay={0.08}>
        <H2 size="xl">
          El modelo del tren Neuquén–Añelo:
          <br />
          YPF ancla la demanda. El privado invierte.
        </H2>
      </Rise>
      <Rise delay={0.16}>
        <Body>
          YPF viabiliza el proyecto comprometiendo la compra — el capital de riesgo lo pone
          el privado. Tres contratos, cada uno con entregables medibles:
        </Body>
      </Rise>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(242,181,68,0.18)', border: '1px solid rgba(242,181,68,0.18)', margin: '3.25rem 0' }}>
        {CONTRATOS.map((c, i) => (
          <Rise key={c.num} delay={0.1 + i * 0.1}>
            <div style={{ background: INK, padding: 'clamp(1.5rem, 3vw, 2.25rem)', display: 'flex', gap: 'clamp(1.25rem, 3vw, 2.5rem)', alignItems: 'flex-start' }}>
              <span style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', color: 'rgba(242,181,68,0.55)', lineHeight: 1, minWidth: '3rem', textAlign: 'center' }}>
                {c.num}
              </span>
              <div>
                <h3 style={{ ...sans, fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)', fontWeight: 500, color: CREAM, margin: '0 0 0.6rem 0', letterSpacing: '0.02em' }}>
                  {c.title}
                </h3>
                <p style={{ ...sans, fontWeight: 300, fontSize: '0.85rem', lineHeight: 1.7, color: 'rgba(243,241,231,0.5)', margin: 0, maxWidth: '68ch' }}>
                  {c.body}
                </p>
              </div>
            </div>
          </Rise>
        ))}
      </div>

      <Rise delay={0.2}>
        <p style={{ ...sans, fontWeight: 300, fontSize: '0.85rem', lineHeight: 1.7, color: 'rgba(243,241,231,0.45)', maxWidth: '70ch' }}>
          La estructura replica la que YPF ya usa para viabilizar infraestructura con inversión
          privada: compromiso de contratación que baja el riesgo, privado que ejecuta, y un
          activo que queda operando para la cuenca.
        </p>
      </Rise>
    </Section>
  )
}

/* ---------- 07 · el encaje en YPF ---------- */

const PATAS = [
  {
    n: '01', verb: 'Reducir', what: 'Emitir menos en cada operación',
    detail: 'Su palanca principal. Programas LDAR de detección y reparación de fugas, fin de la quema rutinaria de antorcha a 2030 y metano −30% vs 2021. Ya cumplió —anticipado, en 2023— la meta de −30% de intensidad de emisiones vs 2017, y prioriza cada proyecto con su curva MACC.',
    tag: 'YPF · activo', unit: 'Upstream + Downstream', ypf: true,
  },
  {
    n: '02', verb: 'Evitar', what: 'Sustituir por energía más limpia',
    detail: 'El 55% de su electricidad ya es renovable (meta 50% a 2026) a través de YPF Luz. Suma el gas de Vaca Muerta como la energía de menor carbono y biocombustibles en naftas y diésel.',
    tag: 'YPF · activo', unit: 'YPF Luz · Nuevas Energías', ypf: true,
  },
  {
    n: '03', verb: 'Capturar', what: 'Recuperar lo que se ventea',
    detail: 'Recupera gas venteado con nuevas conexiones y ductos, comprime con motores eléctricos y explora captura y almacenamiento. Es la palanca más cara de su curva.',
    tag: 'YPF · activo', unit: 'Operaciones · Y-TEC', ypf: true,
  },
  {
    n: '04', verb: 'Regenerar', what: 'Remover carbono de la atmósfera',
    detail: 'Hasta hoy quedó vacía: la ambición Net Zero de YPF cubre solo Alcance 1+2, y su jerarquía de mitigación termina en «compensar», el escalón que todavía no opera. Lo que hace en naturaleza —plantar árboles nativos, rehabilitar áreas— es biodiversidad, no remoción de carbono a escala. El cáñamo → hempcrete y biochar sí lo es, lista para arrancar.',
    tag: 'Propuesta', unit: 'Plan Manuel Belgrano', ypf: false,
  },
]

const APOYOS = ['Nuevas Energías', 'Y-TEC', 'YPF Luz', 'YPF Agro', 'Fundación YPF + Instituto Vaca Muerta', 'EcoGaia']

function MpEncaje() {
  return (
    <Section bg={CREAM} id="encaje">
      <Rise><Eyebrow dark>06 · El encaje en YPF</Eyebrow></Rise>
      <Rise delay={0.08}>
        <H2 dark size="xl">Las cuatro palancas del net-zero de YPF.</H2>
      </Rise>
      <Rise delay={0.14}>
        <Body dark max="68ch">
          Leímos el Reporte de Sustentabilidad 2024 de YPF. La compañía descarboniza con
          una curva MACC y tres palancas activas. La cuarta —regenerar— es la que todavía
          no tiene quién la opere. Acá, cada etapa con lo que YPF ya hace.
        </Body>
      </Rise>

      <div style={{ margin: '3rem 0 0', border: '1px solid rgba(14,42,82,0.12)' }}>
        {PATAS.map((p, i) => (
          <Rise key={p.n} delay={0.06 + i * 0.07}>
            <div style={{
              display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '0.5rem',
              background: p.ypf ? '#fff' : 'rgba(91,196,106,0.08)',
              borderTop: i === 0 ? 'none' : `1px solid rgba(14,42,82,0.12)`,
              borderLeft: `3px solid ${p.ypf ? GREEN_LIGHT : GREEN_DARK}`,
              padding: 'clamp(1.4rem, 2.5vw, 2rem)',
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'clamp(1rem, 3vw, 2.5rem)', alignItems: 'start' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
                    <span style={{ ...serif, fontStyle: 'italic', fontSize: '1.2rem', color: p.ypf ? 'rgba(14,42,82,0.4)' : GREEN_DARK }}>{p.n}</span>
                    <h3 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.7rem, 2.6vw, 2.3rem)', color: p.ypf ? INK : '#2f8f3a', margin: 0, lineHeight: 1 }}>{p.verb}</h3>
                  </div>
                  <p style={{ ...sans, fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: GREEN_LIGHT, margin: '0.6rem 0 0.9rem' }}>{p.what}</p>
                  <span style={{
                    ...sans, fontSize: '0.56rem', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 600,
                    color: p.ypf ? GREEN_LIGHT : '#2f8f3a',
                    border: `1px solid ${p.ypf ? 'rgba(47,111,176,0.4)' : GREEN_DARK}`, padding: '0.25rem 0.55rem',
                  }}>
                    {p.ypf ? '✓ ' : '◆ '}{p.tag}
                  </span>
                  <p style={{ ...sans, fontSize: '0.66rem', color: 'rgba(14,42,82,0.5)', marginTop: '0.6rem', letterSpacing: '0.02em' }}>{p.unit}</p>
                </div>
                <p style={{ ...sans, fontWeight: 300, fontSize: '0.86rem', lineHeight: 1.7, color: 'rgba(14,42,82,0.7)', margin: 0 }}>{p.detail}</p>
              </div>
            </div>
          </Rise>
        ))}
      </div>

      {/* Cita textual del reporte */}
      <Rise delay={0.2}>
        <blockquote style={{ margin: '2.5rem 0 0', borderLeft: `3px solid ${GOLD}`, paddingLeft: 'clamp(1.25rem, 2.5vw, 2rem)', maxWidth: '720px' }}>
          <p style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.3rem, 2.2vw, 1.9rem)', lineHeight: 1.35, color: INK, margin: '0 0 0.75rem 0' }}>
            “Buscar oportunidades de soluciones basadas en la naturaleza que cumplan con
            criterios ambientales y sociales sólidos.”
          </p>
          <footer style={{ ...sans, fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(14,42,82,0.45)' }}>
            Reporte de Sustentabilidad YPF · 2024
          </footer>
        </blockquote>
      </Rise>
      <Rise delay={0.26}>
        <p style={{ ...sans, fontWeight: 300, fontSize: '0.9rem', lineHeight: 1.7, color: INK, maxWidth: '64ch', marginTop: '1.75rem' }}>
          Lo escribió YPF. El Plan Manuel Belgrano es exactamente eso: una solución basada
          en la naturaleza, lista para operar — y la única palanca que <strong style={{ fontWeight: 500 }}>remueve
          CO₂ de la atmósfera</strong>, a un costo por debajo de la captura industrial.
        </p>
      </Rise>

      {/* Scope 3 — el grueso sin palanca */}
      <Rise delay={0.3}>
        <div style={{ background: '#fff', border: '1px solid rgba(14,42,82,0.12)', borderLeft: `3px solid ${GREEN_DARK}`, padding: 'clamp(1.5rem, 3vw, 2.25rem)', marginTop: '2.5rem' }}>
          <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: GREEN_LIGHT, margin: '0 0 0.75rem 0' }}>
            Lo que agranda la oportunidad
          </p>
          <p style={{ ...sans, fontWeight: 300, fontSize: 'clamp(0.92rem, 1.2vw, 1.05rem)', lineHeight: 1.75, color: 'rgba(14,42,82,0.72)', margin: 0, maxWidth: '70ch' }}>
            La meta Net Zero de YPF cubre solo Alcance 1+2. El <strong style={{ color: INK, fontWeight: 500 }}>Alcance 3
            —la combustión de los combustibles que vende, el grueso de su huella</strong>— no tiene
            ninguna palanca que lo baje. Reducir, evitar y capturar no lo alcanzan: solo la remoción
            puede compensarlo. Ahí es donde una pata regenerativa deja de ser un complemento y pasa
            a ser la única respuesta posible.
          </p>
        </div>
      </Rise>

      {/* Puntos de apoyo */}
      <Rise delay={0.24}>
        <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: GREEN_LIGHT, margin: '3rem 0 1.1rem' }}>
          Puntos de apoyo posibles, sin crear estructura nueva
        </p>
      </Rise>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
        {APOYOS.map((a, i) => (
          <Rise key={a} delay={0.06 + i * 0.05}>
            <span style={{ ...sans, fontSize: '0.74rem', color: 'rgba(14,42,82,0.7)', border: '1px solid rgba(14,42,82,0.18)', padding: '0.5rem 0.9rem', display: 'inline-block' }}>{a}</span>
          </Rise>
        ))}
      </div>

      <Rise delay={0.2}>
        <p style={{ ...sans, fontWeight: 300, fontSize: '0.82rem', lineHeight: 1.7, color: 'rgba(14,42,82,0.5)', maxWidth: '62ch', marginTop: '2rem' }}>
          Todo esto es para explorar y ajustar en conjunto. La idea es simple: que la cuarta
          pata se apoye en lo que YPF ya tiene, sin pedirle que construya nada nuevo.
        </p>
      </Rise>
    </Section>
  )
}

/* ---------- 06 · el upside ---------- */

const SENSIBILIDAD = [
  { escenario: 'Mercado voluntario · nature-based', precio: 'USD 30/t', fase1: 'USD 1,2M/año', escala: 'USD 15M/año' },
  { escenario: 'Cumplimiento europeo · EU ETS', precio: 'USD 75/t', fase1: 'USD 3,0M/año', escala: 'USD 37,5M/año' },
  { escenario: 'Remoción durable · biochar (BCR–Puro)', precio: 'USD 164/t', fase1: 'USD 6,6M/año', escala: 'USD 82M/año' },
]

const DIFERENCIAS = [
  { t: 'Evitación', price: 'USD 5–30/t', body: 'Se paga por NO emitir: no deforestar, capturar metano. Lo más barato — y lo más cuestionado, porque es reversible y difícil de probar.' },
  { t: 'Remoción', price: 'USD 50–150/t', body: 'Se saca CO₂ de la atmósfera y se almacena. Más caro y mucho más valorado: es lo que el mercado serio busca.' },
  { t: 'Remoción durable (la nuestra)', price: 'USD 100–200/t', body: 'Remoción que dura: hempcrete +500 años, biochar +1.000. La categoría premium del mercado (durable CDR), certificable y trazable.', ours: true },
]

function MpUpside() {
  return (
    <Section bg={PARCHMENT} id="upside">
      <Rise><Eyebrow dark>07 · El upside</Eyebrow></Rise>
      <Rise delay={0.08}>
        <H2 dark>
          No todos los créditos valen lo mismo.
          <br />
          Los nuestros son los que más se pagan.
        </H2>
      </Rise>
      <Rise delay={0.16}>
        <Body dark max="72ch">
          El cáñamo produce <strong style={{ color: INK, fontWeight: 500 }}>créditos de remoción
          durable</strong>: el carbono que la planta capta queda fijado en la pared (hempcrete)
          y en el suelo (biochar) por siglos. Es la categoría más valorada del mercado. Sacar
          CO₂ del aire con máquinas —captura directa— cuesta hoy entre USD 340 y 1.900 por
          tonelada; nosotros lo fijamos con margen positivo, porque además vendemos el material.
        </Body>
      </Rise>

      {/* Cómo se calcula */}
      <Rise delay={0.18}>
        <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: GREEN_LIGHT, margin: '3rem 0 1.25rem' }}>
          Cómo se calcula el ingreso por carbono
        </p>
      </Rise>
      <Rise delay={0.2}>
        <div style={{ background: '#fff', border: '1px solid rgba(14,42,82,0.12)', padding: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'stretch', gap: '0.6rem' }}>
            {[
              { v: '10–15 t CO₂', l: 'captura por hectárea / año' },
              { op: '×' },
              { v: 'hectáreas', l: 'la tierra que YPF ceda' },
              { op: '×' },
              { v: 'USD / t', l: 'precio del crédito' },
              { op: '=' },
              { v: 'ingreso anual', l: 'recurrente', res: true },
            ].map((x, i) => x.op ? (
              <span key={i} style={{ ...serif, fontStyle: 'italic', fontSize: '1.6rem', color: GOLD, alignSelf: 'center' }}>{x.op}</span>
            ) : (
              <div key={i} style={{ flex: '1 1 130px', background: x.res ? 'rgba(91,196,106,0.1)' : 'rgba(14,42,82,0.04)', border: `1px solid ${x.res ? GREEN_DARK : 'rgba(14,42,82,0.1)'}`, padding: '0.9rem 1rem' }}>
                <p style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1rem, 1.5vw, 1.3rem)', color: x.res ? '#2f8f3a' : INK, margin: '0 0 0.2rem 0', lineHeight: 1.1 }}>{x.v}</p>
                <p style={{ ...sans, fontSize: '0.62rem', color: 'rgba(14,42,82,0.5)', margin: 0, lineHeight: 1.3 }}>{x.l}</p>
              </div>
            ))}
          </div>
          <p style={{ ...sans, fontWeight: 300, fontSize: '0.82rem', lineHeight: 1.6, color: 'rgba(14,42,82,0.7)', marginTop: '1.5rem' }}>
            <strong style={{ color: INK, fontWeight: 500 }}>Ejemplo:</strong> 4.000 ha × 10 t CO₂/ha × USD 75/t (precio europeo) = <strong style={{ color: '#2f8f3a', fontWeight: 600 }}>USD 3,0M por año</strong>. El volumen lo valida el benchmark con mediciones propias; lo único que cambia entre escenarios es el precio del crédito.
          </p>
        </div>
      </Rise>

      {/* Las diferencias entre créditos */}
      <Rise delay={0.18}>
        <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: GREEN_LIGHT, margin: '3rem 0 1.25rem' }}>
          Por qué no todos los créditos valen igual
        </p>
      </Rise>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'clamp(1rem, 2vw, 1.4rem)' }}>
        {DIFERENCIAS.map((d, i) => (
          <Rise key={d.t} delay={0.08 + i * 0.08}>
            <div style={{ background: d.ours ? 'rgba(91,196,106,0.08)' : '#fff', border: `1px solid ${d.ours ? GREEN_DARK : 'rgba(14,42,82,0.12)'}`, borderTop: `2px solid ${d.ours ? GREEN_DARK : 'rgba(14,42,82,0.2)'}`, padding: 'clamp(1.4rem, 2.5vw, 1.8rem)', height: '100%' }}>
              <h3 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.3rem, 1.9vw, 1.6rem)', color: d.ours ? '#2f8f3a' : INK, margin: '0 0 0.3rem 0', lineHeight: 1.1 }}>{d.t}</h3>
              <p style={{ ...sans, fontSize: '0.66rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: GOLD, margin: '0 0 0.8rem 0' }}>{d.price}</p>
              <p style={{ ...sans, fontWeight: 300, fontSize: '0.8rem', lineHeight: 1.6, color: 'rgba(14,42,82,0.65)', margin: 0 }}>{d.body}</p>
            </div>
          </Rise>
        ))}
      </div>

      {/* Tabla de sensibilidad */}
      <Rise delay={0.18}>
        <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: GREEN_LIGHT, margin: '3rem 0 0' }}>
          Cuánto vale, a precios reales de mercado
        </p>
      </Rise>
      <Rise delay={0.2}>
        <div style={{ margin: '1.25rem 0 0', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '560px' }}>
            <thead>
              <tr>
                {['Escenario de precio', 'USD/tCO₂e', 'Fase 1 · 4.000 ha', 'Escala · 50.000 ha'].map((h) => (
                  <th key={h} style={{
                    ...sans, fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase',
                    color: 'rgba(14,42,82,0.45)', textAlign: 'left', padding: '0 1rem 0.85rem 0',
                    borderBottom: '1px solid rgba(14,42,82,0.25)', fontWeight: 500,
                  }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SENSIBILIDAD.map((row, i) => (
                <tr key={row.escenario}>
                  <td style={{ ...sans, fontSize: '0.82rem', color: 'rgba(14,42,82,0.7)', padding: '1rem 1rem 1rem 0', borderBottom: '1px solid rgba(14,42,82,0.12)' }}>
                    {row.escenario}
                  </td>
                  <td style={{ ...serif, fontStyle: 'italic', fontSize: '1.15rem', color: INK, padding: '1rem 1rem 1rem 0', borderBottom: '1px solid rgba(14,42,82,0.12)' }}>
                    {row.precio}
                  </td>
                  <td style={{ ...sans, fontSize: '0.85rem', color: 'rgba(14,42,82,0.7)', padding: '1rem 1rem 1rem 0', borderBottom: '1px solid rgba(14,42,82,0.12)' }}>
                    {row.fase1}
                  </td>
                  <td style={{ ...sans, fontSize: '0.85rem', fontWeight: i === SENSIBILIDAD.length - 1 ? 500 : 300, color: i === SENSIBILIDAD.length - 1 ? GREEN_LIGHT : 'rgba(14,42,82,0.7)', padding: '1rem 0', borderBottom: '1px solid rgba(14,42,82,0.12)' }}>
                    {row.escala}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Rise>
      <Rise delay={0.2}>
        <p style={{ ...sans, fontSize: '0.66rem', letterSpacing: '0.03em', color: 'rgba(14,42,82,0.5)', marginTop: '0.85rem' }}>
          Precios 2025: mercado voluntario nature-based (USD 5–50/t); EU ETS, mercado de
          cumplimiento europeo (~USD 60–90/t); remoción durable de biochar (BCR / registro
          Puro), promedio USD 164/t. Volumen base 10 t CO₂/ha/año, conservador; el benchmark
          mide el real. Como referencia interna, YPF testea sus propios proyectos a un precio
          sombra de USD 55/t (Reporte 2024).
        </p>
      </Rise>

      <Rise delay={0.22}>
        <div style={{ borderLeft: `2px solid ${GOLD}`, paddingLeft: '1.25rem', maxWidth: '72ch', marginTop: '2rem' }}>
          <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(14,42,82,0.45)', margin: '0 0 0.5rem 0' }}>
            Por qué a precio de mercado y no a precio sombra
          </p>
          <p style={{ ...sans, fontWeight: 300, fontSize: '0.85rem', lineHeight: 1.65, color: 'rgba(14,42,82,0.65)', margin: 0 }}>
            El precio sombra es lo que YPF estaría dispuesta a pagar para evitar una tonelada
            —una herramienta interna de decisión—, no lo que se recibe por vender el crédito.
            Para estimar el ingreso usamos el precio real al que se transan los créditos de
            remoción durable, que es la categoría de lo que producimos.
          </p>
        </div>
      </Rise>

      {/* El socio de certificación — EcoGaia */}
      <Rise delay={0.36}>
        <div style={{
          marginTop: 'clamp(2.5rem, 5vw, 3.5rem)', background: '#fff',
          border: '1px solid rgba(14,42,82,0.1)', borderTop: `2px solid ${GREEN_LIGHT}`,
          padding: 'clamp(1.75rem, 3vw, 2.5rem)',
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'clamp(1.5rem, 3vw, 2.5rem)', alignItems: 'start' }}>
            <div>
              <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: GREEN_LIGHT, margin: '0 0 0.9rem 0' }}>
                El socio de certificación
              </p>
              <h3 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(2rem, 3vw, 2.8rem)', color: GREEN_LIGHT, margin: '0 0 0.5rem 0', lineHeight: 1 }}>
                EcoGaia
              </h3>
              <p style={{ ...sans, fontSize: '0.66rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(14,42,82,0.45)', margin: 0 }}>
                Desarrolladora y certificadora de créditos de carbono · Argentina
              </p>
            </div>
            <p style={{ ...sans, fontWeight: 300, fontSize: '0.88rem', lineHeight: 1.75, color: 'rgba(14,42,82,0.65)', margin: 0 }}>
              EcoGaia hace el ciclo completo del crédito de carbono —originación, viabilidad,
              diseño, validación, financiamiento y venta— bajo los estándares Verra y Gold
              Standard. Ya opera proyectos de biochar y agricultura regenerativa en la Argentina,
              con créditos emitidos por el registro Puro. Para el plan es el socio que lleva los
              créditos —de cultivo y de biochar— del campo al mercado, y deja la trazabilidad
              lista para el offtake con YPF.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', borderTop: '1px solid rgba(14,42,82,0.1)', marginTop: '1.75rem', paddingTop: '1.5rem' }}>
            {[
              'Ciclo completo del crédito · 6 pasos',
              'Verra · Gold Standard · registro Puro',
              'Biochar + agricultura regenerativa en Argentina',
              'Offtake vigente con Altitude · 165.000 t CO₂',
            ].map((c) => (
              <span key={c} style={{ ...sans, fontSize: '0.7rem', color: 'rgba(14,42,82,0.65)', border: '1px solid rgba(14,42,82,0.18)', padding: '0.45rem 0.85rem' }}>{c}</span>
            ))}
          </div>
        </div>
      </Rise>
    </Section>
  )
}

/* ---------- 09 · la segunda línea · biochar ---------- */

const BIOCHAR = [
  { value: '~2,5 t', unit: 'CO₂e por tonelada de biochar', detail: 'Remoción que la pirólisis fija en una forma estable de carbono.' },
  { value: '+1.000', unit: 'años de permanencia', detail: 'El carbono queda bloqueado en el suelo, sin reversión.' },
  { value: 'USD 164', unit: 'por crédito BCR (referencia)', detail: 'Precio de mercado del Biochar Carbon Removal, registro Puro.' },
  { value: 'EBC', unit: 'European Biochar Certificate', detail: 'El estándar internacional que verifica calidad y permanencia.' },
]

function MpBiochar() {
  return (
    <Section bg={INK} id="biochar">
      <Rise><Eyebrow>08 · La segunda línea</Eyebrow></Rise>
      <Rise delay={0.08}>
        <H2 size="xl">El residuo también es un activo.</H2>
      </Rise>
      <Rise delay={0.14}>
        <Body max="66ch">
          La planta deja residuos: la fibra corta y el polvo de shiv que no van al hempcrete.
          La pirólisis los convierte en <strong style={{ color: GREEN_DARK, fontWeight: 500 }}>biochar</strong> —
          un carbón vegetal estable que bloquea carbono por más de mil años y mejora el suelo.
          De la misma hectárea sale una segunda línea de créditos, con mercado y compradores
          activos: Microsoft, Shell y Google entre ellos.
        </Body>
      </Rise>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1px', background: 'rgba(242,181,68,0.16)', border: '1px solid rgba(242,181,68,0.16)', margin: '3.25rem 0 0' }}>
        {BIOCHAR.map((b, i) => (
          <Rise key={b.unit} delay={0.08 + i * 0.08}>
            <div style={{ background: INK, padding: 'clamp(1.5rem, 2.5vw, 1.9rem)', height: '100%' }}>
              <p style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.8rem, 2.8vw, 2.5rem)', color: GREEN_DARK, margin: '0 0 0.3rem 0', lineHeight: 1 }}>{b.value}</p>
              <p style={{ ...sans, fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD, margin: '0 0 0.7rem 0' }}>{b.unit}</p>
              <p style={{ ...sans, fontWeight: 300, fontSize: '0.76rem', lineHeight: 1.6, color: 'rgba(243,241,231,0.55)', margin: 0 }}>{b.detail}</p>
            </div>
          </Rise>
        ))}
      </div>

      <Rise delay={0.2}>
        <p style={{ ...sans, fontWeight: 300, fontSize: '0.88rem', lineHeight: 1.75, color: 'rgba(243,241,231,0.6)', maxWidth: '66ch', marginTop: '2rem' }}>
          Es terreno conocido para nuestro socio de certificación:
          <strong style={{ color: GREEN_DARK, fontWeight: 500 }}> EcoGaia ya opera biochar en la Argentina</strong> con
          créditos por el registro Puro. La segunda línea no hay que inventarla — hay que sumarla.
        </p>
      </Rise>
    </Section>
  )
}

/* ---------- 07 · la ventana ---------- */

const VENTANA_ROWS = [
  {
    year: '2026',
    pmb: ['Firma del acuerdo y siembra del benchmark (Neuquén + Mendoza)', 'Acuerdo de certificación con EcoGaia', 'Núcleo de medición AI-First en marcha'],
    ypf: ['50% de electricidad comprada renovable', 'Metano −10% vs 2021', 'FID de Argentina LNG (objetivo de fin de año)'],
  },
  {
    year: '2027',
    pmb: ['Variedad campeona por ecorregión: primer corte de datos', 'Primeros bloques del piloto de hempcrete'],
    ypf: ['Inicio de obras de Argentina LNG', 'Vaca Muerta Sur: primera exportación de crudo', '70% de combustibles ultrabajos en azufre'],
  },
  {
    year: '2028',
    pmb: ['Viviendas piloto construidas', 'Sistema constructivo certificado', 'Primeros créditos de carbono verificados'],
    ypf: ['Inicio de distribución de dividendos', 'Construcción de la planta de GNL'],
  },
  {
    year: '2029–30',
    pmb: ['Escala: sociedades agrícolas + planta de procesamiento', 'Segunda línea de biochar en producción', 'Barrios y campamentos en hempcrete'],
    ypf: ['Cero quema rutinaria de antorcha', 'Metano −30% vs 2021', 'Intensidad <10 kgCO₂e/BEP en Upstream NOC'],
  },
  {
    year: '2031',
    pmb: ['Créditos de carbono a escala (USD 15–82M/año según mercado)', 'La huella del GNL, acompañada con remoción propia'],
    ypf: ['Primeras exportaciones de Argentina LNG', 'Exportaciones energéticas hacia USD 30.000M+/año'],
  },
]

function RoadCol({ items, side, stacked }: { items: string[]; side: 'pmb' | 'ypf'; stacked?: boolean }) {
  const isPmb = side === 'pmb'
  const accent = isPmb ? GREEN_DARK : GOLD
  const right = isPmb && !stacked
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', textAlign: right ? 'right' : 'left' }}>
      {items.map((t) => (
        <li key={t} style={{ ...sans, fontWeight: 300, fontSize: 'clamp(0.78rem, 0.95vw, 0.85rem)', lineHeight: 1.5, color: 'rgba(243,241,231,0.72)', position: 'relative', [right ? 'paddingRight' : 'paddingLeft']: '0.85rem' } as CSSProperties}>
          <span style={{ position: 'absolute', [right ? 'right' : 'left']: 0, top: '0.35em', width: '4px', height: '4px', background: accent, borderRadius: '50%' } as CSSProperties} />
          {t}
        </li>
      ))}
    </ul>
  )
}

function MpVentana() {
  const narrow = useNarrow()
  return (
    <Section bg={DUSK} id="ventana">
      <Rise><Eyebrow>09 · La ventana 2026–2031</Eyebrow></Rise>
      <Rise delay={0.08}>
        <H2>Nuestro roadmap corre al lado del de YPF.</H2>
      </Rise>
      <Rise delay={0.14}>
        <Body max="64ch">
          Cada hito del plan acompaña un hito real de YPF — sus propias metas del Reporte 2024
          y del Plan Argentina LNG. Dos columnas, una sola ventana de tiempo.
        </Body>
      </Rise>

      {narrow ? (
        /* ---- Mobile: apilado (año → PMB → YPF) ---- */
        <div style={{ marginTop: '2.5rem' }}>
          {VENTANA_ROWS.map((r, i) => (
            <Rise key={r.year} delay={0.05 + i * 0.06}>
              <div style={{ padding: '1.75rem 0', borderTop: '1px solid rgba(243,241,231,0.1)' }}>
                <span style={{ ...serif, fontStyle: 'italic', fontSize: '2rem', color: i === VENTANA_ROWS.length - 1 ? GREEN_DARK : GOLD, lineHeight: 1, display: 'block', marginBottom: '1.1rem' }}>{r.year}</span>
                <p style={{ ...sans, fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: GREEN_DARK, fontWeight: 600, margin: '0 0 0.6rem 0' }}>Plan Manuel Belgrano</p>
                <RoadCol items={r.pmb} side="pmb" stacked />
                <p style={{ ...sans, fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: GOLD, fontWeight: 600, margin: '1.1rem 0 0.6rem 0' }}>YPF</p>
                <RoadCol items={r.ypf} side="ypf" stacked />
              </div>
            </Rise>
          ))}
        </div>
      ) : (
        /* ---- Desktop: side-by-side ---- */
        <>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) clamp(3.5rem, 9vw, 6rem) minmax(0,1fr)', alignItems: 'center', margin: '2.75rem 0 0', paddingBottom: '0.9rem', borderBottom: '1px solid rgba(243,241,231,0.12)' }}>
            <span style={{ ...sans, fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: GREEN_DARK, fontWeight: 600, textAlign: 'right' }}>Plan Manuel Belgrano</span>
            <span />
            <span style={{ ...sans, fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: GOLD, fontWeight: 600, textAlign: 'left' }}>YPF</span>
          </div>
          {VENTANA_ROWS.map((r, i) => (
            <Rise key={r.year} delay={0.06 + i * 0.07}>
              <div style={{
                display: 'grid', gridTemplateColumns: 'minmax(0,1fr) clamp(3.5rem, 9vw, 6rem) minmax(0,1fr)',
                alignItems: 'start', gap: 'clamp(0.5rem, 2vw, 1.5rem)',
                padding: 'clamp(1.5rem, 2.5vw, 2rem) 0', borderBottom: '1px solid rgba(243,241,231,0.08)',
              }}>
                <RoadCol items={r.pmb} side="pmb" />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <span style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', color: CREAM, lineHeight: 1, whiteSpace: 'nowrap', borderTop: `2px solid ${i === VENTANA_ROWS.length - 1 ? GREEN_DARK : 'rgba(242,181,68,0.5)'}`, paddingTop: '0.5rem' }}>{r.year}</span>
                </div>
                <RoadCol items={r.ypf} side="ypf" />
              </div>
            </Rise>
          ))}
        </>
      )}

      <Rise delay={0.2}>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '1.5rem 0 0' }}>
          <span style={{ ...sans, fontSize: '0.66rem', letterSpacing: '0.06em', color: 'rgba(243,241,231,0.45)' }}>
            2050 — Ambición de YPF: Net Zero en Alcance 1+2
          </span>
        </div>
      </Rise>
      <Rise delay={0.26}>
        <p style={{ ...sans, fontWeight: 300, fontSize: 'clamp(0.92rem, 1.15vw, 1.05rem)', lineHeight: 1.78, color: 'rgba(243,241,231,0.6)', maxWidth: '62ch', marginTop: '2rem' }}>
          A cada paso, el plan le entrega a YPF un activo que ya está operando: datos,
          material certificado, créditos verificados y viviendas en pie.
        </p>
      </Rise>
    </Section>
  )
}

/* ---------- 08 · la visión (ciudades de cáñamo) ---------- */

// Render de la ciudad de hempcrete. Reemplazar por el render bespoke de Higgsfield/OGA
// apenas haya créditos: una sola URL para swapear.
const VISION_IMG = '/hero/frames/f09.jpg'

function MpVision() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: DUSK, minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <img
        src={VISION_IMG}
        alt="Visión: ciudades argentinas construidas en cáñamo y hempcrete"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(7,26,56,0.6) 0%, rgba(7,26,56,0.88) 70%, rgba(7,26,56,0.97) 100%)',
      }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1120px', margin: '0 auto', padding: 'clamp(5rem, 11vw, 9rem) clamp(1.5rem, 6vw, 7rem)', width: '100%' }}>
        <Rise>
          <blockquote style={{ margin: '0 0 3rem', borderLeft: `3px solid ${GOLD}`, paddingLeft: 'clamp(1.25rem, 2.5vw, 2rem)', maxWidth: '760px' }}>
            <p style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.4rem, 2.4vw, 2.1rem)', lineHeight: 1.3, color: CREAM, margin: '0 0 0.75rem 0' }}>
              “A Neuquén se van a venir a vivir un millón de personas.”
            </p>
            <footer style={{ ...sans, fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(242,181,68,0.65)' }}>
              Federico Sturzenegger · Ministro de Desregulación · 2025
            </footer>
          </blockquote>
        </Rise>

        <Rise delay={0.1}>
          <Eyebrow>10 · La visión</Eyebrow>
        </Rise>
        <Rise delay={0.16}>
          <h2 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', lineHeight: 1.04, color: CREAM, margin: '0 0 1.75rem 0', maxWidth: '16ch' }}>
            Ciudades de cáñamo, de punta a punta del país.
          </h2>
        </Rise>
        <Rise delay={0.24}>
          <p style={{ ...sans, fontWeight: 300, fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)', lineHeight: 1.8, color: 'rgba(243,241,231,0.65)', maxWidth: '64ch' }}>
            Si a Neuquén llega un millón de personas, la pregunta no es solo dónde duermen:
            es qué construye su economía. El hempcrete convierte cualquier hectárea cultivable
            de la Argentina en viviendas, barrios y ciudades enteras — y en una fuente de
            trabajo inagotable para cualquier argentino, en cada eslabón de la cadena, del
            campo a la llave.
          </p>
        </Rise>

        <Rise delay={0.05}>
          <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: GOLD, margin: '3rem 0 0.9rem' }}>
            Visión a 2035 · Neuquén a escala plena
          </p>
        </Rise>
        <Rise delay={0.08}>
          <p style={{ ...sans, fontWeight: 300, fontSize: 'clamp(0.88rem, 1.1vw, 1rem)', lineHeight: 1.7, color: 'rgba(243,241,231,0.6)', maxWidth: '60ch', margin: '0 0 1.5rem 0' }}>
            Sobre las 50.000 hectáreas irrigables de la provincia, la cadena entera —cultivo,
            material, construcción y créditos— se traduce en estas cifras anuales a plena escala:
          </p>
        </Rise>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '1px', background: 'rgba(242,181,68,0.18)', border: '1px solid rgba(242,181,68,0.18)' }}>
          {[
            { target: 100000, suffix: '', big: 'viviendas de hempcrete', label: 'que fijan carbono mientras se construyen' },
            { target: 50000, suffix: '', big: 'empleos directos', label: 'en cada eslabón, del campo a la obra' },
            { target: 50000, suffix: ' ha', big: 'irrigables en Neuquén', label: 'la superficie disponible para escalar' },
            { target: 500000, suffix: '', big: 'toneladas de CO₂', label: 'removidas por año, fijadas en pared y suelo' },
            { target: 82, suffix: 'M', big: 'USD por año en créditos', label: 'de remoción durable, a precio de mercado' },
            { target: 500, suffix: ' años', big: 'de permanencia', label: 'el carbono queda en cada pared, sin reversión' },
          ].map((s, i) => (
            <Rise key={s.big} delay={0.06 + i * 0.06}>
              <div style={{ background: DUSK, padding: '1.6rem 1.4rem', height: '100%' }}>
                <p style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.9rem, 3vw, 2.7rem)', color: GREEN_DARK, margin: '0 0 0.3rem 0', lineHeight: 1 }}>
                  <AnimatedCounter target={s.target} suffix={s.suffix} />
                </p>
                <p style={{ ...sans, fontSize: '0.78rem', fontWeight: 500, color: CREAM, margin: '0 0 0.3rem 0', lineHeight: 1.25 }}>{s.big}</p>
                <p style={{ ...sans, fontWeight: 300, fontSize: '0.68rem', color: 'rgba(243,241,231,0.5)', lineHeight: 1.45, margin: 0 }}>{s.label}</p>
              </div>
            </Rise>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- 08 · el cierre ---------- */

const LINAJE = [
  { year: '1796', name: 'Manuel Belgrano', text: 'En sus Memorias del Consulado propone el cultivo de lino y cáñamo como una de las primeras industrias del territorio.' },
  { year: '1907', name: 'Luis Huergo', text: 'Defiende el petróleo de Comodoro Rivadavia como riqueza nacional a industrializar.' },
  { year: '1922', name: 'Enrique Mosconi', text: 'Funda la YPF industrial: eficiencia, escala y un modelo de país.' },
  { year: '2013', name: 'Vaca Muerta', text: 'La roca convierte a la Argentina en potencia energética.' },
  { year: '2024', name: 'Horacio Marín', text: 'Se propone lo más difícil: convertir a YPF en la primera petrolera net-zero del mundo.' },
  { year: '2026', name: 'La próxima industria', text: 'La cuenca que exporta energía suma la pata que regenera: construye, fija carbono y genera valor.' },
]

function MpCierre() {
  return (
    <section style={{ background: INK, padding: 'clamp(5rem, 11vw, 9.5rem) clamp(1.5rem, 6vw, 7rem) clamp(3rem, 6vw, 5rem)', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '80vw', height: '80vh',
        background: 'radial-gradient(ellipse, rgba(91,196,106,0.05) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: '1120px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <Rise><Eyebrow>11 · El cierre</Eyebrow></Rise>

        <div style={{ display: 'flex', flexDirection: 'column', margin: '0 0 4rem' }}>
          {LINAJE.map((l, i) => (
            <Rise key={l.year} delay={0.06 + i * 0.07}>
              <div style={{
                display: 'flex', gap: 'clamp(1rem, 3vw, 2.5rem)', alignItems: 'baseline',
                padding: '1.1rem 0', borderBottom: i < LINAJE.length - 1 ? '1px solid rgba(243,241,231,0.07)' : 'none',
              }}>
                <span style={{ ...sans, fontSize: '0.68rem', letterSpacing: '0.15em', color: 'rgba(242,181,68,0.6)', minWidth: '3.5rem' }}>{l.year}</span>
                <span style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.05rem, 1.6vw, 1.4rem)', color: i === LINAJE.length - 1 ? GREEN_DARK : CREAM, minWidth: 'clamp(9rem, 16vw, 14rem)', lineHeight: 1.2 }}>
                  {l.name}
                </span>
                <span style={{ ...sans, fontWeight: 300, fontSize: '0.8rem', lineHeight: 1.6, color: 'rgba(243,241,231,0.45)' }}>{l.text}</span>
              </div>
            </Rise>
          ))}
        </div>

        <Rise delay={0.1}>
          <h2 style={{
            ...serif, fontStyle: 'italic', fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 1.05,
            color: CREAM, margin: '0 0 1.5rem 0', textAlign: 'center',
          }}>
            Belgrano <span style={{ color: GREEN_DARK }}>tenía razón.</span>
          </h2>
        </Rise>
        <Rise delay={0.2}>
          <p style={{
            ...sans, fontWeight: 300, fontSize: 'clamp(0.95rem, 1.25vw, 1.08rem)', lineHeight: 1.8,
            color: 'rgba(243,241,231,0.62)', maxWidth: '60ch', margin: '0 auto 3rem', textAlign: 'center',
          }}>
            Horacio Marín se propuso lo más difícil: convertir a YPF en la
            <strong style={{ color: CREAM, fontWeight: 500 }}> primera petrolera net-zero del mundo</strong>.
            Regenerar es la pata que falta para lograrlo. Y el día que lo consiga, habrá que
            agradecérselo también a <strong style={{ color: GREEN_DARK, fontWeight: 500 }}>Manuel
            Belgrano</strong>, que hace más de dos siglos vio en esta planta una industria para
            el país.
          </p>
        </Rise>

        <Rise delay={0.3}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            <a
              href="mailto:nqnguille@gmail.com?subject=Plan%20Manuel%20Belgrano"
              style={{
                ...sans, display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                background: GREEN_DARK, color: INK, fontWeight: 500,
                fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                padding: '1rem 2.5rem', textDecoration: 'none',
              }}
            >
              Conversemos
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" aria-hidden>
                <path d="M0 4H14M14 4L11 1M14 4L11 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </a>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href="mailto:nqnguille@gmail.com" style={{ ...sans, fontSize: '0.68rem', color: 'rgba(243,241,231,0.4)', textDecoration: 'none', letterSpacing: '0.04em' }}>
                nqnguille@gmail.com
              </a>
              <span style={{ color: 'rgba(243,241,231,0.15)' }}>·</span>
              <a href="https://wa.me/5492994229436" style={{ ...sans, fontSize: '0.68rem', color: 'rgba(243,241,231,0.4)', textDecoration: 'none', letterSpacing: '0.04em' }}>
                +54 299 422 9436
              </a>
            </div>
          </div>
        </Rise>

        <Rise delay={0.4}>
          <p style={{
            ...sans, fontSize: '0.56rem', letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'rgba(243,241,231,0.22)', textAlign: 'center', marginTop: '4rem',
          }}>
            Guillermo Sandoval · Flora Cáñamo Neuquino · Brown 420, Neuquén
          </p>
        </Rise>
      </div>
    </section>
  )
}

/* ---------- ensamblado ---------- */

export function Masterplan() {
  return (
    <main style={{ background: INK }}>
      <MpHeader />
      <MpApertura />
      <MpOportunidad />
      <MpCadena />
      <MpActivo />
      <MpPlan />
      <MpDeal />
      <MpEncaje />
      <MpUpside />
      <MpBiochar />
      <MpVentana />
      <MpVision />
      <MpCierre />
    </main>
  )
}
