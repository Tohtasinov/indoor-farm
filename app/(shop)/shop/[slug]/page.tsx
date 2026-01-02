import Link from "next/link"
import { notFound } from "next/navigation"
import { getProductBySlug, products } from "@/data/products"
import { ProductGallery } from "@/components/ProductGallery"
import { ProductCard } from "@/components/ProductCard"

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)
  if (!product) return { title: "Product not found | Alicia Green" }

  return {
    title: `${product.name} | Alicia Green`,
    description: product.description,
  }
}

function relatedByFlavor(slug: string) {
  const current = getProductBySlug(slug)
  if (!current) return []
  return products
    .filter((p) => p.slug !== slug)
    .filter((p) => p.flavor === current.flavor)
    .slice(0, 3)
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()

  const gallery = product.gallery && product.gallery.length ? product.gallery : [product.image]
  const related = relatedByFlavor(params.slug)

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="mb-6 flex items-center justify-between gap-4">
        <Link href="/shop" className="text-sm text-neutral-700 hover:underline">
          ← Back to shop
        </Link>

        <Link
          href="/contact"
          className="rounded-xl border bg-white px-3 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
        >
          Wholesale inquiry
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2 md:items-start">
        <ProductGallery images={gallery} alt={product.name} />

        <div className="space-y-5">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-neutral-900">
              {product.name}
            </h1>

            <p className="text-neutral-700">{product.description}</p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="rounded-full border bg-white px-3 py-1 text-xs text-neutral-700">
                {product.weight}
              </span>
              <span className="rounded-full border bg-white px-3 py-1 text-xs text-neutral-700">
                {product.flavor}
              </span>
              {product.wholesale ? (
                <span className="rounded-full border bg-white px-3 py-1 text-xs text-neutral-700">
                  Wholesale available
                </span>
              ) : null}
              <span className="rounded-full border bg-white px-3 py-1 text-xs text-neutral-700">
                {product.price ? product.price : "Price on request"}
              </span>
            </div>
          </div>

          <div className="rounded-2xl border bg-neutral-50 p-5">
            <p className="text-sm font-medium text-neutral-900">
              About this product
            </p>
            <p className="mt-2 text-sm text-neutral-700">
              {product.longDescription ? product.longDescription : product.description}
            </p>
          </div>

          {product.useTips && product.useTips.length ? (
            <div className="rounded-2xl border bg-white p-5">
              <p className="text-sm font-medium text-neutral-900">
                How to use
              </p>
              <div className="mt-3 grid gap-2">
                {product.useTips.map((t) => (
                  <div key={t} className="rounded-xl border bg-neutral-50 px-3 py-2 text-sm text-neutral-700">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800"
            >
              Request wholesale pricing
            </Link>

            <Link
              href="/shop"
              className="rounded-xl border bg-white px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
            >
              Explore more products
            </Link>
          </div>

          <div className="rounded-2xl border bg-white p-5">
            <p className="text-sm font-medium text-neutral-900">
              Freshness note
            </p>
            <p className="mt-2 text-sm text-neutral-700">
              Keep refrigerated. For best taste and texture, use as fresh as possible after opening.
            </p>
          </div>
        </div>
      </div>

      {related.length ? (
        <section className="mt-12">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-neutral-900">
              Similar products
            </h2>
            <p className="mt-1 text-sm text-neutral-700">
              More options with the same flavor profile.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  )
}
