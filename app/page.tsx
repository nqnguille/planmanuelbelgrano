import { Header } from '@/components/layout/Header'
import { HeroScrollClient } from '@/components/sections/HeroScrollClient'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroScrollClient />
      </main>
      <footer
        style={{
          background: '#1C1A14',
          borderTop: '1px solid rgba(201,168,76,0.14)',
          padding: '2rem clamp(1.5rem, 5vw, 4rem)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-hanken)',
            fontSize: '0.6rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(247,246,235,0.35)',
          }}
        >
          © 2026 Flora Cáñamo Neuquino SRL · Neuquén, Patagonia Argentina
        </span>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <a
            href="mailto:contacto@planmanuelbelgrano.com.ar"
            style={{
              fontFamily: 'var(--font-hanken)',
              fontSize: '0.62rem',
              letterSpacing: '0.08em',
              color: 'rgba(247,246,235,0.45)',
              textDecoration: 'none',
            }}
          >
            contacto@planmanuelbelgrano.com.ar
          </a>
          <a
            href="/masterplan/"
            style={{
              fontFamily: 'var(--font-hanken)',
              fontSize: '0.6rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#C9A84C',
              textDecoration: 'none',
              border: '1px solid rgba(201,168,76,0.4)',
              padding: '0.45rem 1rem',
            }}
          >
            Ver masterplan
          </a>
        </div>
      </footer>
    </>
  )
}
