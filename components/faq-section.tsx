"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Plus } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@/components/ui/disclosure"
import faqData from "@/data/faq.json"

// Preguntas frecuentes de respaldo en caso de error
const fallbackFaqs = [
  {
    id: "que-es-fluxo",
    question: "¿Qué es Fluxo?",
    answer: "Fluxo es una plataforma completa de gestión empresarial, diseñada específicamente para pequeños y medianos negocios."
  },
  {
    id: "descuentos",
    question: "¿Hay algún descuento?",
    answer: "¡Sí! Ofrecemos descuentos especiales para suscripciones anuales, con un ahorro de hasta 20% comparado con los pagos mensuales."
  }
]

type FAQItem = {
  id: string
  question: string
  answer: string
}

// Variantes para las animaciones
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
}

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: 0.2
    }
  }
}

export function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  // Usar los datos del JSON o los de respaldo en caso de error
  const faqItems = faqData?.faqs || fallbackFaqs

  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden" ref={ref}>
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          className="max-w-[900px] mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div 
            className="text-center mb-10 md:mb-14"
            variants={titleVariants}
          >
            <Badge
              variant="outline"
              className="mb-4 rounded-full border-[#1B64F1] bg-[#1B64F1]/10 px-4 py-1 text-xs font-medium text-[#1B64F1]"
            >
              Soporte y Ayuda
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold md:text-4xl mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-gray-600 max-w-[600px] mx-auto text-sm sm:text-base leading-relaxed">
              Encuentra respuestas a las preguntas más comunes sobre Fluxo
            </p>
          </motion.div>

          <motion.div 
            className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm divide-y divide-gray-200 bg-white/50 backdrop-blur-sm"
            variants={containerVariants}
          >
            {faqItems.map((item: FAQItem) => (
              <motion.div 
                key={item.id}
                variants={itemVariants}
                className="bg-white hover:bg-gray-50/50 transition-colors duration-200"
              >
                <Disclosure>
                  <DisclosureButton className="py-6 px-6 md:px-8 w-full flex items-center justify-between group">
                    <span className="text-base md:text-lg font-medium text-gray-900 text-left mr-4 group-hover:text-[#1B64F1] transition-colors">
                      {item.question}
                    </span>
                    <Plus className="min-w-5 w-5 h-5 text-[#1B64F1] transition-transform shrink-0 group-hover:scale-110" />
                  </DisclosureButton>
                  <DisclosurePanel className="px-6 md:px-8 pb-6">
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </DisclosurePanel>
                </Disclosure>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 