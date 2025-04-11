"use client"

import { Scissors, Store, Wrench, Cog, Utensils, Bike, Shirt, Cookie } from "lucide-react"
import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { useInView } from "framer-motion"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

// Tipos de negocios con estilos personalizados para cada uno
const businessTypes = [
  {
    icon: Store,
    name: "Tiendas y minimarkets",
    description: "Control total de inventario",
    link: "/features/pos?business=retail",
    color: "#1C64F2",
  },
  {
    icon: Cog,
    name: "Ferreterías",
    description: "Catálogos y precios",
    link: "/features/pos?business=hardware",
    color: "#1E40AF",
  },
  {
    icon: Shirt,
    name: "Moda y catálogos",
    description: "Gestión de temporadas",
    link: "/features/pos?business=catalog",
    color: "#1F70F2",
  },
  {
    icon: Wrench,
    name: "Talleres",
    description: "Servicio y reparaciones",
    link: "/features/pos?business=workshop",
    color: "#2563EB",
  },
  {
    icon: Bike,
    name: "Servicios",
    description: "Rutas y programación",
    link: "/features/pos?business=services",
    color: "#1A56DB",
  },
  {
    icon: Scissors,
    name: "Salones y spas",
    description: "Gestiona citas y clientes",
    link: "/features/pos?business=salon",
    color: "#3E87F6",
  },
  {
    icon: Utensils,
    name: "Restaurantes",
    description: "Mesas y comandas",
    link: "/features/pos?business=restaurant",
    color: "#4D80F0",
  },
  {
    icon: Cookie,
    name: "Food trucks",
    description: "Pedidos y facturación",
    link: "/features/pos?business=foodstand",
    color: "#3B67D6",
  }
]

// Duplicamos los tipos de negocio para asegurar que siempre haya suficientes elementos
const extendedBusinessTypes = [...businessTypes, ...businessTypes, ...businessTypes]

export function BusinessTypes() {
  const ref = useRef(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [isPaused, setIsPaused] = useState(false)
  
  useEffect(() => {
    // Solo aplicamos la animación si está en el viewport y no está pausada
    if (sliderRef.current) {
      if (isInView && !isPaused) {
        sliderRef.current.style.animationPlayState = 'running'
      } else {
        sliderRef.current.style.animationPlayState = 'paused'
      }
    }
  }, [isInView, isPaused])
  
  return (
    <section className="w-full relative overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-14 -mt-4 sm:mt-0 border-t border-slate-100" ref={ref}>
      {/* Elementos decorativos de fondo - reducidos para móvil */}
      <div className="absolute top-0 right-0 w-[40%] sm:w-1/2 h-[40%] sm:h-1/2 bg-gradient-to-br from-blue-50/70 to-transparent rounded-full blur-2xl sm:blur-3xl opacity-50 sm:opacity-60 -translate-y-1/4 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[40%] sm:w-1/2 h-[40%] sm:h-1/2 bg-gradient-to-tr from-indigo-50/70 to-transparent rounded-full blur-2xl sm:blur-3xl opacity-50 sm:opacity-60 translate-y-1/4 -translate-x-1/4"></div>
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="max-w-[1200px] mx-auto">
          <motion.div 
            className="text-center mb-10 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center mb-5 md:mb-6">
              <Badge
                variant="outline"
                className="rounded-full border-[#1C64F2] bg-[#1C64F2]/10 px-3 py-1 text-xs text-[#1C64F2]"
              >
                Para todo tipo de negocio
              </Badge>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-5">
              Una solución adaptada a tu realidad
            </h2>
            <p className="text-gray-500 max-w-[800px] mx-auto text-sm sm:text-base">
              Fluxo se adapta perfectamente a las necesidades específicas de tu negocio, ofreciendo herramientas personalizadas para cada sector
            </p>
          </motion.div>

          {/* Carrusel para todos los dispositivos */}
          <div className="relative mx-auto overflow-hidden mt-2 sm:mt-4">
            <style jsx>{`
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .auto-slider {
                animation: scroll 12s linear infinite;
                width: max-content;
                display: flex;
              }
              .auto-slider:hover {
                animation-play-state: paused;
              }
              .business-icon {
                transition: transform 0.3s ease;
              }
              .business-item:hover .business-icon {
                transform: scale(1.15);
              }
            `}</style>
            
            <div className="overflow-hidden py-2 sm:py-4">
              <div 
                className="auto-slider"
                ref={sliderRef}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
              >
                {extendedBusinessTypes.map((business, index) => (
                  <div 
                    key={`${business.name}-${index}`} 
                    className="slide-item min-w-[140px] sm:w-[180px] md:w-[220px] px-2 py-1 sm:py-2"
                  >
                    <Link href={business.link} className="block">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.4, delay: Math.min(index % businessTypes.length, businessTypes.length - 1) * 0.05 }}
                        className="business-item flex flex-col items-center text-center relative overflow-visible"
                        whileHover={{ 
                          y: -3, 
                          transition: { duration: 0.2 } 
                        }}
                      >
                        <div 
                          className="business-icon w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-2 sm:mb-3"
                          style={{ backgroundColor: business.color }}
                        >
                          <business.icon 
                            className="text-white"
                            size={20} 
                            strokeWidth={1.5} 
                          />
                        </div>
                        
                        <h3 className="font-medium text-xs sm:text-sm md:text-base text-gray-900 mb-0.5 sm:mb-1 line-clamp-1">
                          {business.name.includes(" ") ? business.name.split(" ")[0] : business.name}
                        </h3>
                        
                        <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm line-clamp-1">
                          {business.description}
                        </p>
                      </motion.div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="absolute inset-y-0 left-0 w-6 sm:w-8 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-6 sm:w-8 bg-gradient-to-l from-white to-transparent z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
} 