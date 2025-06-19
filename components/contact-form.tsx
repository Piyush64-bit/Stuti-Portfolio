"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"

export default function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    })

    setIsSubmitting(false)
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-card border rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Send Me a Message</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Input
              id="name"
              name="name"
              placeholder="Your Name"
              required
              className="bg-background focus:border-primary"
              value={formState.name}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="bg-background focus:border-primary"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Input
              id="subject"
              name="subject"
              placeholder="Subject"
              required
              className="bg-background focus:border-primary"
              value={formState.subject}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Textarea
              id="message"
              name="message"
              placeholder="Your Message"
              required
              className="min-h-[150px] bg-background focus:border-primary"
              value={formState.message}
              onChange={handleChange}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-purple-500 hover:opacity-90 transition-opacity"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </motion.div>
  )
}
