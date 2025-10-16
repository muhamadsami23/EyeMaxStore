"use client"

import { useProducts } from "@/lib/store"
import { FiltersPanel, useFilteredProducts } from "@/components/filters"
import { ProductCard } from "@/components/product-card"

export default function UnisexOpticsPage() {
  const { products } = useProducts()
  const base = products.filter((p) => p.category === "optics" && p.gender === "unisex")
  const logic = useFilteredProducts(base, {
    search: true,
    brand: true,
    material: true,
    color: false,
    shape: true,
    gender: false,
    price: true,
    discount: false,
    sort: true,
  })

  return (
    <div className="mx-auto max-w-7xl gap-6 px-4 py-8 md:grid md:grid-cols-[280px_1fr]">
      <FiltersPanel
        products={base}
        config={{ search: true, brand: true, material: true, shape: true, price: true, sort: true }}
        accessors={logic.accessors}
        facets={logic.facets}
        className="mb-6 md:mb-0"
      />
      <div>
        <h1 className="text-xl font-semibold">Unisex Optics</h1>
        <div className="mt-4">
          {logic.filtered.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {logic.filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center">No products found.</p>
          )}
        </div>
      </div>
    </div>
  )
}
