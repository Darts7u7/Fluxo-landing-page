import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing - Fluxo",
  description: "Simple and transparent pricing for all your link management needs",
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
