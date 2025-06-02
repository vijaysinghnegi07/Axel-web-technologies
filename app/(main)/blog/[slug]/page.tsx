import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Tag, Share2 } from "lucide-react"
import RelatedPosts from "@/components/pages/blog/related-posts"
import BlogNewsletter from "@/components/pages/blog/blog-newsletter"

export const metadata: Metadata = {
  title: "Blog Post | Axel Web Technologies",
  description: "Detailed blog post with insights on technology and web development.",
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // In a real application, you would fetch the blog post data based on the slug
  const post = {
    title: "The Future of Web Development: Trends to Watch in 2024",
    date: "May 15, 2024",
    author: "Alex Johnson",
    category: "Web Development",
    image: "/placeholder.svg?height=600&width=1200",
    content: `
      <p>The web development landscape is constantly evolving, with new technologies, frameworks, and methodologies emerging at a rapid pace. As we move further into 2024, several key trends are shaping the future of how we build and interact with web applications.</p>
      
      <h2>1. AI-Powered Development Tools</h2>
      <p>Artificial intelligence is revolutionizing the way developers work. From code completion and bug detection to automated testing and optimization, AI-powered tools are enhancing productivity and code quality. GitHub Copilot and similar tools are just the beginning of this transformation.</p>
      
      <h2>2. WebAssembly (Wasm) Goes Mainstream</h2>
      <p>WebAssembly continues to gain traction, allowing developers to run high-performance code in the browser. This technology enables complex applications like video editing, 3D rendering, and even games to run efficiently on the web, blurring the line between web and native applications.</p>
      
      <h2>3. The Rise of Edge Computing</h2>
      <p>Edge computing is changing how web applications are deployed and served. By moving computation closer to the end user, edge functions and serverless platforms like Vercel and Cloudflare Workers are reducing latency and improving user experience globally.</p>
      
      <h2>4. Headless Architecture and Composable Commerce</h2>
      <p>The headless approach, which decouples the frontend presentation layer from the backend logic, continues to gain popularity. This architecture provides greater flexibility, allowing teams to choose the best tools for each layer and enabling omnichannel experiences.</p>
      
      <h2>5. Web Components and Micro-Frontends</h2>
      <p>As applications grow in complexity, more teams are adopting component-based architectures and micro-frontend approaches. These methodologies allow for better code organization, reusability, and team autonomy in large-scale applications.</p>
      
      <h2>Conclusion</h2>
      <p>The web development field continues to evolve at a rapid pace, offering exciting opportunities for developers and businesses alike. By staying informed about these trends and adopting the right technologies for your projects, you can create more powerful, efficient, and user-friendly web applications.</p>
    `,
    tags: ["Web Development", "Technology Trends", "Frontend", "AI", "WebAssembly"],
  }

  return (
    <main className="pt-16 md:pt-24 pb-16">
      <div className="container px-4 md:px-6">
        <Link href="/blog" className="inline-flex items-center text-primary mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>

        <article className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Tag className="mr-2 h-4 w-4" />
              <span>{post.category}</span>
            </div>
          </div>

          <div className="relative w-full aspect-video mb-12 rounded-lg overflow-hidden">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>

          <div
            className="prose dark:prose-invert max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="border-t border-border pt-6 mt-12">
            <div className="flex flex-wrap items-center justify-between">
              <div>
                <h4 className="text-sm font-medium mb-2">Tags:</h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Link
                      key={index}
                      href={`/blog?tag=${tag.toLowerCase().replace(/\s+/g, "-")}`}
                      className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Share:</h4>
                <div className="flex gap-2">
                  <button className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors">
                    <Share2 className="h-4 w-4" />
                    <span className="sr-only">Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      <RelatedPosts />
      <BlogNewsletter />
    </main>
  )
}
