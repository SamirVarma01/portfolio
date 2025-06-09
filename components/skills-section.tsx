"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Zap } from "lucide-react"

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skillCategories = [
    {
      name: "Programming Languages",
      skills: [
        "Python",
        "C",
        "C++",
        "C#",
        "Java",
        "Go",
        "R",
        "SQL",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "MATLAB",
      ],
      color: "from-red-600 to-red-800",
      icon: "🧩",
    },
    {
      name: "Frameworks & Libraries",
      skills: [
        "React",
        "Node.js",
        "Next.js",
        "Tailwind CSS",
        "Flask",
        "FastAPI",
        "Django",
        ".NET",
        "PyTorch",
        "TensorFlow",
        "Scikit-Learn",
        "Pandas",
        "NumPy",
        "SciPy",
        "Matplotlib",
        "Streamlit",
        "BeautifulSoup",
        "Selenium",
      ],
      color: "from-blue-600 to-blue-800",
      icon: "🛠️",
    },
    {
      name: "DevOps & Cloud",
      skills: [
        "Git",
        "GitHub",
        "GitLab",
        "Amazon Web Services",
        "Google Cloud Platform",
        "Docker",
        "MongoDB",
        "PostgreSQL",
      ],
      color: "from-green-600 to-green-800",
      icon: "☁️",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        <Trophy className="inline-block mr-2" /> Skills & Abilities
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skillCategories.map((category) => (
          <motion.div key={category.name} variants={item}>
            <Card
              className={`p-6 h-full bg-gradient-to-br ${category.color} text-white border-2 border-white/20 game-card`}
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-2">{category.icon}</span>
                <h3 className="text-xl font-bold pixel-text">{category.name}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge
                      variant="outline"
                      className={`bg-black/30 border-white/30 hover:border-white transition-all duration-300 ${
                        hoveredSkill === skill ? "bg-white/20" : ""
                      }`}
                    >
                      {hoveredSkill === skill && <Zap className="h-3 w-3 mr-1 text-yellow-300" />}
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-12 text-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          viewport={{ once: true }}
          className="inline-block"
        >
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-4 rounded-lg pixel-borders inline-block">
            <p className="text-black font-bold pixel-text">ACHIEVEMENT UNLOCKED: TECH MASTERY</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
