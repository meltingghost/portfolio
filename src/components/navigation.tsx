"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"
import { Globe } from "lucide-react"

const navItems = [
  { key: "nav.home", href: "#home" },
  { key: "nav.experience", href: "#experience" },
  { key: "nav.skills", href: "#skills" },
  { key: "nav.projects", href: "#projects" },
  { key: "nav.blogs", href: "#blogs" },
  { key: "nav.content", href: "#content" },
  { key: "nav.contact", href: "#contact" },
]

export default function Navigation() {
  const [activeItem, setActiveItem] = useState("Home")
  const { language, setLanguage, t } = useLanguage()

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-800/90 backdrop-blur-sm border-b border-slate-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div whileHover={{ scale: 1.1 }} className="text-white font-bold text-xl">
            EC
          </motion.div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setActiveItem(t(item.key))}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative ${
                      activeItem === t(item.key)
                        ? "text-teal-400 bg-teal-400/10"
                        : "text-gray-300 hover:text-white hover:bg-slate-700"
                    }`}
                  >
                    {t(item.key)}
                    {activeItem === t(item.key) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-400"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Language Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-700 transition-all duration-300"
              title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase font-bold text-xs">
                {language === 'es' ? 'EN' : 'ES'}
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
