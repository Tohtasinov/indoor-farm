"use client"

import Script from "next/script"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'dotlottie-wc': any
    }
  }
}

export function LottiePlayer({
  src,
  className = "",
}: {
  src: string
  className?: string
}) {
  return (
    <div className={className}>
      <Script
        src="https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.11/dist/dotlottie-wc.js"
        type="module"
        strategy="afterInteractive"
      />
      <dotlottie-wc
        src={src}
        autoplay
        loop
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  )
}
