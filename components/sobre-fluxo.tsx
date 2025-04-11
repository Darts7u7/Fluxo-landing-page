"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Twitter, Linkedin, Github } from "lucide-react"
import { AnimatedBlob } from "@/components/animated-blob"

// Actualizado para mostrar solo al fundador
const teamMembers = [
  {
    name: "Pierre",
    role: "Fundador & CEO",
    image: "/team/Owner.jpg", // Ruta correcta a la imagen en la carpeta team
    fallbackImage: "/placeholder-user.jpg",
    socialMedia: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
    },
    bgColor: "bg-blue-50",
  }
]

export function SobreFluxo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="w-full py-16 sm:py-20 md:py-24" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[1200px]">
          {/* Nuestra Visión */}
          <div className="relative mb-24 overflow-hidden rounded-3xl bg-[#E6F0F9]">
            <div className="absolute inset-0 overflow-hidden">
              <AnimatedBlob className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-white/20" />
              <AnimatedBlob className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-white/20" />
            </div>
            <div className="relative z-10 grid gap-8 p-8 sm:p-12 md:grid-cols-2 md:gap-12 lg:p-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col justify-center"
              >
                <Badge
                  variant="outline"
                  className="mb-4 w-fit rounded-full border-[#1C64F2] bg-[#1C64F2]/10 px-3 py-1 text-xs text-[#1C64F2]"
                >
                  Nuestra Visión
                </Badge>
                <h2 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">
                  Simplificando la gestión empresarial
                </h2>
                <p className="text-gray-700">
                  Fluxo nació con una misión clara: hacer que la tecnología de gestión empresarial sea accesible para todos. 
                  Creo firmemente que los pequeños y medianos negocios merecen herramientas potentes que les permitan 
                  competir en igualdad de condiciones con grandes corporaciones.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center justify-center gap-4"
              >
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=500&auto=format&fit=crop"
                    alt="Emprendedor trabajando"
                    width={300}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=240&auto=format&fit=crop"
                      alt="Análisis de datos"
                      width={240}
                      height={180}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=240&auto=format&fit=crop"
                      alt="Planificación estratégica"
                      width={240}
                      height={180}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Mi Camino */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-24"
          >
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-sm">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#1C64F2]/5 rounded-full -translate-x-20 -translate-y-20 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1C64F2]/5 rounded-full translate-x-10 translate-y-10 blur-3xl"></div>

                <div className="relative grid md:grid-cols-5 gap-0">
                  {/* Left content - 3 columns on md+ screens */}
                  <div className="md:col-span-3 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                    <div className="max-w-xl">
                      <Badge
                        variant="outline"
                        className="mb-6 w-fit rounded-full border-[#1C64F2] bg-[#1C64F2]/10 px-3 py-1 text-xs text-[#1C64F2]"
                      >
                        Mi Camino
                      </Badge>

                      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 text-gray-900">
                        De la necesidad a la solución
                      </h2>

                      <div className="space-y-6">
                        <p className="text-gray-700 text-lg leading-relaxed">
                          Como emprendedor, identifiqué la falta de herramientas tecnológicas accesibles y completas 
                          para pequeños negocios en Latinoamérica. Así nació Fluxo, una solución integral que combina 
                          punto de venta, gestión de inventario y facturación electrónica en una plataforma intuitiva.
                        </p>

                        <p className="text-gray-700 text-lg leading-relaxed">
                          Mi misión es democratizar el acceso a tecnología empresarial de alto nivel, permitiendo que cualquier 
                          negocio, sin importar su tamaño, pueda optimizar sus operaciones y crecer de manera sostenible.
                        </p>
                      </div>

                      <div className="mt-12 grid grid-cols-2 gap-6">
                        <div className="rounded-xl bg-white p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                          <div className="text-[#1C64F2] font-bold text-3xl mb-1">+1000</div>
                          <div className="text-sm text-gray-600">Negocios impulsados</div>
                        </div>
                        <div className="rounded-xl bg-white p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                          <div className="text-[#1C64F2] font-bold text-3xl mb-1">5</div>
                          <div className="text-sm text-gray-600">Países en Latinoamérica</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right image - 2 columns on md+ screens */}
                  <div className="relative md:col-span-2 h-80 md:h-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-transparent z-10 md:hidden"></div>
                    <Image
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=500&auto=format&fit=crop"
                      alt="Emprendedor trabajando en soluciones digitales"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 md:hidden bg-[#1C64F2]/10 mix-blend-multiply"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* El Creador */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-4">El creador detrás de Fluxo</h2>
            <p className="mx-auto max-w-3xl text-gray-600">
              Fluxo es el resultado de mi pasión por la tecnología y mi compromiso con ayudar a los emprendedores 
              latinoamericanos a optimizar sus negocios mediante herramientas digitales accesibles y potentes.
            </p>
          </motion.div>

          {/* Team - Founder Only */}
          <div className="flex justify-center mb-24">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 * index + 0.6 }}
                className="max-w-xs group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className={`relative aspect-square overflow-hidden ${member.bgColor}`}>
                  <Image
                    src={member.image || member.fallbackImage || "/placeholder-user.jpg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    onError={(e) => {
                      // @ts-ignore
                      e.target.src = member.fallbackImage || "/placeholder-user.jpg";
                    }}
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                  <p className="mt-2 text-sm text-gray-700">
                    Fundador, desarrollador y visionario detrás de Fluxo. Comprometido con crear soluciones 
                    tecnológicas que impulsen el crecimiento de los negocios latinoamericanos.
                  </p>
                  <div className="mt-4 flex gap-3">
                    {member.socialMedia.linkedin && (
                      <a
                        href={member.socialMedia.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-[#1C64F2] transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    )}
                    {member.socialMedia.twitter && (
                      <a
                        href={member.socialMedia.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-[#1C64F2] transition-colors"
                      >
                        <Twitter className="h-4 w-4" />
                        <span className="sr-only">Twitter</span>
                      </a>
                    )}
                    {member.socialMedia.github && (
                      <a
                        href={member.socialMedia.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-[#1C64F2] transition-colors"
                      >
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Valores */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16 grid gap-8 md:grid-cols-3"
          >
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#1C64F2]/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#1C64F2]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Innovación</h3>
              <p className="text-gray-600">
                Busco constantemente nuevas formas de mejorar la plataforma, adaptándola a las necesidades 
                cambiantes de los negocios latinoamericanos y las nuevas tendencias tecnológicas.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#1C64F2]/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#1C64F2]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Empatía</h3>
              <p className="text-gray-600">
                Comprendo los desafíos únicos que enfrentan los emprendedores, por lo que cada característica 
                de Fluxo se diseña pensando en resolver problemas reales con soluciones intuitivas.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#1C64F2]/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#1C64F2]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Confiabilidad</h3>
              <p className="text-gray-600">
                La seguridad y estabilidad son fundamentales en cada línea de código. Me comprometo a ofrecer 
                una plataforma confiable en la que los negocios puedan apoyarse para sus operaciones diarias.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
