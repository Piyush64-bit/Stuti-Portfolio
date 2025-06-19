"use client"

import { motion } from "framer-motion"

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-20 w-4 h-4 bg-primary/30 rounded-full"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-32 w-6 h-6 bg-purple-500/30 rotate-45"
        animate={{
          y: [0, -30, 0],
          x: [0, -15, 0],
          rotate: [45, 90, 45],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 left-32 w-8 h-8 border-2 border-pink-500/30 rounded-full"
        animate={{
          y: [0, 25, 0],
          x: [0, 20, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-3 h-3 bg-gradient-to-r from-primary to-purple-500 rounded-full"
        animate={{
          y: [0, -40, 0],
          x: [0, -25, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
