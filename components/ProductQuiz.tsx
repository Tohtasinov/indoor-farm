"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

type Customer = "Home" | "Restaurant" | "Retail"
type UseCase = "Salads" | "Garnish" | "Smoothies"
type Flavor = "Mild" | "Spicy" | "Crunchy"
type Frequency = "One time" | "Weekly" | "2-3x per week"

const steps = ["Customer", "Use", "Flavor", "Frequency"] as const

function cn(...v: Array<string | false | undefined>) {
  return v.filter(Boolean).join(" ")
}

function Progress({ step }: { step: number }) {
  const pct = Math.round(((step + 1) / steps.length) * 100)
  return (
    <div className="flex items-center gap-3">
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-neutral-200">
        <div
          className="h-full origin-left bg-emerald-600 transition-transform"
          style={{ transform: `scaleX(${pct / 100})` }}
        />
      </div>
      <span className="text-xs text-neutral-600">{pct}%</span>
    </div>
  )
}

const products = [
  {
    slug: "radish-red-arrow",
    name: "Radish Red Arrow",
    tags: ["Spicy", "Crunchy"] as Flavor[],
    note: "Bold peppery bite, great color.",
  },
  {
    slug: "pea-afila-tendril",
    name: "Pea Afila Tendril",
    tags: ["Mild", "Crunchy"] as Flavor[],
    note: "Sweet crunch, chef favorite.",
  },
  {
    slug: "broccoli-waltham-29",
    name: "Broccoli Waltham 29",
    tags: ["Mild"] as Flavor[],
    note: "Clean taste, versatile everyday choice.",
  },
  {
    slug: "radish-rambo",
    name: "Radish Rambo",
    tags: ["Spicy"] as Flavor[],
    note: "Strong radish punch, vivid leaves.",
  },
  {
    slug: "pea-speckled-black",
    name: "Pea Speckled Black",
    tags: ["Mild", "Crunchy"] as Flavor[],
    note: "Sweet pea profile, great texture.",
  },
] as const

function Result({
  customer,
  useCase,
  flavor,
  frequency,
}: {
  customer: Customer
  useCase: UseCase
  flavor: Flavor
  frequency: Frequency
}) {
  const rec = useMemo(() => {
    const filtered = products.filter((p) => p.tags.includes(flavor))

    const top =
      useCase === "Garnish"
        ? filtered[0] ?? products[0]
        : useCase === "Smoothies"
          ? products.find((p) => p.name.includes("Broccoli")) ?? products[2]
          : filtered[1] ?? filtered[0] ?? products[1]

    const mixNames =
      useCase === "Garnish"
        ? ["Radish Red Arrow", "Radish Rambo", "Pea Afila Tendril"]
        : useCase === "Smoothies"
          ? ["Broccoli Waltham 29", "Pea Speckled Black", "Pea Afila Tendril"]
          : ["Broccoli Waltham 29", "Pea Afila Tendril", "Radish Red Arrow"]

    const mix = mixNames
      .map((n) => products.find((p) => p.name === n))
      .filter(Boolean)

    const volume =
      customer === "Restaurant"
        ? frequency === "2-3x per week"
          ? "2 kg to 5 kg"
          : frequency === "Weekly"
            ? "1 kg to 2 kg"
            : "0.5 kg to 1 kg"
        : customer === "Retail"
          ? frequency === "Weekly"
            ? "12 x 60 g packs"
            : "6 x 60 g packs"
          : frequency === "Weekly"
            ? "3 x 60 g packs"
            : "1 x 60 g pack"

    const primaryHref =
      customer === "Restaurant" || customer === "Retail" ? "/contact" : "/shop"

    const primaryText =
      customer === "Restaurant" || customer === "Retail"
        ? "Request wholesale pricing"
        : "Shop 60 g packs"

    return { top, mix, volume, primaryHref, primaryText }
  }, [customer, useCase, flavor, frequency])

  return (
    <div className="rounded-2xl border bg-white p-6">
      <p className="text-xs text-neutral-500">Recommendation</p>

      <h4 className="mt-1 text-xl font-semibold text-neutral-900">
        {customer === "Restaurant"
          ? "Chef mix"
          : customer === "Retail"
            ? "Retail mix"
            : "Home mix"}
      </h4>

      <div className="mt-3 rounded-2xl border bg-neutral-50 p-4">
        <p className="text-sm font-medium text-neutral-900">Top pick</p>
        <p className="mt-1 text-sm text-neutral-700">{rec.top.name}</p>
        <p className="mt-1 text-xs text-neutral-600">{rec.top.note}</p>
      </div>

      <div className="mt-4">
        <p className="text-sm font-medium text-neutral-900">Suggested mix</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {rec.mix.map((p) => (
            <span
              key={p!.slug}
              className="rounded-full border bg-white px-3 py-1 text-xs text-neutral-700"
            >
              {p!.name}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 rounded-2xl border bg-white p-4">
        <p className="text-sm font-medium text-neutral-900">Suggested volume</p>
        <p className="mt-1 text-sm text-neutral-700">{rec.volume}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={rec.primaryHref}
          className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
        >
          {rec.primaryText}
        </Link>

        <Link
          href="/shop"
          className="rounded-xl border bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
        >
          View all products
        </Link>
      </div>
    </div>
  )
}

export function ProductQuiz() {
  const [step, setStep] = useState(0)
  const [customer, setCustomer] = useState<Customer>("Home")
  const [useCase, setUseCase] = useState<UseCase>("Salads")
  const [flavor, setFlavor] = useState<Flavor>("Mild")
  const [frequency, setFrequency] = useState<Frequency>("Weekly")

  const canBack = step > 0
  const canNext = step < steps.length - 1

  return (
    <section className="mt-12 rounded-3xl border bg-neutral-50 p-7 md:p-10">
      <div className="grid gap-6 md:grid-cols-2 md:items-start">
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-neutral-900">
                Find the right microgreens
              </h3>
              <p className="mt-1 text-neutral-700">
                Quick quiz for packs or wholesale.
              </p>
            </div>

            <span className="rounded-full border bg-white px-3 py-1 text-xs text-neutral-600">
              {steps.length} steps
            </span>
          </div>

          <Progress step={step} />

          <div className="rounded-2xl border bg-white p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-neutral-900">
                Step {step + 1}: {steps[step]}
              </p>
              <p className="text-xs text-neutral-500">
                {step + 1} / {steps.length}
              </p>
            </div>

            <div className="mt-4">
              <AnimatePresence mode="wait">
                {step === 0 ? (
                  <motion.div
                    key="customer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="grid gap-2"
                  >
                    {(["Home", "Restaurant", "Retail"] as Customer[]).map(
                      (v) => (
                        <button
                          key={v}
                          onClick={() => setCustomer(v)}
                          className={cn(
                            "rounded-xl border px-4 py-3 text-left text-sm transition",
                            customer === v
                              ? "border-neutral-900 bg-neutral-900 text-white"
                              : "bg-white text-neutral-900 hover:bg-neutral-50"
                          )}
                        >
                          <div className="font-medium">{v}</div>
                          <div
                            className={cn(
                              "mt-1 text-xs",
                              customer === v
                                ? "text-white/80"
                                : "text-neutral-600"
                            )}
                          >
                            {v === "Home"
                              ? "Single packs and weekly mixes."
                              : v === "Restaurant"
                                ? "Fresh supply for service and prep."
                                : "Retail ready packs for shelves."}
                          </div>
                        </button>
                      )
                    )}
                  </motion.div>
                ) : null}

                {step === 1 ? (
                  <motion.div
                    key="use"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="grid gap-2"
                  >
                    {(["Salads", "Garnish", "Smoothies"] as UseCase[]).map(
                      (v) => (
                        <button
                          key={v}
                          onClick={() => setUseCase(v)}
                          className={cn(
                            "rounded-xl border px-4 py-3 text-left text-sm transition",
                            useCase === v
                              ? "border-neutral-900 bg-neutral-900 text-white"
                              : "bg-white text-neutral-900 hover:bg-neutral-50"
                          )}
                        >
                          <div className="font-medium">{v}</div>
                          <div
                            className={cn(
                              "mt-1 text-xs",
                              useCase === v
                                ? "text-white/80"
                                : "text-neutral-600"
                            )}
                          >
                            {v === "Salads"
                              ? "Balanced flavor and texture."
                              : v === "Garnish"
                                ? "Bold, photogenic, chef friendly."
                                : "Smooth taste and nutrient boost."}
                          </div>
                        </button>
                      )
                    )}
                  </motion.div>
                ) : null}

                {step === 2 ? (
                  <motion.div
                    key="flavor"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="grid gap-2"
                  >
                    {(["Mild", "Spicy", "Crunchy"] as Flavor[]).map((v) => (
                      <button
                        key={v}
                        onClick={() => setFlavor(v)}
                        className={cn(
                          "rounded-xl border px-4 py-3 text-left text-sm transition",
                          flavor === v
                            ? "border-neutral-900 bg-neutral-900 text-white"
                            : "bg-white text-neutral-900 hover:bg-neutral-50"
                        )}
                      >
                        <div className="font-medium">{v}</div>
                        <div
                          className={cn(
                            "mt-1 text-xs",
                            flavor === v
                              ? "text-white/80"
                              : "text-neutral-600"
                          )}
                        >
                          {v === "Mild"
                            ? "Smooth, versatile, everyday use."
                            : v === "Spicy"
                              ? "Peppery bite and bold punch."
                              : "Sweet crunch, great texture."}
                        </div>
                      </button>
                    ))}
                  </motion.div>
                ) : null}

                {step === 3 ? (
                  <motion.div
                    key="freq"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="grid gap-2"
                  >
                    {(
                      ["One time", "Weekly", "2-3x per week"] as Frequency[]
                    ).map((v) => (
                      <button
                        key={v}
                        onClick={() => setFrequency(v)}
                        className={cn(
                          "rounded-xl border px-4 py-3 text-left text-sm transition",
                          frequency === v
                            ? "border-neutral-900 bg-neutral-900 text-white"
                            : "bg-white text-neutral-900 hover:bg-neutral-50"
                        )}
                      >
                        <div className="font-medium">{v}</div>
                        <div
                          className={cn(
                            "mt-1 text-xs",
                            frequency === v
                              ? "text-white/80"
                              : "text-neutral-600"
                          )}
                        >
                          {v === "One time"
                            ? "Try a pack and taste the difference."
                            : v === "Weekly"
                              ? "Regular freshness for your routine."
                              : "Best for restaurants and busy kitchens."}
                        </div>
                      </button>
                    ))}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            <div className="mt-5 flex items-center justify-between gap-3">
              <button
                disabled={!canBack}
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                className={cn(
                  "rounded-xl border px-4 py-2 text-sm font-medium transition",
                  canBack
                    ? "bg-white text-neutral-900 hover:bg-neutral-50"
                    : "cursor-not-allowed bg-white text-neutral-400"
                )}
              >
                Back
              </button>

              <button
                disabled={!canNext}
                onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
                className={cn(
                  "rounded-xl px-4 py-2 text-sm font-medium transition",
                  canNext
                    ? "bg-neutral-900 text-white hover:bg-neutral-800"
                    : "cursor-not-allowed bg-neutral-200 text-neutral-500"
                )}
              >
                Next
              </button>
            </div>
          </div>
        </div>

        <Result
          customer={customer}
          useCase={useCase}
          flavor={flavor}
          frequency={frequency}
        />
      </div>
    </section>
  )
}
