"use client"

import { motion } from "framer-motion"

export function GrowingLeaves() {
  const stem =
    "absolute bottom-0 origin-bottom rounded-full bg-gradient-to-t from-green-500/70 via-emerald-400/40 to-transparent"

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 2.0, ease: "easeOut" }}
        className={`${stem} left-[14%] h-56 w-[4px]`}
      />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 2.4, ease: "easeOut", delay: 0.15 }}
        className={`${stem} left-[48%] h-72 w-[4px]`}
      />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 2.8, ease: "easeOut", delay: 0.3 }}
        className={`${stem} left-[78%] h-60 w-[4px]`}
      />

      {/* мягкое свечение у низа */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-green-200/20 blur-2xl" />
    </div>
  )
}
