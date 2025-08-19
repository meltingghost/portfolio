import type { Metadata } from "next";
import "./globals.css";
import type React from "react"
import { Inter } from "next/font/google"
import { LanguageProvider } from "@/contexts/LanguageContext"

export const metadata: Metadata = {
  title: "Emilio Cabezas - Frontend Developer Portfolio",
  description: "Portfolio personal de un desarrollador frontend especializado en React, Next.js y Tailwind CSS",
  keywords: "frontend developer, react, nextjs, tailwind, portfolio, web development",
  authors: [{ name: "Emilio Cabezas" }],
  openGraph: {
    title: "Emilio Cabezas - Frontend Developer Portfolio",
    description: "Portfolio personal de un desarrollador frontend especializado en React, Next.js y Tailwind CSS",
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

