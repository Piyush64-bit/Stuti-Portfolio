"use client"

import { motion } from "framer-motion"

export default function EnhancedCosmicAura() {
  return (
    <div className="absolute -inset-16 pointer-events-none">
      {/* Outer cosmic ring with enhanced visibility */}
      <motion.div
        className="absolute inset-0 rounded-full border-4 border-primary/20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.8, 0.3],
          borderColor: [
            "rgba(59, 130, 246, 0.5)",
            "rgba(168, 85, 247, 0.8)",
            "rgba(59, 130, 246, 0.8)",
            "rgba(147, 51, 234, 0.4)",
            "rgba(59, 130, 246, 0.5)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Floating cosmic particles around the badge */}
      {Array.from({ length: 20 }).map((_, i) => {
        const angle = (i / 20) * 2 * Math.PI
        const radius = 80 + Math.random() * 40
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius

        return (
          <motion.div
            key={`cosmic-particle-${i}`}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: `radial-gradient(circle, ${
                ["#3b82f6", "#9333ea", "#3b82f6", "#ec4899"][i % 4]
              }, transparent)`,
              left: "50%",
              top: "50%",
              filter: "blur(0.5px) drop-shadow(0 0 4px currentColor)",
            }}
            animate={{
              x: [x, x + Math.sin(i) * 20, x],
              y: [y, y + Math.cos(i) * 20, y],
              opacity: [0.4, 1, 0.4],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.1,
            }}
          />
        )
      })}

      {/* Energy burst effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(168, 85, 247, 0.2) 30%, transparent 70%)",
        }}
        animate={{
          scale: [0.8, 1.5, 0.8],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
          filter: "blur(2px)",
        }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />

      {/* Spiral energy streams */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={`spiral-${i}`}
          className="absolute inset-0"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <motion.div
            className="absolute w-1 h-20 bg-gradient-to-t from-transparent via-primary/60 to-transparent rounded-full"
            style={{
              left: "50%",
              top: "50%",
              transformOrigin: `0 ${60 + i * 20}px`,
              filter: "blur(1px)",
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}
