"use client"

import type React from "react"

import { useState, useEffect, useCallback, useRef } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "@/components/mode-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const mainNavItems = [
  { name: "Home", path: "/", description: "Welcome to Axel Web" },
  { name: "About", path: "/about", description: "Learn about our company" },
  { name: "Services", path: "/services", description: "Our IT solutions" },
  { name: "Portfolio", path: "/portfolio", description: "Our work showcase" },
  { name: "Case Studies", path: "/case-studies", description: "Success stories" },
  { name: "Blog", path: "/blog", description: "Latest insights" },
  { name: "Contact", path: "/contact", description: "Get in touch" },
]

const secondaryNavItems = [
  { name: "Careers", path: "/careers", description: "Join our team" },
  { name: "FAQs", path: "/faqs", description: "Frequently asked questions" },
  { name: "Privacy Policy", path: "/privacy-policy", description: "Privacy information" },
  { name: "Terms of Service", path: "/terms-of-service", description: "Terms and conditions" },
]

const quickLinks = [
  { name: "Web Development", path: "/services#web-development" },
  { name: "Mobile Apps", path: "/services#mobile-apps" },
  { name: "Cloud Solutions", path: "/services#cloud-solutions" },
  { name: "AI & ML", path: "/services#ai-ml" },
]

const contactInfo = {
  phone: "+1 (555) 123-4567",
  email: "info@axelweb.com",
  address: "123 Tech Street, Digital City, DC 12345",
  hours: "Mon-Fri: 9AM-6PM EST",
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [mounted, setMounted] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(80)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()
  const router = useRouter()
  const searchInputRef = useRef<HTMLInputElement>(null)

  // Mock search data - replace with actual search implementation
  const searchData = [
    ...mainNavItems,
    ...secondaryNavItems,
    { name: "Web Development Services", path: "/services#web-development", description: "Custom web solutions" },
    { name: "Mobile App Development", path: "/services#mobile-apps", description: "iOS and Android apps" },
    { name: "Cloud Computing", path: "/services#cloud-solutions", description: "Scalable cloud infrastructure" },
    { name: "AI Solutions", path: "/services#ai-ml", description: "Artificial intelligence services" },
    { name: "Our Team", path: "/about#team", description: "Meet our experts" },
    { name: "Client Testimonials", path: "/about#testimonials", description: "What clients say" },
    { name: "Latest Blog Posts", path: "/blog", description: "Tech insights and updates" },
    { name: "Project Portfolio", path: "/portfolio", description: "Our completed projects" },
  ]

  // Ensure component is mounted before rendering
  useEffect(() => {
    setMounted(true)
  }, [])

  // Enhanced scroll handler with visibility control
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY

    // Update scroll state
    setIsScrolled(currentScrollY > 10)

    // Auto-hide/show header on scroll (disabled for better UX)
    // if (currentScrollY > lastScrollY && currentScrollY > 100) {
    //   setIsVisible(false)
    // } else {
    //   setIsVisible(true)
    // }

    setLastScrollY(currentScrollY)
  }, [lastScrollY])

  // Throttled scroll event listener
  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const throttledHandleScroll = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(handleScroll, 10)
    }

    window.addEventListener("scroll", throttledHandleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll)
      clearTimeout(timeoutId)
    }
  }, [handleScroll])

  // Handle mobile menu body scroll lock
  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollY = window.scrollY
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
      document.body.style.width = "100%"
      document.body.style.top = `-${scrollY}px`
    } else {
      const scrollY = document.body.style.top
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
      document.body.style.top = ""
      if (scrollY) {
        window.scrollTo(0, Number.parseInt(scrollY || "0") * -1)
      }
    }

    return () => {
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
      document.body.style.top = ""
    }
  }, [mobileMenuOpen])

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
    setSearchOpen(false)
  }, [pathname])

  // Update CSS custom property for header height
  useEffect(() => {
    document.documentElement.style.setProperty("--header-height", `${headerHeight}px`)
  }, [headerHeight])

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Search functionality
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query)
    if (query.trim() === "") {
      setSearchResults([])
      return
    }

    const filtered = searchData.filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description?.toLowerCase().includes(query.toLowerCase()),
    )
    setSearchResults(filtered.slice(0, 8)) // Limit to 8 results
  }, [])

  // Handle search result selection
  const handleSearchSelect = (path: string) => {
    setSearchOpen(false)
    setSearchQuery("")
    setSearchResults([])
    router.push(path)
  }

  // Handle search submit
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchResults.length > 0) {
      handleSearchSelect(searchResults[0].path)
    }
  }

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path
    }
    return pathname.startsWith(path)
  }

  // Don't render until mounted to prevent hydration issues
  if (!mounted) {
    return (
      <div
        className="fixed top-0 left-0 right-0 z-[9999] bg-background/80 backdrop-blur-sm"
        style={{ height: `${headerHeight}px` }}
      />
    )
  }

  return (
    <>
      {/* Header Spacer - Prevents content from hiding behind fixed header */}
      <div className="header-spacer" style={{ height: `${headerHeight}px` }} aria-hidden="true" />

      <header
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50"
            : "bg-background/80 backdrop-blur-sm"
        }`}
        style={{
          minHeight: `${headerHeight}px`,
          willChange: "transform",
        }}
        role="banner"
      >
        {/* Top Bar with Contact Info */}
        <div className="hidden lg:block bg-primary/5 border-b border-border/30">
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Phone className="h-3 w-3" />
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-primary transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-3 w-3" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-primary transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-3 w-3" />
                  <span>{contactInfo.hours}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-3 w-3" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="container mx-auto px-4 flex items-center justify-between h-16 max-w-7xl">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 z-10 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
            aria-label="Axel Web - Home"
          >
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Axel Web
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" role="navigation" aria-label="Main navigation">
            {mainNavItems.slice(0, 6).map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={item.path}
                  className={`text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1 relative group ${
                    isActive(item.path) ? "text-primary font-semibold" : "text-foreground/80"
                  }`}
                  aria-current={isActive(item.path) ? "page" : undefined}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}

            {/* More Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-sm font-medium hover:text-primary transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label="More pages"
                >
                  More
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
                <div className="p-2">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Additional Pages</p>
                </div>
                {mainNavItems.slice(6).map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      href={item.path}
                      className={`w-full cursor-pointer flex flex-col items-start p-2 ${
                        isActive(item.path) ? "text-primary font-medium" : "text-foreground/80"
                      }`}
                    >
                      <span className="font-medium">{item.name}</span>
                      <span className="text-xs text-muted-foreground">{item.description}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <div className="p-2">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Quick Links</p>
                </div>
                {secondaryNavItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      href={item.path}
                      className={`w-full cursor-pointer ${
                        isActive(item.path) ? "text-primary font-medium" : "text-foreground/80"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Search, CTA, and Theme Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Search */}
            <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary/10 transition-colors"
                  aria-label="Search"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Search</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSearchSubmit} className="space-y-4">
                  <Input
                    ref={searchInputRef}
                    placeholder="Search pages, services, or content..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full"
                    autoFocus
                  />
                  {searchResults.length > 0 && (
                    <div className="max-h-64 overflow-y-auto space-y-1">
                      {searchResults.map((result, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handleSearchSelect(result.path)}
                          className="w-full text-left p-2 rounded-md hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <div className="font-medium">{result.name}</div>
                          {result.description && (
                            <div className="text-sm text-muted-foreground">{result.description}</div>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                  {searchQuery && searchResults.length === 0 && (
                    <div className="text-center text-muted-foreground py-4">No results found for "{searchQuery}"</div>
                  )}
                </form>
              </DialogContent>
            </Dialog>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </motion.div>

            {/* Theme Toggle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              <ModeToggle />
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="hover:bg-primary/10 transition-colors"
            >
              <Search className="h-4 w-4" />
            </Button>
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              className="hover:bg-primary/10 transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/90 backdrop-blur-md z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 bottom-0 w-[90%] max-w-sm bg-background shadow-2xl z-50 lg:hidden overflow-y-auto border-l border-border"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              {/* Mobile Menu Header */}
              <div className="flex justify-between items-center p-6 border-b border-border">
                <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Navigation
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="hover:bg-primary/10 focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Mobile Menu Content */}
              <nav className="px-6 py-4 flex flex-col gap-2" role="navigation" aria-label="Mobile navigation">
                {/* Main Navigation */}
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground mb-3 px-4">Main Pages</p>
                  {mainNavItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      <Link
                        href={item.path}
                        className={`block py-3 px-4 text-lg font-medium rounded-lg transition-all duration-200 hover:bg-primary/10 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                          isActive(item.path) ? "text-primary bg-primary/5 font-semibold" : "text-foreground/80"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                        aria-current={isActive(item.path) ? "page" : undefined}
                      >
                        <div className="flex flex-col">
                          <span>{item.name}</span>
                          <span className="text-xs text-muted-foreground font-normal">{item.description}</span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Secondary Navigation */}
                <div className="py-4 border-t border-border mt-4 space-y-1">
                  <p className="text-sm font-medium text-muted-foreground mb-3 px-4">Additional Pages</p>
                  {secondaryNavItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: (mainNavItems.length + index) * 0.05 }}
                    >
                      <Link
                        href={item.path}
                        className={`block py-2 px-4 text-base font-medium rounded-lg transition-all duration-200 hover:bg-primary/10 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                          isActive(item.path) ? "text-primary bg-primary/5 font-semibold" : "text-foreground/80"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                        aria-current={isActive(item.path) ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Links */}
                <div className="py-4 border-t border-border space-y-1">
                  <p className="text-sm font-medium text-muted-foreground mb-3 px-4">Quick Links</p>
                  {quickLinks.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.2,
                        delay: (mainNavItems.length + secondaryNavItems.length + index) * 0.05,
                      }}
                    >
                      <Link
                        href={item.path}
                        className="block py-2 px-4 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-primary/10 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-foreground/70"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="py-4 border-t border-border space-y-3">
                  <p className="text-sm font-medium text-muted-foreground mb-3 px-4">Contact Info</p>
                  <div className="px-4 space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <a href={`tel:${contactInfo.phone}`} className="hover:text-primary transition-colors">
                        {contactInfo.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <a href={`mailto:${contactInfo.email}`} className="hover:text-primary transition-colors">
                        {contactInfo.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{contactInfo.hours}</span>
                    </div>
                  </div>
                </div>

                {/* Mobile CTA Button */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: (mainNavItems.length + secondaryNavItems.length + quickLinks.length) * 0.05,
                  }}
                  className="mt-6 px-4"
                >
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Link href="/contact">Get a Quote</Link>
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Search Dialog */}
        <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Search</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSearchSubmit} className="space-y-4">
              <Input
                placeholder="Search pages, services, or content..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full"
                autoFocus
              />
              {searchResults.length > 0 && (
                <div className="max-h-64 overflow-y-auto space-y-1">
                  {searchResults.map((result, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleSearchSelect(result.path)}
                      className="w-full text-left p-2 rounded-md hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <div className="font-medium">{result.name}</div>
                      {result.description && <div className="text-sm text-muted-foreground">{result.description}</div>}
                    </button>
                  ))}
                </div>
              )}
              {searchQuery && searchResults.length === 0 && (
                <div className="text-center text-muted-foreground py-4">No results found for "{searchQuery}"</div>
              )}
            </form>
          </DialogContent>
        </Dialog>
      </header>
    </>
  )
}
