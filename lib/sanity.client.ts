import { createClient } from 'next-sanity'

// Validar que el projectId tenga el formato correcto (solo a-z, 0-9 y guiones)
const validateProjectId = (id: string): string => {
  if (!id || id === 'undefined' || !/^[a-z0-9-]+$/.test(id)) {
    console.warn('ProjectId inválido o no definido. Asegúrate de configurar NEXT_PUBLIC_SANITY_PROJECT_ID en .env.local');
    // Retornar un valor válido para prevenir errores (solo en desarrollo)
    return process.env.NODE_ENV === 'production' ? '' : 'development-placeholder';
  }
  return id;
}

const projectId = validateProjectId(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '');
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03'

// Configuración optimizada del cliente de Sanity
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // Siempre usar CDN en producción para mejor rendimiento
  useCdn: process.env.NODE_ENV === 'production',
  // Añadir perspectiva para consultas más eficientes
  perspective: 'published',
})

// Helper function para obtener datos tipados desde Sanity con caching optimizado
export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags = [],
  cache = 'force-cache', // Por defecto usa caching fuerte
  next,
}: {
  query: string
  params?: Record<string, any>
  tags?: string[]
  cache?: RequestCache
  next?: NextFetchRequestConfig
}): Promise<QueryResponse> {
  // Si no hay projectId válido, devolver un objeto vacío compatible con la respuesta esperada
  if (!projectId) {
    console.warn('Sanity fetch: projectId no válido, devolviendo datos vacíos');
    return {} as QueryResponse;
  }
  
  try {
    return await client.fetch<QueryResponse>(query, params, {
      cache,
      next: {
        // Aplicar revalidation y tags si se proporcionan
        ...(next || {}),
        tags: tags.length > 0 ? tags : undefined,
      },
    });
  } catch (error) {
    console.error('Error al obtener datos de Sanity:', error);
    // Devolver un objeto vacío compatible con la respuesta esperada
    return {} as QueryResponse;
  }
} 