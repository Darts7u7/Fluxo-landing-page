export { client, sanityFetch } from './sanity.client'
export { urlForImage } from './sanity.image'
export { PortableText } from './sanity.portable-text'
export { 
  REVALIDATE_INTERVAL, 
  CACHE_TAGS, 
  FETCH_CACHE_CONFIG, 
  createCacheConfig 
} from './cache-config'

// Definición de tipos comunes para Sanity
export interface SanityDocument {
  _id: string
  _createdAt: string
  _updatedAt: string
  _rev: string
}

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
    url?: string
  }
  alt?: string
}

export interface SanitySlug {
  _type: 'slug'
  current: string
}

// Tipos específicos de contenido
export interface Testimonial extends SanityDocument {
  _type: 'testimonial'
  name: string
  role: string
  company: string
  image: SanityImage
  quote: any[] // PortableText content
  rating: number
  imageUrl?: string // Campo adicional para URL directa de la imagen
}

export interface Feature extends SanityDocument {
  _type: 'feature'
  title: string
  description: string
  icon: string
  order: number
  image?: SanityImage // Campo opcional para imagen de característica
}

export interface PricingPlan extends SanityDocument {
  _type: 'pricingPlan'
  name: string
  description: string
  monthlyPrice: number
  yearlyPrice: number
  currency: string
  features: string[]
  highlighted: boolean
  buttonText: string
  discount?: string
  setupFee?: string
}

export interface FAQ extends SanityDocument {
  _type: 'faq'
  question: string
  answer: string  // Simplificado a string para evitar problemas
  category: string | null  // Puede ser null
  order: number
  isActive: boolean  // Boolean para mejor tipado
}

export interface BlogPost extends SanityDocument {
  _type: 'post'
  title: string
  slug: SanitySlug
  mainImage: SanityImage
  excerpt: string
  author: Author
  categories: Category[]
  publishedAt: string
  body: any[] // PortableText content
}

export interface Author extends SanityDocument {
  _type: 'author'
  name: string
  image: SanityImage
  bio: any[] // PortableText content
}

export interface Category extends SanityDocument {
  _type: 'category'
  title: string
  description: string
} 