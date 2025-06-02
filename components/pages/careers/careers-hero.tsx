"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CareersHero() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Join Our <span className="text-gradient">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-[800px]">
            We're looking for talented individuals who are passionate about technology and innovation to help us build
            amazing digital experiences.
          </p>
          <Button asChild size="lg">
            <Link href="#job-listings">
              View Open Positions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
