import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/data/products"

const flavorClass: Record<Product["flavor"], string> = {
  Mild: "bg-emerald-50 text-emerald-700",
  Spicy: "bg-red-50 text-red-700",
  Crunchy: "bg-lime-50 text-lime-700",
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group block rounded-2xl border bg-white p-4 shadow-sm transition hover:shadow-md"
    >
      <div className="relative aspect-square overflow-hidden rounded-xl bg-neutral-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
        />

        <div className="absolute left-3 top-3 flex items-center gap-2">
          <span className="rounded-full border bg-white/90 px-2 py-0.5 text-xs text-neutral-700 backdrop-blur">
            {product.weight}
          </span>
          {product.wholesale ? (
            <span className="rounded-full border bg-white/90 px-2 py-0.5 text-xs text-neutral-700 backdrop-blur">
              Wholesale
            </span>
          ) : null}
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-sm font-semibold text-neutral-900">
            {product.name}
          </h3>

          <span
            className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${flavorClass[product.flavor]}`}
          >
            {product.flavor}
          </span>
        </div>

        <p className="text-sm text-neutral-600">{product.description}</p>

        <div className="flex items-center justify-between pt-1">
          <span className="text-xs text-neutral-500">
            {product.price ? product.price : "Price on request"}
          </span>

          <span className="text-xs font-medium text-neutral-900">
            View →
          </span>
        </div>
      </div>
    </Link>
  )
}
