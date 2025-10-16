import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PRODUCTS } from "@/lib/products"
import { ProductCard } from "@/components/product-card"
import { Hero } from "@/components/hero"

// New 4-item-per-row grid component
function Grid4({ products }: { products: typeof PRODUCTS }) {
  if (!products.length) {
    return (
      <div className="rounded-lg border p-10 text-center text-sm text-muted-foreground">
        No products match your filters.
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default function SunglassesPage() {
  const featured = PRODUCTS.filter((p) => p.category === "sunglasses").slice(0, 8)
  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
      <Hero
        title="Sunglasses"
        subtitle="Engineered lenses, iconic silhouettes."
        image="/eyemax-hero-sunglasses.jpg"
      />
      <div className="flex flex-wrap items-center gap-3">
        <Link href="/sunglasses/men" prefetch>
          <Button variant="secondary">Men's Sunglasses</Button>
        </Link>
        <Link href="/sunglasses/women" prefetch>
          <Button variant="secondary">Women's Sunglasses</Button>
        </Link>
        <Link href="/sunglasses/unisex" prefetch>
          <Button variant="secondary">Unisex Sunglasses</Button>
        </Link>
      </div>

      {/* Use the new 4-item-per-row grid */}
      <Grid4 products={featured} />
    </div>
  )
}
