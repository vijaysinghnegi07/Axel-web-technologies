"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, Send } from "lucide-react"
import { toast } from "@/hooks/use-toast"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  position: z.string().min(1, { message: "Please select a position." }),
  experience: z.string().min(1, { message: "Please select your experience level." }),
  message: z.string().min(10, { message: "Cover letter must be at least 10 characters." }),
})

export default function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [resumeFile, setResumeFile] = useState<File | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!resumeFile) {
      toast({
        title: "Resume required",
        description: "Please upload your resume before submitting.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      form.reset()
      setResumeFile(null)

      toast({
        title: "Application submitted successfully!",
        description: "We'll review your application and get back to you soon.",
      })
    }, 1500)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0])
    }
  }

  return (
    <section id="application-form" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Apply <span className="text-gradient">Now</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
            Fill out the form below to apply for a position at Axel Web Technologies.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="position"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Position</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a position" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Senior Frontend Developer">Senior Frontend Developer</SelectItem>
                              <SelectItem value="UX/UI Designer">UX/UI Designer</SelectItem>
                              <SelectItem value="Backend Developer">Backend Developer</SelectItem>
                              <SelectItem value="Project Manager">Project Manager</SelectItem>
                              <SelectItem value="DevOps Engineer">DevOps Engineer</SelectItem>
                              <SelectItem value="Digital Marketing Specialist">Digital Marketing Specialist</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Experience Level</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your experience level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Entry Level (0-2 years)">Entry Level (0-2 years)</SelectItem>
                            <SelectItem value="Mid Level (3-5 years)">Mid Level (3-5 years)</SelectItem>
                            <SelectItem value="Senior Level (5+ years)">Senior Level (5+ years)</SelectItem>
                            <SelectItem value="Lead/Manager (7+ years)">Lead/Manager (7+ years)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div>
                    <FormLabel htmlFor="resume">Resume/CV</FormLabel>
                    <div className="mt-1">
                      <label
                        htmlFor="resume-upload"
                        className="flex items-center justify-center w-full h-32 px-4 transition bg-background border-2 border-dashed rounded-md appearance-none cursor-pointer hover:border-primary focus:outline-none"
                      >
                        <span className="flex flex-col items-center space-y-2">
                          <Upload className="w-6 h-6 text-muted-foreground" />
                          <span className="font-medium text-muted-foreground">
                            {resumeFile ? resumeFile.name : "Drop your resume here or click to browse"}
                          </span>
                          <span className="text-xs text-muted-foreground">PDF, DOCX or TXT (max 5MB)</span>
                        </span>
                        <input
                          id="resume-upload"
                          type="file"
                          className="hidden"
                          accept=".pdf,.docx,.doc,.txt"
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cover Letter</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about yourself and why you're interested in this position"
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <span className="mr-2">Submitting...</span>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      </>
                    ) : (
                      <>
                        Submit Application
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
