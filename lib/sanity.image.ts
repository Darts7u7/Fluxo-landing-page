import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'undefined'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

const imageBuilder = createImageUrlBuilder({
  projectId,
  dataset,
})

interface ImageOptions {
  width?: number;
  height?: number;
  quality?: number;
}

// Función para validar si el objeto es una imagen válida de Sanity
function isValidSanityImage(source: any): boolean {
  // Verifica si hay una referencia de asset directa
  if (source && source.asset && (source.asset._ref || source.asset._id)) {
    return true;
  }
  
  // Verifica si es una referencia directa
  if (source && (source._ref || source._id)) {
    return true;
  }
  
  return false;
}

export const urlForImage = (source: Image | any | null | undefined, options: ImageOptions = {}) => {
  // Si no hay fuente, devolver imagen de placeholder
  if (!source) {
    console.warn('urlForImage: Fuente de imagen inválida o vacía')
    return {
      url: () => '/placeholder.svg'
    }
  }
  
  try {
    // Si es una URL directa, devolverla sin procesar
    if (typeof source === 'string') {
      if (source.startsWith('http') || source.startsWith('/')) {
        return {
          url: () => source
        };
      }
    }
    
    // Si el objeto tiene una URL directa, usarla
    if (source && source.url && typeof source.url === 'string') {
      return {
        url: () => source.url
      };
    }
    
    // Si tiene imageUrl, usarla directamente
    if (source && source.imageUrl && typeof source.imageUrl === 'string') {
      return {
        url: () => source.imageUrl
      };
    }
    
    // Si la imagen no tiene una estructura válida, registrar un error y devolver placeholder
    if (!isValidSanityImage(source)) {
      console.warn('urlForImage: Estructura de imagen no válida', source);
      return {
        url: () => '/placeholder.svg'
      };
    }
    
    // Crear el constructor de URL de imagen con configuración mínima
    // Evitamos usar parámetros complejos que pueden causar errores
    let builder = imageBuilder.image(source);
    
    // Solo agregamos ancho y alto si se proporcionan, sin otros parámetros
    if (options.width && options.height) {
      builder = builder.width(options.width).height(options.height);
    } else if (options.width) {
      builder = builder.width(options.width);
    } else if (options.height) {
      builder = builder.height(options.height);
    }
    
    return builder;
  } catch (error) {
    console.error('Error al generar URL de imagen:', error)
    return {
      url: () => '/placeholder.svg'
    }
  }
}
