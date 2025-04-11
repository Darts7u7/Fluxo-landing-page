import { NextResponse } from 'next/server'
import { sanityFetch } from '@/lib/sanity'
import type { Feature } from '@/lib/sanity'

// Query para obtener todas las características ordenadas por el campo order
const featuresQuery = `*[_type == "feature"] | order(order asc) {
  _id,
  title,
  description,
  icon,
  order
}`

export async function GET() {
  try {
    const features = await sanityFetch<Feature[]>({
      query: featuresQuery,
      tags: ['feature'],
    })

    return NextResponse.json(features)
  } catch (error) {
    console.error('Error al obtener características:', error)
    return NextResponse.json(
      { error: 'Error al obtener las características' },
      { status: 500 }
    )
  }
} 