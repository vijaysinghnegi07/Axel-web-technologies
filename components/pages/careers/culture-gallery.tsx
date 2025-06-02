// Add the missing culture-gallery.tsx component
"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function CultureGallery() {
  const images = [
    { src: "/placeholder.svg", alt: "Team collaboration" },
    { src: "/placeholder.svg", alt: "Office environment" },
    { src: "/placeholder.svg", alt: "Team building event" },
    { src: "/placeholder.svg", alt: "Company retreat" },
    { src: "/placeholder.svg", alt: "Hackathon" },
    { src: "/placeholder.svg", alt: "Office celebration" },
  ]

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Our <span className="text-gradient">Culture</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
            Get a glimpse of life at Axel Web Technologies and the amazing team you'll be working with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg aspect-video group"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
