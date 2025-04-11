"use client"

import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { AnimatedBlob } from "@/components/animated-blob"
import Image from "next/image"
import testimonialsData from "@/data/testimonials.json"

// Definición del tipo para los testimonios
type Testimonial = {
  _id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
  image: string
}

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const testimonials = testimonialsData.testimonials as Testimonial[]

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 relative overflow-hidden" ref={ref}>
      {/* Animated background */}
      <div className="absolute inset-0 bg-white pointer-events-none" />
      <AnimatedBlob className="absolute top-0 -right-64 w-96 h-96 bg-[#1C64F2]/5" />
      <AnimatedBlob className="absolute bottom-0 -left-64 w-96 h-96 bg-[#1C64F2]/5" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            className="flex flex-col items-center space-y-3 sm:space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="rounded-full border-[#1C64F2] bg-[#1C64F2]/10 px-3 py-1 text-xs text-[#1C64F2]"
            >
              Nuestros Clientes
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold md:text-4xl">Lo que dicen nuestros clientes</h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Descubre cómo FLUXO está ayudando a empresas como la tuya.
            </p>
          </motion.div>

          <div className="mx-auto mt-8 sm:mt-12 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial._id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
                }}
                className="rounded-xl sm:rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-4 sm:p-6 shadow-sm transition-all"
              >
                <div className="space-y-3 sm:space-y-4">
                  <motion.div
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                  >
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <div className="font-medium text-sm sm:text-base">{testimonial.name}</div>
                      <div className="text-xs sm:text-sm text-gray-500">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </motion.div>
                  
                  <div className="text-gray-600 text-xs sm:text-sm">
                    <p>{testimonial.content}</p>
                  </div>
                  
                  <motion.div
                    className="flex"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: i * 0.1 + 0.6 }}
                  >
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: i * 0.1,
                          type: "spring",
                          stiffness: 200,
                          damping: 10,
                        }}
                      >
                        <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
