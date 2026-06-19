'use client'

import { useEffect } from 'react'

/* La experiencia completa (hero → gate → masterplan) vive en /masterplan.
   La raíz redirige ahí. El _redirects de Cloudflare hace el redirect en el
   edge; este cliente es el fallback para dev/SSR. */
export default function Home() {
  useEffect(() => {
    window.location.replace('/masterplan/')
  }, [])

  return (
    <main style={{ minHeight: '100vh', background: '#071A38' }} aria-hidden />
  )
}
