"use client"

import { motion } from "framer-motion"

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-full">
      {/* Main gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/30 via-pink-500/20 to-primary/20"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(147, 51, 234, 0.2), rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.2), rgba(147, 51, 234, 0.2))",
            "linear-gradient(90deg, rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.2), rgba(147, 51, 234, 0.2), rgba(168, 85, 247, 0.3))",
            "linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(147, 51, 234, 0.2), rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.2))",
            "linear-gradient(180deg, rgba(147, 51, 234, 0.2), rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.2), rgba(147, 51, 234, 0.2))",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Floating orbs */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 20 - 10],
            y: [0, Math.random() * 20 - 10],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Rotating border glow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(147, 51, 234, 0.5), rgba(168, 85, 247, 0.8), rgba(236, 72, 153, 0.5), rgba(147, 51, 234, 0.5))",
          filter: "blur(2px)",
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Shimmer wave */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
        }}
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
