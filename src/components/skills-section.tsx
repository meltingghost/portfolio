"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/LanguageContext"

const skills = [
  {
    categoryKey: "skills.frontend",
    coreTechnologies: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 85 },
    ],
    alsoKnow: ["HTML/CSS", "Angular", "JSON", "JQuery", "SCSS", "Vue.js"]
  },
  {
    categoryKey: "skills.backend",
    coreTechnologies: [
      { name: "Node.js", level: 80 },
      { name: "PostgreSQL", level: 90 },
      { name: "Laravel", level: 70 },
      { name: "Express", level: 70 },
    ],
    alsoKnow: ["MongoDB", "DynamoDB", "Serverless", "Lambda", "S3", "Athena", "PHP", "MySQL"]
  },
  {
    categoryKey: "skills.tools",
    coreTechnologies: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 60 },
      { name: "AWS", level: 55 },
      { name: "VS Code", level: 90 },
    ],
    alsoKnow: ["Npm/Yarn", "Vercel", "Figma", "Postman", "Jira"]
  }
]

export default function SkillsSection() {
  const { t } = useLanguage()
  
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
          <h2 className="text-4xl font-bold text-white mb-4">{t('skills.title')}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.categoryKey}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: groupIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-700 rounded-lg p-6"
            >
              <h3 className="text-2xl font-semibold text-teal-400 mb-6 text-center">
                {t(skillGroup.categoryKey)}
              </h3>
              <div className="space-y-4">
                {skillGroup.coreTechnologies.map((tech, techIndex) => (
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
                
                <div className="pt-4 border-t border-slate-600">
                  <h4 className="text-sm font-medium text-teal-400 mb-3">{t('skills.alsoKnow')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.alsoKnow.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-slate-600 text-gray-300 text-xs rounded-full hover:bg-slate-500 transition-colors duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
