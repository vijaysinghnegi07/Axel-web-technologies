"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

const pathNames: Record<string, string> = {
  "/": "Home",
  "/about": "About Us",
  "/services": "Services",
  "/portfolio": "Portfolio",
  "/case-studies": "Case Studies",
  "/blog": "Blog",
  "/contact": "Contact",
  "/careers": "Careers",
  "/faqs": "FAQs",
  "/privacy-policy": "Privacy Policy",
  "/terms-of-service": "Terms of Service",
}

export default function Breadcrumb() {
  const pathname = usePathname()

  // Don't show breadcrumb on home page or admin pages
  if (pathname === "/" || pathname.startsWith("/admin")) {
    return null
  }

  const pathSegments = pathname.split("/").filter(Boolean)

  return (
    <nav aria-label="Breadcrumb" className="py-4 border-b border-border/50">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link href="/" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
              <Home className="h-4 w-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>

          {pathSegments.map((segment, index) => {
            const path = "/" + pathSegments.slice(0, index + 1).join("/")
            const isLast = index === pathSegments.length - 1
            const name = pathNames[path] || segment.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())

            return (
              <li key={path} className="flex items-center">
                <ChevronRight className="h-4 w-4 text-muted-foreground mx-2" />
                {isLast ? (
                  <span className="text-foreground font-medium" aria-current="page">
                    {name}
                  </span>
                ) : (
                  <Link href={path} className="text-muted-foreground hover:text-primary transition-colors">
                    {name}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}
