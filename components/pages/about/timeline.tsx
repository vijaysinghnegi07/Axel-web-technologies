"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Timeline() {
  const timelineRef = useRef<HTMLDivElement>(null)

  const timelineEvents = [
    {
      year: "2014",
      title: "Company Founded",
      description: "Axel Web Technologies was established with a vision to transform digital experiences.",
    },
    {
      year: "2016",
      title: "First Major Client",
      description: "Secured our first enterprise client and expanded our team to 10 members.",
    },
    {
      year: "2018",
      title: "International Expansion",
      description: "Opened our first international office and started serving clients globally.",
    },
    {
      year: "2020",
      title: "Technology Innovation",
      description: "Launched our proprietary development framework and cloud solutions.",
    },
    {
      year: "2022",
      title: "Strategic Partnerships",
      description: "Formed strategic partnerships with leading technology providers to enhance our service offerings.",
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Received multiple industry awards for our innovative solutions and client success.",
    },
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const timeline = timelineRef.current

    if (timeline) {
      gsap.from(".timeline-item", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        scrollTrigger: {
          trigger: timeline,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

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
            Our <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
            A timeline of our growth and key milestones since our founding.
          </p>
        </motion.div>

        <div ref={timelineRef} className="relative mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`timeline-item relative flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                  <div className="bg-card p-6 rounded-xl shadow-sm">
                    <h4 className="text-xl font-bold mb-2">{event.title}</h4>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm z-10">
                    {event.year}
                  </div>
                </div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
