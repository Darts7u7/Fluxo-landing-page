'use client'

import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { RouterEventsInner, useRouterEvents } from '@/lib/router-events'
import { ThemeProvider } from './theme-provider'
import { BackToTop } from './back-to-top'
import { AnimatePresence, motion } from 'framer-motion'

interface ClientLayoutProps {
  children: React.ReactNode
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const { isChanging } = useRouterEvents()
  const pathname = usePathname()

  // Optimiza la carga al cachear las páginas
  useEffect(() => {
    // Prefetch páginas principales - Actualizado con la nueva ruta
    if (typeof window !== 'undefined') {
      const pagesToPrefetch = [
        '/', 
        '/features/punto-de-venta', 
        '/features/gestion-inventario', 
        '/features/facturacion-electronica', 
        '/pricing', 
        '/sobre-nosotros'
      ];
      
      // Limpiamos cualquier prefetch anterior para evitar problemas
      const existingLinks = document.querySelectorAll('link[rel="prefetch"][data-prefetch="page"]');
      existingLinks.forEach(link => link.remove());
      
      // Agregamos los nuevos prefetch con un identificador
      pagesToPrefetch.forEach(path => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = path;
        link.as = 'document';
        link.setAttribute('data-prefetch', 'page');
        document.head.appendChild(link);
      });
    }
    
    // Limpieza al desmontar el componente
    return () => {
      if (typeof window !== 'undefined') {
        const links = document.querySelectorAll('link[rel="prefetch"][data-prefetch="page"]');
        links.forEach(link => link.remove());
      }
    };
  }, []);

  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      {/* Monitor de eventos del router */}
      <RouterEventsInner />
      
      {/* Loader para transiciones de página - aparece solo cuando está cambiando */}
      {isChanging && (
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed top-0 left-0 w-full h-1 bg-blue-600 z-[9999]"
          suppressHydrationWarning
        >
          <div className="h-full w-full bg-blue-400 animate-progress origin-left" />
        </motion.div>
      )}
      
      {/* Contenido de la página con transiciones suaves */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex min-h-screen flex-col"
          suppressHydrationWarning
        >
          {children}
        </motion.div>
      </AnimatePresence>
      
      {/* Botón volver arriba */}
      <BackToTop />
    </ThemeProvider>
  )
} 