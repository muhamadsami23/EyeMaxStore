"use client"

import { useAuth, useOrders } from "@/lib/store"
import Link from "next/link"

export default function DashboardPage() {
  const { user } = useAuth()
  const { orders } = useOrders()

  if (!user) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12">
        <div className="rounded-xl border p-6 text-center">
          Please{" "}
          <Link href="/login" className="text-primary underline">
            login
          </Link>{" "}
          to view your dashboard.
        </div>
      </div>
    )
  }

  if (user.role === "admin") {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12">
        <div className="rounded-xl border p-6 text-center">
          You are an admin. Visit the{" "}
          <Link href="/admin" className="text-primary underline">
            Admin Dashboard
          </Link>
          .
        </div>
      </div>
    )
  }

  const myOrders = orders.filter((o) => o.userEmail === user.email)

  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-12">
      <h1 className="text-xl font-semibold">Welcome, {user.name || user.email}</h1>
      <section className="rounded-xl border p-6">
        <h2 className="text-lg font-medium">Past Orders</h2>
        {myOrders.length === 0 ? (
          <p className="mt-2 text-sm text-muted-foreground">No orders yet.</p>
        ) : (
          <ul className="mt-4 space-y-3">
            {myOrders.map((o) => (
              <li key={o.id} className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <div className="text-sm font-medium">Order {o.id}</div>
                  <div className="text-xs text-muted-foreground">{new Date(o.date).toLocaleString()}</div>
                </div>
                <div className="text-sm font-semibold">${o.total.toFixed(0)}</div>
              </li>
            ))}
          </ul>
        )}
      </section>
      <section className="rounded-xl border p-6">
        <h2 className="text-lg font-medium">Account</h2>
        <p className="mt-2 text-sm text-muted-foreground">Update your preferences and shipping details (demo).</p>
      </section>
    </div>
  )
}
