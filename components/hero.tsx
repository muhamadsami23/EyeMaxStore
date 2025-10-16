"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

type Props = {
  title: string
  subtitle?: string
  image: string
  cta?: { label: string; href: string }
  cta2?: { label: string; href: string }
}

export function Hero({ title, subtitle, image, cta, cta2 }: Props) {
  return (
    <section className="relative w-full overflow-hidden rounded-lg">
      {/* Hero Image */}
      <img
        src={image || "/placeholder.svg"}
        alt="Hero Image"
        width={1600}
        height={800}
        className="w-full object-cover h-[30vh] sm:h-[40vh] md:h-[55vh] lg:h-[65vh] xl:h-[75vh]"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10" />

      {/* Bottom-left Text & Buttons */}
      <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 md:bottom-12 md:left-12 lg:bottom-16 lg:left-16 z-20 text-left max-w-full md:max-w-lg">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
          {title}
        </h1>

        {/* Subheading */}
        {subtitle && (
          <p className="mt-1 sm:mt-2 text-white/90 text-sm sm:text-base md:text-lg drop-shadow-md">
            {subtitle}
          </p>
        )}

        {/* Buttons */}
        {(cta || cta2) && (
          <div className="mt-4 flex flex-wrap gap-3">
            {cta && (
              <Link href={cta.href} prefetch>
                <Button
                  size="lg"
                  className="rounded-2xl bg-gradient-to-r from-red-500 to-yellow-500 text-white px-6 py-3 font-semibold shadow-lg hover:from-red-600 hover:to-yellow-600 transition-colors"
                >
                  {cta.label}
                </Button>
              </Link>
            )}
            {cta2 && (
              <Link href={cta2.href} prefetch>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-2xl border-white text-white px-6 py-3 font-semibold hover:bg-white/20 shadow-lg transition-colors"
                >
                  {cta2.label}
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
