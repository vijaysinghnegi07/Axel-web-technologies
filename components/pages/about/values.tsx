"use client"

import { motion } from "framer-motion"
import { Code, Lightbulb, Users, Shield } from "lucide-react"

export default function Values() {
  const values = [
    {
      icon: <Lightbulb className="h-10 w-10" />,
      title: "Innovation",
      description:
        "We embrace new technologies and creative solutions to solve complex problems and drive business growth.",
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: "Quality",
      description:
        "We are committed to excellence in everything we do, from code quality to user experience and client service.",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Collaboration",
      description:
        "We work closely with our clients as true partners, ensuring their vision and goals are at the center of every solution.",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Integrity",
      description:
        "We maintain transparency and honesty in all interactions, building trust through reliable delivery and ethical practices.",
    },
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
            Our Core <span className="text-gradient">Values</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
            These principles guide our work and define our culture, ensuring we deliver the best possible solutions and
            experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 shadow-sm"
            >
              <div className="text-primary mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
