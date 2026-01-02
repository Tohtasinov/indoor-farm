import { ContactForm } from "@/components/ContactForm"

export const metadata = {
  title: "Contact | Alicia Green",
  description: "Wholesale and retail inquiries. Packs and regular delivery.",
}

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <section className="relative overflow-hidden rounded-3xl border bg-white p-7 md:p-10">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-200 blur-3xl opacity-50" />
          <div className="absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-lime-200 blur-3xl opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-white" />
        </div>

        <div className="relative grid gap-8 md:grid-cols-2 md:items-start">
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold text-neutral-900">
              Contact and wholesale
            </h1>
            <p className="text-neutral-700">
              We sell fresh microgreens in 60 g containers and supply restaurants
              and retail with flexible volumes.
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border bg-white/70 p-4 backdrop-blur">
                <p className="text-xs text-neutral-600">For restaurants</p>
                <p className="mt-1 text-sm font-medium text-neutral-900">
                  Weekly supply, consistent quality
                </p>
              </div>
              <div className="rounded-2xl border bg-white/70 p-4 backdrop-blur">
                <p className="text-xs text-neutral-600">For retail</p>
                <p className="mt-1 text-sm font-medium text-neutral-900">
                  Shelf ready packs and schedules
                </p>
              </div>
            </div>

            <div className="pt-2 text-sm text-neutral-700">
              Typical pack: 60 g
              <br />
              Wholesale: volume on request
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  )
}
