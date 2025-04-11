"use client"

import { useState, useRef, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, CreditCard, Sparkles } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import confetti from "canvas-confetti"
import { plans as pricingPlans } from "@/lib/pricing-data"
import { motion, AnimatePresence, useInView } from "framer-motion"

// Variantes para animaciones
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
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
      damping: 15
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom: number) => ({ 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
      delay: custom * 0.1
    }
  })
}

const checkVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (custom: number) => ({ 
    scale: 1, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 0.6 + (custom * 0.05)
    }
  })
}

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      delay: 0.8,
      duration: 0.5
    }
  }
}

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)
  const switchRef = useRef<HTMLButtonElement>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const throwConfetti = (originX: number, originY: number) => {
    const defaults = {
      origin: { x: originX, y: originY },
      gravity: 2,
      startVelocity: 55,
      ticks: 400,
      particleCount: 100,
      scalar: 1,
      shapes: ["square"],
      colors: [
        "#FF69B4", // Pink
        "#87CEEB", // Sky Blue
        "#98FB98", // Pale Green
        "#DDA0DD", // Plum
        "#F0E68C", // Khaki
        "#FF7F50", // Coral
        "#87CEFA", // Light Sky Blue
      ],
    }

    confetti({
      ...defaults,
      angle: 90,
      spread: 45,
    })

    setTimeout(() => {
      confetti({
        ...defaults,
        angle: 90,
        spread: 60,
        startVelocity: 35,
        gravity: 1.4,
      })
    }, 200)

    setTimeout(() => {
      confetti({
        ...defaults,
        angle: 90,
        spread: 80,
        startVelocity: 25,
        gravity: 1,
      })
    }, 300)
  }

  const handleBillingToggle = (checked: boolean) => {
    setIsAnnual(checked)
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect()
      const x = (rect.left + rect.right) / 2 / window.innerWidth
      const y = rect.top / window.innerHeight
      throwConfetti(x, y)
    }
  }

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 overflow-hidden" ref={sectionRef}>
      <div className="container px-4 md:px-6">
        <motion.div 
          className="mx-auto max-w-[1200px]"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div 
            className="flex flex-col items-center space-y-3 sm:space-y-4 text-center"
            variants={titleVariants}
          >
            <Badge
              variant="outline"
              className="rounded-full border-[#1C64F2] bg-[#1C64F2]/10 px-3 py-1 text-xs text-[#1C64F2]"
            >
              Precios Simples
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold md:text-4xl">Elige el plan que se adapta a ti</h2>
            <p className="max-w-[700px] text-sm sm:text-base text-gray-500">
              Comienza hoy y accede a más funcionalidades con nuestros planes premium. ¡Gestiona tu negocio de manera
              eficiente y sin complicaciones!
            </p>

            <motion.div 
              className="flex flex-col items-center space-y-2 mt-6"
              variants={titleVariants}
            >
              {isAnnual && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full flex items-center mb-2"
                >
                  <Sparkles className="h-3 w-3 mr-1" />
                  <span>¡Ahorra hasta 20%!</span>
                </motion.div>
              )}
              <div className="flex items-center space-x-2">
                <span className={`text-sm ${!isAnnual ? "text-[#1C64F2] font-medium" : "text-gray-500"}`}>Por Mes</span>
                <Switch ref={switchRef} checked={isAnnual} onCheckedChange={handleBillingToggle} />
                <span className={`text-sm ${isAnnual ? "text-[#1C64F2] font-medium" : "text-gray-500"}`}>Por Año</span>
              </div>
            </motion.div>
          </motion.div>

          <div className="mx-auto mt-8 sm:mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.id}
                className={`relative rounded-xl sm:rounded-2xl border bg-white p-5 sm:p-6 shadow-sm ${
                  plan.highlighted ? "border-[#1C64F2]" : "border-gray-200"
                }`}
                custom={i}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: plan.highlighted 
                    ? "0 20px 30px -10px rgba(28, 100, 242, 0.15)" 
                    : "0 10px 30px -10px rgba(0, 0, 0, 0.1)" 
                }}
              >
                {plan.highlighted && (
                  <motion.div 
                    className="absolute -top-1 -right-1 -left-1 -bottom-1 rounded-xl sm:rounded-2xl border-2 border-[#1C64F2] opacity-20 z-0"
                    animate={{ 
                      opacity: [0.2, 0.3, 0.2],
                      scale: [1, 1.02, 1],
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse" 
                    }}
                  />
                )}
                
                {plan.discount && isAnnual && (
                  <motion.span 
                    className="absolute -top-3 right-4 sm:right-6 bg-[#1C64F2] text-white px-2 sm:px-3 py-1 rounded-full text-xs"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 15 
                    }}
                  >
                    {plan.discount}
                  </motion.span>
                )}
                
                <div className="space-y-3 sm:space-y-4">
                  <motion.h3 
                    className="text-lg sm:text-xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                  >
                    {plan.name}
                  </motion.h3>
                  <div className="h-14 flex items-start">
                    <AnimatePresence mode="wait">
                      <motion.div 
                        key={isAnnual ? "yearly" : "monthly"}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="flex items-end"
                      >
                        <span className="text-2xl sm:text-3xl font-bold">
                          {isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-xs sm:text-sm font-normal text-gray-500 ml-1">
                          {isAnnual ? "/año" : "/mes"}
                        </span>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500">{plan.description}</p>
                  <motion.div 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.5 }}
                  >
                    <Button
                      variant={plan.buttonVariant === 'default' ? 'default' : 'outline'}
                      className={`w-full text-sm ${plan.highlighted ? "bg-[#1C64F2] hover:bg-[#1C64F2]/90" : ""}`}
                      style={plan.highlighted ? { backgroundColor: "#1C64F2" } : {}}
                    >
                      {plan.buttonText}
                    </Button>
                  </motion.div>
                </div>
                
                <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                  {plan.features.map((feature, index) => (
                    <motion.div 
                      key={feature} 
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.3, delay: 0.3 + (i * 0.1) + (index * 0.05) }}
                    >
                      <motion.div 
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        custom={i + index}
                        variants={checkVariants}
                      >
                        <Check className="h-4 w-4 text-[#1C64F2] mt-0.5 flex-shrink-0" />
                      </motion.div>
                      <span className="text-xs sm:text-sm text-gray-600">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                
                {plan.setupFee && (
                  <motion.div 
                    className="mt-4 pt-4 border-t border-gray-100 text-xs sm:text-sm text-gray-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    {plan.setupFee}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="flex justify-center mt-8"
            variants={footerVariants}
          >
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-2 border border-gray-200 bg-white text-sm px-4 py-2 rounded-full shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
                <CreditCard className="h-4 w-4" />
                <span>No se requiere tarjeta de crédito</span>
              </div>
              
              {/* Panel de información que aparece al hacer hover */}
              <div className="absolute left-1/2 bottom-full mb-2 w-80 transform -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-200">
                  <h4 className="font-semibold mb-2">Opciones de Pago Disponibles:</h4>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Yape: Paga rápido y fácil desde tu móvil.</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Transferencia Bancaria: Depósito directo a nuestra cuenta bancaria.</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Factura Emitida a Nombre del CEO: Total transparencia y confianza en tus transacciones.</span>
                    </li>
                  </ul>
                  <div className="text-sm text-gray-600 flex items-start">
                    <div className="mr-2 flex-shrink-0 mt-1">💬</div>
                    <div>
                      <span className="font-semibold">¿Dudas sobre el pago?</span> Contáctanos directamente por WhatsApp o correo, y te ayudamos en segundos.
                    </div>
                  </div>
                  
                  {/* Triángulo para el tooltip */}
                  <div className="absolute left-1/2 bottom-[-8px] w-4 h-4 bg-white border-r border-b border-gray-200 transform rotate-45 -translate-x-1/2"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
