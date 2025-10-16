"use client"

import useSWR, { mutate as globalMutate } from "swr"
import { PRODUCTS } from "./products"
import type { CartItem, Order, Product, User } from "./types"

const lsGet = <T,>(k: string, fallback: T): T => {
  if (typeof window === "undefined") return fallback
  const raw = localStorage.getItem(k)
  if (!raw) return fallback
  try {
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}
const lsSet = (k: string, v: unknown) => {
  if (typeof window === "undefined") return
  localStorage.setItem(k, JSON.stringify(v))
}

// Auth
const AUTH_KEY = "auth"
const DEMO_USERS: Record<string, User> = {
  "demo@eyemax.com": { email: "demo@eyemax.com", role: "customer", name: "Demo Customer" },
  "admin@eyemax.com": { email: "admin@eyemax.com", role: "admin", name: "Admin" },
}
export function useAuth() {
  const { data, mutate } = useSWR<User | null>(AUTH_KEY, () => lsGet<User | null>(AUTH_KEY, null), {
    fallbackData: null,
  })
  const login = async (email: string, password: string) => {
    // Demo-only auth; two accounts
    const ok =
      (email === "demo@eyemax.com" && password === "demo123") ||
      (email === "admin@eyemax.com" && password === "admin123")
    if (!ok) throw new Error("Invalid demo credentials")
    const user = DEMO_USERS[email]
    lsSet(AUTH_KEY, user)
    await mutate(user, false)
  }
  const logout = async () => {
    lsSet(AUTH_KEY, null)
    await mutate(null, false)
  }
  return { user: data, login, logout }
}

// Cart
const CART_KEY = "cart"
export function useCart() {
  const { data, mutate } = useSWR<CartItem[]>(CART_KEY, () => lsGet<CartItem[]>(CART_KEY, []), { fallbackData: [] })
  const add = async (productId: string, qty = 1) => {
    const curr = lsGet<CartItem[]>(CART_KEY, [])
    const next = [...curr]
    const idx = next.findIndex((i) => i.productId === productId)
    if (idx >= 0) next[idx].qty += qty
    else next.push({ productId, qty })
    lsSet(CART_KEY, next)
    await mutate(next, false)
  }
  const remove = async (productId: string) => {
    const next = lsGet<CartItem[]>(CART_KEY, []).filter((i) => i.productId !== productId)
    lsSet(CART_KEY, next)
    await mutate(next, false)
  }
  const clear = async () => {
    lsSet(CART_KEY, [])
    await mutate([], false)
  }
  return { items: data || [], add, remove, clear }
}

// Products (admin can add/remove in-memory)
const PRODUCTS_KEY = "products"
export function useProducts() {
  const { data, mutate } = useSWR<Product[]>(PRODUCTS_KEY, () => lsGet<Product[]>(PRODUCTS_KEY, PRODUCTS), {
    fallbackData: PRODUCTS,
  })
  const add = async (p: Product) => {
    const next = [...(data || [])]
    next.unshift(p)
    lsSet(PRODUCTS_KEY, next)
    await mutate(next, false)
  }
  const remove = async (id: string) => {
    const next = (data || []).filter((p) => p.id !== id)
    lsSet(PRODUCTS_KEY, next)
    await mutate(next, false)
  }
  return { products: data || PRODUCTS, add, remove, mutate }
}

// Orders (mocked for demo customer)
const ORDERS_KEY = "orders"
export function useOrders() {
  const { data, mutate } = useSWR<Order[]>(ORDERS_KEY, () => lsGet<Order[]>(ORDERS_KEY, []), { fallbackData: [] })
  const placeOrder = async (userEmail: string, items: CartItem[], products: Product[]) => {
    const total = items.reduce((s, it) => {
      const p = products.find((pp) => pp.id === it.productId)
      const price = p?.salePrice ?? p?.price ?? 0
      return s + price * it.qty
    }, 0)
    const order: Order = {
      id: `ord-${Date.now()}`,
      userEmail,
      items,
      total,
      date: new Date().toISOString(),
    }
    const next = [order, ...(data || [])]
    lsSet(ORDERS_KEY, next)
    await mutate(next, false)
    await globalMutate(CART_KEY, [], false) // clear cart via global mutate
    lsSet(CART_KEY, [])
  }
  return { orders: data || [], placeOrder }
}
