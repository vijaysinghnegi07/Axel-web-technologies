// Add the missing job-listings.tsx component
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function JobListings() {
  const [activeTab, setActiveTab] = useState("all")

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description:
        "We're looking for a Senior Frontend Developer with expertise in React, Next.js, and modern JavaScript to join our team and help build innovative web applications.",
      requirements: [
        "5+ years of experience in frontend development",
        "Strong proficiency in React, Next.js, and TypeScript",
        "Experience with state management solutions",
        "Knowledge of responsive design and CSS frameworks",
        "Understanding of web performance optimization",
      ],
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "Design",
      location: "Hybrid",
      type: "Full-time",
      description:
        "Join our design team to create intuitive and engaging user experiences for web and mobile applications that delight users and drive business results.",
      requirements: [
        "3+ years of experience in UX/UI design",
        "Proficiency in design tools like Figma or Sketch",
        "Strong portfolio demonstrating user-centered design",
        "Experience with design systems",
        "Understanding of accessibility standards",
      ],
    },
    {
      id: 3,
      title: "Backend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description:
        "We're seeking a Backend Developer with expertise in Node.js and database technologies to build robust and scalable server-side applications.",
      requirements: [
        "4+ years of experience in backend development",
        "Strong proficiency in Node.js and Express",
        "Experience with SQL and NoSQL databases",
        "Knowledge of RESTful API design",
        "Understanding of cloud services (AWS, Azure, or GCP)",
      ],
    },
    {
      id: 4,
      title: "Project Manager",
      department: "Operations",
      location: "Onsite",
      type: "Full-time",
      description:
        "We're looking for a Project Manager to oversee the planning, execution, and delivery of client projects, ensuring they are completed on time and within budget.",
      requirements: [
        "3+ years of experience in project management",
        "PMP certification or equivalent",
        "Experience with agile methodologies",
        "Strong communication and leadership skills",
        "Ability to manage multiple projects simultaneously",
      ],
    },
    {
      id: 5,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description:
        "Join our team as a DevOps Engineer to build and maintain our CI/CD pipelines, cloud infrastructure, and deployment processes.",
      requirements: [
        "3+ years of experience in DevOps",
        "Experience with containerization (Docker, Kubernetes)",
        "Knowledge of infrastructure as code (Terraform, CloudFormation)",
        "Experience with CI/CD tools (Jenkins, GitHub Actions)",
        "Understanding of cloud platforms (AWS, Azure, or GCP)",
      ],
    },
    {
      id: 6,
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Hybrid",
      type: "Full-time",
      description:
        "We're seeking a Digital Marketing Specialist to develop and implement marketing strategies that increase brand awareness and drive customer acquisition.",
      requirements: [
        "3+ years of experience in digital marketing",
        "Experience with SEO, SEM, and social media marketing",
        "Knowledge of analytics tools (Google Analytics, HubSpot)",
        "Content creation and management skills",
        "Understanding of marketing automation",
      ],
    },
  ]

  const filteredJobs = activeTab === "all" ? jobs : jobs.filter((job) => job.department.toLowerCase() === activeTab)

  const departments = [
    { value: "all", label: "All Departments" },
    { value: "engineering", label: "Engineering" },
    { value: "design", label: "Design" },
    { value: "operations", label: "Operations" },
    { value: "marketing", label: "Marketing" },
  ]

  return (
    <section id="job-listings" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Open <span className="text-gradient">Positions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
            Explore our current job openings and find the perfect role for your skills and career goals.
          </p>
        </motion.div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <div className="flex justify-center">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
              {departments.map((department) => (
                <TabsTrigger key={department.value} value={department.value}>
                  {department.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeTab}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col">
                    <CardContent className="p-6 flex-grow">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge>{job.department}</Badge>
                        <Badge variant="outline">{job.location}</Badge>
                        <Badge variant="outline">{job.type}</Badge>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                      <p className="text-muted-foreground mb-4">{job.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Requirements:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {job.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="text-sm text-muted-foreground">
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button asChild className="w-full">
                        <Link href="#application-form">
                          Apply Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No open positions in this department at the moment.</p>
          </div>
        )}
      </div>
    </section>
  )
}
