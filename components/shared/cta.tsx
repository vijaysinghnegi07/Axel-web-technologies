"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface CTAProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
}

export default function CTA({
  title,
  description,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: CTAProps) {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4 max-w-[800px]"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">{title}</h2>
            <p className="text-muted-foreground text-lg">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="text-base">
                <Link href={buttonLink}>
                  {buttonText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              {secondaryButtonText && secondaryButtonLink && (
                <Button asChild variant="outline" size="lg" className="text-base">
                  <Link href={secondaryButtonLink}>{secondaryButtonText}</Link>
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
