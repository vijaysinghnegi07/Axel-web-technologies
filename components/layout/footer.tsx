"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
  ]

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms-of-service" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Web Development", href: "/services" },
        { name: "Mobile Apps", href: "/services" },
        { name: "UI/UX Design", href: "/services" },
        { name: "Cloud Solutions", href: "/services" },
        { name: "Digital Marketing", href: "/services" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "FAQs", href: "/faqs" },
        { name: "Support", href: "/contact" },
      ],
    },
  ]

  const contactInfo = [
    { icon: <Mail className="h-5 w-5" />, text: "info@axelwebtech.com" },
    { icon: <Phone className="h-5 w-5" />, text: "+1 (555) 123-4567" },
    { icon: <MapPin className="h-5 w-5" />, text: "123 Tech Street, Silicon Valley, CA" },
  ]

  return (
    <footer className="bg-muted/50 dark:bg-muted/20 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="inline-block mb-4">
                <span className="text-2xl font-bold text-gradient">Axel Web</span>
              </Link>
              <p className="text-muted-foreground mb-6 max-w-md">
                Innovative IT solutions for modern businesses. We provide cutting-edge web development, app development,
                and digital transformation services.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((column, columnIndex) => (
            <div key={columnIndex}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: columnIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-lg mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-border"
        >
          <div className="flex flex-wrap gap-6 justify-center md:justify-between items-center">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground"
        >
          <p>© {currentYear} Axel Web Technologies. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
