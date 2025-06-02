"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"

export default function FAQAccordion() {
  const faqCategories = [
    {
      title: "General Questions",
      faqs: [
        {
          question: "What services do you offer?",
          answer:
            "We offer a comprehensive range of IT services including web development, mobile app development, UI/UX design, cloud solutions, custom software development, digital marketing, and more. Visit our Services page for more details.",
        },
        {
          question: "How much does a typical project cost?",
          answer:
            "Project costs vary depending on the scope, complexity, and timeline. We provide customized quotes based on your specific requirements. Contact us for a free consultation and quote.",
        },
        {
          question: "How long does it take to complete a project?",
          answer:
            "Project timelines depend on the scope and complexity. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. We'll provide a detailed timeline during the planning phase.",
        },
        {
          question: "Do you provide ongoing support after project completion?",
          answer:
            "Yes, we offer various support and maintenance packages to ensure your solution continues to perform optimally. Our team is available for bug fixes, updates, and enhancements.",
        },
        {
          question: "What is your development process?",
          answer:
            "Our development process includes discovery, planning, development, testing, deployment, and support phases. We follow agile methodologies and maintain clear communication throughout the project.",
        },
      ],
    },
    {
      title: "Web Development",
      faqs: [
        {
          question: "What technologies do you use for web development?",
          answer:
            "We use a variety of technologies depending on project requirements, including React, Vue.js, Angular, Next.js for frontend; Node.js, Python, PHP for backend; and MongoDB, PostgreSQL, MySQL for databases.",
        },
        {
          question: "Can you redesign my existing website?",
          answer:
            "Yes, we offer website redesign services to improve the look, functionality, and performance of your existing website while maintaining your brand identity.",
        },
        {
          question: "Do you build e-commerce websites?",
          answer:
            "Yes, we specialize in building custom e-commerce solutions as well as implementing platforms like Shopify, WooCommerce, and Magento.",
        },
        {
          question: "How do you ensure website security?",
          answer:
            "We implement industry best practices for security, including secure coding standards, regular updates, SSL certificates, data encryption, and vulnerability testing.",
        },
        {
          question: "Will my website be mobile-friendly?",
          answer:
            "Absolutely. All our websites are built with a mobile-first approach, ensuring they look and function perfectly on all devices and screen sizes.",
        },
      ],
    },
    {
      title: "Mobile App Development",
      faqs: [
        {
          question: "Do you develop for both iOS and Android?",
          answer:
            "Yes, we develop native apps for both iOS and Android platforms, as well as cross-platform solutions using technologies like React Native and Flutter.",
        },
        {
          question: "How much does it cost to develop a mobile app?",
          answer:
            "Mobile app development costs vary widely based on complexity, features, and platforms. Simple apps might start at $25,000, while complex apps can cost $100,000+. We provide detailed quotes after understanding your requirements.",
        },
        {
          question: "How long does it take to develop a mobile app?",
          answer:
            "Typically, mobile app development takes 3-9 months from concept to launch, depending on complexity and features. We'll provide a detailed timeline during the planning phase.",
        },
        {
          question: "Do you help with app store submission?",
          answer:
            "Yes, we handle the entire process of submitting your app to the Apple App Store and Google Play Store, ensuring it meets all guidelines and requirements.",
        },
        {
          question: "Can you update my existing mobile app?",
          answer:
            "Yes, we can update, enhance, or redesign your existing mobile app to improve functionality, performance, and user experience.",
        },
      ],
    },
    {
      title: "UI/UX Design",
      faqs: [
        {
          question: "What is your design process?",
          answer:
            "Our design process includes research, wireframing, prototyping, visual design, and usability testing. We focus on creating intuitive, user-centered designs that align with your brand and business goals.",
        },
        {
          question: "Do you conduct user research?",
          answer:
            "Yes, we conduct user research through interviews, surveys, and usability testing to understand user needs, behaviors, and pain points, which informs our design decisions.",
        },
        {
          question: "How do you ensure accessibility in your designs?",
          answer:
            "We follow WCAG guidelines to ensure our designs are accessible to all users, including those with disabilities. This includes considerations for color contrast, text size, keyboard navigation, and screen reader compatibility.",
        },
        {
          question: "What deliverables can I expect from the design process?",
          answer:
            "Deliverables typically include user personas, user flows, wireframes, interactive prototypes, visual designs, and design systems or style guides.",
        },
        {
          question: "How do you handle design revisions?",
          answer:
            "We include a set number of revision rounds in our project scope. We value your feedback and work collaboratively to refine the design until it meets your expectations.",
        },
      ],
    },
    {
      title: "Cloud Solutions",
      faqs: [
        {
          question: "What cloud platforms do you work with?",
          answer:
            "We work with major cloud platforms including AWS, Microsoft Azure, Google Cloud Platform, and specialized platforms like Vercel and Netlify.",
        },
        {
          question: "Can you help migrate my existing systems to the cloud?",
          answer:
            "Yes, we provide cloud migration services to help you move your applications, databases, and infrastructure to the cloud securely and efficiently.",
        },
        {
          question: "How do you ensure data security in the cloud?",
          answer:
            "We implement comprehensive security measures including encryption, access controls, network security, regular audits, and compliance with industry standards and regulations.",
        },
        {
          question: "What are the benefits of moving to the cloud?",
          answer:
            "Cloud solutions offer scalability, cost-efficiency, improved performance, enhanced security, disaster recovery, and the ability to innovate faster.",
        },
        {
          question: "Do you provide ongoing cloud management services?",
          answer:
            "Yes, we offer cloud management services including monitoring, optimization, security, backup, and support to ensure your cloud infrastructure runs smoothly and efficiently.",
        },
      ],
    },
  ]

  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
              <Card>
                <CardContent className="p-6">
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                        <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
