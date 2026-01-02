"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export type Flavor = "Mild" | "Spicy" | "Crunchy"

export type ProductPreview = {
  slug: string
  name: string
  image: string
  flavor: Flavor
  description: string
}

const flavorStyles: Record<Flavor, string> = {
  Mild: "bg-emerald-50 text-emerald-700",
  Spicy: "bg-red-50 text-red-700",
  Crunchy: "bg-lime-50 text-lime-700",
}

export function ProductPreviewCard({
  product,
}: {
  product: ProductPreview
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group rounded-2xl border bg-white p-4 shadow-sm hover:shadow-md"
    >
      <div className="relative aspect-square overflow-hidden rounded-xl bg-neutral-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition group-hover:scale-105"
        />
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-neutral-900">
            {product.name}
          </h3>
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-medium ${flavorStyles[product.flavor]}`}
          >
            {product.flavor}
          </span>
        </div>

        <p className="text-sm text-neutral-600">
          {product.description}
        </p>
      </div>

      <div className="mt-4">
        <Link
          href="/shop"
          className="inline-flex items-center gap-1 text-sm font-medium text-neutral-900 hover:underline"
        >
          View in shop →
        </Link>
      </div>
    </motion.div>
  )
}
