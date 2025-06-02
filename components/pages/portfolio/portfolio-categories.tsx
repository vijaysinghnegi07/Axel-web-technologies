"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

function CategoriesContent() {
  try {
    const searchParams = useSearchParams()
    // Your existing logic here
    const category = searchParams.get("category") || "all"

    return (
      <div>
        {/* Placeholder for category display */}
        Selected Category: {category}
      </div>
    )
  } catch (error) {
    console.error("Error accessing searchParams:", error)
    return <div>Error loading categories.</div>
  }
}

export default function PortfolioCategories() {
  return (
    <Suspense fallback={<div>Loading categories...</div>}>
      <CategoriesContent />
    </Suspense>
  )
}
