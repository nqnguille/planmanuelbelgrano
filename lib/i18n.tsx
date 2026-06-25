'use client'

/* ============================================================
   i18n — sistema bilingüe ES/EN para Plan Manuel Belgrano.
   - Default de build/SSR: 'es' (el HTML estático se genera en español).
   - En el cliente, resuelve el idioma ANTES del primer paint
     (useLayoutEffect) para evitar parpadeo:
       1) preferencia explícita guardada (localStorage 'pmb_lang')
       2) país por geo (cookie 'pmb_country' que setea la función de
          Cloudflare Pages desde el header cf-ipcountry): si NO es AR → 'en'
       3) idioma del navegador como fallback (si no arranca con 'es' → 'en')
       4) default 'es'
   ============================================================ */

import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
  type ReactNode,
} from 'react'

export type Lang = 'es' | 'en'

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: 'es',
  setLang: () => {},
})

// useLayoutEffect en cliente, useEffect en el prerender de build (evita warning SSR).
const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

function readCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'))
  return m ? decodeURIComponent(m[1]) : null
}

function resolveLang(): Lang {
  try {
    const saved = localStorage.getItem('pmb_lang')
    if (saved === 'es' || saved === 'en') return saved
  } catch {
    /* localStorage no disponible */
  }
  const country = readCookie('pmb_country')
  if (country) return country.toUpperCase() === 'AR' ? 'es' : 'en'
  // Fallback sin geo: idioma del navegador.
  if (typeof navigator !== 'undefined' && navigator.language) {
    return navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en'
  }
  return 'es'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('es') // matchea el HTML de build

  useIsoLayoutEffect(() => {
    const resolved = resolveLang()
    if (resolved !== 'es') setLangState(resolved)
    document.documentElement.lang = resolved
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem('pmb_lang', l)
    } catch {
      /* noop */
    }
    if (typeof document !== 'undefined') document.documentElement.lang = l
  }

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}
