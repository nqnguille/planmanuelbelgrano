'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useMemo, useState, type CSSProperties, type ReactNode } from 'react'
import {
  objeciones, objecionesMadre, arco, secuencia, audiencias, tags,
  type Audiencia, type Tag,
} from './data'

/* ============================================================
   DECK PRIVADO — "Blindaje"
   Construido alrededor del documento de objeciones (Carmen, jun 2026).
   Herramienta de trabajo para la reunión legal/técnica previa a YPF.
   ============================================================ */

const INK = '#071A38'
const DUSK = '#0E2A52'
const CREAM = '#F3F1E7'
const GOLD = '#F2B544'
const GREEN = '#5BC46A'
const CELESTE = '#74ACDF'

const serif: CSSProperties = { fontFamily: 'var(--font-garamond), "EB Garamond", serif', fontWeight: 400 }
const sans: CSSProperties = { fontFamily: 'var(--font-hanken), "Plus Jakarta Sans", sans-serif' }

const tagColor: Record<Tag, string> = {
  Legal: '#E0708A',
  Técnica: CELESTE,
  Comercial: GOLD,
  Reputacional: '#C98AE0',
  Estratégica: GREEN,
  Financiera: '#7FD0C4',
}

function Rise({ children, delay = 0, style }: { children: ReactNode; delay?: number; style?: CSSProperties }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      style={style}
    >
      {children}
    </motion.div>
  )
}

function Eyebrow({ children, color = GOLD }: { children: ReactNode; color?: string }) {
  return (
    <p style={{ ...sans, fontSize: '0.62rem', letterSpacing: '0.28em', textTransform: 'uppercase', color, marginBottom: '1.1rem' }}>
      {children}
    </p>
  )
}

/* ---------- Secciones ---------- */

function Portada() {
  return (
    <section style={{ minHeight: '100svh', background: INK, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(2rem,7vw,6rem) clamp(1.5rem,6vw,7rem)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(242,181,68,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
      <Rise>
        <Eyebrow>Flora Cáñamo Neuquino · Documento confidencial</Eyebrow>
      </Rise>
      <Rise delay={0.1}>
        <h1 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(3rem,9vw,7rem)', lineHeight: 0.98, color: CREAM, margin: '0 0 1.6rem 0', maxWidth: '16ch' }}>
          Pensar como YPF<br />antes que YPF.
        </h1>
      </Rise>
      <Rise delay={0.2}>
        <p style={{ ...sans, fontWeight: 300, fontSize: 'clamp(1rem,1.8vw,1.3rem)', lineHeight: 1.6, color: 'rgba(243,241,231,0.62)', maxWidth: '52ch' }}>
          El mapa de objeciones del Plan Belgrano y nuestras respuestas preparadas.
          Material de trabajo para el análisis legal y técnico previo a la conversación con YPF.
        </p>
      </Rise>
      <Rise delay={0.32} style={{ marginTop: 'clamp(2.5rem,5vw,4rem)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem' }}>
          {[['35', 'objeciones mapeadas'], ['4', 'frentes de fuego'], ['5', 'temas para los abogados']].map(([n, l]) => (
            <div key={l}>
              <div style={{ ...serif, fontSize: 'clamp(2.2rem,4vw,3.2rem)', color: GOLD, lineHeight: 1 }}>{n}</div>
              <div style={{ ...sans, fontSize: '0.72rem', letterSpacing: '0.06em', color: 'rgba(243,241,231,0.5)', marginTop: '0.4rem', textTransform: 'uppercase' }}>{l}</div>
            </div>
          ))}
        </div>
      </Rise>
    </section>
  )
}

function Metodo() {
  const mandato = ['Producir energía', 'Aumentar rentabilidad', 'Reducir riesgos', 'Proteger la licencia social', 'Cumplir regulaciones', 'Maximizar valor para accionistas']
  return (
    <section style={{ background: DUSK, padding: 'clamp(4rem,9vw,8rem) clamp(1.5rem,6vw,7rem)' }}>
      <Rise><Eyebrow color={CELESTE}>El método</Eyebrow></Rise>
      <Rise delay={0.08}>
        <h2 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(2rem,4vw,3.4rem)', lineHeight: 1.1, color: CREAM, margin: '0 0 1.6rem 0', maxWidth: '20ch' }}>
          No alcanza con inspirar. Hay que desactivar la duda.
        </h2>
      </Rise>
      <Rise delay={0.14}>
        <p style={{ ...sans, fontWeight: 300, fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(243,241,231,0.7)', maxWidth: '58ch' }}>
          Pensamos como el presidente de YPF, su directorio, sus abogados, sus equipos de
          compliance, asuntos corporativos, sostenibilidad, riesgos y finanzas. El mandato de
          Marín no es "hacer el bien": es producir energía, rentabilidad y valor para
          accionistas, sin riesgo regulatorio ni reputacional. Desde ese lugar surgen las
          objeciones que tenemos que responder antes de que las formulen.
        </p>
      </Rise>

      <Rise delay={0.2} style={{ marginTop: '2.8rem' }}>
        <p style={{ ...sans, fontSize: '0.66rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(243,241,231,0.4)', marginBottom: '1rem' }}>El mandato real de Marín</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
          {mandato.map((m) => (
            <span key={m} style={{ ...sans, fontSize: '0.82rem', color: 'rgba(243,241,231,0.85)', border: '1px solid rgba(116,172,223,0.3)', borderRadius: 999, padding: '0.5rem 1rem' }}>{m}</span>
          ))}
        </div>
      </Rise>

      {/* Regla 30/70 */}
      <Rise delay={0.26} style={{ marginTop: '3.2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '30fr 70fr', gap: '2px', borderRadius: 14, overflow: 'hidden', maxWidth: 880 }}>
          <div style={{ background: 'rgba(242,181,68,0.14)', padding: '1.6rem 1.4rem' }}>
            <div style={{ ...serif, fontSize: '1.8rem', color: GOLD }}>30%</div>
            <div style={{ ...sans, fontSize: '0.8rem', color: 'rgba(243,241,231,0.8)', marginTop: '0.5rem', lineHeight: 1.5 }}>Inspiración<br /><span style={{ opacity: 0.6 }}>Belgrano · Patagonia · desarrollo regenerativo · impacto</span></div>
          </div>
          <div style={{ background: 'rgba(91,196,106,0.14)', padding: '1.6rem 1.4rem' }}>
            <div style={{ ...serif, fontSize: '1.8rem', color: GREEN }}>70%</div>
            <div style={{ ...sans, fontSize: '0.8rem', color: 'rgba(243,241,231,0.8)', marginTop: '0.5rem', lineHeight: 1.5 }}>Credibilidad<br /><span style={{ opacity: 0.6 }}>INTI · Fundación Gen · EcoGaia · piloto · mercado · clientes · indicadores · modelo económico</span></div>
          </div>
        </div>
        <p style={{ ...sans, fontSize: '0.82rem', color: 'rgba(243,241,231,0.5)', marginTop: '1rem', maxWidth: '60ch', lineHeight: 1.6 }}>
          La visión ya la tienen. Lo que hoy hay que demostrar es que somos una organización
          capaz de ejecutarla.
        </p>
      </Rise>
    </section>
  )
}

function Arco() {
  return (
    <section style={{ background: INK, padding: 'clamp(4rem,9vw,8rem) clamp(1.5rem,6vw,7rem)' }}>
      <Rise><Eyebrow>La estructura del pitch</Eyebrow></Rise>
      <Rise delay={0.08}>
        <h2 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(2rem,4vw,3.4rem)', lineHeight: 1.1, color: CREAM, margin: '0 0 0.8rem 0', maxWidth: '22ch' }}>
          Las objeciones no se responden todas juntas.
        </h2>
      </Rise>
      <Rise delay={0.12}>
        <p style={{ ...sans, fontWeight: 300, fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(243,241,231,0.62)', maxWidth: '56ch', marginBottom: '3rem' }}>
          Se responden en el momento exacto en que aparecen en la cabeza del que escucha. Las
          mejores presentaciones parecen magia: la duda se disuelve antes de que llegue a formularse.
        </p>
      </Rise>

      <div style={{ display: 'grid', gap: '1px', background: 'rgba(243,241,231,0.08)', borderRadius: 14, overflow: 'hidden' }}>
        {arco.map((a, i) => (
          <Rise key={a.n} delay={i * 0.04}>
            <div style={{ background: INK, padding: '1.4rem clamp(1rem,3vw,2rem)', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '1.4rem', alignItems: 'baseline' }}>
              <span style={{ ...serif, fontStyle: 'italic', fontSize: '1.5rem', color: GOLD, minWidth: '1.4ch' }}>{a.n}</span>
              <div>
                <div style={{ ...sans, fontWeight: 500, fontSize: '1rem', color: CREAM, marginBottom: '0.3rem' }}>{a.t}</div>
                <div style={{ ...sans, fontWeight: 300, fontSize: '0.88rem', lineHeight: 1.55, color: 'rgba(243,241,231,0.55)' }}>{a.d}</div>
              </div>
            </div>
          </Rise>
        ))}
      </div>

      {/* Secuencia afirmación → objeción → slide */}
      <Rise delay={0.1} style={{ marginTop: '3.5rem' }}>
        <p style={{ ...sans, fontSize: '0.66rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(243,241,231,0.4)', marginBottom: '1.2rem' }}>
          Cada afirmación dispara una pregunta — y la diapositiva siguiente la responde
        </p>
        <div style={{ display: 'grid', gap: '0.7rem' }}>
          {secuencia.map((s) => (
            <div key={s.dice} style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) auto minmax(0,1fr)', gap: 'clamp(0.6rem,2vw,1.4rem)', alignItems: 'center', background: 'rgba(243,241,231,0.03)', border: '1px solid rgba(243,241,231,0.07)', borderRadius: 12, padding: '0.9rem 1.1rem' }}>
              <span style={{ ...sans, fontSize: '0.86rem', color: CREAM }}>"{s.dice}"</span>
              <span style={{ ...sans, fontSize: '0.78rem', color: 'rgba(224,112,138,0.9)', fontStyle: 'italic', textAlign: 'center' }}>{s.pregunta}</span>
              <span style={{ ...sans, fontSize: '0.84rem', fontWeight: 500, color: GREEN, textAlign: 'right' }}>{s.responde}</span>
            </div>
          ))}
        </div>
      </Rise>
    </section>
  )
}

function ObjecionesMadre() {
  return (
    <section style={{ background: DUSK, padding: 'clamp(4rem,9vw,8rem) clamp(1.5rem,6vw,7rem)' }}>
      <Rise><Eyebrow color={CELESTE}>El blanco real</Eyebrow></Rise>
      <Rise delay={0.08}>
        <h2 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(2rem,4vw,3.4rem)', lineHeight: 1.1, color: CREAM, margin: '0 0 2.6rem 0', maxWidth: '20ch' }}>
          Si tuviéramos que responder una sola objeción, serían estas dos.
        </h2>
      </Rise>
      <div style={{ display: 'grid', gap: '1.4rem', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))' }}>
        {objecionesMadre.map((o, i) => (
          <Rise key={o.titulo} delay={i * 0.1}>
            <div style={{ background: INK, border: `1px solid ${i === 1 ? 'rgba(224,112,138,0.35)' : 'rgba(242,181,68,0.25)'}`, borderRadius: 16, padding: 'clamp(1.6rem,3vw,2.4rem)', height: '100%' }}>
              <div style={{ ...sans, fontSize: '0.64rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: i === 1 ? '#E0708A' : GOLD, marginBottom: '1.2rem' }}>{o.titulo}</div>
              <p style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.2rem,2vw,1.6rem)', lineHeight: 1.35, color: CREAM, margin: '0 0 1.3rem 0' }}>"{o.cita}"</p>
              <p style={{ ...sans, fontWeight: 300, fontSize: '0.9rem', lineHeight: 1.65, color: 'rgba(243,241,231,0.6)', margin: 0 }}>{o.bajada}</p>
            </div>
          </Rise>
        ))}
      </div>
    </section>
  )
}

/* ---------- Banco de objeciones (interactivo) ---------- */

function Card({ o, open, onToggle }: { o: typeof objeciones[number]; open: boolean; onToggle: () => void }) {
  return (
    <div style={{ background: open ? 'rgba(243,241,231,0.04)' : 'rgba(243,241,231,0.02)', border: `1px solid ${open ? tagColor[o.tag] + '55' : 'rgba(243,241,231,0.08)'}`, borderRadius: 14, overflow: 'hidden', transition: 'border-color 0.2s' }}>
      <button onClick={onToggle} style={{ all: 'unset', cursor: 'pointer', display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '1rem', alignItems: 'center', width: '100%', padding: 'clamp(1rem,2.4vw,1.4rem)', boxSizing: 'border-box' }}>
        <span style={{ ...serif, fontStyle: 'italic', fontSize: '1.1rem', color: 'rgba(243,241,231,0.4)', minWidth: '2ch' }}>{String(o.n).padStart(2, '0')}</span>
        <span style={{ ...sans, fontSize: 'clamp(0.9rem,1.4vw,1.02rem)', fontWeight: 500, color: CREAM, lineHeight: 1.4 }}>"{o.pregunta}"</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
          <span style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: tagColor[o.tag], border: `1px solid ${tagColor[o.tag]}55`, borderRadius: 999, padding: '0.28rem 0.6rem', whiteSpace: 'nowrap' }}>{o.tag}</span>
          <span style={{ color: 'rgba(243,241,231,0.4)', fontSize: '1.2rem', transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.25s', lineHeight: 1 }}>+</span>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '0 clamp(1rem,2.4vw,1.4rem) clamp(1.3rem,2.4vw,1.6rem) clamp(3rem,5vw,4rem)' }}>
              <p style={{ ...sans, fontSize: '0.78rem', fontStyle: 'italic', color: 'rgba(243,241,231,0.45)', margin: '0 0 1.1rem 0', lineHeight: 1.5 }}>{o.quien}</p>
              <div style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: GREEN, marginBottom: '0.5rem' }}>Nuestra respuesta</div>
              <p style={{ ...sans, fontWeight: 300, fontSize: '0.96rem', lineHeight: 1.7, color: 'rgba(243,241,231,0.88)', margin: '0 0 1.2rem 0' }}>{o.respuesta}</p>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', borderTop: '1px solid rgba(243,241,231,0.08)', paddingTop: '0.9rem' }}>
                <span style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(243,241,231,0.4)', whiteSpace: 'nowrap', marginTop: '0.15rem' }}>Evidencia</span>
                <span style={{ ...sans, fontSize: '0.82rem', color: 'rgba(243,241,231,0.62)', lineHeight: 1.55 }}>{o.evidencia}</span>
              </div>
              {o.abogados && (
                <div style={{ marginTop: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(224,112,138,0.1)', border: '1px solid rgba(224,112,138,0.35)', borderRadius: 999, padding: '0.4rem 0.9rem' }}>
                  <span style={{ ...sans, fontSize: '0.68rem', color: '#E0708A', letterSpacing: '0.04em' }}>⚖ A cerrar con los abogados</span>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function Banco() {
  const [audFilter, setAudFilter] = useState<Audiencia | 'Todas'>('Todas')
  const [tagFilter, setTagFilter] = useState<Tag | null>(null)
  const [soloAbogados, setSoloAbogados] = useState(false)
  const [openN, setOpenN] = useState<number | null>(null)

  const filtered = useMemo(() => objeciones.filter((o) =>
    (audFilter === 'Todas' || o.audiencia === audFilter) &&
    (!tagFilter || o.tag === tagFilter) &&
    (!soloAbogados || o.abogados)
  ), [audFilter, tagFilter, soloAbogados])

  const chip = (active: boolean, color: string): CSSProperties => ({
    ...sans, fontSize: '0.74rem', letterSpacing: '0.04em', cursor: 'pointer',
    padding: '0.5rem 0.95rem', borderRadius: 999, border: `1px solid ${active ? color : 'rgba(243,241,231,0.18)'}`,
    background: active ? color + '22' : 'transparent', color: active ? color : 'rgba(243,241,231,0.65)',
    transition: 'all 0.18s', whiteSpace: 'nowrap',
  })

  const counts = useMemo(() => {
    const c: Record<string, number> = { Todas: objeciones.length }
    audiencias.forEach((a) => { c[a] = objeciones.filter((o) => o.audiencia === a).length })
    return c
  }, [])

  return (
    <section style={{ background: INK, padding: 'clamp(4rem,9vw,8rem) clamp(1.5rem,6vw,7rem)' }}>
      <Rise><Eyebrow>Banco de objeciones</Eyebrow></Rise>
      <Rise delay={0.08}>
        <h2 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(2rem,4vw,3.4rem)', lineHeight: 1.1, color: CREAM, margin: '0 0 0.8rem 0', maxWidth: '24ch' }}>
          Toda objeción posible, con su respuesta lista.
        </h2>
      </Rise>
      <Rise delay={0.12}>
        <p style={{ ...sans, fontWeight: 300, fontSize: '1rem', lineHeight: 1.65, color: 'rgba(243,241,231,0.55)', maxWidth: '54ch', marginBottom: '2.4rem' }}>
          Filtrá por frente o por tema. Las marcadas con ⚖ son las que necesitamos cerrar
          mañana con los abogados. Tocá cada una para ver la respuesta y la evidencia.
        </p>
      </Rise>

      {/* Filtros por audiencia */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem', marginBottom: '0.9rem' }}>
        <button onClick={() => setAudFilter('Todas')} style={chip(audFilter === 'Todas', GOLD)}>Todas · {counts.Todas}</button>
        {audiencias.map((a) => (
          <button key={a} onClick={() => setAudFilter(a)} style={chip(audFilter === a, GOLD)}>{a} · {counts[a]}</button>
        ))}
      </div>
      {/* Filtros por tag + solo abogados */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem', marginBottom: '2rem', alignItems: 'center' }}>
        {tags.map((t) => (
          <button key={t} onClick={() => setTagFilter(tagFilter === t ? null : t)} style={chip(tagFilter === t, tagColor[t])}>{t}</button>
        ))}
        <span style={{ width: 1, height: 22, background: 'rgba(243,241,231,0.15)', margin: '0 0.3rem' }} />
        <button onClick={() => setSoloAbogados((v) => !v)} style={chip(soloAbogados, '#E0708A')}>⚖ Solo para abogados</button>
      </div>

      {/* Lista */}
      <motion.div layout style={{ display: 'grid', gap: '0.7rem' }}>
        {filtered.map((o) => (
          <Card key={o.n} o={o} open={openN === o.n} onToggle={() => setOpenN(openN === o.n ? null : o.n)} />
        ))}
        {filtered.length === 0 && (
          <p style={{ ...sans, color: 'rgba(243,241,231,0.4)', padding: '2rem 0' }}>No hay objeciones con esos filtros.</p>
        )}
      </motion.div>
    </section>
  )
}

function Cierre() {
  return (
    <section style={{ background: DUSK, padding: 'clamp(5rem,11vw,9rem) clamp(1.5rem,6vw,7rem)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: '-30%', left: '50%', transform: 'translateX(-50%)', width: '80vw', height: '60vw', background: 'radial-gradient(circle, rgba(91,196,106,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
      <Rise>
        <p style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.7rem,3.6vw,3rem)', lineHeight: 1.3, color: CREAM, maxWidth: '24ch', margin: '0 auto 1.6rem' }}>
          "Es una visión atractiva. Y además parece una organización capaz de convertirla en realidad."
        </p>
      </Rise>
      <Rise delay={0.1}>
        <p style={{ ...sans, fontWeight: 300, fontSize: '1rem', lineHeight: 1.7, color: 'rgba(243,241,231,0.55)', maxWidth: '52ch', margin: '0 auto' }}>
          Ese es el equilibrio que buscamos. No convencer a YPF de que el mundo necesita más
          impacto —probablemente ya lo sepa— sino demostrar que existe el primer negocio que
          hace posible toda la visión. Eso es lo que el piloto viene a probar.
        </p>
      </Rise>
      <Rise delay={0.2} style={{ marginTop: '2.8rem' }}>
        <a href="/masterplan" style={{ ...sans, fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: INK, background: GREEN, borderRadius: 999, padding: '0.9rem 2rem', textDecoration: 'none', display: 'inline-block' }}>
          Ir al masterplan
        </a>
      </Rise>
    </section>
  )
}

export function Deck() {
  return (
    <main style={{ background: INK }}>
      <Portada />
      <Metodo />
      <Arco />
      <ObjecionesMadre />
      <Banco />
      <Cierre />
    </main>
  )
}
