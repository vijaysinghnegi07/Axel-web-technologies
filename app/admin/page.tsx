import type { Metadata } from "next"
import { AdminDashboard } from "@/components/admin/admin-dashboard"

export const metadata: Metadata = {
  title: "Admin Dashboard | Next-Gen IT Solutions",
  description: "Admin dashboard for Next-Gen IT Solutions website management",
}

export default function AdminPage() {
  return <AdminDashboard />
}
