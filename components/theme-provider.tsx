"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Add localStorage persistence
  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme && props.setTheme) {
      props.setTheme(savedTheme)
    }
  }, [props])

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
