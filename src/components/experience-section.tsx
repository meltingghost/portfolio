"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

const experiences = [
  {
    titleKey: "experience.frontendDev",
    periodKey: "experience.period1",
    descriptionKey: "experience.description1",
  },
  {
    titleKey: "experience.frontendIntern",
    periodKey: "experience.period2",
    descriptionKey: "experience.description2",
  },
  {
    titleKey: "experience.learningWeb",
    periodKey: "experience.period3",
    descriptionKey: "experience.description3",
  },
]

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { language, t } = useLanguage()
  
  // Función para descargar CV según el idioma
  const handleDownloadCV = () => {
    const cvFileName = language === 'es' ? 'cv_español.pdf' : 'cv_english.pdf'
    const link = document.createElement('a')
    link.href = `/${cvFileName}`
    link.download = cvFileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="experience" className="py-20 bg-slate-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">{t('experience.title')}</h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              onClick={handleDownloadCV}
              size="lg"
              className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 border border-slate-600"
            >
              <Download className="w-5 h-5 mr-2" />
              {t('experience.downloadCV')}
            </Button>
          </motion.div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-teal-400"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.titleKey}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex items-start"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  className="absolute left-6 w-4 h-4 bg-teal-400 rounded-full border-4 border-slate-700 z-10"
                />

                {/* Content */}
                <div className="ml-16 bg-slate-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] w-full">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">{t(experience.titleKey)}</h3>
                    <p className="text-teal-400 font-medium text-sm uppercase tracking-wide">{t(experience.periodKey)}</p>
                  </div>

                  <p className="text-gray-300 leading-relaxed">{t(experience.descriptionKey)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
