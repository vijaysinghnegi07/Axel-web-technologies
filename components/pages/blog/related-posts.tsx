"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

export default function RelatedPosts() {
  const relatedPosts = [
    {
      id: 1,
      title: "How AI is Transforming Mobile App Development",
      slug: "ai-transforming-mobile-app-development",
      excerpt:
        "Discover how artificial intelligence is revolutionizing the way mobile applications are designed, developed, and maintained.",
      image: "/placeholder.svg",
      category: "Mobile Development",
      date: "Mar 8, 2024",
    },
    {
      id: 2,
      title: "Building Accessible Websites: A Comprehensive Guide",
      slug: "building-accessible-websites-guide",
      excerpt:
        "Learn the best practices and techniques for creating websites that are accessible to all users, including those with disabilities.",
      image: "/placeholder.svg",
      category: "Accessibility",
      date: "Feb 28, 2024",
    },
    {
      id: 3,
      title: "The Rise of Edge Computing in Web Development",
      slug: "rise-of-edge-computing-web-development",
      excerpt:
        "Explore how edge computing is changing the way web applications are architected and deployed for better performance and user experience.",
      image: "/placeholder.svg",
      category: "Cloud Solutions",
      date: "Feb 20, 2024",
    },
  ]

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
            Related <span className="text-gradient">Articles</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
            Explore more articles on similar topics that might interest you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full group">
                <CardContent className="p-0">
                  <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={225}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <Badge variant="outline" className="bg-primary/5">
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
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
