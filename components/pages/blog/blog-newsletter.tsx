// Add the missing blog-newsletter.tsx component
"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { Mail } from "lucide-react"

export default function BlogNewsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setEmail("")

      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter.",
      })
    }, 1500)
  }

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
          <div className="mb-6 text-primary">
            <Mail className="h-12 w-12" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-muted-foreground text-lg max-w-[600px] mx-auto mb-8">
            Stay updated with the latest insights, trends, and news in the tech world. We'll send you our best articles
            straight to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow"
              />
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <span className="mr-2">Subscribing...</span>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  </>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">We respect your privacy. Unsubscribe at any time.</p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
