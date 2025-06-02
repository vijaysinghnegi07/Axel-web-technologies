"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Globe, Smartphone, Palette, Database, Code, LineChart } from "lucide-react"

export default function BlogCategories() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Posts", icon: <Globe className="h-5 w-5" /> },
    { id: "web", name: "Web Development", icon: <Code className="h-5 w-5" /> },
    { id: "mobile", name: "Mobile Apps", icon: <Smartphone className="h-5 w-5" /> },
    { id: "design", name: "UI/UX Design", icon: <Palette className="h-5 w-5" /> },
    { id: "cloud", name: "Cloud Solutions", icon: <Database className="h-5 w-5" /> },
    { id: "marketing", name: "Digital Marketing", icon: <LineChart className="h-5 w-5" /> },
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={activeCategory === category.id ? "default" : "outline"}
              className="flex items-center gap-2"
              onClick={() => setActiveCategory(category.id)}
            >
              {category.icon}
              {category.name}
            </Button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
