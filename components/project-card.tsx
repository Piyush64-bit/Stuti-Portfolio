"use client";

import { ArrowUpRight, Github, Star, Sparkles } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl: string;
  codeUrl: string;
  featured?: boolean;
  status?: boolean;
  index?: number;
}

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  demoUrl,
  codeUrl,
  featured = false,
  index = 0,
  status = false,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={featured ? "md:col-span-2 lg:col-span-1" : ""}
    >
      <Card className="overflow-hidden border-2 border-primary/10 hover:border-primary/30 h-full flex flex-col bg-gradient-to-br from-background to-primary/5 shadow-lg hover:shadow-2xl transition-all duration-500 group">
        <div className="relative aspect-video overflow-hidden">
          <motion.img
            src={image || "/placeholder.svg"}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
            whileHover={{ scale: 1.1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
            <div className="space-y-2">
              <h3 className="font-bold text-xl text-white">{title}</h3>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-white/20 backdrop-blur-sm"
                >
                  <Sparkles className="h-3 w-3 mr-1" />
                  Preview
                </Button>
              </div>
            </div>
          </div>
          {featured && (
            <motion.div
              className="absolute top-4 right-4"
              initial={{ scale: 0, rotate: -30, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 22,
                delay: 0.3,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ repeat: Infinity, duration: 1.8 }}
              >
                <Badge className="bg-green-500 text-white shadow-md shadow-green-400/40 px-2.5 py-0.5 text-xs rounded-full flex items-center">
                  <Star className="h-2.5 w-2.5 mr-1 animate-ping-fast text-white" />
                  Live
                </Badge>
              </motion.div>
            </motion.div>
          )}
          {status && (
            <motion.div
              className="absolute top-4 right-4"
              initial={{ scale: 0, rotate: -30, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 22,
                delay: 0.3,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ repeat: Infinity, duration: 1.8 }}
              >
                <Badge className="bg-red-500 text-white shadow-md shadow-red-400/40 px-2.5 py-0.5 text-xs rounded-full flex items-center">
                  <Star className="h-2.5 w-2.5 mr-1 animate-ping-fast text-white" />
                  Under Process
                </Badge>
              </motion.div>
            </motion.div>
          )}
        </div>

        <CardContent className="flex-grow p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="font-bold text-xl group-hover:text-primary transition-colors duration-300">
              <span className="bg-gradient-to-r from-foreground to-primary bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 group-hover:bg-[length:100%_2px]">
                {title}
              </span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, tagIndex) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
              >
                <Badge
                  variant="secondary"
                  className="bg-gradient-to-r from-primary/10 to-purple-500/10 hover:from-primary/20 hover:to-purple-500/20 transition-all duration-300 border border-primary/20"
                >
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>

        <CardFooter className="border-t border-primary/10 p-4 bg-gradient-to-r from-primary/5 to-purple-500/5">
          <div className="flex gap-3 w-full">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all duration-300 group/btn"
              asChild
            >
              <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
                <ArrowUpRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex-1 hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all duration-300 group/btn"
              asChild
            >
              <Link href={codeUrl} target="_blank" rel="noopener noreferrer">
                Code
                <Github className="ml-1 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
              </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
