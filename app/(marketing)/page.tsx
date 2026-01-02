import { GrowingLeaves } from "@/components/GrowingLeaves"
import Image from "next/image"
import Link from "next/link"
import { LottiePlayer } from "@/components/LottiePlayer"
import { Testimonials } from "@/components/Testimonials"
import { Reveal } from "@/components/Reveal"
import { ProductQuiz } from "@/components/ProductQuiz"
import { ProductsPreview } from "@/components/ProductsPreview"


export const metadata = {
  title: "Alicia Green | Indoor Farming Made Easy",
  description:
    "Indoor farm solutions: fresh greens grown locally with modern, sustainable systems.",
}

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <section className="relative overflow-hidden rounded-3xl border bg-white">
        {/* Background blobs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-green-200 blur-3xl opacity-60" />
          <div className="absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-emerald-200 blur-3xl opacity-60" />
        </div>

        {/* Growing leaves (grass) */}
        <div className="absolute inset-0 z-10">
          <GrowingLeaves />
        </div>

        {/* White overlay */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-white/30 to-white" />

        {/* Content */}
        <div className="relative z-30 grid gap-10 p-7 md:grid-cols-2 md:items-center md:p-10">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border bg-white/70 px-3 py-1 text-xs font-medium text-neutral-700 backdrop-blur">
                Indoor farm
              </span>
              <span className="rounded-full border bg-white/70 px-3 py-1 text-xs font-medium text-neutral-700 backdrop-blur">
                Pesticide free
              </span>
              <span className="rounded-full border bg-white/70 px-3 py-1 text-xs font-medium text-neutral-700 backdrop-blur">
                Year round harvest
              </span>
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
              Fresh greens, grown closer to you.
            </h1>

            <p className="text-base leading-relaxed text-neutral-700 md:text-lg">
              Alicia Green builds indoor farm systems for homes, cafes, and
              offices. Reliable harvests, clean growing, and a simple routine.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800"
              >
                Explore shop
              </Link>
              <Link
                href="/how-it-works"
                className="rounded-xl border bg-white px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
              >
                How it works
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border bg-white px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
              >
                Get a quote
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-3">
              <div className="rounded-2xl border bg-white/70 p-3 backdrop-blur">
                <p className="text-xs text-neutral-600">Setup</p>
                <p className="text-lg font-semibold text-neutral-900">Fast</p>
              </div>
              <div className="rounded-2xl border bg-white/70 p-3 backdrop-blur">
                <p className="text-xs text-neutral-600">Care</p>
                <p className="text-lg font-semibold text-neutral-900">Simple</p>
              </div>
              <div className="rounded-2xl border bg-white/70 p-3 backdrop-blur">
                <p className="text-xs text-neutral-600">Harvest</p>
                <p className="text-lg font-semibold text-neutral-900">Weekly</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-green-200/40 to-emerald-200/40 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border bg-white shadow-sm">
              <div className="p-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100">
  <LottiePlayer
    src="https://lottie.host/96d00df6-1275-4b9b-8cce-691c1528ada8/32Z2XmJbOW.lottie"
    className="h-full w-full"
  />
</div>


                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border p-4">
                    <p className="text-sm font-medium text-neutral-900">
                      For homes
                    </p>
                    <p className="mt-1 text-sm text-neutral-600">
                      Compact systems that look great in any space.
                    </p>
                  </div>
                  <div className="rounded-2xl border p-4">
                    <p className="text-sm font-medium text-neutral-900">
                      For cafes
                    </p>
                    <p className="mt-1 text-sm text-neutral-600">
                      Consistent greens for salads and garnishes.
                    </p>
                  </div>
                </div>

                <div className="mt-3 rounded-2xl border bg-neutral-50 p-4">
                  <p className="text-sm font-medium text-neutral-900">
                    Want a recommendation?
                  </p>
                  <p className="mt-1 text-sm text-neutral-600">
                    Tell us your space size and goals. We suggest the best setup.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
          Why Alicia Green
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border p-6">
            <p className="text-sm font-medium text-neutral-900">Clean growing</p>
            <p className="mt-2 text-sm text-neutral-600">
              Controlled environment, no pesticides, consistent quality.
            </p>
          </div>
          <div className="rounded-2xl border p-6">
            <p className="text-sm font-medium text-neutral-900">
              Sustainable by design
            </p>
            <p className="mt-2 text-sm text-neutral-600">
              Efficient water use and optimized lighting.
            </p>
          </div>
          <div className="rounded-2xl border p-6">
            <p className="text-sm font-medium text-neutral-900">Built to scale</p>
            <p className="mt-2 text-sm text-neutral-600">
              Start with 1 unit and expand when ready.
            </p>
          </div>
        </div>
        <ProductsPreview/>
        <Reveal delay={0.15}>
  <Testimonials />
</Reveal>
<ProductQuiz />



      </section>

      <section className="mt-12 rounded-3xl border bg-neutral-50 p-7 md:p-10">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-neutral-900">
              Ready to launch your indoor farm?
            </h3>
            <p className="mt-2 text-neutral-700">
              We help you choose the right system and get growing fast.
            </p>
          </div>

          <div className="flex gap-3 md:justify-end">
            <Link
              href="/contact"
              className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800"
            >
              Contact
            </Link>
            <Link
              href="/shop"
              className="rounded-xl border bg-white px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
            >
              Browse products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
