"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { scrollToTop } from "@/utils/scroll-utils"

export function BackToTop() {
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Efecto para manejar el montaje del componente (solo cliente)
  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [mounted])

  // No renderizamos nada si no estamos montados (previene hidratación)
  if (!mounted) return null

  return (
    <button
      onClick={() => scrollToTop()}
      className={`fixed bottom-10 left-6 z-40 p-3 rounded-full bg-[#1C64F2] text-white shadow-lg transition-opacity duration-300 hover:bg-[#1C64F2]/90 focus:outline-none ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}
