import type { Metadata } from "next"
import { Suspense } from "react"
import PortfolioHero from "@/components/pages/portfolio/portfolio-hero"
import PortfolioCategories from "@/components/pages/portfolio/portfolio-categories"
import PortfolioGrid from "@/components/pages/portfolio/portfolio-grid"
import ClientLogos from "@/components/pages/portfolio/client-logos"
import CTA from "@/components/shared/cta"

export const metadata: Metadata = {
  title: "Portfolio | Axel Web Technologies",
  description: "Explore our portfolio of successful projects across various industries and technologies.",
}

function PortfolioContent() {
  return (
    <>
      <PortfolioHero />
      <PortfolioCategories />
      <PortfolioGrid />
      <ClientLogos />
      <CTA
        title="Have a project in mind?"
        description="Let's discuss how we can bring your vision to life with our expertise."
        buttonText="Start a Project"
        buttonLink="/contact"
      />
    </>
  )
}

export default function PortfolioPage() {
  return (
    <main>
      <Suspense
        fallback={
          <div className="min-h-screen">
            {/* Hero Section Skeleton */}
            <section className="py-12 md:py-24 lg:py-32">
              <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="animate-pulse bg-muted h-12 w-96 rounded"></div>
                  <div className="animate-pulse bg-muted h-6 w-[600px] rounded"></div>
                </div>
              </div>
            </section>

            {/* Categories Skeleton */}
            <section className="py-12 md:py-16">
              <div className="container px-4 md:px-6">
                <div className="flex justify-center">
                  <div className="animate-pulse bg-muted h-10 w-32 rounded"></div>
                </div>
              </div>
            </section>

            {/* Grid Skeleton */}
            <section className="py-12 md:py-16 bg-muted/30">
              <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="bg-background rounded-lg overflow-hidden shadow-md">
                      <div className="animate-pulse bg-muted h-64"></div>
                      <div className="p-6 space-y-3">
                        <div className="animate-pulse bg-muted h-6 w-3/4 rounded"></div>
                        <div className="animate-pulse bg-muted h-4 w-full rounded"></div>
                        <div className="animate-pulse bg-muted h-4 w-2/3 rounded"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        }
      >
        <PortfolioContent />
      </Suspense>
    </main>
  )
}
