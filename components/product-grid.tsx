// // // import type { Product } from "@/lib/types"
// // // import { ProductCard } from "./product-card"

// // // export function ProductGrid({ products }: { products: Product[] }) {
// // //   if (!products.length) {
// // //     return (
// // //       <div className="rounded-lg border p-10 text-center text-sm text-muted-foreground">
// // //         No products match your filters.
// // //       </div>
// // //     )
// // //   }
// // //   return (
// // //     <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
// // //       {products.map((p) => (
// // //         <ProductCard key={p.id} product={p} />
// // //       ))}
// // //     </div>
// // //   )
// // // }


// // import type { Product } from "@/lib/types"
// // import { ProductCard } from "./product-card"

// // export function ProductGrid({ products }: { products: Product[] }) {
// //   if (!products.length) {
// //     return (
// //       <div className="rounded-lg border p-10 text-center text-sm text-muted-foreground">
// //         No products match your filters.
// //       </div>
// //     )
// //   }

// //   return (
// //     <div className="overflow-x-auto">
// //       <div className="flex flex-nowrap gap-4 pb-4">
// //         {products.map((p) => (
// //           <div
// //             key={p.id}
// //             className="flex-shrink-0 w-[180px] sm:w-[200px] md:w-[220px] lg:w-[250px]"
// //           >
// //             <ProductCard product={p} />
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   )
// // }


// import type { Product } from "@/lib/types"
// import { ProductCard } from "./product-card"

// export function ProductGrid({ products }: { products: Product[] }) {
//   if (!products.length) {
//     return (
//       <div className="rounded-lg border p-10 text-center text-sm text-muted-foreground">
//         No products match your filters.
//       </div>
//     )
//   }

//   return (
//     <div className="overflow-x-auto">
//       <div className="flex flex-nowrap gap-4 pb-4">
//         {products.map((p) => (
//           <div
//             key={p.id}
//             className="flex-shrink-0 w-[180px] sm:w-[200px] md:w-[220px] lg:w-[250px] h-[340px] flex"
//           >
//             <div className="flex flex-col w-full h-full">
//               <ProductCard product={p} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

import type { Product } from "@/lib/types"
import { ProductCard } from "./product-card"

export function ProductGrid({ products }: { products: Product[] }) {
  if (!products.length) {
    return (
      <div className="rounded-lg border p-10 text-center text-sm text-muted-foreground">
        No products match your filters.
      </div>
    )
  }

  return (
    <div className="overflow-x-auto">
      <div className="flex flex-nowrap gap-4 pb-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="flex-shrink-0 w-[180px] sm:w-[200px] md:w-[240px] lg:w-[280px] xl:w-[300px] flex"
          >
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  )
}
