import type { Metadata } from "next"
import AboutHero from "@/components/pages/about/about-hero"
import AboutContent from "@/components/pages/about/about-content"
import Values from "@/components/pages/about/values"
import Stats from "@/components/pages/about/stats"
import Team from "@/components/pages/about/team"
import Timeline from "@/components/pages/about/timeline"
import CTA from "@/components/shared/cta"

export const metadata: Metadata = {
  title: "About Us | Axel Web Technologies",
  description: "Learn about our company, our mission, values, and the team behind Axel Web Technologies.",
}

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutContent />
      <Values />
      <Stats />
      <Team />
      <Timeline />
      <CTA
        title="Ready to start your project?"
        description="Get in touch with our team to discuss your needs and how we can help."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </main>
  )
}
