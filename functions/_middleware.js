// Cloudflare Pages Function — detección de país por geo.
// Cloudflare resuelve el país del visitante (header cf-ipcountry) en el edge.
// Seteamos una cookie 'pmb_country' que el cliente lee para elegir idioma:
// AR → español, cualquier otro país → inglés. El usuario puede sobreescribir
// con el toggle (guarda 'pmb_lang' en localStorage, que tiene prioridad).
//
// NOTA: el acceso NO se gatea acá. El landing es público; el gate del masterplan
// es client-side (components/ui/InlineGate.tsx) y valida contra la consola central
// (gates-analytics /verify). Así el landing "giro" se ve primero y el gate aparece
// recién al entrar al masterplan.
export async function onRequest(context) {
  const response = await context.next()

  // Solo nos interesa anotar el país en respuestas HTML (las páginas).
  const ct = response.headers.get('content-type') || ''
  if (!ct.includes('text/html')) return response

  const country = context.request.headers.get('cf-ipcountry') || ''
  const res = new Response(response.body, response)
  res.headers.append(
    'Set-Cookie',
    `pmb_country=${country}; Path=/; Max-Age=31536000; SameSite=Lax`,
  )
  return res
}
