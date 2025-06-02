"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Globe, Laptop, BookOpen, Heart, Users } from "lucide-react"

export default function Benefits() {
  const benefits = [
    {
      icon: <Clock className="h-10 w-10" />,
      title: "Flexible Work Hours",
      description: "Work when you're most productive with our flexible scheduling options.",
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Remote Work Options",
      description: "Work from anywhere with our remote-first approach and occasional in-office collaboration.",
    },
    {
      icon: <Laptop className="h-10 w-10" />,
      title: "Latest Technology",
      description: "Access to cutting-edge tools and technologies to help you do your best work.",
    },
    {
      icon: <BookOpen className="h-10 w-10" />,
      title: "Learning & Development",
      description: "Continuous learning opportunities with conference allowances and training resources.",
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Comprehensive Benefits",
      description: "Health insurance, retirement plans, and wellness programs to support your wellbeing.",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Collaborative Culture",
      description: "Work with talented individuals in a supportive and inclusive environment.",
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
            Why Work With <span className="text-gradient">Us</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
            We offer a range of benefits and perks to help you thrive both professionally and personally.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
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
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
