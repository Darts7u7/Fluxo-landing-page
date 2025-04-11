"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { VideoModal } from "./video-modal"
import { Badge } from "@/components/ui/badge"
import { Play } from "lucide-react"
import { TypeAnimation } from "react-type-animation"
import { Safari } from "@/components/ui/safari"
import Image from "next/image"

export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <div className="relative flex min-h-[70vh] sm:min-h-[calc(100vh-4rem)] flex-col items-center justify-start bg-white text-slate-900 overflow-hidden">
      {/* Background Pattern - Reducido para móviles */}
      <div
        className="absolute inset-0 z-0 opacity-50 sm:opacity-100"
        style={{
          background: `
            radial-gradient(circle at 20% 10%, rgba(62, 87, 229, 0.06) 0%, rgba(255, 255, 255, 0) 40%),
            radial-gradient(circle at 80% 10%, rgba(62, 87, 229, 0.03) 0%, rgba(255, 255, 255, 0) 30%),
            radial-gradient(circle at 50% 20%, rgba(62, 87, 229, 0.08) 0%, rgba(255, 255, 255, 0) 40%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 1) 100%)
          `,
          backgroundBlendMode: "multiply",
        }}
      />
      <div
        className="absolute inset-0 z-0 hidden sm:block"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(62, 87, 229, 0.08) 0%, rgba(255, 255, 255, 0) 50%)",
          filter: "blur(40px)",
          transform: "translate3d(0, 0, 0)",
          backfaceVisibility: "hidden",
        }}
      />
      <style jsx global>{`
        @keyframes sparkle {
          0% { opacity: 0; transform: scale(0.4) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
          100% { opacity: 0; transform: scale(0.4) rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
      `}</style>

      <div className="container relative z-10 px-4 py-5 sm:px-4 sm:py-8 md:px-6 lg:py-16 flex-1 flex flex-col justify-center">
        <div className="flex flex-col items-center space-y-3 sm:space-y-4 max-w-full">
          {/* Badge with animation - Versión móvil centrada */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex sm:items-center sm:gap-2 rounded-full sm:bg-white/80 sm:backdrop-blur-sm sm:px-4 sm:py-1 hover:bg-blue-50/80 transition-colors max-w-full"
          >
            {/* Versión móvil: solo Badge */}
            <Badge
              variant="secondary"
              className="text-white transition-colors relative group whitespace-nowrap mx-auto sm:mx-0 py-2 px-4 sm:py-1 sm:px-3 text-sm sm:text-xs"
              style={{ backgroundColor: "#1C64F2" }}
            >
              <span className="relative z-10">✨ Todo en uno</span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                {/* Original sparkles - hidden in mobile for performance */}
                <span className="absolute -top-1 -right-1 h-2 w-2 bg-yellow-300 rounded-full animate-[sparkle_1.5s_ease-in-out_infinite_0.1s] hidden sm:block" />
                <span className="absolute top-1 -left-1 h-1.5 w-1.5 bg-yellow-300 rounded-full animate-[sparkle_1.5s_ease-in-out_infinite_0.2s] hidden sm:block" />
                <span className="absolute -bottom-1 left-2 h-2 w-2 bg-yellow-300 rounded-full animate-[sparkle_1.5s_ease-in-out_infinite_0.3s] hidden sm:block" />
                <span className="absolute bottom-0 right-2 h-1.5 w-1.5 bg-yellow-300 rounded-full animate-[sparkle_1.5s_ease-in-out_infinite_0.4s] hidden sm:block" />
                {/* Additional sparkles with new animations */}
                <span className="absolute top-1/2 -right-3 h-1 w-1 bg-white rounded-full animate-[twinkle_2s_ease-in-out_infinite_0.5s] hidden sm:block" />
                <span className="absolute top-1/2 -left-3 h-1 w-1 bg-white rounded-full animate-[twinkle_2s_ease-in-out_infinite_0.7s] hidden sm:block" />
                <span className="absolute -top-2 left-1/2 h-1 w-1 bg-white rounded-full animate-[twinkle_2s_ease-in-out_infinite_0.9s] hidden sm:block" />
                {/* Floating stars */}
                <span className="absolute -top-3 left-1/4 text-yellow-300 animate-[float_3s_ease-in-out_infinite_0.2s] hidden sm:block">
                  ✦
                </span>
                <span className="absolute -bottom-3 right-1/4 text-yellow-300 animate-[float_3s_ease-in-out_infinite_0.8s] hidden sm:block">
                  ✦
                </span>
                {/* Rotating sparkles */}
                <span
                  className="absolute top-1/2 left-1/2 h-2 w-2 bg-yellow-200 rounded-full animate-[sparkle_2s_ease-in-out_infinite_1s] hidden sm:block"
                  style={{ transform: "translate(-50%, -50%)" }}
                />
                <span
                  className="absolute top-1/2 left-1/2 h-3 w-3 border border-yellow-300 rounded-full animate-[sparkle_2.5s_ease-in-out_infinite_0.5s] hidden sm:block"
                  style={{ transform: "translate(-50%, -50%)" }}
                />
              </span>
            </Badge>
            {/* Texto largo oculto en móvil */}
            <span className="text-xs sm:text-sm truncate hidden sm:inline">FLUXO impulsa el crecimiento de tu negocio</span>
          </motion.div>

          {/* Hero Text with staggered animation - INCREASED SIZE */}
          <motion.div
            className="space-y-3 sm:space-y-4 text-center w-full mt-6 sm:mt-3"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.h1
              className="text-[28px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-center leading-[1.15] sm:leading-tight"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Tu{" "}
              <span className="text-[#1C64F2]">
                <TypeAnimation
                  sequence={["tienda", 2000, "negocio", 2000, "restaurante", 2000, "empresa", 2000]}
                  wrapper="span"
                  speed={50}
                  repeat={Number.POSITIVE_INFINITY}
                />
              </span>
              , tus reglas.
            </motion.h1>
            <motion.p
              className="mx-auto max-w-[700px] text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 px-2 sm:px-2"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Gestiona tus productos, clientes y transacciones desde cualquier lugar. Fácil, rápido y confiable.
            </motion.p>
          </motion.div>

          {/* CTA Buttons side by side */}
          <motion.div
            className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto px-3 sm:px-0 justify-center mt-3 sm:mt-2 mb-0 sm:mb-6 md:mb-10 lg:mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto shadow-md sm:shadow-none rounded-xl sm:rounded-md overflow-hidden"
            >
              <Button
                size="lg"
                className="bg-[#0066FF] hover:bg-[#0052CC] text-white w-full sm:w-auto px-4 sm:px-8 h-11 sm:h-12 text-sm sm:text-base font-medium rounded-xl sm:rounded-md"
              >
                Comienza gratis
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto shadow-sm sm:shadow-none rounded-xl sm:rounded-md overflow-hidden"
            >
              <Button
                size="lg"
                variant="outline"
                className="bg-white hover:bg-gray-50 text-gray-900 w-full sm:w-auto px-4 sm:px-8 h-11 sm:h-12 text-sm sm:text-base font-medium border-gray-200 rounded-xl sm:rounded-md"
              >
                Habla con ventas
              </Button>
            </motion.div>
          </motion.div>

          {/* Espacio adicional solo en desktop */}
          <div className="hidden md:block h-8"></div>

          {/* Browser mockup with video preview - Safari solo para pantallas grandes, imagen para móvil y tablet */}
          <motion.div
            className="relative mt-5 sm:mt-0 w-full max-w-[1200px] cursor-pointer overflow-hidden rounded-lg md:rounded-2xl mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            onClick={() => setIsVideoOpen(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div className="absolute inset-0 z-10 flex items-center justify-center" whileHover={{ scale: 1.1 }}>
              <motion.div
                className="rounded-full bg-black/70 backdrop-blur-sm p-2.5 sm:p-4 text-white shadow-2xl"
                whileHover={{
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  boxShadow: "0 0 30px rgba(0, 0, 0, 0.5)",
                }}
              >
                <Play size={20} className="sm:w-6 sm:h-6" />
              </motion.div>
            </motion.div>
            
            {/* Imagen directa para móvil y tablet (sm) */}
            <div className="relative block md:hidden">
              <div className="relative overflow-hidden rounded-lg shadow-sm">
                <Image
                  src="/images/Dashboard.jpeg"
                  alt="Fluxo Dashboard"
                  width={1200}
                  height={750}
                  className="w-full"
                  priority={true}
                />
              </div>
              {/* Sin difuminado inferior para móvil y tablet */}
            </div>
            
            {/* Versión Safari solo para pantallas grandes (md y superiores) */}
            <div className="relative hidden md:block">
              <Safari
                url="app.fluxo.com"
                src="/images/Dashboard.jpeg"
                width={1200}
                height={750}
                className="w-full"
              />
              {/* Difuminado inferior para transición entre secciones - solo desktop */}
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </div>
  )
}
