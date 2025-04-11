'use client'

import { create } from 'zustand'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

// Store optimizado que gestiona el estado de cambio entre páginas
type RouterStore = {
  isChanging: boolean
  setIsChanging: (isChanging: boolean) => void
  resetNavigation: () => void
}

// Store implementado con Zustand para gestión eficiente del estado
export const useRouterStore = create<RouterStore>((set) => ({
  isChanging: false,
  setIsChanging: (isChanging) => set({ isChanging }),
  resetNavigation: () => set({ isChanging: false }),
}))

/**
 * Componente que monitorea cambios de ruta y actualiza el estado
 */
export function RouterEventsInner() {
  const pathname = usePathname()
  const resetNavigation = useRouterStore((state) => state.resetNavigation)
  
  // Cuando cambia el pathname, resetear el estado de navegación
  useEffect(() => {
    // Pequeño retraso para permitir que las animaciones completen
    setTimeout(() => {
      resetNavigation()
    }, 100)
  }, [pathname, resetNavigation])
  
  return null
}

/**
 * Hook optimizado para acceder al estado de navegación
 */
export function useRouterEvents() {
  const isChanging = useRouterStore((state) => state.isChanging)
  return { isChanging }
} 