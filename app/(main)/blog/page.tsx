import type { Metadata } from "next"
import BlogHero from "@/components/pages/blog/blog-hero"
import BlogCategories from "@/components/pages/blog/blog-categories"
import BlogGrid from "@/components/pages/blog/blog-grid"
import BlogNewsletter from "@/components/pages/blog/blog-newsletter"

export const metadata: Metadata = {
  title: "Blog | Axel Web Technologies",
  description: "Insights, tips, and news about web development, design, and technology trends.",
}

export default function BlogPage() {
  return (
    <main>
      <BlogHero />
      <BlogCategories />
      <BlogGrid />
      <BlogNewsletter />
    </main>
  )
}
