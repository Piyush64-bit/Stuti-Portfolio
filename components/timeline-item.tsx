"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"

interface TimelineItemProps {
  year: string
  title: string
  company: string
  description: string
  side: "left" | "right"
  index?: number
}

export default function TimelineItem({ year, title, company, description, side, index = 0 }: TimelineItemProps) {
  return (
    <div className={`flex flex-col md:flex-row ${side === "right" ? "md:flex-row-reverse" : ""} items-center group`}>
      <motion.div
        className="md:w-1/2 p-6"
        initial={{ opacity: 0, x: side === "right" ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <motion.div
          className="bg-gradient-to-br from-background to-primary/5 border border-primary/10 hover:border-primary/30 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105"
          whileHover={{ y: -5 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="h-5 w-5 text-primary" />
            <span className="text-primary font-semibold">{year}</span>
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-lg font-medium text-purple-500 mb-4">{company}</p>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </motion.div>
      </motion.div>

      <motion.div
        className="mx-auto md:mx-0 flex flex-col items-center relative z-10"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
      >
        <motion.div
          className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-purple-500 border-4 border-background flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow"
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.3 }}
        >
          <Briefcase className="h-7 w-7 text-white" />
        </motion.div>
      </motion.div>

      <div className="md:w-1/2 p-6 hidden md:block"></div>
    </div>
  )
}
