"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Bell, LogOut, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "@/components/mode-toggle"
import { useToast } from "@/hooks/use-toast"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function AdminHeader() {
  const [searchQuery, setSearchQuery] = useState("")
  const [username, setUsername] = useState("")
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    try {
      const authData = localStorage.getItem("adminAuth")
      if (authData) {
        const auth = JSON.parse(authData)
        setUsername(auth.user?.username || "Admin")
      }
    } catch (error) {
      console.error("Error getting user data:", error)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("adminAuth")
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    })
    router.push("/admin/login")
  }

  return (
    <header className="border-b border-border bg-background p-4 sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 md:hidden">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
        </div>

        <div className="hidden md:flex items-center gap-4 w-full max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <ModeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-[300px] overflow-y-auto">
                <DropdownMenuItem className="cursor-pointer">
                  <div className="flex flex-col gap-1">
                    <p className="font-medium">New contact form submission</p>
                    <p className="text-sm text-muted-foreground">John Doe submitted a contact form</p>
                    <p className="text-xs text-muted-foreground">2 minutes ago</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <div className="flex flex-col gap-1">
                    <p className="font-medium">Portfolio item updated</p>
                    <p className="text-sm text-muted-foreground">E-Commerce Platform was updated</p>
                    <p className="text-xs text-muted-foreground">1 hour ago</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <div className="flex flex-col gap-1">
                    <p className="font-medium">New blog comment</p>
                    <p className="text-sm text-muted-foreground">Jane Smith commented on your blog post</p>
                    <p className="text-xs text-muted-foreground">3 hours ago</p>
                  </div>
                </DropdownMenuItem>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer justify-center">
                <p className="text-sm font-medium text-primary">View all notifications</p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>{username}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Account Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
