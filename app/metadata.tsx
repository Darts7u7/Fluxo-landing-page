import type { Metadata, Viewport } from "next"

export const metadata: Metadata = {
  title: "Fluxo - Plataforma de Gestión de Negocios",
  description: "Gestiona tu negocio de manera inteligente con Fluxo",
  icons: {
    icon: [
      { url: '/favicon.png' },
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' }
    ]
  },
  generator: 'v0.dev'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
} 