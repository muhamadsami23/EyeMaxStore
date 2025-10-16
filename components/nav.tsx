// "use client"

// import Link from "next/link"
// import { usePathname, useRouter } from "next/navigation"
// import { useCart, useAuth } from "@/lib/store"
// import { Button } from "@/components/ui/button"
// import { cn } from "@/lib/utils"
// import { useEffect } from "react"
// import { ShoppingCart, Search, User } from "lucide-react"
// import { Menu } from "lucide-react"
// import { useState } from "react"

// const NAV_LINKS = [
//   { href: "/", label: "Home" },
//   { href: "/sale", label: "Sale Section" },
//   { href: "/sunglasses", label: "Sunglasses" },
//   { href: "/optics", label: "Optics" },
//   { href: "/about", label: "About us" },
//   { href: "/contact", label: "Contact" },
// ]

// export function Nav() {
//   const { items } = useCart()
//   const { user, logout } = useAuth()
//   const pathname = usePathname()
//   const router = useRouter()

//   useEffect(() => {
//     ;[
//       "/sale",
//       "/sunglasses/men",
//       "/sunglasses/women",
//       "/sunglasses/unisex",
//       "/optics/men",
//       "/optics/women",
//       "/optics/unisex",
//       "/cart",
//     ].forEach((r) => router.prefetch(r))
//   }, [router])

//   const cartCount = items.reduce((s, i) => s + i.qty, 0)
//   const [drawerOpen, setDrawerOpen] = useState(false)

//   return (
//     <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
//         <Link href="/" className="flex items-center gap-2" prefetch>
//           <img
//             src="/eyemax-logo.jpg"
//             alt="EyeMax logo"
//             width={36}
//             height={36}
//             fetchPriority="high"
//             className="rounded"
//           />
//           <span className="text-xl font-bold tracking-tight">EyeMax</span>
//         </Link>
//         <nav className="hidden items-center gap-6 md:flex">
//           {NAV_LINKS.map((l) => (
//             <Link
//               key={l.href}
//               href={l.href}
//               prefetch
//               className={cn(
//                 "text-sm font-medium transition-colors hover:text-primary",
//                 pathname === l.href ? "text-foreground" : "text-muted-foreground",
//               )}
//             >
//               {l.label}
//             </Link>
//           ))}
//         </nav>
//         <div className="flex items-center gap-3">
//           <Button variant="ghost" size="icon" className="rounded-full">
//             <Search className="h-5 w-5" />
//           </Button>
//           <Link href="/cart" prefetch>
//             <Button variant="ghost" size="icon" className="relative rounded-full">
//               <ShoppingCart className="h-5 w-5" />
//               {cartCount > 0 && (
//                 <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
//                   {cartCount}
//                 </span>
//               )}
//             </Button>
//           </Link>
//           {user ? (
//             <>
//               <Link href={user.role === "admin" ? "/admin" : "/dashboard"} prefetch>
//                 <Button variant="ghost" size="icon" className="rounded-full">
//                   <User className="h-5 w-5" />
//                 </Button>
//               </Link>
//               <Button variant="ghost" size="sm" onClick={() => logout()} className="hidden md:inline-flex">
//                 Logout
//               </Button>
//             </>
//           ) : (
//             <Link href="/login" prefetch>
//               <Button variant="ghost" size="icon" className="rounded-full">
//                 <User className="h-5 w-5" />
//               </Button>
//             </Link>
//           )}
//           <button
//           className="md:hidden rounded-full p-2"
//           onClick={() => setDrawerOpen(true)}
//           aria-label="Open menu"
//         >
//           <Menu className="h-5 w-5" />
//         </button>
//         </div>
//       </div>
//     </header>
    
//   )
// }

"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useCart, useAuth } from "@/lib/store"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useEffect } from "react"
import { ShoppingCart, Search, User, Menu } from "lucide-react"

interface NavProps {
  onHamburgerClick?: () => void
}

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/sale", label: "Sale Section" },
  { href: "/sunglasses", label: "Sunglasses" },
  { href: "/optics", label: "Optics" },
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact" },
]

export function Nav({ onHamburgerClick }: NavProps) {
  const { items } = useCart()
  const { user, logout } = useAuth()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    ;[
      "/sale",
      "/",
      "/sunglasses/",
      "/optics",
      "/cart",
    ].forEach((r) => router.prefetch(r))
  }, [router])

  const cartCount = items.reduce((s, i) => s + i.qty, 0)

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2" prefetch>
          <img
            src="/eyemax-logo.jpg"
            alt="EyeMax logo"
            width={36}
            height={36}
            fetchPriority="high"
            className="rounded"
          />
          <span className="text-xl font-bold tracking-tight">EyeMax</span>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              prefetch
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === l.href ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-3">
          {/* Hamburger for mobile */}
          

          <Button variant="ghost" size="icon" className="rounded-full">
            <Search className="h-5 w-5" />
          </Button>

          <Link href="/cart" prefetch>
            <Button variant="ghost" size="icon" className="relative rounded-full">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>

          {user ? (
            <>
              <Link href={user.role === "admin" ? "/admin" : "/dashboard"} prefetch>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => logout()}
                className="hidden md:inline-flex"
              >
                Logout
              </Button>
            </>
          ) : (
            <Link href="/login" prefetch>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          )}
          {onHamburgerClick && (
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={onHamburgerClick}
            >
              <Menu className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
