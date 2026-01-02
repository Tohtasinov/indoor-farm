"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Maya K.",
    role: "Cafe owner",
    text: "We cut waste and always have fresh greens on hand. Setup was quick and support was clear.",
    rating: 5,
  },
  {
    name: "Daniel R.",
    role: "Home grower",
    text: "It looks great in the kitchen and the routine is simple. Harvest every week feels amazing.",
    rating: 5,
  },
  {
    name: "Sofia L.",
    role: "Office manager",
    text: "Employees love it. The system is quiet, clean, and the results are consistent.",
    rating: 5,
  },
]

function Stars({ count }: { count: number }) {
  const items = Array.from({ length: 5 }, (_, i) => i < count)
  return (
    <div className="flex items-center gap-1" aria-label={`${count} out of 5`}>
      {items.map((filled, idx) => (
        <svg
          key={idx}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={filled ? "currentColor" : "none"}
          className={filled ? "text-amber-500" : "text-neutral-300"}
          aria-hidden="true"
        >
          <path
            d="M12 17.3l-6.18 3.73 1.64-7.03L2 9.24l7.19-.61L12 2l2.81 6.63 7.19.61-5.46 4.76 1.64 7.03L12 17.3z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="mt-12">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
          Trusted by growers
        </h2>
        <p className="text-neutral-700">
          Real feedback from homes, cafes, and offices using Alicia Green systems.
        </p>
      </div>

      <motion.div
        className="mt-6 grid gap-4 md:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {testimonials.map((t) => (
          <motion.div
            key={t.name}
            className="rounded-2xl border bg-white p-6 shadow-sm"
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Stars count={t.rating} />
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              {t.text}
            </p>

            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-neutral-900">{t.name}</p>
                <p className="text-xs text-neutral-500">{t.role}</p>
              </div>

              <span className="rounded-full border bg-neutral-50 px-3 py-1 text-xs text-neutral-600">
                Verified
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
