"use client"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectsSection() {
  const projects = [
    {
      title: "TF-Trades",
      description:
        "Developed a full-stack marketplace application for the game Team Fortress 2 to track prices of 3000+ in-game items over 3 years, storing pricing data in PostgreSQL and utilizing React (Next.js/Tailwind CSS) and TypeScript to create an interactive user interface",
      skills: [
        "Go",
        "Gin",
        "Fiber",
        "PostgreSQL",
        "JavaScript",
        "Next.js",
        "React",
        "Recharts",
        "Tailwind CSS",
        "TypeScript",
        "Python",
        "Selenium",
        "BeautifulSoup",
      ],
      color: "from-orange-600 to-orange-800",
      icon: "🎮",
    },
    {
      title: "NextLevel",
      description:
        "Launched a full-stack social media website for video game reviews, integrating the IGDB API to access data on 400,000+ games and growing a client base of 100+ users with a user authentication system created in Node.js, used MongoDB for scalable data storage",
      skills: ["JavaScript", "Node.js", "Next.js", "React", "TypeScript", "MongoDB", "Tailwind CSS", "AWS Lambda"],
      color: "from-green-600 to-green-800",
      icon: "🎯",
    },
    {
      title: "Game-Theoretic Pokémon Battle Bot",
      description:
        "Developed a game theory-based AI agent for Pokémon Showdown using Nash equilibria to compete online against human opponents, peaking in the top 150 players worldwide, used C++ with pybind11 to complete probability calculations and C# to visualize statistics",
      skills: ["C++", "C#", "Python", "Scikit-Learn", "NumPy", "WebSockets API"],
      color: "from-red-600 to-red-800",
      icon: "⚡",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center pixel-text">
        <Code className="inline-block mr-2" /> Projects
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={item}>
            <Card
              className={`p-6 h-full bg-gradient-to-br ${project.color} text-white border-2 border-white/20 game-card overflow-hidden relative`}
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-bl-full flex items-start justify-end p-2">
                <span className="text-2xl">{project.icon}</span>
              </div>

              <h3 className="text-xl font-bold mb-2 pixel-text">{project.title}</h3>
              <p className="mb-4 text-sm">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.slice(0, 5).map((skill) => (
                  <Badge key={skill} variant="outline" className="bg-black/30 border-white/30">
                    {skill}
                  </Badge>
                ))}
                {project.skills.length > 5 && (
                  <Badge variant="outline" className="bg-black/30 border-white/30">
                    +{project.skills.length - 5} more
                  </Badge>
                )}
              </div>

              <div className="flex space-x-2 mt-auto">
                <Button variant="outline" size="sm" className="bg-white/10 hover:bg-white/20 border-white/30">
                  <Github className="h-4 w-4 mr-1" />
                  Code
                </Button>
                <Button variant="outline" size="sm" className="bg-white/10 hover:bg-white/20 border-white/30">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Demo
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
