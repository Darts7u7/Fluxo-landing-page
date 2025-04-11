"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { PortableText, urlForImage } from "@/lib/sanity"

interface Author {
  name: string;
  image?: string;
  bio?: any;
}

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  mainImage?: any;
  imageUrl?: string;
  body: any;
  publishedAt: string;
  author?: Author;
  categories: string[];
  readTime?: string;
}

interface RelatedPost {
  _id: string;
  title: string;
  slug: string;
  mainImage?: any;
  excerpt: string;
  publishedAt: string;
}

// Función helper segura para manejar categorías
const getSafeCategory = (categories: string[] | null | undefined): string | null => {
  if (!categories || !Array.isArray(categories) || categories.length === 0) {
    return null;
  }
  return categories[0];
};

export default function BlogPostPage() {
  const params = useParams()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<RelatedPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const slug = typeof params.slug === 'string' ? params.slug : params.slug?.[0] || ''

  useEffect(() => {
    async function fetchPost() {
      if (!slug) return

      setLoading(true)
      try {
        const response = await fetch(`/api/blog/${slug}`)
        
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Artículo no encontrado')
          }
          throw new Error('Error al cargar el artículo')
        }
        
        const data = await response.json()
        
        // Normalizar los datos del post
        if (data.post) {
          // Asegurarnos de que categories sea siempre un array
          const normalizedPost = {
            ...data.post,
            categories: Array.isArray(data.post.categories) ? data.post.categories : []
          };
          setPost(normalizedPost);
        }
        
        // Normalizar los posts relacionados
        const normalizedRelated = data.related ? data.related.map((relatedPost: any) => ({
          ...relatedPost,
          categories: Array.isArray(relatedPost.categories) ? relatedPost.categories : []
        })) : [];
        
        setRelatedPosts(normalizedRelated)
      } catch (error) {
        console.error('Error al cargar el artículo:', error)
        setError((error as Error).message || 'Error al cargar el artículo')
      } finally {
        setLoading(false)
      }
    }
    
    fetchPost()
  }, [slug])

  // Función para obtener la imagen con fallback
  const getImage = (image: any) => {
    if (!image) {
      return "/placeholder.svg";
    }
    
    try {
      // Si es una URL directa
      if (typeof image === 'string') {
        return image;
      }
      
      // Si tiene una URL directa en la propiedad url
      if (image.url && typeof image.url === 'string') {
        return image.url;
      }
      
      // Si tiene una URL directa en la propiedad imageUrl
      if (image.imageUrl && typeof image.imageUrl === 'string') {
        return image.imageUrl;
      }
      
      // Usar el constructor de URL con configuración simple
      const urlBuilder = urlForImage(image);
      
      if (urlBuilder && typeof urlBuilder.url === 'function') {
        return urlBuilder.url();
      }
      
      return "/placeholder.svg";
    } catch (error) {
      console.error('Error al generar URL de imagen:', error);
      return "/placeholder.svg";
    }
  }

  // Loading skeleton
  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        {/* Hero Skeleton */}
        <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden bg-gray-200 animate-pulse" />
        
        {/* Content Skeleton */}
        <div className="mx-auto max-w-3xl px-4 py-12">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-8 animate-pulse" />
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
          </div>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center max-w-md px-4">
          <h1 className="text-2xl font-bold mb-4">{error}</h1>
          <p className="text-gray-600 mb-8">Lo sentimos, no pudimos cargar el artículo que estás buscando.</p>
          <Link href="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al blog
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  // No post data
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center max-w-md px-4">
          <h1 className="text-2xl font-bold mb-4">Artículo no encontrado</h1>
          <p className="text-gray-600 mb-8">Lo sentimos, no pudimos encontrar el artículo que estás buscando.</p>
          <Link href="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al blog
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image 
          src={getImage(post.mainImage)}
          alt={post.title} 
          fill 
          className="object-cover" 
          priority 
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="mx-auto max-w-3xl">
            {getSafeCategory(post.categories) && (
              <Badge className="mb-4 bg-[#1C64F2] hover:bg-[#1C64F2]/90">
                {getSafeCategory(post.categories)}
              </Badge>
            )}
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl">{post.title}</h1>
            <div className="flex items-center gap-6">
              {post.author && (
                <div className="flex items-center gap-3">
                  {post.author.image && (
                    <Image
                      src={post.author.image}
                      alt={post.author.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                      unoptimized={true}
                    />
                  )}
                  <div>
                    <div className="font-medium">{post.author.name}</div>
                    {post.author.bio && typeof post.author.bio === 'string' && (
                      <div className="text-sm text-gray-300">{post.author.bio}</div>
                    )}
                  </div>
                </div>
              )}
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="h-4 w-4" />
                {post.readTime || "5 min read"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-600 hover:text-[#1C64F2] text-sm"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al blog
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="prose prose-lg prose-blue max-w-none">
          {post.body && <PortableText content={post.body} />}
        </div>

        {/* Author Bio */}
        {post.author && (
          <div className="mt-16 flex items-center gap-6 rounded-2xl bg-gray-50 p-8">
            {post.author.image && (
              <Image
                src={post.author.image}
                alt={post.author.name}
                width={80}
                height={80}
                className="rounded-full"
                unoptimized={true}
              />
            )}
            <div>
              <div className="font-bold text-xl mb-2">{post.author.name}</div>
              {post.author.bio && typeof post.author.bio === 'string' ? (
                <div className="text-gray-600">{post.author.bio}</div>
              ) : post.author.bio ? (
                <div className="text-gray-600 prose prose-sm">
                  <PortableText content={post.author.bio} />
                </div>
              ) : null}
            </div>
          </div>
        )}
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Artículos relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {relatedPosts.map((related) => (
                <Link key={related._id} href={`/blog/${related.slug}`} className="block group">
                  <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-shadow h-full">
                    <div className="aspect-[16/9] relative">
                      <Image
                        src={getImage(related.mainImage)}
                        alt={related.title}
                        fill
                        className="object-cover"
                        unoptimized={true}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold mb-2 group-hover:text-[#1C64F2] transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-3">{related.excerpt}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </article>
  )
} 