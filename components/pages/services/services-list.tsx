"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Code,
  Database,
  Globe,
  Layers,
  Smartphone,
  Palette,
  LineChart,
  Cloud,
  Server,
  Lock,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function ServicesList() {
  const [activeTab, setActiveTab] = useState("all")

  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom websites and web applications built with the latest technologies.",
      icon: <Globe className="h-10 w-10" />,
      category: "development",
      features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "CMS Integration"],
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: <Smartphone className="h-10 w-10" />,
      category: "development",
      features: ["Native iOS & Android", "Cross-platform Solutions", "App Store Optimization", "Push Notifications"],
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive and engaging digital experiences.",
      icon: <Palette className="h-10 w-10" />,
      category: "design",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    },
    {
      id: 4,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services for your business needs.",
      icon: <Cloud className="h-10 w-10" />,
      category: "infrastructure",
      features: ["AWS & Azure", "Cloud Migration", "Serverless Architecture", "DevOps"],
    },
    {
      id: 5,
      title: "Custom Software",
      description: "Tailored software solutions designed to address your specific business challenges.",
      icon: <Code className="h-10 w-10" />,
      category: "development",
      features: ["Enterprise Applications", "API Development", "Legacy System Integration", "Maintenance & Support"],
    },
    {
      id: 6,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to grow your online presence and drive conversions.",
      icon: <LineChart className="h-10 w-10" />,
      category: "marketing",
      features: ["SEO & SEM", "Content Marketing", "Social Media", "Analytics & Reporting"],
    },
    {
      id: 7,
      title: "E-commerce Solutions",
      description: "End-to-end e-commerce platforms with secure payment processing and inventory management.",
      icon: <Layers className="h-10 w-10" />,
      category: "development",
      features: ["Shopping Cart", "Payment Gateway", "Inventory Management", "Customer Portal"],
    },
    {
      id: 8,
      title: "Backend Development",
      description: "Robust server-side applications and APIs that power your digital products.",
      icon: <Server className="h-10 w-10" />,
      category: "development",
      features: ["API Development", "Database Design", "Microservices", "Performance Optimization"],
    },
    {
      id: 9,
      title: "Cybersecurity",
      description: "Protect your digital assets with comprehensive security solutions and best practices.",
      icon: <Lock className="h-10 w-10" />,
      category: "infrastructure",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Incident Response"],
    },
    {
      id: 10,
      title: "Performance Optimization",
      description: "Improve the speed and efficiency of your web and mobile applications.",
      icon: <Zap className="h-10 w-10" />,
      category: "development",
      features: ["Load Testing", "Code Optimization", "Caching Strategies", "CDN Implementation"],
    },
    {
      id: 11,
      title: "Database Solutions",
      description: "Design, implementation, and optimization of database systems for your applications.",
      icon: <Database className="h-10 w-10" />,
      category: "infrastructure",
      features: ["Database Design", "Migration", "Performance Tuning", "Data Warehousing"],
    },
  ]

  const filteredServices = activeTab === "all" ? services : services.filter((service) => service.category === activeTab)

  const categories = [
    { value: "all", label: "All Services" },
    { value: "development", label: "Development" },
    { value: "design", label: "Design" },
    { value: "infrastructure", label: "Infrastructure" },
    { value: "marketing", label: "Marketing" },
  ]

  return (
    <section id="services-list" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
            We offer a comprehensive range of IT solutions to help your business thrive in the digital landscape.
          </p>
        </motion.div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <div className="flex justify-center">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
              {categories.map((category) => (
                <TabsTrigger key={category.value} value={category.value}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeTab}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="wait">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <ServiceCard service={service} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6">Need a custom solution for your business? We can help!</p>
          <Button asChild size="lg">
            <Link href="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: any }) {
  return (
    <Card className="h-full overflow-hidden group">
      <CardHeader className="pb-2">
        <div className="mb-4 text-primary">{service.icon}</div>
        <CardTitle className="text-xl">{service.title}</CardTitle>
        <CardDescription>{service.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {service.features.map((feature: string, index: number) => (
            <Badge key={index} variant="outline" className="bg-primary/5">
              {feature}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="p-0 h-auto group-hover:text-primary transition-colors" asChild>
          <Link href="/contact">
            Learn more
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
