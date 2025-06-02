"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

function GridContent() {
  const searchParams = useSearchParams()
  // Your existing grid logic here
  return (
    <div>
      {/* Example: Displaying search params */}
      <p>Search Params: {searchParams.toString()}</p>
    </div>
  )
}

export default function PortfolioGrid() {
  return (
    <Suspense fallback={<div>Loading portfolio...</div>}>
      <GridContent />
    </Suspense>
  )
}
