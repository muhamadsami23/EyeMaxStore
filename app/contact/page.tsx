"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-12">
      <h1 className="text-center text-3xl font-bold">Contact</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <form
          className="space-y-5 rounded-lg border border-border/50 bg-card p-8"
          onSubmit={(e) => {
            e.preventDefault()
            setLoading(true)
            setTimeout(() => {
              setLoading(false)
              toast({ title: "Message sent", description: "We will reach out shortly." })
            }, 800)
          }}
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" required className="mt-2" />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input id="email" type="email" required className="mt-2" />
            </div>
          </div>
          <div>
            <Label htmlFor="phone">Phone number</Label>
            <Input id="phone" type="tel" className="mt-2" />
          </div>
          <div>
            <Label htmlFor="message">Comment</Label>
            <Textarea id="message" rows={5} required className="mt-2" />
          </div>
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Sending…" : "Send"}
          </Button>
        </form>
        <div className="overflow-hidden rounded-lg border border-border/50">
          <img
            src="/office-location-map.png"
            alt="Map showing our office location"
            width={1200}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
