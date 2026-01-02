"use client"

import { useMemo } from "react"
import type { Flavor } from "@/data/products"

function cn(...v: Array<string | false | undefined>) {
  return v.filter(Boolean).join(" ")
}

export type SortKey = "Featured" | "A-Z" | "Flavor"
export type Mode = "Packs" | "Wholesale"

export function ShopToolbar({
  query,
  setQuery,
  flavor,
  setFlavor,
  sort,
  setSort,
  mode,
  setMode,
}: {
  query: string
  setQuery: (v: string) => void
  flavor: Flavor | "All"
  setFlavor: (v: Flavor | "All") => void
  sort: SortKey
  setSort: (v: SortKey) => void
  mode: Mode
  setMode: (v: Mode) => void
}) {
  const flavors = useMemo(
    () => ["All", "Mild", "Spicy", "Crunchy"] as const,
    []
  )

  const sorts = useMemo(() => ["Featured", "A-Z", "Flavor"] as const, [])

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full rounded-xl border bg-white px-4 py-2 text-sm text-neutral-900 outline-none focus:ring-2 focus:ring-emerald-200"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="flex overflow-hidden rounded-xl border bg-white">
            {(["Packs", "Wholesale"] as const).map((v) => {
              const active = mode === v
              return (
                <button
                  key={v}
                  onClick={() => setMode(v)}
                  className={cn(
                    "px-3 py-2 text-xs font-medium transition",
                    active ? "bg-neutral-900 text-white" : "text-neutral-800 hover:bg-neutral-50"
                  )}
                >
                  {v}
                </button>
              )
            })}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-600">Sort</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="rounded-xl border bg-white px-3 py-2 text-xs font-medium text-neutral-900"
            >
              {sorts.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {flavors.map((v) => {
          const active = flavor === v
          return (
            <button
              key={v}
              onClick={() => setFlavor(v)}
              className={cn(
                "rounded-full border px-3 py-1 text-xs font-medium transition",
                active
                  ? "border-neutral-900 bg-neutral-900 text-white"
                  : "bg-white text-neutral-800 hover:bg-neutral-50"
              )}
            >
              {v}
            </button>
          )
        })}
      </div>
    </div>
  )
}
