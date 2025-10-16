"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/lib/store"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [email, setEmail] = useState("demo@eyemax.com")
  const [password, setPassword] = useState("demo123")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  return (
    <div className="mx-auto max-w-md space-y-6 px-4 py-12">
      <h1 className="text-xl font-semibold">Login</h1>
      <div className="rounded-xl border p-6">
        <form
          className="grid gap-4"
          onSubmit={async (e) => {
            e.preventDefault()
            setLoading(true)
            setError(null)
            try {
              await login(email, password)
              router.push("/dashboard")
            } catch (err: any) {
              setError(err?.message || "Login failed")
            } finally {
              setLoading(false)
            }
          }}
        >
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="text-sm text-destructive">{error}</div>}
          <Button type="submit" disabled={loading}>
            {loading ? "Signing in…" : "Sign in"}
          </Button>
        </form>
        <div className="mt-4 rounded-lg bg-secondary p-3 text-sm">
          Demo accounts:
          <ul className="mt-2 list-disc pl-5">
            <li>Customer — Email: demo@eyemax.com / Password: demo123</li>
            <li>Admin — Email: admin@eyemax.com / Password: admin123</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
