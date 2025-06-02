"use client"

import { useState } from "react"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Award, Clock, Users } from "lucide-react"

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const counterRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(counterRef, { once: true })

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

  const stats = [
    { icon: <Clock className="h-8 w-8" />, value: 10, label: "Years Experience", suffix: "+" },
    { icon: <Users className="h-8 w-8" />, value: 200, label: "Happy Clients", suffix: "+" },
    { icon: <Award className="h-8 w-8" />, value: 500, label: "Projects Completed", suffix: "+" },
  ]

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "/placeholder-user.jpg",
      initials: "AJ",
    },
    {
      name: "Sarah Williams",
      role: "CTO",
      image: "/placeholder-user.jpg",
      initials: "SW",
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: "/placeholder-user.jpg",
      initials: "MC",
    },
    {
      name: "Emily Davis",
      role: "UX Designer",
      image: "/placeholder-user.jpg",
      initials: "ED",
    },
  ]

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
      year: "2023",
      title: "Industry Recognition",
      description: "Received multiple industry awards for our innovative solutions and client success.",
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-muted/30">
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
              About <span className="text-gradient">Axel Web</span> Technologies
            </h2>
            <p className="text-muted-foreground text-lg">
              We are a team of passionate tech enthusiasts dedicated to creating innovative digital solutions that help
              businesses thrive in the digital age.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/20 to-primary/0 blur-xl opacity-50"></div>
              <Image
                src="/placeholder.svg"
                alt="About Axel Web Technologies"
                width={600}
                height={400}
                className="rounded-xl relative z-10 w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Our Story</h3>
            <p className="text-muted-foreground">
              Founded in 2014, Axel Web Technologies started with a simple mission: to help businesses leverage
              technology to achieve their goals. What began as a small team of developers has grown into a full-service
              digital agency with expertise across web development, mobile applications, UI/UX design, and digital
              marketing.
            </p>
            <p className="text-muted-foreground">
              We believe in creating solutions that not only meet the current needs of our clients but are also scalable
              and adaptable to future technological advancements. Our approach combines technical expertise with
              creative thinking to deliver results that exceed expectations.
            </p>
            <h3 className="text-2xl font-bold pt-4">Our Values</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <span className="text-primary text-sm">01</span>
                </div>
                <div>
                  <h4 className="font-semibold">Innovation</h4>
                  <p className="text-sm text-muted-foreground">We embrace new technologies and creative solutions</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <span className="text-primary text-sm">02</span>
                </div>
                <div>
                  <h4 className="font-semibold">Quality</h4>
                  <p className="text-sm text-muted-foreground">We deliver excellence in every project we undertake</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <span className="text-primary text-sm">03</span>
                </div>
                <div>
                  <h4 className="font-semibold">Collaboration</h4>
                  <p className="text-sm text-muted-foreground">We work closely with clients as true partners</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <span className="text-primary text-sm">04</span>
                </div>
                <div>
                  <h4 className="font-semibold">Integrity</h4>
                  <p className="text-sm text-muted-foreground">
                    We maintain transparency and honesty in all interactions
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Stats Counter */}
        <div ref={counterRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
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

        {/* Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Meet Our Team</h3>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              Our talented team of experts is passionate about creating innovative solutions that drive results.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="overflow-hidden h-full">
                  <CardContent className="p-0">
                    <div className="group relative perspective">
                      <div className="relative preserve-3d duration-500 group-hover:my-rotate-y-180 w-full h-full">
                        <div className="absolute backface-hidden w-full h-full">
                          <div className="p-6 text-center">
                            <Avatar className="h-24 w-24 mx-auto mb-4 border-4 border-primary/20">
                              <AvatarImage src={member.image} alt={member.name} />
                              <AvatarFallback>{member.initials}</AvatarFallback>
                            </Avatar>
                            <h4 className="font-bold text-lg">{member.name}</h4>
                            <p className="text-muted-foreground">{member.role}</p>
                          </div>
                        </div>
                        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-primary/10 rounded-xl">
                          <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                            <h4 className="font-bold text-lg mb-2">{member.name}</h4>
                            <p className="text-sm text-muted-foreground mb-4">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl
                              vel ultricies lacinia.
                            </p>
                            <div className="flex space-x-3">
                              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                                <span className="text-primary text-sm">in</span>
                              </div>
                              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                                <span className="text-primary text-sm">t</span>
                              </div>
                              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                                <span className="text-primary text-sm">f</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Timeline */}
        <div ref={timelineRef} className="relative">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Journey</h3>
              <p className="text-muted-foreground max-w-[600px] mx-auto">
                A timeline of our growth and key milestones since our founding.
              </p>
            </motion.div>
          </div>

          <div className="relative mx-auto">
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
