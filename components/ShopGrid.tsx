"use client"

import { useMemo, useState } from "react"
import type { Product, Flavor } from "@/data/products"
import { ProductCard } from "@/components/ProductCard"
import { ShopToolbar, SortKey, Mode } from "@/components/ShopToolbar"
import { motion } from "framer-motion"

const orderFlavor: Record<Flavor, number> = {
  Mild: 1,
  Crunchy: 2,
  Spicy: 3,
}

export function ShopGrid({ items }: { items: Product[] }) {
  const [query, setQuery] = useState("")
  const [flavor, setFlavor] = useState<Flavor | "All">("All")
  const [sort, setSort] = useState<SortKey>("Featured")
  const [mode, setMode] = useState<Mode>("Packs")

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()

    let list = items.filter((p) => {
      const matchQuery =
        q.length === 0 ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)

      const matchFlavor = flavor === "All" ? true : p.flavor === flavor

      const matchMode =
        mode === "Wholesale" ? p.wholesale === true : true

      return matchQuery && matchFlavor && matchMode
    })

    if (sort === "A-Z") {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name))
    }

    if (sort === "Flavor") {
      list = [...list].sort((a, b) => orderFlavor[a.flavor] - orderFlavor[b.flavor])
    }

    return list
  }, [items, query, flavor, sort, mode])

  return (
    <div className="space-y-6">
      <ShopToolbar
        query={query}
        setQuery={setQuery}
        flavor={flavor}
        setFlavor={setFlavor}
        sort={sort}
        setSort={setSort}
        mode={mode}
        setMode={setMode}
      />

      <motion.div
        className="grid gap-6 sm:grid-cols-2 md:grid-cols-3"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {filtered.map((p) => (
          <motion.div
            key={p.slug}
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.35 }}
          >
            <ProductCard product={p} />
          </motion.div>
        ))}
      </motion.div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border bg-white p-6 text-sm text-neutral-700">
          No products found. Try another search, filter, or mode.
        </div>
      ) : null}
    </div>
  )
}
