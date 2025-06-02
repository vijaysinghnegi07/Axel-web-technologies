"use client"

import { SelectItem } from "@/components/ui/select"

import { SelectContent } from "@/components/ui/select"

import { SelectValue } from "@/components/ui/select"

import { SelectTrigger } from "@/components/ui/select"

import { Select } from "@/components/ui/select"

import { useState } from "react"
import { Save, Globe, Mail, ImageIcon, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function SettingsManager() {
  const [activeTab, setActiveTab] = useState("general")
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = () => {
    setIsSaving(true)
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your website settings and preferences</p>
      </div>

      <Tabs defaultValue="general" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-5 md:w-[600px]">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Configure the basic settings for your website</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="site-name">Site Name</Label>
                <Input id="site-name" defaultValue="Next-Gen IT Solutions" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="site-description">Site Description</Label>
                <Textarea
                  id="site-description"
                  defaultValue="Next-Gen IT Solutions – Inspired by Axel Web Technologies"
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="site-url">Site URL</Label>
                <div className="flex items-center">
                  <Globe className="mr-2 h-4 w-4 text-muted-foreground" />
                  <Input id="site-url" defaultValue="https://axelweb.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="admin-email">Admin Email</Label>
                <div className="flex items-center">
                  <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                  <Input id="admin-email" defaultValue="admin@axelweb.com" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                  <Switch id="maintenance-mode" />
                </div>
                <p className="text-sm text-muted-foreground">When enabled, visitors will see a maintenance page.</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={isSaving}>
                {isSaving ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Appearance Settings</CardTitle>
              <CardDescription>Customize the look and feel of your website</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Primary Color</Label>
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    {["#3b82f6", "#10b981", "#8b5cf6", "#ef4444", "#f59e0b"].map((color) => (
                      <div
                        key={color}
                        className="w-8 h-8 rounded-full cursor-pointer border border-border"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <Input type="color" defaultValue="#3b82f6" className="w-12 h-8 p-0 overflow-hidden" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Logo</Label>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded bg-muted flex items-center justify-center">
                    <ImageIcon className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <Button variant="outline" size="sm">
                    Change Logo
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Favicon</Label>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded bg-muted flex items-center justify-center">
                    <ImageIcon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <Button variant="outline" size="sm">
                    Change Favicon
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="dark-mode">Default to Dark Mode</Label>
                  <Switch id="dark-mode" />
                </div>
                <p className="text-sm text-muted-foreground">
                  When enabled, the website will default to dark mode for new visitors.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={isSaving}>
                {isSaving ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="email" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Email Settings</CardTitle>
              <CardDescription>Configure email notifications and templates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="smtp-host">SMTP Host</Label>
                <Input id="smtp-host" defaultValue="smtp.example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="smtp-port">SMTP Port</Label>
                <Input id="smtp-port" defaultValue="587" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="smtp-user">SMTP Username</Label>
                <Input id="smtp-user" defaultValue="user@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="smtp-pass">SMTP Password</Label>
                <Input id="smtp-pass" type="password" defaultValue="password" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="contact-notifications">Contact Form Notifications</Label>
                  <Switch id="contact-notifications" defaultChecked />
                </div>
                <p className="text-sm text-muted-foreground">
                  Receive email notifications when someone submits the contact form.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={isSaving}>
                {isSaving ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Configure security options for your website</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                  <Switch id="two-factor" />
                </div>
                <p className="text-sm text-muted-foreground">Require two-factor authentication for admin users.</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="force-ssl">Force SSL</Label>
                  <Switch id="force-ssl" defaultChecked />
                </div>
                <p className="text-sm text-muted-foreground">Redirect all HTTP traffic to HTTPS.</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-policy">Password Policy</Label>
                <Select defaultValue="strong">
                  <SelectTrigger id="password-policy">
                    <SelectValue placeholder="Select policy" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic (8+ characters)</SelectItem>
                    <SelectItem value="medium">Medium (8+ chars, mixed case)</SelectItem>
                    <SelectItem value="strong">Strong (8+ chars, mixed case, numbers, symbols)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                <Input id="session-timeout" type="number" defaultValue="30" />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={isSaving}>
                {isSaving ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Advanced Settings</CardTitle>
              <CardDescription>Configure advanced options for your website</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="analytics-id">Google Analytics ID</Label>
                <Input id="analytics-id" placeholder="UA-XXXXXXXXX-X or G-XXXXXXXXXX" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="head-scripts">Custom Head Scripts</Label>
                <Textarea
                  id="head-scripts"
                  placeholder="<!-- Add custom scripts that will be included in the <head> tag -->"
                  rows={4}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="footer-scripts">Custom Footer Scripts</Label>
                <Textarea
                  id="footer-scripts"
                  placeholder="<!-- Add custom scripts that will be included before the closing </body> tag -->"
                  rows={4}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="cache">Enable Page Caching</Label>
                  <Switch id="cache" defaultChecked />
                </div>
                <p className="text-sm text-muted-foreground">Improve performance by caching pages.</p>
              </div>
              <div className="space-y-2">
                <Button variant="outline" className="w-full">
                  Clear Cache
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={isSaving}>
                {isSaving ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
