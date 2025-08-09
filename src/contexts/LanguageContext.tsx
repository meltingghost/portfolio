"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'es' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

// Traducciones de prueba - puedes expandir esto más tarde
const translations = {
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.experience': 'Experiencia',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.blogs': 'Blogs',
    'nav.content': 'Contenido',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.greeting': 'Hola',
    'hero.name': 'Soy Emilio Cabezas',
    'hero.title': ', un Full Stack Developer.',
    'hero.description': 'Creo sitios web limpios, modernos y completamente responsivos que combinan un diseño impecable con funcionalidad perfecta.',
    'hero.projects': 'Mis Proyectos',
    'hero.experience': 'Experiencia',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.blogs': 'Blogs',
    'nav.content': 'Content',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Hello',
    'hero.name': 'I\'m Emilio Cabezas',
    'hero.title': ', a Full Stack Developer.',
    'hero.description': 'I create clean, modern and fully responsive websites that combine impeccable design with perfect functionality.',
    'hero.projects': 'My Projects',
    'hero.experience': 'Experience',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('es')

  // Cargar idioma desde localStorage al montar
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Guardar idioma en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  // Función de traducción
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  const value = {
    language,
    setLanguage,
    t
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
