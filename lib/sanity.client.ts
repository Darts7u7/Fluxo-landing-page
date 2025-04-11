import { createClient } from 'next-sanity'

// Definimos NextFetchRequestConfig localmente si no está disponible
interface NextFetchRequestConfig {
  revalidate?: number | false;
  tags?: string[];
}

// Validar que el projectId tenga el formato correcto (solo a-z, 0-9 y guiones)
const validateProjectId = (id: string): string => {
  if (!id || id === 'undefined' || !/^[a-z0-9-]+$/.test(id)) {
    console.warn('ProjectId inválido o no definido. Asegúrate de configurar NEXT_PUBLIC_SANITY_PROJECT_ID en .env.local');
    // Retornar un valor válido para prevenir errores (tanto en desarrollo como en producción)
    return '5qlup2jd'; // Usar el ID que ya estaba en el archivo .env
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
  // Si no hay projectId válido, devolver un array vacío o un objeto vacío según corresponda
  if (!projectId) {
    console.warn('Sanity fetch: projectId no válido, devolviendo datos vacíos');
    // Determinar si la consulta probablemente devuelve un array
    const isArrayQuery = query.trim().startsWith('*[');
    // Devolver un array vacío si parece ser una consulta de tipo array
    return (isArrayQuery ? [] : {}) as QueryResponse;
  }
  
  try {
    // Construcción manual de las opciones para evitar errores de tipo
    const fetchOptions: any = { cache };
    
    // Añadir opciones de next solo si se proporcionan
    if (next) {
      fetchOptions.next = {
        ...next,
        tags: tags && tags.length > 0 ? tags : undefined,
      };
    }
    
    const result = await client.fetch<QueryResponse>(query, params, fetchOptions);
    
    // Comprobar si el resultado es undefined o null y proporcionar un valor predeterminado seguro
    if (result === undefined || result === null) {
      const isArrayQuery = query.trim().startsWith('*[');
      return (isArrayQuery ? [] : {}) as QueryResponse;
    }
    
    return result;
  } catch (error) {
    console.error('Error al obtener datos de Sanity:', error);
    // Determinar si la consulta probablemente devuelve un array
    const isArrayQuery = query.trim().startsWith('*[');
    // Devolver un array vacío o un objeto vacío según corresponda
    return (isArrayQuery ? [] : {}) as QueryResponse;
  }
} 