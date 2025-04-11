'use client'

import { useEffect } from 'react'

export function TidioChat() {
  useEffect(() => {
    // Cargar el script de Tidio
    const script = document.createElement('script')
    script.src = '//code.tidio.co/eaqcbxh6hmixt4vuvvdv4kslam6cqjkw.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Limpiar el script cuando el componente se desmonte
      document.body.removeChild(script)
    }
  }, [])

  return null
} 