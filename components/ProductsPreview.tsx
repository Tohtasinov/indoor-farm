"use client"

import { motion } from "framer-motion"
import {
  ProductPreviewCard,
  ProductPreview,
} from "./ProductPreviewCard"

const products: ProductPreview[] = [
  {
    slug: "radish-red-arrow",
    name: "Radish – Red Arrow",
    image: "/broccoli.png",
    flavor: "Spicy",
    description: "Peppery bite with vibrant stems. Perfect for garnish.",
  },
  {
    slug: "broccoli-waltham-29",
    name: "Broccoli – Waltham 29",
    image: "/broccoli.png",
    flavor: "Mild",
    description: "Clean, versatile taste for everyday use.",
  },
  {
    slug: "pea-afila-tendril",
    name: "Pea – Afila Tendril",
    image: "/broccoli.png",
    flavor: "Crunchy",
    description: "Sweet crunch and fresh aroma. Chef favorite.",
  },
  {
    slug: "radish-rambo",
    name: "Radish – Rambo",
    image: "/broccoli.png",
    flavor: "Spicy",
    description: "Bold radish flavor with deep purple leaves.",
  },
]

export function ProductsPreview() {
  return (
    <section className="mt-16">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
          Our microgreens
        </h2>
        <p className="mt-2 max-w-xl text-neutral-700">
          Freshly harvested microgreens grown locally and delivered at peak
          flavor.
        </p>
      </div>

      <motion.div
        className="grid gap-6 sm:grid-cols-2 md:grid-cols-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.12 },
          },
        }}
      >
        {products.map((p) => (
          <ProductPreviewCard key={p.slug} product={p} />
        ))}
      </motion.div>
    </section>
  )
}
