"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const projects = [
  {
    title: "E-commerce Platform",
    description: "Una plataforma completa de comercio electrónico construida con Next.js, TypeScript y Stripe para pagos.",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "PostgreSQL"],
    image: "/project1.jpg",
    github: "https://github.com/username/ecommerce",
    live: "https://ecommerce-demo.com",
    featured: true
  },
  {
    title: "Task Management App",
    description: "Aplicación de gestión de tareas con funcionalidades de drag & drop, filtros y colaboración en tiempo real.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    image: "/project2.jpg",
    github: "https://github.com/username/task-app",
    live: "https://task-app-demo.com",
    featured: true
  },
  {
    title: "Weather Dashboard",
    description: "Dashboard del clima con visualizaciones interactivas y datos en tiempo real de múltiples APIs.",
    technologies: ["React", "D3.js", "OpenWeather API", "Chart.js"],
    image: "/project3.jpg",
    github: "https://github.com/username/weather-dashboard",
    live: "https://weather-demo.com",
    featured: false
  },
  {
    title: "Blog Platform",
    description: "Plataforma de blog con sistema de autenticación, editor de texto rico y comentarios.",
    technologies: ["Next.js", "Prisma", "NextAuth", "Markdown", "Vercel"],
    image: "/project4.jpg",
    github: "https://github.com/username/blog-platform",
    live: "https://blog-demo.com",
    featured: false
  }
]

export default function ProjectsSection() {
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
          <h2 className="text-4xl font-bold text-white mb-4">Proyectos Destacados</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Aquí puedes ver algunos de los proyectos en los que he trabajado, desde aplicaciones web completas hasta herramientas específicas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.filter(project => project.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
                <div className="text-white text-6xl font-bold opacity-20">
                  {project.title.charAt(0)}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
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
                    Ver Código
                  </Link>
                  <Link
                    href={project.live}
                    className="flex-1 bg-teal-400 hover:bg-teal-500 text-white py-2 px-4 rounded-lg text-center transition-colors duration-300"
                  >
                    Ver Demo
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
          <h3 className="text-2xl font-semibold text-white mb-8">Otros Proyectos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors duration-300"
              >
                <h4 className="text-xl font-semibold text-white mb-3">{project.title}</h4>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
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
                    Código
                  </Link>
                  <Link
                    href={project.live}
                    className="flex-1 bg-teal-400 hover:bg-teal-500 text-white py-2 px-3 rounded text-sm text-center transition-colors duration-300"
                  >
                    Demo
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
