"use client"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Briefcase, Calendar, MapPin, Code2 } from "lucide-react"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Data Science Intern",
      company: "AT&T",
      location: "Middletown, NJ",
      period: "June 2025 – Present",
      description:
        "At AT&T, I contributed to the development of data-driven solutions aimed at identifying and mitigating network threats. My work focused on improving the accuracy of threat detection systems by refining machine learning models and streamlining their performance. Additionally, I led a team of five engineers in the Intern Innovation Challenge at AT&T, where I helped in the development of Paladin, a full-stack git-like application that helps monitor and automatically rollback malicious changes to secure project files.",
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
    },
    {
      title: "Software Engineering Intern",
      company: "Stealth Mode Startup",
      location: "San Francisco, CA",
      period: "Jan. 2025 – Apr. 2025",
      description:
        "During my time at a stealth-mode startup, I worked alongside engineers from Google DeepMind to build and refine deep learning models for complex image editing tasks. I played a key role in developing automated solutions for challenges like object removal and facial feature adjustments, with a focus on improving model reliability and visual accuracy. To support scalable deployment, I helped streamline the machine learning pipeline by containerizing workflows and designing systems for efficient image data ingestion and preprocessing.",
      skills: ["Python", "PyTorch", "OpenCV", "Flask", "BeautifulSoup", "Docker", "Git", "Google Cloud Platform"],
      color: "from-purple-600 to-purple-800",
    },
    {
      title: "Machine Learning Researcher",
      company: "CyberPhysical Intelligence Lab, Rutgers University",
      location: "Piscataway, NJ",
      period: "June 2024 – Apr. 2025",
      description:
        "At CyberPhysical Intelligence Lab at Rutgers, I focused on advancing autonomous vehicle decision-making by integrating multi-agent reinforcement learning algorithms into a high-fidelity driving simulator. My work involved implementing and fine-tuning neural network architectures to enable more adaptive and efficient control strategies. I also led a series of experimental comparisons between different reinforcement learning approaches, contributing to more computationally efficient training pipelines and deeper insights into their performance trade-offs.",
      skills: ["Python", "TensorFlow", "TensorBoard", "Pandas", "Matplotlib", "Git", "Linux"],
      color: "from-red-600 to-red-800",
    },
    {
      title: "Data Analyst",
      company: "NASA L'SPACE Mission Concept Academy",
      location: "Tempe, AZ",
      period: "May 2024 - Aug. 2024",
      description:
        "As a data analyst in NASA’s L’SPACE Mission Concept Academy, I worked on optimizing lunar rover subsystem designs by conducting data-driven analyses of component performance and cost-efficiency. Using structured queries and interactive dashboards, I identified opportunities for energy savings and cost reduction while also visualizing key financial and operational metrics to support decision-making across the mission planning process.",
      skills: ["SQL", "Google BigQuery", "Power BI"],
      color: "from-indigo-600 to-indigo-800",
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

              <p className="mb-6">{exp.description}</p>

              {/* Tech Stack as Gaming Pills */}
              <div className="space-y-3">
                <div className="flex items-center mb-3">
                  <Code2 className="h-4 w-4 mr-2 text-yellow-300" />
                  <span className="font-semibold">Tech Stack</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="relative px-3 py-1 bg-black/40 backdrop-blur-sm border border-white/30 rounded-full text-sm font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: skillIndex * 0.05 }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(255,255,255,0.2)",
                        borderColor: "rgba(255,255,255,0.6)",
                      }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
