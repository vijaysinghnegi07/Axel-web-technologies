"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutHero() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              About <span className="text-gradient">Axel Web</span> Technologies
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're a team of passionate tech enthusiasts dedicated to creating innovative digital solutions that help
              businesses thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-primary"></div>
                <span className="text-lg font-medium">Founded in 2014</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-primary"></div>
                <span className="text-lg font-medium">Global Presence</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-primary"></div>
                <span className="text-lg font-medium">Award Winning</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/20 to-primary/0 blur-xl opacity-50"></div>
              <Image
                src="/placeholder.svg"
                alt="About Axel Web Technologies"
                width={600}
                height={400}
                className="rounded-xl relative z-10 w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
