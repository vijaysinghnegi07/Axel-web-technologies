import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import RelatedCaseStudies from "@/components/pages/case-studies/related-case-studies"
import CTA from "@/components/shared/cta"

export const metadata: Metadata = {
  title: "Case Study | Axel Web Technologies",
  description: "Detailed case study of a successful client project and solution.",
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  // In a real application, you would fetch the case study data based on the slug
  const caseStudy = {
    title: "E-Commerce Platform Redesign",
    client: "RetailTech Inc.",
    industry: "Retail",
    date: "June 2023",
    image: "/placeholder.svg?height=600&width=1200",
    challenge:
      "RetailTech Inc. was struggling with an outdated e-commerce platform that had poor user experience, slow loading times, and limited mobile functionality. This resulted in high cart abandonment rates and declining sales.",
    solution:
      "We redesigned their e-commerce platform from the ground up using Next.js for the frontend and a headless CMS for content management. We implemented a responsive design, optimized for performance, and added features like personalized product recommendations, advanced search, and a streamlined checkout process.",
    results: [
      "50% reduction in page load time",
      "35% increase in mobile conversions",
      "28% decrease in cart abandonment rate",
      "42% increase in average order value",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Stripe", "Contentful", "Vercel"],
    testimonial: {
      quote:
        "The team at Axel Web Technologies transformed our online store into a modern, high-performing platform that our customers love. The results speak for themselves - higher conversions, increased sales, and a much better user experience.",
      author: "Jane Smith",
      position: "CTO, RetailTech Inc.",
    },
  }

  return (
    <main className="pt-16 md:pt-24 pb-16">
      <div className="container px-4 md:px-6">
        <Link href="/case-studies" className="inline-flex items-center text-primary mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Case Studies
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{caseStudy.title}</h1>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
              Client: {caseStudy.client}
            </span>
            <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
              Industry: {caseStudy.industry}
            </span>
            <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Date: {caseStudy.date}</span>
          </div>

          <div className="relative w-full aspect-video mb-12 rounded-lg overflow-hidden">
            <Image src={caseStudy.image || "/placeholder.svg"} alt={caseStudy.title} fill className="object-cover" />
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
            <p className="mb-8">{caseStudy.challenge}</p>

            <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
            <p className="mb-8">{caseStudy.solution}</p>

            <h2 className="text-2xl font-semibold mb-4">Results</h2>
            <ul className="list-disc pl-6 mb-8">
              {caseStudy.results.map((result, index) => (
                <li key={index} className="mb-2">
                  {result}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {caseStudy.technologies.map((tech, index) => (
                <span key={index} className="bg-muted text-muted-foreground text-sm px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>

            <div className="bg-muted p-6 rounded-lg mb-8">
              <blockquote className="italic text-lg mb-4">"{caseStudy.testimonial.quote}"</blockquote>
              <p className="font-medium">
                {caseStudy.testimonial.author}, {caseStudy.testimonial.position}
              </p>
            </div>

            <div className="flex justify-center mt-12">
              <Button asChild size="lg">
                <Link href="/contact">Discuss Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <RelatedCaseStudies />

      <CTA
        title="Ready to transform your business?"
        description="Contact us today to discuss how we can help you achieve similar results."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </main>
  )
}
