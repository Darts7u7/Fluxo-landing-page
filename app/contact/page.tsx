"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Mail, Phone, MessageSquare, Clock } from "lucide-react"
import Link from "next/link"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Nuestro equipo responderá en menos de 24 horas",
    contact: "soporte@fluxo.com",
    action: "Enviar email",
    href: "mailto:soporte@fluxo.com",
  },
  {
    icon: Phone,
    title: "Teléfono",
    description: "Lun-Vie de 9:00 a 18:00",
    contact: "+51 1 234 5678",
    action: "Llamar ahora",
    href: "tel:+5112345678",
  },
  {
    icon: MessageSquare,
    title: "Chat en vivo",
    description: "Disponible 24/7 para clientes Pro y Empresarial",
    contact: "Inicia sesión para acceder",
    action: "Iniciar chat",
    href: "/login",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-gradient-to-br from-[#1C64F2] to-[#3b82f6] min-h-[200px] sm:min-h-[300px] rounded-b-[20px] sm:rounded-b-[40px] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fillOpacity='0.1'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-8 sm:py-12 md:py-16">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-white/80 mb-4 sm:mb-8">
            <Link href="/" className="hover:text-white">
              Inicio
            </Link>
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-white">Contacto</span>
          </nav>
          <div className="space-y-2 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">Contáctanos</h1>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl">
              Estamos aquí para ayudarte. Ponte en contacto con nuestro equipo de soporte.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-12 -mt-6 sm:-mt-10">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
          {/* Contact Methods */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Formas de contacto</h2>
            <div className="space-y-4 sm:space-y-6">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="flex gap-3 sm:gap-4 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-gray-200"
                >
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#1C64F2]/10">
                    <method.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#1C64F2]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-base sm:text-lg">{method.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">{method.description}</p>
                    <p className="text-xs sm:text-sm font-medium mb-2 sm:mb-3">{method.contact}</p>
                    <Link
                      href={method.href}
                      className="text-xs sm:text-sm text-[#1C64F2] hover:underline inline-flex items-center gap-1"
                    >
                      {method.action} <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-gray-200">
              <div className="flex gap-3 sm:gap-4 items-start">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#1C64F2]/10">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-[#1C64F2]" />
                </div>
                <div>
                  <h3 className="font-medium text-base sm:text-lg">Horario de atención</h3>
                  <div className="mt-2 sm:mt-3 space-y-1 sm:space-y-2">
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-gray-500">Lunes - Viernes</span>
                      <span>9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-gray-500">Sábado</span>
                      <span>10:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-gray-500">Domingo</span>
                      <span>Cerrado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Envíanos un mensaje</h2>
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 sm:h-8 sm:w-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-green-800 mb-1 sm:mb-2">¡Mensaje enviado!</h3>
                <p className="text-green-700 mb-3 sm:mb-4 text-sm sm:text-base">
                  Gracias por contactarnos. Te responderemos lo antes posible.
                </p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline" className="text-sm sm:text-base">
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1">
                      Nombre
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-medium mb-1">
                    Asunto
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="text-sm"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#1C64F2] hover:bg-[#1C64F2]/90 text-sm sm:text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
