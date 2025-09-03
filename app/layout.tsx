import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sleeve It - Encuentra las fundas perfectas",
  description: "Busca juegos de mesa y descubre qué sleeves necesitan sus cartas",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.className} bg-gray-900 text-white antialiased`}>{children}</body>
    </html>
  )
}
