"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface FloatingElement {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  type: "pokemon" | "jjk" | "guitar" | "code"
}

export default function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([])

  useEffect(() => {
    // Generate random floating elements
    const newElements: FloatingElement[] = []
    const types = ["pokemon", "jjk", "guitar", "code"]

    for (let i = 0; i < 15; i++) {
      newElements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 10,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
        type: types[Math.floor(Math.random() * types.length)] as "pokemon" | "jjk" | "guitar" | "code",
      })
    }

    setElements(newElements)
  }, [])

  const getElementContent = (type: string, size: number) => {
    switch (type) {
      case "pokemon":
        return "⚡"
      case "jjk":
        return "👁️"
      case "guitar":
        return "🎸"
      case "code":
        return "💻"
      default:
        return "✨"
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute text-white/20"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            fontSize: `${element.size}px`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, element.id % 2 === 0 ? 50 : -50, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: element.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: element.delay,
            ease: "easeInOut",
          }}
        >
          {getElementContent(element.type, element.size)}
        </motion.div>
      ))}
    </div>
  )
}
