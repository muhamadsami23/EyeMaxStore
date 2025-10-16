"use client"

import { useState, useEffect } from "react"
import { useProducts } from "@/lib/store"
import { FiltersPanel, useFilteredProducts } from "@/components/filters"
import { Hero } from "@/components/hero"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card" // <- your card

export default function ProductsPage() {
  const { products } = useProducts()
  const [genderFilter, setGenderFilter] = useState<"men" | "women" | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "auto"
  }, [drawerOpen])

  const base = products.filter(
    (p) =>
      (p.category === "sunglasses" || p.category === "optics") &&
      (!genderFilter || p.gender === genderFilter)
  )

  const logic = useFilteredProducts(base, {
    search: true,
    brand: true,
    material: true,
    color: true,
    shape: true,
    gender: true,
    price: true,
    discount: true,
    sort: true,
  })

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 space-y-8 relative">
      {/* Hero Section */}
    <Hero
    title="Our Products"
    subtitle="Engineered lenses, iconic silhouettes."
    image="/eyemax-hero-sunglasses.jpg"
  />

      {/* Gender Toggle */}
      <div className="flex justify-center gap-4">
        <Button
          variant={genderFilter === null ? "default" : "outline"}
          onClick={() => setGenderFilter(null)}
        >
          All
        </Button>
        <Button
          variant={genderFilter === "men" ? "default" : "outline"}
          onClick={() => setGenderFilter("men")}
        >
          Men
        </Button>
        <Button
          variant={genderFilter === "women" ? "default" : "outline"}
          onClick={() => setGenderFilter("women")}
        >
          Women
        </Button>
      </div>

      {/* Total number of products */}
      <p className="text-gray-600 text-sm text-center">
        {logic.filtered.length} article{logic.filtered.length !== 1 ? "s" : ""}
      </p>

      {/* Mobile drawer toggle */}
      <div className="md:hidden flex justify-end mb-4">
        <Button onClick={() => setDrawerOpen(true)}>Filters</Button>
      </div>

      <div className="md:grid md:grid-cols-[280px_1fr] gap-6 relative">
        {/* Desktop Filters */}
        <div className="hidden md:block">
          <FiltersPanel
            products={base}
            config={{
              search: true,
              brand: true,
              material: true,
              color: true,
              shape: true,
              gender: true,
              price: true,
              discount: true,
              sort: true,
            }}
            accessors={logic.accessors}
            facets={logic.facets}
          />
        </div>

        {/* Product Grid */}
        <div>
          <h1 className="text-xl font-semibold mb-4">Products</h1>
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

        {/* Mobile Drawer */}
        {drawerOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-30 z-40"
              onClick={() => setDrawerOpen(false)}
            />

            {/* Drawer panel */}
            <div className="fixed top-0 right-0 z-50 w-72 h-screen bg-white p-4 overflow-y-auto shadow-lg transform transition-transform duration-300 translate-x-0 pb-24">
              {/* pb-24 to avoid bottom navbar */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-lg">Filters</h2>
                <Button variant="outline" onClick={() => setDrawerOpen(false)}>
                  Close
                </Button>
              </div>
              <FiltersPanel
                products={base}
                config={{
                  search: true,
                  brand: true,
                  material: true,
                  color: true,
                  shape: true,
                  gender: true,
                  price: true,
                  discount: true,
                  sort: true,
                }}
                accessors={logic.accessors}
                facets={logic.facets}
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}
