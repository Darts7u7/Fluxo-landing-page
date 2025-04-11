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
    <section className="w-full bg-white py-10 md:py-16 overflow-hidden" ref={ref}>
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          className="max-w-[1000px] mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div 
            className="text-center mb-6 md:mb-10"
            variants={titleVariants}
          >
            <Badge
              variant="outline"
              className="mb-3 rounded-full border-[#1B64F1] bg-[#1B64F1]/10 px-3 py-1 text-xs md:px-4 md:py-1.5 md:text-sm font-medium text-[#1B64F1]"
            >
              Soporte y Ayuda
            </Badge>
            <h2 className="text-xl sm:text-2xl font-bold md:text-3xl mb-3 md:mb-6">
              Preguntas Frecuentes
            </h2>
            <p className="text-gray-500 max-w-[800px] mx-auto text-xs sm:text-sm">
              Encuentra respuestas a las preguntas más comunes sobre Fluxo
            </p>
          </motion.div>

          <motion.div 
            className="rounded-xl md:rounded-2xl border border-gray-200 overflow-hidden shadow-sm divide-y divide-gray-200"
            variants={containerVariants}
          >
            {faqItems.map((item: FAQItem) => (
              <motion.div 
                key={item.id}
                variants={itemVariants}
                className="bg-white"
              >
                <Disclosure>
                  <DisclosureButton className="py-4 md:py-5 px-4 md:px-6 hover:bg-gray-50 w-full flex items-center justify-between">
                    <span className="text-sm md:text-base font-medium text-gray-900 text-left mr-2">{item.question}</span>
                    <Plus className="min-w-5 w-5 h-5 text-[#1B64F1] transition-transform shrink-0" />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 md:px-6 pb-4 md:pb-5">
                    <p className="text-xs md:text-sm text-gray-600">{item.answer}</p>
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