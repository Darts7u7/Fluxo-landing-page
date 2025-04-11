'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

function NotFoundContent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-medium text-gray-700 mb-6">Página no encontrada</h2>
      <p className="text-gray-600 max-w-md mb-8">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      
      <Link href="/" passHref>
        <Button>
          Volver al inicio
        </Button>
      </Link>
    </div>
  )
}

export default function NotFoundPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <NotFoundContent />
    </Suspense>
  )
} 