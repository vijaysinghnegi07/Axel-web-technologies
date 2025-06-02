"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { ArrowRight, Code, Cpu, Database, Globe } from "lucide-react"

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    const parallax = parallaxRef.current

    if (section && parallax) {
      gsap.to(parallax, {
        y: 100,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const words = [
    {
      text: "Innovative",
    },
    {
      text: "IT",
    },
    {
      text: "Solutions",
    },
    {
      text: "for",
    },
    {
      text: "Modern",
    },
    {
      text: "Businesses",
    },
  ]

  const floatingIcons = [
    { icon: <Code className="h-8 w-8" />, delay: 0, x: -20, y: -30 },
    { icon: <Globe className="h-10 w-10" />, delay: 0.2, x: 30, y: 20 },
    { icon: <Cpu className="h-6 w-6" />, delay: 0.4, x: -40, y: 40 },
    { icon: <Database className="h-7 w-7" />, delay: 0.6, x: 50, y: -40 },
  ]

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Parallax Background */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(circle at center, rgba(var(--primary-rgb), 0.15) 0%, transparent 70%)",
        }}
      />

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/40 dark:text-primary/20 z-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
            x: [item.x, item.x + 10, item.x],
            y: [item.y, item.y - 10, item.y],
          }}
          transition={{
            duration: 5,
            delay: item.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{
            left: `${50 + item.x}%`,
            top: `${50 + item.y}%`,
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              <span className="text-gradient">Axel Web</span> Technologies
            </h1>
            <div className="h-20">
              <TypewriterEffect words={words} className="text-2xl md:text-3xl" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[700px] text-muted-foreground text-lg md:text-xl"
          >
            We build cutting-edge digital solutions that transform businesses and create exceptional user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg" className="text-base">
              <Link href="/#contact">
                Get a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
              <Link href="/#portfolio">View Our Work</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            fillOpacity="0.1"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}
