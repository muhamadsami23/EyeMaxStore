"use client"

import { useAuth, useCart, useOrders, useProducts } from "@/lib/store"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CartPage() {
  const { items, remove, clear } = useCart()
  const { products } = useProducts()
  const { user } = useAuth()
  const { placeOrder } = useOrders()

  const total = items.reduce((s, it) => {
    const p = products.find((pp) => pp.id === it.productId)
    const price = p?.salePrice ?? p?.price ?? 0
    return s + price * it.qty
  }, 0)

  return (
    <div className="mx-auto max-w-5xl space-y-6 px-4 py-10">
      <h1 className="text-xl font-semibold">Your Cart</h1>
      <div className="space-y-4">
        {items.length === 0 && (
          <div className="rounded-lg border p-8 text-center text-sm text-muted-foreground">Your cart is empty.</div>
        )}
        {items.map((it) => {
          const p = products.find((pp) => pp.id === it.productId)
          if (!p) return null
          const price = p.salePrice ?? p.price
          return (
            <div key={it.productId} className="flex items-center gap-4 rounded-lg border p-4">
              <img
                src={p.images[0] || "/placeholder.svg"}
                alt={p.name}
                width={96}
                height={96}
                className="h-24 w-24 rounded object-cover"
              />
              <div className="flex-1">
                <div className="font-medium">{p.name}</div>
                <div className="text-sm text-muted-foreground">{p.brand}</div>
                <div className="text-sm">
                  ${price.toFixed(0)} × {it.qty}
                </div>
              </div>
              <Button variant="outline" onClick={() => remove(it.productId)}>
                Remove
              </Button>
            </div>
          )
        })}
      </div>
      <div className="flex items-center justify-between border-t pt-4">
        <div className="text-sm text-muted-foreground">Total</div>
        <div className="text-lg font-semibold">${total.toFixed(0)}</div>
      </div>
      <div className="flex gap-2">
        <Button variant="secondary" onClick={() => clear()}>
          Clear cart
        </Button>
        {user ? (
          <Button onClick={() => placeOrder(user.email, items, products)} disabled={items.length === 0}>
            Place order
          </Button>
        ) : (
          <Link href="/login">
            <Button>Login to checkout</Button>
          </Link>
        )}
      </div>
    </div>
  )
}
