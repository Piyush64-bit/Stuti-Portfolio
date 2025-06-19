"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import AnimatedCounter from "./animated-counter"
import type { ReactNode } from "react"

interface StatCardProps {
  icon: ReactNode
  value: number
  label: string
}

export default function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Card className="border-2 border-primary/10 hover:border-primary/30 bg-gradient-to-br from-background to-primary/5 shadow-lg hover:shadow-2xl transition-all duration-500">
        <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
          <motion.div
            className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/10 to-purple-500/10 flex items-center justify-center text-primary group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-purple-500/20 transition-all duration-300"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            {icon}
          </motion.div>
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              <AnimatedCounter value={value} />
              <span>+</span>
            </div>
            <p className="text-muted-foreground font-medium">{label}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
