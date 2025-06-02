"use client"

import { motion } from "framer-motion"

export default function ContactHero() {
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
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-[800px]">
            Have a project in mind or want to learn more about our services? We'd love to hear from you and discuss how
            we can help.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
