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
    asset: {
      _ref: string;
      url: string;
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
    if (!features || features.length === 0) {
      return defaultSteps;
    }
    
    // Convertir las features proporcionadas al formato que necesitamos
    return features.map((feature, index) => {
      const IconComponent = feature.icon && iconMap[feature.icon as keyof typeof iconMap]
        ? iconMap[feature.icon as keyof typeof iconMap]
        : Object.values(iconMap)[index % Object.values(iconMap).length];
        
      return {
        icon: IconComponent,
        title: feature.title,
        description: feature.description,
        // Crear puntos de manera dinámica a partir de la descripción si no hay puntos específicos
        highlightPoints: [
          `Optimiza tu ${feature.title.toLowerCase()} con nuestra solución integrada.`,
          `Accede desde cualquier dispositivo a tus datos en tiempo real.`,
          `Integración perfecta con todos los módulos de nuestro sistema.`
        ],
        buttonText: `Explorar ${feature.title}`,
        preview: feature.image?.asset?.url || defaultSteps[index % defaultSteps.length].preview,
        slug: feature.slug || defaultSteps[index % defaultSteps.length].slug,
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
              className="mb-4 rounded-full border-[#1B64F1] bg-[#1B64F1]/10 px-4 py-1.5 text-sm font-medium text-[#1B64F1]"
            >
              Precios Simples
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold md:text-4xl mb-6">
              Elige el plan que se adapta a ti
            </h2>
            <p className="text-gray-600 max-w-[800px] mx-auto text-base sm:text-lg">
              Comienza hoy y accede a más funcionalidades con nuestros planes premium. ¡Gestiona tu
              negocio de manera eficiente y sin complicaciones!
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
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Imagen (alterna entre izquierda y derecha) */}
              <div className={`relative order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px 0px" }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  {/* Círculo decorativo */}
                  <div 
                    className={`absolute ${index % 2 === 0 ? '-top-20 -right-20' : '-top-20 -left-20'} w-64 h-64 bg-[#1B64F1] rounded-full opacity-60 blur-3xl z-0`}
                  ></div>
                  
                  {/* MacbookPro como mockup de laptop */}
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

              {/* Contenido de texto (alterna entre izquierda y derecha) */}
              <div className={`space-y-8 order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px 0px" }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                    {feature.title}
                  </h2>
                  <p className="text-gray-600 text-lg">
                    {feature.description}
                  </p>
                </motion.div>

                {/* Puntos destacados */}
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
                        <div className="bg-[#1B64F1]/10 rounded-full w-8 h-8 flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-[#1B64F1]" />
                        </div>
                      </div>
                      <p className="text-gray-600">{point}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Botón CTA */}
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
