import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
import { CACHE_TAGS } from '@/lib/cache-config'

// Endpoint para invalidar caché utilizando etiquetas
export async function POST(request: NextRequest) {
  try {
    // Validar secreto para prevenir uso no autorizado
    const secret = request.headers.get('x-revalidate-secret')
    
    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json(
        { error: 'Unauthorized' }, 
        { status: 401 }
      )
    }
    
    // Obtener tag de los parámetros de la petición
    const { tag } = await request.json()
    
    if (!tag || typeof tag !== 'string') {
      return NextResponse.json(
        { error: 'Tag parameter is required and must be a string' },
        { status: 400 }
      )
    }
    
    // Verificar si el tag es válido
    const validTags = Object.values(CACHE_TAGS)
    if (!validTags.includes(tag)) {
      return NextResponse.json(
        { error: `Invalid tag. Valid options are: ${validTags.join(', ')}` },
        { status: 400 }
      )
    }
    
    // Invalidar caché para la etiqueta especificada
    revalidateTag(tag)
    
    return NextResponse.json({ 
      success: true, 
      revalidated: true, 
      tag, 
      timestamp: Date.now()
    })
  } catch (error) {
    console.error('Error al revalidar caché:', error)
    return NextResponse.json(
      { error: 'Error al revalidar caché' },
      { status: 500 }
    )
  }
}

// Endpoint para invalidar caché utilizando URL
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const tag = searchParams.get('tag')
    
    if (!tag) {
      return NextResponse.json(
        { error: 'Tag parameter is required' },
        { status: 400 }
      )
    }
    
    // Verificar si el tag es válido
    const validTags = Object.values(CACHE_TAGS)
    if (!validTags.includes(tag)) {
      return NextResponse.json(
        { error: `Invalid tag. Valid options are: ${validTags.join(', ')}` },
        { status: 400 }
      )
    }
    
    // Invalidar caché para la etiqueta especificada
    revalidateTag(tag)
    
    return NextResponse.json({ 
      success: true, 
      revalidated: true, 
      tag
    })
  } catch (error) {
    console.error('Error al revalidar caché:', error)
    return NextResponse.json(
      { error: 'Error al revalidar caché' },
      { status: 500 }
    )
  }
} 