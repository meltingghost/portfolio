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
    // 'nav.blogs': 'Blogs',
    // 'nav.content': 'Contenido',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.greeting': 'Hola',
    'hero.name': 'Soy Emilio Cabezas',
    'hero.title': ', un Full Stack Developer.',
    'hero.description': 'Desarrollador full-stack con más de 5 años de experiencia en el ecosistema de JavaScript a lo largo del ciclo de desarrollo de software.',
    'hero.projects': 'Mis Proyectos',
    'hero.experience': 'Experiencia',
    
    // Experience Section
    'experience.title': 'Experiencia',
    'experience.downloadCV': 'Descargar CV',
    'experience.frontendDev': 'Desarrollador Full Stack',
    'experience.frontendIntern': 'Desarrollador Web',
    'experience.learningWeb': 'Freelance y Proyectos Personales',
    'experience.period1': 'DIC 2024 - PRESENTE',
    'experience.period2': 'NOV 2023 - MAY 2024',
    'experience.period3': 'ENE 2020',
    'experience.description1': 'Contribuyendo al desarrollo de diseños profesionales y funcionalidades prácticas para proyectos web y aplicaciones. Utilizando tecnologías como Angular, SCSS, Capacitor y Node.js para crear soluciones de alta calidad, enfocándome en el diseño limpio y experiencias de usuario fluidas.',
    'experience.description2': 'Desarrollo de aplicaciones web con un enfoque en la gestión y visualización de datos. Aprendí tecnologías como React, Next.js, Docker, Vue, Vercel, APIs y Tailwind.',
    'experience.description3': 'Desarrollé proyectos independientes para adquirir experiencia práctica, desde iniciativas de aprendizaje personal hasta soluciones para empresas públicas, incluyendo escuelas y organizaciones gubernamentales, así como una empresa privada.',
    
    // Skills Section
    'skills.title': 'Habilidades & Tecnologías',
    'skills.subtitle': 'He trabajado con una amplia gama de tecnologías y herramientas para crear aplicaciones web modernas y escalables.',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Herramientas',
    'skills.alsoKnow': 'También conozco',
    
    // Projects Section
    'projects.title': 'Proyectos Destacados',
    'projects.subtitle': 'Aquí puedes ver algunos de los proyectos en los que he trabajado, desde aplicaciones web completas hasta herramientas específicas.',
    'projects.otherProjects': 'Otros Proyectos',
    'projects.viewCode': 'Ver Código',
    'projects.viewDemo': 'Ver Demo',
    'projects.code': 'Código',
    'projects.demo': 'Demo',
    
    // Individual Projects
    'projects.musicNews.title': 'Blog de Noticias de Música',
    'projects.musicNews.description': 'Blog de noticias automatizadas construido con Next.js. Recoge artículos desde la web, los analiza con Mozilla Readability, los clasifica usando modelos de incrustación de OpenAI y los publica automáticamente.',
    
    'projects.atilioMotors.title': 'Atilio Motors',
    'projects.atilioMotors.description': 'Landing page para un concesionario de automóviles construida con Next.js. Permite visualizar el catálogo, consultar planes y realizar órdenes de compra.',
    
    'projects.gestorAdminJJ.title': 'Gestor Admin JJ',
    'projects.gestorAdminJJ.description': 'Aplicación Web para la Dirección de los Procesos Administrativos de la Escuela Bolivariana Presbítero José de Jesús Espinoza realizado como Proyecto Socio Tecnológico IV para la Universidad Politécnica Territorial del Estado Trujillo',
    
    'projects.gestorTramitesLeon.title': 'Gestor Tramites León',
    'projects.gestorTramitesLeon.description': 'Aplicación Web para la Dirección de los Procesos Administrativos de la Escuela Bolivariana Presbítero José de Jesús Espinoza realizado como Proyecto Socio Tecnológico IV para la Universidad Politécnica Territorial del Estado Trujillo',
    
    'projects.pokedex.title': 'Pokédex',
    'projects.pokedex.description': 'Pokedex hecha con Typescript, Tailwind y el API de la Pokedex',
    
    // Contact Section
    'contact.title': 'Contacto',
    'contact.sendEmail': 'Envíame un Email',
    'contact.footer': 'Diseñado y Construido por Emilio Cabezas © 2025',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    // 'nav.blogs': 'Blogs',
    // 'nav.content': 'Content',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Hello',
    'hero.name': 'I\'m Emilio Cabezas',
    'hero.title': ', a Full Stack Developer.',
    'hero.description': 'I create clean, modern and fully responsive websites that combine impeccable design with perfect functionality.',
    'hero.projects': 'My Projects',
    'hero.experience': 'Experience',
    
    // Experience Section
    'experience.title': 'Experience',
    'experience.downloadCV': 'Download CV',
    'experience.frontendDev': 'Full Stack Developer',
    'experience.frontendIntern': 'Web Developer',
    'experience.learningWeb': 'Freelance and Personal Projects',
    'experience.period1': 'DEC 2024 - PRESENT',
    'experience.period2': 'NOV 2023 - MAY 2024',
    'experience.period3': 'JAN 2020',
    'experience.description1': 'Contributing to the development of modern, professional designs and practical functionalities for diverse web and app projects. Utilizing technologies such as Angular, SCSS, Capacitor, and Node.js to create high-quality, user-focused solutions.',
    'experience.description2': 'Contributed to multiple web applications with a strong focus on data management and visualization. Gained proficiency in technologies such as React, Next.js, Docker, Vue, Vercel, APIs, and Tailwind.',
    'experience.description3': 'Independently developed multiple projects to gain hands-on experience, ranging from personal learning initiatives to solutions for public enterprises, including schools and government organizations, as well as a private business. These projects were primarily built using PHP, Laravel, plain HTML, CSS, JavaScript, AJAX, and MySQL databases.',
    
    // Skills Section
    'skills.title': 'Skills & Technologies',
    'skills.subtitle': 'I have worked with a wide range of technologies and tools to create modern and scalable web applications.',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Tools',
    'skills.alsoKnow': 'Also know',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Here you can see some of the projects I\'ve worked on, from complete web applications to specific tools.',
    'projects.otherProjects': 'Other Projects',
    'projects.viewCode': 'View Code',
    'projects.viewDemo': 'View Demo',
    'projects.code': 'Code',
    'projects.demo': 'Demo',
    
    // Individual Projects
    'projects.musicNews.title': 'Music News Blog',
    'projects.musicNews.description': 'Automated news blog built with Next.js. Collects articles from the web, analyzes them with Mozilla Readability, classifies them using OpenAI embedding models, and publishes them automatically.',
    
    'projects.atilioMotors.title': 'Atilio Motors',
    'projects.atilioMotors.description': 'Landing page for an automobile dealership built with Next.js. Allows you to view the catalog, consult plans, and place orders.',
    
    'projects.gestorAdminJJ.title': 'Gestor Admin JJ',
    'projects.gestorAdminJJ.description': 'Web application for the management of administrative processes at the Bolivariana Presbítero José de Jesús Espinoza School, developed as a Socio Tecnológico IV project for the Trujillo State Polytechnic University',
    
    'projects.gestorTramitesLeon.title': 'Gestor Tramites León',
    'projects.gestorTramitesLeon.description': 'Web application for the management of administrative processes at the Bolivariana Presbítero José de Jesús Espinoza School, developed as a Socio Tecnológico IV project for the Trujillo State Polytechnic University',
    
    'projects.pokedex.title': 'Pokédex',
    'projects.pokedex.description': 'Pokédex made with Typescript, Tailwind, and the Pokedex API',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.sendEmail': 'Send me an Email',
    'contact.footer': 'Designed and Built by Emilio Cabezas © 2025',
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
