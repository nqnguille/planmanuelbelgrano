// Pages Function: estadísticas de ingresos por gate.
// GET /api/gate-stats?token=...
export async function onRequestGet(context) {
  const { request, env } = context
  const url = new URL(request.url)
  const token = url.searchParams.get('token') || request.headers.get('x-stats-token') || ''
  if (!env.STATS_TOKEN || token !== env.STATS_TOKEN) {
    return json({ ok: false, error: 'unauthorized' }, 401)
  }
  if (!env.DB) return json({ ok: false, error: 'no-db' }, 500)

  const days = Math.max(1, Math.min(365, Number(url.searchParams.get('days') || 90)))

  const total = await first(env.DB, `SELECT COUNT(*) AS n FROM gate_events`)
  const recent = await all(
    env.DB,
    `SELECT ts, gate, key_used, path, lang, country
     FROM gate_events
     ORDER BY id DESC
     LIMIT 80`
  )
  const byDay = await all(
    env.DB,
    `SELECT day, COUNT(*) AS n
     FROM gate_events
     WHERE day >= date('now', ?)
     GROUP BY day
     ORDER BY day`,
    [`-${days} days`]
  )
  const byGate = await all(env.DB, `SELECT gate, COUNT(*) AS n FROM gate_events GROUP BY gate ORDER BY n DESC`)
  const byKey = await all(env.DB, `SELECT key_used, COUNT(*) AS n FROM gate_events GROUP BY key_used ORDER BY n DESC`)
  const byCountry = await all(env.DB, `SELECT COALESCE(NULLIF(country,''),'??') AS country, COUNT(*) AS n FROM gate_events GROUP BY country ORDER BY n DESC`)
  const byPath = await all(env.DB, `SELECT path, COUNT(*) AS n FROM gate_events GROUP BY path ORDER BY n DESC LIMIT 20`)

  return json({ ok: true, days, total: total.n || 0, byDay, byGate, byKey, byCountry, byPath, recent }, 200)
}

async function first(db, sql, binds = []) {
  const stmt = db.prepare(sql)
  const res = binds.length ? await stmt.bind(...binds).first() : await stmt.first()
  return res || {}
}

async function all(db, sql, binds = []) {
  const stmt = db.prepare(sql)
  const res = binds.length ? await stmt.bind(...binds).all() : await stmt.all()
  return res.results || []
}

function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  })
}
