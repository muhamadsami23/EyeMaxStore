import { Hero } from "@/components/hero"
import { PRODUCTS } from "@/lib/products"
import { ProductGrid } from "@/components/product-grid"
import Link from "next/link"
import {CategoryMarquee} from "@/components/category_line"

export default function HomePage() {
  const sunglasses = PRODUCTS.filter((p) => p.category === "sunglasses").slice(0, 4)
  const optics = PRODUCTS.filter((p) => p.category === "optics").slice(0, 4)
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-8">
      <Hero
        title="Your New Favorite Frames"
        subtitle="Style meets comfort."
        image="/eyemax-hero-sunglasses.jpg"
        cta={{ label: "OPTICS", href: "/optics" }}
        cta2={{ label: "SUNGLASSES", href: "/sunglasses" }}
      />
      

      <CategoryMarquee/>

     <section>
<Link href="/products">
  <h2 className="mb-6 text-center text-2xl font-semibold cursor-pointer hover:text-primary">
    Collections
  </h2>
</Link>
  <div className="grid grid-cols-2 gap-4">
    <Link
      href="/sunglasses"
      prefetch
      className="group relative overflow-hidden rounded-lg"
    >
      <img
        src="/eyemax-hero-sunglasses.jpg"
        alt="Sunglasses collection"
        width={800}
        height={600}
        className="h-56 w-full object-cover transition-transform group-hover:scale-105 sm:h-80"
      />
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6">
        <div className="text-white">
          <h3 className="text-base sm:text-xl font-semibold">Sunglasses →</h3>
        </div>
      </div>
    </Link>

    <Link
      href="/optics"
      prefetch
      className="group relative overflow-hidden rounded-lg"
    >
      <img
        src="/eyemax-hero-optics.jpg"
        alt="Optics collection"
        width={800}
        height={600}
        className="h-56 w-full object-cover transition-transform group-hover:scale-105 sm:h-80"
      />
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6">
        <div className="text-white">
          <h3 className="text-base sm:text-xl font-semibold">Optics →</h3>
        </div>
      </div>
    </Link>
  </div>
</section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Sunglasses</h2>
          <Link href="/sunglasses" prefetch className="text-sm text-muted-foreground hover:text-foreground">
            View all →
          </Link>
        </div>
        <ProductGrid products={sunglasses} />
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Optics</h2>
          <Link href="/optics" prefetch className="text-sm text-muted-foreground hover:text-foreground">
            View all →
          </Link>
        </div>
        <ProductGrid products={optics} />
      </section>
    </div>
  )
}
