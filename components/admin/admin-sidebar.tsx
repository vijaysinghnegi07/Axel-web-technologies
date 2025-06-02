"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, FileImage, FileText, Home, Menu, Settings, Users, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NavItem {
  title: string
  href: string
  icon: React.ReactNode
}

export default function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems: NavItem[] = [
    {
      title: "Dashboard",
      href: "/admin",
      icon: <Home className="h-5 w-5" />,
    },
    {
      title: "Analytics",
      href: "/admin/analytics",
      icon: <BarChart3 className="h-5 w-5" />,
    },
    {
      title: "Portfolio",
      href: "/admin/portfolio",
      icon: <FileImage className="h-5 w-5" />,
    },
    {
      title: "Blog",
      href: "/admin/blog",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      title: "Users",
      href: "/admin/users",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Settings",
      href: "/admin/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ]

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile toggle button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 z-50 md:hidden shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-background border-r border-border transition-transform duration-300 md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-border">
            <Link href="/admin" className="flex items-center gap-2">
              <div className="bg-primary text-primary-foreground p-1 rounded">
                <Settings className="h-5 w-5" />
              </div>
              <span className="font-bold text-xl">Admin Panel</span>
            </Link>
          </div>

          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                <div
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                    pathname === item.href ? "bg-primary text-primary-foreground" : "hover:bg-muted",
                  )}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </div>
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t border-border">
            <div className="text-xs text-muted-foreground">
              <p>© 2025 Next-Gen IT Solutions</p>
              <p>Admin Panel v1.0</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Spacer for fixed sidebar on desktop */}
      <div className="hidden md:block w-64 flex-shrink-0" />
    </>
  )
}
