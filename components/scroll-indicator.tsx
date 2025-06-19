"use client"

import { motion } from "framer-motion"
import { ChevronDown, MousePointer2 } from "lucide-react"
import { useEffect, useState } from "react"

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      // Hide the indicator after scrolling 50% of the viewport height
      setIsVisible(scrollPosition < windowHeight * 0.5)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed bottom-6 inset-x-0 z-40 flex flex-col items-center gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      {/* Scroll instruction text */}
      <motion.div
        className="bg-background/90 backdrop-blur-md border border-primary/20 rounded-full px-6 py-3 shadow-lg"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-3 text-sm font-medium">
          <MousePointer2 className="h-4 w-4 text-primary" />
          <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Scroll to explore more
          </span>
        </div>
      </motion.div>

      {/* Animated scroll button */}
      <motion.button
        onClick={scrollToNext}
        className="group relative p-4 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 backdrop-blur-md shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-primary group-hover:text-purple-500 transition-colors" />
        </motion.div>

        {/* Ripple effect */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-primary/30"
          animate={{
            scale: [1, 1.5, 2],
            opacity: [0.5, 0.2, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeOut",
          }}
        />

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity blur-lg"></div>
      </motion.button>

      {/* Additional visual cues */}
      <motion.div
        className="flex flex-col items-center gap-2"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-1 h-1 bg-primary rounded-full"
            animate={{
              scale: [0.5, 1, 0.5],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}
