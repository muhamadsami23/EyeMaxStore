// "use client"

// import Link from "next/link"
// import { useEffect, useRef } from "react"

// type Category = {
//   name: string
//   href: string
//   image: string
// }

// const categories: Category[] = [
//   {
//     name: "Men Sunglasses",
//     href: "/sunglasses/men",
//     image: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     name: "Men Optics",
//     href: "/optics/men",
//     image: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     name: "Women Sunglasses",
//     href: "/sunglasses/women",
//     image: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     name: "Women Optics",
//     href: "/optics/women",
//     image: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     name: "Kids Glasses",
//     href: "/optics/kids",
//     image: "/placeholder.svg?height=200&width=200",
//   },
//   // 👇 Add more categories here easily
// ]

// export function CategoryMarquee() {
//   const marqueeRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const marquee = marqueeRef.current
//     if (!marquee) return

//     let scrollAmount = 0
//     const scrollSpeed = 0.5 // Adjust speed (lower = slower)

//     const scroll = () => {
//       if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
//         marquee.scrollLeft = 0 // reset to start for infinite effect
//       } else {
//         marquee.scrollLeft += scrollSpeed
//       }
//       requestAnimationFrame(scroll)
//     }

//     requestAnimationFrame(scroll)
//   }, [])

//   return (
//     <section className="relative py-10 overflow-hidden">
//       <h2 className="mb-6 text-center text-2xl font-semibold">Shop by Category</h2>

//       <div
//         ref={marqueeRef}
//         className="flex overflow-x-hidden whitespace-nowrap gap-6 px-4"
//       >
//         {[...categories, ...categories].map((cat, i) => (
//           <Link
//             key={i}
//             href={cat.href}
//             prefetch
//             className="group flex flex-col items-center gap-3 flex-shrink-0"
//           >
//             <div className="overflow-hidden rounded-full border-4 border-border transition-transform group-hover:scale-105">
//               <img
//                 src={cat.image}
//                 alt={cat.name}
//                 width={200}
//                 height={200}
//                 className="aspect-square w-[120px] sm:w-[160px] object-cover"
//               />
//             </div>
//             <span className="text-sm font-medium">{cat.name}</span>
//           </Link>
//         ))}
//       </div>
//     </section>
//   )
// }

"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"

type Category = {
  name: string
  href: string
  image: string
}

const categories: Category[] = [
  { name: "Men Sunglasses", href: "/sunglasses/men", image: "/placeholder.svg?height=200&width=200" },
  { name: "Men Optics", href: "/optics/men", image: "/placeholder.svg?height=200&width=200" },
  { name: "Women Sunglasses", href: "/sunglasses/women", image: "/placeholder.svg?height=200&width=200" },
  { name: "Women Optics", href: "/optics/women", image: "/placeholder.svg?height=200&width=200" },
  { name: "Kids Glasses", href: "/optics/kids", image: "/placeholder.svg?height=200&width=200" },
]

export function CategoryMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    let isDragging = false
    let startX = 0
    let scrollLeft = 0

    // Mouse/Touch events for drag/swipe
    const startDrag = (e: MouseEvent | TouchEvent) => {
      isDragging = true
      startX = 'touches' in e ? e.touches[0].pageX : e.pageX
      scrollLeft = marquee.scrollLeft
    }

    const drag = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return
      const x = 'touches' in e ? e.touches[0].pageX : e.pageX
      const walk = startX - x
      marquee.scrollLeft = scrollLeft + walk
    }

    const endDrag = () => {
      isDragging = false
    }

    marquee.addEventListener('mousedown', startDrag)
    marquee.addEventListener('touchstart', startDrag)
    marquee.addEventListener('mousemove', drag)
    marquee.addEventListener('touchmove', drag)
    marquee.addEventListener('mouseup', endDrag)
    marquee.addEventListener('mouseleave', endDrag)
    marquee.addEventListener('touchend', endDrag)

    // Auto scroll
    const scroll = () => {
      if (!isDragging) {
        const speed = marquee.clientWidth * 0.002 // speed proportional to screen width
        if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
          marquee.scrollLeft = 0
        } else {
          marquee.scrollLeft += speed
        }
      }
      requestAnimationFrame(scroll)
    }

    requestAnimationFrame(scroll)

    // Cleanup
    return () => {
      marquee.removeEventListener('mousedown', startDrag)
      marquee.removeEventListener('touchstart', startDrag)
      marquee.removeEventListener('mousemove', drag)
      marquee.removeEventListener('touchmove', drag)
      marquee.removeEventListener('mouseup', endDrag)
      marquee.removeEventListener('mouseleave', endDrag)
      marquee.removeEventListener('touchend', endDrag)
    }
  }, [])

  return (
    <section className="relative py-8 overflow-hidden">
      <h2 className="mb-4 text-center text-xl sm:text-2xl font-semibold">Shop by Category</h2>

      <div
        ref={marqueeRef}
        className="flex overflow-x-hidden whitespace-nowrap gap-4 sm:gap-6 px-2 sm:px-4 cursor-grab active:cursor-grabbing"
      >
        {[...categories, ...categories].map((cat, i) => (
          <Link
            key={i}
            href={cat.href}
            prefetch
            className="group flex flex-col items-center gap-2 sm:gap-3 flex-shrink-0"
          >
            <div className="overflow-hidden rounded-full border-2 sm:border-4 border-border transition-transform group-hover:scale-105">
              <img
                src={cat.image}
                alt={cat.name}
                width={200}
                height={200}
                className="aspect-square w-[80px] sm:w-[120px] md:w-[160px] object-cover"
              />
            </div>
            <span className="text-xs sm:text-sm font-medium text-center">{cat.name}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
