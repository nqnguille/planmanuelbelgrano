'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback, type CSSProperties, type ReactNode } from 'react'

/* ============================================================
   PLAN MANUEL BELGRANO — DECK DE PRESENTACIÓN
   Deck navegable a pantalla completa, preparado para YPF.
   Arco de Carmen (30% inspiración / 70% credibilidad); cada slide
   responde, en su lugar, una objeción del documento de objeciones.
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
      <Kicker>Flora Cáñamo Neuquino · Documento confidencial preparado para YPF</Kicker>
      <Title size="xl">Plan Manuel Belgrano</Title>
      <Lead max="46ch" color="rgba(243,241,231,0.7)">
        La plataforma que convierte parte de la riqueza de Vaca Muerta en
        desarrollo regenerativo, empleo y carbono certificado — en el mismo
        territorio donde YPF ya opera.
      </Lead>
    </Shell>
  )},

  /* 02 — Inspiración (que quiera que exista) */
  { id: 'quiero', tag: 'La premisa', render: () => (
    <Shell>
      <Kicker color={CELESTE}>Neuquén, hoy</Kicker>
      <Title>Vaca Muerta genera riqueza.<br />Neuquén necesita algo más que riqueza.</Title>
      <Lead>
        Necesita mecanismos que transformen esa riqueza en desarrollo regenerativo,
        empleo de calidad y nuevas oportunidades para sus comunidades. No en lugar
        del petróleo: a partir de él.
      </Lead>
    </Shell>
  )},

  /* 03 — El problema (de YPF) */
  { id: 'problema', tag: 'El problema', render: () => (
    <Shell bg={DUSK}>
      <Kicker>El problema que ya tiene YPF</Kicker>
      <Title>El GNL que Argentina exporte a Europa tendrá que probar su huella.</Title>
      <Lead max="60ch">
        Desde 2025 el mercado europeo de alta integridad exige carbono certificado
        (CS3D, CBAM). Sin eso, el gas argentino compite como commodity contra Qatar,
        con el margen erosionado. Con eso, accede a una prima real.
      </Lead>
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45, ease }}
        style={{ display: 'flex', gap: 'clamp(1.5rem,4vw,3.5rem)', marginTop: '2.6rem', flexWrap: 'wrap' }}>
        <Stat n="USD 2–5" l="de prima por MMBtu sobre el spot, por cargo certificado" color={GREEN} />
        <Stat n="USD 7–17M" l="de premio por cada cargo de GNL con huella verificada" color={GREEN} />
      </motion.div>
    </Shell>
  )},

  /* 04 — La oportunidad */
  { id: 'oportunidad', tag: 'La oportunidad', render: () => (
    <Shell>
      <Kicker>La llave</Kicker>
      <Title>El crédito de carbono de alta integridad es la llave de ese mercado.</Title>
      <Lead max="58ch">
        Y todavía no tiene dueño en Argentina. La ventana de primer entrante ya pasó
        con los ferrocarriles, con el petróleo, con el shale. Ahora está abierta para
        quien llegue primero a la remoción biológica verificable. Esa es la pata que
        hoy le falta al MACC de YPF: la única de remoción, no de reducción.
      </Lead>
    </Shell>
  )},

  /* 05 — La visión: Flora / cáñamo */
  { id: 'vision', tag: 'La solución', render: () => (
    <Shell image="/hero/relato/etapa2.jpg" overlay="linear-gradient(90deg, rgba(7,26,56,0.9) 0%, rgba(7,26,56,0.6) 60%, rgba(7,26,56,0.25) 100%)">
      <Kicker>La solución</Kicker>
      <Title>El cultivo terrestre que más carbono captura por hectárea, donde YPF ya opera.</Title>
      <Lead max="52ch" color="rgba(243,241,231,0.72)">
        El cáñamo industrial fija 10–15 t CO₂/ha por año en un ciclo de meses: #2 en el
        ranking global de remoción —solo detrás de las microalgas marinas— y #1 entre los
        cultivos terrestres. Flora Cáñamo Neuquino lo lleva de la semilla a la llave:
        cultivo, material de construcción y vivienda. Belgrano ya lo había escrito en 1796.
      </Lead>
    </Shell>
  )},

  /* 06 — El mecanismo (la cadena) */
  { id: 'mecanismo', tag: 'Cómo funciona', render: () => {
    const cadena = [
      { img: '/cadena/02-cultivo.jpg', t: 'Cultivo' },
      { img: '/cadena/03-cosecha.jpg', t: 'Biomasa' },
      { img: '/cadena/06-material.jpg', t: 'Material' },
      { img: '/cadena/07-construccion.jpg', t: 'Construcción' },
      { img: '/cadena/08-vivienda.jpg', t: 'Carbono almacenado' },
    ]
    return (
      <Shell bg={DUSK} style={{ justifyContent: 'center' }}>
        <Kicker>Cómo funciona</Kicker>
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
          De ahí salen el empleo, la vivienda y el impacto verificable. El piloto aísla
          esta cadena específica; el resto se desprende de ella.
        </Lead>
      </Shell>
    )
  }},

  /* 07 — Por qué cáñamo y no forestación */
  { id: 'porque', tag: 'Por qué cáñamo', render: () => {
    const rows = [
      { t: 'Captura', d: 'Fotosíntesis de alta tasa, costo energético ~0', v: '10–15 t CO₂/ha/año' },
      { t: 'Fijación en material', d: 'Mineralización permanente en hempcrete', v: '75–165 kg CO₂/m³' },
      { t: 'Permanencia', d: 'El carbono no se quema ni se tala: queda en la pared', v: 'siglos / milenios' },
    ]
    return (
      <Shell>
        <Kicker>Por qué cáñamo y no forestación</Kicker>
        <Title size="lg">Más rápido, y permanente.</Title>
        <Lead max="58ch">
          La forestación tarda décadas y el carbono se libera si el árbol arde o se
          tala. El cáñamo captura en meses y se fija de forma permanente en infraestructura.
        </Lead>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45, ease }}
          style={{ marginTop: '2.2rem', display: 'grid', gap: '1px', background: 'rgba(243,241,231,0.1)', borderRadius: 12, overflow: 'hidden', maxWidth: 760 }}>
          {rows.map((r) => (
            <div key={r.t} style={{ background: INK, padding: '1.1rem 1.4rem', display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem', alignItems: 'center' }}>
              <div>
                <div style={{ ...sans, fontWeight: 500, color: CREAM, fontSize: '1rem' }}>{r.t}</div>
                <div style={{ ...sans, fontWeight: 300, color: 'rgba(243,241,231,0.5)', fontSize: '0.85rem', marginTop: '0.2rem' }}>{r.d}</div>
              </div>
              <div style={{ ...serif, color: GREEN, fontSize: 'clamp(1rem,1.6vw,1.4rem)', whiteSpace: 'nowrap' }}>{r.v}</div>
            </div>
          ))}
        </motion.div>
      </Shell>
    )
  }},

  /* 08 — Quién lo certifica */
  { id: 'certifica', tag: 'Certificación', render: () => {
    const capas = [
      { q: 'Carbono', a: 'EcoGaia · Verra / Gold Standard', n: 'Estándares reconocidos globalmente. Prueba de adicionalidad obligatoria.' },
      { q: 'Material y sistema', a: 'INTI', n: 'Certificación nacional del ladrillo y el sistema constructivo.' },
      { q: 'Cultivo y trazabilidad', a: 'ARICCAME (Ley 27.669)', n: 'Régimen vigente. Flora tiene licencia desde 2024.' },
    ]
    return (
      <Shell bg={DUSK}>
        <Kicker color={CELESTE}>¿Quién valida todo esto?</Kicker>
        <Title size="lg">Ninguna afirmación sin un tercero que la respalde.</Title>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4, ease }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1rem', marginTop: '2.4rem', maxWidth: 920 }}>
          {capas.map((c) => (
            <div key={c.q} style={{ background: INK, border: '1px solid rgba(116,172,223,0.25)', borderRadius: 14, padding: '1.5rem' }}>
              <div style={{ ...sans, fontSize: '0.64rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(243,241,231,0.45)', marginBottom: '0.7rem' }}>{c.q}</div>
              <div style={{ ...serif, color: GOLD, fontSize: '1.3rem', lineHeight: 1.15, marginBottom: '0.7rem' }}>{c.a}</div>
              <div style={{ ...sans, fontWeight: 300, color: 'rgba(243,241,231,0.55)', fontSize: '0.84rem', lineHeight: 1.5 }}>{c.n}</div>
            </div>
          ))}
        </motion.div>
        <Lead max="64ch" color="rgba(243,241,231,0.5)">
          Cada tonelada se registra una sola vez, con número de serie único, y se retira
          a nombre de un único titular. El contrato define que ese titular es YPF: sin doble contabilidad.
        </Lead>
      </Shell>
    )
  }},

  /* 09 — Permanencia / por qué ladrillos */
  { id: 'permanencia', tag: 'Permanencia', render: () => (
    <Shell image="/cadena/06-material.jpg" overlay="linear-gradient(90deg, rgba(7,26,56,0.94) 0%, rgba(7,26,56,0.7) 55%, rgba(7,26,56,0.35) 100%)">
      <Kicker>Por qué terminamos fabricando ladrillos</Kicker>
      <Title size="lg">El carbono no solo se captura: queda almacenado.</Title>
      <Lead max="52ch" color="rgba(243,241,231,0.72)">
        En biomasa, el carbono se libera si se quema o se pudre. Fijado en hempcrete,
        queda en una pared con vida útil de más de 500 años — auditable y permanente.
        Y el ladrillo es, además, el primer negocio que hace viable todo lo demás.
      </Lead>
    </Shell>
  )},

  /* 10 — El retorno para YPF (números) */
  { id: 'retorno', tag: 'El retorno', render: () => (
    <Shell>
      <Kicker>El retorno para YPF</Kicker>
      <Title size="lg">Medible, en pesos y en toneladas.</Title>
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4, ease }}
        style={{ display: 'flex', gap: 'clamp(1.4rem,4vw,3.5rem)', marginTop: '2.4rem', flexWrap: 'wrap' }}>
        <Stat n="40.000 t" l="de CO₂ removidas por año · Fase 1 · 4.000 ha" />
        <Stat n="USD 2,2M" l="por año en créditos certificados a USD 55/t" color={GREEN} />
        <Stat n="~6 sem." l="de operación plena para recuperar la inversión" color={CELESTE} />
        <Stat n="USD 27,5M" l="por año a escala provincial · 50.000 ha" color={GOLD} />
      </motion.div>
      <Lead max="58ch" color="rgba(243,241,231,0.5)">
        No compite con los millones de toneladas de YPF: aporta la vía de remoción que el
        inventario necesita, mientras YPF reduce por las otras. Inversión total del piloto: USD 265K–300K.
      </Lead>
    </Shell>
  )},

  /* 11 — El piloto / la evidencia */
  { id: 'piloto', tag: 'La evidencia', render: () => (
    <Shell bg={DUSK}>
      <Kicker color={CELESTE}>"Muéstrenme datos."</Kicker>
      <Title size="lg">El piloto existe para producir exactamente esos datos.</Title>
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4, ease }}
        style={{ display: 'flex', gap: 'clamp(1.4rem,4vw,3rem)', marginTop: '2.2rem', flexWrap: 'wrap' }}>
        <Stat n="2 provincias" l="benchmark simultáneo: Mendoza (templado) + Neuquén (árido)" color={GREEN} />
        <Stat n="30 variedades" l="protocolo científico DBCA · UNCuyo + UNCo" />
        <Stat n="18 meses" l="para la variedad campeona por ecorregión" color={CELESTE} />
      </motion.div>
      <Lead max="62ch" color="rgba(243,241,231,0.5)">
        Medido con un benchmark de campo (sensores, drones, gemelo digital). Hoy ya hay
        tracción real: licencia, cosechas, aceites certificados, ensayo en cantera de Añelo
        y primeros ladrillos producidos.
      </Lead>
    </Shell>
  )},

  /* 12 — El deal */
  { id: 'deal', tag: 'El deal', render: () => {
    const contratos = [
      { n: '01', t: 'Desarrollo de proveedor estratégico', d: 'YPF financia benchmark + piloto en dos desembolsos contra hitos.' },
      { n: '02', t: 'Offtake de créditos de carbono', d: 'Flora entrega créditos verificados (Verra / Gold Standard) a USD 55/t, mínimo 5 años.' },
      { n: '03', t: 'Exclusividad territorial Neuquén', d: 'First right of refusal sobre todo el carbono generado en la provincia.' },
    ]
    return (
      <Shell>
        <Kicker>El deal</Kicker>
        <Title size="lg">Un contrato de proveedor, no una donación.</Title>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4, ease }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: '1rem', marginTop: '2.4rem', maxWidth: 960 }}>
          {contratos.map((c) => (
            <div key={c.n} style={{ background: 'rgba(243,241,231,0.03)', border: '1px solid rgba(242,181,68,0.25)', borderRadius: 14, padding: '1.5rem' }}>
              <div style={{ ...serif, color: GOLD, fontSize: '1.6rem', marginBottom: '0.6rem' }}>{c.n}</div>
              <div style={{ ...sans, fontWeight: 500, color: CREAM, fontSize: '0.98rem', marginBottom: '0.6rem', lineHeight: 1.3 }}>{c.t}</div>
              <div style={{ ...sans, fontWeight: 300, color: 'rgba(243,241,231,0.55)', fontSize: '0.84rem', lineHeight: 1.55 }}>{c.d}</div>
            </div>
          ))}
        </motion.div>
        <Lead max="60ch" color="rgba(243,241,231,0.5)">
          Si no entregamos, no cobramos. Y si YPF se retira en cinco años, el negocio de
          materiales se sostiene solo con el mercado de la construcción: YPF acelera, no es el respirador.
        </Lead>
      </Shell>
    )
  }},

  /* 13 — La escala */
  { id: 'escala', tag: 'La escala', render: () => {
    const pasos = ['Piloto', 'Validación', 'Modelo', 'Escala provincial']
    return (
      <Shell bg={DUSK}>
        <Kicker color={CELESTE}>De piloto a plataforma</Kicker>
        <Title size="lg">No mostramos la escala antes de probar que funciona.</Title>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4, ease }}
          style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.5rem,1.5vw,1.2rem)', marginTop: '2.6rem', flexWrap: 'wrap' }}>
          {pasos.map((p, i) => (
            <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.5rem,1.5vw,1.2rem)' }}>
              <span style={{ ...sans, fontSize: 'clamp(0.9rem,1.6vw,1.25rem)', fontWeight: 500, color: i === pasos.length - 1 ? GREEN : CREAM, border: `1px solid ${i === pasos.length - 1 ? GREEN : 'rgba(243,241,231,0.2)'}`, borderRadius: 999, padding: '0.6rem 1.3rem' }}>{p}</span>
              {i < pasos.length - 1 && <span style={{ color: GOLD, opacity: 0.6 }}>→</span>}
            </div>
          ))}
        </motion.div>
        <Lead max="58ch">
          Neuquén tiene 50.000 hectáreas irrigables. Cada etapa desbloquea la siguiente
          con hitos medibles, hasta un programa de escala provincial — sin depender de
          una sola cosecha ni de un solo cliente.
        </Lead>
      </Shell>
    )
  }},

  /* 14 — Cierre / visión ampliada */
  { id: 'cierre', tag: 'Cierre', render: () => (
    <Shell image="/hero/relato/etapa4.jpg" overlay="linear-gradient(180deg, rgba(7,26,56,0.55) 0%, rgba(7,26,56,0.82) 100%)" align="center" style={{ alignItems: 'center', textAlign: 'center' }}>
      <Kicker>Belgrano lo soñó · Sturzenegger lo ve venir</Kicker>
      <motion.h2 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease }}
        style={{ ...serif, fontSize: 'clamp(2.4rem,5.5vw,5rem)', lineHeight: 1.06, color: CREAM, margin: 0, maxWidth: '18ch' }}>
        Nosotros tendemos el puente.
      </motion.h2>
      <Lead max="50ch" color="rgba(243,241,231,0.72)">
        YPF no necesita otro proyecto inspirador. Necesita una plataforma capaz de operar
        a escala. Eso es exactamente lo que el piloto viene a demostrar. Belgrano tenía razón.
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
