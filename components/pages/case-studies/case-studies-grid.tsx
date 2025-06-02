"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

export default function CaseStudiesGrid() {
  const caseStudies = [
    {
      id: 1,
      title: "E-Commerce Platform Redesign for Global Retail Brand",
      slug: "ecommerce-platform-redesign",
      client: "RetailGiant Inc.",
      industry: "Retail",
      services: ["Web Development", "UI/UX Design", "E-commerce"],
      image: "/placeholder.svg",
      results: ["42% increase in conversion rate", "65% reduction in page load time"],
    },
    {
      id: 2,
      title: "Healthcare Mobile App for Patient Management",
      slug: "healthcare-mobile-app",
      client: "MediCare Solutions",
      industry: "Healthcare",
      services: ["Mobile Development", "UI/UX Design", "Cloud Solutions"],
      image: "/placeholder.svg",
      results: ["30% reduction in appointment no-shows", "85% patient satisfaction rate"],
    },
    {
      id: 3,
      title: "Financial Dashboard for Investment Firm",
      slug: "financial-dashboard",
      client: "Global Investments Ltd.",
      industry: "Finance",
      services: ["Web Development", "Data Visualization", "Cloud Solutions"],
      image: "/placeholder.svg",
      results: ["50% faster data analysis", "28% increase in client retention"],
    },
    {
      id: 4,
      title: "Learning Management System for University",
      slug: "learning-management-system",
      client: "State University",
      industry: "Education",
      services: ["Web Development", "UI/UX Design", "Custom Software"],
      image: "/placeholder.svg",
      results: ["35% improvement in student engagement", "40% reduction in administrative tasks"],
    },
    {
      id: 5,
      title: "IoT Platform for Smart Manufacturing",
      slug: "iot-platform-manufacturing",
      client: "TechManufacture Inc.",
      industry: "Technology",
      services: ["Custom Software", "Cloud Solutions", "IoT Development"],
      image: "/placeholder.svg",
      results: ["22% increase in production efficiency", "18% reduction in maintenance costs"],
    },
    {
      id: 6,
      title: "Digital Marketing Campaign for Retail Chain",
      slug: "digital-marketing-campaign",
      client: "FashionRetail Co.",
      industry: "Retail",
      services: ["Digital Marketing", "Content Strategy", "Analytics"],
      image: "/placeholder.svg",
      results: ["45% increase in online sales", "120% ROI on marketing spend"],
    },
  ]

  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full group">
                <CardContent className="p-0">
                  <Link href={`/case-studies/${study.slug}`} className="block overflow-hidden">
                    <Image
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      width={400}
                      height={225}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </Link>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">{study.industry}</Badge>
                    </div>
                    <Link href={`/case-studies/${study.slug}`}>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {study.title}
                      </h3>
                    </Link>
                    <p className="text-muted-foreground text-sm mb-2">
                      Client: <span className="font-medium">{study.client}</span>
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.services.map((service, serviceIndex) => (
                        <Badge key={serviceIndex} variant="outline" className="bg-primary/5">
                          {service}
                        </Badge>
                      ))}
                    </div>
                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-sm">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start text-sm">
                            <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="ghost" className="p-0 h-auto text-primary" asChild>
                      <Link href={`/case-studies/${study.slug}`}>
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
