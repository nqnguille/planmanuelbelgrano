'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback, type CSSProperties, type ReactNode } from 'react'

/* ============================================================
   PLAN MANUEL BELGRANO — DECK DE PRESENTACIÓN (universal)
   Deck navegable a pantalla completa para presentar EN VIVO.
   Arco: visión (Vaca Muerta → Vaca Verde) → territorio →
   la planta → la cadena → el plan (5 programas + método por
   gates) → quiénes → la invitación → horizonte → cierre.
   Sin destinatario nombrado; sin nombres de empresas energéticas.
   Material reusado de la biblioteca/masterplan del sitio.
   ============================================================ */

const INK = '#071A38'
const DUSK = '#0E2A52'
const CREAM = '#F3F1E7'
const GOLD = '#F2B544'
const GREEN = '#5BC46A'
const CELESTE = '#74ACDF'

const serif: CSSProperties = { fontFamily: 'var(--font-garamond), "EB Garamond", serif', fontWeight: 400, fontStyle: 'italic' }
const sans: CSSProperties = { fontFamily: 'var(--font-hanken), "Plus Jakarta Sans", sans-serif' }

const ease = [0.22, 1, 0.36, 1] as const

/* ---------- primitivas ---------- */

function Kicker({ children, color = GOLD }: { children: ReactNode; color?: string }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1, ease }}
      style={{ ...sans, fontSize: 'clamp(0.6rem,0.9vw,0.7rem)', letterSpacing: '0.3em', textTransform: 'uppercase', color, marginBottom: '1.2rem' }}
    >
      {children}
    </motion.p>
  )
}

function Title({ children, size = 'lg', color = CREAM }: { children: ReactNode; size?: 'lg' | 'xl'; color?: string }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.18, ease }}
      style={{ ...serif, fontSize: size === 'xl' ? 'clamp(3rem,7vw,6.5rem)' : 'clamp(2.1rem,4.6vw,4.4rem)', lineHeight: 1.04, color, margin: 0, maxWidth: '20ch' }}
    >
      {children}
    </motion.h2>
  )
}

function Lead({ children, max = '56ch', color = 'rgba(243,241,231,0.62)' }: { children: ReactNode; max?: string; color?: string }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3, ease }}
      style={{ ...sans, fontWeight: 300, fontSize: 'clamp(0.95rem,1.5vw,1.2rem)', lineHeight: 1.6, color, maxWidth: max, marginTop: '1.6rem' }}
    >
      {children}
    </motion.p>
  )
}

function Shell({ children, bg, image, overlay, align = 'center', style }: {
  children: ReactNode; bg?: string; image?: string; overlay?: string; align?: 'center' | 'start'; style?: CSSProperties
}) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: bg ?? INK, overflow: 'hidden' }}>
      {image && (
        <>
          <img src={image} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: overlay ?? 'linear-gradient(90deg, rgba(7,26,56,0.92) 0%, rgba(7,26,56,0.72) 55%, rgba(7,26,56,0.4) 100%)' }} />
        </>
      )}
      <div style={{
        position: 'relative', height: '100%', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: align === 'center' ? 'flex-start' : 'flex-start',
        padding: 'clamp(2.5rem,7vh,6rem) clamp(1.6rem,7vw,8rem)', ...style,
      }}>
        {children}
      </div>
    </div>
  )
}

function Stat({ n, l, color = GOLD }: { n: string; l: string; color?: string }) {
  return (
    <div>
      <div style={{ ...serif, fontSize: 'clamp(2.2rem,4.5vw,3.6rem)', color, lineHeight: 1 }}>{n}</div>
      <div style={{ ...sans, fontSize: 'clamp(0.68rem,1vw,0.8rem)', color: 'rgba(243,241,231,0.55)', marginTop: '0.5rem', lineHeight: 1.4, maxWidth: '22ch' }}>{l}</div>
    </div>
  )
}

/* ============================================================
   SLIDES
   ============================================================ */

const SLIDES: { id: string; tag: string; render: () => ReactNode }[] = [

  /* 01 — Portada */
  { id: 'cover', tag: 'Portada', render: () => (
    <Shell image="/hero/relato/etapa1.jpg" overlay="linear-gradient(180deg, rgba(7,26,56,0.7) 0%, rgba(7,26,56,0.82) 100%)">
      <Kicker>Flora Cáñamo Neuquino · Documento confidencial</Kicker>
      <Title size="xl">Plan Manuel Belgrano</Title>
      <Lead max="46ch" color="rgba(243,241,231,0.7)">
        Podemos convertir Vaca Muerta en Vaca Verde: vivienda, empleo y una
        industria nueva, desde la misma tierra que hoy le da energía al país.
      </Lead>
    </Shell>
  )},

  /* 02 — La premisa */
  { id: 'premisa', tag: 'La premisa', render: () => (
    <Shell>
      <Kicker color={CELESTE}>La premisa</Kicker>
      <Title>Vaca Muerta no es eterna.<br />Lo que construyamos con lo que genera puede serlo.</Title>
      <Lead>
        La cuenca da recursos por algunas décadas. La pregunta es qué queda
        cuando el ciclo madure: qué industria, qué empleo y qué arraigo va a
        sostener a Neuquén el día después.
      </Lead>
    </Shell>
  )},

  /* 03 — El territorio, hoy */
  { id: 'territorio', tag: 'El territorio', render: () => (
    <Shell bg={DUSK}>
      <Kicker>Neuquén, hoy</Kicker>
      <Title size="lg">La riqueza llega más rápido que el techo y el trabajo.</Title>
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45, ease }}
        style={{ display: 'flex', gap: 'clamp(1.5rem,4vw,3.5rem)', marginTop: '2.6rem', flexWrap: 'wrap' }}>
        <Stat n="+140%" l="creció Añelo, el epicentro del yacimiento" />
        <Stat n="~60%" l="de déficit habitacional en la zona" color={GREEN} />
        <Stat n="Los más caros" l="alquileres del país, a precios petroleros" color={CELESTE} />
      </motion.div>
      <Lead max="60ch" color="rgba(243,241,231,0.5)">
        Y buena parte de la obra la toman empresas de fuera de la provincia,
        mientras la mano de obra local queda afuera. El potencial existe;
        falta quién lo ordene y lo ponga en marcha.
      </Lead>
    </Shell>
  )},

  /* 04 — La superficie */
  { id: 'superficie', tag: 'La superficie', render: () => (
    <Shell image="/hero/relato/etapa2.jpg" overlay="linear-gradient(90deg, rgba(7,26,56,0.9) 0%, rgba(7,26,56,0.6) 60%, rgba(7,26,56,0.25) 100%)">
      <Kicker>La segunda riqueza</Kicker>
      <Title size="lg">Debajo está la energía. En la superficie, la tierra, el agua y el sol.</Title>
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45, ease }}
        style={{ display: 'flex', gap: 'clamp(1.5rem,4vw,3.5rem)', marginTop: '2.4rem', flexWrap: 'wrap' }}>
        <Stat n="160.000 ha" l="de potencial estimado para poner bajo riego en Neuquén" color={GREEN} />
      </motion.div>
      <Lead max="52ch" color="rgba(243,241,231,0.72)">
        Esa superficie puede producir el material, el empleo y el arraigo que
        el subsuelo no da. Falta el cultivo que la convierta en industria.
      </Lead>
    </Shell>
  )},

  /* 05 — La planta */
  { id: 'planta', tag: 'La planta', render: () => (
    <Shell>
      <Kicker>El cultivo</Kicker>
      <Title size="lg">Cáñamo industrial: un cultivo agrícola, casi sin desperdicio.</Title>
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45, ease }}
        style={{ display: 'flex', gap: 'clamp(1.5rem,4vw,3.5rem)', marginTop: '2.4rem', flexWrap: 'wrap' }}>
        <Stat n="< 0,3%" l="de THC · regulado por la Ley 27.669 (Ministerio de Economía)" />
        <Stat n="Ciclo corto" l="crece rápido, en suelo árido y con poca agua" color={GREEN} />
        <Stat n=">90%" l="de la planta se aprovecha: material + biochar" color={CELESTE} />
      </motion.div>
      <Lead max="58ch" color="rgba(243,241,231,0.5)">
        De la misma hectárea salen el material de construcción (hempcrete) y el
        mejorador de suelos (biochar). Belgrano ya lo había escrito en 1796.
      </Lead>
    </Shell>
  )},

  /* 06 — La cadena */
  { id: 'cadena', tag: 'La cadena', render: () => {
    const cadena = [
      { img: '/cadena/02-cultivo.jpg', t: 'Cultivo' },
      { img: '/cadena/03-cosecha.jpg', t: 'Biomasa' },
      { img: '/cadena/06-material.jpg', t: 'Material' },
      { img: '/cadena/07-construccion.jpg', t: 'Construcción' },
      { img: '/cadena/08-vivienda.jpg', t: 'Vivienda' },
    ]
    return (
      <Shell bg={DUSK} style={{ justifyContent: 'center' }}>
        <Kicker>De la semilla a la llave</Kicker>
        <Title size="lg">Una sola cadena de valor. Todo lo demás es consecuencia.</Title>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35, ease }}
          style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.4rem,1.2vw,1rem)', marginTop: '2.6rem', flexWrap: 'wrap' }}>
          {cadena.map((c, i) => (
            <div key={c.t} style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.4rem,1.2vw,1rem)' }}>
              <div style={{ textAlign: 'center', width: 'clamp(88px,12vw,140px)' }}>
                <div style={{ width: '100%', aspectRatio: '1', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(242,181,68,0.25)' }}>
                  <img src={c.img} alt={c.t} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ ...sans, fontSize: 'clamp(0.62rem,0.95vw,0.78rem)', color: CREAM, marginTop: '0.6rem', lineHeight: 1.25 }}>{c.t}</div>
              </div>
              {i < cadena.length - 1 && <span style={{ color: GOLD, fontSize: '1.1rem', opacity: 0.6 }}>→</span>}
            </div>
          ))}
        </motion.div>
        <Lead max="62ch" color="rgba(243,241,231,0.5)">
          La vivienda tracciona la producción; el empleo, la industria y el
          carbono certificable se desprenden de la misma cadena.
        </Lead>
      </Shell>
    )
  }},

  /* 07 — El material */
  { id: 'material', tag: 'El material', render: () => (
    <Shell image="/cadena/06-material.jpg" overlay="linear-gradient(90deg, rgba(7,26,56,0.94) 0%, rgba(7,26,56,0.7) 55%, rgba(7,26,56,0.35) 100%)">
      <Kicker>Hempcrete</Kicker>
      <Title size="lg">Aislante, incombustible y probado en más de 50 países.</Title>
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45, ease }}
        style={{ display: 'flex', gap: 'clamp(1.5rem,4vw,3.5rem)', marginTop: '2.4rem', flexWrap: 'wrap' }}>
        <Stat n="0,06–0,12" l="W/mK — el desempeño térmico que pide el frío patagónico" color={GREEN} />
        <Stat n="Clase A" l="al fuego: material incombustible" />
        <Stat n="+500 años" l="de vida útil · norma europea EN 16101" color={CELESTE} />
      </motion.div>
      <Lead max="52ch" color="rgba(243,241,231,0.72)">
        Y con un diferencial único: el carbono que capturó el cultivo queda
        almacenado en la pared, durante toda la vida de la construcción.
      </Lead>
    </Shell>
  )},

  /* 08 — Los cinco programas */
  { id: 'programas', tag: 'El plan', render: () => {
    const progs = [
      { l: 'A', t: 'Ciencia y validación', d: 'Evidencia técnica, ambiental y económica.' },
      { l: 'B', t: 'Desarrollo industrial', d: 'Genéticas, biomasa, ladrillos y bloques.' },
      { l: 'C', t: 'Vivienda y hábitat', d: 'Vivienda demostrativa, social y municipal.' },
      { l: 'D', t: 'Empleo y capital humano', d: 'Capacitación, certificación e inserción.' },
      { l: 'E', t: 'Mercado y financiamiento', d: 'Carbono, modelos de negocio, escala.' },
    ]
    return (
      <Shell>
        <Kicker>El plan</Kicker>
        <Title size="lg">Cinco programas, una plataforma.</Title>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4, ease }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '0.9rem', marginTop: '2.4rem', maxWidth: 1000 }}>
          {progs.map((p) => (
            <div key={p.l} style={{ background: 'rgba(243,241,231,0.03)', border: '1px solid rgba(242,181,68,0.25)', borderRadius: 14, padding: '1.3rem' }}>
              <div style={{ ...serif, color: GOLD, fontSize: '1.7rem', marginBottom: '0.5rem' }}>{p.l}</div>
              <div style={{ ...sans, fontWeight: 500, color: CREAM, fontSize: '0.94rem', marginBottom: '0.45rem', lineHeight: 1.3 }}>{p.t}</div>
              <div style={{ ...sans, fontWeight: 300, color: 'rgba(243,241,231,0.55)', fontSize: '0.8rem', lineHeight: 1.5 }}>{p.d}</div>
            </div>
          ))}
        </motion.div>
        <Lead max="60ch" color="rgba(243,241,231,0.5)">
          Cada programa genera evidencia, producto o capacidad que los demás
          usan. Juntos forman una plataforma de desarrollo regenerativo.
        </Lead>
      </Shell>
    )
  }},

  /* 09 — El método */
  { id: 'metodo', tag: 'El método', render: () => {
    const etapas = ['Formulación', 'Viabilidad', 'Piloto', 'Demostración', 'Escalamiento', 'Plataforma']
    return (
      <Shell bg={DUSK}>
        <Kicker color={CELESTE}>El método</Kicker>
        <Title size="lg">El capital entra por etapas y solo avanza con evidencia.</Title>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4, ease }}
          style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.4rem,1.1vw,0.9rem)', marginTop: '2.6rem', flexWrap: 'wrap' }}>
          {etapas.map((p, i) => (
            <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.4rem,1.1vw,0.9rem)' }}>
              <span style={{ ...sans, fontSize: 'clamp(0.78rem,1.3vw,1.05rem)', fontWeight: 500, color: i === etapas.length - 1 ? GREEN : CREAM, border: `1px solid ${i === etapas.length - 1 ? GREEN : 'rgba(243,241,231,0.2)'}`, borderRadius: 999, padding: '0.5rem 1.1rem', whiteSpace: 'nowrap' }}>
                <span style={{ ...serif, color: GOLD, marginRight: '0.45rem' }}>{i}</span>{p}
              </span>
              {i < etapas.length - 1 && <span style={{ ...sans, color: GOLD, opacity: 0.7, fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>gate →</span>}
            </div>
          ))}
        </motion.div>
        <Lead max="62ch">
          Seis etapas de madurez, evaluadas en paralelo en cinco dimensiones:
          técnica, regulatoria, comercial, financiera e institucional. Entre
          etapa y etapa hay un gate: nadie invierte en la siguiente sin la
          evidencia de la anterior.
        </Lead>
      </Shell>
    )
  }},

  /* 10 — Quiénes */
  { id: 'quienes', tag: 'Quiénes', render: () => {
    const consorcio = [
      { q: 'Flora Cáñamo Neuquino', a: 'Integra', n: 'Diseño del plan, coordinación del consorcio y vehículo operativo.' },
      { q: 'Fundación GEN', a: 'Cultiva', n: 'Licencia agrícola, maquinaria y el primer antecedente de cáñamo industrial de Neuquén.' },
      { q: 'EcoGaia', a: 'Certifica', n: 'Créditos de carbono bajo Verra / Gold Standard; experiencia en cáñamo en Canadá.' },
      { q: 'INTI · Red Protierra', a: 'Valida y transfiere', n: 'Ensayos y certificación del material; manuales y formación de aplicadores.' },
    ]
    return (
      <Shell>
        <Kicker>Quiénes lo hacen</Kicker>
        <Title size="lg">Un consorcio con las piezas completas.</Title>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4, ease }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1rem', marginTop: '2.4rem', maxWidth: 1000 }}>
          {consorcio.map((c) => (
            <div key={c.q} style={{ background: DUSK, border: '1px solid rgba(116,172,223,0.25)', borderRadius: 14, padding: '1.4rem' }}>
              <div style={{ ...sans, fontSize: '0.64rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(243,241,231,0.45)', marginBottom: '0.6rem' }}>{c.a}</div>
              <div style={{ ...serif, color: GOLD, fontSize: '1.2rem', lineHeight: 1.15, marginBottom: '0.6rem' }}>{c.q}</div>
              <div style={{ ...sans, fontWeight: 300, color: 'rgba(243,241,231,0.55)', fontSize: '0.82rem', lineHeight: 1.5 }}>{c.n}</div>
            </div>
          ))}
        </motion.div>
        <Lead max="62ch" color="rgba(243,241,231,0.5)">
          Fundador: Guillermo Sandoval — operación real de cultivo y producción
          en Neuquén desde 2023, al frente de Flora Cáñamo Neuquino SRL.
        </Lead>
      </Shell>
    )
  }},

  /* 11 — La invitación */
  { id: 'invitacion', tag: 'La invitación', render: () => {
    const asientos = [
      { n: '01', t: 'La industria', d: 'Ancla la demanda: compromisos de compra sobre el carbono certificado y la vivienda para sus operaciones. Por etapas, contra hitos.' },
      { n: '02', t: 'El Estado', d: 'Reglas claras y articulación: destrabar, simplificar y acompañar sin poner trabas. Sin subsidios ni organismos nuevos.' },
      { n: '03', t: 'La ciencia', d: 'Validación independiente: ensayos, normas y certificación. Toda afirmación del plan la firma un tercero.' },
    ]
    return (
      <Shell bg={DUSK}>
        <Kicker>La invitación</Kicker>
        <Title size="lg">Tres asientos en la mesa fundadora.</Title>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4, ease }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: '1rem', marginTop: '2.4rem', maxWidth: 960 }}>
          {asientos.map((c) => (
            <div key={c.n} style={{ background: 'rgba(243,241,231,0.03)', border: '1px solid rgba(242,181,68,0.25)', borderRadius: 14, padding: '1.5rem' }}>
              <div style={{ ...serif, color: GOLD, fontSize: '1.6rem', marginBottom: '0.6rem' }}>{c.n}</div>
              <div style={{ ...sans, fontWeight: 500, color: CREAM, fontSize: '0.98rem', marginBottom: '0.6rem', lineHeight: 1.3 }}>{c.t}</div>
              <div style={{ ...sans, fontWeight: 300, color: 'rgba(243,241,231,0.55)', fontSize: '0.84rem', lineHeight: 1.55 }}>{c.d}</div>
            </div>
          ))}
        </motion.div>
        <Lead max="60ch" color="rgba(243,241,231,0.5)">
          El proyecto avanza con el marco legal vigente y capital privado.
          Los fundadores quedan en la historia de la industria — y con
          preferencia sobre lo que produce.
        </Lead>
      </Shell>
    )
  }},

  /* 12 — El horizonte */
  { id: 'horizonte', tag: 'El horizonte', render: () => (
    <Shell image="/hero/vision-city.jpg" overlay="linear-gradient(180deg, rgba(7,26,56,0.6) 0%, rgba(7,26,56,0.85) 100%)">
      <Kicker>La oportunidad ampliada</Kicker>
      <Title size="lg">Una industria interrumpida hace 230 años.</Title>
      <Lead max="56ch" color="rgba(243,241,231,0.72)">
        Cultivar cáñamo a escala reactiva una cadena de la que se desprenden
        alimentos, textiles, bioplásticos, papel y cosmética: valor agregado
        en origen, empleo de calidad y empresas regionales — de punta a punta
        del país.
      </Lead>
    </Shell>
  )},

  /* 13 — Por qué ahora */
  { id: 'ahora', tag: 'Por qué ahora', render: () => (
    <Shell>
      <Kicker color={CELESTE}>Por qué ahora</Kicker>
      <Title size="lg">Todo lo que hacía falta ya está sobre la mesa.</Title>
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45, ease }}
        style={{ display: 'flex', gap: 'clamp(1.5rem,4vw,3.5rem)', marginTop: '2.6rem', flexWrap: 'wrap' }}>
        <Stat n="Marco legal" l="vigente y nacional: Ley 27.669 y Decreto 405/2023" />
        <Stat n="Demanda" l="urgente de vivienda y empleo en el corazón de Vaca Muerta" color={GREEN} />
        <Stat n="Consorcio" l="con licencias, tierra, tecnología y certificación" color={CELESTE} />
      </motion.div>
      <Lead max="58ch" color="rgba(243,241,231,0.5)">
        Nadie construyó todavía con cáñamo en Argentina. La posición de
        pionero se toma una sola vez.
      </Lead>
    </Shell>
  )},

  /* 14 — Cierre */
  { id: 'cierre', tag: 'Cierre', render: () => (
    <Shell image="/hero/relato/etapa4.jpg" overlay="linear-gradient(180deg, rgba(7,26,56,0.55) 0%, rgba(7,26,56,0.82) 100%)" align="center" style={{ alignItems: 'center', textAlign: 'center' }}>
      <Kicker>Vaca Muerta → Vaca Verde</Kicker>
      <motion.h2 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease }}
        style={{ ...serif, fontSize: 'clamp(2.4rem,5.5vw,5rem)', lineHeight: 1.06, color: CREAM, margin: 0, maxWidth: '18ch' }}>
        Belgrano tenía razón.
      </motion.h2>
      <Lead max="50ch" color="rgba(243,241,231,0.72)">
        Doscientos treinta años después, su sueño vuelve a ser el plan más
        moderno que tenemos: trabajo, techo y futuro, desde la tierra.
      </Lead>
    </Shell>
  )},
]

/* ============================================================
   NAVEGACIÓN
   ============================================================ */

export function PresentationDeck() {
  const [[i, dir], setState] = useState<[number, number]>([0, 0])
  const total = SLIDES.length

  const go = useCallback((next: number, d: number) => {
    if (next < 0 || next >= total) return
    setState([next, d])
  }, [total])

  const prev = useCallback(() => setState(([c]) => (c > 0 ? [c - 1, -1] : [c, 0])), [])
  const next = useCallback(() => setState(([c]) => (c < total - 1 ? [c + 1, 1] : [c, 0])), [total])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(e.key)) { e.preventDefault(); next() }
      else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) { e.preventDefault(); prev() }
      else if (e.key === 'Home') go(0, -1)
      else if (e.key === 'End') go(total - 1, 1)
      else if (e.key.toLowerCase() === 'f') {
        if (!document.fullscreenElement) document.documentElement.requestFullscreen?.()
        else document.exitFullscreen?.()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev, go, total])

  return (
    <main style={{ position: 'fixed', inset: 0, background: INK, overflow: 'hidden' }}>
      {/* barra de progreso */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'rgba(243,241,231,0.08)', zIndex: 30 }}>
        <motion.div animate={{ width: `${((i + 1) / total) * 100}%` }} transition={{ duration: 0.5, ease }}
          style={{ height: '100%', background: GOLD }} />
      </div>

      {/* slides */}
      <AnimatePresence mode="popLayout" custom={dir} initial={false}>
        <motion.div
          key={SLIDES[i].id}
          custom={dir}
          initial={{ opacity: 0, x: dir === 0 ? 0 : dir * 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: dir * -60 }}
          transition={{ duration: 0.5, ease }}
          style={{ position: 'absolute', inset: 0 }}
        >
          {SLIDES[i].render()}
        </motion.div>
      </AnimatePresence>

      {/* zonas de click para avanzar/retroceder */}
      <button aria-label="Anterior" onClick={prev} style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '18%', background: 'transparent', border: 'none', cursor: i > 0 ? 'pointer' : 'default', zIndex: 20 }} />
      <button aria-label="Siguiente" onClick={next} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '18%', background: 'transparent', border: 'none', cursor: i < total - 1 ? 'pointer' : 'default', zIndex: 20 }} />

      {/* marca arriba a la izquierda */}
      <div style={{ position: 'absolute', top: '1.5rem', left: 'clamp(1.6rem,7vw,8rem)', zIndex: 30, ...sans, fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(242,181,68,0.55)' }}>
        Plan MB
      </div>

      {/* controles abajo */}
      <div style={{ position: 'absolute', bottom: '1.4rem', left: '50%', transform: 'translateX(-50%)', zIndex: 30, display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
        <button onClick={prev} disabled={i === 0} style={navBtn(i === 0)}>←</button>
        <div style={{ display: 'flex', gap: '0.45rem', alignItems: 'center' }}>
          {SLIDES.map((s, idx) => (
            <button key={s.id} aria-label={s.tag} onClick={() => go(idx, idx > i ? 1 : -1)}
              style={{ width: idx === i ? 22 : 7, height: 7, borderRadius: 999, border: 'none', cursor: 'pointer', background: idx === i ? GOLD : 'rgba(243,241,231,0.25)', transition: 'all 0.3s', padding: 0 }} />
          ))}
        </div>
        <button onClick={next} disabled={i === total - 1} style={navBtn(i === total - 1)}>→</button>
        <span style={{ ...sans, fontSize: '0.72rem', color: 'rgba(243,241,231,0.45)', letterSpacing: '0.08em', marginLeft: '0.4rem', minWidth: '3.5ch' }}>
          {String(i + 1).padStart(2, '0')} / {total}
        </span>
      </div>

      {/* etiqueta de la slide abajo a la derecha */}
      <div style={{ position: 'absolute', bottom: '1.5rem', right: 'clamp(1.6rem,7vw,8rem)', zIndex: 30, ...sans, fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(243,241,231,0.35)' }}>
        {SLIDES[i].tag}
      </div>
    </main>
  )
}

function navBtn(disabled: boolean): CSSProperties {
  return {
    ...sans, width: 34, height: 34, borderRadius: 999, border: '1px solid rgba(243,241,231,0.2)',
    background: 'transparent', color: disabled ? 'rgba(243,241,231,0.2)' : CREAM, cursor: disabled ? 'default' : 'pointer',
    fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0,
  }
}
