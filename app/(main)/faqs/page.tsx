import type { Metadata } from "next"
import FaqHero from "@/components/pages/faqs/faq-hero"
import FaqCategories from "@/components/pages/faqs/faq-categories"
import FaqAccordion from "@/components/pages/faqs/faq-accordion"
import ContactCta from "@/components/pages/faqs/contact-cta"

export const metadata: Metadata = {
  title: "FAQs | Axel Web Technologies",
  description: "Find answers to frequently asked questions about our services, processes, and technologies.",
}

export default function FaqsPage() {
  return (
    <main>
      <FaqHero />
      <FaqCategories />
      <FaqAccordion />
      <ContactCta />
    </main>
  )
}
