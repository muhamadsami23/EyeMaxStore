"use client"

import { Dialog, Transition } from "@headlessui/react"
import Link from "next/link"
import { Fragment } from "react"
import { X } from "lucide-react"

interface MobileNavDrawerProps {
  open: boolean
  onClose: () => void
}

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/sale", label: "Sale Section" },
  { href: "/sunglasses", label: "Sunglasses" },
  { href: "/optics", label: "Optics" },
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact" },
]

export function MobileNavDrawer({ open, onClose }: MobileNavDrawerProps) {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Overlay */}
        <Transition.Child
          as={Fragment}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-50"
          leave="transition-opacity duration-200"
          leaveFrom="opacity-50"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        {/* Drawer panel */}
        <Transition.Child
          as={Fragment}
          enter="transition-transform duration-300"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition-transform duration-200"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <Dialog.Panel className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-black text-white shadow-xl p-6 flex flex-col">
            {/* Close button */}
            <button
              className="self-end mb-6 text-2xl text-white hover:text-gray-300"
              onClick={onClose}
              aria-label="Close menu"
            >
              <X />
            </button>

            {/* Nav links */}
            <nav className="flex flex-col gap-6 mt-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="text-white hover:text-gray-300 font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}
