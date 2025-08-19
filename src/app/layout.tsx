import type { Metadata } from "next";
import "./globals.css";
import type React from "react"
import { Inter } from "next/font/google"
import { LanguageProvider } from "@/contexts/LanguageContext"

export const metadata: Metadata = {
  title: "Emilio Cabezas - Full Stack Developer Portfolio",
  description: "Portfolio personal de un desarrollador full stack especializado en React, Next.js, Tailwind CSS, Node.js, MongoDB, Express, y más",
  keywords: "full stack developer, react, nextjs, tailwind, portfolio, web development",
  authors: [{ name: "Emilio Cabezas" }],
  openGraph: {
    title: "Emilio Cabezas - Full Stack Developer Portfolio",
    description: "Portfolio personal de un desarrollador full stack especializado en React, Next.js, Tailwind CSS, Node.js, MongoDB, Express, y más",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}

const inter = Inter({ subsets: ["latin"] })

