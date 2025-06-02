import type { Metadata } from "next"
import { BlogManager } from "@/components/admin/blog-manager"

export const metadata: Metadata = {
  title: "Blog Management | Admin Dashboard",
  description: "Manage blog posts for Next-Gen IT Solutions website",
}

export default function BlogManagementPage() {
  return <BlogManager />
}
