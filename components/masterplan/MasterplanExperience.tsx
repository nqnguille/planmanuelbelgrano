'use client'

import { useState, useEffect } from 'react'
import { HeroScrollClient } from '@/components/sections/HeroScrollClient'
import { MasterplanStageGate } from '@/components/masterplan/MasterplanStageGate'
import { InlineGate } from '@/components/ui/InlineGate'

/* Flujo continuo estilo CONFIDENT:
   hero cinematográfico (público) → gate inline → masterplan (al desbloquear).
   El estado de acceso vive en sessionStorage ('pmb_access'). */
export function MasterplanExperience() {
  // Gate activo: el acceso requiere la clave (entregada a YPF en el documento).
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
                document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' })
              }, 250)
            }}
          />
        ) : (
          <MasterplanStageGate />
        )}
      </div>
    </div>
  )
}
