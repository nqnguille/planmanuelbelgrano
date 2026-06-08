import type { Metadata } from 'next'
import { EB_Garamond, Hanken_Grotesk } from 'next/font/google'
import './globals.css'

const garamond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-garamond',
  display: 'swap',
})

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-hanken',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Plan Manuel Belgrano — De Vaca Muerta a Vaca Verde',
  description: 'La próxima plataforma industrial argentina no se extrae. Se cultiva. Un masterplan de cáñamo industrial para capturar carbono, construir viviendas y generar empleo federal.',
  openGraph: {
    title: 'Plan Manuel Belgrano — De Vaca Muerta a Vaca Verde',
    description: 'La próxima plataforma industrial argentina no se extrae. Se cultiva.',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plan Manuel Belgrano',
    description: 'La próxima plataforma industrial argentina no se extrae. Se cultiva.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${garamond.variable} ${hanken.variable}`}>
      <body>{children}</body>
    </html>
  )
}
