"use client"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Code, ExternalLink, Github, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectsSection() {
  const projects = [
    {
      title: "TF-Trades",
      description:
        "Developed a full-stack marketplace application for the game Team Fortress 2 to track prices of 3000+ in-game items over 3 years, storing pricing data in PostgreSQL and utilizing React (Next.js/Tailwind CSS) and TypeScript to create an interactive user interface",
      skills: [
        { name: "Go", icon: "🐹", tier: "backend" },
        { name: "PostgreSQL", icon: "🐘", tier: "database" },
        { name: "React", icon: "⚛️", tier: "frontend" },
        { name: "Next.js", icon: "▲", tier: "frontend" },
        { name: "TypeScript", icon: "📘", tier: "language" },
        { name: "Tailwind CSS", icon: "🎨", tier: "styling" },
        { name: "Python", icon: "🐍", tier: "backend" },
        { name: "Selenium", icon: "🤖", tier: "automation" },
      ],
      color: "from-orange-600 to-orange-800",
      icon: "🎮",
    },
    {
      title: "NextLevel",
      description:
        "Launched a full-stack social media website for video game reviews, integrating the IGDB API to access data on 400,000+ games and growing a client base of 100+ users with a user authentication system created in Node.js, used MongoDB for scalable data storage",
      skills: [
        { name: "Node.js", icon: "🟢", tier: "backend" },
        { name: "MongoDB", icon: "🍃", tier: "database" },
        { name: "React", icon: "⚛️", tier: "frontend" },
        { name: "TypeScript", icon: "📘", tier: "language" },
        { name: "AWS Lambda", icon: "☁️", tier: "cloud" },
        { name: "Next.js", icon: "▲", tier: "frontend" },
      ],
      color: "from-green-600 to-green-800",
      icon: "🎯",
    },
    {
      title: "Game-Theoretic Pokémon Battle Bot",
      description:
        "Developed a game theory-based AI agent for Pokémon Showdown using Nash equilibria to compete online against human opponents, peaking in the top 150 players worldwide, used C++ with pybind11 to complete probability calculations and C# to visualize statistics",
      skills: [
        { name: "C++", icon: "⚡", tier: "language" },
        { name: "Python", icon: "🐍", tier: "language" },
        { name: "C#", icon: "🔷", tier: "language" },
        { name: "NumPy", icon: "🔢", tier: "math" },
        { name: "WebSockets", icon: "🔌", tier: "networking" },
      ],
      color: "from-red-600 to-red-800",
      icon: "⚡",
    },
  ]

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "frontend":
        return "from-cyan-400 to-blue-500"
      case "backend":
        return "from-green-400 to-emerald-500"
      case "database":
        return "from-purple-400 to-violet-500"
      case "language":
        return "from-orange-400 to-red-500"
      case "cloud":
        return "from-yellow-400 to-amber-500"
      case "styling":
        return "from-pink-400 to-rose-500"
      case "automation":
        return "from-indigo-400 to-purple-500"
      case "math":
        return "from-teal-400 to-cyan-500"
      case "networking":
        return "from-gray-400 to-slate-500"
      default:
        return "from-gray-400 to-gray-600"
    }
  }

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
              <p className="mb-6 text-sm">{project.description}</p>

              {/* Tech Stack as Hexagonal Grid */}
              <div className="mb-6">
                <h4 className="font-semibold mb-4 flex items-center">
                  <Cpu className="h-4 w-4 mr-2" />
                  Technology Stack
                </h4>

                <div className="grid grid-cols-2 gap-3">
                  {project.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className={`relative p-3 rounded-lg bg-gradient-to-r ${getTierColor(skill.tier)} text-white shadow-lg`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.1 }}
                      whileHover={{ scale: 1.05, rotate: 1 }}
                      style={{
                        clipPath:
                          skillIndex % 2 === 0
                            ? "polygon(0% 0%, 90% 0%, 100% 100%, 10% 100%)"
                            : "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
                      }}
                    >
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <div>
                          <div className="text-xs font-bold">{skill.name}</div>
                          <div className="text-xs opacity-80 capitalize">{skill.tier}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
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