// Add the missing related-case-studies.tsx component
"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export default function RelatedCaseStudies({ currentSlug }: { currentSlug: string }) {
  const relatedCaseStudies = [
    {
      id: 1,
      title: "E-Commerce Platform Redesign for Global Retail Brand",
      slug: "ecommerce-platform-redesign",
      client: "RetailGiant Inc.",
      industry: "Retail",
      services: ["Web Development", "UI/UX Design", "E-commerce"],
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Healthcare Mobile App for Patient Management",
      slug: "healthcare-mobile-app",
      client: "MediCare Solutions",
      industry: "Healthcare",
      services: ["Mobile Development", "UI/UX Design", "Cloud Solutions"],
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Financial Dashboard for Investment Firm",
      slug: "financial-dashboard",
      client: "Global Investments Ltd.",
      industry: "Finance",
      services: ["Web Development", "Data Visualization", "Cloud Solutions"],
      image: "/placeholder.svg",
    },
  ]
    .filter((study) => study.slug !== currentSlug)
    .slice(0, 3)

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
            Related <span className="text-gradient">Case Studies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
            Explore more of our successful projects in similar industries or with related technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedCaseStudies.map((study, index) => (
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
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {study.title}
                      </h3>
                    </Link>
                    <p className="text-muted-foreground text-sm mb-2">
                      Client: <span className="font-medium">{study.client}</span>
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.services.slice(0, 2).map((service, serviceIndex) => (
                        <Badge key={serviceIndex} variant="outline" className="bg-primary/5">
                          {service}
                        </Badge>
                      ))}
                      {study.services.length > 2 && (
                        <Badge variant="outline" className="bg-primary/5">
                          +{study.services.length - 2}
                        </Badge>
                      )}
                    </div>
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="text-primary hover:underline flex items-center text-sm font-medium"
                    >
                      View Case Study
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
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
