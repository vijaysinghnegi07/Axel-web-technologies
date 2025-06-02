"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ClientLogos() {
  const clients = [
    { name: "Client 1", logo: "/placeholder-logo.svg" },
    { name: "Client 2", logo: "/placeholder-logo.svg" },
    { name: "Client 3", logo: "/placeholder-logo.svg" },
    { name: "Client 4", logo: "/placeholder-logo.svg" },
    { name: "Client 5", logo: "/placeholder-logo.svg" },
    { name: "Client 6", logo: "/placeholder-logo.svg" },
    { name: "Client 7", logo: "/placeholder-logo.svg" },
    { name: "Client 8", logo: "/placeholder-logo.svg" },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
            We've had the privilege of working with some amazing companies across various industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={150}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
