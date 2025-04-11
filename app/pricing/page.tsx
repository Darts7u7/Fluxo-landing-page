"use client"

import { useState, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Check, CreditCard, Info, Sparkles, Star, TrendingUp, Shield, Clock, Zap, Trophy, X, Plus } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import confetti from "canvas-confetti"
import { plans, tooltips } from "@/lib/pricing-data"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@/components/ui/disclosure"
import faqData from "@/data/faq.json"
import { FAQSection } from "@/components/faq-section"

// Variantes simplificadas para animaciones
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  }
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
}

// Definición de las características para la tabla comparativa
const comparisonFeatures = [
  { 
    id: "inventario", 
    name: "Gestión de inventario", 
    description: "Control y seguimiento de productos",
    free: "Hasta 50 productos",
    pro: "Hasta 500 productos", 
    enterprise: "Ilimitado" 
  },
  { 
    id: "ventas", 
    name: "Registro de ventas", 
    description: "Control de transacciones",
    free: "Máximo 50 mensuales", 
    pro: "Ilimitado", 
    enterprise: "Ilimitado" 
  },
  { 
    id: "reportes", 
    name: "Reportes y análisis", 
    description: "Inteligencia de negocio",
    free: "Básico", 
    pro: "Avanzado", 
    enterprise: "Personalizado" 
  },
  { 
    id: "facturacion", 
    name: "Facturación electrónica", 
    description: "Emisión de comprobantes",
    free: false, 
    pro: true, 
    enterprise: true 
  },
  { 
    id: "soporte", 
    name: "Soporte técnico", 
    description: "Asistencia profesional",
    free: "Por email (3 días)", 
    pro: "Chat y email (24h)", 
    enterprise: "Dedicado 24/7" 
  },
  { 
    id: "usuarios", 
    name: "Usuarios múltiples", 
    description: "Accesos para tu equipo",
    free: "1 usuario", 
    pro: "5 usuarios", 
    enterprise: "Ilimitados" 
  },
  { 
    id: "apps", 
    name: "Integraciones externas", 
    description: "Conexión con otras plataformas",
    free: false, 
    pro: true, 
    enterprise: true 
  },
  { 
    id: "personalizable", 
    name: "Personalización", 
    description: "Adapta el sistema a tu negocio",
    free: false, 
    pro: "Básica", 
    enterprise: "Completa" 
  }
];

// Beneficios destacados por plan
const planBenefits = {
  free: [
    { icon: <Clock className="w-5 h-5 text-blue-500" />, text: "Ideal para comenzar" },
    { icon: <Shield className="w-5 h-5 text-blue-500" />, text: "Sin riesgo" },
  ],
  pro: [
    { icon: <TrendingUp className="w-5 h-5 text-blue-500" />, text: "Crece con tu negocio" },
    { icon: <Zap className="w-5 h-5 text-blue-500" />, text: "Agiliza procesos" },
    { icon: <Star className="w-5 h-5 text-blue-500" />, text: "Soporte prioritario" },
  ],
  enterprise: [
    { icon: <Trophy className="w-5 h-5 text-blue-500" />, text: "Solución completa" },
    { icon: <Shield className="w-5 h-5 text-blue-500" />, text: "Máxima seguridad" },
    { icon: <Sparkles className="w-5 h-5 text-blue-500" />, text: "Personalización total" },
  ]
};

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)
  const [view, setView] = useState<'cards' | 'table'>('cards')
  const switchRef = useRef<HTMLButtonElement>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

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
    <div className="min-h-screen bg-white" ref={sectionRef}>
      {/* Fondo decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] bg-blue-50 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-[60%] -left-[10%] w-[600px] h-[600px] bg-blue-50 rounded-full opacity-30 blur-3xl"></div>
      </div>
      
      <div className="relative mx-auto max-w-[1200px] px-4 py-16 md:py-24">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <Badge
            variant="outline"
            className="mb-4 rounded-full border-[#1C64F2] bg-[#1C64F2]/10 px-3 py-1 text-xs text-[#1C64F2]"
          >
            Planes Flexibles
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Elige el plan perfecto para tu negocio</h1>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8">
            Comienza hoy y accede a más funcionalidades con nuestros planes premium. ¡Gestiona tu negocio de manera
            eficiente y sin complicaciones!
          </p>
          
          {/* Testimonio destacado */}
          <div className="max-w-2xl mx-auto bg-blue-50 rounded-lg p-4 mb-8 border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium">4.9/5 (200+ reseñas)</span>
            </div>
            <p className="text-sm italic text-gray-600">"Desde que implementamos Fluxo, nuestras ventas han aumentado un 30% y hemos reducido el tiempo dedicado a tareas administrativas a la mitad."</p>
            <p className="text-xs text-right mt-2 font-medium">— María González, Gerente de Café Aurora</p>
          </div>

          <motion.div 
            className="flex flex-col items-center justify-center gap-2 mb-8"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            {isAnnual && (
              <div className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full flex items-center mb-2">
                <Sparkles className="h-3 w-3 mr-1" />
                <span>¡Ahorra hasta 20%!</span>
              </div>
            )}
            <div className="flex items-center justify-center gap-4">
              <span className={`text-sm ${!isAnnual ? "text-[#1C64F2] font-medium" : "text-gray-500"}`}>Por Mes</span>
              <Switch ref={switchRef} checked={isAnnual} onCheckedChange={handleBillingToggle} />
              <span className={`text-sm ${isAnnual ? "text-[#1C64F2] font-medium" : "text-gray-500"}`}>Por Año</span>
            </div>
          </motion.div>

          {/* Selector de vista */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-lg inline-flex">
              <button 
                onClick={() => setView('cards')}
                className={`px-3 py-1 text-sm rounded-md ${view === 'cards' ? 'bg-white shadow-sm text-gray-800' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Tarjetas
              </button>
              <button 
                onClick={() => setView('table')}
                className={`px-3 py-1 text-sm rounded-md ${view === 'table' ? 'bg-white shadow-sm text-gray-800' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Tabla Comparativa
              </button>
            </div>
          </div>
        </motion.div>

        {/* Vista de tarjetas */}
        {view === 'cards' && (
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          >
            {plans.map((plan, i) => (
              <motion.div
                key={plan.id}
                className={`rounded-2xl p-8 bg-white relative ${
                  plan.highlighted ? "ring-2 ring-[#1C64F2] shadow-lg" : "border border-gray-200"
                } transition-all duration-300 hover:shadow-xl`}
                variants={fadeInUp}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <div className="bg-[#1C64F2] text-white px-4 py-1 rounded-full text-xs font-medium">
                      Más Popular
                    </div>
                  </div>
                )}
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
                
                {/* Beneficios destacados */}
                <div className="mb-4">
                  {planBenefits[plan.id as keyof typeof planBenefits]?.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 mb-1">
                      {benefit.icon}
                      <span className="text-xs text-gray-700">{benefit.text}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mb-6 h-16">
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={isAnnual ? "yearly" : "monthly"}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-4xl font-bold text-gray-900">
                        {isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-500">{isAnnual ? "/año" : "/mes"}</span>
                      {plan.discount && isAnnual && (
                        <div className="text-sm text-green-600 mt-1">
                          {plan.discount}
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                <button
                  className={`w-full rounded-lg px-4 py-3 text-sm font-medium mb-6 transition-all duration-200 hover:scale-[1.02] ${
                    plan.highlighted
                      ? "bg-[#1C64F2] text-white hover:bg-[#1C64F2]/90"
                      : "border border-gray-200 text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {plan.buttonText}
                </button>
                
                {/* Garantía */}
                {plan.id !== 'free' && (
                  <div className="text-xs text-center text-gray-500 mb-4 flex items-center justify-center gap-1">
                    <Shield className="h-3 w-3" />
                    <span>Garantía de devolución de 30 días</span>
                  </div>
                )}
                
                <div className="border-t border-gray-100 pt-6 mt-2">
                  <h4 className="text-sm font-medium mb-3">Lo que incluye:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-[#1C64F2] flex-shrink-0 mt-0.5" />
                        <div className="flex items-start gap-2">
                          <span className="text-gray-600 text-sm">{feature}</span>
                          {tooltips[feature] && (
                            <Popover>
                              <PopoverTrigger asChild>
                                <button className="inline-flex items-center justify-center rounded-full w-4 h-4 hover:bg-gray-100 transition-colors">
                                  <Info className="h-3 w-3 text-gray-400" />
                                  <span className="sr-only">Más información sobre {feature}</span>
                                </button>
                              </PopoverTrigger>
                              <PopoverContent
                                className="w-80 bg-white p-3 rounded-lg shadow-lg border border-gray-200"
                                sideOffset={5}
                              >
                                <div className="flex gap-2 items-start">
                                  <Check className="h-4 w-4 text-[#1C64F2] flex-shrink-0 mt-0.5" />
                                  <p className="text-sm text-gray-600">{tooltips[feature]}</p>
                                </div>
                              </PopoverContent>
                            </Popover>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {plan.setupFee && (
                  <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
                    {plan.setupFee}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Vista de tabla comparativa */}
        {view === 'table' && (
          <motion.div
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left font-medium text-gray-500">Característica</th>
                    {plans.map(plan => (
                      <th key={plan.id} className="px-6 py-4 text-center">
                        <div className={`font-medium ${plan.highlighted ? "text-[#1C64F2]" : "text-gray-900"}`}>
                          {plan.name}
                        </div>
                        <div className="mt-1 text-xl font-bold">
                          {isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                          <span className="text-xs font-normal text-gray-500 ml-1">
                            {isAnnual ? "/año" : "/mes"}
                          </span>
                        </div>
                        <button
                          className={`mt-2 inline-flex justify-center rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                            plan.highlighted
                              ? "bg-[#1C64F2] text-white hover:bg-[#1C64F2]/90"
                              : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                          }`}
                        >
                          {plan.buttonText}
                        </button>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonFeatures.map((feature) => (
                    <tr key={feature.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">{feature.name}</div>
                        <div className="text-xs text-gray-500">{feature.description}</div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        {feature[plans[0].id as keyof typeof feature] === true ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : feature[plans[0].id as keyof typeof feature] === false ? (
                          <X className="h-5 w-5 text-gray-300 mx-auto" />
                        ) : (
                          <div className="text-sm text-gray-700">{feature[plans[0].id as keyof typeof feature]}</div>
                        )}
                      </td>
                      <td className={`px-6 py-4 text-center ${plans[1].highlighted ? "bg-blue-50/50" : ""}`}>
                        {feature[plans[1].id as keyof typeof feature] === true ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : feature[plans[1].id as keyof typeof feature] === false ? (
                          <X className="h-5 w-5 text-gray-300 mx-auto" />
                        ) : (
                          <div className="text-sm font-medium text-gray-900">{feature[plans[1].id as keyof typeof feature]}</div>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {feature[plans[2].id as keyof typeof feature] === true ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : feature[plans[2].id as keyof typeof feature] === false ? (
                          <X className="h-5 w-5 text-gray-300 mx-auto" />
                        ) : (
                          <div className="text-sm text-gray-900">{feature[plans[2].id as keyof typeof feature]}</div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        <motion.div 
          className="flex flex-col items-center justify-center mt-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          {/* Garantía de satisfacción */}
          <div className="mb-8 bg-blue-50 rounded-lg p-6 max-w-2xl border border-blue-100 text-center">
            <div className="flex justify-center mb-3">
              <Shield className="h-10 w-10 text-[#1C64F2]" />
            </div>
            <h3 className="text-lg font-medium mb-2">Garantía de satisfacción</h3>
            <p className="text-sm text-gray-600 mb-2">Prueba Fluxo sin riesgos. Si no estás completamente satisfecho dentro de los primeros 30 días, te reembolsaremos el 100% de tu pago.</p>
          </div>
          
          {/* Opciones de pago con hover */}
          <div className="relative group">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 cursor-pointer hover:bg-gray-50 transition-colors">
              <CreditCard className="h-4 w-4" />
              No se requiere tarjeta de crédito
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
                    <span className="font-semibold">¿Dudas sobre el pago?</span> Contáctanos directamente por WhatsApp o
                    correo, y te ayudamos en segundos.
                  </div>
                </div>
                
                {/* Triángulo para el tooltip */}
                <div className="absolute left-1/2 bottom-[-8px] w-4 h-4 bg-white border-r border-b border-gray-200 transform rotate-45 -translate-x-1/2"></div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* FAQ sección */}
        <FAQSection />
        
        {/* CTA final */}
        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold mb-4">¿Listo para transformar tu negocio?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Más de 10,000 negocios ya confían en Fluxo para optimizar sus operaciones diarias.</p>
          <button className="bg-[#1C64F2] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1C64F2]/90 transition-colors">
            Comenzar prueba gratuita
          </button>
          <p className="text-sm text-gray-500 mt-4">Sin compromisos. Cancela cuando quieras.</p>
        </motion.div>
      </div>
    </div>
  )
}
