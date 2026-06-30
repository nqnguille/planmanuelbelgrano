/* ══════════════════════════════════════════════════════════
   Plan Manuel Belgrano — Access Gate server-side (Cloudflare Pages Function)
   El sitio NO se sirve sin cookie válida: solo la pantalla de acceso.
   La validación la hace la consola central gates-analytics (/verify).
   Administrar llaves: https://gates-analytics.nqnguille.workers.dev/keys

   Además conserva la detección de país (cookie pmb_country) para el idioma:
   AR → español, otro país → inglés.
   ══════════════════════════════════════════════════════════ */

const PROJECT = 'planmanuelbelgrano';
const GATE = 'masterplan';
const PASSWORDS = ['elsueñodemanuel', 'thedreamofmanuel'];   // respaldo si el central no responde
const COOKIE = 'pmb_gate_auth';            // HttpOnly: prueba de acceso
const TOKEN = 'pmb-acceso-ok-v1';
const JS_COOKIE = 'pmb_gate';              // legible por JS: desbloquea los gates client-side
const VISITOR_COOKIE = 'pmb_vid';
const SESSION_COOKIE = 'pmb_sid';
const MAX_AGE = 60 * 60 * 24 * 30;         // 30 días

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const cookies = parseCookies(request.headers.get('Cookie') || '');
  const visitorId = cookies[VISITOR_COOKIE] || `visitor-${crypto.randomUUID()}`;
  const sessionId = cookies[SESSION_COOKIE] || `session-${crypto.randomUUID()}`;

  // Ya autenticado → servir el sitio (con la lógica de país original).
  if (cookies[COOKIE] === TOKEN) {
    return withCountryCookie(context);
  }

  // Login (POST del formulario del gate).
  if (request.method === 'POST') {
    const form = await request.formData();
    const entered = String(form.get('password') || '').trim();

    // Mayúsculas del lado cliente: alinea la ñ con la llave guardada (la consola valida sin distinguir mayúsculas).
    let ok = await verifyCentral(context, entered.toUpperCase(), url.pathname, visitorId, sessionId);
    if (ok === null) {            // central no disponible → respaldo local
      ok = PASSWORDS.includes(entered.toLowerCase());
      if (ok) gateEvent(context, 'unlock', url.pathname, visitorId, sessionId);
    }

    if (ok) {
      const headers = new Headers({ Location: '/' });
      headers.append('Set-Cookie', `${COOKIE}=${TOKEN}; Path=/; Secure; HttpOnly; SameSite=Lax; Max-Age=${MAX_AGE}`);
      headers.append('Set-Cookie', `${JS_COOKIE}=1; Path=/; Secure; SameSite=Lax; Max-Age=${MAX_AGE}`);
      headers.append('Set-Cookie', `${VISITOR_COOKIE}=${visitorId}; Path=/; Secure; HttpOnly; SameSite=Lax; Max-Age=${MAX_AGE}`);
      headers.append('Set-Cookie', `${SESSION_COOKIE}=${sessionId}; Path=/; Secure; HttpOnly; SameSite=Lax; Max-Age=${60 * 60 * 2}`);
      return new Response(null, { status: 302, headers });
    }
    return loginResponse(context, true, visitorId, sessionId);
  }

  // No autenticado → pantalla de acceso (registrar "view" solo en navegaciones HTML).
  if (isDocumentRequest(request, url)) {
    gateEvent(context, 'view', url.pathname, visitorId, sessionId);
  }
  return loginResponse(context, false, visitorId, sessionId);
}

// Lógica original conservada: setea la cookie de país en respuestas HTML.
async function withCountryCookie(context) {
  const response = await context.next();
  const ct = response.headers.get('content-type') || '';
  if (!ct.includes('text/html')) return response;
  const country = context.request.headers.get('cf-ipcountry') || '';
  const res = new Response(response.body, response);
  res.headers.append('Set-Cookie', `pmb_country=${country}; Path=/; Max-Age=31536000; SameSite=Lax`);
  return res;
}

// Valida contra la consola central. true=ok, false=rechazada, null=central caído.
async function verifyCentral(context, key, path, visitorId, sessionId) {
  try {
    const res = await fetch('https://gates-analytics.nqnguille.workers.dev/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'CF-IPCountry': context.request.headers.get('cf-ipcountry') || '',
      },
      body: JSON.stringify({ project: PROJECT, gate: GATE, key, visitor_id: visitorId, session_id: sessionId, path, ua: context.request.headers.get('user-agent') || '' }),
    });
    if (!res.ok) return null;
    const data = await res.json().catch(() => null);
    if (!data) return null;
    return !!data.ok;
  } catch (e) {
    return null;
  }
}

function gateEvent(context, event, path, visitorId, sessionId) {
  try {
    context.waitUntil(
      fetch('https://gates-analytics.nqnguille.workers.dev/event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'CF-IPCountry': context.request.headers.get('cf-ipcountry') || '',
        },
        body: JSON.stringify({ project: PROJECT, gate: GATE, event, visitor_id: visitorId, session_id: sessionId, key: event === 'unlock' ? 'ok' : '', path, ua: context.request.headers.get('user-agent') || '' }),
      }).catch(() => {})
    );
  } catch (e) { /* noop */ }
}

function parseCookies(header) {
  const out = {};
  header.split(';').forEach((part) => {
    const i = part.indexOf('=');
    if (i > -1) out[part.slice(0, i).trim()] = part.slice(i + 1).trim();
  });
  return out;
}

function isDocumentRequest(request, url) {
  if (request.method !== 'GET') return false;
  const accept = request.headers.get('Accept') || '';
  if (!accept.includes('text/html')) return false;
  const ext = url.pathname.split('/').pop().includes('.') ? url.pathname.split('.').pop() : '';
  return !ext || ext === 'html';
}

function loginResponse(context, error, visitorId, sessionId) {
  const country = context.request.headers.get('cf-ipcountry') || '';
  const lang = country === 'AR' || country === '' ? 'es' : 'en';
  const headers = new Headers({
    'Content-Type': 'text/html; charset=utf-8',
    'Cache-Control': 'no-store',
  });
  headers.append('Set-Cookie', `${VISITOR_COOKIE}=${visitorId}; Path=/; Secure; HttpOnly; SameSite=Lax; Max-Age=${MAX_AGE}`);
  headers.append('Set-Cookie', `${SESSION_COOKIE}=${sessionId}; Path=/; Secure; HttpOnly; SameSite=Lax; Max-Age=${60 * 60 * 2}`);
  return new Response(loginHTML(error, lang), { status: 401, headers });
}

function loginHTML(error, lang) {
  const t = lang === 'en'
    ? { eyebrow: 'Private access', placeholder: 'Access key', button: 'Enter', err: "That key doesn't open this door.", foot: 'Restricted access', intro: "Don't have the key? Request it in a short meeting or via WhatsApp." }
    : { eyebrow: 'Acceso privado', placeholder: 'Clave de acceso', button: 'Entrar', err: 'Esa clave no abre esta puerta.', foot: 'Acceso restringido', intro: '¿Todavía no tenés la clave? Pedila en una breve reunión o por WhatsApp.' };
  return `<!doctype html>
<html lang="${lang === 'en' ? 'en' : 'es-AR'}">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="robots" content="noindex, nofollow" />
<meta name="theme-color" content="#071A38" />
<title>Plan Manuel Belgrano — ${t.eyebrow}</title>
<link rel="icon" type="image/svg+xml" href="/icon.svg" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,400&display=swap" rel="stylesheet" />
<style>
  :root{ --navy:#071A38; --cream:#F4F1E8; --wheat:#E7E0CE; --green:#6E7F4E; --line:rgba(244,241,232,.14); }
  *{box-sizing:border-box;margin:0}
  body{min-height:100svh;display:grid;place-items:center;padding:24px;
    font-family:'Archivo',system-ui,sans-serif;color:var(--cream);
    background:radial-gradient(120% 120% at 50% 0%,#0E2A52 0%,var(--navy) 58%,#04122a 100%);}
  .card{width:100%;max-width:430px;text-align:center}
  .eyebrow{font-size:.72rem;letter-spacing:.24em;text-transform:uppercase;color:rgba(244,241,232,.55);margin-bottom:18px}
  .brand{font-family:'Fraunces',serif;font-weight:600;font-size:clamp(2rem,7vw,2.7rem);line-height:1.05;letter-spacing:-.01em}
  .brand i{font-style:italic;font-weight:400;color:var(--wheat)}
  form{margin-top:34px;display:flex;flex-direction:column;gap:12px}
  input{width:100%;padding:15px 18px;border-radius:14px;border:1px solid var(--line);
    background:rgba(244,241,232,.05);color:var(--cream);font-size:1rem;outline:none;text-align:center;
    font-family:inherit;transition:border-color .2s,background .2s}
  input::placeholder{color:rgba(244,241,232,.4)}
  input:focus{border-color:var(--wheat);background:rgba(244,241,232,.08)}
  button{width:100%;padding:15px 18px;border-radius:14px;border:0;cursor:pointer;
    background:var(--wheat);color:var(--navy);font-weight:600;font-size:1rem;font-family:inherit;transition:transform .15s,filter .2s}
  button:hover{filter:brightness(1.04);transform:translateY(-1px)}
  .err{margin-top:2px;color:#f0a98a;font-size:.9rem;min-height:1.1em}
  .intro{margin-top:26px;font-size:.82rem;line-height:1.5;color:rgba(244,241,232,.5)}
  .foot{margin-top:22px;font-size:.72rem;letter-spacing:.06em;color:rgba(244,241,232,.35)}
</style>
</head>
<body>
  <main class="card">
    <p class="eyebrow">${t.eyebrow}</p>
    <div class="brand">Plan <i>Manuel Belgrano</i></div>
    <form method="POST" autocomplete="off">
      <input type="password" name="password" placeholder="${t.placeholder}" autofocus aria-label="${t.placeholder}" />
      <button type="submit">${t.button}</button>
      <div class="err">${error ? t.err : ''}</div>
    </form>
    <p class="intro">${t.intro}</p>
    <p class="foot">Flora Cáñamo Neuquino SRL · ${t.foot}</p>
  </main>
</body>
</html>`;
}
