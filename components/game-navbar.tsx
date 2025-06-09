"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Gamepad2, BookOpen, Briefcase, Code, Trophy, Mail, User, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface GameNavbarProps {
  activeSection: string
  onNavigate: (section: string) => void
}

export default function GameNavbar({ activeSection, onNavigate }: GameNavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { id: "hero", label: "Home", icon: <Gamepad2 className="h-4 w-4" /> },
    { id: "about", label: "About", icon: <User className="h-4 w-4" /> },
    { id: "skills", label: "Skills", icon: <Trophy className="h-4 w-4" /> },
    { id: "experience", label: "Experience", icon: <Briefcase className="h-4 w-4" /> },
    { id: "projects", label: "Projects", icon: <Code className="h-4 w-4" /> },
    { id: "education", label: "Education", icon: <BookOpen className="h-4 w-4" /> },
    { id: "contact", label: "Contact", icon: <Mail className="h-4 w-4" /> },
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 hidden md:block"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="bg-black/50 backdrop-blur-md rounded-lg border border-purple-500/50 p-2 flex justify-center">
            <ul className="flex space-x-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Button
                    variant={activeSection === item.id ? "default" : "ghost"}
                    size="sm"
                    onClick={() => onNavigate(item.id)}
                    className={`relative ${
                      activeSection === item.id ? "bg-purple-600 hover:bg-purple-700" : "hover:bg-purple-600/20"
                    }`}
                  >
                    {item.icon}
                    <span className="ml-2">{item.label}</span>
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                      />
                    )}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Button
              variant="ghost"
              size="icon"
              className="text-white bg-black/50 backdrop-blur-md rounded-lg border border-purple-500/50"
            >
              <Gamepad2 className="h-6 w-6" />
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white bg-black/50 backdrop-blur-md rounded-lg border border-purple-500/50"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-black/90 backdrop-blur-md border-purple-500/50">
                <div className="flex flex-col h-full">
                  <h2 className="text-xl font-bold mb-6 pixel-text text-center">Menu</h2>
                  <nav className="flex-1">
                    <ul className="space-y-2">
                      {navItems.map((item) => (
                        <li key={item.id}>
                          <Button
                            variant={activeSection === item.id ? "default" : "ghost"}
                            className={`w-full justify-start ${
                              activeSection === item.id ? "bg-purple-600 hover:bg-purple-700" : "hover:bg-purple-600/20"
                            }`}
                            onClick={() => {
                              onNavigate(item.id)
                            }}
                          >
                            {item.icon}
                            <span className="ml-2">{item.label}</span>
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </>
  )
}
