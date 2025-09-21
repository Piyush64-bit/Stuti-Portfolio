"use client"

import { motion } from "framer-motion"
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiAmazonwebservices,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiGraphql,
  SiFirebase,
  SiPrisma,
  SiFigma,
  SiJest,
  SiGithubactions,
  SiWebpack,
  SiVercel,
} from "react-icons/si"
import { Code } from "lucide-react"

interface SkillBadgeProps {
  name: string
  icon: string
  index?: number
}

export default function SkillBadge({ name, icon, index = 0 }: SkillBadgeProps) {
  const getIcon = () => {
    const iconMap = {
      js: SiJavascript,
      ts: SiTypescript,
      react: SiReact,
      nextjs: SiNextdotjs,
      nodejs: SiNodedotjs,
      express: SiExpress,
      mongodb: SiMongodb,
      postgresql: SiPostgresql,
      tailwind: SiTailwindcss,
      git: SiGit,
      docker: SiDocker,
      aws: SiAmazonwebservices,
      html: SiHtml5,
      css: SiCss3,
      redux: SiRedux,
      graphql: SiGraphql,
      firebase: SiFirebase,
      prisma: SiPrisma,
      figma: SiFigma,
      jest: SiJest,
      cicd: SiGithubactions,
      webpack: SiWebpack,
      vercel: SiVercel,
    }

    const IconComponent = iconMap[icon as keyof typeof iconMap] || Code
    return <IconComponent className="h-8 w-8" />
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -8, scale: 1.1, rotateY: 10 }}
      className="group relative"
    >
      <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-to-br from-background to-primary/5 border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-2xl transition-all duration-500 backdrop-blur-sm">
        <div className="relative">
          <div className="text-primary group-hover:text-purple-500 transition-colors duration-300 transform group-hover:scale-110">
            {getIcon()}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
        </div>
        <span className="text-sm font-semibold text-center group-hover:text-primary transition-colors duration-300">
          {name}
        </span>
      </div>
    </motion.div>
  )
}
