import type { Metadata } from "next"
import CaseStudiesHero from "@/components/pages/case-studies/case-studies-hero"
import CaseStudiesFilter from "@/components/pages/case-studies/case-studies-filter"
import CaseStudiesGrid from "@/components/pages/case-studies/case-studies-grid"
import CTA from "@/components/shared/cta"

export const metadata: Metadata = {
  title: "Case Studies | Axel Web Technologies",
  description: "Explore our detailed case studies showcasing successful client projects and solutions.",
}

export default function CaseStudiesPage() {
  return (
    <main>
      <CaseStudiesHero />
      <CaseStudiesFilter />
      <CaseStudiesGrid />
      <CTA
        title="Ready to achieve similar results?"
        description="Contact us to discuss how we can help your business succeed with our tailored solutions."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </main>
  )
}
