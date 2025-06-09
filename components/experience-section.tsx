"use client"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin } from "lucide-react"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Data Science Intern",
      company: "AT&T",
      location: "Middletown, NJ",
      period: "June 2025 – Present",
      description:
        "Building supervised and reinforcement learning models for threat analytics to detect anomalies in network traffic",
      skills: [
        "Python",
        "TensorFlow",
        "Scikit-Learn",
        "Pandas",
        "NumPy",
        "JavaScript",
        "React",
        "Chart.js",
        "Azure DataBricks",
        "GitLab",
      ],
      color: "from-blue-600 to-blue-800",
      icon: "🔍",
    },
    {
      title: "Software Engineering Intern",
      company: "Stealth Mode Startup",
      location: "San Francisco, CA",
      period: "Jan. 2025 – Apr. 2025",
      description:
        "Collaborated with ex-Google DeepMind engineers to develop and optimize convolutional neural network models for automating several image editing tasks, such as large object removal, facial expression altering, and red-eye removal, reducing error rates by 25%",
      skills: ["Python", "PyTorch", "OpenCV", "Flask", "BeautifulSoup", "Docker", "Git", "Google Cloud Platform"],
      color: "from-purple-600 to-purple-800",
      icon: "🚀",
    },
    {
      title: "Machine Learning Researcher",
      company: "CyberPhysical Intelligence Lab, Rutgers University",
      location: "Piscataway, NJ",
      period: "June 2024 – Apr. 2025",
      description:
        "Integrated a multi-agent reinforcement learning algorithm into the CARLA autonomous driving simulator to enhance real-time decision-making capabilities for autonomous vehicles using Actor-Critic neural networks implemented in TensorFlow",
      skills: ["Python", "TensorFlow", "TensorBoard", "Pandas", "Matplotlib", "Git", "Linux"],
      color: "from-red-600 to-red-800",
      icon: "🧠",
    },
    {
      title: "Data Analyst",
      company: "NASA L'SPACE Mission Concept Academy",
      location: "Tempe, AZ",
      period: "May 2024 - Aug. 2024",
      description:
        "Utilized SQL to query dataset of 300+ lunar rover components, improving power efficiency by 44% and reducing costs by 32%",
      skills: ["SQL", "Google BigQuery", "Power BI"],
      color: "from-indigo-600 to-indigo-800",
      icon: "🚀",
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
        <Briefcase className="inline-block mr-2" /> Work Experience
      </h2>

      <motion.div
        className="space-y-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {experiences.map((exp, index) => (
          <motion.div key={index} variants={item}>
            <Card
              className={`p-6 bg-gradient-to-br ${exp.color} text-white border-2 border-white/20 game-card overflow-hidden relative`}
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-bl-full flex items-start justify-end p-2">
                <span className="text-2xl">{exp.icon}</span>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold pixel-text">{exp.title}</h3>
                  <p className="text-white/80">{exp.company}</p>
                </div>

                <div className="flex flex-col md:items-end mt-2 md:mt-0">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="mb-4">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="bg-black/30 border-white/30">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
