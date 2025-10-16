"use client"

import { useMemo, useState } from "react"
import type { Product } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"

type FilterConfig = {
  search?: boolean
  brand?: boolean
  material?: boolean
  color?: boolean
  shape?: boolean
  gender?: boolean
  price?: boolean
  discount?: boolean
  sort?: boolean
}

const unique = (arr: string[]) => Array.from(new Set(arr)).sort()

export function useFilteredProducts(products: Product[], opts: FilterConfig) {
  const [q, setQ] = useState("")
  const [brand, setBrand] = useState<string>("all")
  const [material, setMaterial] = useState<string>("all")
  const [color, setColor] = useState<string>("all")
  const [shape, setShape] = useState<string>("all")
  const [gender, setGender] = useState<string>("all")
  const [price, setPrice] = useState<[number, number]>([0, 500])
  const [discount, setDiscount] = useState<string>("all")
  const [sort, setSort] = useState<string>("featured")

  const filtered = useMemo(() => {
    let out = products.filter((p) => p.price <= price[1] && p.price >= price[0])
    if (q) out = out.filter((p) => [p.name, p.brand].join(" ").toLowerCase().includes(q.toLowerCase()))
    if (brand !== "all") out = out.filter((p) => p.brand === brand)
    if (material !== "all") out = out.filter((p) => p.material === material)
    if (color !== "all") out = out.filter((p) => p.color === color)
    if (shape !== "all") out = out.filter((p) => p.shape === shape)
    if (gender !== "all") out = out.filter((p) => p.gender === gender)
    if (discount !== "all") {
      out = out.filter((p) => !!p.salePrice)
      if (discount === "20") out = out.filter((p) => pct(p) >= 20)
      if (discount === "30") out = out.filter((p) => pct(p) >= 30)
      if (discount === "40") out = out.filter((p) => pct(p) >= 40)
    }
    switch (sort) {
      case "price-asc":
        out = out.slice().sort((a, b) => (a.salePrice ?? a.price) - (b.salePrice ?? b.price))
        break
      case "price-desc":
        out = out.slice().sort((a, b) => (b.salePrice ?? b.price) - (a.salePrice ?? a.price))
        break
      case "brand":
        out = out.slice().sort((a, b) => a.brand.localeCompare(b.brand))
        break
      default:
        // featured stays as-is
        break
    }
    return out
  }, [products, q, brand, material, color, shape, gender, price, discount, sort])

  const accessors = {
    values: { q, brand, material, color, shape, gender, price, discount, sort },
    set: { setQ, setBrand, setMaterial, setColor, setShape, setGender, setPrice, setDiscount, setSort },
  }

  const facets = {
    brands: unique(products.map((p) => p.brand)),
    materials: unique(products.map((p) => p.material)),
    colors: unique(products.map((p) => p.color)),
    shapes: unique(products.map((p) => p.shape)),
  }

  return { filtered, accessors, facets }
}

const pct = (p: Product) => (p.salePrice ? Math.round(((p.price - p.salePrice) / p.price) * 100) : 0)

export function FiltersPanel({
  products,
  config,
  accessors,
  facets,
  className,
}: {
  products: Product[]
  config: FilterConfig
  accessors: ReturnType<typeof useFilteredProducts>["accessors"]
  facets: ReturnType<typeof useFilteredProducts>["facets"]
  className?: string
}) {
  const { values, set } = accessors
  return (
    <aside className={cn("space-y-4 rounded-lg border border-border/50 bg-card p-5", className)}>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-wide">Filter</h3>
      </div>
      <div className="grid grid-cols-1 gap-5">
        {config.search && (
          <div>
            <Label htmlFor="search" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Search
            </Label>
            <Input
              id="search"
              placeholder="Search eyewear"
              value={values.q}
              onChange={(e) => set.setQ(e.target.value)}
              className="mt-2"
            />
          </div>
        )}
        {config.brand && (
          <div>
            <Label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Brand</Label>
            <Select value={values.brand} onValueChange={set.setBrand}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                {facets.brands.map((b) => (
                  <SelectItem key={b} value={b}>
                    {b}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
        {config.material && (
          <div>
            <Label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Product type</Label>
            <Select value={values.material} onValueChange={set.setMaterial}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                {facets.materials.map((m) => (
                  <SelectItem key={m} value={m}>
                    {m}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
        {config.color && (
          <div>
            <Label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Color</Label>
            <Select value={values.color} onValueChange={set.setColor}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                {facets.colors.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
        {config.shape && (
          <div>
            <Label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Shape</Label>
            <Select value={values.shape} onValueChange={set.setShape}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                {facets.shapes.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
        {config.gender && (
          <div>
            <Label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Gender</Label>
            <Select value={values.gender} onValueChange={set.setGender}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="men">Men</SelectItem>
                <SelectItem value="women">Women</SelectItem>
                <SelectItem value="unisex">Unisex</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
        {config.price && (
          <div>
            <Label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Price</Label>
            <div className="mt-2 text-sm text-muted-foreground">Up to Rs. {values.price[1]}</div>
            <Slider
              value={[values.price[1]]}
              onValueChange={(v) => set.setPrice([0, v[0] || 500])}
              max={500}
              step={10}
              className="mt-3"
            />
          </div>
        )}
        {config.discount && (
          <div>
            <Label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Discount</Label>
            <Select value={values.discount} onValueChange={set.setDiscount}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="20">20%+</SelectItem>
                <SelectItem value="30">30%+</SelectItem>
                <SelectItem value="40">40%+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
        {config.sort && (
          <div>
            <Label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Sort</Label>
            <Select value={values.sort} onValueChange={set.setSort}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Featured" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="brand">Brand</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            set.setQ("")
            set.setBrand("all")
            set.setMaterial("all")
            set.setColor("all")
            set.setShape("all")
            set.setGender("all")
            set.setPrice([0, 500])
            set.setDiscount("all")
            set.setSort("featured")
          }}
        >
          Reset filters
        </Button>
      </div>
    </aside>
  )
}
