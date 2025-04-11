"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let particles: Array<{
      x: number
      y: number
      dx: number
      dy: number
      size: number
    }> = []

    const pseudoRandom = (index: number, max: number = 1) => {
      const value = Math.sin(index * 123.456) * 43758.5453;
      return (value - Math.floor(value)) * max;
    };

    const init = () => {
      particles = []
      const particleCount = 50
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: pseudoRandom(i * 3) * canvas.width,
          y: pseudoRandom(i * 7) * canvas.height,
          dx: (pseudoRandom(i * 11) - 0.5) * 0.5,
          dy: (pseudoRandom(i * 13) - 0.5) * 0.5,
          size: pseudoRandom(i * 17) * 3,
        })
      }
    }

    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.dx
        particle.y += particle.dy

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(28, 100, 242, 0.1)"
        ctx.fill()
      })
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [isClient])

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} />
      <div className="fixed inset-0 pointer-events-none noise-bg" />
      <div className="fixed inset-0 pointer-events-none gradient-bg" />
      <motion.div
        className="fixed inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-[#1C64F2]/10 blur-[120px]" />
        <div className="absolute -bottom-[40%] -right-[20%] w-[70%] h-[70%] rounded-full bg-[#1C64F2]/10 blur-[120px]" />
      </motion.div>
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/50 to-white" />
    </>
  )
}
