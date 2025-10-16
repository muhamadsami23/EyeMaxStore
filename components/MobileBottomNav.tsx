"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, ShoppingBag, ShoppingCart, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export default function MobileBottomNav() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/sunglasses", label: "Products", icon: ShoppingBag },
    { href: "/cart", label: "Cart", icon: ShoppingCart },
  ]

  const whatsappNumber = "923001234567" // 👈 Replace with your WhatsApp number (without +)
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello!%20I%20need%20assistance`

  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full border-t border-white/10 bg-black text-white sm:hidden">
      <div className="flex justify-around items-center px-3 py-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center text-xs transition-all duration-200",
                isActive
                  ? "text-white font-bold scale-110"
                  : "text-white/70 hover:text-white"
              )}
            >
              <Icon size={22} strokeWidth={2} />
              <span className="mt-0.5">{item.label}</span>
            </Link>
          )
        })}

        {/* WhatsApp Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-xs text-white/70 hover:text-white"
        >
          <MessageCircle size={22} strokeWidth={2} />
          <span className="mt-0.5">Chat</span>
        </a>
      </div>
    </nav>
  )
}
