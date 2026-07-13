// Pages Function: registra un ingreso (desbloqueo de gate) en D1.
// POST /api/gate-event  { gate, key, path, lang }
export async function onRequestPost(context) {
  const { request, env } = context
  try {
    if (!env.DB) {
      return json({ ok: false, error: 'no-db' }, 200)
    }
    let body = {}
    try {
      body = await request.json()
    } catch {
      body = {}
    }
    const gate = String(body.gate || 'desconocido').slice(0, 40)
    const key = String(body.key || '').slice(0, 60)
    const path = String(body.path || '').slice(0, 200)
    const lang = String(body.lang || '').slice(0, 8)
    const now = new Date()
    const ts = now.toISOString()
    const day = ts.slice(0, 10)
    const country = request.headers.get('cf-ipcountry') || ''
    const referrer = (request.headers.get('referer') || '').slice(0, 200)
    const ua = (request.headers.get('user-agent') || '').slice(0, 240)

    await env.DB.prepare(
      `INSERT INTO gate_events (ts, day, gate, key_used, path, lang, country, referrer, ua)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
    )
      .bind(ts, day, gate, key, path, lang, country, referrer, ua)
      .run()

    return json({ ok: true }, 200)
  } catch (err) {
    return json({ ok: false, error: String(err && err.message || err) }, 200)
  }
}

function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  })
}
