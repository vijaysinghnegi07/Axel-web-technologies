"use client"

import { motion } from "framer-motion"

export default function AboutContent() {
  return (
    <section className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2014, Axel Web Technologies started with a simple mission: to help businesses leverage
                technology to achieve their goals. What began as a small team of developers has grown into a
                full-service digital agency with expertise across web development, mobile applications, UI/UX design,
                and digital marketing.
              </p>
              <p>
                Over the years, we've had the privilege of working with clients ranging from startups to Fortune 500
                companies, helping them navigate the ever-evolving digital landscape and achieve their business
                objectives through innovative technology solutions.
              </p>
              <p>
                Our journey has been marked by continuous learning, adaptation, and growth. As technology evolves, so do
                we, constantly expanding our expertise to provide our clients with the most effective solutions for
                their unique challenges.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                At Axel Web Technologies, our mission is to empower businesses through technology. We believe that the
                right digital solutions can transform organizations, enhance customer experiences, and drive sustainable
                growth.
              </p>
              <p>
                We're committed to delivering excellence in every project we undertake, combining technical expertise
                with creative thinking to create solutions that not only meet the current needs of our clients but are
                also scalable and adaptable to future technological advancements.
              </p>
              <p>
                Beyond just building products, we aim to be true partners to our clients, understanding their business
                objectives, challenges, and opportunities to deliver solutions that create real value and impact.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
