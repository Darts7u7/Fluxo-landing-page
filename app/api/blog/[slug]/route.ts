import { NextResponse } from 'next/server'
import { sanityFetch } from '@/lib/sanity'
import { postWithRelatedQuery } from '@/lib/queries'

export async function GET(
  request: Request,
  context: { params: { slug: string | string[] } }
) {
  try {
    // Usar await con el objeto params completo como recomienda Next.js 15
    const params = await context.params;
    const slug = params.slug;
    const postSlug = Array.isArray(slug) ? slug[0] : slug;

    // Asegurarnos de que resultado sea tipado correctamente
    type PostResult = {
      post: {
        _id: string;
        title: string;
        categories: string[];
        author?: { name: string; image?: string; bio?: string };
        [key: string]: any;
      };
      related: any[];
    };

    // Utilizamos el query que obtiene un post y sus relacionados
    const result = await sanityFetch<PostResult>({
      query: postWithRelatedQuery,
      params: { slug: postSlug },
      tags: [`post-${postSlug}`],
    });

    if (!result.post) {
      return NextResponse.json(
        { error: 'Post no encontrado' },
        { status: 404 }
      )
    }

    // Normalizar los datos para garantizar consistencia
    const normalizedPost = {
      ...result.post,
      // Garantizar que categories siempre sea un array
      categories: Array.isArray(result.post.categories) ? result.post.categories : [],
      // Garantizar que author tenga valores predeterminados si es necesario
      author: result.post.author || { name: 'Autor desconocido' }
    }

    // Normalizar posts relacionados
    const normalizedRelated = result.related.map(post => ({
      ...post,
      // Garantizar que categories siempre sea un array si existe
      categories: Array.isArray(post.categories) ? post.categories : [],
    }));

    return NextResponse.json({
      post: normalizedPost,
      related: normalizedRelated
    })
  } catch (error) {
    console.error('Error al obtener el post del blog:', error)
    return NextResponse.json(
      { error: 'Error al obtener el post del blog' },
      { status: 500 }
    )
  }
} 