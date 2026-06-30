// Tracking unificado de gates -> Worker central.
// Eventos: 'view' (llegó al gate), 'unlock' (entró), 'fail' (clave incorrecta).
const ENDPOINT = 'https://gates-analytics.nqnguille.workers.dev/event'
const PROJECT = 'planmanuelbelgrano'

function id(prefix: string) {
  try {
    const store = prefix === 'visitor' ? localStorage : sessionStorage
    const key = `pmb_${prefix}_id`
    let v = store.getItem(key)
    if (!v) {
      const cryptoId = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + '-' + Math.random().toString(16).slice(2)
      v = `${prefix}-${cryptoId}`
      store.setItem(key, v)
    }
    return v
  } catch {
    return `${prefix}-unknown`
  }
}

export function trackGate(
  event: 'view' | 'unlock' | 'fail',
  gate: string,
  key?: string,
) {
  try {
    // 'view' se envía una sola vez por sesión y por gate (evita inflar métricas).
    if (event === 'view') {
      const k = `pmb_view_${gate}`
      if (sessionStorage.getItem(k) === '1') return
      sessionStorage.setItem(k, '1')
    }
    const body = JSON.stringify({
      project: PROJECT,
      gate,
      event,
      key: key || '',
      visitor_id: id('visitor'),
      session_id: id('session'),
      path: typeof window !== 'undefined' ? window.location.pathname : '',
      lang: typeof document !== 'undefined' ? (document.documentElement.lang || 'es') : 'es',
    })
    fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body,
      keepalive: true,
    }).catch(() => {})
  } catch {
    /* noop */
  }
}

// Valida una llave contra la consola central de llaves (gates-analytics /verify).
// Devuelve true (ok), false (rechazada) o null (el central no respondió → el caller
// puede caer a un respaldo local). El /verify central ya registra el unlock/fail y,
// como el navegador llama directo, el UA real del visitante alimenta el filtro de bots.
const VERIFY_ENDPOINT = 'https://gates-analytics.nqnguille.workers.dev/verify'
export async function verifyGate(gate: string, key: string): Promise<boolean | null> {
  try {
    const res = await fetch(VERIFY_ENDPOINT, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        project: PROJECT,
        gate,
        key: key.toUpperCase(), // mayúsculas: alinea la ñ con la llave guardada
        path: typeof window !== 'undefined' ? window.location.pathname : '',
        visitor_id: id('visitor'),
        session_id: id('session'),
      }),
    })
    if (!res.ok) return null
    const data = await res.json().catch(() => null)
    if (!data) return null
    return !!data.ok
  } catch {
    return null
  }
}
