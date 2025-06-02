// Add the missing case-studies-filter.tsx component
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Globe, Smartphone, Palette, Database, Code, LineChart } from "lucide-react"

export default function CaseStudiesFilter() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [activeIndustry, setActiveIndustry] = useState("all")

  const categories = [
    { id: "all", name: "All Categories", icon: <Globe className="h-5 w-5" /> },
    { id: "web", name: "Web Development", icon: <Code className="h-5 w-5" /> },
    { id: "mobile", name: "Mobile Apps", icon: <Smartphone className="h-5 w-5" /> },
    { id: "design", name: "UI/UX Design", icon: <Palette className="h-5 w-5" /> },
    { id: "cloud", name: "Cloud Solutions", icon: <Database className="h-5 w-5" /> },
    { id: "marketing", name: "Digital Marketing", icon: <LineChart className="h-5 w-5" /> },
  ]

  const industries = [
    { id: "all", name: "All Industries" },
    { id: "retail", name: "Retail & E-commerce" },
    { id: "healthcare", name: "Healthcare" },
    { id: "finance", name: "Finance" },
    { id: "education", name: "Education" },
    { id: "technology", name: "Technology" },
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-medium mb-4 text-center">Filter by Service</h3>
            <div className="flex flex-wrap justify-center gap-4">
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
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-medium mb-4 text-center">Filter by Industry</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry, index) => (
                <Button
                  key={index}
                  variant={activeIndustry === industry.id ? "default" : "outline"}
                  onClick={() => setActiveIndustry(industry.id)}
                >
                  {industry.name}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
