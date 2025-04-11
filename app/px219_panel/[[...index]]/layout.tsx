import type React from "react"
import "@/app/globals.css"

export const metadata = {
  title: 'Fluxo CMS',
  description: 'Admin panel para Fluxo'
}

export default function AdminStudioLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
} 