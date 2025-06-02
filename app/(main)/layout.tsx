import type React from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Breadcrumb from "@/components/layout/breadcrumb"
import PageTransition from "@/components/layout/page-transition"
import ScrollToTop from "@/components/ui/scroll-to-top"

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Breadcrumb />
      <PageTransition>
        <main className="flex-1 relative">{children}</main>
      </PageTransition>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
