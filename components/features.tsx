import { ShoppingCart, Package, FileText } from "lucide-react"

const features = [
  {
    title: "Punto de Venta (POS)",
    description:
      "Gestiona ventas en tiempo real desde cualquier dispositivo conectado. Registra transacciones, genera comprobantes y maneja múltiples métodos de pago.",
    icon: ShoppingCart,
  },
  {
    title: "Gestión de Inventario",
    description:
      "Mantén un control detallado de tu stock, recibe alertas de niveles bajos y sincroniza automáticamente con las ventas realizadas.",
    icon: Package,
  },
  {
    title: "Facturación Electrónica",
    description:
      "Genera boletas y facturas electrónicas cumpliendo con las regulaciones locales. Simplifica tu proceso de facturación y mantén todo en orden.",
    icon: FileText,
  },
]

export function Features() {
  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Características principales</h2>
            <p className="max-w-[700px] text-gray-500">
              FLUXO ofrece todas las herramientas que necesitas para gestionar y hacer crecer tu negocio.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full" style={{ backgroundColor: "#1C64F2" }} p-3>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
