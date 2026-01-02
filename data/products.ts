export type Flavor = "Mild" | "Spicy" | "Crunchy"

export type Product = {
  slug: string
  name: string
  description: string
  longDescription?: string
  image: string
  gallery?: string[]
  useTips?: string[]
  flavor: Flavor
  weight: string
  wholesale: boolean
  price?: string
}

export const products: Product[] = [
  {
    slug: "radish-red-arrow",
    name: "Radish Red Arrow",
    description: "Peppery bite with vibrant stems. Great for garnish.",
    longDescription:
      "Bright color and strong radish flavor. Perfect for bowls, salads, sandwiches and plating. Best used fresh right after opening.",
    image: "/broccoli.png",
    gallery: [
      "/broccoli.png",
      "/broccoli.png",
      "/broccoli.png",
    ],
    useTips: [
      "Finish the dish right before serving",
      "Great with eggs, bowls, soups",
      "Keep refrigerated and dry",
    ],
    flavor: "Spicy",
    weight: "60 g",
    wholesale: true,
    price: "250 KGS",
  },
  {
    slug: "broccoli-waltham-29",
    name: "Broccoli Waltham 29",
    description: "Clean taste, very versatile for everyday use.",
    longDescription:
      "Mild flavor and easy pairing with most dishes. Great for salads, eggs, soups and bowls. A safe choice for regular orders.",
    image: "/broccoli.png",
    gallery: [
      "/broccoli.png",
      "/broccoli.png",
      "/broccoli.png",
    ],
    useTips: [
      "Perfect for daily salads",
      "Add to sandwiches and wraps",
      "Best within 3 to 5 days",
    ],
    flavor: "Mild",
    weight: "60 g",
    wholesale: true,
    price: "230 KGS",
  },
  {
    slug: "pea-afila-tendril",
    name: "Pea Afila Tendril",
    description: "Sweet crunch and fresh aroma. Chef favorite.",
    longDescription:
      "Crunchy texture and sweet pea notes. Great for salads, sandwiches and as a garnish for hot dishes right before serving.",
    image: "/broccoli.png",
    gallery: [
      "/broccoli.png",
      "/broccoli.png",
      "/broccoli.png",
    ],
    useTips: [
      "Crunchy topping for salads",
      "Great for plating and garnish",
      "Keep cold, avoid extra moisture",
    ],
    flavor: "Crunchy",
    weight: "60 g",
    wholesale: true,
    price: "260 KGS",
  },
  {
    slug: "radish-rambo",
    name: "Radish Rambo",
    description: "Bold radish punch with deep purple leaves.",
    longDescription:
      "Strong flavor and premium look. Use for garnish, plating and to add a spicy note to salads and bowls.",
    image: "/broccoli.png",
    gallery: [
      "/broccoli.png",
     "/broccoli.png",
      "/broccoli.png",
    ],
    useTips: [
      "Best for garnish and plating",
      "Adds strong spicy note",
      "Use fresh, do not cook long",
    ],
    flavor: "Spicy",
    weight: "60 g",
    wholesale: true,
    price: "250 KGS",
  },
]

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug)
}
