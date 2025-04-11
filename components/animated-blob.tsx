"use client"

import { motion } from "framer-motion"

export function AnimatedBlob({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`blob ${className}`}
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 20,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
      }}
    />
  )
}
