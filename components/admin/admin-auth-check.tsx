"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Loader2 } from "lucide-react"

interface AdminAuthCheckProps {
  children: React.ReactNode
}

export default function AdminAuthCheck({ children }: AdminAuthCheckProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = () => {
      try {
        const authData = localStorage.getItem("adminAuth")

        if (!authData) {
          return false
        }

        const auth = JSON.parse(authData)

        // Check if token is expired
        if (auth.expiresAt && auth.expiresAt < Date.now()) {
          localStorage.removeItem("adminAuth")
          return false
        }

        return auth.isAuthenticated === true
      } catch (error) {
        console.error("Auth check error:", error)
        return false
      }
    }

    const isAuth = checkAuth()
    setIsAuthenticated(isAuth)

    // If not authenticated and not on login page, redirect to login
    if (!isAuth && pathname !== "/admin/login") {
      router.push("/admin/login")
    } else {
      setIsLoading(false)
    }
  }, [pathname, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (!isAuthenticated && pathname !== "/admin/login") {
    return null
  }

  return <>{children}</>
}
