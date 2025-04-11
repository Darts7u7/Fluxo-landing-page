import { NextResponse } from 'next/server'
import { sanityFetch } from '@/lib/sanity'
import { allFaqsQuery } from '@/lib/queries'
import type { FAQ } from '@/lib/sanity'
import { CACHE_TAGS } from '@/lib/cache-config'
import { fallbackFaqs } from '@/lib/fallback-data'

// Tiempo de caché reducido a 5 minutos para asegurar datos frescos
const CACHE_DURATION = 300;

// Tipos para mejorar la seguridad y validación
interface FAQResponse {
  faqs: FAQ[];
  groupedFaqs: Record<string, FAQ[]>;
}

// Indicar a Next.js que esta API es dinámica y no debe intentar renderizarla estáticamente
export const dynamic = 'force-dynamic';

export async function GET(request: Request): Promise<NextResponse<FAQResponse | { error: string }>> {
  try {
    // Obtener parámetros de búsqueda de manera segura
    const url = new URL(request.url);
    const category = url.searchParams.get('category');
    const search = url.searchParams.get('search');

    // Obtener todas las preguntas frecuentes desde Sanity con caché desactivado
    let faqs: FAQ[] = [];
    
    try {
      faqs = await sanityFetch<FAQ[]>({
        query: allFaqsQuery,
        tags: [CACHE_TAGS.faqs],
        cache: 'no-store', // Forzar refresco
      }) || [];
      
      // Si no hay datos o la respuesta está vacía, usar datos de respaldo
      if (!Array.isArray(faqs) || faqs.length === 0) {
        console.warn('No se recibieron datos de Sanity para FAQs, usando datos de respaldo');
        faqs = fallbackFaqs;
      }
    } catch (error) {
      console.error('Error al obtener datos de Sanity para FAQs:', error);
      faqs = fallbackFaqs;
    }

    // Normalizar los datos para garantizar consistencia
    const normalizedFaqs = faqs.map(faq => ({
      ...faq,
      _id: faq._id || `faq-${Date.now()}-${Math.random()}`, // Generar ID si falta
      _type: 'faq',
      _createdAt: faq._createdAt || new Date().toISOString(),
      _updatedAt: faq._updatedAt || new Date().toISOString(),
      _rev: faq._rev || '',
      question: faq.question || '',
      answer: faq.answer || '',
      category: faq.category || 'General',
      order: typeof faq.order === 'number' ? faq.order : 999,
      isActive: typeof faq.isActive === 'boolean' ? faq.isActive : true,
    }));

    // Filtrar solo las FAQs activas
    let filteredFaqs = normalizedFaqs.filter(faq => faq.isActive === true);

    // Aplicar filtros si existen
    if (category) {
      filteredFaqs = filteredFaqs.filter(faq => 
        faq.category?.toLowerCase() === category.toLowerCase()
      );
    }

    if (search) {
      const searchLower = search.toLowerCase();
      filteredFaqs = filteredFaqs.filter(faq => 
        faq.question.toLowerCase().includes(searchLower) || 
        faq.answer.toLowerCase().includes(searchLower)
      );
    }

    // Ordenar por campo order para mejor UX
    filteredFaqs.sort((a, b) => a.order - b.order);

    // Agrupar por categoría para mejorar la organización
    const groupedFaqs: Record<string, FAQ[]> = {};
    
    filteredFaqs.forEach(faq => {
      const category = faq.category || 'General';
      if (!groupedFaqs[category]) {
        groupedFaqs[category] = [];
      }
      groupedFaqs[category].push(faq);
    });

    // Crear respuesta optimizada con caché breve
    const response = NextResponse.json({
      faqs: filteredFaqs,
      groupedFaqs
    } as FAQResponse);

    // Configurar encabezados de caché para un tiempo corto con revalidación frecuente
    response.headers.set('Cache-Control', `public, max-age=${CACHE_DURATION}, s-maxage=${CACHE_DURATION}, stale-while-revalidate=60`);
    
    return response;
  } catch (error) {
    console.error('Error al obtener preguntas frecuentes:', error);
    
    // En caso de error, devolver datos de respaldo
    const fallbackResponse = prepareFallbackResponse();
    
    return NextResponse.json(
      fallbackResponse,
      { 
        status: 200,
        headers: {
          'Cache-Control': 'no-store, max-age=0'
        }
      }
    );
  }
}

// Función para preparar datos de respaldo en caso de error
function prepareFallbackResponse(): FAQResponse {
  const faqs = fallbackFaqs.map(faq => ({
    ...faq,
    isActive: true,
    category: faq.category || 'General'
  }));
  
  // Agrupar por categoría
  const groupedFaqs: Record<string, FAQ[]> = {};
  
  faqs.forEach(faq => {
    const category = faq.category || 'General';
    if (!groupedFaqs[category]) {
      groupedFaqs[category] = [];
    }
    groupedFaqs[category].push(faq);
  });
  
  return { faqs, groupedFaqs };
} 