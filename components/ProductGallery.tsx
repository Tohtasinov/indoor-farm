"use client"

import Image from "next/image"
import { useMemo, useState } from "react"

export function ProductGallery({
  images,
  alt,
}: {
  images: string[]
  alt: string
}) {
  const safe = useMemo(() => {
    const unique = Array.from(new Set(images)).filter(Boolean)
    return unique.length ? unique : ["/products/placeholder.jpg"]
  }, [images])

  const [active, setActive] = useState(0)

  return (
    <div className="rounded-3xl border bg-white p-4">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-100">
        <Image
          src={safe[active]}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      {safe.length > 1 ? (
        <div className="mt-3 grid grid-cols-4 gap-2">
          {safe.slice(0, 4).map((src, i) => (
            <button
              key={src}
              onClick={() => setActive(i)}
              className={[
                "relative aspect-square overflow-hidden rounded-xl border bg-neutral-100",
                i === active ? "border-neutral-900" : "border-neutral-200",
              ].join(" ")}
              aria-label={`Open image ${i + 1}`}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                sizes="25vw"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
