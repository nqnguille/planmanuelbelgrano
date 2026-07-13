'use client'

/* ============================================================
   PLAN MANUEL BELGRANO — MASTERPLAN V2 ("decision memo")
   Rediseño completo orientado a la DECISIÓN de YPF:
   en 5 minutos se entiende qué se pide, qué riesgo se toma,
   qué se gana y qué tiene que pasar ahora.
   Estética: data-room institucional, navy profundo + papel,
   índice lateral fijo, barra de progreso, secciones alternadas.
   Bilingüe ES / EN (useLang).
   ============================================================ */

import { motion, useScroll, useSpring } from 'framer-motion'
import {
  type CSSProperties,
  type ReactNode,
} from 'react'
import { useLang, type Lang } from '@/lib/i18n'

/* ---------- tokens ---------- */
const INK = '#06152F'
const NAVY = '#0A1F42'
const DUSK = '#0E2A52'
const PAPER = '#FAF8F1'
const CREAM = '#F3F1E7'
const GOLD = '#F2B544'
const GREEN = '#5BC46A'
const GREEN_DK = '#2F8F3A'
const CELESTE = '#3D78B8'
const RED = '#C5573F'
const LINE = 'rgba(6,21,47,0.13)'
const LINE_D = 'rgba(243,241,231,0.16)'
const MUTED = 'rgba(6,21,47,0.66)'
const FAINT = 'rgba(6,21,47,0.5)'
const CREAM_MUTED = 'rgba(243,241,231,0.74)'
const CREAM_FAINT = 'rgba(243,241,231,0.55)'

const serif: CSSProperties = { fontFamily: 'var(--font-garamond), "EB Garamond", serif', fontWeight: 400 }
const sans: CSSProperties = { fontFamily: 'var(--font-hanken), "Plus Jakarta Sans", sans-serif' }

const MEET_URL = 'https://calendar.app.google/PBcbPHeEvsxKNR4X8'
const WHATSAPP_URL =
  'https://wa.me/5492994229436?text=' +
  encodeURIComponent('Hola, quiero conversar sobre el Plan Manuel Belgrano.')

/* ---------- texto enriquecido: **negrita** ---------- */
function rich(s: string, boldColor?: string): ReactNode {
  const parts = s.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((p, i) =>
    p.startsWith('**') && p.endsWith('**') ? (
      <strong key={i} style={{ fontWeight: 600, color: boldColor ?? 'inherit' }}>
        {p.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{p}</span>
    ),
  )
}

/* ---------- secciones (índice) ---------- */
const SECTIONS: { id: string; es: string; en: string }[] = [
  { id: 'decision', es: 'La decisión', en: 'The decision' },
  { id: 'resumen', es: 'En una página', en: 'On one page' },
  { id: 'momento', es: 'El momento', en: 'The moment' },
  { id: 'solucion', es: 'La solución', en: 'The solution' },
  { id: 'ypf', es: 'Encaje con YPF', en: 'Fit with YPF' },
  { id: 'pedido', es: 'El pedido', en: 'The ask' },
  { id: 'validacion', es: 'La validación', en: 'The validation' },
  { id: 'carbono', es: 'El carbono', en: 'The carbon' },
  { id: 'equipo', es: 'Quiénes', en: 'Who' },
  { id: 'legal', es: 'Legal', en: 'Legal' },
  { id: 'riesgos', es: 'Riesgos', en: 'Risks' },
  { id: 'horizonte', es: 'El horizonte', en: 'The horizon' },
  { id: 'anexo', es: 'Anexo', en: 'Annex' },
  { id: 'cierre', es: 'Cierre', en: 'Close' },
]

/* ============================================================
   PRIMITIVOS
   ============================================================ */

function Reveal({ children, delay = 0, style }: { children: ReactNode; delay?: number; style?: CSSProperties }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      style={style}
    >
      {children}
    </motion.div>
  )
}

function Section({
  id,
  children,
  bg = PAPER,
  dark = false,
  pad = true,
}: {
  id?: string
  children: ReactNode
  bg?: string
  dark?: boolean
  pad?: boolean
}) {
  return (
    <section
      id={id}
      style={{
        background: bg,
        color: dark ? CREAM : INK,
        padding: pad ? 'clamp(3.5rem, 8vw, 7rem) clamp(1.3rem, 5vw, 4rem)' : 0,
        scrollMarginTop: '1rem',
      }}
    >
      <div style={{ maxWidth: '1060px', margin: '0 auto', width: '100%' }}>{children}</div>
    </section>
  )
}

function Kicker({ children, color = CELESTE }: { children: ReactNode; color?: string }) {
  return (
    <p style={{ ...sans, fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color, fontWeight: 600, margin: 0 }}>
      {children}
    </p>
  )
}

function Chapter({
  num,
  kicker,
  title,
  dek,
  dark = false,
}: {
  num: string
  kicker: string
  title: string
  dek?: string
  dark?: boolean
}) {
  return (
    <Reveal>
      <header style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.1rem', marginBottom: '0.6rem' }}>
          <span style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(2.2rem, 4vw, 3rem)', color: GOLD, lineHeight: 1 }}>{num}</span>
          <Kicker color={dark ? GOLD : CELESTE}>{kicker}</Kicker>
        </div>
        <h2 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(2rem, 4.6vw, 3.3rem)', lineHeight: 1.05, color: dark ? CREAM : INK, margin: 0, letterSpacing: '-0.01em' }}>
          {title}
        </h2>
        {dek && (
          <p style={{ ...sans, fontWeight: 300, fontSize: 'clamp(1rem, 1.5vw, 1.18rem)', lineHeight: 1.55, color: dark ? CREAM_MUTED : MUTED, maxWidth: '62ch', margin: '1.1rem 0 0' }}>
            {dek}
          </p>
        )}
        <div style={{ height: 1, background: dark ? LINE_D : LINE, margin: '2rem 0 0' }} />
      </header>
    </Reveal>
  )
}

function P({ children, max = '70ch', dark = false, style }: { children: ReactNode; max?: string; dark?: boolean; style?: CSSProperties }) {
  return (
    <p style={{ ...sans, fontWeight: 300, fontSize: '1rem', lineHeight: 1.75, color: dark ? CREAM_MUTED : 'rgba(6,21,47,0.78)', maxWidth: max, margin: '0 0 1.2rem', ...style }}>
      {children}
    </p>
  )
}

function Statement({ children, by, dark = false }: { children: ReactNode; by?: string; dark?: boolean }) {
  return (
    <Reveal>
      <div style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: 'clamp(1.1rem, 2.5vw, 2rem)', margin: '0.5rem 0 2.2rem', maxWidth: '42rem' }}>
        <p style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.45rem, 2.8vw, 2.3rem)', lineHeight: 1.26, color: dark ? CREAM : INK, margin: 0 }}>{children}</p>
        {by && <p style={{ ...sans, fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: dark ? CREAM_FAINT : FAINT, margin: '1rem 0 0' }}>{by}</p>}
      </div>
    </Reveal>
  )
}

function Label({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: dark ? GOLD : CELESTE, fontWeight: 600, margin: '2.5rem 0 1.1rem' }}>
      {children}
    </p>
  )
}

/* Tabla responsive (apila en mobile, ver globals .mp-doc-table) */
function DocTable({ head, rows, dark = false }: { head: readonly string[]; rows: readonly (readonly ReactNode[])[]; dark?: boolean }) {
  const bl = dark ? LINE_D : LINE
  return (
    <Reveal>
      <div style={{ overflowX: 'auto', margin: '0.4rem 0 1rem' }}>
        <table className="mp-doc-table" style={{ width: '100%', borderCollapse: 'collapse', minWidth: head.length > 2 ? '600px' : '440px' }}>
          <thead>
            <tr>
              {head.map((h, i) => (
                <th key={i} style={{ ...sans, fontSize: '0.56rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: dark ? CREAM_FAINT : FAINT, textAlign: 'left', fontWeight: 600, padding: '0 1.1rem 0.8rem 0', borderBottom: `1px solid ${dark ? 'rgba(243,241,231,0.3)' : 'rgba(6,21,47,0.28)'}`, width: i === 0 && head.length === 2 ? '36%' : undefined }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, ri) => (
              <tr key={ri}>
                {r.map((cell, ci) => (
                  <td key={ci} data-label={ci === 0 ? '' : head[ci]} style={{ ...sans, fontWeight: ci === 0 ? 500 : 300, fontSize: ci === 0 ? '0.92rem' : '0.88rem', lineHeight: 1.6, color: ci === 0 ? (dark ? CREAM : INK) : (dark ? CREAM_MUTED : 'rgba(6,21,47,0.74)'), padding: '0.95rem 1.1rem 0.95rem 0', borderBottom: `1px solid ${bl}`, verticalAlign: 'top' }}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Reveal>
  )
}

/* ============================================================
   NAVEGACIÓN: barra de progreso
   ============================================================ */

function ProgressBar() {
  const { scrollYProgress } = useScroll()
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })
  return (
    <motion.div
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: 3, background: GOLD,
        transformOrigin: '0 0', scaleX: x, zIndex: 60,
      }}
    />
  )
}

/* ---------- botones CTA ---------- */
function CTAs({ meet, wa }: { meet: string; wa: string }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginTop: '1.8rem' }}>
      <a href={MEET_URL} target="_blank" rel="noopener noreferrer" style={{ ...sans, fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', background: GREEN, color: INK, textDecoration: 'none', padding: '0.95rem 1.6rem', borderRadius: 4 }}>
        {meet}
      </a>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ ...sans, fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', background: 'transparent', color: CREAM, textDecoration: 'none', padding: '0.95rem 1.6rem', borderRadius: 4, border: `1px solid ${LINE_D}` }}>
        {wa}
      </a>
    </div>
  )
}

/* ============================================================
   COPY V2
   ============================================================ */

const TXT = {
  es: {
    confidential: 'Documento confidencial · V2 de revisión · Junio 2026',
    title: 'Plan Manuel Belgrano',
    subtitle: 'Un decision memo para YPF: validar una cadena local de cáñamo industrial que convierte vivienda, empleo y carbono en un activo estratégico.',
    issuer: 'Flora Cáñamo Neuquino SRL · Guillermo Sandoval',
    recipient: 'Equipo legal y técnico de YPF S.A.',
    cta_meet: 'Agendar reunión',
    cta_whatsapp: 'WhatsApp',

    decision_k: 'La decisión para YPF',
    decision_t: 'Aprobar una validación acotada, no una escala a ciegas.',
    decision_d: 'La propuesta es iniciar una Fase 1 de benchmark agrícola y técnico —prevista para octubre de 2026— para decidir con datos si el modelo merece escalar.',
    decision_cards: [
      ['Qué se aprueba', 'Un benchmark de bajo costo relativo, con dos ecorregiones, genéticas comparadas y primeros materiales.'],
      ['Qué recibe YPF', 'Opción preferente / titularidad futura del carbono, posición de socio fundador y una plataforma de licencia social.'],
      ['Qué no asume', 'YPF no opera el cultivo, no toma escala total desde el día uno y no comunica claims ambientales sin certificación.'],
    ],
    decision_statement: 'YPF no estaría comprando una promesa verde. Estaría financiando una validación acotada para convertir una necesidad territorial en un activo industrial y ambiental propio.',
    decision_by: 'La tesis en una frase',

    memo_k: 'En una página',
    memo_t: 'El caso ejecutivo',
    memo_d: 'La lectura rápida para decidir si vale la pena avanzar a una carta de intención.',
    memo_rows: [
      ['Problema', 'Vaca Muerta tracciona población, empleo y vivienda; la zona no absorbe suficiente arraigo local.'],
      ['Solución', 'Cáñamo industrial → biomasa → hempcrete/biochar → vivienda, empleo y carbono durable.'],
      ['Rol de YPF', 'Habilitar, anclar y financiar por hitos el inicio; Flora y su consorcio ejecutan.'],
      ['Riesgo inicial', 'Fase 1 reversible: benchmark, datos, muestras, MRV inicial y go/no-go.'],
      ['Upside', 'Licencia social, carbono propio, vivienda para comunidades operativas y nueva industria nacional.'],
      ['Próximo paso', 'MOU no vinculante de una página para ordenar roles, ventana de siembra y preferencia de carbono.'],
    ],

    moment_k: 'El momento',
    moment_t: 'Tres presiones en el mismo territorio',
    moment_d: 'La oportunidad aparece porque problemas que suelen tratarse por separado —vivienda, empleo y carbono— comparten una geografía y una cadena posible.',
    pressures: [
      ['Vivienda', 'Déficit habitacional, alquileres caros y crecimiento acelerado en la zona de Vaca Muerta.'],
      ['Empleo local', 'Tensión entre demanda de obra, empresas externas y mano de obra regional que queda fuera.'],
      ['Industria frenada', 'El cáñamo argentino tiene marco legal, pero necesita orden institucional, genética y escala.'],
    ],
    clips: [
      ['Río Negro', 'Neuquén podría llegar a 1,5 millones de habitantes en 30 años.'],
      ['Infobae', 'Añelo advierte: “No se vengan con la familia”.'],
      ['LM Neuquén', 'Obras que podrían ejecutar empresas locales se contratan afuera.'],
    ],

    sol_k: 'La solución',
    sol_t: 'De la semilla a la llave',
    sol_d: 'Una cadena integrada, trazable y territorial: cultivar, transformar, construir y certificar carbono sin perder custodia.',
    chain: ['Semilla', 'Cultivo', 'Cosecha', 'Decorticación', 'Mezclado', 'Hempcrete', 'Construcción', 'Vivienda'],
    products: [
      ['Hempcrete', 'Material biobasado para bloques y viviendas con alta aislación térmica y almacenamiento de carbono durante la vida útil de la construcción.'],
      ['Biochar', 'Producto de pirólisis de residuos vegetales que fija carbono por siglos y mejora suelos; segunda línea de valor de la misma hectárea.'],
    ],
    specs: [
      ['0,06–0,12', 'W/mK', 'Conductividad térmica de referencia.'],
      ['Clase A', 'fuego', 'Material no combustible.'],
      ['>90%', 'planta usada', 'Hempcrete + biochar, baja merma.'],
      ['MRV', 'trazable', 'Datos desde cultivo hasta crédito.'],
    ],

    ypf_k: 'Encaje con YPF',
    ypf_t: 'Donde YPF gana sin distraerse de su núcleo',
    ypf_d: 'El plan no pide que YPF se vuelva agricultor ni constructor. Pide que use su capacidad institucional para ordenar una cadena que puede servir a su licencia social y a su estrategia ambiental.',
    ypf_rows: [
      ['Licencia social', 'Vivienda accesible y empleo de absorción en comunidades vinculadas a la operación.'],
      ['Carbono propio', 'Créditos generados en territorio operativo, no comprados a terceros.'],
      ['Desarrollo productivo', 'YPF como catalizador de una nueva industria nacional con base regional.'],
      ['Riesgo controlado', 'Decisiones por fases, contra hitos y con go/no-go antes de escalar.'],
    ],

    ask_k: 'El pedido',
    ask_t: 'Habilitar, no operar',
    ask_d: 'La propuesta separa con claridad lo que YPF aporta, lo que no asume y lo que recibe a cambio.',
    yes: ['MOU no vinculante de una página.', 'Financiamiento/acompaniamiento de Fase 1 contra hitos.', 'Contraparte legal/técnica para estructurar titularidad del carbono.', 'Peso institucional para ordenar ARICCAME, INASE y provincia.'],
    no: ['No opera el cultivo.', 'No toma escala total desde el día uno.', 'No compra la empresa ni bloquea el territorio.', 'No comunica claims ambientales sin certificación.'],
    gets: ['Socio fundador del programa.', 'Preferencia/titularidad futura del carbono.', 'Datos técnicos para decidir escala.', 'Narrativa concreta de desarrollo territorial.'],

    val_k: 'Validación',
    val_t: 'Fase 1: comprar información crítica',
    val_d: 'El benchmark es el mecanismo para transformar visión en datos: genética, rendimiento, biomasa, trazabilidad y primeros materiales.',
    deliverables: [
      ['Ensayo Neuquén', 'Adaptación genética en territorio operativo.'],
      ['Ensayo Mendoza', 'Comparación ecorregional y robustez.'],
      ['Biomasa inicial', 'Primeros bloques / muestras de hempcrete y línea biochar.'],
      ['MRV piloto', 'Trazabilidad digital desde el cultivo.'],
      ['Informe go/no-go', 'Paquete técnico-legal para decidir Fase 2.'],
    ],
    phases: [
      ['Fase 1 — Benchmark', 'Octubre 2026', 'Dos ensayos, genética comparada, biomasa y MRV inicial.'],
      ['Fase 2 — Reproducción', 'Post-validación', 'Multiplicar genética campeona y preparar escala.'],
      ['Fase 3 — Escala', 'Opcional', 'Producción plena: material, vivienda y carbono verificable.'],
    ],

    carbon_k: 'Carbono',
    carbon_t: 'Un solo hilo de custodia',
    carbon_d: 'La defendibilidad del carbono no depende solo de una cláusula contractual; depende de diseñar la cadena para que el crédito se mida, certifique, registre y retire una sola vez.',
    carbon_statement: 'Semilla, cultivo, material, vivienda y residuo pertenecen a una misma arquitectura de trazabilidad. Ese diseño reduce el riesgo de doble contabilidad.',
    carbon_rows: [
      ['MRV', 'Sistema propio a desarrollar', 'Trazabilidad del cultivo y la biomasa.'],
      ['Certificación carbono', 'EcoGaia', 'Verra / Gold Standard / estándares aplicables.'],
      ['Sistema constructivo', 'INTI', 'Validación nacional del material.'],
      ['Titularidad', 'YPF', 'Registro serializado y retiro a un solo titular.'],
    ],
    asset_rows: [
      ['Nature-based', 'USD 30/tCO₂e', 'USD 1,2 M/año'],
      ['Remoción durable', 'USD 75/tCO₂e', 'USD 3,0 M/año'],
      ['Biochar premium', 'USD 164/tCO₂e', 'USD 6,6 M/año'],
    ],
    foot: 'Cifras ilustrativas. Supuesto de referencia: 4.000 ha y 10 tCO₂/ha/año. Debe validarse en benchmark y negociación.',

    team_k: 'Quiénes',
    team_t: 'Flora integra; los partners ejecutan',
    team_d: 'El proyecto no depende de una sola persona: separa originación, cultivo, certificación y dimensión territorial.',
    partners: [
      ['Flora Cáñamo Neuquino', 'Integrador', 'Diseño del proyecto, coordinación de cadena, vehículo operativo y relación con YPF.'],
      ['Fundación GEN', 'Cultivo', 'Licencia agrícola, maquinaria, know-how agronómico y ejecución del benchmark.'],
      ['EcoGaia', 'Carbono', 'Desarrollo y certificación de créditos bajo estándares internacionales.'],
      ['Planificación territorial', 'Comunidad', 'Diseño de la dimensión urbana, social y participativa.'],
    ],

    legal_k: 'Legal',
    legal_t: 'Marco vigente, estructura prudente',
    legal_d: 'El marco legal existe; la propuesta es avanzar con prudencia documental, sin sobreactuar derechos antes de la validación.',
    legal_rows: [
      ['Ley 27.669', 'Crea ARICCAME y marco para la industria del cannabis medicinal y cáñamo industrial.'],
      ['Decreto 883/2022', 'Reglamenta cultivo, procesamiento y comercialización con THC < 1%.'],
      ['Licencias', 'Fundación GEN posee licencia agrícola; la línea industrial se estructura con Flora.'],
      ['MOU', 'No vinculante, una página, para ordenar roles y ventana de siembra.'],
    ],

    risk_k: 'Riesgos',
    risk_t: 'Diseñados para no esconderse',
    risk_d: 'La credibilidad del plan mejora cuando los riesgos aparecen de frente y cada uno tiene una gestión concreta.',
    risks: [
      ['Regulatorio', 'Marco nacional vigente + rol institucional de YPF para ordenar interlocución.'],
      ['Operativo', 'Dos ecorregiones en paralelo y ejecución con socio licenciado.'],
      ['Doble contabilidad', 'Custodia única, registro serializado y titular único.'],
      ['Greenwashing', 'Comunicación solo sobre datos certificados por terceros.'],
      ['Escala', 'No se aborda hasta validar genética y biomasa.'],
      ['Responsabilidad', 'Roles contractuales, hitos y desembolsos condicionados.'],
    ],

    horizon_k: 'El horizonte',
    horizon_t: 'Una industria interrumpida hace 230 años',
    horizon_d: 'La Fase 1 es acotada, pero lo que desbloquea es mayor: alimentos, textiles, bioplásticos, papel, cosmética, materiales y carbono en una cadena nacional.',
    belgrano_quote: 'Belgrano proponía lino y cáñamo como herramientas de valor agregado y trabajo. El Plan Manuel Belgrano actualiza esa intuición con datos, vivienda y carbono.',

    annex_k: 'Anexo de supuestos',
    annex_t: 'Lo que debe quedar explícito para Legal y Técnica',
    annex_d: 'El rediseño separa narrativa de supuestos. Todo número relevante debe quedar trazable, validable o marcado como estimación.',
    annex: [
      ['Demanda territorial', 'Déficit habitacional, crecimiento poblacional, alquileres y empleo local.'],
      ['Materiales', 'Conductividad, fuego, durabilidad y normas técnicas aplicables al hempcrete.'],
      ['Carbono', 'Rendimientos por hectárea, metodología MRV, estándar y precio de referencia.'],
      ['Gobernanza', 'Roles del consorcio, titularidad del crédito y no doble reclamo.'],
      ['Fase 1', 'Alcance, presupuesto, hitos, entregables y criterio de go/no-go.'],
    ],

    close_k: 'La visión',
    close_t: 'Vaca Muerta ya dio energía. Ahora puede dar arraigo.',
    close_d: 'Vivienda, empleo local y carbono verificable en el mismo territorio donde YPF ya tiene escala. No en lugar del petróleo: a partir de su capacidad de construir país.',
    close_big_pre: 'Belgrano ',
    close_big_em: 'tenía razón.',
    close_sub: 'Doscientos treinta años después, su sueño vuelve a ser el plan más moderno que tenemos.',
  },

  en: {
    confidential: 'Confidential document · V2 review · June 2026',
    title: 'Manuel Belgrano Plan',
    subtitle: 'A decision memo for YPF: validate a local industrial-hemp chain that turns housing, jobs and carbon into a strategic asset.',
    issuer: 'Flora Cáñamo Neuquino SRL · Guillermo Sandoval',
    recipient: 'YPF S.A. legal and technical team',
    cta_meet: 'Schedule a meeting',
    cta_whatsapp: 'WhatsApp',

    decision_k: 'The decision for YPF',
    decision_t: 'Approve a bounded validation, not blind scale.',
    decision_d: 'The proposal is to launch a Phase 1 agricultural and technical benchmark — planned for October 2026 — to decide with data whether the model deserves to scale.',
    decision_cards: [
      ['What is approved', 'A relatively low-cost benchmark, with two ecoregions, compared genetics and first materials.'],
      ['What YPF receives', 'Preferred option / future ownership of carbon, founding-partner position and a social-license platform.'],
      ['What it does not assume', 'YPF does not operate cultivation, does not take full scale from day one and does not communicate environmental claims without certification.'],
    ],
    decision_statement: 'YPF would not be buying a green promise. It would be financing a bounded validation to turn a territorial need into its own industrial and environmental asset.',
    decision_by: 'The thesis in one sentence',

    memo_k: 'On one page',
    memo_t: 'The executive case',
    memo_d: 'The fast read to decide whether it is worth moving toward a letter of intent.',
    memo_rows: [
      ['Problem', 'Vaca Muerta pulls population, jobs and housing; the region does not absorb enough local rootedness.'],
      ['Solution', 'Industrial hemp → biomass → hempcrete/biochar → housing, jobs and durable carbon.'],
      ['YPF role', 'Enable, anchor and finance the start against milestones; Flora and its consortium execute.'],
      ['Initial risk', 'Reversible Phase 1: benchmark, data, samples, initial MRV and go/no-go.'],
      ['Upside', 'Social license, own carbon, housing for operating communities and a new national industry.'],
      ['Next step', 'A one-page non-binding MOU to set roles, sowing window and carbon preference.'],
    ],

    moment_k: 'The moment',
    moment_t: 'Three pressures in the same territory',
    moment_d: 'The opportunity exists because problems usually treated separately — housing, employment and carbon — share a geography and a possible chain.',
    pressures: [
      ['Housing', 'Housing shortage, expensive rents and accelerated growth in the Vaca Muerta region.'],
      ['Local jobs', 'Tension between construction demand, outside contractors and regional labor left out.'],
      ['Stalled industry', 'Argentina’s hemp sector has a legal framework, but needs institutional order, genetics and scale.'],
    ],
    clips: [
      ['Río Negro', 'Neuquén could reach 1.5 million inhabitants in 30 years.'],
      ['Infobae', 'Añelo warns: “Do not come with your family.”'],
      ['LM Neuquén', 'Works local firms could execute are hired outside.'],
    ],

    sol_k: 'The solution',
    sol_t: 'From seed to key',
    sol_d: 'An integrated, traceable and territorial chain: grow, transform, build and certify carbon without losing custody.',
    chain: ['Seed', 'Cultivation', 'Harvest', 'Decortication', 'Mixing', 'Hempcrete', 'Construction', 'Housing'],
    products: [
      ['Hempcrete', 'A bio-based material for blocks and housing, with high thermal insulation and carbon storage during the building’s service life.'],
      ['Biochar', 'A pyrolysis product from plant residues that stores carbon for centuries and improves soils; a second value line from the same hectare.'],
    ],
    specs: [
      ['0.06–0.12', 'W/mK', 'Reference thermal conductivity.'],
      ['Class A', 'fire', 'Non-combustible material.'],
      ['>90%', 'plant used', 'Hempcrete + biochar, low waste.'],
      ['MRV', 'traceable', 'Data from crop to credit.'],
    ],

    ypf_k: 'Fit with YPF',
    ypf_t: 'Where YPF wins without leaving its core',
    ypf_d: 'The plan does not ask YPF to become a farmer or builder. It asks YPF to use its institutional capacity to order a chain that can serve its social license and environmental strategy.',
    ypf_rows: [
      ['Social license', 'Affordable housing and absorption jobs in communities linked to operations.'],
      ['Own carbon', 'Credits generated in operating territory, not bought from third parties.'],
      ['Productive development', 'YPF as catalyst of a new national industry with a regional base.'],
      ['Controlled risk', 'Phased decisions, against milestones, with go/no-go before scaling.'],
    ],

    ask_k: 'The ask',
    ask_t: 'Enable, not operate',
    ask_d: 'The proposal clearly separates what YPF contributes, what it does not assume and what it receives in return.',
    yes: ['One-page non-binding MOU.', 'Phase 1 financing/support against milestones.', 'Legal/technical counterpart to structure carbon ownership.', 'Institutional weight to align ARICCAME, INASE and province.'],
    no: ['Does not operate cultivation.', 'Does not take full scale from day one.', 'Does not buy the company or block the territory.', 'Does not communicate environmental claims without certification.'],
    gets: ['Founding partner of the program.', 'Preference/future ownership of carbon.', 'Technical data to decide scale.', 'Concrete territorial-development narrative.'],

    val_k: 'Validation',
    val_t: 'Phase 1: buying critical information',
    val_d: 'The benchmark turns vision into data: genetics, yield, biomass, traceability and first materials.',
    deliverables: [
      ['Neuquén trial', 'Genetic adaptation in operating territory.'],
      ['Mendoza trial', 'Ecoregional comparison and robustness.'],
      ['Initial biomass', 'First hempcrete blocks/samples and biochar line.'],
      ['Pilot MRV', 'Digital traceability from cultivation.'],
      ['Go/no-go report', 'Technical-legal package to decide Phase 2.'],
    ],
    phases: [
      ['Phase 1 — Benchmark', 'October 2026', 'Two trials, compared genetics, biomass and initial MRV.'],
      ['Phase 2 — Reproduction', 'Post-validation', 'Multiply winning genetics and prepare scale.'],
      ['Phase 3 — Scale', 'Optional', 'Full production: material, housing and verifiable carbon.'],
    ],

    carbon_k: 'Carbon',
    carbon_t: 'A single chain of custody',
    carbon_d: 'Carbon defensibility does not rely only on a contractual clause; it relies on designing the chain so the credit is measured, certified, registered and retired only once.',
    carbon_statement: 'Seed, crop, material, housing and residue belong to one traceability architecture. That design reduces double-counting risk.',
    carbon_rows: [
      ['MRV', 'Proprietary system to develop', 'Crop and biomass traceability.'],
      ['Carbon certification', 'EcoGaia', 'Verra / Gold Standard / applicable standards.'],
      ['Construction system', 'INTI', 'National validation of the material.'],
      ['Ownership', 'YPF', 'Serialized registry and retirement to a single holder.'],
    ],
    asset_rows: [
      ['Nature-based', 'USD 30/tCO₂e', 'USD 1.2 M/year'],
      ['Durable removal', 'USD 75/tCO₂e', 'USD 3.0 M/year'],
      ['Premium biochar', 'USD 164/tCO₂e', 'USD 6.6 M/year'],
    ],
    foot: 'Illustrative figures. Reference assumption: 4,000 ha and 10 tCO₂/ha/year. To be validated in benchmark and negotiation.',

    team_k: 'Who',
    team_t: 'Flora integrates; partners execute',
    team_d: 'The project does not depend on one person: it separates origination, cultivation, certification and the territorial dimension.',
    partners: [
      ['Flora Cáñamo Neuquino', 'Integrator', 'Project design, chain coordination, operating vehicle and relationship with YPF.'],
      ['Fundación GEN', 'Cultivation', 'Agricultural license, machinery, agronomic know-how and benchmark execution.'],
      ['EcoGaia', 'Carbon', 'Development and certification of credits under international standards.'],
      ['Territorial planning', 'Community', 'Design of the urban, social and participatory dimension.'],
    ],

    legal_k: 'Legal',
    legal_t: 'Framework in force, prudent structure',
    legal_d: 'The legal framework exists; the proposal is to move with documentary prudence, without overstating rights before validation.',
    legal_rows: [
      ['Law 27,669', 'Creates ARICCAME and the framework for medical cannabis and industrial hemp.'],
      ['Decree 883/2022', 'Regulates cultivation, processing and commercialization with THC < 1%.'],
      ['Licenses', 'Fundación GEN holds the agricultural license; the industrial line is structured with Flora.'],
      ['MOU', 'Non-binding, one page, to set roles and sowing window.'],
    ],

    risk_k: 'Risks',
    risk_t: 'Designed not to hide',
    risk_d: 'The plan becomes more credible when risks appear upfront and each has concrete management.',
    risks: [
      ['Regulatory', 'National framework in force + YPF institutional role to align interlocution.'],
      ['Operational', 'Two ecoregions in parallel and execution with licensed partner.'],
      ['Double counting', 'Single custody, serialized registry and single holder.'],
      ['Greenwashing', 'Communication only on third-party certified data.'],
      ['Scale', 'Not addressed until genetics and biomass are validated.'],
      ['Liability', 'Contractual roles, milestones and conditioned disbursements.'],
    ],

    horizon_k: 'The horizon',
    horizon_t: 'An industry interrupted 230 years ago',
    horizon_d: 'Phase 1 is bounded, but what it unlocks is larger: food, textiles, bioplastics, paper, cosmetics, materials and carbon in a national chain.',
    belgrano_quote: 'Belgrano proposed flax and hemp as tools for value added and work. The Manuel Belgrano Plan updates that intuition with data, housing and carbon.',

    annex_k: 'Assumptions annex',
    annex_t: 'What Legal and Technical need explicit',
    annex_d: 'The redesign separates narrative from assumptions. Every relevant number must be traceable, validatable or marked as an estimate.',
    annex: [
      ['Territorial demand', 'Housing shortage, population growth, rents and local employment.'],
      ['Materials', 'Conductivity, fire, durability and technical standards applicable to hempcrete.'],
      ['Carbon', 'Yields per hectare, MRV methodology, standard and reference price.'],
      ['Governance', 'Consortium roles, credit ownership and no double claim.'],
      ['Phase 1', 'Scope, budget, milestones, deliverables and go/no-go criteria.'],
    ],

    close_k: 'The vision',
    close_t: 'Vaca Muerta has already given energy. Now it can give roots.',
    close_d: 'Housing, local jobs and verifiable carbon in the same territory where YPF already has scale. Not instead of oil: from its capacity to build a country.',
    close_big_pre: 'Belgrano ',
    close_big_em: 'was right.',
    close_sub: 'Two hundred and thirty years later, his dream is once again the most modern plan we have.',
  },
} as const

/* ============================================================
   SECCIONES
   ============================================================ */

type CopyV2 = (typeof TXT)[Lang]

function Hero({ t, lang }: { t: CopyV2; lang: Lang }) {
  return (
    <section style={{ position: 'relative', minHeight: '100svh', background: INK, color: CREAM, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
      <img src="/hero/relato/etapa1.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.22 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(6,21,47,0.7), rgba(6,21,47,0.94))' }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1020, margin: '0 auto', padding: 'clamp(5rem, 12vw, 8rem) clamp(1.4rem, 6vw, 5rem)', width: '100%' }}>
        <Reveal>
          <Kicker color={GOLD}>{t.confidential}</Kicker>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(3rem, 9vw, 6.5rem)', lineHeight: 1, color: CREAM, margin: '1rem 0 1.4rem', letterSpacing: '-0.02em' }}>
            {t.title}
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p style={{ ...sans, fontWeight: 300, fontSize: 'clamp(1.05rem, 1.7vw, 1.4rem)', lineHeight: 1.5, color: CREAM_MUTED, maxWidth: '44ch', margin: '0 0 2.4rem' }}>
            {t.subtitle}
          </p>
        </Reveal>
        <Reveal delay={0.28}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem 2.5rem', borderTop: `1px solid ${LINE_D}`, borderBottom: `1px solid ${LINE_D}`, padding: '1.2rem 0', maxWidth: '44rem' }}>
            <span style={{ ...sans, fontSize: '0.8rem', color: CREAM_FAINT }}><span style={{ color: GOLD, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.58rem', marginRight: '0.6em' }}>{lang === 'es' ? 'Emisor' : 'Issuer'}</span>{t.issuer}</span>
            <span style={{ ...sans, fontSize: '0.8rem', color: CREAM_FAINT }}><span style={{ color: GOLD, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.58rem', marginRight: '0.6em' }}>{lang === 'es' ? 'Destinatario' : 'Recipient'}</span>{t.recipient}</span>
          </div>
        </Reveal>
        <Reveal delay={0.36}>
          <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(242,181,68,0.7)', margin: '2.6rem 0 1.1rem' }}>{lang === 'es' ? 'Contenido' : 'Contents'}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.4rem 2rem' }}>
            {SECTIONS.map((s, i) => (
              <a key={s.id} href={`#${s.id}`} style={{ ...sans, fontSize: '0.86rem', color: CREAM_MUTED, textDecoration: 'none', display: 'flex', gap: '0.85rem', padding: '0.4rem 0', borderBottom: '1px solid rgba(243,241,231,0.08)' }}>
                <span style={{ ...serif, fontStyle: 'italic', color: 'rgba(242,181,68,0.85)', minWidth: '1.6rem' }}>{String(i + 1).padStart(2, '0')}</span>
                {lang === 'es' ? s.es : s.en}
              </a>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.44}>
          <CTAs meet={t.cta_meet} wa={t.cta_whatsapp} />
        </Reveal>
      </div>
    </section>
  )
}


function isEs(t: CopyV2) {
  return t.confidential.startsWith('Documento')
}

function Decision({ t }: { t: CopyV2 }) {
  return (
    <Section id="decision" bg={PAPER}>
      <Chapter num="01" kicker={t.decision_k} title={t.decision_t} dek={t.decision_d} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(235px, 1fr))', gap: '1px', background: LINE, border: `1px solid ${LINE}` }}>
        {t.decision_cards.map((c, i) => (
          <Reveal key={c[0]} delay={i * 0.07}>
            <div style={{ background: PAPER, padding: 'clamp(1.4rem, 3vw, 2rem)', height: '100%' }}>
              <p style={{ ...serif, fontStyle: 'italic', color: i === 2 ? RED : GREEN_DK, fontSize: 'clamp(1.45rem, 2.4vw, 2rem)', margin: '0 0 0.7rem' }}>{c[0]}</p>
              <p style={{ ...sans, color: MUTED, fontWeight: 300, lineHeight: 1.65, fontSize: '0.9rem', margin: 0 }}>{c[1]}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <div style={{ marginTop: '2.4rem' }}>
        <Statement by={t.decision_by}>{t.decision_statement}</Statement>
      </div>
    </Section>
  )
}

function Memo({ t }: { t: CopyV2 }) {
  return (
    <Section id="resumen" bg={INK} dark>
      <Chapter num="02" kicker={t.memo_k} title={t.memo_t} dek={t.memo_d} dark />
      <DocTable dark head={isEs(t) ? ['Tema', 'Lectura ejecutiva'] : ['Topic', 'Executive read']} rows={t.memo_rows} />
    </Section>
  )
}

function Moment({ t }: { t: CopyV2 }) {
  return (
    <Section id="momento" bg={CREAM}>
      <Chapter num="03" kicker={t.moment_k} title={t.moment_t} dek={t.moment_d} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        {t.pressures.map((p, i) => (
          <Reveal key={p[0]} delay={i * 0.06}>
            <div style={{ borderTop: `2px solid ${i === 0 ? GOLD : i === 1 ? CELESTE : GREEN}`, background: '#fff', padding: '1.5rem', minHeight: 150 }}>
              <p style={{ ...serif, fontStyle: 'italic', color: INK, fontSize: '1.8rem', margin: '0 0 0.7rem' }}>{p[0]}</p>
              <P style={{ fontSize: '0.9rem', margin: 0 }}>{p[1]}</P>
            </div>
          </Reveal>
        ))}
      </div>
      <Label>{isEs(t) ? 'Señales públicas' : 'Public signals'}</Label>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '0.8rem' }}>
        {t.clips.map((c, i) => (
          <Reveal key={c[0] + i} delay={i * 0.05}>
            <div style={{ background: PAPER, border: `1px solid ${LINE}`, padding: '1rem' }}>
              <p style={{ ...sans, color: CELESTE, fontWeight: 600, fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 0.6rem' }}>{c[0]}</p>
              <p style={{ ...serif, fontStyle: 'italic', fontSize: '1.08rem', lineHeight: 1.25, margin: 0 }}>{c[1]}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function Solution({ t }: { t: CopyV2 }) {
  return (
    <Section id="solucion" bg={PAPER}>
      <Chapter num="04" kicker={t.sol_k} title={t.sol_t} dek={t.sol_d} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.2rem' }}>
        {t.products.map((p, i) => (
          <Reveal key={p[0]} delay={i * 0.06}>
            <div style={{ background: CREAM, border: `1px solid ${LINE}`, padding: '1.7rem', height: '100%' }}>
              <p style={{ ...serif, fontStyle: 'italic', fontSize: '2rem', color: i === 0 ? GREEN_DK : INK, margin: '0 0 0.8rem' }}>{p[0]}</p>
              <P style={{ margin: 0, fontSize: '0.9rem' }}>{p[1]}</P>
            </div>
          </Reveal>
        ))}
      </div>
      <Label>{t.sol_t} · {isEs(t) ? '8 pasos' : '8 steps'}</Label>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(105px, 1fr))', gap: '0.55rem' }}>
        {t.chain.map((name, i) => {
          const imgs = ['01-semilla', '02-cultivo', '03-cosecha', '04-decorticacion', '05-mezclado', '06-material', '07-construccion', '08-vivienda']
          return (
            <Reveal key={name} delay={i * 0.035}>
              <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', borderRadius: 2, border: `1px solid ${LINE}`, background: DUSK }}>
                <img src={`/cadena/${imgs[i]}.jpg`} alt={name} loading={i < 4 ? 'eager' : 'lazy'} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,21,47,0.92), transparent 55%)' }} />
                <span style={{ ...serif, fontStyle: 'italic', position: 'absolute', top: '0.45rem', left: '0.5rem', color: 'rgba(242,181,68,0.95)' }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ ...sans, position: 'absolute', left: '0.55rem', right: '0.55rem', bottom: '0.5rem', fontSize: '0.68rem', fontWeight: 600, color: CREAM }}>{name}</span>
              </div>
            </Reveal>
          )
        })}
      </div>
      <Label>{isEs(t) ? 'Indicadores técnicos' : 'Technical indicators'}</Label>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '1px', background: LINE, border: `1px solid ${LINE}` }}>
        {t.specs.map((s, i) => (
          <Reveal key={s[1]} delay={i * 0.04}>
            <div style={{ background: PAPER, padding: '1.35rem', height: '100%' }}>
              <p style={{ ...serif, fontStyle: 'italic', color: GREEN_DK, fontSize: '2rem', lineHeight: 1, margin: 0 }}>{s[0]}</p>
              <p style={{ ...sans, color: CELESTE, fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600, margin: '0.45rem 0 0.5rem' }}>{s[1]}</p>
              <p style={{ ...sans, color: MUTED, fontSize: '0.78rem', lineHeight: 1.5, margin: 0 }}>{s[2]}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function Fit({ t }: { t: CopyV2 }) {
  return (
    <Section id="ypf" bg={CREAM}>
      <Chapter num="05" kicker={t.ypf_k} title={t.ypf_t} dek={t.ypf_d} />
      <DocTable head={isEs(t) ? ['YPF gana', 'Cómo aporta el plan'] : ['YPF gains', 'How the plan contributes']} rows={t.ypf_rows} />
    </Section>
  )
}

function Ask({ t }: { t: CopyV2 }) {
  const cols = [
    [isEs(t) ? 'YPF sí hace' : 'YPF does', t.yes, GREEN],
    [isEs(t) ? 'YPF no hace' : 'YPF does not', t.no, RED],
    [isEs(t) ? 'YPF recibe' : 'YPF receives', t.gets, GOLD],
  ] as const
  return (
    <Section id="pedido" bg={INK} dark>
      <Chapter num="06" kicker={t.ask_k} title={t.ask_t} dek={t.ask_d} dark />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(245px, 1fr))', gap: '1px', background: LINE_D, border: `1px solid ${LINE_D}` }}>
        {cols.map((col, i) => (
          <Reveal key={col[0]} delay={i * 0.06}>
            <div style={{ background: INK, padding: '1.5rem', minHeight: 300 }}>
              <p style={{ ...serif, fontStyle: 'italic', color: col[2], fontSize: '1.9rem', margin: '0 0 1rem' }}>{col[0]}</p>
              <ul style={{ ...sans, color: CREAM_MUTED, fontSize: '0.92rem', lineHeight: 1.65, paddingLeft: '1.1rem', margin: 0 }}>
                {col[1].map((x) => <li key={x} style={{ marginBottom: '0.55rem' }}>{x}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function Validation({ t }: { t: CopyV2 }) {
  return (
    <Section id="validacion" bg={PAPER}>
      <Chapter num="07" kicker={t.val_k} title={t.val_t} dek={t.val_d} />
      <Label>{isEs(t) ? 'Entregables de Fase 1' : 'Phase 1 deliverables'}</Label>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '0.8rem', marginBottom: '2rem' }}>
        {t.deliverables.map((d, i) => (
          <Reveal key={d[0]} delay={i * 0.04}>
            <div style={{ background: CREAM, padding: '1.2rem', border: `1px solid ${LINE}`, height: '100%' }}>
              <span style={{ ...serif, fontStyle: 'italic', color: GOLD, fontSize: '1.6rem' }}>{String(i + 1).padStart(2, '0')}</span>
              <p style={{ ...sans, fontWeight: 600, margin: '0.45rem 0 0.35rem' }}>{d[0]}</p>
              <p style={{ ...sans, color: MUTED, fontSize: '0.82rem', lineHeight: 1.5, margin: 0 }}>{d[1]}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <DocTable head={isEs(t) ? ['Fase', 'Timing', 'Resultado'] : ['Phase', 'Timing', 'Outcome']} rows={t.phases} />
    </Section>
  )
}

function Carbon({ t }: { t: CopyV2 }) {
  return (
    <Section id="carbono" bg={CREAM}>
      <Chapter num="08" kicker={t.carbon_k} title={t.carbon_t} dek={t.carbon_d} />
      <Statement by="Custodia única">{t.carbon_statement}</Statement>
      <Label>{isEs(t) ? 'Tres capas + titularidad' : 'Three layers + ownership'}</Label>
      <DocTable head={isEs(t) ? ['Capa', 'Responsable', 'Resultado'] : ['Layer', 'Owner', 'Outcome']} rows={t.carbon_rows} />
      <Label>{isEs(t) ? 'Escenarios de referencia' : 'Reference scenarios'}</Label>
      <DocTable head={isEs(t) ? ['Escenario', 'Precio', 'Ingreso anual'] : ['Scenario', 'Price', 'Annual revenue']} rows={t.asset_rows} />
      <p style={{ ...sans, fontSize: '0.72rem', color: FAINT, lineHeight: 1.55, maxWidth: '62ch', marginTop: '0.8rem' }}>{t.foot}</p>
    </Section>
  )
}

function Team({ t }: { t: CopyV2 }) {
  return (
    <Section id="equipo" bg={PAPER}>
      <Chapter num="09" kicker={t.team_k} title={t.team_t} dek={t.team_d} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1rem' }}>
        {t.partners.map((p, i) => (
          <Reveal key={p[0]} delay={i * 0.05}>
            <div style={{ border: `1px solid ${LINE}`, borderTop: `3px solid ${i === 0 ? GOLD : CELESTE}`, padding: '1.45rem', minHeight: 230, background: i === 0 ? CREAM : '#fff' }}>
              <p style={{ ...serif, fontStyle: 'italic', fontSize: '1.55rem', margin: '0 0 0.3rem' }}>{p[0]}</p>
              <p style={{ ...sans, color: CELESTE, fontSize: '0.58rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 0.8rem' }}>{p[1]}</p>
              <p style={{ ...sans, color: MUTED, fontSize: '0.84rem', lineHeight: 1.58, margin: 0 }}>{p[2]}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function Legal({ t }: { t: CopyV2 }) {
  return (
    <Section id="legal" bg={CREAM}>
      <Chapter num="10" kicker={t.legal_k} title={t.legal_t} dek={t.legal_d} />
      <DocTable head={isEs(t) ? ['Elemento', 'Qué ordena'] : ['Element', 'What it sets']} rows={t.legal_rows} />
    </Section>
  )
}

function Risks({ t }: { t: CopyV2 }) {
  return (
    <Section id="riesgos" bg={PAPER}>
      <Chapter num="11" kicker={t.risk_k} title={t.risk_t} dek={t.risk_d} />
      <DocTable head={isEs(t) ? ['Riesgo', 'Gestión'] : ['Risk', 'Management']} rows={t.risks} />
    </Section>
  )
}

function Horizon({ t }: { t: CopyV2 }) {
  return (
    <section id="horizonte" style={{ position: 'relative', minHeight: '78svh', background: INK, color: CREAM, overflow: 'hidden', scrollMarginTop: '1rem' }}>
      <img src="/hero/vision-city.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.46 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(6,21,47,0.94), rgba(6,21,47,0.78) 48%, rgba(6,21,47,0.35)), linear-gradient(to top, rgba(6,21,47,0.88), transparent 55%)' }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1060, margin: '0 auto', padding: 'clamp(4rem, 9vw, 7rem) clamp(1.3rem, 5vw, 4rem)' }}>
        <Chapter num="12" kicker={t.horizon_k} title={t.horizon_t} dek={t.horizon_d} dark />
        <Statement dark by="Belgrano como tesis industrial">{t.belgrano_quote}</Statement>
      </div>
    </section>
  )
}

function Annex({ t }: { t: CopyV2 }) {
  return (
    <Section id="anexo" bg={CREAM}>
      <Chapter num="13" kicker={t.annex_k} title={t.annex_t} dek={t.annex_d} />
      <DocTable head={isEs(t) ? ['Supuesto', 'Cómo debe quedar'] : ['Assumption', 'How it should be stated']} rows={t.annex} />
    </Section>
  )
}

function Close({ t }: { t: CopyV2 }) {
  return (
    <section id="cierre" style={{ position: 'relative', minHeight: '100svh', overflow: 'hidden', background: INK, color: CREAM, display: 'flex', alignItems: 'flex-end', scrollMarginTop: '1rem' }}>
      <video src="/hero/relato_vivo.mp4" poster="/hero/vaca-verde.jpg" autoPlay muted playsInline loop style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,21,47,0.98), rgba(6,21,47,0.6) 48%, rgba(6,21,47,0.22)), linear-gradient(90deg, rgba(6,21,47,0.85), transparent)' }} />
      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 1060, margin: '0 auto', padding: 'clamp(4rem, 8vw, 7rem) clamp(1.3rem, 5vw, 4rem)' }}>
        <Reveal>
          <Kicker color={GOLD}>{t.close_k}</Kicker>
          <h2 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(2.4rem, 6vw, 5.4rem)', lineHeight: 0.98, letterSpacing: '-0.02em', margin: '0.9rem 0 1.1rem', maxWidth: '12ch' }}>
            {t.close_t}
          </h2>
          <P dark max="58ch">{t.close_d}</P>
        </Reveal>
        <Reveal delay={0.12}>
          <p style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(2.6rem, 7vw, 5.4rem)', lineHeight: 1, color: CREAM, margin: '2.4rem 0 0.7rem' }}>
            {t.close_big_pre}<span style={{ color: GREEN }}>{t.close_big_em}</span>
          </p>
          <p style={{ ...sans, color: CREAM_MUTED, fontWeight: 300, fontSize: '1rem', lineHeight: 1.55, maxWidth: '40ch', margin: 0 }}>{t.close_sub}</p>
          <CTAs meet={t.cta_meet} wa={t.cta_whatsapp} />
          <p style={{ ...sans, color: CREAM_FAINT, fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', margin: '3rem 0 0' }}>
            Flora Cáñamo Neuquino SRL · Junio 2026 · Documento confidencial
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export function MasterplanV2() {
  const { lang } = useLang()
  const t = TXT[lang]

  return (
    <main style={{ background: PAPER, color: INK }}>
      <ProgressBar />
      <Hero t={t} lang={lang} />
      <Decision t={t} />
      <Memo t={t} />
      <Moment t={t} />
      <Solution t={t} />
      <Fit t={t} />
      <Ask t={t} />
      <Validation t={t} />
      <Carbon t={t} />
      <Team t={t} />
      <Legal t={t} />
      <Risks t={t} />
      <Horizon t={t} />
      <Annex t={t} />
      <Close t={t} />
    </main>
  )
}
