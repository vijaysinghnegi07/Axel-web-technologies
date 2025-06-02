"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Technologies() {
  const techCategories = [
    {
      title: "Frontend",
      technologies: [
        { name: "React", logo: "/placeholder-logo.svg" },
        { name: "Vue.js", logo: "/placeholder-logo.svg" },
        { name: "Angular", logo: "/placeholder-logo.svg" },
        { name: "Next.js", logo: "/placeholder-logo.svg" },
      ],
    },
    {
      title: "Backend",
      technologies: [
        { name: "Node.js", logo: "/placeholder-logo.svg" },
        { name: "Python", logo: "/placeholder-logo.svg" },
        { name: "Java", logo: "/placeholder-logo.svg" },
        { name: "PHP", logo: "/placeholder-logo.svg" },
      ],
    },
    {
      title: "Mobile",
      technologies: [
        { name: "React Native", logo: "/placeholder-logo.svg" },
        { name: "Flutter", logo: "/placeholder-logo.svg" },
        { name: "Swift", logo: "/placeholder-logo.svg" },
        { name: "Kotlin", logo: "/placeholder-logo.svg" },
      ],
    },
    {
      title: "Database",
      technologies: [
        { name: "MongoDB", logo: "/placeholder-logo.svg" },
        { name: "PostgreSQL", logo: "/placeholder-logo.svg" },
        { name: "MySQL", logo: "/placeholder-logo.svg" },
        { name: "Firebase", logo: "/placeholder-logo.svg" },
      ],
    },
    {
      title: "Cloud",
      technologies: [
        { name: "AWS", logo: "/placeholder-logo.svg" },
        { name: "Azure", logo: "/placeholder-logo.svg" },
        { name: "Google Cloud", logo: "/placeholder-logo.svg" },
        { name: "Vercel", logo: "/placeholder-logo.svg" },
      ],
    },
    {
      title: "DevOps",
      technologies: [
        { name: "Docker", logo: "/placeholder-logo.svg" },
        { name: "Kubernetes", logo: "/placeholder-logo.svg" },
        { name: "Jenkins", logo: "/placeholder-logo.svg" },
        { name: "GitHub Actions", logo: "/placeholder-logo.svg" },
      ],
    },
  ]

  return (
    <section className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Technologies We <span className="text-gradient">Work With</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
            We stay at the forefront of technology to deliver cutting-edge solutions for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 text-center">{category.title}</h3>
              <div className="grid grid-cols-2 gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex flex-col items-center p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Image
                      src={tech.logo || "/placeholder.svg"}
                      alt={tech.name}
                      width={60}
                      height={60}
                      className="h-12 w-auto object-contain mb-3"
                    />
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
