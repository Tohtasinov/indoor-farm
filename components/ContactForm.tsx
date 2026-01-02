"use client"

import { useMemo, useState } from "react"

type CustomerType = "Restaurant" | "Retail" | "Home"
type Frequency = "One time" | "Weekly" | "2-3x per week"

function cn(...v: Array<string | false | undefined>) {
  return v.filter(Boolean).join(" ")
}

const flavors = ["Mild", "Spicy", "Crunchy"] as const

export function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [ok, setOk] = useState<string | null>(null)
  const [err, setErr] = useState<string | null>(null)

  const [type, setType] = useState<CustomerType>("Restaurant")
  const [frequency, setFrequency] = useState<Frequency>("Weekly")

  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [city, setCity] = useState("")
  const [volume, setVolume] = useState("")
  const [flavorPrefs, setFlavorPrefs] = useState<string[]>([])
  const [message, setMessage] = useState("")

  const canSubmit = useMemo(() => {
    if (!name.trim()) return false
    if (!phone.trim() && !email.trim()) return false
    if (type !== "Home" && !company.trim()) return false
    return true
  }, [name, phone, email, type, company])

  function toggleFlavor(v: string) {
    setFlavorPrefs((prev) =>
      prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]
    )
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setOk(null)
    setErr(null)

    if (!canSubmit) {
      setErr("Please fill name and at least one contact field (phone or email).")
      return
    }

    setLoading(true)
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          frequency,
          name,
          company,
          phone,
          email,
          city,
          volume,
          flavorPrefs,
          message,
          hp: (e.currentTarget as HTMLFormElement).querySelector<HTMLInputElement>(
            'input[name="hp"]'
          )?.value,
        }),
      })

      const data = (await res.json()) as { ok?: boolean; message?: string }

      if (!res.ok || !data.ok) {
        throw new Error(data.message || "Failed to send.")
      }

      setOk("Thanks. We received your request and will contact you soon.")
      setName("")
      setCompany("")
      setPhone("")
      setEmail("")
      setCity("")
      setVolume("")
      setFlavorPrefs([])
      setMessage("")
    } catch (ex: any) {
      setErr(ex?.message || "Something went wrong.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border bg-white p-6 md:p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-neutral-900">
            Request pricing
          </h2>
          <p className="mt-1 text-sm text-neutral-700">
            Tell us what you need and we will reply with an offer.
          </p>
        </div>

        <span className="rounded-full border bg-neutral-50 px-3 py-1 text-xs text-neutral-700">
          Fast reply
        </span>
      </div>

      <input
        name="hp"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="mt-5 grid gap-3">
        <div className="grid gap-2 sm:grid-cols-3">
          {(["Restaurant", "Retail", "Home"] as CustomerType[]).map((v) => {
            const active = type === v
            return (
              <button
                type="button"
                key={v}
                onClick={() => setType(v)}
                className={cn(
                  "rounded-xl border px-3 py-2 text-sm font-medium transition",
                  active
                    ? "border-neutral-900 bg-neutral-900 text-white"
                    : "bg-white text-neutral-900 hover:bg-neutral-50"
                )}
              >
                {v}
              </button>
            )
          })}
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <Field label="Name" required>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
              placeholder="Your name"
            />
          </Field>

          <Field label="Company" required={type !== "Home"}>
            <input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full rounded-xl border bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
              placeholder={type === "Home" ? "Optional" : "Restaurant or shop name"}
            />
          </Field>

          <Field label="Phone" required={!email.trim()}>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-xl border bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
              placeholder="+996 ..."
            />
          </Field>

          <Field label="Email" required={!phone.trim()}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
              placeholder="name@company.com"
            />
          </Field>

          <Field label="City">
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full rounded-xl border bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
              placeholder="Bishkek"
            />
          </Field>

          <Field label="Frequency">
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value as Frequency)}
              className="w-full rounded-xl border bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
            >
              <option value="One time">One time</option>
              <option value="Weekly">Weekly</option>
              <option value="2-3x per week">2-3x per week</option>
            </select>
          </Field>

          <Field
            label={type === "Home" ? "Packs quantity" : "Volume request"}
            hint={type === "Home" ? "Example: 4 packs per week" : "Example: 2 kg per week"}
          >
            <input
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              className="w-full rounded-xl border bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
              placeholder={type === "Home" ? "Packs per week" : "Kg per week"}
            />
          </Field>

          <Field label="Flavor preference">
            <div className="flex flex-wrap gap-2">
              {flavors.map((v) => {
                const active = flavorPrefs.includes(v)
                return (
                  <button
                    key={v}
                    type="button"
                    onClick={() => toggleFlavor(v)}
                    className={cn(
                      "rounded-full border px-3 py-1 text-xs font-medium transition",
                      active
                        ? "border-neutral-900 bg-neutral-900 text-white"
                        : "bg-white text-neutral-900 hover:bg-neutral-50"
                    )}
                  >
                    {v}
                  </button>
                )
              })}
            </div>
          </Field>
        </div>

        <Field label="Message">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-[110px] w-full rounded-xl border bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
            placeholder="Products you want, delivery time, address area, any notes..."
          />
        </Field>

        {err ? (
          <div className="rounded-2xl border bg-red-50 p-3 text-sm text-red-700">
            {err}
          </div>
        ) : null}

        {ok ? (
          <div className="rounded-2xl border bg-emerald-50 p-3 text-sm text-emerald-800">
            {ok}
          </div>
        ) : null}

        <button
          type="submit"
          disabled={!canSubmit || loading}
          className={cn(
            "rounded-xl px-4 py-3 text-sm font-medium transition",
            !canSubmit || loading
              ? "cursor-not-allowed bg-neutral-200 text-neutral-600"
              : "bg-neutral-900 text-white hover:bg-neutral-800"
          )}
        >
          {loading ? "Sending..." : "Send request"}
        </button>

        <p className="text-xs text-neutral-500">
          By submitting, you agree we can contact you back regarding pricing and delivery.
        </p>
      </div>
    </form>
  )
}

function Field({
  label,
  required,
  hint,
  children,
}: {
  label: string
  required?: boolean
  hint?: string
  children: React.ReactNode
}) {
  return (
    <div className="grid gap-1">
      <div className="flex items-center justify-between gap-3">
        <label className="text-xs font-medium text-neutral-700">
          {label}
        </label>
        {hint ? <span className="text-xs text-neutral-500">{hint}</span> : null}
        {required ? (
          <span className="text-xs text-neutral-500">Required</span>
        ) : null}
      </div>
      {children}
    </div>
  )
}
