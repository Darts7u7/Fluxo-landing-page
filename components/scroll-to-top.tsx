"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function ScrollToTop() {
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  // Efecto para manejar el montaje del componente (solo cliente)
  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    // Scroll to top when the route changes
    window.scrollTo({ top: 0, behavior: "auto" })
  }, [pathname, mounted])

  return null // This component doesn't render anything
}
