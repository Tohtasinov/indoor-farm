"use client"

import Link from "next/link"
import { motion } from "framer-motion"

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}

function ValueCard({
  title,
  text,
  tag,
}: {
  title: string
  text: string
  tag: string
}) {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
          <p className="text-sm leading-relaxed text-neutral-700">{text}</p>
        </div>
        <span className="shrink-0 rounded-full border bg-neutral-50 px-3 py-1 text-xs text-neutral-700">
          {tag}
        </span>
      </div>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border bg-white/70 p-4 backdrop-blur">
      <p className="text-xs text-neutral-600">{label}</p>
      <p className="mt-1 text-lg font-semibold text-neutral-900">{value}</p>
    </div>
  )
}

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <section className="relative overflow-hidden rounded-3xl border bg-white p-7 md:p-10">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-200 blur-3xl opacity-50" />
          <div className="absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-lime-200 blur-3xl opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-white" />
        </div>

        <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            <Reveal>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border bg-white/70 px-3 py-1 text-xs font-medium text-neutral-700 backdrop-blur">
                  Local microgreens
                </span>
                <span className="rounded-full border bg-white/70 px-3 py-1 text-xs font-medium text-neutral-700 backdrop-blur">
                  60 g containers
                </span>
                <span className="rounded-full border bg-white/70 px-3 py-1 text-xs font-medium text-neutral-700 backdrop-blur">
                  Wholesale supply
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
                About Alicia Green
              </h1>
              <p className="text-neutral-700">
                We sell ready microgreens in 60 g containers and provide stable
                supply for restaurants and retail. We grow indoors and deliver locally.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/shop"
                  className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800"
                >
                  Shop products
                </Link>
                <Link
                  href="/contact"
                  className="rounded-xl border bg-white px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
                >
                  Contact
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="grid gap-3 sm:grid-cols-3">
              <Stat label="Format" value="60 g" />
              <Stat label="Focus" value="Fresh" />
              <Stat label="B2B" value="Yes" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mt-12 space-y-6">
        <Reveal>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
              What we do
            </h2>
            <p className="text-neutral-700">
              We do not sell farm equipment. We sell ready microgreens and provide stable supply.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          <Reveal>
            <ValueCard
              title="Ready products"
              text="Microgreens in 60 g containers with clear labeling and consistent quality."
              tag="B2C"
            />
          </Reveal>
          <Reveal delay={0.05}>
            <ValueCard
              title="Wholesale supply"
              text="Restaurants, cafes and retail can request pricing and schedule deliveries."
              tag="B2B"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ValueCard
              title="Local delivery"
              text="Harvest close to delivery time to keep texture and aroma at their best."
              tag="Local"
            />
          </Reveal>
        </div>
      </section>

      <section className="mt-12 rounded-3xl border bg-neutral-50 p-7 md:p-10">
        <div className="grid gap-6 md:grid-cols-2 md:items-start">
          <Reveal>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
                Our approach
              </h2>
              <p className="text-neutral-700">
                We prioritize stable results and simple ordering for clients.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-3">
            <Reveal>
              <div className="rounded-2xl border bg-white p-5">
                <p className="text-sm font-semibold text-neutral-900">Consistency</p>
                <p className="mt-2 text-sm text-neutral-700">
                  Same taste and texture from batch to batch.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="rounded-2xl border bg-white p-5">
                <p className="text-sm font-semibold text-neutral-900">Clean indoor growing</p>
                <p className="mt-2 text-sm text-neutral-700">
                  Indoor environment helps keep quality stable and reduces external risks.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl border bg-white p-5">
                <p className="text-sm font-semibold text-neutral-900">Service</p>
                <p className="mt-2 text-sm text-neutral-700">
                  Request wholesale pricing and schedule with one simple form.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mt-12 rounded-3xl border bg-white p-7 md:p-10">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <Reveal>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold tracking-tight text-neutral-900">
                Work with us
              </h3>
              <p className="text-neutral-700">
                If you are a restaurant or retail buyer, we can propose a weekly supply plan.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                href="/contact"
                className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800"
              >
                Request wholesale
              </Link>
              <Link
                href="/shop"
                className="rounded-xl border bg-white px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
              >
                Browse products
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
