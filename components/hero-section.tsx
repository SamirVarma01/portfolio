"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Samir Varma"
  const [showSubtitle, setShowSubtitle] = useState(false)
  const [showButtons, setShowButtons] = useState(false)

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.substring(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setTimeout(() => setShowSubtitle(true), 500)
        setTimeout(() => setShowButtons(true), 1000)
      }
    }, 150)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <div className="relative z-10 text-center">
      <div className="relative inline-block">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} className="mb-8">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse"></div>
            <Image
              src="/placeholder.svg?height=160&width=160"
              alt="Samir Varma"
              width={160}
              height={160}
              className="rounded-full border-4 border-white dark:border-gray-800 object-cover relative z-10"
            />
          </div>
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 pixel-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
          {typedText}
          <span className="animate-pulse">_</span>
        </h1>

        {showSubtitle && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text font-semibold">
              Leveling Up Through Code, One Project at a Time
              </span>
            </p>

            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-8">
              <div className="bg-gradient-to-br from-red-500 to-red-700 p-4 rounded-lg pixel-borders">
                <p className="text-xs md:text-sm font-bold text-white">Full-Stack</p>
                <p className="text-xs text-white/80">Developer</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-4 rounded-lg pixel-borders">
                <p className="text-xs md:text-sm font-bold text-white">AI/ML</p>
                <p className="text-xs text-white/80">Researcher</p>
              </div>
              <div className="bg-gradient-to-br from-amber-500 to-amber-700 p-4 rounded-lg pixel-borders">
                <p className="text-xs md:text-sm font-bold text-white">Physics</p>
                <p className="text-xs text-white/80">Enthusiast</p>
              </div>
            </div>
          </motion.div>
        )}

        {showButtons && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button variant="outline" size="lg" className="gap-2 pixel-borders">
              <Mail className="h-4 w-4" />
              sv773@scarletmail.rutgers.edu
            </Button>
            <Button variant="outline" size="lg" className="gap-2 pixel-borders">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="gap-2 pixel-borders">
              <Github className="h-4 w-4" />
              GitHub
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
