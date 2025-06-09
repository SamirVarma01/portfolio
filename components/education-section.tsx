"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, GraduationCap, Users } from "lucide-react"

export default function EducationSection() {
  const courses = [
    "Data Structures and Algorithms",
    "Computer Architecture",
    "Database Management",
    "Software Engineering",
    "Linear Algebra",
    "Multivariable Calculus",
    "Differential Equations",
    "Probability and Random Processes",
  ]

  const involvements = [
    "IEEE Honors Society",
    "Engineering Honors Academy",
    "Quantitative Finance Club",
    "Data Science Club",
    "Book Club",
  ]

  const leadership = [
    {
      title: "Head of Event Organization",
      organization: "Engineering Honors Academy Events Committee",
      period: "Jan. 2024 - Present",
      description:
        "Spearheaded various professional events, fostering an inclusive environment for 250+ engineering honors academy scholars",
    },
    {
      title: "Discussion Group Leader",
      organization: "Rutgers Engineers Assessing Literature",
      period: "Feb. 2024 - Present",
      description:
        "Led biweekly meetings with honors engineering scholars to collaboratively discuss literary works, such as research papers and novels",
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
        <BookOpen className="inline-block mr-2" /> Education & Leadership
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="p-6 h-full bg-gradient-to-br from-blue-600 to-blue-800 text-white border-2 border-white/20 game-card">
            <div className="flex items-center mb-4">
              <GraduationCap className="h-6 w-6 mr-2" />
              <h3 className="text-xl font-bold pixel-text">Education</h3>
            </div>

            <div className="mb-4">
              <h4 className="font-bold">Rutgers University, New Brunswick - Honors College</h4>
              <p className="text-sm text-white/80">
                B.S. in Computer Engineering, B.S. in Mathematics, Minor in Physics
              </p>
              <p className="text-sm text-white/80">Aug. 2023 - May 2027</p>
              <p className="text-sm font-semibold mt-1">GPA: 3.956/4.000</p>
            </div>

            <div>
              <h4 className="font-bold mb-2">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-2">
                {courses.map((course) => (
                  <Badge key={course} variant="outline" className="bg-black/30 border-white/30">
                    {course}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="p-6 h-full bg-gradient-to-br from-purple-600 to-purple-800 text-white border-2 border-white/20 game-card">
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 mr-2" />
              <h3 className="text-xl font-bold pixel-text">Involvement</h3>
            </div>

            <div className="mb-6">
              <h4 className="font-bold mb-2">Campus Organizations</h4>
              <div className="flex flex-wrap gap-2">
                {involvements.map((involvement) => (
                  <Badge key={involvement} variant="outline" className="bg-black/30 border-white/30">
                    {involvement}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-2">Leadership Roles</h4>
              <div className="space-y-4">
                {leadership.map((role, index) => (
                  <div key={index} className="border-l-2 border-white/30 pl-4">
                    <h5 className="font-bold">{role.title}</h5>
                    <p className="text-sm text-white/80">{role.organization}</p>
                    <p className="text-xs text-white/70">{role.period}</p>
                    <p className="text-sm mt-1">{role.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-4 rounded-lg pixel-borders inline-block">
          <p className="text-black font-bold pixel-text">ACHIEVEMENT UNLOCKED: ACADEMIC EXCELLENCE</p>
        </div>
      </motion.div>
    </motion.div>
  )
}
