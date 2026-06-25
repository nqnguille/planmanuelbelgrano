'use client'

import dynamic from 'next/dynamic'

const HeroScrollDynamic = dynamic(
  () => import('./HeroScroll').then((m) => m.HeroScroll),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          height: '100vh',
          background: '#071A38',
        }}
      />
    ),
  }
)

export function HeroScrollClient() {
  return <HeroScrollDynamic />
}
