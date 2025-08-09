"use client"

import { motion } from "framer-motion"

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML/CSS", level: 90 },
    ]
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 70 },
      { name: "Python", level: 65 },
      { name: "PostgreSQL", level: 60 },
      { name: "MongoDB", level: 65 },
    ]
  },
  {
    category: "Herramientas",
    technologies: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 60 },
      { name: "AWS", level: 55 },
      { name: "Figma", level: 70 },
      { name: "VS Code", level: 90 },
    ]
  }
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Habilidades & Tecnologías</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            He trabajado con una amplia gama de tecnologías y herramientas para crear aplicaciones web modernas y escalables.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: groupIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-700 rounded-lg p-6"
            >
              <h3 className="text-2xl font-semibold text-teal-400 mb-6 text-center">
                {skillGroup.category}
              </h3>
              <div className="space-y-4">
                {skillGroup.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: techIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{tech.name}</span>
                      <span className="text-teal-400 text-sm">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-2">
                      <motion.div
                        className="bg-teal-400 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        transition={{ duration: 1, delay: techIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
