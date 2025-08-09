"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const blogs = [
  {
    title: "No te Preocupes por la Gestión de Memoria en JS (Pero Tal Vez Deberías)",
    excerpt:
      "Si eres como la mayoría de desarrolladores de JavaScript, la gestión de memoria probablemente no es algo en lo que pienses mucho. Quiero decir, ¿por qué lo harías? JavaScript tiene un recolector de basura...",
    image: "/placeholder.svg?height=200&width=300",
    readTime: "5 min read",
    date: "15 Nov 2023",
  },
  {
    title: "Cómo Usé el Patrón Factory en Mi Paquete npm",
    excerpt:
      "Recientemente publiqué mi primer paquete npm: insta-scoop. Es una herramienta simple que obtiene medios de Instagram (fotos, videos, reels) usando la API de Instagram Graph...",
    image: "/placeholder.svg?height=200&width=300",
    readTime: "7 min read",
    date: "8 Nov 2023",
  },
  {
    title: "Guía Completa de React Hooks",
    excerpt:
      "Los React Hooks revolucionaron la forma en que escribimos componentes de React. En esta guía completa, exploraremos todos los hooks principales y cómo usarlos efectivamente...",
    image: "/placeholder.svg?height=200&width=300",
    readTime: "12 min read",
    date: "2 Nov 2023",
  },
]

export default function BlogsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="blogs" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Echa un Vistazo a Mis Blogs</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{blog.date}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{blog.title}</h3>

                <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>

                <Button variant="ghost" className="text-teal-600 hover:text-teal-700 p-0 h-auto font-medium">
                  Leer Más
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
