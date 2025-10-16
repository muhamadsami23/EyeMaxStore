"use client"

import type React from "react"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import MobileBottomNav from "@/components/MobileBottomNav"
import { useState } from "react"
import Link from "next/link"

const PRELOAD_IMAGES = [
  "/eyemax-hero-sunglasses.jpg",
  "/eyemax-hero-optics.jpg",
  "/logo-eyemax.jpg",
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const pages = [
    { label: "Home", href: "/" },
    { label: "Sunglasses", href: "/sunglasses" },
    {
      label: "Optics",href: "/optics"
    },
    { label: "Sale", href: "/sale" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <html lang="en" className="antialiased">
      <head>
        {PRELOAD_IMAGES.map((href) => (
          <link key={href} rel="preload" as="image" href={href} />
        ))}
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {/* Desktop Nav + Hamburger */}
        <Nav onHamburgerClick={() => setDrawerOpen(true)} />

        {/* Mobile Drawer */}
        {drawerOpen && (
          <div className="fixed inset-0 z-50 flex md:hidden">
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/70"
              onClick={() => setDrawerOpen(false)}
            />

            {/* Drawer Panel */}
            <div className="relative ml-auto w-3/4 max-w-xs bg-black h-full p-6 overflow-y-auto shadow-lg flex flex-col">
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-white text-2xl"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close drawer"
              >
                ✕
              </button>

              {/* Nav Links */}
              <nav className="mt-8 flex flex-col gap-4 text-lg text-white">
              </nav>
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="min-h-dvh pb-28 sm:pb-0">{children}</main>

        {/* Footer */}
        <Footer />

        {/* Mobile Bottom Nav */}
        <MobileBottomNav />

        {/* Analytics */}
        <Analytics />
      </body>
    </html>
  )
}
