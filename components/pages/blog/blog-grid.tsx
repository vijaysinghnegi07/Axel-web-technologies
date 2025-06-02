"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock } from "lucide-react"

export default function BlogGrid() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      slug: "future-web-development-trends-2024",
      excerpt:
        "Explore the emerging technologies and methodologies that will shape the web development landscape in 2024 and beyond.",
      image: "/placeholder.svg",
      category: "Web Development",
      date: "Mar 15, 2024",
      readTime: 5,
      author: {
        name: "Alex Johnson",
        image: "/placeholder-user.jpg",
        role: "CTO",
      },
      tags: ["webdev", "trends", "2024"],
    },
    {
      id: 2,
      title: "How AI is Transforming Mobile App Development",
      slug: "ai-transforming-mobile-app-development",
      excerpt:
        "Discover how artificial intelligence is revolutionizing the way mobile applications are designed, developed, and maintained.",
      image: "/placeholder.svg",
      category: "Mobile Development",
      date: "Mar 8, 2024",
      readTime: 4,
      author: {
        name: "Sarah Williams",
        image: "/placeholder-user.jpg",
        role: "Lead Developer",
      },
      tags: ["ai", "mobile", "development"],
    },
    {
      id: 3,
      title: "Building Accessible Websites: A Comprehensive Guide",
      slug: "building-accessible-websites-guide",
      excerpt:
        "Learn the best practices and techniques for creating websites that are accessible to all users, including those with disabilities.",
      image: "/placeholder.svg",
      category: "Accessibility",
      date: "Feb 28, 2024",
      readTime: 6,
      author: {
        name: "Michael Chen",
        image: "/placeholder-user.jpg",
        role: "UX Designer",
      },
      tags: ["accessibility", "web", "guide"],
    },
    {
      id: 4,
      title: "The Rise of Edge Computing in Web Development",
      slug: "rise-of-edge-computing-web-development",
      excerpt:
        "Explore how edge computing is changing the way web applications are architected and deployed for better performance and user experience.",
      image: "/placeholder.svg",
      category: "Cloud Solutions",
      date: "Feb 20, 2024",
      readTime: 5,
      author: {
        name: "David Wilson",
        image: "/placeholder-user.jpg",
        role: "Cloud Architect",
      },
      tags: ["edge computing", "cloud", "webdev"],
    },
    {
      id: 5,
      title: "Designing for Dark Mode: Best Practices and Considerations",
      slug: "designing-for-dark-mode-best-practices",
      excerpt:
        "Learn how to effectively implement dark mode in your applications with these design principles and technical considerations.",
      image: "/placeholder.svg",
      category: "UI/UX Design",
      date: "Feb 15, 2024",
      readTime: 4,
      author: {
        name: "Emily Davis",
        image: "/placeholder-user.jpg",
        role: "UX Designer",
      },
      tags: ["dark mode", "ui/ux", "design"],
    },
    {
      id: 6,
      title: "Optimizing Website Performance: A Step-by-Step Guide",
      slug: "optimizing-website-performance-guide",
      excerpt:
        "Discover practical techniques to improve your website's speed, responsiveness, and overall performance for better user experience and SEO.",
      image: "/placeholder.svg",
      category: "Web Development",
      date: "Feb 10, 2024",
      readTime: 7,
      author: {
        name: "Robert Taylor",
        image: "/placeholder-user.jpg",
        role: "Performance Engineer",
      },
      tags: ["performance", "optimization", "webdev"],
    },
  ]

  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
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
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime} min read
                      </div>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags &&
                        post.tags.map((tag) => (
                          <Badge key={tag} className="mr-1">
                            {tag}
                          </Badge>
                        ))}
                    </div>
                    <Button variant="ghost" className="p-0 h-auto text-primary" asChild>
                      <Link href={`/blog/${post.slug}`}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button asChild size="lg">
            <Link href="#">
              Load More Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
