"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Instagram, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { t } = useLanguage()

  return (
    <footer id="contact" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">{t('contact.title')}</h2>

          <div className="flex justify-center space-x-6 mb-8">
            <motion.a
              href="https://github.com/meltingghost"
              target="_blank"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-slate-800 rounded-full text-white hover:bg-slate-700 transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/emilio-cabezas/"
              target="_blank"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-slate-800 rounded-full text-white hover:bg-slate-700 transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/another_ghostie/"
              target="_blank"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-slate-800 rounded-full text-white hover:bg-slate-700 transition-colors duration-300"
            >
              <Instagram className="w-6 h-6" />
            </motion.a>
          </div>

          <Button
            size="lg"
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            <Mail className="w-5 h-5 mr-2" />
            {t('contact.sendEmail')}
          </Button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-slate-700"
          >
            <p className="text-gray-400">{t('contact.footer')}</p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
