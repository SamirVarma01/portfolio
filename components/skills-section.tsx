"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Trophy } from "lucide-react"

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skillCategories = [
    {
      name: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "C++", "Go", "Java", "C#", "SQL", "R", "HTML", "CSS", "MATLAB"],
      color: "from-red-600 to-red-800",
      icon: "🧩",
    },
    {
      name: "Frameworks & Libraries",
      skills: [
        "React",
        "Next.js",
        "Node.js",
        "TensorFlow",
        "PyTorch",
        "Flask",
        "Django",
        "Pandas",
        "NumPy",
        "Scikit-Learn",
        "Tailwind CSS",
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
      skills: ["Git", "Docker", "AWS", "GCP", "PostgreSQL", "MongoDB", "GitHub", "GitLab"],
      color: "from-green-600 to-green-800",
      icon: "☁️",
    },
  ]

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

      <div className="space-y-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className={`p-8 bg-gradient-to-br ${category.color} text-white border-2 border-white/20`}>
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">{category.icon}</span>
                <h3 className="text-2xl font-bold pixel-text">{category.name}</h3>
              </div>

              {/* Hexagonal Grid Layout */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="relative group cursor-pointer"
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.1, rotate: 5, y: -5 }}
                  >
                    {/* Hexagonal Skill Card */}
                    <div
                      className="relative w-20 h-20 bg-black/40 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center text-center p-2 transition-all duration-300"
                      style={{
                        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      }}
                    >
                      <span className="text-xs font-bold leading-tight">{skill}</span>

                      {/* Glow effect on hover */}
                      {hoveredSkill === skill && (
                        <motion.div
                          className="absolute inset-0 bg-white/20 border-2 border-white/60"
                          style={{
                            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                          }}
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                        />
                      )}
                    </div>

                    {/* Floating particles on hover */}
                    {hoveredSkill === skill && (
                      <div className="absolute inset-0 pointer-events-none">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-yellow-300 rounded-full"
                            style={{
                              left: `${20 + i * 20}%`,
                              top: `${30 + i * 15}%`,
                            }}
                            animate={{
                              y: [-10, -30, -10],
                              opacity: [0, 1, 0],
                              scale: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: i * 0.3,
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

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
