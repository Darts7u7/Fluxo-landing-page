import { NextResponse } from 'next/server'
import { sanityFetch } from '@/lib/sanity'
import { allPostsQuery } from '@/lib/queries'
import type { BlogPost } from '@/lib/sanity'
import { fallbackBlogPosts } from '@/lib/fallback-data'

// Configurar para que esta ruta sea dinámica
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const search = searchParams.get('search')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '6')

    // Usamos el query predefinido para obtener todos los posts con cache desactivado
    let posts: BlogPost[] = [];
    
    try {
      posts = await sanityFetch<BlogPost[]>({
        query: allPostsQuery,
        tags: ['post'],
        cache: 'no-store', // Forzamos a no usar caché
      });
      
      // Si no hay datos, usar fallback
      if (!Array.isArray(posts) || posts.length === 0) {
        console.warn('No se recibieron datos de Sanity para blog, usando datos de respaldo');
        posts = fallbackBlogPosts;
      }
    } catch (error) {
      console.error('Error al obtener datos de Sanity para blog:', error);
      posts = fallbackBlogPosts;
    }

    // Normalizamos los posts para asegurar que todos tengan la propiedad 'categories' como array
    const normalizedPosts = posts.map(post => ({
      ...post,
      // Garantizar que categories siempre sea un array, incluso si es null o undefined
      categories: Array.isArray(post.categories) ? post.categories : []
    }))

    // Filtramos los posts según los parámetros recibidos
    let filteredPosts = normalizedPosts

    if (category && category !== 'All Category') {
      filteredPosts = filteredPosts.filter(post => 
        post.categories.some(cat => 
          typeof cat === 'string' 
            ? cat.toLowerCase() === category.toLowerCase()
            : cat.title.toLowerCase() === category.toLowerCase()
        )
      )
    }

    if (search) {
      const searchLower = search.toLowerCase()
      filteredPosts = filteredPosts.filter(post => 
        (post.title || '').toLowerCase().includes(searchLower) || 
        (post.excerpt || '').toLowerCase().includes(searchLower)
      )
    }

    // Calculamos el total de páginas para la paginación
    const total = filteredPosts.length
    const totalPages = Math.ceil(total / limit)
    
    // Aplicamos la paginación
    const start = (page - 1) * limit
    const end = start + limit
    const paginatedPosts = filteredPosts.slice(start, end)

    // Configurar cabeceras para evitar caché
    const response = NextResponse.json({
      posts: paginatedPosts,
      pagination: {
        total,
        page,
        limit,
        totalPages
      }
    });
    
    // Configurar cabeceras Cache-Control para evitar almacenamiento en caché
    response.headers.set('Cache-Control', 'no-store, max-age=0');
    
    return response;
  } catch (error) {
    console.error('Error al obtener posts del blog:', error)
    return NextResponse.json(
      { error: 'Error al obtener los posts del blog' },
      { status: 500 }
    )
  }
} 