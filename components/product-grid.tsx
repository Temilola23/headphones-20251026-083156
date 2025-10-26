"use client"

import { ProductCard } from "@/components/product-card"

const products = [
  {
    id: "prod_elite_x1",
    name: "Elite X1",
    description: "Flagship model with adaptive noise cancellation and 50-hour battery life",
    price: 49900, // in cents
    image: "/placeholder.svg?height=400&width=400",
    features: ["Active Noise Cancellation", "50hr Battery", "Premium Leather", "Hi-Res Audio"],
  },
  {
    id: "prod_studio_pro",
    name: "Studio Pro",
    description: "Professional-grade headphones for studio monitoring and production",
    price: 39900,
    image: "/placeholder.svg?height=400&width=400",
    features: ["Studio Quality", "Detachable Cable", "Closed-Back Design", "Flat Response"],
  },
  {
    id: "prod_sport_edge",
    name: "Sport Edge",
    description: "Wireless earbuds designed for active lifestyles with IPX7 water resistance",
    price: 19900,
    image: "/placeholder.svg?height=400&width=400",
    features: ["IPX7 Waterproof", "Secure Fit", "12hr Playtime", "Quick Charge"],
  },
  {
    id: "prod_classic_v2",
    name: "Classic V2",
    description: "Timeless design meets modern technology for everyday listening",
    price: 29900,
    image: "/placeholder.svg?height=400&width=400",
    features: ["Bluetooth 5.3", "Foldable Design", "30hr Battery", "Multi-Device"],
  },
  {
    id: "prod_bass_master",
    name: "Bass Master",
    description: "Enhanced bass response for electronic music and hip-hop enthusiasts",
    price: 34900,
    image: "/placeholder.svg?height=400&width=400",
    features: ["Extra Bass", "40mm Drivers", "Noise Isolation", "Durable Build"],
  },
  {
    id: "prod_travel_lite",
    name: "Travel Lite",
    description: "Compact and lightweight with premium sound for travelers",
    price: 24900,
    image: "/placeholder.svg?height=400&width=400",
    features: ["Ultra Portable", "Travel Case", "20hr Battery", "Quick Fold"],
  },
]

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
