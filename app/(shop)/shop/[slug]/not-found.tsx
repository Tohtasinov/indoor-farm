import Link from "next/link"

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16">
      <h1 className="text-2xl font-semibold text-neutral-900">
        Product not found
      </h1>
      <p className="mt-2 text-neutral-700">
        This product does not exist or was removed.
      </p>
      <div className="mt-6">
        <Link
          href="/shop"
          className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
        >
          Back to shop
        </Link>
      </div>
    </div>
  )
}
