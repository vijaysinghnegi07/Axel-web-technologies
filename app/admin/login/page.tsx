import type { Metadata } from "next"
import { LoginForm } from "@/components/admin/login-form"

export const metadata: Metadata = {
  title: "Admin Login | Next-Gen IT Solutions",
  description: "Login to the admin dashboard",
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Admin Login</h1>
          <p className="text-muted-foreground mt-2">Sign in to access the admin dashboard</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
