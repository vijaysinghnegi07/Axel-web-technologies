"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

export default function Team() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "/placeholder-user.jpg",
      initials: "AJ",
      bio: "Alex has over 15 years of experience in the tech industry and founded Axel Web Technologies with a vision to transform digital experiences.",
    },
    {
      name: "Sarah Williams",
      role: "CTO",
      image: "/placeholder-user.jpg",
      initials: "SW",
      bio: "With a background in computer science and AI, Sarah leads our technical strategy and ensures we stay at the cutting edge of technology.",
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: "/placeholder-user.jpg",
      initials: "MC",
      bio: "Michael is a full-stack developer with expertise in React, Node.js, and cloud architecture. He leads our development team with passion and precision.",
    },
    {
      name: "Emily Davis",
      role: "UX Designer",
      image: "/placeholder-user.jpg",
      initials: "ED",
      bio: "Emily combines creativity with user-centered design principles to create intuitive and engaging digital experiences that users love.",
    },
    {
      name: "David Wilson",
      role: "Marketing Director",
      image: "/placeholder-user.jpg",
      initials: "DW",
      bio: "David brings over a decade of digital marketing experience, helping our clients increase their online visibility and drive conversions.",
    },
    {
      name: "Jessica Brown",
      role: "Project Manager",
      image: "/placeholder-user.jpg",
      initials: "JB",
      bio: "Jessica ensures our projects are delivered on time and within budget, maintaining clear communication between our team and clients.",
    },
    {
      name: "Robert Taylor",
      role: "Mobile Developer",
      image: "/placeholder-user.jpg",
      initials: "RT",
      bio: "Robert specializes in native and cross-platform mobile development, creating seamless experiences for iOS and Android users.",
    },
    {
      name: "Lisa Martinez",
      role: "Content Strategist",
      image: "/placeholder-user.jpg",
      initials: "LM",
      bio: "Lisa helps our clients tell their stories effectively through strategic content that engages audiences and drives results.",
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
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
            Our talented team of experts is passionate about creating innovative solutions that drive results.
          </p>
        </motion.div>

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
                          <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
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
      </div>
    </section>
  )
}
