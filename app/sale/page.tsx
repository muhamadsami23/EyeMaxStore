"use client"

import { useProducts } from "@/lib/store"
import { FiltersPanel, useFilteredProducts } from "@/components/filters"
import { Hero } from "@/components/hero"
import { ProductCard } from "@/components/product-card"

export default function SalePage() {
  const { products } = useProducts()
  const discounted = products.filter((p) => p.salePrice)

  const filterLogic = useFilteredProducts(discounted, {
    search: true,
    brand: true,
    material: true,
    color: false,
    shape: false,
    gender: true,
    price: true,
    discount: true,
    sort: true,
  })

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
      <Hero
        title="Sale Section"
        subtitle="Exclusive markdowns across categories."
        image="/placeholder.svg?height=400&width=1600"
      />
      <div className="gap-6 md:grid md:grid-cols-[280px_1fr]">
        <FiltersPanel
          products={discounted}
          config={{
            search: true,
            brand: true,
            material: true,
            gender: true,
            price: true,
            discount: true,
            sort: true,
          }}
          accessors={filterLogic.accessors}
          facets={filterLogic.facets}
          className="mb-6 md:mb-0"
        />
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Showing {filterLogic.filtered.length} product{filterLogic.filtered.length !== 1 ? "s" : ""}
            </h2>
          </div>

          {/* 4-items-per-row grid */}
          {filterLogic.filtered.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {filterLogic.filtered.map((product) => (
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
