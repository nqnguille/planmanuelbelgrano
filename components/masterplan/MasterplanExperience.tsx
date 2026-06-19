'use client'

import { useState, useEffect } from 'react'
import { HeroScrollClient } from '@/components/sections/HeroScrollClient'
import { Masterplan } from '@/components/masterplan/Masterplan'
import { InlineGate } from '@/components/ui/InlineGate'

/* Flujo continuo estilo CONFIDENT:
   hero cinematográfico (público) → gate inline → masterplan (al desbloquear).
   El estado de acceso vive en sessionStorage ('pmb_access'). */
export function MasterplanExperience() {
  const [unlocked, setUnlocked] = useState(false)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    try {
      if (sessionStorage.getItem('pmb_access') === '1') setUnlocked(true)
    } catch {}
    setChecked(true)
  }, [])

  return (
    <div style={{ background: '#071A38' }}>
      <HeroScrollClient />

      <div id="gate">
        {!checked ? null : !unlocked ? (
          <InlineGate
            onUnlock={() => {
              setUnlocked(true)
              setTimeout(() => {
                document.getElementById('oportunidad')?.scrollIntoView({ behavior: 'smooth' })
              }, 250)
            }}
          />
        ) : (
          <Masterplan />
        )}
      </div>
    </div>
  )
}
