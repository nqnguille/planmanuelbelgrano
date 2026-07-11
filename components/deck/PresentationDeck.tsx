'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback, type CSSProperties, type ReactNode } from 'react'

/* ============================================================
   PLAN MANUEL BELGRANO — DECK DE PRESENTACIÓN (para un político)
   Generado con fan-out multi-agente (jul 2026): 3 perspectivas
   (comunicación política, simplificación radical, territorio) →
   síntesis → verificación adversarial (claridad de político,
   precisión vs masterplan, reglas de tono) → fixes aplicados.
   Arco: apertura Vaca Verde → la deuda del boom → la ventana →
   la tierra (160.000 ha) → Belgrano 1796 → la planta → el
   material → la cadena → el carbono (crédito propio, bitcoin
   2010) → la regla (etapas/gates) → quiénes → la invitación →
   el horizonte → cierre "Belgrano tenía razón".
   Sin montos, sin empresas nombradas, sin estado de etapas,
   sin jerga. Español AR. Navegable a pantalla completa.
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
      style={{ ...serif, fontSize: size === 'xl' ? 'clamp(3rem,7vw,6.5rem)' : 'clamp(2rem,4.4vw,4.2rem)', lineHeight: 1.05, color, margin: 0, maxWidth: '22ch' }}
    >
      {children}
    </motion.h2>
  )
}

function Lead({ children, max = '58ch', color = 'rgba(243,241,231,0.65)' }: { children: ReactNode; max?: string; color?: string }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3, ease }}
      style={{ ...sans, fontWeight: 300, fontSize: 'clamp(0.98rem,1.5vw,1.24rem)', lineHeight: 1.62, color, maxWidth: max, marginTop: '1.6rem' }}
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
      <div style={{ ...sans, fontSize: 'clamp(0.68rem,1vw,0.8rem)', color: 'rgba(243,241,231,0.55)', marginTop: '0.5rem', lineHeight: 1.4, maxWidth: '24ch' }}>{l}</div>
    </div>
  )
}

function Stats({ items }: { items: readonly (readonly [string, string])[] }) {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45, ease }}
      style={{ display: 'flex', gap: 'clamp(1.5rem,4vw,3.5rem)', marginTop: '2.4rem', flexWrap: 'wrap' }}>
      {items.map(([n, l], i) => <Stat key={n + i} n={n} l={l} color={i === 0 ? GOLD : i === 1 ? GREEN : CELESTE} />)}
    </motion.div>
  )
}

function Bullets({ items }: { items: readonly string[] }) {
  return (
    <motion.ul initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.42, ease }}
      style={{ listStyle: 'none', padding: 0, margin: '2rem 0 0', display: 'flex', flexDirection: 'column', gap: '0.85rem', maxWidth: '62ch' }}>
      {items.map((b) => (
        <li key={b} style={{ ...sans, fontWeight: 300, fontSize: 'clamp(0.92rem,1.35vw,1.1rem)', lineHeight: 1.55, color: 'rgba(243,241,231,0.72)', paddingLeft: '1.4rem', position: 'relative' }}>
          <span aria-hidden style={{ position: 'absolute', left: 0, top: '0.05em', color: GOLD, ...serif }}>—</span>{b}
        </li>
      ))}
    </motion.ul>
  )
}

/* ============================================================
   SLIDES
   ============================================================ */

const SLIDES: { id: string; tag: string; render: () => ReactNode }[] = [

  /* 01 — Apertura */
  { id: 'apertura', tag: 'Apertura', render: () => (
    <Shell image="/hero/vision-city.jpg" overlay="linear-gradient(180deg, rgba(7,26,56,0.72) 0%, rgba(7,26,56,0.85) 100%)">
      <Kicker>Plan Manuel Belgrano · Documento confidencial</Kicker>
      <Title size="xl">Convertir Vaca Muerta en Vaca Verde.</Title>
      <Lead max="50ch" color="rgba(243,241,231,0.72)">
        Debajo de Neuquén está la energía que hoy mueve al país. Cuando esa
        energía crece, crece la provincia entera. Y sobre esa misma tierra hay
        lugar para una industria que planta, construye y se queda.
      </Lead>
    </Shell>
  )},

  /* 02 — La deuda */
  { id: 'deuda', tag: 'La deuda', render: () => (
    <Shell bg={DUSK}>
      <Kicker>Lo que el boom no resolvió</Kicker>
      <Title>El sueldo ya queda acá. El techo y la obra son el próximo paso.</Title>
      <Lead max="60ch">
        En la zona de Vaca Muerta faltan casas para los que llegan y para los
        que ya estaban. Los alquileres están entre los más caros del país, y
        buena parte de la obra se contrata a empresas de afuera de la
        provincia. La riqueza pasa por el territorio; falta que se quede.
      </Lead>
      <Stats items={[['~60%', 'de las familias de la zona no tienen la vivienda que necesitan'], ['+140%', 'creció Añelo en pocos años']]} />
    </Shell>
  )},

  /* 03 — La ventana */
  { id: 'ventana', tag: 'La ventana', render: () => (
    <Shell>
      <Kicker color={CELESTE}>La ventana está abierta</Kicker>
      <Title>Vaca Muerta no es eterna.<br />Lo que construyamos con lo que genera puede serlo.</Title>
      <Lead max="58ch">
        La provincia se prepara para recibir un millón y medio de personas en
        treinta años. Van a necesitar dónde dormir y, sobre todo, una economía
        que las sostenga. Ese futuro se construye ahora, con lo que la energía
        genera hoy.
      </Lead>
      <Stats items={[['1,5 M', 'de personas proyectadas en 30 años']]} />
    </Shell>
  )},

  /* 04 — La tierra */
  { id: 'tierra', tag: 'La tierra', render: () => (
    <Shell bg={DUSK}>
      <Kicker>El otro yacimiento</Kicker>
      <Title>160.000 hectáreas esperan el agua.</Title>
      <Lead max="56ch">
        Arriba de la roca hay otro recurso dormido: tierra, sol y ríos que
        bajan de la cordillera. Neuquén tiene 160.000 hectáreas con potencial
        de riego. Lo que falta es un cultivo que justifique abrir la compuerta.
      </Lead>
      <Stats items={[['160.000', 'hectáreas de potencial de riego en Neuquén']]} />
    </Shell>
  )},

  /* 05 — La historia */
  { id: 'historia', tag: 'La historia', render: () => (
    <Shell image="/hero/relato/etapa1.jpg" overlay="linear-gradient(90deg, rgba(7,26,56,0.9) 0%, rgba(7,26,56,0.65) 60%, rgba(7,26,56,0.35) 100%)">
      <Kicker>Una idea de 1796</Kicker>
      <Title>Belgrano propuso esta industria hace 230 años.</Title>
      <Lead max="54ch" color="rgba(243,241,231,0.75)">
        En 1796, desde el Consulado, Manuel Belgrano propuso cultivar cáñamo:
        producir y agregar valor, en lugar de solo extraer. Una prohibición
        del siglo veinte lo frenó de un plumazo — una decisión de escritorio
        que hoy ya está corregida: volvió a ser legal. La industria está
        esperando a sus fundadores.
      </Lead>
    </Shell>
  )},

  /* 06 — La planta */
  { id: 'planta', tag: 'La planta', render: () => (
    <Shell image="/hero/relato/etapa2.jpg" overlay="linear-gradient(90deg, rgba(7,26,56,0.9) 0%, rgba(7,26,56,0.6) 60%, rgba(7,26,56,0.28) 100%)">
      <Kicker>Hecha para esta tierra</Kicker>
      <Title>Una planta que crece en tierra árida y se convierte en casas.</Title>
      <Lead max="54ch" color="rgba(243,241,231,0.75)">
        El cáñamo industrial madura en pocos meses, pide poca agua y se adapta
        a los suelos duros de la meseta. Del tallo sale un material para
        construir; del resto, un mejorador que le devuelve vida al suelo y
        rinde la próxima cosecha. La planta se aprovecha entera.
      </Lead>
    </Shell>
  )},

  /* 07 — El material */
  { id: 'material', tag: 'El material', render: () => (
    <Shell image="/cadena/06-material.jpg" overlay="linear-gradient(90deg, rgba(7,26,56,0.94) 0%, rgba(7,26,56,0.7) 55%, rgba(7,26,56,0.35) 100%)">
      <Kicker>La pared que abriga</Kicker>
      <Title>Bloques que abrigan, resisten el fuego y guardan carbono.</Title>
      <Lead max="52ch" color="rgba(243,241,231,0.75)">
        La receta es simple: tallo, cal y agua. Una sola capa aísla del frío
        patagónico, resiste el fuego y deja respirar la casa. Y el carbono que
        capturó el cultivo queda guardado en la pared por más de quinientos
        años.
      </Lead>
      <Stats items={[['+50', 'países ya construyen con este material'], ['+500', 'años queda el carbono en la pared']]} />
    </Shell>
  )},

  /* 08 — La cadena */
  { id: 'cadena', tag: 'La cadena', render: () => (
    <Shell bg={DUSK}>
      <Kicker>De la semilla a la llave</Kicker>
      <Title>Cada eslabón ocurre acá — y cada eslabón es trabajo local.</Title>
      <Lead max="58ch">
        Una sola planta abre una cadena completa dentro de la provincia:
        cultivo, cosecha, material, obra y vivienda. Valor agregado en origen,
        con materia prima del campo de al lado y manos formadas acá. La obra
        se hace acá.
      </Lead>
      <Bullets items={[
        'Vivienda accesible y abrigada, allí donde más falta',
        'Empleo técnico y local en cada eslabón, del campo a la llave',
        'Una industria que enciende otras cadenas: alimentos, textiles, bioplásticos, papel',
      ]} />
    </Shell>
  )},

  /* 09 — El carbono */
  { id: 'carbono', tag: 'El carbono', render: () => (
    <Shell>
      <Kicker>Un activo propio</Kicker>
      <Title>Generar créditos de carbono propios, en lugar de comprarlos.</Title>
      <Lead max="60ch">
        Cada pared y cada suelo mejorado sacan carbono del aire y lo guardan
        por siglos. Eso genera créditos de carbono: certificados que las
        empresas del mundo compran para compensar lo que contaminan. Acá
        podemos generarlos en lugar de comprarlos — y solo puede hacerlo quien
        tiene la cadena entera. Entrar temprano es como minar bitcoin en 2010:
        el que llega primero fija su costo de entrada.
      </Lead>
      <Stats items={[['+500', 'años guardado en la pared'], ['+1.000', 'años guardado en el suelo']]} />
    </Shell>
  )},

  /* 10 — La regla */
  { id: 'regla', tag: 'La regla', render: () => (
    <Shell bg={DUSK}>
      <Kicker color={CELESTE}>Cero saltos al vacío</Kicker>
      <Title>El riesgo no se asume: se elimina etapa por etapa.</Title>
      <Lead max="56ch">
        Seis etapas, cada una acotada y verificable. Como en una casa: nadie
        techa antes de los cimientos. El capital entra por etapas y solo
        avanza con evidencia.
      </Lead>
      <Bullets items={[
        'Cada etapa responde una pregunta antes de invertir en la siguiente',
        'Cada afirmación la firma un tercero: ensayos, normas, certificaciones',
        'El capital de una etapa nunca compromete el de la próxima',
      ]} />
    </Shell>
  )},

  /* 11 — Quiénes */
  { id: 'quienes', tag: 'Quiénes', render: () => (
    <Shell>
      <Kicker>Las piezas completas</Kicker>
      <Title>Todas las piezas en la mesa. El que hace y el que controla, siempre distintos.</Title>
      <Lead max="56ch">
        Cada pieza del plan está en manos de quien sabe hacerla.
      </Lead>
      <Bullets items={[
        'El campo: una fundación con licencia vigente para cultivar cáñamo y el primer cultivo industrial ya hecho en Neuquén',
        'La fábrica: la empresa que diseñó el plan e integra la cadena',
        'El control: el material lo ensaya un laboratorio técnico del Estado y el carbono lo mide una certificadora independiente — cada afirmación la firma un tercero',
        'El saber: una red que forma constructores y tecnología canadiense de referencia, con obras ya construidas',
      ]} />
    </Shell>
  )},

  /* 12 — La invitación */
  { id: 'invitacion', tag: 'La invitación', render: () => (
    <Shell bg={DUSK}>
      <Kicker>Tres asientos fundadores</Kicker>
      <Title>Tres asientos en la mesa fundadora.</Title>
      <Lead max="58ch">
        El plan avanza con capital privado y reglas claras: sin subsidios y
        sin organismos nuevos. Cada socio entra por la etapa que tiene
        adelante, con compromisos acotados y resultados verificables.
      </Lead>
      <Bullets items={[
        'La industria: financia etapas cortas y queda como socia fundadora — cuando la empresa ancla crece, crece toda la cadena',
        'El Estado: destrabar y simplificar. Reglas claras, nada más',
        'La ciencia: ensayos y certificación en cada paso del camino',
      ]} />
    </Shell>
  )},

  /* 13 — El horizonte */
  { id: 'horizonte', tag: 'El horizonte', render: () => (
    <Shell image="/hero/relato/etapa4.jpg" overlay="linear-gradient(180deg, rgba(7,26,56,0.6) 0%, rgba(7,26,56,0.85) 100%)">
      <Kicker>Ciudades de cáñamo</Kicker>
      <Title>Trabajo, techo y futuro, desde la tierra.</Title>
      <Lead max="54ch" color="rgba(243,241,231,0.75)">
        El día que el pozo empiece a dar menos, algo va a quedar en pie: la
        tierra bajo riego, las casas construidas, la gente formada y una
        industria que se replica en cualquier provincia con tierra, agua y
        sol.
      </Lead>
    </Shell>
  )},

  /* 14 — Cierre */
  { id: 'cierre', tag: 'Cierre', render: () => (
    <Shell image="/cadena/08-vivienda.jpg" overlay="linear-gradient(180deg, rgba(7,26,56,0.6) 0%, rgba(7,26,56,0.85) 100%)" align="center" style={{ alignItems: 'center', textAlign: 'center' }}>
      <Kicker>230 años después</Kicker>
      <motion.h2 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease }}
        style={{ ...serif, fontSize: 'clamp(2.6rem,6vw,5.5rem)', lineHeight: 1.04, color: CREAM, margin: 0, maxWidth: '16ch' }}>
        Belgrano tenía razón.
      </motion.h2>
      <Lead max="50ch" color="rgba(243,241,231,0.75)">
        Su idea de 1796 vuelve a ser el plan más moderno que tenemos: riqueza
        que se queda, que regenera y que da orgullo. Vaca Muerta le dio
        energía al país. Vaca Verde le deja raíces.
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
