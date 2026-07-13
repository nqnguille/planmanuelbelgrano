'use client'

import { useEffect, useMemo, useState } from 'react'

type Stats = {
  ok: boolean
  error?: string
  days?: number
  total?: number
  byDay?: { day: string; n: number }[]
  byGate?: { gate: string; n: number }[]
  byKey?: { key_used: string; n: number }[]
  byCountry?: { country: string; n: number }[]
  byPath?: { path: string; n: number }[]
  recent?: { ts: string; gate: string; key_used: string; path: string; lang: string; country: string }[]
}

const DEFAULT_TOKEN = 'belgrano-stats-2026'

export default function AdminStatsPage() {
  const [token, setToken] = useState('')
  const [data, setData] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    try {
      const url = new URL(window.location.href)
      const t = url.searchParams.get('token') || localStorage.getItem('pmb_stats_token') || ''
      if (t) {
        setToken(t)
        fetchStats(t)
      }
    } catch {}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function fetchStats(t = token) {
    setLoading(true)
    setError('')
    try {
      localStorage.setItem('pmb_stats_token', t)
      const res = await fetch(`/api/gate-stats?token=${encodeURIComponent(t)}`, { cache: 'no-store' })
      const json = await res.json() as Stats
      if (!res.ok || !json.ok) throw new Error(json.error || `HTTP ${res.status}`)
      setData(json)
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e))
      setData(null)
    } finally {
      setLoading(false)
    }
  }

  const maxDay = useMemo(() => Math.max(1, ...(data?.byDay || []).map(d => Number(d.n))), [data])

  return (
    <main style={{ minHeight: '100vh', background: '#06152F', color: '#F3F1E7', padding: 'clamp(2rem,5vw,4rem)', fontFamily: 'var(--font-hanken)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <p style={{ color: '#F2B544', letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: 12 }}>Plan Manuel Belgrano</p>
        <h1 style={{ fontFamily: 'var(--font-garamond)', fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(2.4rem,6vw,4.8rem)', margin: '0 0 1rem' }}>Estadísticas de gates</h1>
        <p style={{ color: 'rgba(243,241,231,.68)', lineHeight: 1.6, maxWidth: 720 }}>Registra cada desbloqueo exitoso del gate: clave usada, página, país y fecha. Los datos empiezan desde el momento en que se deployó este tracking.</p>

        <form onSubmit={(e) => { e.preventDefault(); fetchStats() }} style={{ display: 'flex', gap: 10, flexWrap: 'wrap', margin: '2rem 0' }}>
          <input
            value={token}
            onChange={e => setToken(e.target.value)}
            placeholder="Token de estadísticas"
            type="password"
            style={{ flex: '1 1 280px', padding: '0.85rem 1rem', background: 'rgba(243,241,231,.06)', border: '1px solid rgba(242,181,68,.25)', color: '#F3F1E7', borderRadius: 8 }}
          />
          <button style={{ padding: '0.85rem 1.2rem', background: '#5BC46A', color: '#06152F', border: 0, borderRadius: 8, fontWeight: 700, cursor: 'pointer' }}>
            {loading ? 'Cargando…' : 'Ver estadísticas'}
          </button>
        </form>

        {!token && <p style={{ color: 'rgba(243,241,231,.45)' }}>Token sugerido local: <code>{DEFAULT_TOKEN}</code></p>}
        {error && <p style={{ color: '#ff9c87' }}>Error: {error}</p>}

        {data && (
          <>
            <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 14, margin: '2rem 0' }}>
              <Card title="Ingresos totales" value={String(data.total ?? 0)} />
              <Card title="Ventana" value={`${data.days ?? 90} días`} />
              <Card title="Gates" value={String(data.byGate?.length ?? 0)} />
              <Card title="Países" value={String(data.byCountry?.length ?? 0)} />
            </section>

            <Grid>
              <Panel title="Por día">
                {(data.byDay || []).length === 0 ? <Empty /> : (data.byDay || []).map(d => (
                  <Bar key={d.day} label={d.day} value={d.n} max={maxDay} />
                ))}
              </Panel>
              <Panel title="Por gate">
                {(data.byGate || []).map(x => <Row key={x.gate} label={x.gate} value={x.n} />)}
              </Panel>
              <Panel title="Por clave">
                {(data.byKey || []).map(x => <Row key={x.key_used} label={x.key_used} value={x.n} />)}
              </Panel>
              <Panel title="Por país">
                {(data.byCountry || []).map(x => <Row key={x.country} label={x.country} value={x.n} />)}
              </Panel>
            </Grid>

            <Panel title="Últimos accesos" wide>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
                  <thead><tr>{['Fecha', 'Gate', 'Clave', 'Ruta', 'Lang', 'País'].map(h => <th key={h} style={th}>{h}</th>)}</tr></thead>
                  <tbody>
                    {(data.recent || []).map((r, i) => (
                      <tr key={i}>
                        <td style={td}>{r.ts}</td><td style={td}>{r.gate}</td><td style={td}>{r.key_used}</td><td style={td}>{r.path}</td><td style={td}>{r.lang}</td><td style={td}>{r.country || '??'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Panel>
          </>
        )}
      </div>
    </main>
  )
}

function Card({ title, value }: { title: string; value: string }) {
  return <div style={{ background: 'rgba(243,241,231,.06)', border: '1px solid rgba(243,241,231,.12)', borderRadius: 14, padding: 18 }}><div style={{ color: 'rgba(243,241,231,.54)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '.12em' }}>{title}</div><div style={{ fontSize: 38, fontFamily: 'var(--font-garamond)', fontStyle: 'italic' }}>{value}</div></div>
}
function Grid({ children }: { children: React.ReactNode }) { return <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 14 }}>{children}</section> }
function Panel({ title, children, wide = false }: { title: string; children: React.ReactNode; wide?: boolean }) { return <div style={{ gridColumn: wide ? '1 / -1' : undefined, background: 'rgba(243,241,231,.04)', border: '1px solid rgba(243,241,231,.12)', borderRadius: 14, padding: 18, marginBottom: 14 }}><h2 style={{ margin: '0 0 1rem', fontSize: 16, color: '#F2B544' }}>{title}</h2>{children}</div> }
function Row({ label, value }: { label: string; value: number }) { return <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, borderBottom: '1px solid rgba(243,241,231,.08)', padding: '.55rem 0' }}><span>{label || '—'}</span><strong>{value}</strong></div> }
function Bar({ label, value, max }: { label: string; value: number; max: number }) { return <div style={{ marginBottom: 10 }}><div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}><span>{label}</span><b>{value}</b></div><div style={{ height: 7, background: 'rgba(243,241,231,.08)', borderRadius: 99, overflow: 'hidden' }}><div style={{ width: `${(value / max) * 100}%`, height: '100%', background: '#5BC46A' }} /></div></div> }
function Empty() { return <p style={{ color: 'rgba(243,241,231,.45)' }}>Sin datos todavía.</p> }
const th: React.CSSProperties = { textAlign: 'left', color: '#F2B544', borderBottom: '1px solid rgba(243,241,231,.16)', padding: '8px 10px', fontSize: 12, textTransform: 'uppercase', letterSpacing: '.08em' }
const td: React.CSSProperties = { borderBottom: '1px solid rgba(243,241,231,.08)', padding: '9px 10px', color: 'rgba(243,241,231,.78)', fontSize: 13 }
