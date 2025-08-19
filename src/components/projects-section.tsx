"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"

const projects = [
  {
    titleKey: 'projects.musicNews.title',
    descriptionKey: 'projects.musicNews.description',
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Brave Search API", "OpenAI Model", "Vercel"],
    image: "/images/music-news.png",
    github: "https://github.com/meltingghost/music-news",
    live: "https://music.bocono-labs.com/en",
    featured: true
  },
  {
    titleKey: 'projects.atilioMotors.title',
    descriptionKey: 'projects.atilioMotors.description',
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Neon", "Vercel"],
    image: "/images/atilio-motors.png",
    github: "https://github.com/meltingghost/atilio-motors",
    live: "https://atilio-motors.vercel.app/",
    featured: true
  },
  {
    titleKey: 'projects.gestorAdminJJ.title',
    descriptionKey: 'projects.gestorAdminJJ.description',
    technologies: ["JavaScript", "HTML", "CSS", "PHP", "MySQL", "Bootstrap", "JQuery", "Vercel"],
    image: "https://via.placeholder.com/400x300/1e293b/64748b?text=Gestor+Admin+JJ",
    github: "https://github.com/meltingghost/gestor_admin_jj",
    live: "https://gestor-admin-jj.vercel.app/",
    featured: false
  },
  {
    titleKey: 'projects.gestorTramitesLeon.title',
    descriptionKey: 'projects.gestorTramitesLeon.description',
    technologies: ["JavaScript", "HTML", "CSS", "PHP", "MySQL", "Bootstrap", "JQuery", "Vercel"],
    image: "https://via.placeholder.com/400x300/1e293b/64748b?text=Gestor+Tramites+Leon",
    github: "https://github.com/meltingghost/gestor_tramites_leon",
    live: "https://blog-demo.com",
    featured: false
  },
  {
    titleKey: 'projects.pokedex.title',
    descriptionKey: 'projects.pokedex.description',
    technologies: ["TypeScript", "Tailwind", "Vercel"],
    image: "https://via.placeholder.com/400x300/1e293b/64748b?text=Pokédex",
    github: "https://github.com/meltingghost/pokedex_typescript_tailwind",
    live: "https://pokedex-meltingghost.vercel.app/",
    featured: false
  }
]

export default function ProjectsSection() {
  const { t } = useLanguage()
  
  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">{t('projects.title')}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.filter(project => project.featured).map((project, index) => (
            <motion.div
              key={project.titleKey}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center relative overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={t(project.titleKey)}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="text-white text-6xl font-bold opacity-20">
                    {t(project.titleKey).charAt(0)}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-3">{t(project.titleKey)}</h3>
                <p className="text-gray-300 mb-4">{t(project.descriptionKey)}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-teal-400/20 text-teal-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link
                    href={project.github}
                    className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-lg text-center transition-colors duration-300"
                  >
                    {t('projects.viewCode')}
                  </Link>
                  <Link
                    href={project.live}
                    className="flex-1 bg-teal-400 hover:bg-teal-500 text-white py-2 px-4 rounded-lg text-center transition-colors duration-300"
                  >
                    {t('projects.viewDemo')}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-8">{t('projects.otherProjects')}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <motion.div
                key={project.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors duration-300"
              >
                <h4 className="text-xl font-semibold text-white mb-3">{t(project.titleKey)}</h4>
                <p className="text-gray-300 mb-4 text-sm">{t(project.descriptionKey)}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-teal-400/20 text-teal-400 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Link
                    href={project.github}
                    className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 px-3 rounded text-sm text-center transition-colors duration-300"
                  >
                    {t('projects.code')}
                  </Link>
                  <Link
                    href={project.live}
                    className="flex-1 bg-teal-400 hover:bg-teal-500 text-white py-2 px-3 rounded text-sm text-center transition-colors duration-300"
                  >
                    {t('projects.demo')}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
