"use client"

import { useState, useMemo, useCallback, useTransition } from "react"
import { Search, Plus, Minus } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import useSWR from "swr"
import type { FAQ } from "@/lib/sanity"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Tipo para la respuesta API
interface FAQResponse {
  faqs: FAQ[];
  groupedFaqs: Record<string, FAQ[]>;
}

// Fetcher optimizado sin caché para datos frescos
const fetcher = async (url: string): Promise<FAQResponse> => {
  try {
    const res = await fetch(url, {
      // No almacenar en caché
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
      },
      // Forzar revalidación
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

// Componente de loading
const LoadingSkeleton = () => (
  <div className="space-y-6 mt-8">
    {[1, 2, 3, 4, 5].map((i) => (
      <div key={i} className="border-b border-gray-200 pb-4">
        <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse mb-4"></div>
        <div className="h-20 bg-gray-100 rounded w-full animate-pulse"></div>
      </div>
    ))}
  </div>
);

// Componente de error
const ErrorDisplay = ({ error, retry }: { error: Error; retry: () => void }) => (
  <div className="text-center py-12">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">Error</h3>
    <p className="text-gray-600 mb-4">{error?.message || "No se pudieron cargar las preguntas frecuentes"}</p>
    <Button variant="outline" onClick={retry}>
      Reintentar
    </Button>
  </div>
);

// Datos por defecto para evitar undefined
const DEFAULT_DATA: FAQResponse = {
  faqs: [],
  groupedFaqs: {}
};

export default function FAQPage() {
  // Estado UI
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [openItem, setOpenItem] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  // Consultar los datos usando SWR con configuración para revalidación frecuente
  const { 
    data = DEFAULT_DATA,
    error,
    isLoading,
    mutate: refreshData 
  } = useSWR<FAQResponse>('/api/faq', fetcher, {
    revalidateOnFocus: true, // Revalidar al volver a la página
    dedupingInterval: 0, // No deduplicar peticiones
    refreshInterval: 30000, // Refrescar cada 30 segundos
    errorRetryCount: 3,
    fallbackData: DEFAULT_DATA, // Datos fallback para SSR
    suspense: false, // Desactivar suspense para evitar errores en SSR
  })

  // Memoizar las FAQ para evitar recálculos
  const { faqs, categories, filteredFaqs } = useMemo(() => {
    // Usar operador de coalescencia nula para garantizar valores por defecto
    const allFaqs = data?.faqs || [];
    
    // Extraer categorías únicas
    const categoriesSet = new Set<string>();
    allFaqs.forEach(faq => {
      categoriesSet.add(faq.category || 'General');
    });
    const uniqueCategories = Array.from(categoriesSet);
    
    // Filtrar por búsqueda y categoría
    let filtered = allFaqs;
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        faq => 
          (faq.question || '').toLowerCase().includes(query) ||
          (faq.answer || '').toLowerCase().includes(query)
      );
    }
    
    if (activeCategory !== 'all') {
      filtered = filtered.filter(faq => 
        (faq.category || 'General') === activeCategory
      );
    }
    
    return { 
      faqs: allFaqs,
      categories: uniqueCategories, 
      filteredFaqs: filtered 
    };
  }, [data, searchQuery, activeCategory]);

  // Handler para toggle de FAQ
  const toggleItem = useCallback((id: string) => {
    setOpenItem(openItem === id ? null : id);
  }, [openItem]);

  // Handler para búsqueda
  const handleSearch = useCallback((value: string) => {
    startTransition(() => {
      setSearchQuery(value);
      setOpenItem(null);
    });
  }, []);

  // Handler para selección de categoría
  const handleCategoryChange = useCallback((category: string) => {
    startTransition(() => {
      setActiveCategory(category);
      setOpenItem(null);
    });
  }, []);

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-[#1C64F2] mb-2">Preguntas Frecuentes</p>
          <h1 className="text-4xl font-bold mb-4">Preguntas frecuentes</h1>
          <p className="text-gray-600">¿Tienes preguntas? Estamos aquí para ayudarte.</p>
        </div>

        {/* Search */}
        <div className="mb-8 relative">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Buscar preguntas..."
              className="pl-10 py-3 text-base rounded-lg border-gray-200"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Contenido de FAQ */}
        {isLoading ? (
          <LoadingSkeleton />
        ) : error ? (
          <ErrorDisplay error={error} retry={() => refreshData()} />
        ) : (
          <>
            {/* Tabs de categorías */}
            {categories.length > 1 && (
              <Tabs defaultValue="all" className="mb-8" onValueChange={handleCategoryChange}>
                <TabsList className="w-full overflow-x-auto">
                  <TabsTrigger value="all">Todas</TabsTrigger>
                  {categories.map((category) => (
                    <TabsTrigger key={category} value={category}>
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            )}

            {/* FAQs */}
            <div className="space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq) => (
                  <div key={faq._id} className="border-b border-gray-200 pb-4">
                    <button
                      onClick={() => toggleItem(faq._id)}
                      className="flex w-full items-center justify-between py-4 text-left font-medium text-gray-900 focus:outline-none"
                    >
                      <span className="text-lg">{faq.question || ''}</span>
                      <span className="ml-6 flex-shrink-0">
                        {openItem === faq._id ? (
                          <Minus className="h-5 w-5 text-[#1C64F2]" />
                        ) : (
                          <Plus className="h-5 w-5 text-[#1C64F2]" />
                        )}
                      </span>
                    </button>
                    {openItem === faq._id && (
                      <div className="pb-4 pr-12">
                        <p className="text-base text-gray-600">
                          {faq.answer || ''}
                        </p>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No se encontraron resultados para "{searchQuery}"</p>
                  <button 
                    onClick={() => handleSearch("")} 
                    className="mt-2 text-[#1C64F2] hover:underline"
                  >
                    Mostrar todas las preguntas
                  </button>
                </div>
              )}
            </div>
          </>
        )}

        {/* Still have questions */}
        <div className="mt-16 text-center">
          <div className="flex justify-center mb-4">
            <div className="flex -space-x-2">
              <Image
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop"
                alt="Miembro del equipo"
                width={48}
                height={48}
                className="relative z-30 inline-block h-12 w-12 rounded-full ring-2 ring-white"
              />
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
                alt="Miembro del equipo"
                width={48}
                height={48}
                className="relative z-20 inline-block h-12 w-12 rounded-full ring-2 ring-white"
              />
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=100&auto=format&fit=crop"
                alt="Miembro del equipo"
                width={48}
                height={48}
                className="relative z-10 inline-block h-12 w-12 rounded-full ring-2 ring-white"
              />
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-2">¿Todavía tienes preguntas?</h2>
          <p className="text-gray-600 mb-6">
            ¿No encuentras la respuesta que buscas? Comunícate con nuestro amigable equipo.
          </p>
          <Button 
            className="inline-flex items-center justify-center rounded-md bg-[#1C64F2] px-6 py-3 text-base font-medium text-white hover:bg-[#1C64F2]/90 transition-colors"
          >
            Contactar soporte
          </Button>
        </div>
      </div>
    </div>
  )
}
