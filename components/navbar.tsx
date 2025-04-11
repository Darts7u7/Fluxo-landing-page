"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, ShoppingCart, Package, FileText, BookOpen, HelpCircle, ChevronDown, Zap, X } from "lucide-react"
import { scrollToTop } from "@/utils/scroll-utils"
import { useRouterStore } from "@/lib/router-events"

const features = [
  {
    title: "Punto de Venta (POS)",
    description: "Gestiona ventas en tiempo real desde cualquier dispositivo.",
    icon: ShoppingCart,
    href: "/features/punto-de-venta",
  },
  {
    title: "Gestión de Inventario",
    description: "Controla tu stock con precisión y eficiencia.",
    icon: Package,
    href: "/features/gestion-inventario",
  },
  {
    title: "Facturación Electrónica",
    description: "Genera comprobantes fiscales según regulaciones locales.",
    icon: FileText,
    href: "/features/facturacion-electronica",
  },
]

const resources = [
  {
    title: "Blog",
    description: "Lee artículos sobre las últimas actualizaciones y consejos.",
    icon: BookOpen,
    href: "/blog",
  },
  {
    title: "Ayuda",
    description: "Obtén respuestas a tus preguntas.",
    icon: HelpCircle,
    href: "/faq",
  },
]

export const Navbar = React.memo(function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const { setIsChanging } = useRouterStore()
  const pathname = usePathname()

  const handleNavigation = React.useCallback(() => {
    setIsOpen(false)
    setIsChanging(true)
    scrollToTop()
  }, [setIsChanging, setIsOpen])

  const featuresLinks = React.useMemo(() => 
    features.map((feature) => (
      <Link
        key={feature.title}
        href={feature.href}
        className="group flex items-start gap-3"
        onClick={handleNavigation}
        prefetch={true}
      >
        <div className="mt-1">
          <feature.icon className="h-4 w-4 text-[#1C64F2]" />
        </div>
        <div>
          <h4 className="text-sm font-medium group-hover:text-[#1C64F2]">{feature.title}</h4>
          <p className="text-xs text-gray-500">{feature.description}</p>
        </div>
      </Link>
    )), [handleNavigation]);

  const resourcesLinks = React.useMemo(() => 
    resources.map((resource) => (
      <Link
        key={resource.title}
        href={resource.href}
        className="group grid grid-cols-[auto_1fr] gap-4"
        onClick={handleNavigation}
        prefetch={true}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1C64F2]/10 group-hover:bg-[#1C64F2]/20">
          <resource.icon className="h-5 w-5 text-[#1C64F2]" />
        </div>
        <div className="space-y-1">
          <h4 className="text-sm font-medium leading-none group-hover:text-[#1C64F2]">
            {resource.title}
          </h4>
          <p className="text-sm text-gray-500">{resource.description}</p>
        </div>
      </Link>
    )), [handleNavigation]);

  const mobileFeatureLinks = React.useMemo(() => 
    features.map((feature) => (
      <Link
        key={feature.title}
        href={feature.href}
        className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors ${
          pathname === feature.href ? 'bg-[#1C64F2]/10 text-[#1C64F2] font-medium' : 'hover:bg-gray-100'
        }`}
        onClick={handleNavigation}
        prefetch={true}
      >
        <feature.icon className={`h-5 w-5 ${pathname === feature.href ? 'text-[#1C64F2]' : 'text-gray-500'}`} />
        <span>{feature.title}</span>
      </Link>
    )), [handleNavigation, pathname]);

  const mobileResourceLinks = React.useMemo(() => 
    resources.map((resource) => (
      <Link
        key={resource.title}
        href={resource.href}
        className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors ${
          pathname === resource.href ? 'bg-[#1C64F2]/10 text-[#1C64F2] font-medium' : 'hover:bg-gray-100'
        }`}
        onClick={handleNavigation}
        prefetch={true}
      >
        <resource.icon className={`h-5 w-5 ${pathname === resource.href ? 'text-[#1C64F2]' : 'text-gray-500'}`} />
        <span>{resource.title}</span>
      </Link>
    )), [handleNavigation, pathname]);

  const logoLink = React.useMemo(() => (
    <Link href="/" className="text-xl font-bold text-[#1C64F2] flex items-center" onClick={() => {
      scrollToTop()
      setIsChanging(true)
    }} prefetch={true}>
      Fluxo
    </Link>
  ), [setIsChanging]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm transition-all">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        {logoLink}

        {/* Desktop Navigation - Centered */}
        <div className="hidden flex-1 justify-center md:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent h-9 px-4 py-2 text-sm font-normal hover:bg-gray-50/80 data-[state=open]:bg-gray-50/80 rounded-lg flex items-center gap-1 transition-colors [&>:last-child]:hidden">
                  <span className="text-sm font-normal">Características</span>
                  <ChevronDown className="h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180 [&>svg]:hidden" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[500px] grid-cols-[200px_1fr] gap-3 p-4">
                    <div className="rounded-lg bg-gray-50 p-4">
                      <h3 className="mb-2 text-sm font-medium">All Features</h3>
                      <p className="text-sm text-gray-500">Manage links, track performance, and more.</p>
                    </div>
                    <div className="space-y-4 p-4">
                      {featuresLinks}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent h-9 px-4 py-2 text-sm font-normal hover:bg-gray-50/80 data-[state=open]:bg-gray-50/80 rounded-lg flex items-center gap-1 transition-colors [&>:last-child]:hidden">
                  <span className="text-sm font-normal">Recursos</span>
                  <ChevronDown className="h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180 [&>svg]:hidden" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                    <div className="grid gap-6">
                      {resourcesLinks}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/pricing"
                  className="inline-flex h-9 items-center justify-center rounded-lg px-4 py-2 text-sm font-normal transition-colors hover:bg-gray-50/80 focus:bg-gray-50/80"
                  onClick={handleNavigation}
                  prefetch={true}
                >
                  Precios
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/sobre-nosotros"
                  className="inline-flex h-9 items-center justify-center rounded-lg px-4 py-2 text-sm font-normal transition-colors hover:bg-gray-50/80 focus:bg-gray-50/80"
                  onClick={handleNavigation}
                  prefetch={true}
                >
                  Sobre Nosotros
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="hidden md:inline-flex text-sm font-normal">
            Iniciar sesión
          </Button>
          <Button
            style={{ backgroundColor: "#1C64F2" }}
            className="hidden md:inline-flex text-sm font-normal text-white hover:bg-blue-600"
          >
            Empezar ahora <Zap className="w-4 h-4 ml-1 text-yellow-400 fill-yellow-400" />
          </Button>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-[400px] sm:w-[350px] p-0 border-none">
              <div className="h-full flex flex-col bg-white">
                {/* Mobile menu header */}
                <div className="flex items-center justify-between p-4 border-b">
                  <Link href="/" className="text-xl font-bold text-[#1C64F2]" onClick={handleNavigation} prefetch={true}>
                    Fluxo
                  </Link>
                  <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="rounded-full h-8 w-8">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                
                {/* Mobile menu content */}
                <nav className="flex-1 overflow-y-auto pb-12">
                  {/* Main navigation */}
                  <div className="p-4 space-y-6">
                    {/* Features Section */}
                    <div>
                      <h3 className="text-xs uppercase tracking-wider text-gray-500 font-medium px-2 mb-3">
                        Características
                      </h3>
                      <div className="space-y-1">
                        {mobileFeatureLinks}
                      </div>
                    </div>

                    {/* Resources Section */}
                    <div>
                      <h3 className="text-xs uppercase tracking-wider text-gray-500 font-medium px-2 mb-3">
                        Recursos
                      </h3>
                      <div className="space-y-1">
                        {mobileResourceLinks}
                      </div>
                    </div>

                    {/* Other links */}
                    <div>
                      <h3 className="text-xs uppercase tracking-wider text-gray-500 font-medium px-2 mb-3">
                        Más información
                      </h3>
                      <div className="space-y-1">
                        <Link
                          href="/pricing"
                          className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors ${
                            pathname === '/pricing' ? 'bg-[#1C64F2]/10 text-[#1C64F2] font-medium' : 'hover:bg-gray-100'
                          }`}
                          onClick={handleNavigation}
                          prefetch={true}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${pathname === '/pricing' ? 'text-[#1C64F2]' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>Precios</span>
                        </Link>
                        <Link
                          href="/sobre-nosotros"
                          className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors ${
                            pathname === '/sobre-nosotros' ? 'bg-[#1C64F2]/10 text-[#1C64F2] font-medium' : 'hover:bg-gray-100'
                          }`}
                          onClick={handleNavigation}
                          prefetch={true}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${pathname === '/sobre-nosotros' ? 'text-[#1C64F2]' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          <span>Sobre Nosotros</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </nav>
                
                {/* Mobile menu footer */}
                <div className="p-4 border-t mt-auto">
                  <div className="flex flex-col gap-2">
                    <Button
                      variant="outline"
                      className="w-full justify-center font-normal h-10"
                      onClick={() => setIsOpen(false)}
                    >
                      Iniciar sesión
                    </Button>
                    <Button
                      style={{ backgroundColor: "#1C64F2" }}
                      className="w-full justify-center font-normal h-10 text-white hover:bg-blue-600"
                      onClick={() => setIsOpen(false)}
                    >
                      Empezar ahora <Zap className="w-4 h-4 ml-1 text-yellow-400 fill-yellow-400" />
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
})
