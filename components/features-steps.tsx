"use client"

import { Package2, BarChart3, Users, ShoppingCart, ArrowRight, CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useState, useRef, useMemo } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MacbookPro } from "@/components/ui/macbook-pro"

// Datos de respaldo en caso de que no se proporcionen features
const defaultFeatures = [
  {
    title: "Streamline Your Dining Experience",
    description: "Seamless table management for a smooth dining experience, from seating to payment.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-teutR9ep9Q9c3LY3ewSdJXxKwL3wNT.png",
  },
  {
    title: "Gain Deeper Insights",
    description: "Data-driven insights to optimize your business, from sales analysis to customer behavior.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-teutR9ep9Q9c3LY3ewSdJXxKwL3wNT.png",
  },
  {
    title: "Efficient Order Management",
    description: "Efficient order processing for faster service, from order entry to kitchen delivery.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-teutR9ep9Q9c3LY3ewSdJXxKwL3wNT.png",
  },
  {
    title: "Inventory Management",
    description: "Precise inventory control for optimal stock levels and maximizing profits.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-teutR9ep9Q9c3LY3ewSdJXxKwL3wNT.png",
  },
  {
    title: "Product Variant/Modifier",
    description: "Flexible product customization for your customers' unique preferences.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-teutR9ep9Q9c3LY3ewSdJXxKwL3wNT.png",
  },
]

// Datos de pasos predefinidos para la demostración
const defaultSteps = [
  {
    icon: Package2,
    title: "Sistema POS Fluxo®",
    description: "Transforma y optimiza tu negocio con nuestra solución integral de gestión.",
    highlightPoints: [
      "Interfaz intuitiva que reduce la curva de aprendizaje y optimiza operaciones diarias.",
      "Acceso multiplataforma desde cualquier dispositivo y ubicación.",
      "Soporte completo para facturación electrónica, garantizando cumplimiento normativo."
    ],
    buttonText: "Conoce más aquí",
    preview: "/images/Pos.jpeg",
    slug: "punto-de-venta",
  },
  {
    icon: BarChart3,
    title: "Gestión de Inventario",
    description: "Control preciso de stock con actualizaciones en tiempo real y automatización.",
    highlightPoints: [
      "Sistema de alertas personalizable para niveles de inventario bajos o críticos.",
      "Categorización inteligente con códigos de barras y etiquetas personalizadas.",
      "Trazabilidad completa del historial de productos y movimientos de inventario."
    ],
    buttonText: "Explorar solución",
    preview: "/images/Inventario.jpeg",
    slug: "gestion-inventario",
  },
  {
    icon: Users,
    title: "Análisis y Reportes",
    description: "Información estratégica para la toma de decisiones basada en datos reales.",
    highlightPoints: [
      "Dashboard personalizable con métricas de rendimiento en tiempo real.",
      "Informes avanzados de ventas, productos y rentabilidad.",
      "Análisis de comportamiento de clientes para optimizar estrategias comerciales."
    ],
    buttonText: "Ver analíticas",
    preview: "/images/Analisis.jpeg",
    slug: "reportes-analisis",
  },
]

// Mapa de iconos para mapear el nombre del icono (string) al componente
const iconMap = {
  Package2,
  BarChart3,
  Users,
  ShoppingCart,
}

type Feature = {
  _id: string;
  title: string;
  description: string;
  icon?: string;
  image?: {
    asset?: {
      _ref?: string;
      url?: string;
    }
  };
  order?: number;
  slug?: string;
}

type FeaturesStepsProps = {
  features?: Feature[];
}

export function FeaturesSteps({ features }: FeaturesStepsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeStep, setActiveStep] = useState(0)
  
  // Generar pasos dinámicamente basados en las características proporcionadas
  const featuresData = useMemo(() => {
    // Asegurarse de que features es un array válido
    if (!features || !Array.isArray(features) || features.length === 0) {
      console.log("Usando características predeterminadas");
      return defaultSteps;
    }
    
    // Convertir las features proporcionadas al formato que necesitamos
    return features.map((feature, index) => {
      const IconComponent = feature.icon && iconMap[feature.icon as keyof typeof iconMap]
        ? iconMap[feature.icon as keyof typeof iconMap]
        : Object.values(iconMap)[index % Object.values(iconMap).length];
      
      // Verificar que cada propiedad existe antes de usarla
      const title = feature.title || `Característica ${index + 1}`;
      const description = feature.description || 'Descripción no disponible';
      const previewUrl = feature.image?.asset?.url || 
                        (defaultSteps[index % defaultSteps.length] ? defaultSteps[index % defaultSteps.length].preview : '/images/default.jpeg');
      const featureSlug = feature.slug || 
                        (defaultSteps[index % defaultSteps.length] ? defaultSteps[index % defaultSteps.length].slug : 'caracteristica');
        
      return {
        icon: IconComponent,
        title,
        description,
        // Crear puntos de manera dinámica a partir de la descripción si no hay puntos específicos
        highlightPoints: [
          `Optimiza tu ${title.toLowerCase()} con nuestra solución integrada.`,
          `Accede desde cualquier dispositivo a tus datos en tiempo real.`,
          `Integración perfecta con todos los módulos de nuestro sistema.`
        ],
        buttonText: `Explorar ${title}`,
        preview: previewUrl,
        slug: featureSlug,
      };
    });
  }, [features]);

  return (
    <section className="w-full bg-white py-16 md:py-24" ref={ref}>
      {/* Título de sección */}
      <div className="container px-4 md:px-6 mb-16">
        <div className="mx-auto max-w-[1200px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="mb-3 rounded-full border-[#1B64F1] bg-[#1B64F1]/10 px-3 py-1 text-xs font-medium text-[#1B64F1]"
            >
              Características
            </Badge>
            <h2 className="text-xl sm:text-2xl font-bold md:text-3xl mb-4">
              Todo lo que necesitas para tu negocio
            </h2>
            <p className="text-gray-600 max-w-[800px] mx-auto text-sm sm:text-base">
              Descubre todas las herramientas y funcionalidades que Fluxo tiene para hacer crecer tu negocio de manera eficiente
            </p>
          </motion.div>
        </div>
      </div>

      {/* Características principales con layout alternado */}
      {featuresData.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px 0px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`container px-4 md:px-6 mx-auto py-16 md:py-20 ${index !== featuresData.length - 1 ? 'border-b border-gray-100' : ''}`}
        >
          <div className="mx-auto max-w-[1200px]">
            {/* Versión Móvil */}
            <div className="lg:hidden space-y-8">
              {/* Título primero */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-center"
              >
                <h2 className="text-2xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h2>
              </motion.div>

              {/* Imagen después */}
              <motion.div 
                className="relative -mx-4 sm:mx-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <div className="relative z-10">
                  <MacbookPro 
                    src={feature.preview}
                    width={650}
                    height={450}
                    className="max-w-full"
                    style={{ color: "#f5f5f7" }}
                  />
                </div>
              </motion.div>

              {/* Descripción y puntos después */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <p className="text-gray-600 text-base text-center">
                  {feature.description}
                </p>

                <div className="space-y-4 mt-8">
                  {feature.highlightPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="bg-[#1B64F1]/10 rounded-full w-6 h-6 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-[#1B64F1]" />
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">{point}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-8 pb-4">
                  <Link href={`/features/${feature.slug}`} className="block">
                    <Button
                      className="bg-[#1B64F1] hover:bg-[#1B64F1]/90 text-white font-medium rounded-full px-8 py-3 w-full text-base shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-blue-500/40 hover:scale-[1.02]"
                    >
                      {feature.buttonText}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Versión Desktop - mantener el diseño original */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Contenido original para desktop */}
              <div className={`relative ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <div className="relative z-10">
                    <MacbookPro 
                      src={feature.preview}
                      width={650}
                      height={450}
                      className="max-w-full"
                      style={{ color: "#f5f5f7" }}
                    />
                  </div>
                </motion.div>
              </div>

              <div className={`space-y-8 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
                    {feature.title}
                  </h2>
                  <p className="text-gray-600 text-base">
                    {feature.description}
                  </p>
                </motion.div>

                <div className="space-y-4">
                  {feature.highlightPoints.map((point, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="bg-[#1B64F1]/10 rounded-full w-6 h-6 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-[#1B64F1]" />
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">{point}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <Link href={`/features/${feature.slug}`}>
                    <Button
                      className="bg-[#1B64F1] hover:bg-[#1B64F1]/90 text-white font-medium rounded-full px-6 py-2.5"
                    >
                      {feature.buttonText}
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  )
}
