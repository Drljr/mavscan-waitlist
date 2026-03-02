"use client"

import { type FormEvent, useState } from "react"

interface WaitlistFormProps {
  onSuccess?: () => void
}

export default function WaitlistForm({ onSuccess }: WaitlistFormProps) {
  const [loading, setLoading] = useState(false)
  const [agreed, setAgreed] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      const formData = new FormData(e.currentTarget)
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.get("email"),
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          productInterest: formData.get("productInterest"),
        }),
      })

      if (response.ok) {
        e.currentTarget.reset()
        setAgreed(false)
        onSuccess?.()
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-800/50 backdrop-blur p-8 rounded-2xl border border-white/10 space-y-4"
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">Join the Waitlist</h3>
        <p className="text-gray-400 text-sm">Early access to product verification</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
        <input
          type="text"
          name="firstName"
          required
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:bg-white/10 focus:outline-none transition-all"
          placeholder="John"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
        <input
          type="text"
          name="lastName"
          required
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:bg-white/10 focus:outline-none transition-all"
          placeholder="Doe"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:bg-white/10 focus:outline-none transition-all"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Product Interest</label>
        <select
          name="productInterest"
          defaultValue="cosmetics"
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-blue-500 focus:bg-white/10 focus:outline-none transition-all cursor-pointer"
        >
          <option value="cosmetics" className="bg-slate-900">
            Cosmetics
          </option>
          <option value="health" className="bg-slate-900">
            Health Products
          </option>
          <option value="beverages" className="bg-slate-900">
            Beverages
          </option>
          <option value="all" className="bg-slate-900">
            All Products
          </option>
        </select>
      </div>

      <div className="flex items-start gap-3 pt-2">
        <input
          type="checkbox"
          id="agree"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-1 cursor-pointer"
          required
        />
        <label htmlFor="agree" className="text-sm text-gray-400 cursor-pointer">
          I agree to receive updates about Mavscan and its features
        </label>
      </div>

      <button
        type="submit"
        disabled={!agreed || loading}
        className="w-full py-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg font-bold text-white hover:shadow-lg hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:-translate-y-0.5"
      >
        {loading ? "Joining..." : "Join Waitlist"}
      </button>

      <div className="space-y-2 pt-4 border-t border-white/10">
        <div className="flex items-center gap-3 text-sm text-gray-400">
          <span className="text-lg">⚡</span>
          <span>Early access to beta features</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-400">
          <span className="text-lg">🎁</span>
          <span>Exclusive launch day discount</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-400">
          <span className="text-lg">👥</span>
          <span>Join 5,000+ waitlist members</span>
        </div>
      </div>
    </form>
  )
}
