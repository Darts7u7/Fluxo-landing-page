import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Clock, Cloud, FileText, ChevronRight, BarChart2, Send, Download, Search, Check, FileCheck, Receipt, Printer, Server, Smartphone, Coins, ArrowRight, Zap, Sparkles, CreditCard, CircleDollarSign, X } from "lucide-react"
import Image from "next/image"

const features = [
  {
    title: "Cumplimiento Legal",
    description: "Genera comprobantes fiscales que cumplen al 100% con las normativas vigentes, actualizados automáticamente ante cualquier cambio regulatorio.",
    icon: Shield,
    color: "bg-blue-600",
  },
  {
    title: "Emisión Instantánea",
    description: "Emite facturas electrónicas en segundos con validación automática y envío inmediato a tus clientes sin demoras ni complicaciones.",
    icon: Clock,
    color: "bg-blue-500",
  },
  {
    title: "Almacenamiento Seguro",
    description: "Guarda todos tus documentos fiscales en la nube con respaldo continuo y acceso permanente, protegidos con encriptación de nivel bancario.",
    icon: Cloud,
    color: "bg-blue-700",
  },
  {
    title: "Múltiples Formatos",
    description: "Crea no solo facturas, sino también notas de crédito, notas de débito, boletas y cualquier tipo de documento fiscal necesario para tu negocio.",
    icon: FileText,
    color: "bg-blue-600",
  },
  {
    title: "Reportes Fiscales",
    description: "Genera informes detallados para tus declaraciones de impuestos, simplificando tu contabilidad y cumplimiento fiscal mensual y anual.",
    icon: BarChart2,
    color: "bg-blue-500",
  },
  {
    title: "Integración Completa",
    description: "Conecta tu facturación con tu sistema de ventas, inventario y contabilidad para un flujo de trabajo completamente automatizado.",
    icon: Server,
    color: "bg-blue-700",
  },
]

export default function InvoicingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-70"></div>
        <div className="absolute top-40 -left-24 h-64 w-64 rounded-full bg-blue-100 blur-3xl opacity-60"></div>
        
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-12 sm:py-16 md:py-24 relative z-10">
          {/* Header */}
          <div className="text-center">
            <div className="flex justify-center">
              <Badge
                variant="outline"
                className="mb-4 rounded-full border-[#1C64F2] bg-[#1C64F2]/10 px-4 py-1.5 text-sm font-medium text-[#1C64F2] inline-flex items-center"
              >
                <Sparkles className="h-4 w-4 mr-2" /> Facturación Electrónica
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
              Facturación simple y conforme
            </h1>
            
            <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-gray-600 leading-relaxed px-2">
              Genera y gestiona tus facturas electrónicas de manera fácil y segura, 
              cumpliendo con todas las regulaciones fiscales vigentes en todo momento.
            </p>
            
            <div className="mt-6 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-5">
              <Button 
                className="text-white px-5 sm:px-8 py-4 sm:py-6 rounded-xl shadow-lg transition-all hover:translate-y-[-2px] hover:shadow-xl"
                style={{ backgroundColor: "#1C64F2" }}
              >
                Comenzar Ahora <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                className="px-5 sm:px-8 py-4 sm:py-6 rounded-xl border-2 hover:bg-blue-50 transition-all"
              >
                Ver Demo
              </Button>
            </div>
          </div>

          {/* Invoice Preview - Mobile Optimized */}
          <div className="mt-10 sm:mt-16 relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-200">
            <div className="h-12 sm:h-14 bg-gray-100 flex items-center px-3 sm:px-5 border-b">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="mx-auto font-medium text-gray-500 text-sm sm:text-base">
                Sistema de Facturación Electrónica
              </div>
            </div>
            
            {/* Desktop View */}
            <div className="bg-white p-4 sm:p-6 hidden sm:block">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 absolute inset-0 flex">
                  {/* Mock Invoice Layout - Desktop */}
                  <div className="w-3/5 p-8 border-r border-gray-200">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-xl font-bold text-gray-800 mb-1">FACTURA ELECTRÓNICA</div>
                        <div className="text-sm text-gray-500">Nº FE-0001234</div>
                      </div>
                      <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-medium">
                        EMITIDA
                      </div>
                    </div>
                    
                    <div className="h-[1px] bg-gray-200 my-6"></div>
                    
                    <div className="grid grid-cols-2 gap-8 mb-6">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">DATOS EMISOR</div>
                        <div className="text-sm font-semibold">Fluxo Tecnología S.A.</div>
                        <div className="text-xs text-gray-600">NIT: 12345678-9</div>
                        <div className="text-xs text-gray-600">Dirección: Av. Principal 123</div>
                        <div className="text-xs text-gray-600">Tel: +123 456 7890</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">DATOS CLIENTE</div>
                        <div className="text-sm font-semibold">Empresa Cliente ABC</div>
                        <div className="text-xs text-gray-600">NIT: 98765432-1</div>
                        <div className="text-xs text-gray-600">Dirección: Calle Comercial 456</div>
                        <div className="text-xs text-gray-600">Tel: +123 456 0987</div>
                      </div>
                    </div>
                    
                    <div className="rounded-lg border border-gray-200 mb-6 overflow-hidden">
                      <table className="w-full text-sm">
                        <thead className="bg-gray-50">
                          <tr className="border-b border-gray-200">
                            <th className="text-left p-3 text-xs text-gray-600">DESCRIPCIÓN</th>
                            <th className="text-center p-3 text-xs text-gray-600">CANT.</th>
                            <th className="text-right p-3 text-xs text-gray-600">PRECIO</th>
                            <th className="text-right p-3 text-xs text-gray-600">TOTAL</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { desc: "Licencia Software Premium", qty: 1, price: "$1,200.00", total: "$1,200.00" },
                            { desc: "Soporte Técnico Mensual", qty: 1, price: "$299.99", total: "$299.99" },
                            { desc: "Implementación y Configuración", qty: 1, price: "$550.00", total: "$550.00" },
                          ].map((item, idx) => (
                            <tr key={idx} className={idx < 2 ? "border-b border-gray-200" : ""}>
                              <td className="p-3 text-gray-800">{item.desc}</td>
                              <td className="p-3 text-gray-800 text-center">{item.qty}</td>
                              <td className="p-3 text-gray-800 text-right">{item.price}</td>
                              <td className="p-3 text-gray-800 text-right font-medium">{item.total}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="flex justify-between">
                      <div className="w-1/2"></div>
                      <div className="w-1/2 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Subtotal:</span>
                          <span className="font-medium">$2,049.99</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Impuestos (19%):</span>
                          <span className="font-medium">$389.50</span>
                        </div>
                        <div className="flex justify-between text-sm font-bold pt-2 border-t border-gray-100">
                          <span>Total:</span>
                          <span className="text-blue-600">$2,439.49</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-2/5 p-6 bg-gray-50">
                    <div className="space-y-4">
                      <div className="text-sm font-semibold text-gray-800 mb-4">Detalles del documento</div>
                      
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Fecha emisión:</span>
                        <span>15/04/2023</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Fecha vencimiento:</span>
                        <span>15/05/2023</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Forma de pago:</span>
                        <span>Transferencia</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Estado:</span>
                        <span className="text-green-600 font-medium">Pagada</span>
                      </div>
                      
                      <div className="h-[1px] bg-gray-200 my-4"></div>
                      
                      <div className="text-sm font-semibold text-gray-800 mb-4">Acciones</div>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center gap-2 text-sm text-blue-600 bg-blue-50 p-2 rounded-lg">
                          <Download className="h-4 w-4" />
                          <span>Descargar PDF</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-blue-600 bg-blue-50 p-2 rounded-lg">
                          <Send className="h-4 w-4" />
                          <span>Enviar email</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-blue-600 bg-blue-50 p-2 rounded-lg">
                          <Printer className="h-4 w-4" />
                          <span>Imprimir</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-blue-600 bg-blue-50 p-2 rounded-lg">
                          <FileCheck className="h-4 w-4" />
                          <span>Validar</span>
                        </div>
                      </div>
                      
                      <div className="h-[1px] bg-gray-200 my-4"></div>
                      
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="text-xs font-medium text-gray-600 mb-3">CUFE / Código de verificación</div>
                        <div className="text-xs text-gray-600 break-all bg-gray-50 p-2 rounded border border-gray-100">
                          a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile Optimized View */}
            <div className="bg-white p-4 block sm:hidden">
              <div className="rounded-xl overflow-hidden shadow-md border border-gray-200">
                {/* Factura header */}
                <div className="bg-gray-50 p-4 border-b border-gray-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-base font-bold text-gray-800">FACTURA ELECTRÓNICA</div>
                      <div className="text-xs text-gray-500 mt-1">Nº FE-0001234</div>
                    </div>
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-lg text-xs font-medium">
                      EMITIDA
                    </div>
                  </div>
                </div>
                
                {/* Datos principales */}
                <div className="p-4">
                  <div className="mb-4">
                    <div className="text-xs text-gray-500 mb-1">EMISOR</div>
                    <div className="text-sm font-semibold">Fluxo Tecnología S.A.</div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-xs text-gray-500 mb-1">CLIENTE</div>
                    <div className="text-sm font-semibold">Empresa Cliente ABC</div>
                  </div>
                  
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-gray-500">Fecha emisión:</span>
                    <span>15/04/2023</span>
                  </div>
                  
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-gray-500">Estado:</span>
                    <span className="text-green-600 font-medium">Pagada</span>
                  </div>
                  
                  <div className="h-[1px] bg-gray-200 my-3"></div>
                  
                  {/* Items resumen */}
                  <div className="text-xs font-medium text-gray-500 mb-2">RESUMEN</div>
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between text-sm">
                      <span>Licencia Software Premium</span>
                      <span className="font-medium">$1,200.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Soporte Técnico Mensual</span>
                      <span className="font-medium">$299.99</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Implementación</span>
                      <span className="font-medium">$550.00</span>
                    </div>
                  </div>
                  
                  <div className="h-[1px] bg-gray-200 my-3"></div>
                  
                  {/* Totales */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal:</span>
                      <span className="font-medium">$2,049.99</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Impuestos (19%):</span>
                      <span className="font-medium">$389.50</span>
                    </div>
                    <div className="flex justify-between text-sm font-bold pt-2 border-t border-gray-100">
                      <span>Total:</span>
                      <span className="text-blue-600">$2,439.49</span>
                    </div>
                  </div>
                </div>
                
                {/* Acciones rápidas */}
                <div className="flex justify-between bg-gray-50 p-3 border-t border-gray-200">
                  <button className="flex items-center justify-center gap-1 rounded-lg bg-blue-600 text-white text-xs font-medium py-2 px-3">
                    <Download className="h-3 w-3" />
                    <span>Descargar</span>
                  </button>
                  <button className="flex items-center justify-center gap-1 rounded-lg bg-white border border-gray-200 text-gray-700 text-xs font-medium py-2 px-3">
                    <Send className="h-3 w-3" />
                    <span>Enviar</span>
                  </button>
                  <button className="flex items-center justify-center gap-1 rounded-lg bg-white border border-gray-200 text-gray-700 text-xs font-medium py-2 px-3">
                    <Printer className="h-3 w-3" />
                    <span>Imprimir</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center mb-10 sm:mb-16">
          <Badge
            variant="outline"
            className="mb-4 rounded-full border-[#1C64F2] bg-[#1C64F2]/10 px-3 py-1 text-xs text-[#1C64F2] inline-flex items-center"
          >
            <Zap className="h-3 w-3 mr-1" /> Características Avanzadas
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Facturación electrónica completa
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto px-2">
            Nuestro sistema ofrece todas las herramientas que necesitas para gestionar tus documentos fiscales
            de forma eficiente, segura y conforme con la legislación.
          </p>
        </div>
        
        {/* Diseño de características con iconos y línea de tiempo */}
        <div className="relative">
          {/* Línea conectora */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-blue-700 hidden md:block"></div>
          
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`mb-12 md:mb-24 relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
            >
              {/* Círculo conector en la línea del tiempo */}
              <div className="absolute left-1/2 top-8 w-8 h-8 rounded-full bg-blue-600 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-white"></div>
              </div>
              
              {/* Contenedor del icono */}
              <div className={`w-full md:w-1/2 flex ${index % 2 === 0 ? 'md:justify-end md:pr-8 lg:pr-12' : 'md:justify-start md:pl-8 lg:pl-12'} mb-4 md:mb-0 justify-center`}>
                <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl ${feature.color} flex items-center justify-center shadow-lg transform transition-transform hover:scale-110 hover:rotate-3`}>
                  <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
              </div>
              
              {/* Contenido de texto */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-8 lg:pl-12' : 'md:pr-8 lg:pr-12 md:text-right'} px-4 md:px-0`}>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{feature.description}</p>
                
                {/* Ejemplos de uso o características específicas */}
                <div className={`mt-3 sm:mt-4 flex flex-col space-y-1 ${index % 2 === 0 ? '' : 'md:items-end'}`}>
                  {[1, 2].map((item) => (
                    <div key={item} className={`inline-flex items-center text-xs sm:text-sm text-blue-700 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                      <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 flex-shrink-0" />
                      <span className="text-gray-700">
                        {index === 0 && item === 1 && "Facturas conformes con la normativa fiscal"}
                        {index === 0 && item === 2 && "Actualizaciones automáticas ante cambios legales"}
                        
                        {index === 1 && item === 1 && "Generación con solo unos clics"}
                        {index === 1 && item === 2 && "Envío inmediato a tus clientes"}
                        
                        {index === 2 && item === 1 && "Acceso desde cualquier dispositivo 24/7"}
                        {index === 2 && item === 2 && "Respaldos automáticos diarios"}
                        
                        {index === 3 && item === 1 && "Notas de crédito, débito y rectificativas"}
                        {index === 3 && item === 2 && "Plantillas personalizables para cada tipo"}
                        
                        {index === 4 && item === 1 && "Libros de ventas y compras automatizados"}
                        {index === 4 && item === 2 && "Preparación para declaraciones tributarias"}
                        
                        {index === 5 && item === 1 && "Conexión con tu ERP o sistema actual"}
                        {index === 5 && item === 2 && "API completa para desarrolladores"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Process Section */}
      <div className="bg-white py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Proceso simplificado de facturación</h2>
            <p className="text-gray-600 max-w-2xl mx-auto px-2 text-sm sm:text-base">
              Emitir facturas electrónicas nunca ha sido tan fácil. Nuestro sistema está diseñado 
              para que puedas completar todo el proceso en minutos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 md:gap-8">
            {[
              {
                step: "1",
                title: "Crea tu factura",
                description: "Ingresa los datos de tu cliente y agrega los productos o servicios vendidos.",
                icon: FileText,
                color: "bg-blue-600",
              },
              {
                step: "2",
                title: "Valida y emite",
                description: "Nuestro sistema verifica automáticamente todos los datos y genera la factura con un solo clic.",
                icon: FileCheck,
                color: "bg-blue-500",
              },
              {
                step: "3",
                title: "Envía y archiva",
                description: "La factura se envía automáticamente al cliente y se almacena de forma segura en tu cuenta.",
                icon: Send,
                color: "bg-blue-700",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                {/* Línea conectora - solo desktop */}
                {index < 2 && (
                  <>
                    {/* Desktop connector */}
                    <div className="absolute top-12 left-full w-full h-[2px] bg-gray-100 transform -translate-x-1/2 hidden md:block"></div>
                    
                    {/* Mobile connector */}
                    <div className="absolute md:hidden left-[22px] top-[60px] bottom-0 w-[2px] h-8 bg-gray-100"></div>
                  </>
                )}
                
                <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6 shadow-md relative z-10">
                  {/* Número de paso */}
                  <div className="absolute -top-4 sm:-top-5 left-5 sm:left-8 w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center font-bold text-blue-600 text-sm sm:text-base">
                    {step.step}
                  </div>
                  
                  {/* Icono */}
                  <div className={`mt-4 sm:mt-3 h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-xl sm:rounded-2xl ${step.color} flex items-center justify-center shadow-md`}>
                    <step.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                  </div>
                  
                  {/* Texto */}
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mt-3 sm:mt-4 md:mt-5 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call To Action */}
      <div className="bg-gradient-to-r from-[#1C64F2] to-blue-700 py-12 sm:py-16 md:py-20 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-24 sm:w-32 h-24 sm:h-32 bg-white opacity-10 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 sm:w-32 h-24 sm:h-32 bg-white opacity-10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white opacity-5 rounded-full"></div>
        </div>
        
        <div className="mx-auto max-w-[900px] px-4 sm:px-6 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white/10 p-3 mb-5 sm:mb-6 md:mb-8">
            <CircleDollarSign className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
            Facturación electrónica sin complicaciones
          </h2>
          <p className="text-blue-100 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto text-sm sm:text-base">
            Únete a las miles de empresas que ya simplifican su facturación y cumplen con todas
            las regulaciones fiscales gracias a nuestra plataforma.
          </p>
          
          {/* Formulario simplificado en lugar de botones */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 max-w-xl mx-auto border border-white/20">
            <div className="text-white text-left text-sm sm:text-base mb-4 sm:mb-5 font-medium">Comienza tu prueba gratuita ahora</div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/30 text-sm sm:text-base"
              />
              <a 
                href="#"
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-[#1C64F2] font-medium rounded-lg sm:rounded-xl hover:bg-blue-50 transition-colors inline-flex items-center justify-center text-sm sm:text-base"
              >
                Comenzar <ArrowRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </a>
            </div>
            <div className="text-[10px] sm:text-xs text-blue-100 mt-2 sm:mt-3 text-center">
              No se requiere tarjeta de crédito. Prueba gratuita por 14 días.
            </div>
          </div>
          
          <div className="mt-10 sm:mt-12 md:mt-16 flex flex-wrap justify-center gap-6 sm:gap-8 text-white">
            <div className="flex flex-col items-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">+5000</div>
              <div className="text-blue-100 text-xs sm:text-sm">Empresas activas</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">+1M</div>
              <div className="text-blue-100 text-xs sm:text-sm">Facturas emitidas</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">100%</div>
              <div className="text-blue-100 text-xs sm:text-sm">Cumplimiento fiscal</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Planes Disponibles */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Planes que incluyen Facturación Electrónica</h2>
            <p className="text-gray-600 max-w-2xl mx-auto px-2">
              Elige el plan que mejor se adapte a las necesidades de tu negocio
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* No disponible en plan Básico */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden opacity-75">
              <div className="p-5 sm:p-6">
                <Badge variant="outline" className="bg-gray-100 text-gray-800 mb-3">Básico</Badge>
                <h3 className="text-lg sm:text-xl font-bold mb-2">No disponible</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-4">La facturación electrónica no está incluida en el plan básico</p>
                <div className="h-[120px] sm:h-[150px] flex items-center justify-center">
                  <div className="text-center">
                    <X className="h-8 w-8 sm:h-10 sm:w-10 text-red-400 mx-auto mb-3" />
                    <p className="text-gray-500 text-xs sm:text-sm px-2">
                      Actualiza a un plan superior para acceder a la Facturación Electrónica
                    </p>
                  </div>
                </div>
                <p className="text-xl sm:text-2xl font-bold mb-4">S/0 <span className="text-sm font-normal text-gray-500">/mes</span></p>
                <Button variant="outline" disabled className="w-full opacity-50 py-2 sm:py-3 text-sm">No disponible</Button>
              </div>
            </div>
            
            {/* Plan Profesional */}
            <div className="bg-white rounded-xl border-2 border-[#1C64F2] shadow-lg overflow-hidden relative">
              <div className="absolute top-0 right-0 bg-[#1C64F2] text-white text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-bl-lg font-medium">
                Más popular
              </div>
              <div className="p-5 sm:p-6">
                <Badge className="bg-blue-100 text-blue-800 mb-3">Profesional</Badge>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Facturación Completa</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-4">Para PyMEs que requieren facturación electrónica oficial</p>
                <ul className="space-y-2 sm:space-y-3 mb-5 sm:mb-6">
                  <li className="flex items-start">
                    <Check className="h-4 sm:h-5 w-4 sm:w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span className="text-xs sm:text-sm">Facturas, boletas y notas de crédito</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 sm:h-5 w-4 sm:w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span className="text-xs sm:text-sm">Cumplimiento con normativas fiscales</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 sm:h-5 w-4 sm:w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span className="text-xs sm:text-sm">Envío automático por email</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 sm:h-5 w-4 sm:w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span className="text-xs sm:text-sm">Almacenamiento en la nube</span>
                  </li>
                </ul>
                <p className="text-xl sm:text-2xl font-bold mb-4">S/79 <span className="text-sm font-normal text-gray-500">/mes</span></p>
                <Button className="w-full bg-[#1C64F2] hover:bg-blue-700 py-2 sm:py-3 text-sm">Suscríbete ahora</Button>
              </div>
            </div>
            
            {/* Plan Empresarial */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-5 sm:p-6">
                <Badge variant="outline" className="bg-gray-100 text-gray-800 mb-3">Empresarial</Badge>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Facturación Avanzada</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-4">Solución integral para empresas con altos volúmenes</p>
                <ul className="space-y-2 sm:space-y-3 mb-5 sm:mb-6">
                  <li className="flex items-start">
                    <Check className="h-4 sm:h-5 w-4 sm:w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span className="text-xs sm:text-sm">Todo lo del plan Profesional</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 sm:h-5 w-4 sm:w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span className="text-xs sm:text-sm">Facturación masiva</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 sm:h-5 w-4 sm:w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span className="text-xs sm:text-sm">Reportes fiscales personalizados</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 sm:h-5 w-4 sm:w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                    <span className="text-xs sm:text-sm">API para integración con otros sistemas</span>
                  </li>
                </ul>
                <p className="text-xl sm:text-2xl font-bold mb-4">S/199 <span className="text-sm font-normal text-gray-500">/mes</span></p>
                <Button variant="outline" className="w-full py-2 sm:py-3 text-sm">Contáctanos</Button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 sm:mt-10">
            <p className="text-gray-500 text-sm mb-3 sm:mb-4">¿Tienes dudas sobre qué plan elegir?</p>
            <Button variant="link" className="text-[#1C64F2] text-sm">
              Ver comparativa completa de planes <ChevronRight className="h-3.5 w-3.5 ml-1" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
