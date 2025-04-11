// Configuración para caché global de la aplicación 
// Usado para optimizar el rendimiento en consultas a Sanity y otras APIs

/**
 * Configuración para la revalidación y caché de Sanity
 */

// Tiempo entre revalidaciones (en segundos)
export const REVALIDATE_INTERVAL = 60; // 1 minuto

// Etiquetas para identificar y revalidar categorías específicas de contenido
export const CACHE_TAGS = {
  // Contenido de homepage
  homepage: 'homepage',
  
  // Elementos de marketing
  testimonials: 'testimonials',
  features: 'features',
  pricing: 'pricing',
  
  // Blog y contenido relacionado
  posts: 'posts',
  post: 'post',
  categories: 'categories',
  authors: 'authors',

  // FAQs
  faqs: 'faqs',
}

/**
 * Configuración básica para todas las peticiones de Sanity
 * Incluye timeout y revalidación
 */
export const FETCH_CACHE_CONFIG = {
  next: {
    revalidate: REVALIDATE_INTERVAL,
  },
  cache: 'force-cache',
}

/**
 * Crea una configuración de caché personalizada con etiquetas específicas
 * @param tags Lista de etiquetas de caché para esta solicitud
 * @param options Opciones adicionales para sobreescribir la configuración predeterminada
 * @returns Configuración final para la solicitud
 */
export function createCacheConfig(
  tags: string[] = [],
  options: Partial<typeof FETCH_CACHE_CONFIG> = {}
) {
  // Si no hay tags, devolver la configuración estándar
  if (!tags.length) {
    return {
      ...FETCH_CACHE_CONFIG,
      ...options,
    }
  }
  
  // Combinar la configuración básica con las etiquetas proporcionadas y opciones personalizadas
  return {
    ...FETCH_CACHE_CONFIG,
    next: {
      ...FETCH_CACHE_CONFIG.next,
      tags,
      ...options?.next,
    },
    ...options,
  }
}

// Función para invalidar caché por tags
export function getInvalidateTagUrl(tag: string) {
  // URL para invalidar caché usando la API de revalidación de Next.js
  return `/api/revalidate?tag=${tag}`
} 