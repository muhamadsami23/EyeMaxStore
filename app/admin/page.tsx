"use client"

import { useProducts } from "@/lib/store"
import type { Product } from "@/lib/types"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/lib/store"
import Link from "next/link"
import { useState } from "react"

export default function AdminPage() {
  const { user } = useAuth()
  const { products, add, remove } = useProducts()

  if (!user) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12">
        <div className="rounded-xl border p-6 text-center">
          Please{" "}
          <Link href="/login" className="text-primary underline">
            login
          </Link>{" "}
          as admin to continue.
        </div>
      </div>
    )
  }
  if (user.role !== "admin") {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12">
        <div className="rounded-xl border p-6 text-center">
          You do not have access. Go to your{" "}
          <Link href="/dashboard" className="text-primary underline">
            Customer Dashboard
          </Link>
          .
        </div>
      </div>
    )
  }

  const [form, setForm] = useState<Partial<Product>>({
    id: "",
    name: "",
    brand: "EyeMax Studio",
    category: "sunglasses",
    gender: "unisex",
    material: "acetate",
    color: "black",
    shape: "square",
    price: 199,
    salePrice: undefined,
    images: ["/new-frame.jpg"],
  } as Partial<Product>)

  const handleAdd = () => {
    if (
      !form.id ||
      !form.name ||
      !form.brand ||
      !form.category ||
      !form.gender ||
      !form.material ||
      !form.shape ||
      !form.color ||
      !form.price ||
      !form.images
    )
      return
    add(form as Product)
    setForm({ ...(form as Product), id: "", name: "" })
  }

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-12">
      <h1 className="text-xl font-semibold">Admin Dashboard</h1>

      <section className="rounded-xl border p-6">
        <h2 className="text-lg font-medium">Add Product</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div>
            <Label htmlFor="id">ID</Label>
            <Input id="id" value={form.id || ""} onChange={(e) => setForm((f) => ({ ...f, id: e.target.value }))} />
          </div>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={form.name || ""}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            />
          </div>
          <div>
            <Label htmlFor="brand">Brand</Label>
            <Input
              id="brand"
              value={form.brand || ""}
              onChange={(e) => setForm((f) => ({ ...f, brand: e.target.value }))}
            />
          </div>
          <div>
            <Label htmlFor="category">Category (sunglasses|optics)</Label>
            <Input
              id="category"
              value={(form.category as string) || ""}
              onChange={(e) => setForm((f) => ({ ...f, category: e.target.value as any }))}
            />
          </div>
          <div>
            <Label htmlFor="gender">Gender (men|women|unisex)</Label>
            <Input
              id="gender"
              value={(form.gender as string) || ""}
              onChange={(e) => setForm((f) => ({ ...f, gender: e.target.value as any }))}
            />
          </div>
          <div>
            <Label htmlFor="material">Material</Label>
            <Input
              id="material"
              value={(form.material as string) || ""}
              onChange={(e) => setForm((f) => ({ ...f, material: e.target.value as any }))}
            />
          </div>
          <div>
            <Label htmlFor="shape">Shape</Label>
            <Input
              id="shape"
              value={(form.shape as string) || ""}
              onChange={(e) => setForm((f) => ({ ...f, shape: e.target.value as any }))}
            />
          </div>
          <div>
            <Label htmlFor="color">Color</Label>
            <Input
              id="color"
              value={form.color || ""}
              onChange={(e) => setForm((f) => ({ ...f, color: e.target.value }))}
            />
          </div>
          <div>
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              type="number"
              value={form.price?.toString() || ""}
              onChange={(e) => setForm((f) => ({ ...f, price: Number(e.target.value) }))}
            />
          </div>
          <div>
            <Label htmlFor="salePrice">Sale Price (optional)</Label>
            <Input
              id="salePrice"
              type="number"
              value={form.salePrice?.toString() || ""}
              onChange={(e) =>
                setForm((f) => ({ ...f, salePrice: e.target.value ? Number(e.target.value) : undefined }))
              }
            />
          </div>
          <div className="md:col-span-3">
            <Label htmlFor="image">Image URL</Label>
            <Input
              id="image"
              value={form.images?.[0] || ""}
              onChange={(e) => setForm((f) => ({ ...f, images: [e.target.value] }))}
            />
            <Button className="mt-4" onClick={handleAdd}>
              Add Product
            </Button>
          </div>
        </div>
      </section>

      <section className="rounded-xl border p-6">
        <h2 className="text-lg font-medium">Catalog ({products.length})</h2>
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <div key={p.id} className="rounded-lg border p-3">
              <img
                src={p.images[0] || "/placeholder.svg"}
                alt={p.name}
                width={400}
                height={400}
                className="aspect-square w-full rounded object-cover"
              />
              <div className="mt-2 text-sm font-medium">{p.name}</div>
              <div className="text-xs text-muted-foreground">{p.brand}</div>
              <div className="mt-2 flex items-center justify-between">
                <div className="text-sm">${(p.salePrice ?? p.price).toFixed(0)}</div>
                <Button variant="outline" size="sm" onClick={() => remove(p.id)}>
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
