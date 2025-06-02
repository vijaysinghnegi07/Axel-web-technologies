import type { Metadata } from "next"
import { PortfolioManager } from "@/components/admin/portfolio-manager"

export const metadata: Metadata = {
  title: "Portfolio Management | Admin Dashboard",
  description: "Manage portfolio items for Next-Gen IT Solutions website",
}

export default function PortfolioManagementPage() {
  return <PortfolioManager />
}
