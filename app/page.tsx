"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gamepad2, ChevronDown } from "lucide-react"
import HeroSection from "@/components/hero-section"
import GameNavbar from "@/components/game-navbar"
import SkillsSection from "@/components/skills-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import EducationSection from "@/components/education-section"
import ContactSection from "@/components/contact-section"
import FloatingElements from "@/components/floating-elements"
import ParallaxBackground from "@/components/parallax-background"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")
  const sectionsRef = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const { scrollY } = useScroll()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      Object.entries(sectionsRef.current).forEach(([key, section]) => {
        if (!section) return

        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(key)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = sectionsRef.current[sectionId]
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      <ParallaxBackground />
      <FloatingElements />

      <GameNavbar activeSection={activeSection} onNavigate={scrollToSection} />

      <div className="container mx-auto px-4 py-8">
        <section
          ref={(el) => (sectionsRef.current.hero = el)}
          id="hero"
          className="min-h-screen flex items-center justify-center"
        >
          <HeroSection />
        </section>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center my-8"
        >
          <Button
            onClick={() => scrollToSection("about")}
            variant="outline"
            size="lg"
            className="rounded-full animate-bounce"
          >
            <ChevronDown className="mr-2 h-4 w-4" />
            Start Adventure
          </Button>
        </motion.div>

        <section ref={(el) => (sectionsRef.current.about = el)} id="about" className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center pixel-text">
              <Gamepad2 className="inline-block mr-2" /> Character Stats
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 game-card bg-gradient-to-br from-purple-900/80 to-purple-700/80 backdrop-blur-sm border-2 border-purple-500">
                <h3 className="text-xl font-bold mb-4 pixel-text">About Me</h3>
                <p className="mb-4">
                  I'm Samir Varma, a Computer Engineering and Mathematics student at Rutgers University with a passion
                  for software development, machine learning, and data science. When I'm not coding, you can find me
                  playing guitar, battling Pokémon, or watching Jujutsu Kaisen.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline" className="bg-[hsl(var(--pokemon-red))] text-white">
                    Pokémon Fan
                  </Badge>
                  <Badge variant="outline" className="bg-[hsl(var(--jjk-blue))] text-white">
                    Jujutsu Kaisen
                  </Badge>
                  <Badge variant="outline" className="bg-[hsl(var(--guitar-brown))] text-white">
                    Guitar Player
                  </Badge>
                </div>
              </Card>

              <Card className="p-6 game-card bg-gradient-to-br from-blue-900/80 to-blue-700/80 backdrop-blur-sm border-2 border-blue-500">
                <h3 className="text-xl font-bold mb-4 pixel-text">Quick Stats</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Location:</span>
                    <span>Monroe Township, NJ</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Education:</span>
                    <span>Rutgers University</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Major:</span>
                    <span>Computer Engineering, Mathematics</span>
                  </li>
                  <li className="flex justify-between">
                    <span>GPA:</span>
                    <span>3.956/4.000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Graduation:</span>
                    <span>May 2027</span>
                  </li>
                </ul>
              </Card>
            </div>
          </motion.div>
        </section>

        <section ref={(el) => (sectionsRef.current.skills = el)} id="skills" className="py-16">
          <SkillsSection />
        </section>

        <section ref={(el) => (sectionsRef.current.experience = el)} id="experience" className="py-16">
          <ExperienceSection />
        </section>

        <section ref={(el) => (sectionsRef.current.projects = el)} id="projects" className="py-16">
          <ProjectsSection />
        </section>

        <section ref={(el) => (sectionsRef.current.education = el)} id="education" className="py-16">
          <EducationSection />
        </section>

        <section ref={(el) => (sectionsRef.current.contact = el)} id="contact" className="py-16">
          <ContactSection />
        </section>
      </div>
    </main>
  )
}
