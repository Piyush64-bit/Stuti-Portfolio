"use client"

import { motion } from "framer-motion"
import { useMemo } from 'react';

export default function CosmicBackground() {
  // Generate stars only once on the client side
  const stars = useMemo(() => {
    if (typeof window === 'undefined') return [];
    
    return Array.from({ length: 50 }, () => ({
      width: Math.random() * 4,
      height: Math.random() * 4,
      left: Math.random() * 100,
      top: Math.random() * 100,
    }));
  }, []);

  // Don't render on server
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden rounded-full">
      {/* Enhanced cosmic nebula effect with more vibrant colors */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
    radial-gradient(circle at 20% 30%, rgba(147, 51, 234, 0.6) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.7) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.4) 0%, transparent 50%),
    radial-gradient(circle at 70% 20%, rgba(59, 130, 246, 0.6) 0%, transparent 50%),
    linear-gradient(45deg, rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.5), rgba(236, 72, 153, 0.2))
  `,
        }}
        animate={{
          background: [
            `
      radial-gradient(circle at 20% 30%, rgba(147, 51, 234, 0.6) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.7) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.4) 0%, transparent 50%),
      radial-gradient(circle at 70% 20%, rgba(59, 130, 246, 0.6) 0%, transparent 50%),
      linear-gradient(45deg, rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.5), rgba(236, 72, 153, 0.2))
    `,
            `
      radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.5) 0%, transparent 50%),
      radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.8) 0%, transparent 50%),
      radial-gradient(circle at 60% 40%, rgba(236, 72, 153, 0.5) 0%, transparent 50%),
      radial-gradient(circle at 30% 60%, rgba(59, 130, 246, 0.7) 0%, transparent 50%),
      linear-gradient(135deg, rgba(59, 130, 246, 0.5), rgba(236, 72, 153, 0.2), rgba(147, 51, 234, 0.3))
    `,
            `
      radial-gradient(circle at 50% 80%, rgba(59, 130, 246, 0.7) 0%, transparent 50%),
      radial-gradient(circle at 30% 20%, rgba(168, 85, 247, 0.5) 0%, transparent 50%),
      radial-gradient(circle at 70% 60%, rgba(236, 72, 153, 0.6) 0%, transparent 50%),
      radial-gradient(circle at 90% 40%, rgba(59, 130, 246, 0.8) 0%, transparent 50%),
      linear-gradient(225deg, rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.6), rgba(168, 85, 247, 0.2))
    `,
          ],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Enhanced twinkling stars with more variety */}
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: star.width,
            height: star.height,
            left: `${star.left}%`,
            top: `${star.top}%`,
            filter: "drop-shadow(0 0 4px rgba(255, 255, 255, 0.8))",
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
            filter: [
              "drop-shadow(0 0 4px rgba(255, 255, 255, 0.8))",
              "drop-shadow(0 0 8px rgba(147, 51, 234, 0.8))",
              "drop-shadow(0 0 4px rgba(255, 255, 255, 0.8))",
            ],
          }}
          transition={{
            duration: 1 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Multiple energy wave rings with different speeds */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-primary/40"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.8, 0.4],
          borderColor: [
            "rgba(59, 130, 246, 0.6)",
            "rgba(168, 85, 247, 0.8)",
            "rgba(236, 72, 153, 0.6)",
            "rgba(59, 130, 246, 0.6)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute inset-0 rounded-full border border-purple-500/50"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.7, 0.3],
          borderColor: [
            "rgba(168, 85, 247, 0.5)",
            "rgba(236, 72, 153, 0.7)",
            "rgba(59, 130, 246, 0.5)",
            "rgba(168, 85, 247, 0.5)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      <motion.div
        className="absolute inset-0 rounded-full border border-pink-500/30"
        animate={{
          scale: [1, 1.7, 1],
          opacity: [0.2, 0.6, 0.2],
          borderColor: [
            "rgba(236, 72, 153, 0.3)",
            "rgba(59, 130, 246, 0.6)",
            "rgba(147, 51, 234, 0.4)",
            "rgba(236, 72, 153, 0.3)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Enhanced plasma effect with multiple layers */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(59, 130, 246, 0.6), rgba(168, 85, 247, 0.6), rgba(236, 72, 153, 0.4), rgba(59, 130, 246, 0.6))",
          filter: "blur(3px)",
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "conic-gradient(from 180deg, rgba(236, 72, 153, 0.3), rgba(59, 130, 246, 0.5), rgba(147, 51, 234, 0.3), rgba(168, 85, 247, 0.4), rgba(236, 72, 153, 0.3))",
          filter: "blur(2px)",
        }}
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Pulsing energy orbs */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute w-3 h-3 rounded-full"
          style={{
            background: `radial-gradient(circle, ${
              [
                "rgba(59, 130, 246, 0.9)",
                "rgba(147, 51, 234, 0.8)",
                "rgba(59, 130, 246, 0.9)",
                "rgba(236, 72, 153, 0.8)",
              ][i % 4]
            }, transparent)`,
            left: `${20 + i * 10}%`,
            top: `${20 + i * 8}%`,
            filter: "blur(1px)",
          }}
          animate={{
            scale: [0.5, 2, 0.5],
            opacity: [0.3, 0.9, 0.3],
            x: [0, Math.sin(i) * 20, 0],
            y: [0, Math.cos(i) * 20, 0],
          }}
          transition={{
            duration: 2 + i * 0.3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Lightning-like energy streaks */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`streak-${i}`}
          className="absolute w-0.5 h-8 bg-gradient-to-t from-transparent via-white to-transparent"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transformOrigin: "center",
            filter: "drop-shadow(0 0 2px rgba(255, 255, 255, 0.8))",
          }}
          animate={{
            opacity: [0, 1, 0],
            scaleY: [0, 1, 0],
            rotate: [0, Math.random() * 360],
          }}
          transition={{
            duration: 0.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 4,
            repeatDelay: 2 + Math.random() * 3,
          }}
        />
      ))}

      {/* Shimmer wave with enhanced visibility */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)",
          filter: "blur(1px)",
        }}
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          repeatDelay: 1,
        }}
      />

      {/* Rotating particle trail */}
      <motion.div
        className="absolute inset-0"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: "50%",
              top: "50%",
              transformOrigin: `0 ${40 + i * 5}px`,
              filter: "drop-shadow(0 0 2px rgba(147, 51, 234, 0.8))",
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 1,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.1,
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}