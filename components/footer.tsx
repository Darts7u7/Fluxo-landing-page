import Link from "next/link"

const footerLinks = {
  Producto: [
    { name: "Funciones", href: "/features", description: "Explora todo lo que FLUXO puede hacer por ti" },
    { name: "Precios", href: "/pricing", description: "Encuentra el plan perfecto para tu negocio" },
    { name: "Testimonios", href: "/testimonials", description: "Lo que dicen nuestros clientes" },
    { name: "Integraciones", href: "/integration", description: "Conecta FLUXO con tus herramientas favoritas" },
  ],
  Recursos: [
    { name: "Blog", href: "/blog", description: "Consejos prácticos y novedades para optimizar tu negocio" },
    { name: "Soporte", href: "/support", description: "¿Tienes dudas? Encuentra respuestas rápidas aquí" },
    { name: "Guías y Tutoriales", href: "/guides", description: "Aprende a aprovechar FLUXO al máximo" },
  ],
  Empresa: [
    { name: "Sobre Nosotros", href: "/about", description: "Conoce nuestra historia y misión" },
    { name: "Política de Privacidad", href: "/privacy", description: "Cómo protegemos tu información" },
    { name: "Términos y Condiciones", href: "/terms", description: "Todo lo que necesitas saber" },
  ],
}

export function Footer() {
  return (
    <footer className="relative z-20 w-full border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-8 sm:py-12 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-medium text-gray-900">{category}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[13px] text-gray-600 hover:text-gray-900 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-[14px] sm:text-[15px] font-medium text-[#1C64F2]">Únete a Nuestra Comunidad</h3>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-[12px] sm:text-[13px] text-gray-600">
                Recibe los mejores tips y actualizaciones directamente en tu bandeja de entrada.
              </p>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Ingresa tu email..."
                  className="w-full px-3 sm:px-4 py-2 text-[12px] sm:text-[13px] rounded-lg border border-gray-200 
                 focus:outline-none focus:ring-2 focus:ring-[#1C64F2]/20 focus:border-[#1C64F2]/30"
                />
                <button
                  className="w-full px-3 sm:px-4 py-2 text-[12px] sm:text-[13px] text-white rounded-lg bg-[#1C64F2] 
                 hover:bg-[#1C64F2]/90 transition-all duration-200"
                >
                  Suscríbete Ahora
                </button>
              </div>
              <p className="text-[11px] sm:text-[12px] text-gray-500 italic">
                ⚡ Más de 3,000+ negocios ya están recibiendo nuestros mejores consejos cada semana
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 flex flex-col items-center justify-between border-t border-gray-100 pt-6 sm:pt-8 md:flex-row">
          <div className="flex items-center space-x-2">
            <Link href="/" className="text-[#1C64F2] hover:text-blue-600 font-medium">
              Fluxo
            </Link>
          </div>
          <p className="mt-4 text-xs sm:text-sm text-gray-500 md:mt-0">
            © {new Date().getFullYear()} Fluxo, INC. Todos los derechos reservados.
          </p>
        </div>

        <div className="mt-8 sm:mt-12 flex justify-center">
          <div
            className="text-[80px] sm:text-[100px] md:text-[120px] font-bold tracking-tighter text-gray-100 select-none"
            style={{
              WebkitTextStroke: "1px #e5e7eb",
            }}
          >
            FLUXO
          </div>
        </div>
      </div>
    </footer>
  )
}
