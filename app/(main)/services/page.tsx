import type { Metadata } from "next"
import ServicesHero from "@/components/pages/services/services-hero"
import ServicesList from "@/components/pages/services/services-list"
import ServiceProcess from "@/components/pages/services/service-process"
import Technologies from "@/components/pages/services/technologies"
import CTA from "@/components/shared/cta"

export const metadata: Metadata = {
  title: "Services | Axel Web Technologies",
  description:
    "Explore our comprehensive range of IT services including web development, mobile apps, cloud solutions, and more.",
}

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesList />
      <ServiceProcess />
      <Technologies />
      <CTA
        title="Ready to transform your business?"
        description="Contact us today to discuss how our services can help you achieve your goals."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </main>
  )
}
