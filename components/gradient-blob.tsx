"use client"

import { motion } from "framer-motion"

interface GradientBlobProps {
  className?: string
  delay?: number
}

export default function GradientBlob({ className = "", delay = 0 }: GradientBlobProps) {
  return (
    <motion.div
      className={`w-64 h-64 bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay,
      }}
    />
  )
}
