import { Hero } from "@/components/hero"
import { FeaturesSteps } from "@/components/features-steps"
import { BusinessTypes } from "@/components/business-types"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { FAQSection } from "@/components/faq-section"
import { Suspense } from "react"
import { sanityFetch } from "@/lib/sanity"
import { allFeaturesQuery } from "@/lib/queries"
import { fallbackFeatures } from "@/lib/fallback-data"

export const revalidate = 3600 // Revalidar cada hora

// Componentes de carga para mejorar la experiencia de usuario
function LoadingPricing() {
  return <div className="w-full h-80 bg-gray-50 animate-pulse rounded-xl"></div>;
}

function LoadingFeatures() {
  return <div className="w-full h-64 bg-gray-50 animate-pulse rounded-xl"></div>;
}

export default async function Home() {
  // Prefetch data for features - con manejo de errores mejorado
  let features;
  try {
    features = await sanityFetch({
      query: allFeaturesQuery,
      tags: ['feature'],
      cache: 'force-cache',
      next: { revalidate },
    });
    
    // Verificamos explícitamente que features sea un array
    if (!features || !Array.isArray(features)) {
      console.log('Los datos de características no son un array, usando fallback');
      features = fallbackFeatures;
    }
  } catch (error) {
    console.error('Error al cargar características:', error);
    features = fallbackFeatures;
  }
  
  // Asegurar que tenemos datos válidos para los componentes
  const validFeatures = Array.isArray(features) && features.length > 0 
    ? features 
    : fallbackFeatures;
  
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Hero />
      
      <Suspense fallback={<LoadingFeatures />}>
        <BusinessTypes />
        <FeaturesSteps features={validFeatures} />
      </Suspense>
      
      <Suspense fallback={<LoadingPricing />}>
        <Pricing />
      </Suspense>
      
      <Testimonials />
      <FAQSection />
    </main>
  )
}
