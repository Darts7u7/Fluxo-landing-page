"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 px-4">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          className="relative rounded-xl sm:rounded-[2rem] bg-black p-6 sm:p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Patterns - Removed as per update */}
          {/*<div className="absolute inset-0">
            <div className="absolute -top-1/2 -left-1/2 w-full h-full border-[100px] border-white/5 rounded-full" />
            <div className="absolute -bottom-1/2 -right-1/2 w-full h-full border-[100px] border-white/5 rounded-full" />
          </div>*/}

          {/* Content */}
          <div className="relative z-10 space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Descubre el Poder de FLUXO en Acción
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
              ¿Listo para simplificar tu gestión y aumentar tus ganancias? Agenda una demo gratis y descubre cómo FLUXO
              puede hacer crecer tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                className="min-w-[140px] w-full sm:w-auto bg-[#1C64F2] hover:bg-[#1C64F2]/90 transition-all duration-200 transform hover:scale-105"
                size="lg"
              >
                Iniciar Sesión
              </Button>
              <Button
                variant="outline"
                className="min-w-[140px] w-full sm:w-auto bg-white text-black hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                size="lg"
              >
                Solicitar Demo Gratis
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
