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

function StepCard({
  idx,
  title,
  text,
  meta,
}: {
  idx: string
  title: string
  text: string
  meta: string
}) {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <p className="text-xs font-medium text-neutral-500">{idx}</p>
          <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
          <p className="text-sm leading-relaxed text-neutral-700">{text}</p>
        </div>
        <span className="shrink-0 rounded-full border bg-neutral-50 px-3 py-1 text-xs text-neutral-700">
          {meta}
        </span>
      </div>
    </div>
  )
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border bg-white/70 p-4 backdrop-blur">
      <p className="text-xs text-neutral-600">{label}</p>
      <p className="mt-1 text-lg font-semibold text-neutral-900">{value}</p>
    </div>
  )
}

function QA({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-2xl border bg-white p-5">
      <p className="text-sm font-semibold text-neutral-900">{q}</p>
      <p className="mt-2 text-sm leading-relaxed text-neutral-700">{a}</p>
    </div>
  )
}

export default function HowItWorksPage() {
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
                  Fresh harvest
                </span>
                <span className="rounded-full border bg-white/70 px-3 py-1 text-xs font-medium text-neutral-700 backdrop-blur">
                  Local delivery
                </span>
                <span className="rounded-full border bg-white/70 px-3 py-1 text-xs font-medium text-neutral-700 backdrop-blur">
                  60 g packs and wholesale
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
                How it works
              </h1>
              <p className="text-neutral-700">
                We grow microgreens indoors, harvest close to delivery time, pack in 60 g containers, and supply restaurants with scheduled volumes.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/shop"
                  className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800"
                >
                  Explore products
                </Link>
                <Link
                  href="/contact"
                  className="rounded-xl border bg-white px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
                >
                  Request wholesale
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="grid gap-3 sm:grid-cols-3">
              <Metric label="Packs" value="60 g" />
              <Metric label="Delivery" value="Planned" />
              <Metric label="Supply" value="Weekly" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mt-12 space-y-6">
        <Reveal>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
              From seed to container
            </h2>
            <p className="text-neutral-700">
              A simple, consistent process focused on taste, texture and freshness.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <StepCard
              idx="01"
              title="Grow indoors"
              text="We control light, airflow and humidity to get stable quality without pesticides."
              meta="Controlled"
            />
          </Reveal>

          <Reveal delay={0.05}>
            <StepCard
              idx="02"
              title="Harvest close to delivery"
              text="We harvest at peak freshness to keep microgreens crisp and aromatic."
              meta="Fresh"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <StepCard
              idx="03"
              title="Pack in 60 g containers"
              text="Clean packaging, labeled batches, easy storage in fridge. Great for home and retail."
              meta="60 g"
            />
          </Reveal>

          <Reveal delay={0.15}>
            <StepCard
              idx="04"
              title="Deliver packs or wholesale"
              text="Home packs are simple. Restaurants can choose a schedule: weekly or 2-3x per week."
              meta="B2C and B2B"
            />
          </Reveal>
        </div>
      </section>

      <section className="mt-12 space-y-4">
        <Reveal>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
              FAQ
            </h2>
            <p className="text-neutral-700">
              Quick answers for homes, restaurants and retail.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <QA
              q="Do you sell farm systems?"
              a="No. We sell ready microgreens in containers and provide wholesale supply for businesses."
            />
          </Reveal>
          <Reveal delay={0.05}>
            <QA
              q="Can restaurants set a schedule?"
              a="Yes. Weekly and 2-3x per week schedules are available. Request pricing on the contact page."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <QA
              q="Do you deliver?"
              a="Yes, delivery depends on location and schedule. Send your city and preferred days in the form."
            />
          </Reveal>
          <Reveal delay={0.15}>
            <QA
              q="What pack size do you offer?"
              a="Standard pack is 60 g. Wholesale volumes are flexible."
            />
          </Reveal>
        </div>
      </section>

      <section className="mt-12 rounded-3xl border bg-white p-7 md:p-10">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <Reveal>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold tracking-tight text-neutral-900">
                Ready to order?
              </h3>
              <p className="text-neutral-700">
                Browse products or request a wholesale offer for your kitchen.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                href="/shop"
                className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800"
              >
                Shop
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border bg-white px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
              >
                Wholesale
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
