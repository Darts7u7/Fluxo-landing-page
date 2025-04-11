import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Este middleware se ejecutará en todas las requests
export function middleware(request: NextRequest) {
  // Obtenemos la respuesta original
  const response = NextResponse.next()

  // Agregamos cabeceras para optimizar el rendimiento
  response.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=31536000')
  
  // Añadir headers de seguridad
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('X-Frame-Options', 'DENY')
  
  // Habilitar compresión Brotli
  response.headers.set('Accept-Encoding', 'br, gzip')
  
  return response
}

// Configurar rutas donde se ejecutará el middleware
export const config = {
  matcher: [
    // Aplicar a páginas públicas, excluyendo la API y assets
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 