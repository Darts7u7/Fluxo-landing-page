import Link from "next/link"
import { 
  Linkedin, 
  Youtube, 
  Instagram, 
  Facebook 
} from "lucide-react"

const footerLinks = {
  Producto: [
    { name: "Funciones", href: "/features", description: "Explora todo lo que FLUXO puede hacer por ti" },
    { name: "Precios", href: "/pricing", description: "Encuentra el plan perfecto para tu negocio" },
    { name: "Testimonios", href: "/testimonials", description: "Lo que dicen nuestros clientes" },
    { name: "Integraciones", href: "/integrations", description: "Conecta FLUXO con tus herramientas favoritas" },
  ],
  Recursos: [
    { name: "Blog", href: "/blog", description: "Consejos prácticos y novedades para optimizar tu negocio" },
    { name: "Soporte", href: "/faq", description: "¿Tienes dudas? Encuentra respuestas rápidas aquí" },
    { name: "Guías y Tutoriales", href: "/guides", description: "Aprende a aprovechar FLUXO al máximo" },
  ],
  Empresa: [
    { name: "Sobre Nosotros", href: "/sobre-nosotros", description: "Conoce nuestra historia y misión" },
    { name: "Política de Privacidad", href: "/politica-privacidad", description: "Cómo protegemos tu información" },
    { name: "Términos y Condiciones", href: "/terminos-condiciones", description: "Todo lo que necesitas saber" },
  ],
}

// Iconos de redes sociales con sus respectivas URLs desde variables de entorno
const socialMedia = [
  { 
    name: "LinkedIn", 
    icon: Linkedin, 
    url: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/company/fluxo",
    color: "hover:bg-[#0077B5]" 
  },
  { 
    name: "YouTube", 
    icon: Youtube, 
    url: process.env.NEXT_PUBLIC_YOUTUBE_URL || "https://youtube.com/@fluxoteam",
    color: "hover:bg-[#FF0000]" 
  },
  { 
    name: "Instagram", 
    icon: Instagram, 
    url: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/fluxoapp",
    color: "hover:bg-[#E1306C]" 
  },
  { 
    name: "Facebook", 
    icon: Facebook, 
    url: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://facebook.com/fluxoapp",
    color: "hover:bg-[#1877F2]" 
  },
]

export function Footer() {
  return (
    <footer className="relative z-20 w-full border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-12 md:px-6">
        {/* Links del Footer */}
        <div className="grid grid-cols-3 gap-x-4 gap-y-8 sm:gap-8 lg:grid-cols-4">
          {/* Columna Producto */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900">Producto</h3>
            <ul className="mt-3 space-y-2">
              {footerLinks.Producto.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-xs sm:text-sm text-gray-600 hover:text-[#1C64F2] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna Recursos */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900">Recursos</h3>
            <ul className="mt-3 space-y-2">
              {footerLinks.Recursos.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-xs sm:text-sm text-gray-600 hover:text-[#1C64F2] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna Empresa */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900">Empresa</h3>
            <ul className="mt-3 space-y-2">
              {footerLinks.Empresa.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-xs sm:text-sm text-gray-600 hover:text-[#1C64F2] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter - Solo Desktop */}
          <div className="col-span-3 lg:col-span-1">
            <div className="rounded-xl border border-gray-200 p-4 sm:p-6 bg-gray-50/50">
              <h3 className="text-sm font-semibold text-[#1C64F2]">Únete a Nuestra Comunidad</h3>
              <div className="mt-3 space-y-3">
                <p className="text-xs sm:text-sm text-gray-600">
                  Recibe los mejores tips y actualizaciones directamente en tu bandeja de entrada.
                </p>
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Ingresa tu email..."
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-gray-200 
                    focus:outline-none focus:ring-2 focus:ring-[#1C64F2]/20 focus:border-[#1C64F2]/30"
                  />
                  <button
                    className="w-full px-3 py-2 text-xs sm:text-sm text-white rounded-lg bg-[#1C64F2] 
                    hover:bg-[#1C64F2]/90 transition-all duration-200"
                  >
                    Suscríbete Ahora
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-100 pt-8">
          {/* Social Media Icons - Centered on Mobile, Left on Desktop */}
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <div className="flex items-center">
              <Link href="/" className="text-[#1C64F2] hover:text-blue-600 font-semibold text-lg">
                Fluxo
              </Link>
              
              {/* Social Media Icons */}
              <div className="flex items-center ml-6 space-x-3">
                {socialMedia.map((social) => (
                  <a 
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-600 transition-all duration-300 ${social.color} hover:text-white`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
            <p className="mt-4 text-xs sm:text-sm text-gray-500 md:mt-0">
              © {new Date().getFullYear()} Fluxo, INC. Todos los derechos reservados.
            </p>
          </div>
        </div>

        {/* Logo Watermark */}
        <div className="mt-8 flex justify-center opacity-10">
          <div
            className="text-4xl sm:text-6xl font-bold tracking-tighter text-gray-900"
            style={{
              WebkitTextStroke: "1px currentColor",
            }}
          >
            FLUXO
          </div>
        </div>
      </div>
    </footer>
  )
}
