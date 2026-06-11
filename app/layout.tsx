import type { Metadata } from 'next'
import { EB_Garamond, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const garamond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-garamond',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-hanken',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Plan Manuel Belgrano — Vaca Muerta ya la hiciste. Ahora viene Vaca Verde.',
  description: 'Cáñamo industrial en Patagonia. First mover advantage. €9,2M en créditos de carbono certificados al 2030. Una industria federal de escala global que todavía no tiene dueño.',
  openGraph: {
    title: 'Plan Manuel Belgrano — Vaca Muerta ya la hiciste. Ahora viene Vaca Verde.',
    description: 'Cáñamo industrial en Patagonia. First mover advantage. €9,2M en créditos de carbono al 2030.',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plan Manuel Belgrano',
    description: 'Vaca Muerta ya la hiciste. Ahora viene Vaca Verde. Cáñamo industrial en Patagonia.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${garamond.variable} ${jakarta.variable}`}>
      <head>
        {/* Preload hero frames — f01 y f09 para LCP; el resto carga en background */}
        <link rel="preload" href="/hero/frames/f01.jpg" as="image" />
        <link rel="preload" href="/hero/frames/f09.jpg" as="image" />
        {/* Fallback: si JS no carga, mostrar contenido que Framer Motion ocultó */}
        <noscript>{`<style>div[style*="opacity: 0"],div[style*="opacity:0"]{opacity:1!important;transform:none!important}</style>`}</noscript>
      </head>
      <body>{children}</body>
    </html>
  )
}
