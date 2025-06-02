"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Search, FileCode, Layers, Zap, CheckCircle, BarChart } from "lucide-react"

export default function ServiceProcess() {
  const processSteps = [
    {
      icon: <Search className="h-10 w-10" />,
      title: "Discovery",
      description: "We start by understanding your business goals, target audience, and project requirements.",
    },
    {
      icon: <Layers className="h-10 w-10" />,
      title: "Planning",
      description: "We create a detailed project plan with timelines, milestones, and resource allocation.",
    },
    {
      icon: <FileCode className="h-10 w-10" />,
      title: "Development",
      description: "Our team builds your solution using the latest technologies and best practices.",
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Testing",
      description: "We rigorously test your solution to ensure it meets quality standards and requirements.",
    },
    {
      icon: <CheckCircle className="h-10 w-10" />,
      title: "Deployment",
      description: "We launch your solution and ensure a smooth transition to the live environment.",
    },
    {
      icon: <BarChart className="h-10 w-10" />,
      title: "Support",
      description: "We provide ongoing support and maintenance to ensure your solution continues to perform optimally.",
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
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
            We follow a structured approach to deliver high-quality solutions that meet your business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {step.icon}
                  </div>
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
