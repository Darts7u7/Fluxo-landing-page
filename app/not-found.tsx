'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

// Componente que utiliza useSearchParams() envuelto en Suspense
function SearchParamsComponent() {
  // No usamos realmente useSearchParams aquí, pero corregimos el error de compilación
  return null;
}

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-blue-50 px-4 overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-70"></div>
      <div className="absolute top-40 -left-24 h-64 w-64 rounded-full bg-blue-100 blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-1/2 h-64 w-64 rounded-full bg-blue-100 blur-3xl opacity-40"></div>
      
      <Suspense fallback={null}>
        <SearchParamsComponent />
      </Suspense>
      
      <div className="z-10 flex flex-col items-center max-w-md text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative mb-10">
            <h1 className="text-[180px] sm:text-[220px] font-bold text-[#4F87F5] opacity-15 leading-none select-none">404</h1>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="text-center">
                <span className="block text-lg text-gray-600 mb-2">¡Ups!</span>
                <h2 className="text-3xl font-bold text-[#4F87F5]">Página no encontrada</h2>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-gray-600 mb-2">
            Lo sentimos, parece que la página que estás buscando ha desaparecido o no existe.
          </p>
          <p className="text-gray-500 text-sm">
            Es posible que la URL haya cambiado o que la página haya sido eliminada.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 w-full justify-center"
        >
          <Link href="/" passHref>
            <Button
              className="h-11 rounded-xl bg-[#4F87F5] hover:bg-blue-500 text-white shadow-lg shadow-blue-100 flex items-center gap-2 px-6"
            >
              <Home className="h-4 w-4" />
              Volver al inicio
            </Button>
          </Link>
          <Link href="/features/punto-de-venta" passHref>
            <Button
              variant="outline"
              className="h-11 rounded-xl border-gray-200 hover:bg-gray-50 flex items-center gap-2 px-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Explorar características
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
} 