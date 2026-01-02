"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
]

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(href + "/")
}

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 border-b bg-white/75 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <Link href="/" className="group flex items-center gap-3">
  <img
  src="/1.svg"
  alt="Alicia Green logo"
  className="h-22 w-22 rounded-full overflow-hidden"
/>
  <span className="text-sm font-semibold tracking-tight text-neutral-900">
    Alicia Green
  </span>
</Link>
        </div>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = isActive(pathname, l.href)
            return (
              <Link
                key={l.href}
                href={l.href}
                className={[
                  "rounded-xl px-3 py-2 text-sm transition",
                  active
                    ? "bg-neutral-900 text-white"
                    : "text-neutral-700 hover:bg-neutral-100",
                ].join(" ")}
              >
                {l.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/shop"
            className="rounded-xl border bg-white px-3 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
          >
            Browse
          </Link>
          <Link
            href="/contact"
            className="rounded-xl bg-green-600 px-3 py-2 text-sm font-medium text-white hover:bg-green-700"
          >
            Get a quote
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-xl border bg-white p-2 text-neutral-900 hover:bg-neutral-50 md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 7H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 12H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 17H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {open ? (
        <div className="border-t bg-white/90 backdrop-blur md:hidden">
          <div className="mx-auto w-full max-w-6xl px-4 py-4">
            <div className="grid gap-2">
              {links.map((l) => {
                const active = isActive(pathname, l.href)
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={[
                      "rounded-xl px-3 py-3 text-sm transition",
                      active
                        ? "bg-neutral-900 text-white"
                        : "text-neutral-800 hover:bg-neutral-100",
                    ].join(" ")}
                  >
                    {l.label}
                  </Link>
                )
              })}

              <div className="mt-2 grid gap-2">
                <Link
                  href="/shop"
                  className="rounded-xl border bg-white px-3 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
                >
                  Browse products
                </Link>
                <Link
                  href="/contact"
                  className="rounded-xl bg-green-600 px-3 py-3 text-sm font-medium text-white hover:bg-green-700"
                >
                  Get a quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
