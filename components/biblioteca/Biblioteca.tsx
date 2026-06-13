'use client'

import { useState, type ComponentType, type ReactNode } from 'react'

// --- Secciones ---
import { GiroSection } from '@/components/biblioteca/sections/GiroSection'
import { BiocharSection } from '@/components/biblioteca/sections/BiocharSection'
import { PlantMarketsSection } from '@/components/biblioteca/sections/PlantMarketsSection'
import { PlantHistorySection } from '@/components/biblioteca/sections/PlantHistorySection'
import { ThesisTimelineSection } from '@/components/biblioteca/sections/ThesisTimelineSection'
import { MasterplanSection } from '@/components/biblioteca/sections/MasterplanSection'
import { ProcessSection } from '@/components/biblioteca/sections/ProcessSection'
import { AssetSection } from '@/components/biblioteca/sections/AssetSection'
import { IndustrialContinuitySection } from '@/components/biblioteca/sections/IndustrialContinuitySection'
import { Vision2035Section } from '@/components/biblioteca/sections/Vision2035Section'
import { CTAFinalSection } from '@/components/biblioteca/sections/CTAFinalSection'
import { CarbonFlipSection } from '@/components/biblioteca/sections/CarbonFlipSection'
import { ChallengeSection } from '@/components/biblioteca/sections/ChallengeSection'
import { OpportunitySection } from '@/components/biblioteca/sections/OpportunitySection'
import { FloraSection } from '@/components/biblioteca/sections/FloraSection'
import { PilotSection } from '@/components/biblioteca/sections/PilotSection'
import { HeroSection } from '@/components/biblioteca/sections/HeroSection'
import { BenchmarkSection } from '@/components/biblioteca/sections/BenchmarkSection'

// --- Deck slides ---
import { S01_Cover } from '@/components/biblioteca/deck/S01_Cover'
import { S02_Problem } from '@/components/biblioteca/deck/S02_Problem'
import { S03_Market } from '@/components/biblioteca/deck/S03_Market'
import { S04_Tech } from '@/components/biblioteca/deck/S04_Tech'
import { S05_Numbers } from '@/components/biblioteca/deck/S05_Numbers'
import { S06_Pilot } from '@/components/biblioteca/deck/S06_Pilot'
import { S07_Vision } from '@/components/biblioteca/deck/S07_Vision'
import { S08_CTA } from '@/components/biblioteca/deck/S08_CTA'

const INK = '#1C1A14'
const DUSK = '#1A2B22'
const CREAM = '#F7F6EB'
const GOLD = '#C9A84C'
const GREEN = '#71CE6A'

const serif = { fontFamily: 'var(--font-garamond), serif', fontWeight: 400 } as const
const sans = { fontFamily: 'var(--font-hanken), sans-serif' } as const

type Mod = {
  id: string
  name: string
  desc: string
  file: string
  Component: ComponentType
  kind: 'section' | 'deck'
}

const SECTIONS: Mod[] = [
  { id: 'giro', name: 'GiroSection', desc: 'Giro estratégico: argumento LNG/carbono con diagrama de flujo de GNL', file: 'sections/GiroSection', Component: GiroSection, kind: 'section' },
  { id: 'biochar', name: 'BiocharSection', desc: 'Segunda línea biochar: USD 164/t, Puro.earth, compradores Microsoft/Shell/Google', file: 'sections/BiocharSection', Component: BiocharSection, kind: 'section' },
  { id: 'plantmarkets', name: 'PlantMarketsSection', desc: 'Por qué hempcrete: captura #2, fijación #3 y #4, vs forestales', file: 'sections/PlantMarketsSection', Component: PlantMarketsSection, kind: 'section' },
  { id: 'planthistory', name: 'PlantHistorySection', desc: 'Historia humana del cáñamo — timeline de eras', file: 'sections/PlantHistorySection', Component: PlantHistorySection, kind: 'section' },
  { id: 'thesis', name: 'ThesisTimelineSection', desc: 'First-mover: ferrocarriles → petróleo → Vaca Muerta → cáñamo', file: 'sections/ThesisTimelineSection', Component: ThesisTimelineSection, kind: 'section' },
  { id: 'masterplan', name: 'MasterplanSection', desc: 'Pipeline animado de 8 nodos: de la semilla al carbono', file: 'sections/MasterplanSection', Component: MasterplanSection, kind: 'section' },
  { id: 'process', name: 'ProcessSection', desc: 'Proceso: decortización → shiv+cal → vertido/prensado + rama biochar', file: 'sections/ProcessSection', Component: ProcessSection, kind: 'section' },
  { id: 'asset', name: 'AssetSection', desc: 'El activo: YPF produce créditos + mercado USD 1T (BNEF)', file: 'sections/AssetSection', Component: AssetSection, kind: 'section' },
  { id: 'continuity', name: 'IndustrialContinuitySection', desc: 'Tabla Agro / Hidrocarburos / Industria federal + cita Belgrano 1809', file: 'sections/IndustrialContinuitySection', Component: IndustrialContinuitySection, kind: 'section' },
  { id: 'vision2035', name: 'Vision2035Section', desc: 'Visión 2035 + cita Sturzenegger + contadores animados', file: 'sections/Vision2035Section', Component: Vision2035Section, kind: 'section' },
  { id: 'ctafinal', name: 'CTAFinalSection', desc: 'Cierre: Sturzenegger + "Belgrano tenía razón"', file: 'sections/CTAFinalSection', Component: CTAFinalSection, kind: 'section' },
  { id: 'carbonflip', name: 'CarbonFlipSection', desc: 'Flip visual "compra → produce" carbono', file: 'sections/CarbonFlipSection', Component: CarbonFlipSection, kind: 'section' },
  { id: 'challenge', name: 'ChallengeSection', desc: 'El desafío: CS3D / huella de carbono del GNL europeo', file: 'sections/ChallengeSection', Component: ChallengeSection, kind: 'section' },
  { id: 'opportunity', name: 'OpportunitySection', desc: '4 pilares: desregulación, first-mover, infraestructura, retorno', file: 'sections/OpportunitySection', Component: OpportunitySection, kind: 'section' },
  { id: 'flora', name: 'FloraSection', desc: 'Presentación de Flora Cáñamo Neuquino', file: 'sections/FloraSection', Component: FloraSection, kind: 'section' },
  { id: 'pilot', name: 'PilotSection', desc: 'Piloto benchmark Mendoza / Neuquén', file: 'sections/PilotSection', Component: PilotSection, kind: 'section' },
  { id: 'hero', name: 'HeroSection', desc: 'Hero simple (versión vieja)', file: 'sections/HeroSection', Component: HeroSection, kind: 'section' },
  { id: 'benchmark', name: 'BenchmarkSection', desc: 'Sección benchmark (versión vieja)', file: 'sections/BenchmarkSection', Component: BenchmarkSection, kind: 'section' },
]

const DECK: Mod[] = [
  { id: 's01', name: 'S01 · Cover', desc: 'Portada del deck', file: 'deck/S01_Cover', Component: S01_Cover, kind: 'deck' },
  { id: 's02', name: 'S02 · Problem', desc: '200 años de improductividad', file: 'deck/S02_Problem', Component: S02_Problem, kind: 'deck' },
  { id: 's03', name: 'S03 · Market', desc: 'El crédito es la llave (commodity vs premium)', file: 'deck/S03_Market', Component: S03_Market, kind: 'deck' },
  { id: 's04', name: 'S04 · Tech', desc: 'Ranking #2 / #3 / #4', file: 'deck/S04_Tech', Component: S04_Tech, kind: 'deck' },
  { id: 's05', name: 'S05 · Numbers', desc: 'El retorno (contadores)', file: 'deck/S05_Numbers', Component: S05_Numbers, kind: 'deck' },
  { id: 's06', name: 'S06 · Pilot', desc: 'Benchmark dos provincias', file: 'deck/S06_Pilot', Component: S06_Pilot, kind: 'deck' },
  { id: 's07', name: 'S07 · Vision', desc: 'Visión + Sturzenegger', file: 'deck/S07_Vision', Component: S07_Vision, kind: 'deck' },
  { id: 's08', name: 'S08 · CTA', desc: 'Cierre — 3 contratos', file: 'deck/S08_CTA', Component: S08_CTA, kind: 'deck' },
]

function Preview({ kind, children }: { kind: 'section' | 'deck'; children: ReactNode }) {
  // Render a la medida real y escalar para thumbnail.
  if (kind === 'deck') {
    const scale = 0.34
    return (
      <div style={{ position: 'relative', width: '100%', height: 720 * scale, overflow: 'hidden', background: INK }}>
        <div style={{ width: 1280, height: 720, transform: `scale(${scale})`, transformOrigin: 'top left', pointerEvents: 'none' }}>
          {children}
        </div>
      </div>
    )
  }
  const scale = 0.34
  return (
    <div style={{ position: 'relative', width: '100%', height: 270, overflow: 'hidden', background: DUSK }}>
      <div style={{ width: 1366, transform: `scale(${scale})`, transformOrigin: 'top left', pointerEvents: 'none' }}>
        {children}
      </div>
    </div>
  )
}

function Card({ mod, chosen, onToggle, onView }: { mod: Mod; chosen: boolean; onToggle: () => void; onView: () => void }) {
  return (
    <div style={{
      background: '#fff', border: `1px solid ${chosen ? GREEN : 'rgba(28,26,20,0.12)'}`,
      boxShadow: chosen ? `0 0 0 2px ${GREEN}` : 'none',
      display: 'flex', flexDirection: 'column', overflow: 'hidden', transition: 'border-color .15s, box-shadow .15s',
    }}>
      <button onClick={onView} style={{ border: 'none', padding: 0, cursor: 'zoom-in', display: 'block', background: 'none' }} aria-label={`Ver ${mod.name} completo`}>
        <Preview kind={mod.kind}>{<mod.Component />}</Preview>
      </button>
      <div style={{ padding: '1rem 1.1rem 1.15rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '0.5rem' }}>
          <h3 style={{ ...sans, fontSize: '0.92rem', fontWeight: 600, color: INK, margin: 0 }}>{mod.name}</h3>
          <button onClick={onView} style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: GOLD, background: 'none', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>
            ver ⤢
          </button>
        </div>
        <p style={{ ...sans, fontWeight: 300, fontSize: '0.76rem', lineHeight: 1.5, color: 'rgba(28,26,20,0.6)', margin: 0, flex: 1 }}>{mod.desc}</p>
        <code style={{ ...sans, fontSize: '0.62rem', color: 'rgba(28,26,20,0.4)', letterSpacing: '0.02em' }}>components/biblioteca/{mod.file}</code>
        <button onClick={onToggle} style={{
          ...sans, marginTop: '0.4rem', padding: '0.6rem', cursor: 'pointer',
          background: chosen ? GREEN : 'transparent', color: chosen ? INK : 'rgba(28,26,20,0.7)',
          border: `1px solid ${chosen ? GREEN : 'rgba(28,26,20,0.25)'}`,
          fontSize: '0.66rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 500,
          transition: 'all .15s',
        }}>
          {chosen ? '✓ Elegido para reciclar' : 'Elegir'}
        </button>
      </div>
    </div>
  )
}

export function Biblioteca() {
  const [chosen, setChosen] = useState<Set<string>>(new Set())
  const [viewing, setViewing] = useState<Mod | null>(null)

  const toggle = (id: string) => setChosen((prev) => {
    const next = new Set(prev)
    next.has(id) ? next.delete(id) : next.add(id)
    return next
  })

  const all = [...SECTIONS, ...DECK]
  const chosenMods = all.filter((m) => chosen.has(m.id))
  const lista = chosenMods.map((m) => `${m.name} (components/biblioteca/${m.file})`).join('\n')

  const grid: React.CSSProperties = {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '1.25rem', marginTop: '1.75rem',
  }

  return (
    <main style={{ background: CREAM, minHeight: '100vh', paddingBottom: chosen.size ? '7rem' : '4rem' }}>
      {/* Header */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 30, background: 'rgba(28,26,20,0.94)', backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(201,168,76,0.18)', padding: '0 clamp(1.25rem, 4vw, 3rem)', height: '3.5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <span style={{ ...sans, fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: CREAM, fontWeight: 500 }}>
          Biblioteca de módulos <span style={{ color: 'rgba(201,168,76,0.7)' }}>· {all.length} piezas reciclables</span>
        </span>
        <a href="/masterplan/" style={{ ...sans, fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: GOLD, textDecoration: 'none', border: '1px solid rgba(201,168,76,0.35)', padding: '0.35rem 0.8rem' }}>
          ← Masterplan
        </a>
      </header>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(2rem, 5vw, 3.5rem) clamp(1.25rem, 4vw, 3rem)' }}>
        <h1 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: INK, margin: '0 0 0.75rem 0' }}>
          Elegí qué reciclar.
        </h1>
        <p style={{ ...sans, fontWeight: 300, fontSize: '0.95rem', lineHeight: 1.7, color: 'rgba(28,26,20,0.6)', maxWidth: '60ch', margin: 0 }}>
          Todos los módulos que generamos, en vivo. Hacé click en cualquier preview para verlo a tamaño completo,
          y tocá «Elegir» en los que quieras traer al masterplan. Abajo te queda la lista lista para pasarme.
        </p>

        {/* Secciones */}
        <h2 style={{ ...sans, fontSize: '0.65rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: GREEN, margin: '3rem 0 0', fontWeight: 600 }}>
          Secciones · {SECTIONS.length}
        </h2>
        <div style={grid}>
          {SECTIONS.map((m) => (
            <Card key={m.id} mod={m} chosen={chosen.has(m.id)} onToggle={() => toggle(m.id)} onView={() => setViewing(m)} />
          ))}
        </div>

        {/* Deck */}
        <h2 style={{ ...sans, fontSize: '0.65rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: GREEN, margin: '3.5rem 0 0', fontWeight: 600 }}>
          Deck · slides · {DECK.length}
        </h2>
        <div style={grid}>
          {DECK.map((m) => (
            <Card key={m.id} mod={m} chosen={chosen.has(m.id)} onToggle={() => toggle(m.id)} onView={() => setViewing(m)} />
          ))}
        </div>
      </div>

      {/* Barra de selección */}
      {chosen.size > 0 && (
        <div style={{
          position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 40,
          background: 'rgba(28,26,20,0.97)', backdropFilter: 'blur(10px)', borderTop: `1px solid ${GREEN}`,
          padding: '1rem clamp(1.25rem, 4vw, 3rem)', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap',
        }}>
          <span style={{ ...sans, fontSize: '0.8rem', color: CREAM, fontWeight: 500 }}>
            {chosen.size} elegido{chosen.size > 1 ? 's' : ''}:
            <span style={{ color: 'rgba(247,246,235,0.6)', fontWeight: 300 }}> {chosenMods.map((m) => m.name).join(', ')}</span>
          </span>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.75rem' }}>
            <button onClick={() => setChosen(new Set())} style={{ ...sans, fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(247,246,235,0.5)', background: 'none', border: '1px solid rgba(247,246,235,0.2)', padding: '0.55rem 1rem', cursor: 'pointer' }}>
              Limpiar
            </button>
            <button onClick={() => navigator.clipboard?.writeText(lista)} style={{ ...sans, fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: INK, background: GREEN, border: 'none', padding: '0.55rem 1.25rem', cursor: 'pointer', fontWeight: 600 }}>
              Copiar lista
            </button>
          </div>
        </div>
      )}

      {/* Overlay ver-completo */}
      {viewing && (
        <div
          onClick={() => setViewing(null)}
          style={{ position: 'fixed', inset: 0, zIndex: 50, background: 'rgba(10,12,10,0.92)', display: 'flex', flexDirection: 'column' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.85rem clamp(1rem, 4vw, 2.5rem)', borderBottom: '1px solid rgba(201,168,76,0.2)', flexShrink: 0 }}>
            <span style={{ ...sans, fontSize: '0.7rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: CREAM, fontWeight: 500 }}>
              {viewing.name} <span style={{ color: 'rgba(247,246,235,0.45)' }}>· {viewing.desc}</span>
            </span>
            <div style={{ display: 'flex', gap: '0.75rem' }} onClick={(e) => e.stopPropagation()}>
              <button onClick={() => toggle(viewing.id)} style={{ ...sans, fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: chosen.has(viewing.id) ? INK : CREAM, background: chosen.has(viewing.id) ? GREEN : 'transparent', border: `1px solid ${GREEN}`, padding: '0.5rem 1rem', cursor: 'pointer', fontWeight: 500 }}>
                {chosen.has(viewing.id) ? '✓ Elegido' : 'Elegir'}
              </button>
              <button onClick={() => setViewing(null)} style={{ ...sans, fontSize: '0.8rem', color: CREAM, background: 'none', border: '1px solid rgba(247,246,235,0.25)', width: '2rem', height: '2rem', cursor: 'pointer', lineHeight: 1 }}>✕</button>
            </div>
          </div>
          <div onClick={(e) => e.stopPropagation()} style={{ flex: 1, overflow: 'auto', background: INK }}>
            {viewing.kind === 'deck' ? (
              <div style={{ width: '100%', aspectRatio: '16 / 9', position: 'relative' }}>
                <viewing.Component />
              </div>
            ) : (
              <viewing.Component />
            )}
          </div>
        </div>
      )}
    </main>
  )
}
