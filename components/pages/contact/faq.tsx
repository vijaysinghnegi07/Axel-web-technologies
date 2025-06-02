"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FAQ() {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a comprehensive range of IT services including web development, mobile app development, UI/UX design, cloud solutions, custom software development, digital marketing, and more. Visit our Services page for more details.",
    },
    {
      question: "How much does a typical project cost?",
      answer:
        "Project costs vary depending on the scope, complexity, and timeline. We provide customized quotes based on your specific requirements. Contact us for a free consultation and quote.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines depend on the scope and complexity. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. We'll provide a detailed timeline during the planning phase.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes, we offer various support and maintenance packages to ensure your solution continues to perform optimally. Our team is available for bug fixes, updates, and enhancements.",
    },
    {
      question: "What is your development process?",
      answer:
        "Our development process includes discovery, planning, development, testing, deployment, and support phases. We follow agile methodologies and maintain clear communication throughout the project.",
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
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
            Find answers to common questions about our services and processes.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: faqs.length * 0.1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-4">
              Have more questions? Check out our comprehensive FAQ page or contact us directly.
            </p>
            <Button asChild>
              <Link href="/faqs">View All FAQs</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
