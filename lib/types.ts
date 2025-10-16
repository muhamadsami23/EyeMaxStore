export type Gender = "men" | "women" | "unisex" | "kids"
export type Category = "sunglasses" | "optics"

export type Product = {
  id: string
  name: string
  category: Category
  gender: Gender
  material: "acetate" | "metal" | "titanium" | "mixed" | "plastic"
  color: string
  shape: "round" | "square" | "aviator" | "cat-eye" | "rectangular" | "oval"
  price: number
  salePrice?: number
  images: string[]
  rating?: number
}

export type CartItem = { productId: string; qty: number }
export type User = { email: string; role: "customer" | "admin"; name?: string }
export type Order = { id: string; userEmail: string; items: CartItem[]; total: number; date: string }
