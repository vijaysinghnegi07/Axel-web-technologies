"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Clock, Users, Globe } from "lucide-react"

export default function Stats() {
  const stats = [
    { icon: <Clock className="h-8 w-8" />, value: 10, label: "Years Experience", suffix: "+" },
    { icon: <Users className="h-8 w-8" />, value: 200, label: "Happy Clients", suffix: "+" },
    { icon: <Award className="h-8 w-8" />, value: 500, label: "Projects Completed", suffix: "+" },
    { icon: <Globe className="h-8 w-8" />, value: 15, label: "Countries Served", suffix: "+" },
  ]

  const counterRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(counterRef, { once: true })

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
            Our <span className="text-gradient">Impact</span> in Numbers
          </h2>
          <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
            We're proud of what we've accomplished and the trust our clients place in us.
          </p>
        </motion.div>

        <div ref={counterRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 text-center shadow-sm"
            >
              <div className="flex justify-center mb-4 text-primary">{stat.icon}</div>
              <div className="text-4xl font-bold mb-2">
                <CounterAnimation target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Counter Animation Component
function CounterAnimation({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const nodeRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(nodeRef, { once: true })

  useEffect(() => {
    let startTimestamp: number
    let animationFrameId: number
    const duration = 2000 // 2 seconds

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      const currentCount = Math.floor(progress * target)

      setCount(currentCount)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step)
      } else {
        setCount(target)
      }
    }

    if (isInView) {
      animationFrameId = requestAnimationFrame(step)
    }

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [target, isInView])

  return (
    <span ref={nodeRef}>
      {count}
      {suffix}
    </span>
  )
}
