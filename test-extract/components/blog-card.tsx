"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  category: string
  image: string
  url: string
  index?: number
}

export default function BlogCard({ title, excerpt, date, category, image, url, index = 0 }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group"
    >
      <Link href={url} className="block h-full">
        <Card className="overflow-hidden border-2 border-primary/10 hover:border-primary/30 h-full bg-gradient-to-br from-background to-primary/5 shadow-lg hover:shadow-2xl transition-all duration-500">
          <div className="aspect-video overflow-hidden relative">
            <motion.div whileHover={{ scale: 1.05 }} className="w-full h-full">
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <CardContent className="p-6 space-y-4">
            <div className="flex justify-between items-center">
              <Badge
                variant="outline"
                className="bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary border-primary/30"
              >
                {category}
              </Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                {date}
              </div>
            </div>
            <h3 className="font-bold text-xl line-clamp-2 group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <p className="text-muted-foreground line-clamp-3 leading-relaxed">{excerpt}</p>
            <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all duration-300">
              <span>Read more</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}
