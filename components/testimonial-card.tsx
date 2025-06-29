"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Star, Quote, ExternalLink } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  position: string
  image: string
  rating: number
  link?: string
  index?: number
}

export default function TestimonialCard({
  quote,
  author,
  position,
  image,
  rating,
  link,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group"
    >
      <Card className="overflow-hidden border-2 border-primary/10 hover:border-primary/30 h-full bg-gradient-to-br from-background to-primary/5 shadow-lg hover:shadow-2xl transition-all duration-500">
        <CardContent className="p-8 space-y-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary/50 transition-colors">
                <img
                  src={image || "/placeholder.svg"}
                  alt={author}
                  className="h-full w-full object-cover"
                />

                {/* Hover Overlay with Link */}
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-black/40 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center text-xs text-center px-2 transition-opacity duration-300"
                  >
                    Profile&nbsp;
                    <ExternalLink className="w-3 h-3 inline" />
                  </a>
                )}
              </div>

              <div>
                <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{author}</h4>
                <p className="text-muted-foreground">{position}</p>
              </div>
            </div>

            <div className="flex">
              {Array.from({ length: rating }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + i * 0.1 }}
                >
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
            <p className="text-muted-foreground leading-relaxed pl-6 italic group-hover:text-foreground transition-colors">
              "{quote}"
            </p>
            <Quote className="absolute -bottom-2 -right-2 h-8 w-8 text-primary/20 rotate-180" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
