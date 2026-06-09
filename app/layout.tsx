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
    <html lang="es" className={`${garamond.variable} ${hanken.variable}`}>
      <body>{children}</body>
    </html>
  )
}
