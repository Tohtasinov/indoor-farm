import Link from "next/link"
import { products } from "@/data/products"
import { ShopGrid } from "@/components/ShopGrid"

export const metadata = {
  title: "Shop | Alicia Green",
  description: "Microgreens in 60 g packs. Wholesale for restaurants and retail.",
}

export default function ShopPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <section className="relative overflow-hidden rounded-3xl border bg-white p-7 md:p-10">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-200 blur-3xl opacity-50" />
          <div className="absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-lime-200 blur-3xl opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-white" />
        </div>

        <div className="relative grid gap-6 md:grid-cols-2 md:items-center">
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold text-neutral-900 md:text-4xl">
              Fresh microgreens for home and restaurants
            </h1>
            <p className="text-neutral-700">
              60 g packs for everyday meals. Wholesale supply for cafes, kitchens and retail.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contact"
                className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
              >
                Request wholesale pricing
              </Link>
              <Link
                href="/"
                className="rounded-xl border bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
              >
                Back to home
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border bg-white/70 p-4 backdrop-blur">
              <p className="text-xs text-neutral-600">Harvest</p>
              <p className="text-lg font-semibold text-neutral-900">Regular</p>
            </div>
            <div className="rounded-2xl border bg-white/70 p-4 backdrop-blur">
              <p className="text-xs text-neutral-600">Packs</p>
              <p className="text-lg font-semibold text-neutral-900">60 g</p>
            </div>
            <div className="rounded-2xl border bg-white/70 p-4 backdrop-blur">
              <p className="text-xs text-neutral-600">Wholesale</p>
              <p className="text-lg font-semibold text-neutral-900">Available</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <ShopGrid items={products} />
      </section>

      <section className="mt-12 rounded-3xl border bg-neutral-50 p-7 md:p-10">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-neutral-900">
              Delivery and freshness
            </h2>
            <p className="text-neutral-700">
              We harvest close to delivery time. For restaurants, we can plan a weekly schedule.
            </p>
            <div className="pt-2 text-sm text-neutral-700">
              Packs: 60 g containers
              <br />
              Wholesale: flexible volumes
            </div>
          </div>

          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              href="/contact"
              className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
            >
              Get a wholesale offer
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
            >
              Ask about delivery
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
