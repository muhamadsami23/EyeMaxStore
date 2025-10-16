"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function SignupPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  return (
    <div className="mx-auto max-w-md space-y-6 px-4 py-12">
      <h1 className="text-xl font-semibold">Create account</h1>
      <div className="rounded-xl border p-6">
        <form
          className="grid gap-4"
          onSubmit={(e) => {
            e.preventDefault()
            setLoading(true)
            setTimeout(() => {
              setLoading(false)
              router.push("/login")
            }, 700)
          }}
        >
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? "Creating…" : "Create account"}
          </Button>
        </form>
        <p className="mt-4 text-sm text-muted-foreground">
          This is a demo-only frontend. Use the demo accounts on the login page to access dashboards.
        </p>
      </div>
    </div>
  )
}
