"use client"

import { useState, useEffect, useMemo, useCallback, useTransition, Suspense } from "react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ChevronDown, Clock, Search, ChevronLeft, ChevronRight, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { 
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { urlForImage } from "@/lib/sanity"
import useSWR from "swr"

// Constantes de configuración
const ITEMS_PER_PAGE = 6;

// Tipos de datos para el blog
interface Author {
  name: string;
  image?: string;
}

interface BlogPost {
  _id: string;
  title: string;
  excerpt: string;
  slug: string;
  mainImage?: any;
  imageUrl?: string;
  categories: string[];
  author?: Author;
  publishedAt: string;
  readTime?: string;
  featured?: boolean;
}

interface Category {
  _id: string;
  title: string;
  slug: string;
  description?: string;
}

interface PaginationInfo {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Tipos para datos iniciales para SSR
interface InitialData {
  categories: Category[];
  posts: {
    posts: BlogPost[];
    pagination: PaginationInfo;
  };
}

// Datos iniciales por defecto para SSR
const DEFAULT_INITIAL_DATA: InitialData = {
  categories: [],
  posts: {
    posts: [],
    pagination: { 
      total: 0, 
      page: 1, 
      limit: ITEMS_PER_PAGE, 
      totalPages: 0 
    }
  }
};

// Función segura para obtener categorías
const getSafeCategory = (post: BlogPost) => {
  // Verifica si categories existe, no es null y tiene elementos
  if (post?.categories && Array.isArray(post.categories) && post.categories.length > 0) {
    return post.categories[0];
  }
  return "Uncategorized"; // Valor por defecto
}

// Fetcher optimizado con revalidación frecuente y sin caché agresiva
const fetcher = async (url: string) => {
  try {
    const res = await fetch(url, {
      // No almacenar en caché en el cliente para asegurar datos frescos
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
      },
      // Forzar revalidación cada vez
      next: { revalidate: 0 }
    });
    
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(errorText || 'Error en la petición API');
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Componente para la imagen de post con carga optimizada
const PostImage = ({ post, priority = false }: { post: BlogPost, priority?: boolean }) => {
  const [imgError, setImgError] = useState(false);
  
  const imageUrl = useMemo(() => {
    if (imgError) {
      return "/placeholder.svg";
    }
    
    try {
      // Priorizar imageUrl si existe (extraída directamente en la consulta GROQ)
      if (post?.imageUrl && typeof post.imageUrl === 'string') {
        return post.imageUrl;
      }
      
      // Intentar obtener URL directamente del objeto mainImage
      const imageSource = post?.mainImage;
      
      if (!imageSource) {
        return "/placeholder.svg";
      }
      
      // Si mainImage ya es una URL
      if (typeof imageSource === 'string') {
        return imageSource;
      }
      
      // Si mainImage tiene propiedad url
      if (imageSource.url && typeof imageSource.url === 'string') {
        return imageSource.url;
      }
      
      // Usar la URL generada por Sanity (simplificada)
      const urlBuilder = urlForImage(imageSource);
      
      if (urlBuilder && typeof urlBuilder.url === 'function') {
        return urlBuilder.url();
      }
      
      return "/placeholder.svg";
    } catch (error) {
      console.error('Error generando URL de imagen:', error);
      return "/placeholder.svg";
    }
  }, [post?.mainImage, post?.imageUrl, imgError]);
  
  const handleImageError = () => {
    console.error('Error al cargar la imagen:', imageUrl);
    setImgError(true);
  };
  
  return (
    <div className="relative w-full h-full">
      <Image
        src={imageUrl}
        alt={post?.title || 'Imagen del post'}
        fill
        className="object-cover transition-all group-hover:scale-105 duration-300"
        loading={priority ? "eager" : "lazy"}
        sizes={priority ? "(max-width: 768px) 100vw, 1200px" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
        quality={priority ? 90 : 75}
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjJmMmYyIiAvPjwvc3ZnPg=="
        onError={handleImageError}
        unoptimized={true} // Desactivar optimización de Next.js para evitar problemas con CDN externo
      />
    </div>
  );
};

// Componente de avatar de autor
const AuthorAvatar = ({ author, size = "small" }: { author?: Author, size?: "small" | "large" }) => {
  // Si no hay autor, mostrar fallback por defecto
  if (!author) {
    const dimensions = size === "small" ? { width: 24, height: 24 } : { width: 32, height: 32 };
    const containerClass = size === "small" ? "w-6 h-6" : "w-8 h-8";
    const textSize = size === "small" ? "text-xs" : "text-sm";
    
    return (
      <div className={`${containerClass} rounded-full bg-[#1C64F2] overflow-hidden flex-shrink-0 flex items-center justify-center text-white ${textSize} font-bold`}>
        A
      </div>
    );
  }
  
  const dimensions = size === "small" ? { width: 24, height: 24 } : { width: 32, height: 32 };
  const containerClass = size === "small" ? "w-6 h-6" : "w-8 h-8";
  const textSize = size === "small" ? "text-xs" : "text-sm";
  
  return (
    <div className={`${containerClass} rounded-full bg-gray-300 overflow-hidden flex-shrink-0`}>
      {author.image ? (
        <Image
          src={author.image}
          alt={author.name || "Autor"}
          width={dimensions.width}
          height={dimensions.height}
          className="rounded-full object-cover w-full h-full"
          unoptimized={true}
        />
      ) : (
        <div className={`w-full h-full bg-[#1C64F2] flex items-center justify-center text-white ${textSize} font-bold`}>
          {author.name?.charAt(0) || "A"}
        </div>
      )}
    </div>
  );
};

export default function BlogPage() {
  // Estado UI
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Category")
  const [currentPage, setCurrentPage] = useState(1)
  const [isMobile, setIsMobile] = useState(false)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isPending, startTransition] = useTransition()
  
  // Detectar si es móvil con debounce optimizado
  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 1024)
    
    // Ejecutar inmediatamente
    checkIfMobile()
    
    // Implementar debounce para mejorar rendimiento
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkIfMobile, 100);
    };
    
    // Usar ResizeObserver para mejor rendimiento que resize event
    if (typeof window !== 'undefined' && 'ResizeObserver' in window) {
      const resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(document.documentElement);
      return () => resizeObserver.disconnect();
    } else {
      // Fallback para navegadores que no soportan ResizeObserver
      if (typeof window !== 'undefined') {
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
          clearTimeout(timeoutId);
        };
      }
      return () => clearTimeout(timeoutId);
    }
  }, []);
  
  // Carga de categorías con SWR con caché optimizada
  const { data: categories = [], error: categoryError } = useSWR<Category[]>(
    '/api/blog/categories',
    fetcher,
    { 
      revalidateOnFocus: false,
      revalidateIfStale: false,
      dedupingInterval: 600000, // 10 minutos - menos revalidaciones ya que cambian poco
      errorRetryCount: 3,
      suspense: false, // Desactivar suspense para evitar errores en SSR
      fallbackData: [], // Datos de respaldo para SSR
    }
  );
  
  // Crear el endpoint URL con parámetros de manera memoizada
  const postsEndpoint = useMemo(() => {
    const params = new URLSearchParams();
    if (selectedCategory !== "All Category") {
      params.append('category', selectedCategory);
    }
    if (searchQuery) {
      params.append('search', searchQuery);
    }
    params.append('page', currentPage.toString());
    params.append('limit', ITEMS_PER_PAGE.toString());
    
    return `/api/blog?${params.toString()}`;
  }, [selectedCategory, searchQuery, currentPage]);
  
  // Carga de posts con SWR para caché
  const { 
    data: postsData, 
    error: postsError,
    isLoading: isLoadingPosts,
    mutate: refreshPosts
  } = useSWR(
    postsEndpoint, 
    fetcher,
    {
      revalidateOnFocus: false,
      keepPreviousData: true,
      dedupingInterval: 300000, // 5 minutos
      errorRetryCount: 3,
      fallbackData: { posts: [], pagination: { total: 0, page: 1, limit: ITEMS_PER_PAGE, totalPages: 0 } },
      suspense: false, // Desactivar suspense para SSR
    }
  );
  
  // Extraer datos con useMemo para evitar recálculos innecesarios
  const { featuredPost, blogPosts, pagination } = useMemo(() => {
    if (!postsData || !postsData.posts) {
      return { 
        featuredPost: null, 
        blogPosts: [], 
        pagination: { total: 0, page: 1, limit: ITEMS_PER_PAGE, totalPages: 0 } 
      };
    }
    
    // Normalizar los datos para garantizar propiedades esperadas
    const normalizedPosts = postsData.posts.map(post => ({
      ...post,
      categories: Array.isArray(post.categories) ? post.categories : [],
      _id: post._id || `post-${Date.now()}-${Math.random()}`,
      title: post.title || '',
      excerpt: post.excerpt || '',
      slug: post.slug || '',
    }));
    
    // Encontrar post destacado y filtrar posts regulares
    const featured = normalizedPosts.find((post: BlogPost) => post.featured);
    const regularPosts = featured 
      ? normalizedPosts.filter((post: BlogPost) => !post.featured)
      : normalizedPosts;
      
    return {
      featuredPost: featured || null,
      blogPosts: regularPosts,
      pagination: postsData.pagination || { 
        total: regularPosts.length,
        page: currentPage,
        limit: ITEMS_PER_PAGE,
        totalPages: Math.ceil(regularPosts.length / ITEMS_PER_PAGE)
      }
    };
  }, [postsData, currentPage]);
  
  // Error unificado
  const error = categoryError || postsError;
  
  // Handler para selección de categoría optimizado
  const handleCategorySelect = useCallback((category: string) => {
    startTransition(() => {
      setSelectedCategory(category);
      setCurrentPage(1);
      if (isMobile) {
        setIsFilterOpen(false);
      }
    });
  }, [isMobile]);
  
  // Handler para búsqueda con debounce
  const handleSearch = useCallback((value: string) => {
    startTransition(() => {
      setSearchQuery(value);
      setCurrentPage(1);
    });
  }, []);

  // Renderizar sidebar usando Memo
  const SidebarContent = useMemo(() => (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <label className="text-sm font-medium mb-2 block">Buscar</label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            type="search"
            placeholder="Buscar artículo..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Filter Dropdown - Solo visible en desktop */}
      <div className="hidden lg:block">
        <label className="text-sm font-medium mb-2 block">Filtrar</label>
        <div className="relative">
          <select
            className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-[#1C64F2] appearance-none"
            value={selectedCategory}
            onChange={(e) => handleCategorySelect(e.target.value)}
          >
            <option value="All Category">Todas las categorías</option>
            {categories.map((category) => (
              <option key={category._id} value={category.title}>
                {category.title}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-sm font-medium mb-4">Explorar por categorías</h3>
        <div className="space-y-2">
          <button
            onClick={() => handleCategorySelect("All Category")}
            className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${
              selectedCategory === "All Category"
                ? "bg-[#1C64F2]/10 text-[#1C64F2]"
                : "hover:bg-gray-100 text-gray-600"
            }`}
          >
            Todas las categorías
          </button>
          {categories.map((category) => (
            <button
              key={category._id}
              onClick={() => handleCategorySelect(category.title)}
              className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${
                selectedCategory === category.title
                  ? "bg-[#1C64F2]/10 text-[#1C64F2]"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  ), [categories, selectedCategory, searchQuery, handleCategorySelect, handleSearch]);

  // Componente para los posts normales - optimizado con memo
  const PostCard = useCallback(({ post }: { post: BlogPost }) => (
    <Link href={`/blog/${post.slug}`} className="block group">
      <div className="rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-shadow h-[380px] flex flex-col bg-white">
        {/* Imagen siempre con altura fija */}
        <div className="h-48 relative overflow-hidden">
          <PostImage post={post} />
        </div>
        
        {/* Contenido con altura fija */}
        <div className="p-5 flex-1 flex flex-col">
          {/* Categoría y tiempo de lectura */}
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="outline" className="text-xs">
              {getSafeCategory(post)}
            </Badge>
            <div className="flex items-center text-gray-500 text-xs">
              <Clock className="h-3 w-3 mr-1" />
              {post.readTime || "5 min read"}
            </div>
          </div>
          
          {/* Título con altura fija */}
          <h3 className="font-bold text-base group-hover:text-[#1C64F2] transition-colors line-clamp-2 min-h-[3rem]">
            {post.title}
          </h3>
          
          {/* Extracto con altura fija */}
          <p className="text-sm text-gray-600 line-clamp-2 mt-2 min-h-[2.5rem]">
            {post.excerpt}
          </p>
          
          {/* Espacio flexible para empujar el autor al fondo */}
          <div className="flex-grow"></div>
          
          {/* Autor siempre visible en la parte inferior */}
          <div className="flex items-center gap-2 text-xs text-gray-500 mt-3 pt-3 border-t border-gray-100">
            <AuthorAvatar author={post.author} />
            <span>{post.author?.name || "Autor"}</span>
          </div>
        </div>
      </div>
    </Link>
  ), []);
  
  // Loading skeleton memoizado
  const LoadingSkeleton = useMemo(() => (
    <div className="flex flex-col gap-6">
      {/* Skeleton for featured post */}
      <div className="rounded-xl overflow-hidden bg-gray-100 animate-pulse h-[400px] w-full mb-8"></div>
      
      {/* Skeletons for regular posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-xl overflow-hidden bg-gray-100 animate-pulse h-[380px]"></div>
        ))}
      </div>
    </div>
  ), []);
  
  // Error state memoizado
  const ErrorState = useMemo(() => (
    <div className="text-center py-12">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Error</h3>
      <p className="text-gray-600 mb-4">{error?.message || "No se pudieron cargar los datos"}</p>
      <Button variant="outline" onClick={() => refreshPosts()}>
        Reintentar
      </Button>
    </div>
  ), [error, refreshPosts]);
  
  // Componente para post destacado
  const FeaturedPost = useCallback(({ post }: { post: BlogPost }) => (
    <div className="mb-10">
      <Link href={`/blog/${post.slug}`} className="block group">
        <div className="relative overflow-hidden rounded-xl">
          <div className="aspect-[16/9] relative">
            <PostImage post={post} priority={true} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <Badge className="bg-[#1C64F2] hover:bg-[#1C64F2]/90 mb-3">
              {getSafeCategory(post)}
            </Badge>
            <h2 className="text-2xl font-bold mb-2 group-hover:text-[#1C64F2] transition-colors line-clamp-2">
              {post.title}
            </h2>
            <p className="text-gray-200 line-clamp-2 mb-4 h-12">{post.excerpt}</p>
            <div className="flex items-center gap-3">
              <AuthorAvatar author={post.author} size="large" />
              <div className="text-sm">
                <div>{post.author?.name || "Autor"}</div>
                <div className="flex items-center text-gray-300 text-xs">
                  <Clock className="h-3 w-3 mr-1" />
                  {post.readTime || "5 min read"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  ), []);

  return (
    <div className="min-h-screen bg-white pb-16">
      {/* Hero section */}
      <div className="bg-white">
        <div className="container px-4 py-8 md:py-12">
          <div className="mx-auto max-w-[800px] text-center">
            <h1 className="text-3xl font-bold mb-4 sm:text-4xl">Nuestro Blog</h1>
            <p className="text-gray-600 mb-6">
              Explora artículos, guías y noticias para mantenerte al día con las últimas tendencias de gestión empresarial.
            </p>

            {/* Mobile: Search & Filter Bar */}
            <div className="flex items-center gap-3 mx-auto max-w-md lg:hidden">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Buscar artículo..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
              <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="shrink-0">
                    <Filter className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader className="mb-6">
                    <SheetTitle>Filtros</SheetTitle>
                    <SheetDescription>Filtra los artículos del blog</SheetDescription>
                  </SheetHeader>
                  {SidebarContent}
                  <SheetClose asChild>
                    <Button className="mt-6">Aplicar filtros</Button>
                  </SheetClose>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>

      {/* Content area */}
      <div className="container px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Desktop only */}
          <div className="hidden lg:block w-64 shrink-0 space-y-6">
            {SidebarContent}
          </div>

          {/* Main content */}
          <div className="flex-1 max-w-[900px] mx-auto lg:mx-0">
            {/* Estado de carga */}
            {isLoadingPosts ? (
              LoadingSkeleton
            ) : error ? (
              ErrorState
            ) : (
              <>
                {/* Featured Post */}
                {featuredPost && <FeaturedPost post={featuredPost} />}

                {/* Regular Posts */}
                {blogPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {blogPosts.map((post) => (
                      <PostCard key={post._id} post={post} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-gray-50 rounded-xl">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">No se encontraron artículos</h3>
                    <p className="text-gray-600 mb-4">Prueba con diferentes filtros o búsqueda</p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        startTransition(() => {
                          setSearchQuery("")
                          setSelectedCategory("All Category")
                          setCurrentPage(1)
                        });
                      }}
                    >
                      Limpiar filtros
                    </Button>
                  </div>
                )}

                {/* Pagination */}
                {pagination.totalPages > 1 && (
                  <div className="flex justify-center mt-10">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1 || isPending}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>

                      <div className="flex items-center gap-1">
                        {Array.from({ length: Math.min(pagination.totalPages || 1, 5) }).map((_, i) => {
                          // Mostrar máximo 5 botones de página para mejor experiencia
                          let pageNum = i + 1;
                          const totalPages = pagination.totalPages || 1;
                          if (totalPages > 5 && currentPage > 3) {
                            pageNum = currentPage - 3 + i + 1;
                            if (pageNum > totalPages) {
                              pageNum = totalPages - 5 + i + 1;
                            }
                          }
                          return (
                            <Button
                              key={i}
                              variant={currentPage === pageNum ? "default" : "outline"}
                              size="sm"
                              onClick={() => setCurrentPage(pageNum)}
                              className={currentPage === pageNum ? "bg-[#1C64F2]" : ""}
                              disabled={isPending}
                            >
                              {pageNum}
                            </Button>
                          );
                        })}
                      </div>

                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, pagination.totalPages || 1))}
                        disabled={currentPage === (pagination.totalPages || 1) || isPending}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
