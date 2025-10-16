"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/lib/store"
import type { Product } from "@/lib/types"

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart()
  const price = product.salePrice ?? product.price
  const pct = product.salePrice ? Math.round(((product.price - product.salePrice) / product.price) * 100) : 0

  return (
    <Card className="group flex flex-col justify-between overflow-hidden border-border/50 transition-shadow hover:shadow-lg w-full h-full">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={product.images[0] || "/placeholder.svg"}
            alt={`${product.name}`}
            width={600}
            height={600}
            className="aspect-square w-full object-cover transition-transform group-hover:scale-105"
            loading="eager"
          />
          {pct > 0 && (
            <Badge className="absolute left-3 top-3 bg-red-600 text-white hover:bg-red-700">
              Flat {pct}% off
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex-grow space-y-1 p-4">
        {/* Product Name */}
        <h3 className="line-clamp-2 text-sm font-medium leading-snug">{product.name}</h3>
        {/* Category */}
        <p className="text-xs text-muted-foreground">
          {product.category === "sunglasses" ? "Sunglasses" : "Optics"}
        </p>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-base font-semibold">Rs. {price.toLocaleString()}</span>
          {product.salePrice && (
            <span className="text-xs text-muted-foreground line-through">
              Rs. {product.price.toLocaleString()}
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full rounded-md bg-transparent"
          variant="outline"
          onClick={() => add(product.id, 1)}
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  )
}
