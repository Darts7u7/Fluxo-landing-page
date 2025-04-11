import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Package, Bell, RefreshCw, BarChart2, Search, Check, PlusCircle, Layers, Calendar, Download, Truck, CircleDollarSign, ClipboardList, ArrowRight, Zap, Sparkles, ChevronRight } from "lucide-react"
import Image from "next/image"

const features = [
  {
    title: "Control Preciso",
    description: "Mantén un control detallado de tu stock en tiempo real con actualizaciones instantáneas después de cada venta o recepción de productos.",
    icon: Package,
    color: "bg-blue-600",
  },
  {
    title: "Alertas Automáticas",
    description: "Recibe notificaciones de niveles bajos de inventario para evitar quedarte sin stock y maximizar tus oportunidades de venta.",
    icon: Bell,
    color: "bg-blue-500",
  },
  {
    title: "Sincronización Automática",
    description: "Actualización automática con cada venta realizada para mantener la precisión de tu inventario en todo momento.",
    icon: RefreshCw,
    color: "bg-blue-700",
  },
  {
    title: "Análisis de Inventario",
    description: "Visualiza tendencias de productos, rotación de stock e identifica oportunidades para optimizar tus compras.",
    icon: BarChart2,
    color: "bg-blue-600",
  },
  {
    title: "Gestión de Proveedores",
    description: "Administra tus relaciones con proveedores, compara precios y gestiona órdenes de compra desde un solo lugar.",
    icon: Truck,
    color: "bg-blue-500",
  },
  {
    title: "Categorización Inteligente",
    description: "Organiza tus productos en categorías, subcategorías y etiquetas para facilitar su búsqueda y análisis.",
    icon: Layers,
    color: "bg-blue-700",
  },
]

export default function InventoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-70"></div>
        <div className="absolute top-40 -left-24 h-64 w-64 rounded-full bg-blue-100 blur-3xl opacity-60"></div>
        
        <div className="mx-auto max-w-[1200px] px-4 py-24 relative z-10">
          {/* Header */}
          <div className="text-center">
            <div className="flex justify-center">
              <Badge
                variant="outline"
                className="mb-4 rounded-full border-[#1C64F2] bg-[#1C64F2]/10 px-4 py-1.5 text-sm font-medium text-[#1C64F2] inline-flex items-center"
              >
                <Sparkles className="h-4 w-4 mr-2" /> Gestión de Inventario
              </Badge>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
              Control total de tu inventario
            </h1>
            
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 leading-relaxed">
              Optimiza la gestión de tu stock con nuestra solución inteligente de inventario. 
              Minimiza pérdidas, prevé necesidades de reabastecimiento y toma decisiones basadas en datos.
            </p>
            
            <div className="mt-10 flex flex-wrap justify-center gap-5">
              <Button 
                className="text-white px-8 py-6 rounded-xl shadow-lg transition-all hover:translate-y-[-2px] hover:shadow-xl"
                style={{ backgroundColor: "#1C64F2" }}
              >
                Comenzar Ahora <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-6 rounded-xl border-2 hover:bg-blue-50 transition-all"
              >
                Ver Demo
              </Button>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-16 relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-200">
            <div className="h-14 bg-gray-100 flex items-center px-5 border-b">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="mx-auto font-medium text-gray-500">
                Dashboard de Inventario
              </div>
            </div>
            
            <div className="bg-white p-6">
              <div className="flex justify-between mb-8">
                <div className="space-y-1">
                  <h3 className="font-bold text-gray-800 text-xl">Resumen de Inventario</h3>
                  <p className="text-gray-500 text-sm">Última actualización: hace 5 minutos</p>
                </div>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Download className="h-4 w-4" /> Exportar
                  </Button>
                  <Button style={{ backgroundColor: "#1C64F2" }} size="sm" className="flex items-center gap-1">
                    <PlusCircle className="h-4 w-4" /> Nuevo Producto
                  </Button>
                </div>
              </div>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
                {[
                  { label: "Total de Productos", value: "1,248", change: "+12.5%", color: "text-green-500" },
                  { label: "Valor del Inventario", value: "$142,580", change: "+4.3%", color: "text-green-500" },
                  { label: "Productos Agotados", value: "24", change: "-15%", color: "text-red-500" },
                  { label: "Por Reordenar", value: "56", change: "+8%", color: "text-amber-500" },
                ].map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
                    <div className="text-gray-500 text-sm mb-1">{stat.label}</div>
                    <div className="flex items-end justify-between">
                      <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                      <div className={`text-xs font-medium ${stat.color} flex items-center`}>
                        {stat.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Inventory Table */}
              <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                <div className="bg-gray-50 py-3 px-5 border-b flex justify-between items-center">
                  <h4 className="font-semibold text-gray-700">Productos Recientes</h4>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Buscar producto..." 
                      className="pl-8 pr-4 py-1.5 rounded-md border border-gray-300 text-sm w-64"
                    />
                    <Search className="h-4 w-4 text-gray-400 absolute left-2.5 top-2" />
                  </div>
                </div>
                
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b">
                      <th className="whitespace-nowrap py-3 px-4 text-left text-sm font-medium text-gray-600">Producto</th>
                      <th className="whitespace-nowrap py-3 px-4 text-left text-sm font-medium text-gray-600">SKU</th>
                      <th className="whitespace-nowrap py-3 px-4 text-left text-sm font-medium text-gray-600">Categoría</th>
                      <th className="whitespace-nowrap py-3 px-4 text-left text-sm font-medium text-gray-600">Stock</th>
                      <th className="whitespace-nowrap py-3 px-4 text-left text-sm font-medium text-gray-600">Precio</th>
                      <th className="whitespace-nowrap py-3 px-4 text-left text-sm font-medium text-gray-600">Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "Notebook Profesional", sku: "NB-2024-PRO", category: "Electrónicos", stock: 24, price: "$899.99", status: "En stock" },
                      { name: "Monitor Ultrawide", sku: "MNT-UW-34", category: "Periféricos", stock: 12, price: "$450.00", status: "En stock" },
                      { name: "Teclado Mecánico", sku: "KB-MECH-RGB", category: "Periféricos", stock: 5, price: "$89.99", status: "Bajo" },
                      { name: "Mouse Inalámbrico", sku: "MO-WL-PRO", category: "Periféricos", stock: 0, price: "$45.00", status: "Agotado" },
                      { name: "Impresora Multifunción", sku: "PR-MF-2023", category: "Oficina", stock: 8, price: "$249.99", status: "En stock" },
                    ].map((product, index) => (
                      <tr key={index} className={index < 4 ? "border-b" : ""}>
                        <td className="whitespace-nowrap py-3 px-4 text-sm font-medium text-gray-800">{product.name}</td>
                        <td className="whitespace-nowrap py-3 px-4 text-sm text-gray-600">{product.sku}</td>
                        <td className="whitespace-nowrap py-3 px-4 text-sm text-gray-600">{product.category}</td>
                        <td className="whitespace-nowrap py-3 px-4 text-sm text-gray-800 font-medium">{product.stock}</td>
                        <td className="whitespace-nowrap py-3 px-4 text-sm text-gray-800">{product.price}</td>
                        <td className="whitespace-nowrap py-3 px-4 text-sm">
                          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            product.status === "En stock" ? "bg-green-100 text-green-800" :
                            product.status === "Bajo" ? "bg-amber-100 text-amber-800" :
                            "bg-red-100 text-red-800"
                          }`}>
                            {product.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                <div className="bg-gray-50 px-5 py-3 border-t text-center">
                  <Button variant="link" style={{ color: "#1C64F2" }} className="text-sm">
                    Ver todos los productos <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-[1200px] px-4 py-20">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 rounded-full border-[#1C64F2] bg-[#1C64F2]/10 px-3 py-1 text-xs text-[#1C64F2] inline-flex items-center"
          >
            <Zap className="h-3 w-3 mr-1" /> Características Avanzadas
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Todo lo que necesitas para un control eficiente
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nuestra plataforma de gestión de inventario ofrece herramientas potentes que te ayudan a optimizar 
            tu stock, reducir costos y maximizar beneficios.
          </p>
        </div>
        
        {/* Nuevo diseño de características con iconos y línea de tiempo */}
        <div className="relative">
          {/* Línea conectora */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-blue-700 hidden md:block"></div>
          
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`mb-16 md:mb-24 relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
            >
              {/* Círculo conector en la línea del tiempo */}
              <div className="absolute left-1/2 top-8 w-8 h-8 rounded-full bg-blue-600 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-white"></div>
              </div>
              
              {/* Contenedor del icono */}
              <div className={`w-full md:w-1/2 flex ${index % 2 === 0 ? 'md:justify-end md:pr-12' : 'md:justify-start md:pl-12'} mb-6 md:mb-0`}>
                <div className={`w-24 h-24 rounded-2xl ${feature.color} flex items-center justify-center shadow-lg transform transition-transform hover:scale-110 hover:rotate-3`}>
                  <feature.icon className="w-12 h-12 text-white" />
                </div>
              </div>
              
              {/* Contenido de texto */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                
                {/* Ejemplos de uso o características específicas */}
                <div className={`mt-4 flex flex-col space-y-1 ${index % 2 === 0 ? '' : 'md:items-end'}`}>
                  {[1, 2].map((item) => (
                    <div key={item} className={`inline-flex items-center text-sm text-blue-700 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                      <Check className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">
                        {index === 0 && item === 1 && "Control preciso del inventario disponible"}
                        {index === 0 && item === 2 && "Actualización automática del stock"}
                        
                        {index === 1 && item === 1 && "Notificaciones personalizables por producto"}
                        {index === 1 && item === 2 && "Alertas por correo, SMS o aplicación"}
                        
                        {index === 2 && item === 1 && "Integración con todas tus ventas"}
                        {index === 2 && item === 2 && "Sin pérdidas de información entre sistemas"}
                        
                        {index === 3 && item === 1 && "Informes de rendimiento por producto"}
                        {index === 3 && item === 2 && "Visualización de tendencias de consumo"}
                        
                        {index === 4 && item === 1 && "Historial completo de pedidos"}
                        {index === 4 && item === 2 && "Comparación automática de ofertas"}
                        
                        {index === 5 && item === 1 && "Estructura personalizable por negocio"}
                        {index === 5 && item === 2 && "Búsqueda avanzada de productos"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Advanced Features Section */}
      <div className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="grid gap-16 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">Control de inventario avanzado</h2>
              <p className="text-gray-600 mb-8">
                Nuestro sistema te permite tener un control total sobre tu inventario con herramientas 
                diseñadas para negocios de cualquier tamaño:
              </p>
              
              <div className="space-y-5">
                {[
                  { text: "Seguimiento en tiempo real de todos tus productos", icon: Search },
                  { text: "Alertas automáticas de stock bajo personalizables", icon: Bell },
                  { text: "Gestión de múltiples ubicaciones y almacenes", icon: Layers },
                  { text: "Historial completo de movimientos de productos", icon: Calendar },
                  { text: "Reportes detallados y análisis predictivo", icon: BarChart2 },
                  { text: "Gestión avanzada de proveedores y órdenes", icon: ClipboardList },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-md transform transition-transform group-hover:scale-110">
                      <feature.icon className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 inline-flex items-center text-[#1C64F2] font-medium">
                <span className="border-b-2 border-blue-500 pb-1">Descubre más funcionalidades</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-50 via-white to-blue-50 border border-blue-100 p-6">
                <div className="relative aspect-[4/3]">
                  <div className="absolute inset-0 bg-blue-100/30 rounded-xl overflow-hidden">
                    {/* Grid lines for dashboard effect */}
                    <div className="absolute inset-0" style={{ 
                      backgroundImage: 'linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}></div>
                    
                    {/* Dashboard elements */}
                    <div className="absolute top-8 left-8 right-8 rounded-lg bg-white shadow-md p-4 border border-blue-100">
                      <div className="mb-3 flex justify-between items-center">
                        <div className="font-semibold text-gray-700">Productos por Categoría</div>
                        <div className="text-xs text-gray-500">Últimos 30 días</div>
                      </div>
                      
                      {/* Simple chart representation */}
                      <div className="h-32 flex items-end justify-between">
                        {[60, 40, 75, 55, 90, 35].map((height, i) => (
                          <div key={i} className="w-8 mx-1 rounded-t-sm" 
                            style={{ 
                              height: `${height}%`, 
                              backgroundColor: i % 2 === 0 ? '#1C64F2' : '#60A5FA' 
                            }}
                          ></div>
                        ))}
                      </div>
                      
                      <div className="mt-2 flex justify-between text-xs text-gray-500">
                        <span>Electr.</span>
                        <span>Alim.</span>
                        <span>Ropa</span>
                        <span>Hogar</span>
                        <span>Belleza</span>
                        <span>Otros</span>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-8 left-8 w-52 rounded-lg bg-white shadow-md p-4 border border-blue-100">
                      <div className="text-sm font-semibold text-gray-700 mb-2">Productos Más Vendidos</div>
                      <div className="space-y-2">
                        {[
                          { name: "Notebook Pro", stock: 24, percent: 85 },
                          { name: "Monitor Ultrawide", stock: 12, percent: 60 },
                          { name: "Teclado Mecánico", stock: 5, percent: 30 },
                        ].map((item, i) => (
                          <div key={i}>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="font-medium text-gray-600">{item.name}</span>
                              <span className="text-gray-500">{item.stock} uds.</span>
                            </div>
                            <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                              <div className="h-full bg-[#1C64F2] rounded-full" style={{ width: `${item.percent}%` }}></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call To Action */}
      <div className="bg-gradient-to-r from-[#1C64F2] to-blue-700 py-20 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white opacity-5 rounded-full"></div>
        </div>
        
        <div className="mx-auto max-w-[900px] px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 p-3 mb-8">
            <CircleDollarSign className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Optimiza tu inventario y maximiza tus ganancias
          </h2>
          <p className="text-blue-100 mb-10 max-w-2xl mx-auto">
            Únete a los miles de negocios que han mejorado su rentabilidad gracias a una gestión 
            eficiente de su inventario con nuestra plataforma.
          </p>
          
          {/* Formulario simplificado en lugar de botones */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-xl mx-auto border border-white/20">
            <div className="text-white text-left mb-5 font-medium">Comienza tu prueba gratuita ahora</div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <a 
                href="#"
                className="px-6 py-3 bg-white text-[#1C64F2] font-medium rounded-xl hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                Comenzar <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            <div className="text-xs text-blue-100 mt-3 text-center">
              No se requiere tarjeta de crédito. Prueba gratuita por 14 días.
            </div>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-white">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-1">+40%</div>
              <div className="text-blue-100">Eficiencia mejorada</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-1">-25%</div>
              <div className="text-blue-100">Reducción de pérdidas</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-1">+35%</div>
              <div className="text-blue-100">Rotación de stock</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Planes Disponibles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Planes que incluyen Gestión de Inventario</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a las necesidades de tu negocio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Plan Básico */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-6">
                <Badge variant="outline" className="bg-gray-100 text-gray-800 mb-3">Básico</Badge>
                <h3 className="text-xl font-bold mb-2">Inventario Básico</h3>
                <p className="text-gray-600 text-sm mb-4">Ideal para negocios pequeños que recién comienzan</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span className="text-sm">Catálogo de hasta 50 productos</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span className="text-sm">Control básico de stock</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span className="text-sm">Reportes básicos</span>
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
                <h3 className="text-xl font-bold mb-2">Inventario Completo</h3>
                <p className="text-gray-600 text-sm mb-4">Para PyMEs en crecimiento con necesidades avanzadas</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span className="text-sm">Catálogo ilimitado de productos</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span className="text-sm">Categorización y etiquetado</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span className="text-sm">Alertas automáticas de stock</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span className="text-sm">Importación/exportación Excel</span>
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
                <h3 className="text-xl font-bold mb-2">Inventario Avanzado</h3>
                <p className="text-gray-600 text-sm mb-4">Solución integral para empresas con múltiples sucursales</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span className="text-sm">Todo lo del plan Profesional</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span className="text-sm">Gestión multi-almacén</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span className="text-sm">Integración con proveedores</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                    <span className="text-sm">Reportes personalizados</span>
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
