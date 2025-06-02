"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image: "/placeholder-user.jpg",
      initials: "SJ",
      content:
        "Working with Axel Web Technologies transformed our business. Their team delivered a cutting-edge web application that exceeded our expectations and helped us increase our customer engagement by 40%.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Director, GlobalBrand",
      image: "/placeholder-user.jpg",
      initials: "MC",
      content:
        "The e-commerce platform developed by Axel Web has revolutionized our online sales. The intuitive design and seamless functionality have resulted in a 65% increase in conversion rates.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder, HealthTech Solutions",
      image: "/placeholder-user.jpg",
      initials: "ER",
      content:
        "Axel Web Technologies delivered our healthcare app on time and within budget. Their attention to detail and focus on user experience has made our app stand out in a competitive market.",
      rating: 4,
    },
    {
      id: 4,
      name: "David Wilson",
      role: "CTO, FinanceHub",
      image: "/placeholder-user.jpg",
      initials: "DW",
      content:
        "The team at Axel Web provided exceptional service from concept to deployment. Their technical expertise and proactive communication made the development process smooth and efficient.",
      rating: 5,
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setAutoplay(false)
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
    }
    // Resume autoplay after 5 seconds of inactivity
    setTimeout(() => setAutoplay(true), 5000)
  }

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [autoplay, currentIndex])

  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-2 max-w-[800px]"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Client <span className="text-gradient">Testimonials</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <Card className="border-0 shadow-lg max-w-3xl">
                <CardContent className="pt-10 pb-6 px-8 md:px-12">
                  <div className="text-primary mb-6">
                    <Quote className="h-12 w-12 mx-auto opacity-20" />
                  </div>
                  <p className="text-lg md:text-xl text-center italic mb-6">"{testimonials[currentIndex].content}"</p>
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonials[currentIndex].rating ? "text-yellow-500" : "text-muted"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-center pb-10">
                  <Avatar className="h-16 w-16 border-4 border-primary/10 mb-4">
                    <AvatarImage src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
                    <AvatarFallback>{testimonials[currentIndex].initials}</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm hidden md:flex"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm hidden md:flex"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-primary/20"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Join our growing list of satisfied clients and experience the Axel Web difference.
          </p>
          <Button asChild size="lg">
            <a href="#contact">Get Started Today</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
