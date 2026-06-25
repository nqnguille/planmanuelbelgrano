import type { Metadata } from 'next'
import { Fraunces, Archivo } from 'next/font/google'
import './globals.css'
import { LangProvider } from '@/lib/i18n'
import { LangToggle } from '@/components/ui/LangToggle'

// Display: Fraunces (serif italic con carácter). UI: Archivo (Omnibus-Type, Buenos Aires).
// Mantienen los nombres de variable previos para no tocar cada componente.
const garamond = Fraunces({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-garamond',
  display: 'swap',
})

const jakarta = Archivo({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-hanken',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Plan Manuel Belgrano — Cáñamo industrial en la Patagonia',
  description: 'La industria que construye la próxima Patagonia: cáñamo industrial, hempcrete y créditos de carbono. De la semilla a la llave. Flora Cáñamo Neuquino SRL, Neuquén.',
  openGraph: {
    title: 'Plan Manuel Belgrano — Cáñamo industrial en la Patagonia',
    description: 'La industria que construye la próxima Patagonia: cáñamo industrial, hempcrete y créditos de carbono. De la semilla a la llave.',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plan Manuel Belgrano',
    description: 'Cáñamo industrial en la Patagonia. De la semilla a la llave.',
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${garamond.variable} ${jakarta.variable}`}>
      <head>
        <meta name="theme-color" content="#071A38" />
        {/* Preload hero frames — f01 y f09 para LCP; el resto carga en background */}
        <link rel="preload" href="/hero/frames/f01.jpg" as="image" />
        <link rel="preload" href="/hero/frames/f09.jpg" as="image" />
        {/* Fallback: si JS no carga, mostrar contenido que Framer Motion ocultó */}
        <noscript>{`<style>div[style*="opacity: 0"],div[style*="opacity:0"]{opacity:1!important;transform:none!important}</style>`}</noscript>
      </head>
      <body>
        <LangProvider>
          <LangToggle />
          {children}
        </LangProvider>
      </body>
    </html>
  )
}
