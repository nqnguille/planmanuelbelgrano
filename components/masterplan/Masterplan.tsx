'use client'

import { motion } from 'framer-motion'
import type { CSSProperties, ReactNode } from 'react'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

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
          Vaca Muerta va a sumar 40.000 operadores.
          <br />
          Es una ciudad entera llegando a la meseta.
        </H2>
      </Rise>
      <Rise delay={0.16}>
        <Body dark>
          Entre 2027 y 2031, Argentina LNG y la expansión de Vaca Muerta traen cuarenta mil
          operadores a la región. No es un pico pasajero: es población nueva, permanente, que
          necesita dónde vivir cerca del pozo — rápido, con calidad y a la temperatura del
          invierno patagónico.
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

const SEED_TO_KEY = [
  { n: '01', name: 'Semilla', desc: 'Variedad de cáñamo certificada, adaptada a la ecorregión.' },
  { n: '02', name: 'Cultivo', desc: '120 días a campo. La planta captura CO₂ mientras crece.', carbon: true },
  { n: '03', name: 'Cosecha', desc: 'Se aprovecha la planta entera, sin desperdicio.' },
  { n: '04', name: 'Procesamiento', desc: 'Decortización: se separan el shiv (médula) y la fibra.' },
  { n: '05', name: 'Material', desc: 'El shiv + aglutinante forman el hempcrete: bloque o vertido.' },
  { n: '06', name: 'Construcción', desc: 'Muros que aíslan, respiran y fijan el carbono por siglos.', carbon: true },
  { n: '07', name: 'Vivienda', desc: 'La llave. Una casa hecha de la misma cuenca que el gas.', end: true },
]

function MpSolucion() {
  return (
    <Section bg={INK} id="solucion">
      <Rise><Eyebrow>02 · La solución</Eyebrow></Rise>
      <Rise delay={0.08}>
        <H2 size="xl">Vivienda que se cultiva a 40 minutos del pozo.</H2>
      </Rise>
      <Rise delay={0.16}>
        <Body>
          El cáñamo industrial produce <strong style={{ color: GREEN_DARK, fontWeight: 500 }}>hempcrete</strong>:
          un material de construcción que aísla, respira y resiste el fuego. Las paredes se
          fabrican con biomasa cultivada en la misma cuenca — logística mínima, insumo
          renovable cada 120 días, empleo técnico en cada eslabón de la cadena.
        </Body>
      </Rise>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
        gap: 'clamp(1rem, 2vw, 1.5rem)', margin: '3.5rem 0',
      }}>
        {SPECS.map((s, i) => (
          <Rise key={s.label} delay={0.1 + i * 0.08}>
            <div style={{
              background: 'rgba(243,241,231,0.04)', border: '1px solid rgba(242,181,68,0.16)',
              padding: '1.75rem 1.5rem', height: '100%',
            }}>
              <p style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.5rem, 2.2vw, 2rem)', color: GREEN_DARK, margin: '0 0 0.4rem 0', lineHeight: 1.05 }}>
                {s.value}
              </p>
              <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: GOLD, margin: '0 0 0.7rem 0' }}>
                {s.label}
              </p>
              <p style={{ ...sans, fontWeight: 300, fontSize: '0.78rem', lineHeight: 1.6, color: 'rgba(243,241,231,0.5)', margin: 0 }}>
                {s.detail}
              </p>
            </div>
          </Rise>
        ))}
      </div>

      {/* Gráfico: de la semilla a la llave */}
      <Rise delay={0.18}>
        <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: GOLD, margin: '3.75rem 0 1.5rem' }}>
          El modelo de la semilla a la llave — siete pasos
        </p>
      </Rise>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1px', background: 'rgba(242,181,68,0.16)', border: '1px solid rgba(242,181,68,0.16)' }}>
        {SEED_TO_KEY.map((s, i) => (
          <Rise key={s.n} delay={0.06 + i * 0.06}>
            <div style={{
              background: s.end ? 'rgba(91,196,106,0.08)' : INK, height: '100%',
              padding: 'clamp(1.25rem, 2vw, 1.6rem)', display: 'flex', flexDirection: 'column', gap: '0.5rem',
              position: 'relative',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ ...serif, fontStyle: 'italic', fontSize: '1.25rem', color: s.end ? GREEN_DARK : 'rgba(242,181,68,0.7)' }}>{s.n}</span>
                {s.carbon && <span style={{ ...sans, fontSize: '0.5rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: GREEN_DARK, border: `1px solid ${GREEN_DARK}`, padding: '0.15rem 0.35rem' }}>CO₂</span>}
                {s.end && <span style={{ ...sans, fontSize: '0.5rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: GREEN_DARK }}>★</span>}
              </div>
              <h3 style={{ ...sans, fontSize: '0.92rem', fontWeight: 600, color: s.end ? GREEN_DARK : CREAM, margin: 0, letterSpacing: '0.01em' }}>{s.name}</h3>
              <p style={{ ...sans, fontWeight: 300, fontSize: '0.72rem', lineHeight: 1.55, color: 'rgba(243,241,231,0.55)', margin: 0 }}>{s.desc}</p>
            </div>
          </Rise>
        ))}
      </div>
      <Rise delay={0.2}>
        <p style={{ ...sans, fontWeight: 300, fontSize: '0.82rem', lineHeight: 1.7, color: 'rgba(243,241,231,0.5)', maxWidth: '64ch', marginTop: '1.5rem' }}>
          La planta captura carbono en el cultivo y lo fija en la pared para siempre. Cada
          paso es empleo técnico — y todos ocurren en la misma cuenca, del campo a la llave.
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

/* ---------- 05 · el proceso (cosecha → hempcrete) ---------- */

const PIPELINE = [
  { n: '01', title: 'Cosecha', body: 'La planta entera entra al proceso. Sin desperdicio: cada parte tiene destino.' },
  { n: '02', title: 'Decortización', body: 'Separación mecánica del tallo: shiv (la chamiza o médula leñosa) por un lado, fibra por el otro.' },
  { n: '03', title: 'Mezclado', body: 'El shiv se mezcla con un aglutinante mineral y agua, en proporción controlada. Acá entra la tecnología del binder.' },
  { n: '04', title: 'Fraguado + carbonatación', body: 'El muro absorbe CO₂ del aire mientras endurece. La fijación de carbono ocurre durante el curado y dura siglos.' },
]

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

function MpProceso() {
  return (
    <Section bg={PARCHMENT} id="proceso">
      <Rise><Eyebrow dark>05 · El proceso</Eyebrow></Rise>
      <Rise delay={0.08}>
        <H2 dark size="xl">De la cosecha al hempcrete.</H2>
      </Rise>
      <Rise delay={0.14}>
        <Body dark max="66ch">
          El hempcrete no se fabrica: se cultiva y se cura. Cuatro pasos llevan la planta
          del campo a la pared — y en el último, el material captura el CO₂ que lo vuelve
          permanente.
        </Body>
      </Rise>

      {/* Pipeline de elaboración */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0', margin: '3rem 0 0', alignItems: 'stretch' }}>
        {PIPELINE.map((p, i) => (
          <Rise key={p.n} delay={0.08 + i * 0.08} style={{ flex: '1 1 220px', display: 'flex' }}>
            <div style={{ display: 'flex', alignItems: 'stretch', width: '100%' }}>
              <div style={{ flex: 1, padding: '0 1.25rem', borderLeft: i === 0 ? 'none' : '1px solid rgba(14,42,82,0.15)' }}>
                <span style={{ ...serif, fontStyle: 'italic', fontSize: '1.4rem', color: 'rgba(242,181,68,0.85)' }}>{p.n}</span>
                <h3 style={{ ...sans, fontSize: '0.9rem', fontWeight: 600, color: INK, margin: '0.4rem 0 0.6rem' }}>{p.title}</h3>
                <p style={{ ...sans, fontWeight: 300, fontSize: '0.78rem', lineHeight: 1.6, color: 'rgba(14,42,82,0.6)', margin: 0 }}>{p.body}</p>
              </div>
            </div>
          </Rise>
        ))}
      </div>

      {/* Menú de tecnologías internacionales */}
      <Rise delay={0.16}>
        <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: GREEN_LIGHT, margin: '4rem 0 0.75rem' }}>
          Tecnologías a integrar — el benchmark evalúa, YPF elige
        </p>
      </Rise>
      <Rise delay={0.2}>
        <Body dark max="66ch">
          No nos casamos con un proveedor. El benchmark prueba las mejores tecnologías del
          mundo y mide cuál combinación de binder y formulación rinde mejor en cada
          ecorregión argentina.
        </Body>
      </Rise>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1px', background: 'rgba(14,42,82,0.12)', border: '1px solid rgba(14,42,82,0.12)', marginTop: '1.75rem' }}>
        {TECHS.map((t, i) => (
          <Rise key={t.name} delay={0.08 + i * 0.06}>
            <div style={{ background: PARCHMENT, padding: 'clamp(1.5rem, 2.5vw, 1.9rem)', height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '0.7rem', gap: '0.5rem' }}>
                <h3 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.3rem, 1.8vw, 1.6rem)', color: INK, margin: 0, lineHeight: 1 }}>{t.name}</h3>
                <span style={{ ...sans, fontSize: '0.55rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: GOLD, whiteSpace: 'nowrap' }}>{t.origin}</span>
              </div>
              <p style={{ ...sans, fontWeight: 300, fontSize: '0.78rem', lineHeight: 1.6, color: 'rgba(14,42,82,0.62)', margin: 0 }}>{t.bring}</p>
            </div>
          </Rise>
        ))}
      </div>

      {/* Dos vías al mercado */}
      <Rise delay={0.16}>
        <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: GREEN_LIGHT, margin: '4rem 0 1.5rem' }}>
          Dos vías para llegar al mercado
        </p>
      </Rise>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(1.25rem, 2.5vw, 2rem)' }}>
        {VIAS.map((v, i) => (
          <Rise key={v.tag} delay={0.1 + i * 0.12}>
            <div style={{ background: '#fff', border: '1px solid rgba(14,42,82,0.1)', borderTop: `2px solid ${GOLD}`, padding: 'clamp(1.75rem, 3vw, 2.5rem)', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <p style={{ ...sans, fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: GREEN_LIGHT, margin: '0 0 0.75rem 0' }}>{v.tag}</p>
              <h3 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.6rem, 2.4vw, 2.1rem)', color: INK, margin: '0 0 1rem 0', lineHeight: 1.1 }}>{v.title}</h3>
              <p style={{ ...sans, fontWeight: 300, fontSize: '0.85rem', lineHeight: 1.7, color: 'rgba(14,42,82,0.6)', margin: '0 0 1.5rem 0' }}>{v.body}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 'auto 0 0', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {v.points.map((pt) => (
                  <li key={pt} style={{ ...sans, fontSize: '0.78rem', lineHeight: 1.5, color: 'rgba(14,42,82,0.6)', paddingLeft: '1.1rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: GREEN_LIGHT, fontWeight: 700 }}>—</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </Rise>
        ))}
      </div>

      {/* Tabla comparativa hempcrete vs Retak */}
      <Rise delay={0.16}>
        <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: GREEN_LIGHT, margin: '4rem 0 0.6rem' }}>
          El bloque, frente al Retak
        </p>
      </Rise>
      <Rise delay={0.2}>
        <Body dark max="64ch">
          Mismo formato, mismo método de colocación: el albañil no cambia nada. Cambia la
          densidad, la aislación y, sobre todo, la huella — el Retak emite carbono, el
          hempcrete lo fija.
        </Body>
      </Rise>
      <Rise delay={0.22}>
        <div style={{ margin: '1.75rem 0 0', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '620px' }}>
            <thead>
              <tr>
                {['', 'Bloque hempcrete', 'Bloque Retak · hormigón celular'].map((h, i) => (
                  <th key={i} style={{
                    ...sans, fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: i === 1 ? GREEN_LIGHT : 'rgba(14,42,82,0.45)', textAlign: 'left',
                    padding: '0 1rem 0.85rem 0', borderBottom: '1px solid rgba(14,42,82,0.25)', fontWeight: 600,
                  }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARACION.map((row) => (
                <tr key={row.attr} style={row.highlight ? { background: 'rgba(91,196,106,0.1)' } : undefined}>
                  <td style={{ ...sans, fontSize: '0.74rem', letterSpacing: '0.04em', color: 'rgba(14,42,82,0.55)', padding: '0.85rem 1rem 0.85rem 0', borderBottom: '1px solid rgba(14,42,82,0.12)', whiteSpace: 'nowrap' }}>
                    {row.attr}
                  </td>
                  <td style={{ ...sans, fontSize: '0.82rem', fontWeight: row.highlight ? 600 : 400, color: row.highlight ? GREEN_LIGHT : 'rgba(14,42,82,0.8)', padding: '0.85rem 1rem 0.85rem 0', borderBottom: '1px solid rgba(14,42,82,0.12)' }}>
                    {row.hemp}{row.match && <span style={{ ...sans, fontSize: '0.6rem', color: GOLD, marginLeft: '0.5rem', letterSpacing: '0.1em' }}>=</span>}
                  </td>
                  <td style={{ ...sans, fontSize: '0.82rem', fontWeight: 300, color: 'rgba(14,42,82,0.6)', padding: '0.85rem 0', borderBottom: '1px solid rgba(14,42,82,0.12)' }}>
                    {row.retak}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Rise>
      <Rise delay={0.26}>
        <p style={{ ...sans, fontSize: '0.66rem', letterSpacing: '0.04em', color: 'rgba(14,42,82,0.4)', marginTop: '1rem' }}>
          Valores de hempcrete según norma EN 16101 y formulación del benchmark. Valores de Retak: rangos típicos de hormigón celular curado en autoclave, a confirmar con ficha técnica oficial.
        </p>
      </Rise>
    </Section>
  )
}

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
      <Rise><Eyebrow>06 · El deal</Eyebrow></Rise>
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
    detail: 'Hasta hoy quedó vacía: la ambición Net Zero de YPF cubre solo Alcance 1+2, y la jerarquía de mitigación manda reducir antes de compensar. Su propio Reporte 2024 dice que la compañía busca «soluciones basadas en la naturaleza» — todavía sin un programa que las opere. El cáñamo → hempcrete y biochar es una, lista para arrancar.',
    tag: 'Propuesta', unit: 'Plan Manuel Belgrano', ypf: false,
  },
]

const APOYOS = ['Nuevas Energías', 'Y-TEC', 'YPF Luz', 'YPF Agro', 'Fundación YPF + Instituto Vaca Muerta', 'EcoGaia']

function MpEncaje() {
  return (
    <Section bg={CREAM} id="encaje">
      <Rise><Eyebrow dark>07 · El encaje en YPF</Eyebrow></Rise>
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
  { escenario: 'Mercado voluntario', precio: 'USD 15/t', fase1: 'USD 0,6M/año', escala: 'USD 7,5M/año' },
  { escenario: 'Promedio O&G NetZero', precio: 'USD 35/t', fase1: 'USD 1,4M/año', escala: 'USD 17,5M/año' },
  { escenario: 'Precio sombra interno', precio: 'USD 55/t', fase1: 'USD 2,2M/año', escala: 'USD 27,5M/año' },
]

function MpUpside() {
  return (
    <Section bg={PARCHMENT} id="upside">
      <Rise><Eyebrow dark>08 · El upside</Eyebrow></Rise>
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

      <Rise delay={0.22}>
        <div style={{ borderLeft: `2px solid ${GOLD}`, paddingLeft: '1.25rem', maxWidth: '70ch' }}>
          <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(14,42,82,0.45)', margin: '0 0 0.5rem 0' }}>
            Método
          </p>
          <p style={{ ...sans, fontWeight: 300, fontSize: '0.85rem', lineHeight: 1.65, color: 'rgba(14,42,82,0.65)', margin: 0 }}>
            Rangos y sensibilidad en lugar de pronósticos puntuales. La base de cálculo
            — 10–15 t CO₂/ha/año — se valida con mediciones propias durante el benchmark.
            La segunda línea de carbono (biochar) se desarrolla en su propia sección.
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
      <Rise><Eyebrow>09 · La segunda línea</Eyebrow></Rise>
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

const TIMELINE = [
  { year: '2026', text: 'Firma y siembra del benchmark en Neuquén y Mendoza. Acuerdo de certificación de carbono con EcoGaia (Verra / Gold Standard / Puro).' },
  { year: '2027', text: 'Arrancan las obras de Argentina LNG. Primeros bloques del piloto hempcrete.' },
  { year: '2028', text: 'Viviendas piloto construidas. Certificación del sistema constructivo.' },
  { year: '2029–30', text: 'Escala: sociedades agrícolas, planta de procesamiento, campamentos permanentes.' },
  { year: '2031', text: 'Primera exportación de Argentina LNG con la huella de carbono resuelta con activos propios.' },
]

function MpVentana() {
  return (
    <Section bg={DUSK} id="ventana">
      <Rise><Eyebrow>10 · La ventana 2026–2031</Eyebrow></Rise>
      <Rise delay={0.08}>
        <H2>Cada hito del plan acompaña un hito de YPF.</H2>
      </Rise>

      <div style={{ margin: '3rem 0 3.5rem', display: 'flex', flexDirection: 'column' }}>
        {TIMELINE.map((t, i) => (
          <Rise key={t.year} delay={0.08 + i * 0.08}>
            <div style={{
              display: 'flex', gap: 'clamp(1.25rem, 3vw, 3rem)', alignItems: 'baseline',
              padding: '1.4rem 0', borderBottom: i < TIMELINE.length - 1 ? '1px solid rgba(243,241,231,0.08)' : 'none',
            }}>
              <span style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.5rem, 2.4vw, 2.2rem)', color: i === TIMELINE.length - 1 ? GREEN_DARK : GOLD, lineHeight: 1, minWidth: 'clamp(5.5rem, 9vw, 8rem)' }}>
                {t.year}
              </span>
              <span style={{ ...sans, fontWeight: 300, fontSize: 'clamp(0.85rem, 1.1vw, 0.98rem)', lineHeight: 1.65, color: 'rgba(243,241,231,0.6)' }}>
                {t.text}
              </span>
            </div>
          </Rise>
        ))}
      </div>

      <Rise delay={0.2}>
        <p style={{ ...sans, fontWeight: 300, fontSize: 'clamp(0.92rem, 1.15vw, 1.05rem)', lineHeight: 1.78, color: 'rgba(243,241,231,0.55)', maxWidth: '60ch', marginTop: '1rem' }}>
          Cada hito del plan le entrega a YPF un activo que ya está operando: datos,
          material certificado, créditos verificados, viviendas en pie.
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
          <Eyebrow>11 · La visión</Eyebrow>
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
          <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: GOLD, margin: '3rem 0 1.25rem' }}>
            Visión a 2035 · a escala plena
          </p>
        </Rise>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1px', background: 'rgba(242,181,68,0.18)', border: '1px solid rgba(242,181,68,0.18)' }}>
          {[
            { target: 50000, suffix: '', label: 'empleos directos a escala plena' },
            { target: 100000, suffix: '', label: 'viviendas de hempcrete potenciales' },
            { target: 500000, suffix: '', label: 'toneladas de CO₂ fijadas por año' },
            { target: 27, suffix: 'M', label: 'USD por año en créditos · escala Neuquén' },
          ].map((s, i) => (
            <Rise key={s.label} delay={0.1 + i * 0.08}>
              <div style={{ background: DUSK, padding: '1.75rem 1.5rem', height: '100%' }}>
                <p style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(2rem, 3.2vw, 2.9rem)', color: GREEN_DARK, margin: '0 0 0.5rem 0', lineHeight: 1 }}>
                  <AnimatedCounter target={s.target} suffix={s.suffix} />
                </p>
                <p style={{ ...sans, fontSize: '0.72rem', color: 'rgba(243,241,231,0.5)', lineHeight: 1.55, margin: 0 }}>{s.label}</p>
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
  { year: '2026', name: 'La próxima industria', text: 'La cuenca que exporta energía suma la plataforma que construye, fija carbono y genera valor.' },
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
        <Rise><Eyebrow>12 · El cierre</Eyebrow></Rise>

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
            ...sans, fontWeight: 300, fontSize: 'clamp(0.9rem, 1.2vw, 1.02rem)', lineHeight: 1.78,
            color: 'rgba(243,241,231,0.55)', maxWidth: '58ch', margin: '0 auto 3rem', textAlign: 'center',
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
              <a href="mailto:contacto@planmanuelbelgrano.com.ar" style={{ ...sans, fontSize: '0.68rem', color: 'rgba(243,241,231,0.4)', textDecoration: 'none', letterSpacing: '0.04em' }}>
                contacto@planmanuelbelgrano.com.ar
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
      <MpSolucion />
      <MpActivo />
      <MpPlan />
      <MpProceso />
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
