import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, CreditCard, BarChart2, Check, ArrowRight, Zap, Shield, Clock, Users, Gift, Sparkles, Calculator, Receipt, PieChart, Settings, Boxes, ChevronRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { MacbookPro } from "@/components/ui/macbook-pro"

const features = [
  {
    title: "Ventas Rápidas y Eficientes",
    description: "Procesa transacciones en segundos con nuestra interfaz intuitiva y ágil. Diseñado para minimizar los tiempos de espera y maximizar la satisfacción del cliente con un flujo de venta optimizado y fácil de usar por cualquier miembro de tu equipo.",
    icon: ShoppingCart,
    color: "bg-blue-600",
    image: "/pos-ventas-rapidas.jpg"
  },
  {
    title: "Múltiples Métodos de Pago",
    description: "Acepta efectivo, tarjetas, transferencias bancarias y más en un solo sistema. Ofrece a tus clientes la flexibilidad que necesitan para pagar como prefieran, sin complicaciones ni dispositivos adicionales, todo integrado en nuestra plataforma.",
    icon: CreditCard,
    color: "bg-blue-500",
    image: "/pos-metodos-pago.jpg"
  },
  {
    title: "Reportes en Tiempo Real",
    description: "Visualiza tus ventas y rendimiento de negocio al instante con gráficos detallados. Toma decisiones basadas en datos precisos con nuestros reportes automáticos que te muestran tendencias, productos más vendidos, horas pico y más información crucial.",
    icon: BarChart2,
    color: "bg-blue-700",
    image: "/pos-reportes-tiempo-real.jpg"
  },
  {
    title: "Gestión de Inventario",
    description: "Control total de tu stock con alertas automáticas y reposición inteligente. Mantén un seguimiento preciso de tus productos, recibe notificaciones cuando sea momento de reponer, y elimina problemas de exceso o falta de inventario.",
    icon: Boxes,
    gradient: "from-blue-500 to-blue-600",
    image: "/pos-gestion-inventario.jpg"
  },
  
]

export default function POSPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section with Enhanced Animation */}
      <div className="relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-70"></div>
        <div className="absolute top-40 -left-24 h-64 w-64 rounded-full bg-blue-100 blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-1/2 h-64 w-64 rounded-full bg-blue-100 blur-3xl opacity-40"></div>
        
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-12 sm:py-16 md:py-24 relative z-10">
          {/* Header */}
          <div className="text-center">
            <div className="flex justify-center">
              <Badge
                variant="outline"
                className="mb-4 rounded-full border-[#1C64F2] bg-[#1C64F2]/10 px-4 py-1.5 text-sm font-medium text-[#1C64F2] inline-flex items-center"
              >
                <Sparkles className="h-4 w-4 mr-2" /> Punto de Venta (POS)
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
              Vende más rápido y sin complicaciones
            </h1>
            
            <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-gray-600 leading-relaxed px-4">
              Nuestro sistema de punto de venta basado en web te permite procesar transacciones de manera eficiente
              desde cualquier dispositivo, con una experiencia de usuario excepcional.
            </p>
            
            <div className="mt-6 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-5">
              <Button 
                className="text-white px-5 sm:px-8 py-5 sm:py-6 rounded-xl shadow-lg transition-all hover:translate-y-[-2px] hover:shadow-xl"
                style={{ backgroundColor: "#1C64F2" }}
              >
                Comenzar Ahora <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                className="px-5 sm:px-8 py-5 sm:py-6 rounded-xl border-2 hover:bg-blue-50 transition-all"
              >
                Ver Demo
              </Button>
            </div>
          </div>

          {/* Enhanced Mock Device Display */}
          <div className="mt-10 sm:mt-16 mx-auto max-w-4xl relative">
            {/* Floating elements around the display */}
            <div className="absolute -top-6 -left-6 bg-white rounded-lg shadow-lg p-3 sm:p-4 z-20 hidden sm:flex items-center gap-2">
              <Clock className="h-4 sm:h-5 w-4 sm:w-5 text-[#1C64F2]" />
              <span className="text-xs sm:text-sm font-medium">Procesa ventas en segundos</span>
            </div>
            
            <div className="absolute bottom-10 -right-6 bg-white rounded-lg shadow-lg p-3 sm:p-4 z-20 hidden sm:flex items-center gap-2">
              <Calculator className="h-4 sm:h-5 w-4 sm:w-5 text-[#1C64F2]" />
              <span className="text-xs sm:text-sm font-medium">Cálculo automático de impuestos</span>
            </div>
            
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-3 sm:p-4 z-20 hidden lg:flex items-center gap-2">
              <Receipt className="h-4 sm:h-5 w-4 sm:w-5 text-[#1C64F2]" />
              <span className="text-xs sm:text-sm font-medium">Impresión de recibos</span>
            </div>
            
            {/* Main Display */}
            <div className="relative">
              <Image 
                src="/images/PuntodeVentaFluxo2.jpeg" 
                alt="Sistema punto de venta Fluxo"
                width={1200}
                height={800}
                className="w-full h-auto object-cover rounded-xl shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
        
      {/* Sección de características (Alternando imagen y texto) */}
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Ventajas de nuestro sistema POS</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto px-2">Diseñado para hacer tu negocio más eficiente, con todas las herramientas que necesitas en un solo lugar.</p>
        </div>
        
        {features.map((feature, index) => (
          <div 
            key={feature.title}
            className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center py-10 sm:py-16 ${index !== features.length - 1 ? 'border-b border-gray-200' : ''}`}
          >
            {/* Imagen (alterna entre izquierda y derecha) */}
            <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
              {index === 0 ? (
                <div className="w-full overflow-hidden">
                  <MacbookPro 
                    src="/images/Venta.jpeg" 
                    width={650}
                    height={450}
                    className="max-w-full"
                    style={{ color: "#f5f5f7" }}
                  />
                </div>
              ) : index === 1 ? (
                <div className="w-full overflow-hidden">
                  <MacbookPro 
                    src="/images/PuntodeVentaFluxo2.jpeg" 
                    width={650}
                    height={450}
                    className="max-w-full"
                    style={{ color: "#f5f5f7" }}
                  />
                </div>
              ) : index === 2 ? (
                <div className="w-full overflow-hidden">
                  <MacbookPro 
                    src="/images/Dashboard - Fluxo.jpeg" 
                    width={650}
                    height={450}
                    className="max-w-full"
                    style={{ color: "#f5f5f7" }}
                  />
                </div>
              ) : index === 3 ? (
                <div className="w-full overflow-hidden">
                  <MacbookPro 
                    src="/images/Inventario.jpeg" 
                    width={650}
                    height={450}
                    className="max-w-full"
                    style={{ color: "#f5f5f7" }}
                  />
                </div>
              ) : (
                <div className="bg-gray-200 aspect-[4/3] relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    index % 2 === 0 
                      ? 'from-blue-600 to-blue-400' 
                      : 'from-blue-500 to-blue-700'
                  } flex items-center justify-center`}>
                    <feature.icon className="h-16 sm:h-20 w-16 sm:w-20 text-white/80" />
                  </div>
                </div>
              )}
            </div>
            
            {/* Contenido de texto */}
            <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
              <div className={`inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl ${feature.color || 'bg-blue-600'} mb-4 sm:mb-6`}>
                <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6">{feature.description}</p>
              
              <div className="space-y-3 sm:space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-start gap-2 sm:gap-3">
                    <div className="mt-1 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-blue-100 text-[#1C64F2]">
                      <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-700">
                      {index === 0 && item === 1 && "Atención rápida y eficiente para tus clientes"}
                      {index === 0 && item === 2 && "Reducción de tiempos de espera en caja"}
                      {index === 0 && item === 3 && "Interfaz intuitiva sin necesidad de capacitación extensa"}
                      
                      {index === 1 && item === 1 && "Compatible con tarjetas de crédito y débito"}
                      {index === 1 && item === 2 && "Integración con billeteras digitales"}
                      {index === 1 && item === 3 && "Procesamiento seguro de pagos en línea"}
                      
                      {index === 2 && item === 1 && "Datos de ventas en tiempo real"}
                      {index === 2 && item === 2 && "Análisis de tendencias y patrones"}
                      {index === 2 && item === 3 && "Exportación de reportes en múltiples formatos"}
                      
                      {index === 3 && item === 1 && "Control de stock automatizado"}
                      {index === 3 && item === 2 && "Alertas de inventario bajo"}
                      {index === 3 && item === 3 && "Gestión de proveedores integrada"}
                      
                      {index === 4 && item === 1 && "Sistema de puntos personalizable"}
                      {index === 4 && item === 2 && "Promociones automáticas para clientes frecuentes"}
                      {index === 4 && item === 3 && "Historial completo de compras por cliente"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call To Action */}
      

      {/* Sección de Planes Disponibles */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Planes que incluyen Punto de Venta</h2>
            <p className="text-gray-600 max-w-2xl mx-auto px-2">
              Elige el plan que mejor se adapte a las necesidades de tu negocio
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Plan Básico */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-4 sm:p-6">
                <Badge variant="outline" className="bg-gray-100 text-gray-800 mb-3">Básico</Badge>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Punto de Venta Básico</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-4">Ideal para negocios pequeños que recién comienzan</p>
                <ul className="space-y-2 sm:space-y-3 mb-5 sm:mb-6">
                  <li className="flex items-start">
                    <Check className="h-4 sm:h-5 w-4 sm:w-5 text-green-500 shrink-0 mr-2" />
                    <span className="text-xs sm:text-sm">Interfaz simple e intuitiva</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 sm:h-5 w-4 sm:w-5 text-green-500 shrink-0 mr-2" />
                    <span className="text-xs sm:text-sm">Registro de ventas básico</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 sm:h-5 w-4 sm:w-5 text-green-500 shrink-0 mr-2" />
                    <span className="text-xs sm:text-sm">Gestión de efectivo y tarjetas</span>
                  </li>
                </ul>
                <p className="text-2xl font-bold mb-4">S/0 <span className="text-sm font-normal text-gray-500">/mes</span></p>
                <Button variant="outline" className="w-full">Empieza gratis</Button>
              </div>
            </div>
            
            {/* Plan Profesional */}
            <div className="bg-white rounded-xl border-2 border-[#1C64F2] shadow-lg overflow-hidden relative">
              <div className="absolute top-0 right-0 bg-[#1C64F2] text-white text-xs px-3 py-1 rounded-bl-lg font-medium">
                Más popular
              </div>
              <div className="p-6">
                <Badge className="bg-blue-100 text-blue-800 mb-3">Profesional</Badge>
                <h3 className="text-xl font-bold mb-2">Punto de Venta Avanzado</h3>
                <p className="text-gray-600 text-sm mb-4">Para PyMEs en crecimiento con necesidades completas</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span className="text-sm">Interfaz avanzada personalizable</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span className="text-sm">Gestión de turnos y cajeros</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span className="text-sm">Múltiples métodos de pago</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span className="text-sm">Historial y cancelación de ventas</span>
                  </li>
                </ul>
                <p className="text-2xl font-bold mb-4">S/79 <span className="text-sm font-normal text-gray-500">/mes</span></p>
                <Button className="w-full bg-[#1C64F2] hover:bg-blue-700">Suscríbete ahora</Button>
              </div>
            </div>
            
            {/* Plan Empresarial */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-6">
                <Badge variant="outline" className="bg-gray-100 text-gray-800 mb-3">Empresarial</Badge>
                <h3 className="text-xl font-bold mb-2">Punto de Venta Completo</h3>
                <p className="text-gray-600 text-sm mb-4">Solución integral para empresas con múltiples sucursales</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span className="text-sm">Todo lo del plan Profesional</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span className="text-sm">Personalización completa</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span className="text-sm">Integración con sistemas externos</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span className="text-sm">Soporte prioritario 24/7</span>
                  </li>
                </ul>
                <p className="text-2xl font-bold mb-4">S/199 <span className="text-sm font-normal text-gray-500">/mes</span></p>
                <Button variant="outline" className="w-full">Contáctanos</Button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <p className="text-gray-500 mb-4">¿Tienes dudas sobre qué plan elegir?</p>
            <Button variant="link" className="text-[#1C64F2]">
              Ver comparativa completa de planes <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
