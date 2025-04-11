import './globals.css'
import type { Metadata } from 'next'
import { ClientLayout } from '@/components/client-layout'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'Fluxo - Software de Gestión Empresarial',
  description: 'Sistema completo para gestión de negocios, ventas, inventario y facturación electrónica.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Prefetch de recursos críticos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
      </head>
      <body className="min-h-screen bg-white" suppressHydrationWarning>
        <ClientLayout>
          <div className="min-h-screen relative">
            <Navbar />
            <main className="relative z-10">{children}</main>
            <CTASection />
          </div>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  )
}