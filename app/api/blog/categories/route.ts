import { NextResponse } from 'next/server'
import { sanityFetch } from '@/lib/sanity'
import type { Category } from '@/lib/sanity'

// Query para obtener todas las categorías
const categoriesQuery = `*[_type == "category"] | order(title asc) {
  _id,
  title,
  "slug": slug.current,
  description
}`

export async function GET() {
  try {
    const categories = await sanityFetch<Category[]>({
      query: categoriesQuery,
      tags: ['category'],
    })

    // Añadimos la categoría "All Category" al principio
    const allCategories = [
      { _id: 'all', title: 'All Category', slug: 'all', description: 'Todos los artículos' },
      ...categories
    ]

    return NextResponse.json(allCategories)
  } catch (error) {
    console.error('Error al obtener categorías del blog:', error)
    return NextResponse.json(
      { error: 'Error al obtener categorías del blog' },
      { status: 500 }
    )
  }
} 