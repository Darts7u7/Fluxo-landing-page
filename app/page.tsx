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
  // Prefetch data for features
  const featuresPromise = sanityFetch({
    query: allFeaturesQuery,
    tags: ['feature'],
    cache: 'force-cache',
    next: { revalidate },
  }).catch(error => {
    console.error('Error al cargar características:', error);
    return fallbackFeatures;
  });
  
  // Usamos los datos de features
  const features = await featuresPromise;
  
  // Verificamos si los datos son válidos, si no, usamos los de respaldo
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
