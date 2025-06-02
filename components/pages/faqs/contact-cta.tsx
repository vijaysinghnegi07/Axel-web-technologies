"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ContactCTA() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground text-lg max-w-[800px] mx-auto mb-8">
            If you couldn't find the answer to your question, our team is here to help. Contact us and we'll get back to
            you as soon as possible.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
