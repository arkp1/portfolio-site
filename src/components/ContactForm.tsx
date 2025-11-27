"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { useTheme } from "@/components/ThemeProvider"

export default function ContactForm() {
  const { isDark } = useTheme()
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })

    const data = await res.json()
    setLoading(false)

    if (data.success) {
      toast("Sent! Thanks for reaching out.")
      setForm({ firstName: "", lastName: "", email: "", message: "" })
    } else {
      toast("Something went wrong. Please try again.")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <Label htmlFor="firstName">First Name</Label>
          <Input name="firstName" value={form.firstName} onChange={handleChange} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input name="lastName" value={form.lastName} onChange={handleChange} required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input name="email" type="email" placeholder="Your@mail.com" value={form.email} onChange={handleChange} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea name="message" placeholder="Type your message" value={form.message} onChange={handleChange} className="max-w-md text-wrap" required />
      </div>
      <Button type="submit" disabled={loading} className={`w-full shadow-lg cursor-pointer ${isDark ? "bg-[#e5e5e5] text-black" : "bg-zinc-900 text-white"} hover:opacity-80 transition duration-300`}>
        {loading ? "Sending..." : "Send"}
      </Button>
    </form>
  )
}
