// Add the missing case-studies-hero.tsx component
"use client"

import { motion } from "framer-motion"

export default function CaseStudiesHero() {
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
            Case <span className="text-gradient">Studies</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-[800px]">
            Explore our detailed case studies showcasing successful projects and the results we've achieved for our
            clients.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
