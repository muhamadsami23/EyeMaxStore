// // import Link from "next/link"

// // export function Footer() {
// //   return (
// //     <footer className="border-t border-border/50 bg-black text-white">
// //       <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-4">
// //         <div>
// //           <div className="flex items-center gap-2">
// //             <img src="/eyemax-logo.jpg" alt="EyeMax logo" width={32} height={32} className="rounded" />
// //             <h3 className="text-base font-semibold tracking-wide">EyeMax</h3>
// //           </div>
// //           <p className="mt-3 text-sm text-gray-400 text-pretty leading-relaxed">
// //             EyeMax offers stylish, high-quality sunglasses and power glasses, designed for comfort and clarity. Find the
// //             perfect eyewear for your vision needs.
// //           </p>
// //         </div>
// //         <div className="text-sm">
// //           <h4 className="mb-3 font-semibold">QUICK LINKS</h4>
// //           <ul className="space-y-2">
// //             <li>
// //               <Link href="/" className="text-gray-400 hover:text-white">
// //                 Home
// //               </Link>
// //             </li>
// //             <li>
// //               <Link href="/sale" className="text-gray-400 hover:text-white">
// //                 Sale Section
// //               </Link>
// //             </li>
// //             <li>
// //               <Link href="/sunglasses" className="text-gray-400 hover:text-white">
// //                 Sunglasses
// //               </Link>
// //             </li>
// //             <li>
// //               <Link href="/optics" className="text-gray-400 hover:text-white">
// //                 Optics
// //               </Link>
// //             </li>
// //           </ul>
// //         </div>
// //         <div className="text-sm">
// //           <h4 className="mb-3 font-semibold">CORPORATE INFORMATION</h4>
// //           <ul className="space-y-2">
// //             <li className="text-gray-400">talharafi.eyemax@gmail.com</li>
// //             <li className="text-gray-400">03124975555</li>
// //             <li className="text-gray-400">B-76 Block 15 Gulshan-e-Iqbal Karachi</li>
// //           </ul>
// //         </div>
// //         <div className="text-sm">
// //           <h4 className="mb-3 font-semibold">CATEGORIES</h4>
// //           <ul className="space-y-2">
// //             <li>
// //               <Link href="/sunglasses/men" className="text-gray-400 hover:text-white">
// //                 Men Sunglasses
// //               </Link>
// //             </li>
// //             <li>
// //               <Link href="/sunglasses/women" className="text-gray-400 hover:text-white">
// //                 Women Sunglasses
// //               </Link>
// //             </li>
// //             <li>
// //               <Link href="/optics/men" className="text-gray-400 hover:text-white">
// //                 Men optics
// //               </Link>
// //             </li>
// //             <li>
// //               <Link href="/optics/women" className="text-gray-400 hover:text-white">
// //                 Women Optics
// //               </Link>
// //             </li>
// //             <li>
// //               <Link href="/sale" className="text-gray-400 hover:text-white">
// //                 Sale Section
// //               </Link>
// //             </li>
// //           </ul>
// //         </div>
// //       </div>
// //       <div className="border-t border-gray-800 py-4">
// //         <div className="mx-auto max-w-7xl px-4 text-center text-xs text-gray-500">
// //           Designed and Developed By BusyTech.co
// //         </div>
// //       </div>
// //     </footer>
// //   )
// // }

// "use client"

// import { useState } from "react"
// import Link from "next/link"

// export function Footer() {
//   const [open, setOpen] = useState<string | null>(null)

//   const toggle = (section: string) => {
//     setOpen(open === section ? null : section)
//   }

//   return (
//     <footer className="border-t border-border/50 bg-black text-white">
//       {/* ===== Desktop Footer ===== */}
//       <div className="hidden md:grid mx-auto max-w-7xl grid-cols-4 gap-8 px-4 py-10">
//         <div>
//           <div className="flex items-center gap-2">
//             <img src="/eyemax-logo.jpg" alt="EyeMax logo" width={32} height={32} className="rounded" />
//             <h3 className="text-base font-semibold tracking-wide">EyeMax</h3>
//           </div>
//           <p className="mt-3 text-sm text-gray-400 leading-relaxed">
//             EyeMax offers stylish, high-quality sunglasses and power glasses, designed for comfort and clarity. Find
//             the perfect eyewear for your vision needs.
//           </p>
//         </div>

//         <FooterLinksDesktop />
//       </div>

//       {/* ===== Mobile Footer ===== */}
//       <div className="md:hidden px-4 py-8 space-y-4">
//         {/* Logo + Description */}
//         <div className="flex items-center gap-2">
//           <img src="/eyemax-logo.jpg" alt="EyeMax logo" width={32} height={32} className="rounded" />
//           <h3 className="text-base font-semibold tracking-wide">EyeMax</h3>
//         </div>
//         <p className="mt-2 text-sm text-gray-400 leading-relaxed">
//           EyeMax offers stylish, high-quality sunglasses and power glasses, designed for comfort and clarity. Find
//           the perfect eyewear for your vision needs.
//         </p>

//         {/* Collapsible Sections */}
//         {[
//           {
//             id: "links",
//             title: "QUICK LINKS",
//             content: (
//               <ul className="space-y-2 mt-2 text-sm">
//                 <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
//                 <li><Link href="/sale" className="text-gray-400 hover:text-white">Sale Section</Link></li>
//                 <li><Link href="/sunglasses" className="text-gray-400 hover:text-white">Sunglasses</Link></li>
//                 <li><Link href="/optics" className="text-gray-400 hover:text-white">Optics</Link></li>
//               </ul>
//             ),
//           },
//           {
//             id: "info",
//             title: "CORPORATE INFORMATION",
//             content: (
//               <ul className="space-y-2 mt-2 text-sm text-gray-400">
//                 <li>talharafi.eyemax@gmail.com</li>
//                 <li>03124975555</li>
//                 <li>B-76 Block 15 Gulshan-e-Iqbal Karachi</li>
//               </ul>
//             ),
//           },
//           {
//             id: "categories",
//             title: "CATEGORIES",
//             content: (
//               <ul className="space-y-2 mt-2 text-sm">
//                 <li><Link href="/sunglasses/men" className="text-gray-400 hover:text-white">Men Sunglasses</Link></li>
//                 <li><Link href="/sunglasses/women" className="text-gray-400 hover:text-white">Women Sunglasses</Link></li>
//                 <li><Link href="/optics/men" className="text-gray-400 hover:text-white">Men Optics</Link></li>
//                 <li><Link href="/optics/women" className="text-gray-400 hover:text-white">Women Optics</Link></li>
//                 <li><Link href="/sale" className="text-gray-400 hover:text-white">Sale Section</Link></li>
//               </ul>
//             ),
//           },
//         ].map((section) => (
//           <div key={section.id} className="border-t border-gray-800 pt-3">
//             <button
//               className="flex w-full items-center justify-between py-2 text-left text-sm font-semibold"
//               onClick={() => toggle(section.id)}
//             >
//               {section.title}
//               <span
//                 className={`transform transition-transform duration-300 text-xl ${
//                   open === section.id ? "rotate-45" : ""
//                 }`}
//               >
//                 +
//               </span>
//             </button>

//             <div
//               className={`overflow-hidden transition-all duration-300 ${
//                 open === section.id ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
//               }`}
//             >
//               {section.content}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ===== Footer Bottom Bar ===== */}
//       <div className="border-t border-gray-800 py-4">
//         <div className="mx-auto max-w-7xl px-4 text-center text-xs text-gray-500">
//           Designed and Developed By Galaxium Digital
//         </div>
//       </div>
//     </footer>
//   )
// }

// function FooterLinksDesktop() {
//   return (
//     <>
//       <div className="text-sm">
//         <h4 className="mb-3 font-semibold">QUICK LINKS</h4>
//         <ul className="space-y-2">
//           <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
//           <li><Link href="/sale" className="text-gray-400 hover:text-white">Sale Section</Link></li>
//           <li><Link href="/sunglasses" className="text-gray-400 hover:text-white">Sunglasses</Link></li>
//           <li><Link href="/optics" className="text-gray-400 hover:text-white">Optics</Link></li>
//         </ul>
//       </div>

//       <div className="text-sm">
//         <h4 className="mb-3 font-semibold">CORPORATE INFORMATION</h4>
//         <ul className="space-y-2">
//           <li className="text-gray-400">talharafi.eyemax@gmail.com</li>
//           <li className="text-gray-400">03124975555</li>
//           <li className="text-gray-400">B-76 Block 15 Gulshan-e-Iqbal Karachi</li>
//         </ul>
//       </div>

//       <div className="text-sm">
//         <h4 className="mb-3 font-semibold">CATEGORIES</h4>
//         <ul className="space-y-2">
//           <li><Link href="/sunglasses/men" className="text-gray-400 hover:text-white">Men Sunglasses</Link></li>
//           <li><Link href="/sunglasses/women" className="text-gray-400 hover:text-white">Women Sunglasses</Link></li>
//           <li><Link href="/optics/men" className="text-gray-400 hover:text-white">Men Optics</Link></li>
//           <li><Link href="/optics/women" className="text-gray-400 hover:text-white">Women Optics</Link></li>
//           <li><Link href="/sale" className="text-gray-400 hover:text-white">Sale Section</Link></li>
//         </ul>
//       </div>
//     </>
//   )
// }

"use client"

import { useState } from "react"
import Link from "next/link"

export function Footer() {
  const [open, setOpen] = useState<string | null>(null)

  const toggle = (section: string) => {
    setOpen(open === section ? null : section)
  }

  return (
    <footer className="border-t border-border/50 bg-black text-white mb-[70px] md:mb-0">
      {/* ===== Desktop Footer ===== */}
      <div className="hidden md:grid mx-auto max-w-7xl grid-cols-4 gap-8 px-4 py-10">
        <div>
          <div className="flex items-center gap-2">
            <img src="/eyemax-logo.jpg" alt="EyeMax logo" width={32} height={32} className="rounded" />
            <h3 className="text-base font-semibold tracking-wide">EyeMax</h3>
          </div>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            EyeMax offers stylish, high-quality sunglasses and power glasses, designed for comfort and clarity. Find
            the perfect eyewear for your vision needs.
          </p>
        </div>

        <FooterLinksDesktop />
      </div>

      {/* ===== Mobile Footer ===== */}
      <div className="md:hidden px-4 py-8 pb-24 space-y-4">
        {/* 👆 Added pb-24 so the bottom text isn't hidden behind fixed nav */}

        {/* Logo + Description */}
        <div className="flex items-center gap-2">
          <img src="/eyemax-logo.jpg" alt="EyeMax logo" width={32} height={32} className="rounded" />
          <h3 className="text-base font-semibold tracking-wide">EyeMax</h3>
        </div>
        <p className="mt-2 text-sm text-gray-400 leading-relaxed">
          EyeMax offers stylish, high-quality sunglasses and power glasses, designed for comfort and clarity. Find
          the perfect eyewear for your vision needs.
        </p>

        {/* Collapsible Sections */}
        {[
          {
            id: "links",
            title: "QUICK LINKS",
            content: (
              <ul className="space-y-2 mt-2 text-sm">
                <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link href="/sale" className="text-gray-400 hover:text-white">Sale Section</Link></li>
                <li><Link href="/sunglasses" className="text-gray-400 hover:text-white">Sunglasses</Link></li>
                <li><Link href="/optics" className="text-gray-400 hover:text-white">Optics</Link></li>
              </ul>
            ),
          },
          {
            id: "info",
            title: "CORPORATE INFORMATION",
            content: (
              <ul className="space-y-2 mt-2 text-sm text-gray-400">
                <li>talharafi.eyemax@gmail.com</li>
                <li>03124975555</li>
                <li>B-76 Block 15 Gulshan-e-Iqbal Karachi</li>
              </ul>
            ),
          },
          {
            id: "categories",
            title: "CATEGORIES",
            content: (
              <ul className="space-y-2 mt-2 text-sm">
                <li><Link href="/sunglasses/men" className="text-gray-400 hover:text-white">Men Sunglasses</Link></li>
                <li><Link href="/sunglasses/women" className="text-gray-400 hover:text-white">Women Sunglasses</Link></li>
                <li><Link href="/optics/men" className="text-gray-400 hover:text-white">Men Optics</Link></li>
                <li><Link href="/optics/women" className="text-gray-400 hover:text-white">Women Optics</Link></li>
                <li><Link href="/sale" className="text-gray-400 hover:text-white">Sale Section</Link></li>
              </ul>
            ),
          },
        ].map((section) => (
          <div key={section.id} className="border-t border-gray-800 pt-3">
            <button
              className="flex w-full items-center justify-between py-2 text-left text-sm font-semibold"
              onClick={() => toggle(section.id)}
            >
              {section.title}
              <span
                className={`transform transition-transform duration-300 text-xl ${
                  open === section.id ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                open === section.id ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {section.content}
            </div>
          </div>
        ))}
      </div>

      {/* ===== Footer Bottom Bar ===== */}
      <div className="border-t border-gray-800 py-4 bg-black">
        <div className="mx-auto max-w-7xl px-4 text-center text-xs text-gray-500">
          Designed and Developed by <span className="text-white font-semibold">Galaxium Digital</span>
        </div>
      </div>
    </footer>
  )
}

function FooterLinksDesktop() {
  return (
    <>
      <div className="text-sm">
        <h4 className="mb-3 font-semibold">QUICK LINKS</h4>
        <ul className="space-y-2">
          <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
          <li><Link href="/sale" className="text-gray-400 hover:text-white">Sale Section</Link></li>
          <li><Link href="/sunglasses" className="text-gray-400 hover:text-white">Sunglasses</Link></li>
          <li><Link href="/optics" className="text-gray-400 hover:text-white">Optics</Link></li>
        </ul>
      </div>

      <div className="text-sm">
        <h4 className="mb-3 font-semibold">CORPORATE INFORMATION</h4>
        <ul className="space-y-2">
          <li className="text-gray-400">talharafi.eyemax@gmail.com</li>
          <li className="text-gray-400">03124975555</li>
          <li className="text-gray-400">B-76 Block 15 Gulshan-e-Iqbal Karachi</li>
        </ul>
      </div>

      <div className="text-sm">
        <h4 className="mb-3 font-semibold">CATEGORIES</h4>
        <ul className="space-y-2">
          <li><Link href="/sunglasses/men" className="text-gray-400 hover:text-white">Men Sunglasses</Link></li>
          <li><Link href="/sunglasses/women" className="text-gray-400 hover:text-white">Women Sunglasses</Link></li>
          <li><Link href="/optics/men" className="text-gray-400 hover:text-white">Men Optics</Link></li>
          <li><Link href="/optics/women" className="text-gray-400 hover:text-white">Women Optics</Link></li>
          <li><Link href="/sale" className="text-gray-400 hover:text-white">Sale Section</Link></li>
        </ul>
      </div>
    </>
  )
}
