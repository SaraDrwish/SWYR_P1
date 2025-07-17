import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { CartProvider } from "./context/CartContext"
import Header from "./components/Header"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "عطور سوير - متجر العطور الفاخرة",
  description: "اكتشف مجموعتنا الفريدة من العطور الفاخرة والأصيلة من مختلف أنحاء العالم",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main className="pt-16">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
