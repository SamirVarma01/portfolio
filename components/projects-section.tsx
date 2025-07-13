"use client"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Code, ExternalLink, Github, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectsSection() {
  const projects = [
    {
      title: "NextLevel",
      description:
        "I created a social platform focused on video game reviews, offering users the ability to browse, post, and engage with content tied to a vast catalog of titles. The site featured account management, interactive feedback systems, and automatic image processing to enhance user experience. By connecting to a major gaming database, I ensured comprehensive game coverage while building a scalable infrastructure to support a growing community. The site currently has over 100 users and counting!",
      skills: [
        { name: "Node.js", icon: "🟢", tier: "backend" },
        { name: "MongoDB", icon: "🍃", tier: "database" },
        { name: "React", icon: "⚛️", tier: "frontend" },
        { name: "TypeScript", icon: "📘", tier: "language" },
        { name: "AWS Lambda", icon: "☁️", tier: "cloud" },
        { name: "Next.js", icon: "▲", tier: "frontend" },
      ],
      color: "from-green-600 to-green-800",
      github: "https://github.com/SamirVarma01/NextLevel",
      demo: "https://next-level-eight-zeta.vercel.app/"
    },
    {
      title: "TF-Trades",
      description:
        "I built a dynamic marketplace platform centered around Team Fortress 2’s in-game economy, combining automated trade tracking with a user-friendly interface. The project involved integrating data from multiple trading platforms and adapting a custom bot to identify and execute profitable item swaps in real time. Alongside backend data handling, I designed the frontend to make historical pricing trends easily accessible, enabling users to explore long-term market behavior and uncover trading insights.",
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
      github: "https://github.com/SamirVarma01/TF-Trades",
      demo: "https://tf-trades.vercel.app/"
    },
    {
      title: "Game-Theoretic Pokémon Battle Bot",
      description:
        "I built an AI agent that applies game theory to real-time Pokémon battles, using strategic decision-making to compete effectively against human players on an online platform. The bot combined probabilistic modeling with battle state analysis to evaluate possible moves and select optimal actions under uncertainty. To support this, I created a companion tool that visualized key performance metrics and helped refine the bot’s behavior over time.",
      skills: [
        { name: "C++", icon: "⚡", tier: "language" },
        { name: "Python", icon: "🐍", tier: "language" },
        { name: "C#", icon: "🔷", tier: "language" },
        { name: "Scikit-Learn", icon: "🔢", tier: "machine learning" },
        { name: "WebSockets", icon: "🔌", tier: "networking" },
        { name: "NumPy", icon: "🔢", tier: "math" },
      ],
      color: "from-purple-600 to-purple-800",
      github: "https://github.com/SamirVarma01/Game-Theory-in-Pokemon",
    },
    {
      title: "Mortal KomBot",
      description:
        "I designed an AI agent capable of learning to play Mortal Kombat through reinforcement learning, training it to make tactical decisions in both aggressive and defensive gameplay scenarios. By experimenting with different learning strategies for discrete and continuous actions, I was able to guide the agent toward more nuanced combat behavior. Through iterative training and reward tuning, the agent steadily improved and became highly competitive against in-game opponents.",
      skills: [
        { name: "Python", icon: "🐍", tier: "language" },
        { name: "PyTorch", icon: "🔥", tier: "machine learning" },
        { name: "Stable-Baselines3", icon: "🤖", tier: "machine learning" },
        { name: "NumPy", icon: "🔢", tier: "math" },
        { name: "Matplotlib", icon: "📊", tier: "math" },
        { name: "OpenAI Gym", icon: "🏋️", tier: "machine learning" },
      ],
      color: "from-yellow-600 to-yellow-800",
      github: "https://github.com/SamirVarma01/Mortal-KomBot", // placeholder link
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
        return "from-black-400 to-grey-500"
      default:
        return "from-blue-400 to-cyan-600"
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
        className="flex overflow-x-auto space-x-6 pb-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={item} className="min-w-[350px] max-w-xs flex-shrink-0">
            <Card
              className={`p-6 h-full bg-gradient-to-br ${project.color} text-white border-2 border-white/20 game-card overflow-hidden relative`}
            >

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
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button variant="outline" size="sm" className="bg-white/10 hover:bg-white/20 border-white/30">
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </Button>
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button variant="outline" size="sm" className="bg-white/10 hover:bg-white/20 border-white/30">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </Button>
                  </a>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}