'use client'

import { motion } from 'framer-motion'
import type { CSSProperties, ReactNode } from 'react'

/* ============================================================
   PLAN MANUEL BELGRANO — MASTERPLAN (sitio gateado)
   Construido de cero — jun 2026.
   Narrativa: oportunidad operativa → solución → activo → plan
   → deal → upside carbono → ventana 2026-2031 → cierre Belgrano.
   ============================================================ */

const INK = '#1C1A14'
const DUSK = '#1A2B22'
const CREAM = '#F7F6EB'
const PARCHMENT = '#E8E0C8'
const GOLD = '#C9A84C'
const GREEN_DARK = '#71CE6A'
const GREEN_LIGHT = '#4daa47'

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
      color: dark ? 'rgba(28,26,20,0.68)' : 'rgba(247,246,235,0.62)',
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
      background: 'rgba(28,26,20,0.88)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(201,168,76,0.14)',
    }}>
      <span style={{ ...sans, fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(247,246,235,0.85)', fontWeight: 500 }}>
        Plan Manuel Belgrano <span style={{ color: 'rgba(201,168,76,0.7)', marginLeft: '0.6em' }}>· Masterplan</span>
      </span>
      <span style={{
        ...sans, fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase',
        color: GOLD, border: '1px solid rgba(201,168,76,0.35)', padding: '0.3rem 0.7rem',
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
        background: `linear-gradient(to bottom, rgba(26,43,34,0.55), rgba(26,43,34,0.92) 80%)`,
      }} />
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '6rem 1.5rem 4rem', maxWidth: '880px' }}>
        <Rise>
          <Eyebrow>Preparado para YPF · Junio 2026</Eyebrow>
        </Rise>
        <Rise delay={0.12}>
          <h1 style={{
            ...serif, fontStyle: 'italic',
            fontSize: 'clamp(3.2rem, 8vw, 7rem)', lineHeight: 1.02, color: CREAM, margin: '0 0 2rem 0',
          }}>
            El masterplan.
          </h1>
        </Rise>
        <Rise delay={0.24}>
          <p style={{
            ...sans, fontWeight: 300, fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)',
            lineHeight: 1.75, color: 'rgba(247,246,235,0.6)', maxWidth: '56ch', margin: '0 auto',
          }}>
            Una propuesta de generación de valor para YPF: cáñamo industrial, materiales
            de construcción y créditos de carbono en la misma cuenca que Vaca Muerta.
            De la semilla a la llave.
          </p>
        </Rise>
        <Rise delay={0.38}>
          <p style={{
            ...sans, fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'rgba(201,168,76,0.6)', marginTop: '3rem',
          }}>
            Flora Cáñamo Neuquino SRL · Licencia ARICCAME 2024 · Neuquén
          </p>
        </Rise>
      </div>
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 2,
        ...sans, fontSize: '0.55rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(247,246,235,0.25)',
      }}>
        scroll
      </div>
    </section>
  )
}

/* ---------- 01 · la oportunidad ---------- */

const OPP_STATS = [
  { value: '40.000', label: 'puestos de trabajo proyectados por Argentina LNG' },
  { value: '2.800', label: 'pozos a perforar en los próximos 5 años' },
  { value: 'USD 24.000M', label: 'el project finance más grande de la historia de Latinoamérica' },
  { value: '2027', label: 'inicio de obras — la gente llega antes que la infraestructura' },
]

function MpOportunidad() {
  return (
    <Section bg={CREAM} id="oportunidad">
      <Rise><Eyebrow dark>01 · La oportunidad</Eyebrow></Rise>
      <Rise delay={0.08}>
        <H2 dark size="xl">
          Vaca Muerta va a sumar 40.000 trabajadores.
          <br />
          La pregunta operativa es dónde van a vivir.
        </H2>
      </Rise>
      <Rise delay={0.16}>
        <Body dark>
          Argentina LNG arranca obras en 2027. Añelo ya multiplicó su población y el alojamiento
          es uno de los costos ocultos del yacimiento: horas de viaje, campamentos transitorios,
          rotación. Cada hora arriba de una camioneta es productividad que el privado paga.
        </Body>
      </Rise>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
        gap: '1px', background: 'rgba(28,26,20,0.12)', border: '1px solid rgba(28,26,20,0.12)',
        margin: '3.5rem 0',
      }}>
        {OPP_STATS.map((s, i) => (
          <Rise key={s.value} delay={0.1 + i * 0.08}>
            <div style={{ background: CREAM, padding: '1.75rem 1.5rem', height: '100%' }}>
              <p style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.7rem, 2.6vw, 2.4rem)', color: INK, margin: '0 0 0.5rem 0', lineHeight: 1 }}>
                {s.value}
              </p>
              <p style={{ ...sans, fontSize: '0.7rem', letterSpacing: '0.06em', color: 'rgba(28,26,20,0.55)', lineHeight: 1.55, margin: 0 }}>
                {s.label}
              </p>
            </div>
          </Rise>
        ))}
      </div>

      <Rise delay={0.2}>
        <blockquote style={{
          margin: 0, borderLeft: `3px solid ${GOLD}`, paddingLeft: 'clamp(1.25rem, 2.5vw, 2rem)', maxWidth: '720px',
        }}>
          <p style={{
            ...serif, fontStyle: 'italic', fontSize: 'clamp(1.3rem, 2.2vw, 1.9rem)',
            lineHeight: 1.35, color: INK, margin: '0 0 0.75rem 0',
          }}>
            “Van a llegar con buena temperatura, con internet, con calidad, en poco tiempo…
            van a estar más frescos para trabajar. Y eso es productividad.”
          </p>
          <footer style={{ ...sans, fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(28,26,20,0.45)' }}>
            Horacio Marín · sobre el tren Neuquén–Añelo · Dínamo, 2026
          </footer>
        </blockquote>
      </Rise>
      <Rise delay={0.28}>
        <p style={{
          ...sans, fontWeight: 300, fontSize: 'clamp(0.92rem, 1.15vw, 1.05rem)', lineHeight: 1.78,
          color: 'rgba(28,26,20,0.68)', maxWidth: '62ch', marginTop: '2rem',
        }}>
          El mismo razonamiento aplica a la vivienda. Este plan produce el material y las casas
          de ese crecimiento, con una cadena de suministro que nace al lado del pozo.
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

const CHAIN = ['Semilla', 'Cultivo', 'Procesamiento', 'Material', 'Vivienda']

function MpSolucion() {
  return (
    <Section bg={INK} id="solucion">
      <Rise><Eyebrow>02 · La solución</Eyebrow></Rise>
      <Rise delay={0.08}>
        <H2 size="xl">Vivienda que se cultiva a 40 minutos del pozo.</H2>
      </Rise>
      <Rise delay={0.16}>
        <Body>
          El cáñamo industrial produce hempcrete: un material de construcción que aísla,
          respira y resiste el fuego. Las paredes se fabrican con biomasa cultivada en la
          misma cuenca — logística mínima, insumo renovable cada 120 días, empleo técnico
          en cada eslabón de la cadena.
        </Body>
      </Rise>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
        gap: 'clamp(1rem, 2vw, 1.5rem)', margin: '3.5rem 0',
      }}>
        {SPECS.map((s, i) => (
          <Rise key={s.label} delay={0.1 + i * 0.08}>
            <div style={{
              background: 'rgba(247,246,235,0.04)', border: '1px solid rgba(201,168,76,0.16)',
              padding: '1.75rem 1.5rem', height: '100%',
            }}>
              <p style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.5rem, 2.2vw, 2rem)', color: GREEN_DARK, margin: '0 0 0.4rem 0', lineHeight: 1.05 }}>
                {s.value}
              </p>
              <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: GOLD, margin: '0 0 0.7rem 0' }}>
                {s.label}
              </p>
              <p style={{ ...sans, fontWeight: 300, fontSize: '0.78rem', lineHeight: 1.6, color: 'rgba(247,246,235,0.5)', margin: 0 }}>
                {s.detail}
              </p>
            </div>
          </Rise>
        ))}
      </div>

      <Rise delay={0.2}>
        <div style={{
          display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem',
          borderTop: '1px solid rgba(201,168,76,0.18)', paddingTop: '2rem',
        }}>
          <span style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(247,246,235,0.4)', marginRight: '0.5rem' }}>
            De la semilla a la llave
          </span>
          {CHAIN.map((step, i) => (
            <span key={step} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{
                ...sans, fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                color: i === CHAIN.length - 1 ? GREEN_DARK : 'rgba(247,246,235,0.75)',
                border: `1px solid ${i === CHAIN.length - 1 ? 'rgba(113,206,106,0.4)' : 'rgba(247,246,235,0.18)'}`,
                padding: '0.45rem 0.9rem',
              }}>
                {step}
              </span>
              {i < CHAIN.length - 1 && <span style={{ color: 'rgba(201,168,76,0.5)', fontSize: '0.7rem' }}>→</span>}
            </span>
          ))}
        </div>
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
              4.000 hectáreas irrigables
              <br />
              que hoy rinden cero.
            </H2>
          </Rise>
          <Rise delay={0.16}>
            <Body dark>
              Canal Mari Menuco y Barreales: tierras con agua asegurada dentro del área de
              influencia de YPF, sin uso productivo. Es la misma lógica que monetizar gas
              disponible con data centers, aplicada al territorio: cada hectárea sembrada
              genera biomasa, materiales de construcción y créditos certificables.
            </Body>
          </Rise>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(28,26,20,0.15)', border: '1px solid rgba(28,26,20,0.15)' }}>
          {[
            { value: '4.000 ha', label: 'Fase 1 · Canal Mari Menuco / Barreales' },
            { value: '50.000 ha', label: 'Potencial irrigable de la provincia del Neuquén' },
            { value: '10–15 t CO₂', label: 'captura por hectárea por año, a validar en benchmark' },
          ].map((row, i) => (
            <Rise key={row.value} delay={0.12 + i * 0.08}>
              <div style={{ background: PARCHMENT, padding: '1.5rem 1.75rem', display: 'flex', alignItems: 'baseline', gap: '1.25rem' }}>
                <span style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.6rem, 2.4vw, 2.2rem)', color: INK, lineHeight: 1, minWidth: '7.5rem' }}>
                  {row.value}
                </span>
                <span style={{ ...sans, fontSize: '0.72rem', letterSpacing: '0.05em', color: 'rgba(28,26,20,0.55)', lineHeight: 1.5 }}>
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

const FASES = [
  {
    tag: 'Fase 1 · Meses 0–18',
    title: 'Benchmark federal',
    body: 'Neuquén y Mendoza en paralelo: dos ecorregiones, el mismo protocolo experimental DBCA, hasta 30 variedades por región. Convenios con UNCo y UNCuyo para validación científica certificable. El resultado: la variedad campeona por ecorregión y la curva real de captura, medida en territorio.',
    budget: 'USD 150.000',
    items: ['Campo · USD 49.000', 'Ciencia · USD 58.000', 'Tecnología · USD 37.000', 'Gestión · USD 6.000'],
  },
  {
    tag: 'Fase 2 · Meses 12–24',
    title: 'Piloto hempcrete',
    body: 'Con la biomasa del benchmark: procesamiento, primeros bloques, construcción piloto y certificación INTI del sistema constructivo. Al cierre, el material queda aprobado para construir en escala.',
    budget: 'USD 115.000',
    items: ['Procesamiento · USD 55.000', 'Materiales · USD 20.000', 'Construcción · USD 25.000', 'Certificación INTI · USD 15.000'],
  },
]

function MpPlan() {
  return (
    <Section bg={CREAM} id="plan">
      <Rise><Eyebrow dark>04 · El plan</Eyebrow></Rise>
      <Rise delay={0.08}>
        <H2 dark>
          Benchmark primero.
          <br />
          La decisión de escala se toma con datos propios.
        </H2>
      </Rise>
      <Rise delay={0.14}>
        <Body dark>
          Trabajamos por tendencias, con rangos y sensibilidad. Cada número del modelo
          económico se valida en el campo antes de comprometer la escala.
        </Body>
      </Rise>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(1.25rem, 2.5vw, 2rem)', margin: '3.25rem 0 0' }}>
        {FASES.map((f, i) => (
          <Rise key={f.title} delay={0.1 + i * 0.12}>
            <div style={{ background: '#fff', border: '1px solid rgba(28,26,20,0.1)', padding: 'clamp(1.75rem, 3vw, 2.5rem)', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <p style={{ ...sans, fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: GREEN_LIGHT, margin: '0 0 0.75rem 0' }}>
                {f.tag}
              </p>
              <h3 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.6rem, 2.4vw, 2.1rem)', color: INK, margin: '0 0 1rem 0', lineHeight: 1.1 }}>
                {f.title}
              </h3>
              <p style={{ ...sans, fontWeight: 300, fontSize: '0.85rem', lineHeight: 1.7, color: 'rgba(28,26,20,0.6)', margin: '0 0 1.5rem 0', flex: 1 }}>
                {f.body}
              </p>
              <div style={{ borderTop: `2px solid ${GOLD}`, paddingTop: '1.25rem' }}>
                <p style={{ ...serif, fontStyle: 'italic', fontSize: '1.6rem', color: INK, margin: '0 0 0.75rem 0' }}>{f.budget}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {f.items.map((item) => (
                    <li key={item} style={{ ...sans, fontSize: '0.72rem', color: 'rgba(28,26,20,0.5)', letterSpacing: '0.03em' }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Rise>
        ))}
      </div>

      <Rise delay={0.2}>
        <p style={{
          ...sans, fontSize: '0.78rem', letterSpacing: '0.08em', color: 'rgba(28,26,20,0.5)',
          marginTop: '2.25rem', textAlign: 'center',
        }}>
          Inversión total del programa: <strong style={{ color: INK }}>USD 265.000–300.000</strong> · en dos desembolsos contra hitos verificables
        </p>
      </Rise>
    </Section>
  )
}

/* ---------- 05 · el deal ---------- */

const CONTRATOS = [
  {
    num: 'I',
    title: 'Desarrollo de proveedor estratégico',
    body: 'YPF financia benchmark y piloto en dos desembolsos contra hitos verificables: siembra completada y primer corte de datos; material certificado por INTI. USD 265.000–300.000 en 24 meses.',
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

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(201,168,76,0.18)', border: '1px solid rgba(201,168,76,0.18)', margin: '3.25rem 0' }}>
        {CONTRATOS.map((c, i) => (
          <Rise key={c.num} delay={0.1 + i * 0.1}>
            <div style={{ background: INK, padding: 'clamp(1.5rem, 3vw, 2.25rem)', display: 'flex', gap: 'clamp(1.25rem, 3vw, 2.5rem)', alignItems: 'flex-start' }}>
              <span style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', color: 'rgba(201,168,76,0.55)', lineHeight: 1, minWidth: '3rem', textAlign: 'center' }}>
                {c.num}
              </span>
              <div>
                <h3 style={{ ...sans, fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)', fontWeight: 500, color: CREAM, margin: '0 0 0.6rem 0', letterSpacing: '0.02em' }}>
                  {c.title}
                </h3>
                <p style={{ ...sans, fontWeight: 300, fontSize: '0.85rem', lineHeight: 1.7, color: 'rgba(247,246,235,0.5)', margin: 0, maxWidth: '68ch' }}>
                  {c.body}
                </p>
              </div>
            </div>
          </Rise>
        ))}
      </div>

      <Rise delay={0.2}>
        <p style={{ ...sans, fontWeight: 300, fontSize: '0.85rem', lineHeight: 1.7, color: 'rgba(247,246,235,0.45)', maxWidth: '70ch' }}>
          La estructura replica la que YPF ya usa para viabilizar infraestructura con inversión
          privada: compromiso de contratación que baja el riesgo, privado que ejecuta, y un
          activo que queda operando para la cuenca.
        </p>
      </Rise>
    </Section>
  )
}

/* ---------- 06 · el upside ---------- */

const SENSIBILIDAD = [
  { escenario: 'Mercado voluntario', precio: 'USD 15/t', fase1: 'USD 0,6M/año', escala: 'USD 7,5M/año' },
  { escenario: 'Promedio O&G NetZero', precio: 'USD 35/t', fase1: 'USD 1,4M/año', escala: 'USD 17,5M/año' },
  { escenario: 'Precio sombra interno', precio: 'USD 55/t', fase1: 'USD 2,2M/año', escala: 'USD 27,5M/año' },
]

function MpUpside() {
  return (
    <Section bg={PARCHMENT} id="upside">
      <Rise><Eyebrow dark>06 · El upside</Eyebrow></Rise>
      <Rise delay={0.08}>
        <H2 dark>
          La captura de carbono cuesta entre USD 15 y 345 la tonelada.
          <br />
          Salvo cuando deja una pared construida.
        </H2>
      </Rise>
      <Rise delay={0.16}>
        <Body dark max="70ch">
          La IEA estima USD 15–120/t para captura en fuentes concentradas y USD 130–345/t para
          captura directa de aire. El hempcrete fija 75–165 kg de CO₂ por m³ con margen
          positivo: el material se vende. Y los contratos de GNL con Europa son a 20 años —
          cuando el comprador pida la huella del cargamento, la respuesta es propia, local y
          auditable.
        </Body>
      </Rise>

      <Rise delay={0.18}>
        <div style={{ margin: '3rem 0', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '560px' }}>
            <thead>
              <tr>
                {['Escenario de precio', 'USD/tCO₂e', 'Fase 1 · 4.000 ha', 'Escala · 50.000 ha'].map((h) => (
                  <th key={h} style={{
                    ...sans, fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase',
                    color: 'rgba(28,26,20,0.45)', textAlign: 'left', padding: '0 1rem 0.85rem 0',
                    borderBottom: '1px solid rgba(28,26,20,0.25)', fontWeight: 500,
                  }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SENSIBILIDAD.map((row, i) => (
                <tr key={row.escenario}>
                  <td style={{ ...sans, fontSize: '0.82rem', color: 'rgba(28,26,20,0.7)', padding: '1rem 1rem 1rem 0', borderBottom: '1px solid rgba(28,26,20,0.12)' }}>
                    {row.escenario}
                  </td>
                  <td style={{ ...serif, fontStyle: 'italic', fontSize: '1.15rem', color: INK, padding: '1rem 1rem 1rem 0', borderBottom: '1px solid rgba(28,26,20,0.12)' }}>
                    {row.precio}
                  </td>
                  <td style={{ ...sans, fontSize: '0.85rem', color: 'rgba(28,26,20,0.7)', padding: '1rem 1rem 1rem 0', borderBottom: '1px solid rgba(28,26,20,0.12)' }}>
                    {row.fase1}
                  </td>
                  <td style={{ ...sans, fontSize: '0.85rem', fontWeight: i === SENSIBILIDAD.length - 1 ? 500 : 300, color: i === SENSIBILIDAD.length - 1 ? GREEN_LIGHT : 'rgba(28,26,20,0.7)', padding: '1rem 0', borderBottom: '1px solid rgba(28,26,20,0.12)' }}>
                    {row.escala}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Rise>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(1.25rem, 2.5vw, 2rem)' }}>
        <Rise delay={0.22}>
          <div style={{ borderLeft: `2px solid ${GOLD}`, paddingLeft: '1.25rem' }}>
            <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(28,26,20,0.45)', margin: '0 0 0.5rem 0' }}>
              Segunda línea · Biochar
            </p>
            <p style={{ ...sans, fontWeight: 300, fontSize: '0.85rem', lineHeight: 1.65, color: 'rgba(28,26,20,0.65)', margin: 0 }}>
              El residuo del proceso se piroliza en biochar certificado: USD 164/t (Puro.earth),
              con compradores activos como Microsoft, Shell y Google. Permanencia de 500 a 1.000 años.
            </p>
          </div>
        </Rise>
        <Rise delay={0.3}>
          <div style={{ borderLeft: `2px solid ${GOLD}`, paddingLeft: '1.25rem' }}>
            <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(28,26,20,0.45)', margin: '0 0 0.5rem 0' }}>
              Método
            </p>
            <p style={{ ...sans, fontWeight: 300, fontSize: '0.85rem', lineHeight: 1.65, color: 'rgba(28,26,20,0.65)', margin: 0 }}>
              Rangos y sensibilidad en lugar de pronósticos puntuales. La base de cálculo
              — 10–15 t CO₂/ha/año — se valida con mediciones propias durante el benchmark.
            </p>
          </div>
        </Rise>
      </div>
    </Section>
  )
}

/* ---------- 07 · la ventana ---------- */

const TIMELINE = [
  { year: '2026', text: 'Firma y siembra del benchmark en Neuquén y Mendoza.' },
  { year: '2027', text: 'Arrancan las obras de Argentina LNG. Primeros bloques del piloto hempcrete.' },
  { year: '2028', text: 'Viviendas piloto construidas. Certificación INTI del sistema constructivo.' },
  { year: '2029–30', text: 'Escala: sociedades agrícolas, planta de procesamiento, campamentos permanentes.' },
  { year: '2031', text: 'Primera exportación de Argentina LNG con la huella de carbono resuelta con activos propios.' },
]

function MpVentana() {
  return (
    <Section bg={DUSK} id="ventana">
      <Rise><Eyebrow>07 · La ventana 2026–2031</Eyebrow></Rise>
      <Rise delay={0.08}>
        <H2>Cada hito del plan acompaña un hito de YPF.</H2>
      </Rise>

      <div style={{ margin: '3rem 0 3.5rem', display: 'flex', flexDirection: 'column' }}>
        {TIMELINE.map((t, i) => (
          <Rise key={t.year} delay={0.08 + i * 0.08}>
            <div style={{
              display: 'flex', gap: 'clamp(1.25rem, 3vw, 3rem)', alignItems: 'baseline',
              padding: '1.4rem 0', borderBottom: i < TIMELINE.length - 1 ? '1px solid rgba(247,246,235,0.08)' : 'none',
            }}>
              <span style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.5rem, 2.4vw, 2.2rem)', color: i === TIMELINE.length - 1 ? GREEN_DARK : GOLD, lineHeight: 1, minWidth: 'clamp(5.5rem, 9vw, 8rem)' }}>
                {t.year}
              </span>
              <span style={{ ...sans, fontWeight: 300, fontSize: 'clamp(0.85rem, 1.1vw, 0.98rem)', lineHeight: 1.65, color: 'rgba(247,246,235,0.6)' }}>
                {t.text}
              </span>
            </div>
          </Rise>
        ))}
      </div>

      <Rise delay={0.2}>
        <blockquote style={{ margin: 0, borderLeft: `3px solid ${GOLD}`, paddingLeft: 'clamp(1.25rem, 2.5vw, 2rem)', maxWidth: '720px' }}>
          <p style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.3rem, 2.2vw, 1.9rem)', lineHeight: 1.3, color: CREAM, margin: '0 0 0.75rem 0' }}>
            “A Neuquén se van a venir a vivir un millón de personas.”
          </p>
          <footer style={{ ...sans, fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.65)' }}>
            Federico Sturzenegger · Ministro de Desregulación · 2025
          </footer>
        </blockquote>
      </Rise>
      <Rise delay={0.28}>
        <p style={{ ...sans, fontWeight: 300, fontSize: 'clamp(0.92rem, 1.15vw, 1.05rem)', lineHeight: 1.78, color: 'rgba(247,246,235,0.55)', maxWidth: '60ch', marginTop: '1.75rem' }}>
          El Plan Manuel Belgrano produce los materiales de ese crecimiento.
        </p>
      </Rise>
    </Section>
  )
}

/* ---------- 08 · el cierre ---------- */

const LINAJE = [
  { year: '1796', name: 'Manuel Belgrano', text: 'En sus Memorias del Consulado propone el cultivo de lino y cáñamo como una de las primeras industrias del territorio.' },
  { year: '1907', name: 'Luis Huergo', text: 'Defiende el petróleo de Comodoro Rivadavia como riqueza nacional a industrializar.' },
  { year: '1922', name: 'Enrique Mosconi', text: 'Funda la YPF industrial: eficiencia, escala y un modelo de país.' },
  { year: '2013', name: 'Vaca Muerta', text: 'La roca convierte a la Argentina en potencia energética.' },
  { year: '2026', name: 'La próxima industria', text: 'La cuenca que exporta energía suma la plataforma que construye, fija carbono y genera valor.' },
]

function MpCierre() {
  return (
    <section style={{ background: INK, padding: 'clamp(5rem, 11vw, 9.5rem) clamp(1.5rem, 6vw, 7rem) clamp(3rem, 6vw, 5rem)', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '80vw', height: '80vh',
        background: 'radial-gradient(ellipse, rgba(113,206,106,0.05) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: '1120px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <Rise><Eyebrow>08 · El cierre</Eyebrow></Rise>

        <div style={{ display: 'flex', flexDirection: 'column', margin: '0 0 4rem' }}>
          {LINAJE.map((l, i) => (
            <Rise key={l.year} delay={0.06 + i * 0.07}>
              <div style={{
                display: 'flex', gap: 'clamp(1rem, 3vw, 2.5rem)', alignItems: 'baseline',
                padding: '1.1rem 0', borderBottom: i < LINAJE.length - 1 ? '1px solid rgba(247,246,235,0.07)' : 'none',
              }}>
                <span style={{ ...sans, fontSize: '0.68rem', letterSpacing: '0.15em', color: 'rgba(201,168,76,0.6)', minWidth: '3.5rem' }}>{l.year}</span>
                <span style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.05rem, 1.6vw, 1.4rem)', color: i === LINAJE.length - 1 ? GREEN_DARK : CREAM, minWidth: 'clamp(9rem, 16vw, 14rem)', lineHeight: 1.2 }}>
                  {l.name}
                </span>
                <span style={{ ...sans, fontWeight: 300, fontSize: '0.8rem', lineHeight: 1.6, color: 'rgba(247,246,235,0.45)' }}>{l.text}</span>
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
            ...sans, fontWeight: 300, fontSize: 'clamp(0.9rem, 1.2vw, 1.02rem)', lineHeight: 1.78,
            color: 'rgba(247,246,235,0.55)', maxWidth: '58ch', margin: '0 auto 3rem', textAlign: 'center',
          }}>
            Cada generación tuvo ingenieros con un modelo de país. Esta propuesta continúa esa
            línea: una industria nueva, medible y rentable, nacida al lado del yacimiento.
          </p>
        </Rise>

        <Rise delay={0.3}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            <a
              href="mailto:contacto@planmanuelbelgrano.com.ar?subject=Plan%20Manuel%20Belgrano%20%E2%80%94%20Reuni%C3%B3n"
              style={{
                ...sans, display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                background: GREEN_DARK, color: INK, fontWeight: 500,
                fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                padding: '1rem 2.5rem', textDecoration: 'none',
              }}
            >
              Agendar reunión
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" aria-hidden>
                <path d="M0 4H14M14 4L11 1M14 4L11 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </a>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href="mailto:contacto@planmanuelbelgrano.com.ar" style={{ ...sans, fontSize: '0.68rem', color: 'rgba(247,246,235,0.4)', textDecoration: 'none', letterSpacing: '0.04em' }}>
                contacto@planmanuelbelgrano.com.ar
              </a>
              <span style={{ color: 'rgba(247,246,235,0.15)' }}>·</span>
              <a href="https://wa.me/5492994229436" style={{ ...sans, fontSize: '0.68rem', color: 'rgba(247,246,235,0.4)', textDecoration: 'none', letterSpacing: '0.04em' }}>
                +54 299 422 9436
              </a>
            </div>
          </div>
        </Rise>

        <Rise delay={0.4}>
          <p style={{
            ...sans, fontSize: '0.56rem', letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'rgba(247,246,235,0.22)', textAlign: 'center', marginTop: '4rem',
          }}>
            Guillermo Sandoval · Flora Cáñamo Neuquino SRL · Brown 420, Neuquén · Licencia ARICCAME 2024
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
      <MpSolucion />
      <MpActivo />
      <MpPlan />
      <MpDeal />
      <MpUpside />
      <MpVentana />
      <MpCierre />
    </main>
  )
}
