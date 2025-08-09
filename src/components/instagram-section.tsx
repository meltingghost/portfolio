"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react"
import Image from "next/image"

const instagramPosts = [
  {
    id: 1,
    image: "/placeholder.svg?height=400&width=300",
    title: "Mi setup de programación",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=400&width=300",
    title: "React vs Vue",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=400&width=300",
    title: "Conceptos de desarrollo web",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=400&width=300",
    title: "Workspace con luces RGB",
  },
  {
    id: 5,
    image: "/placeholder.svg?height=400&width=300",
    title: "Tips de JavaScript",
  },
]

export default function InstagramSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % instagramPosts.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + instagramPosts.length) % instagramPosts.length)
  }

  return (
    <section id="content" className="py-20 bg-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Instagram className="w-16 h-16 text-teal-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Echa un Vistazo a Mis Instagram Reels</h2>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}
            >
              {instagramPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="w-1/4 flex-shrink-0 px-2"
                >
                  <div className="relative group cursor-pointer">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={300}
                      height={400}
                      className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-medium">{post.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <Button
            variant="outline"
            size="lg"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 border-slate-600 text-white hover:bg-slate-700"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 border-slate-600 text-white hover:bg-slate-700"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {instagramPosts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-teal-400" : "bg-slate-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
