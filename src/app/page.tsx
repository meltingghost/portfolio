"use client"

import { useState, useEffect } from "react"
import Navigation from "../components/navigation"
import HeroSection from "../components/hero-section"
import SkillsSection from "../components/skills-section"
import ExperienceSection from "../components/experience-section"
import ProjectsSection from "../components/projects-section"
import BlogsSection from "../components/blogs-section"
import InstagramSection from "../components/instagram-section"
import ContactSection from "../components/contact-section"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <main>
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <BlogsSection />
        <InstagramSection />
        <ContactSection />
      </main>
    </div>
  )
}
