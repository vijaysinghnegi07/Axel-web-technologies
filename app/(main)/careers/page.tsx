import type { Metadata } from "next"
import CareersHero from "@/components/pages/careers/careers-hero"
import Benefits from "@/components/pages/careers/benefits"
import CultureGallery from "@/components/pages/careers/culture-gallery"
import JobListings from "@/components/pages/careers/job-listings"
import ApplicationForm from "@/components/pages/careers/application-form"

export const metadata: Metadata = {
  title: "Careers | Axel Web Technologies",
  description: "Join our team of talented professionals and grow your career in technology.",
}

export default function CareersPage() {
  return (
    <main>
      <CareersHero />
      <Benefits />
      <CultureGallery />
      <JobListings />
      <ApplicationForm />
    </main>
  )
}
