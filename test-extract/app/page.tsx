"use client"

import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Twitter,
  Download,
  Calendar,
  Users,
  Code,
  Star,
  Sparkles,
  Zap,
  Heart,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/project-card";
import SkillBadge from "@/components/skill-badge";
import ContactForm from "@/components/contact-form";
import AnimatedText from "@/components/animated-text";
import { ThemeToggle } from "@/components/theme-toggle";
import AnimatedSection from "@/components/animated-section";
import TestimonialCard from "@/components/testimonial-card";
import TimelineItem from "@/components/timeline-item";
import BlogCard from "@/components/blog-card";
import StatCard from "@/components/stat-card";
import ParticlesBackground from "@/components/particles-background";
import FloatingElements from "@/components/floating-elements";
import GradientBlob from "@/components/gradient-blob";
import MagneticButton from "@/components/magnetic-button";
import ScrollProgress from "@/components/scroll-progress";
import dynamic from 'next/dynamic';
import EnhancedCosmicAura from "@/components/enhanced-cosmic-aura";
import EnhancedCursor from "@/components/enhanced-cursor";
import ScrollIndicator from "@/components/scroll-indicator";
import Image from "next/image";
import profileImage from "../public/stuti-profile.jpg";
import vizifyimg from "../public/vizify.png";
import alumconnectimg from "../public/alumconnect.png";
import portfolioimg from "../public/portfolio.png";
import Ai from "../public/AI.jpg";
import Realtimechat from "../public/realtimechat.jpg";
import fitness from "../public/fitnesstracker.jpg";
import Abhishek from "../public/MSAbhishek.png";
import leetcode1 from "../public/twosum.jpg";
import leetcode2 from "../public/pilendrom.jpg";
import leetcode3 from "../public/maximum.jpg";
import Vizlearn from "../public/vizlearn.jpg";
import ShieldHer from "../public/ShieldHer.jpg";
import EventHub from "../public/EventHubPro.jpg";
import NutriScan from "../public/NutriScan.jpg";
import Webdev from "../public/WebDevNotes.jpg";

// Import with SSR disabled
const CosmicBackground = dynamic(
  () => import('@/components/cosmic-background'),
  { 
    ssr: false,
    loading: () => <div className="absolute inset-0 overflow-hidden rounded-full" />
  }
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      <ParticlesBackground />
      <FloatingElements />
      <ScrollProgress />
      <EnhancedCursor />
      <ScrollIndicator />

      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-lg">
        <div className="container flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl group"
          >
            <div className="relative h-10 w-10 bg-gradient-to-br from-primary via-purple-500 to-pink-500 flex items-center justify-center text-primary-foreground rounded-xl transition-all duration-500 group-hover:rounded-2xl group-hover:scale-110 shadow-lg group-hover:shadow-xl">
              <span className="font-bold text-sm">SG</span>
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-500 to-pink-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </div>
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {[
              "About",
              "Projects",
              "Skills",
              "Experience",
              "Blog",
              "Testimonials",
              "Contact",
            ].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-foreground transition-all duration-300 relative group font-medium"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute inset-0 rounded-lg bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <MagneticButton>
              <a
                href="/StutiGupta_Resume.pdf"
                download="StutiGupta_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-white rounded-lg shadow-lg hover:shadow-xl hover:opacity-90 hover:scale-105 transition-all duration-300"
              >
                <Download className="mr-2 h-4 w-4" /> Resume
              </a>
            </MagneticButton>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-32 md:py-40 flex flex-col items-center justify-center text-center relative min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <img
              src="/placeholder.svg?height=1080&width=1920&text=Modern+Workspace"
              alt="Modern workspace background"
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-primary/20"></div>
          </div>
        </div>

        <GradientBlob className="absolute top-20 left-20" />
        <GradientBlob className="absolute bottom-20 right-20" delay={2} />

        <div className="space-y-8 max-w-4xl mx-auto relative z-10">
          <div className="relative">
            {/* Enhanced cosmic aura around the badge */}
            <EnhancedCosmicAura />

            {/* Cosmic background halo around the badge */}
            <div className="absolute -inset-8 rounded-full overflow-hidden">
              <CosmicBackground />
            </div>

            {/* Clean badge without background interference */}
            <div className="relative inline-flex items-center gap-4 rounded-full border-2 border-primary/40 px-10 py-5 text-lg backdrop-blur-md shadow-2xl bg-background/95">
              <Sparkles className="h-7 w-7 text-primary animate-spin relative z-10 drop-shadow-lg" />
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold relative z-10 text-2xl tracking-wide drop-shadow-sm">
                Full Stack Developer
              </span>
              <Zap className="h-7 w-7 text-purple-500 animate-bounce relative z-10 drop-shadow-lg" />
            </div>
          </div>

          <AnimatedText
            text="Crafting   Digital   Experiences   That   Inspire   &   Engage"
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight"
          />

          <div className="relative">
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I build{" "}
              <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent font-semibold">
                accessible
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold">
                responsive
              </span>
              , and{" "}
              <span className="bg-gradient-to-r from-pink-500 to-primary bg-clip-text text-transparent font-semibold">
                performant
              </span>{" "}
              web applications using modern technologies that solve real-world
              problems and deliver exceptional user experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 justify-center pt-8">
            <MagneticButton>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 hover:opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-lg px-8 py-6 rounded-xl"
                asChild
              >
                <Link href="#projects">
                  <Sparkles className="mr-2 h-5 w-5" />
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </MagneticButton>

            <MagneticButton>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary/50 text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-purple-500/10 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg px-8 py-6 rounded-xl backdrop-blur-sm"
                asChild
              >
                <Link href="#contact">
                  <Heart className="mr-2 h-5 w-5" />
                  Contact Me
                </Link>
              </Button>
            </MagneticButton>
          </div>

          <div className="flex justify-center gap-6 pt-8">
            {[
              {
                icon: Github,
                href: "https://github.com/stuticoder123",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/stuticoder1/",
                label: "LinkedIn",
              },
              {
                icon: Twitter,
                href: "https://x.com/stuticoder123",
                label: "Twitter",
              },
              {
                icon: Mail,
                href: "mailto:stuticoder123@gmail.com",
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <MagneticButton key={label}>
                <Link
                  href={href}
                  className="group relative p-3 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-6 w-6 text-primary group-hover:text-purple-500 transition-colors" />
                  <span className="sr-only">{label}</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity blur-lg"></div>
                </Link>
              </MagneticButton>
            ))}
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-float-delay"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-r from-pink-500/20 to-primary/20 rounded-full blur-xl animate-float-slow"></div>
      </section>

      {/* Stats Section */}
      <AnimatedSection className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <StatCard icon={<Code />} value={14} label="Projects Completed" />
          <StatCard icon={<Users />} value={12200} label="Community Members" />
          <StatCard
            icon={<Calendar />}
            value={500}
            label="Coding Questions solved"
          />
          <StatCard icon={<Star />} value={1686} label="GitHub Views" />
        </div>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection id="about" className="container py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight relative">
                  <span className="bg-gradient-to-r from-foreground via-primary to-purple-500 bg-clip-text text-transparent">
                    About Me
                  </span>
                  <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full"></div>
                </h2>
            </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hey, I’m a full-stack developer and tech enthusiast passionate
                about building impactful, user-first web applications.From
                intuitive UIs to optimized backends, I create solutions that
                fuse clean design with strong functionality. Whether it's coding
                scalable systems or leading creative digital outreach, I love
                turning ideas into experiences that work — beautifully and
                efficiently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/10 hover:border-primary/20 transition-colors">
                <h3 className="font-semibold text-lg mb-2 text-primary">
                  Frontend Expertise
                </h3>
                <p className="text-muted-foreground">
                  React, Next.js, TypeScript, and modern CSS frameworks for
                  creating stunning user interfaces.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/10 hover:border-purple-500/20 transition-colors">
                <h3 className="font-semibold text-lg mb-2 text-purple-500">
                  Backend Development
                </h3>
                <p className="text-muted-foreground">
                  Node.js, Express, databases, and API design for robust
                  server-side applications.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
              <div className="flex gap-4">
                {[
                  {
                    icon: Github,
                    href: "https://github.com/stuticoder123",
                    color: "hover:text-gray-600",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/stuticoder1/",
                    color: "hover:text-blue-600",
                  },
                  {
                    icon: Twitter,
                    href: "https://x.com/stuticoder123",
                    color: "hover:text-blue-400",
                  },
                  {
                    icon: Mail,
                    href: "mailto:stuticoder123@gmail.com",
                    color: "hover:text-red-500",
                  },
                ].map(({ icon: Icon, href, color }) => (
                  <MagneticButton key={href}>
                    <Button
                      variant="outline"
                      size="icon"
                      className={`rounded-full hover:bg-primary/10 transition-all duration-300 border-primary/20 hover:border-primary/50 hover:scale-110 ${color}`}
                      asChild
                    >
                      <Link
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon className="h-5 w-5" />
                      </Link>
                    </Button>
                  </MagneticButton>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 to-purple-500/10 shadow-2xl transform hover:scale-105 transition-all duration-500 border border-primary/20">
              <Image
                src={profileImage}
                alt="Stuti Gupta"
                className="object-cover w-full h-full rounded-3xl"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>

            <div className="absolute top-8 -right-8 w-full h-full border-4 border-primary/30 rounded-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-full h-full border-4 border-purple-500/30 rounded-3xl -z-10 animate-pulse"></div>
            <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-r from-primary to-purple-500 rounded-full blur-2xl opacity-50 animate-float"></div>
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection id="projects" className="container py-24 md:py-32">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight relative">
                <span className="bg-gradient-to-r from-foreground via-primary to-purple-500 bg-clip-text text-transparent">
                  Featured Projects
                </span>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full"></div>
              </h2>
            </div>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Check out some of my recent work that showcases my skills and
              expertise in building modern web applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Vizify",
                description:
                  "Your AI-powered academic companion that turns dense research papers into stunning presentations, immersive podcasts, eye-catching visual content, and crisp summaries — effortlessly.",
                tags: ["Next.js", "React", "Tailwind CSS", "API"],
                featured: true,
                image: vizifyimg,
                codeUrl: "https://github.com/stuticoder123/Vizify",
                demoUrl: "https://v0-vizify-zeta-jade.vercel.app",
              },
              {
                title: "Alum Connect",
                description:
                  "It is a dynamic web platform designed to bridge the gap between alumni and students of educational institutions. It fosters a verified, secure, and engaging ecosystem where users can connect, mentor, collaborate, and explore opportunities.",
                tags: ["MERN Stack", "Firebase", "Tailwind CSS", "JWT"],
                image: alumconnectimg,
                featured: true,
                codeUrl: "https://github.com/Piyush64-bit/Alum-Connect",
                demoUrl: "https://alum-connect.netlify.app",
              },
              {
                title: "Portfolio Website",
                description:
                  "A responsive portfolio website showcasing projects and skills with a modern design.",
                tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
                image: portfolioimg,
                featured: true,
                codeUrl: "https://github.com/Piyush64-bit/Stuti-Portfolio",
                demoUrl: "https://stuticoder123.netlify.app",
              },
              {
                title: "Viz Learn",
                description:
                  "Interactive data visualization platform for learners — track your study hours, topics, and growth curves in style.",
                tags: [
                  "React",
                  "D3.js",
                  "Data Visualization",
                  "Learning Analytics",
                ],
                image: Vizlearn,
                featured: true,
                codeUrl: "https://viz-learn.vercel.app/",
                demoUrl: "https://viz-learn.vercel.app/",
              },
              {
                title: "Shield Her",
                description:
                  "Empowering women’s safety with real-time alerts, location tracking, and emergency contact dashboard.",
                tags: ["React", "Node.js", "GeoLocation", "Safety App"],
                image: ShieldHer,
                featured: true,
                codeUrl: "https://shield-her.vercel.app/",
                demoUrl: "https://shield-her.vercel.app/",
              },
              {
                title: "EventHub Pro",
                description:
                  "All-in-one event management dashboard — schedule events, track attendees, and visualize engagement metrics.",
                tags: ["React", "Node.js", "Charts.js", "Event Management"],
                image: EventHub,
                featured: true,
                codeUrl: "https://v0-animated-event-tracker.vercel.app/",
                demoUrl: "https://v0-animated-event-tracker.vercel.app/",
              },

              {
                title: "AI Content Generator",
                description:
                  "An AI-powered application that generates high-quality content for blogs and social media.",
                tags: ["Python", "OpenAI", "React", "FastAPI"],
                image: Ai,
                codeUrl: "#",
                demoUrl: "#",
                status: true, // 🛠️ under working
              },
              {
                title: "Real-time Chat Application",
                description:
                  "A real-time messaging platform with features like typing indicators, read receipts, and file sharing.",
                tags: ["Socket.io", "Node.js", "Express", "MongoDB"],
                image: Realtimechat,
                codeUrl: "#",
                demoUrl: "#",
                status: true,
              },
              {
                title: "Fitness Tracking Dashboard",
                description:
                  "A comprehensive dashboard for tracking workouts, nutrition, and progress with data visualization.",
                tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
                image: fitness,
                codeUrl: "#",
                demoUrl: "#",
                status: true,
              },
              {
                title: "NutriScan",
                description:
                  "Smart nutrition scanner & tracker — scan meals, log macros, and visualize your daily health trends.",
                tags: [
                  "React",
                  "Nutrition API",
                  "Data Visualization",
                  "Health Tech",
                ],
                image: NutriScan,
                codeUrl: "#",
                demoUrl: "#",
                status: true,
              },
              {
                title: "Web Dev Personalized Notes",
                description:
                  "Curated, beginner-friendly web development notes — from HTML basics to React tricks, all in one repo.",
                tags: [
                  "Markdown",
                  "Frontend",
                  "Cheat Sheets",
                  "Learning Resource",
                ],
                image: Webdev,
                codeUrl:
                  "https://github.com/stuticoder123/Web-Development-Notes",
                demoUrl:
                  "https://github.com/stuticoder123/Web-Development-Notes/edit/main/README.md",
                status: true,
              },
            ].map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={
                  typeof project.image === "string"
                    ? project.image
                    : project.image?.src ?? "/placeholder.svg"
                }
                demoUrl={project.demoUrl}
                codeUrl={project.codeUrl}
                featured={project.featured}
                status={project.status}
                index={index}
              />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <MagneticButton>
              <Button
                variant="outline"
                className="border-2 border-primary/50 text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-purple-500/10 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg px-8 py-4 rounded-xl"
                asChild
              >
                <Link href="#all-projects">
                  View All Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </MagneticButton>
          </div>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection id="skills" className="container py-24 md:py-32">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight relative">
                <span className="bg-gradient-to-r from-foreground via-primary to-purple-500 bg-clip-text text-transparent">
                  Skills & Technologies
                </span>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full"></div>
              </h2>
            </div>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              I work with a variety of technologies across the full stack to
              build modern web applications
            </p>
          </div>

          <div className="space-y-16">
            {[
              {
                title: "Frontend Development",
                skills: [
                  { name: "JavaScript", icon: "js" },
                  { name: "TypeScript", icon: "ts" },
                  { name: "React", icon: "react" },
                  { name: "Next.js", icon: "nextjs" },
                  { name: "Tailwind CSS", icon: "tailwind" },
                  { name: "HTML5", icon: "html" },
                  { name: "CSS3", icon: "css" },
                  { name: "Redux", icon: "redux" },
                ],
              },
              {
                title: "Backend Development",
                skills: [
                  { name: "Node.js", icon: "nodejs" },
                  { name: "Express", icon: "express" },
                  { name: "MongoDB", icon: "mongodb" },
                  { name: "PostgreSQL", icon: "postgresql" },
                  { name: "GraphQL", icon: "graphql" },
                  { name: "REST API", icon: "api" },
                  { name: "Firebase", icon: "firebase" },
                  { name: "Prisma", icon: "prisma" },
                ],
              },
              {
                title: "Tools & Others",
                skills: [
                  { name: "Git", icon: "git" },
                  { name: "Docker", icon: "docker" },
                  { name: "AWS", icon: "aws" },
                  { name: "Figma", icon: "figma" },
                  { name: "Jest", icon: "jest" },
                  { name: "CI/CD", icon: "cicd" },
                  { name: "Webpack", icon: "webpack" },
                  { name: "Vercel", icon: "vercel" },
                ],
              },
            ].map((category, categoryIndex) => (
              <div key={category.title} className="space-y-8">
                <h3 className="text-2xl font-semibold text-center bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  {category.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBadge
                      key={skill.name}
                      name={skill.name}
                      icon={skill.icon}
                      index={categoryIndex * 8 + skillIndex}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection id="experience" className="container py-24 md:py-32">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight relative">
                <span className="bg-gradient-to-r from-foreground via-primary to-purple-500 bg-clip-text text-transparent">
                  Work Experience
                </span>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full"></div>
              </h2>
            </div>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              My professional journey and career highlights
            </p>
          </div>

          <div className="relative">
            {/* Enhanced Timeline line */}
            <div className="absolute left-0 md:left-1/2 h-full w-1 bg-gradient-to-b from-primary via-purple-500 to-pink-500 transform -translate-x-1/2 rounded-full shadow-lg"></div>

            <div className="space-y-16">
              {[
                {
                  year: "Feb,2025 - Present",
                  title: "Founder & CEO",
                  company: "Alum Connect",
                  description:
                    "Engineered a high-performance alumni engagement platform – Alum Connect – that bridges mentorship, jobs, and real-time interaction through a sleek and responsive UI.",
                  side: "right" as const,
                },
                {
                  year: "Nov,2024 - May,2025",
                  title: "Digital Outreach Strategist",
                  company: "Secure Her",
                  description:
                    "Analyzed audience insights, optimized posting schedules, and introduced storytelling formats that made safety education more relatable and actionable.",
                  side: "left" as const,
                },
                {
                  year: "Sep,2023 - Dec,2024",
                  title: "DSA and Career Guidance Mentor",
                  company: "Unstop",
                  description:
                    "I’ve dedicated myself to providing completely free mentorship to students from diverse backgrounds — especially those who feel lost or intimidated by coding and career decisions.",
                  side: "right" as const,
                },
                {
                  year: "July,2024 - Oct,2024",
                  title: "Student Program Coordinator",
                  company: "AlgoUniversity",
                  description:
                    "As a Trainee Student Program Coordinator at AlgoUniversity – supported student engagement and coding events, gaining hands-on experience in tech education management.",
                  side: "left" as const,
                },
              ].map((item, index) => (
                <TimelineItem key={item.year} {...item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Blog Section */}
      <AnimatedSection id="blog" className="container py-24 md:py-32">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight relative">
                <span className="bg-gradient-to-r from-foreground via-primary to-purple-500 bg-clip-text text-transparent">
                  Lines of Code, Stories of Growth :
                </span>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full"></div>
              </h2>
            </div>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              A digital diary of logic, learning, and late-night 'aha!' moments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "LeetCode: Two Sum - HashMap Mastery",
                excerpt:
                  "Cracked the classic Two Sum problem using HashMap in O(n) time. A must-know for any dev prepping for interviews!",
                date: "April,2024",
                category: "DSA Practice",
                link: "https://www.linkedin.com/posts/stuticoder1_twosumproblemleetcode-activity-7270743282253451265-6JF1",
                image: leetcode1,
              },
              {
                title: "LeetCode: Palindrome Number - Logic Over Strings",
                excerpt:
                  "Solved without converting to strings — reversed half the number using pure math logic. Efficient and elegant!",
                date: "May,2024",
                category: "DSA Practice",
                link: "https://www.linkedin.com/posts/stuticoder1_palindrome-number-activity-7281022717858893824-i_66",
                image: leetcode2,
              },
              {
                title:
                  "LeetCode: Maximum Candies to K Kids - Binary Search Brilliance",
                excerpt:
                  "Learned the Binary Search on Answer technique through this allocation problem. Leetcode Hard? More like Leetcode Smart!",
                date: "June,2024",
                category: "DSA Practice",
                link: "https://www.linkedin.com/posts/stuticoder1_day6-coding-problemsolving-activity-7306215870823829506-ypJF",
                image: leetcode3,
              },
            ].map((article, index) => (
              <BlogCard
                key={article.title}
                title={article.title}
                excerpt={article.excerpt}
                date={article.date}
                category={article.category}
                image={article.image}
                url={article.link || "#"}
                index={index}
              />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <MagneticButton>
              <Button
                variant="outline"
                className="border-2 border-primary/50 text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-purple-500/10 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg px-8 py-4 rounded-xl"
                asChild
              >
                <Link href="#">
                  View All Articles <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </MagneticButton>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection id="testimonials" className="container py-24 md:py-32">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight relative">
                <span className="bg-gradient-to-r from-foreground via-primary to-purple-500 bg-clip-text text-transparent">
                  Voices that vouch for me
                </span>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full"></div>
              </h2>
            </div>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              The impact I left behind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Stuti ji, your journey is truly inspiring! ✨ Your passion, authenticity, and commitment to meaningful connections have built a thriving community. It’s amazing to see the impact you’re making, and I’m excited for all that you’ll achieve in this new chapter. Keep shining and sharing your light!🌟",
                author: "Piyush Soni",
                position: "Final Year - GIT, Jaipur",
                image: "/images/piyush.jpg",
                rating: 5,
                link: "https://www.linkedin.com/in/piyush64bit",
              },
              {
                quote:
                  "Hey Stuti, it was truly great connecting with you! Your posts are incredibly helpful — I’ve learned so much from them. Also, your WhatsApp channel is a gem for the valuable resources you share. God bless you and keep inspiring!",
                author: "MS Abhishek",
                position: "Campus Mantri, GeeksforGeeks",
                image: "/images/MSAbhishek.png",
                rating: 5,
                link: "https://www.linkedin.com/in/m-s-abhishek22",
              },
              {
                quote:
                  "I just wanted to let you know that the PRs you made today really helped me learn a lot about open source. I wasn’t very familiar with it before, but your contribution sparked my curiosity to explore it further. I found it genuinely exciting — and I’m looking forward to learning more! Thanks for helping me discover something new today.",
                author: "Prem Siddhartha",
                position: "3rd Year - IIT Madras",
                image: "/images/prem.jpg",
                rating: 5,
                link: "https://www.linkedin.com/in/premsiddhartha",
              },
              {
                quote:
                  "I noticed your impressive work in digital outreach and truly appreciate the impact you're making. That’s why I’d love to stay connected — so I can learn more from your journey and experiences.",
                author: "Avinash Pandey",
                position: "Final Year - RTU,Kota",
                image: "/images/avinash.jpg",
                rating: 5,
                link: "https://www.linkedin.com/in/avinash-pandey-6162ab31a",
              },
            ].map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.author}
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                image={testimonial.image}
                rating={testimonial.rating}
                link={testimonial.link}
                index={index}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" className="container py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight relative">
                  <span className="bg-gradient-to-r from-foreground via-primary to-purple-500 bg-clip-text text-transparent">
                    Get In Touch
                  </span>
                  <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full"></div>
                </h2>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Have a project in mind or just want to chat? Feel free to reach
                out. I'm always open to discussing new opportunities and
                interesting ideas.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  text: "stuticoder123@gmail.com",
                  href: "mailto:stuticoder123@gmail.com",
                },
                {
                  icon: Linkedin,
                  text: "linkedin.com/in/stuticoder1",
                  href: "https://www.linkedin.com/in/stuticoder1/",
                },
                {
                  icon: Github,
                  text: "github.com/stuticoder123",
                  href: "https://github.com/stuticoder123",
                },
              ].map(({ icon: Icon, text, href }) => (
                <MagneticButton key={text}>
                  <Link
                    href={href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-purple-500/5 border border-primary/10 hover:border-primary/30 transition-all duration-300 group hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="p-3 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 group-hover:from-primary/20 group-hover:to-purple-500/20 transition-all duration-300">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-lg group-hover:text-primary transition-colors">
                      {text}
                    </span>
                  </Link>
                </MagneticButton>
              ))}
            </div>

            <div className="pt-8">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/10">
                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Let's Build Something Amazing Together
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're a startup looking to build your first product,
                  or an established company wanting to modernize your digital
                  presence, I'm here to help bring your vision to life with
                  cutting-edge technology and thoughtful design.
                </p>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="border-t border-primary/20 py-16 relative overflow-hidden">
        <div className="container flex flex-col md:flex-row justify-between items-center relative z-10">
          <div className="flex items-center gap-3 font-bold text-xl mb-6 md:mb-0 group">
            <div className="relative h-10 w-10 bg-gradient-to-br from-primary via-purple-500 to-pink-500 flex items-center justify-center text-primary-foreground rounded-xl transition-all duration-500 group-hover:rounded-2xl group-hover:scale-110 shadow-lg">
              <span className="font-bold text-sm">SG</span>
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-500 to-pink-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </div>
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved. Made with{" "}
              <Heart className="inline h-4 w-4 text-red-500" /> and a blend of
              dedication.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Github, href: "https://github.com" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/stuticoder1/",
                },
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Mail, href: "mailto:stutigupta@example.com" },
              ].map(({ icon: Icon, href }) => (
                <MagneticButton key={href}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                </MagneticButton>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced floating shapes */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-delay"></div>
      </footer>
    </div>
  );
}