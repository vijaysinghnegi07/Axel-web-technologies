'use client'

import { Suspense } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Portfolio from "@/components/sections/portfolio";
import Testimonials from "@/components/sections/testimonials";
import Blog from "@/components/sections/blog";
import Contact from "@/components/sections/contact";
import Clients from "@/components/sections/clients";

export default function Home() {
  return (
    <div>
    <Header></Header>
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <Clients />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Blog />
        <Contact />
      </Suspense>
    </main>
    <Footer></Footer>
    </div>
  );
}
