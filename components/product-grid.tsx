"use client"

import { ProductCard } from "@/components/product-card"

const products = [
  {
    id: "prod_elite_x1",
    name: "Elite X1",
    description: "Flagship model with adaptive noise cancellation and 50-hour battery life",
    price: 49900,
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
  {
    id: "prod_gaming_x",
    name: "Gaming X",
    description: "Immersive 7.1 surround sound with RGB lighting for gamers",
    price: 27900,
    image: "/placeholder.svg?height=400&width=400",
    features: ["7.1 Surround", "RGB Lighting", "Boom Mic", "USB-C"],
  },
  {
    id: "prod_open_air",
    name: "Open Air",
    description: "Open-back design for natural soundstage and audiophile experience",
    price: 44900,
    image: "/placeholder.svg?height=400&width=400",
    features: ["Open-Back", "Planar Drivers", "Wooden Cups", "Audiophile Grade"],
  },
  {
    id: "prod_kids_safe",
    name: "Kids Safe",
    description: "Volume-limited headphones designed specifically for children",
    price: 14900,
    image: "/placeholder.svg?height=400&width=400",
    features: ["Volume Limited", "Durable", "Adjustable", "Fun Colors"],
  },
  {
    id: "prod_noise_pro",
    name: "Noise Pro",
    description: "Industry-leading noise cancellation for frequent travelers",
    price: 42900,
    image: "/placeholder.svg?height=400&width=400",
    features: ["Adaptive ANC", "Transparency Mode", "40hr Battery", "Premium Build"],
  },
  {
    id: "prod_true_wireless",
    name: "True Wireless",
    description: "Premium true wireless earbuds with spatial audio support",
    price: 22900,
    image: "/placeholder.svg?height=400&width=400",
    features: ["Spatial Audio", "ANC", "Wireless Charging", "24hr Total"],
  },
  {
    id: "prod_retro_vibe",
    name: "Retro Vibe",
    description: "Vintage-inspired design with modern wireless technology",
    price: 26900,
    image: "/placeholder.svg?height=400&width=400",
    features: ["Vintage Style", "Modern Tech", "Soft Padding", "25hr Battery"],
  },
  {
    id: "prod_workout_pro",
    name: "Workout Pro",
    description: "Bone conduction technology for safe outdoor workouts",
    price: 18900,
    image: "/placeholder.svg?height=400&width=400",
    features: ["Bone Conduction", "Open Ear", "Sweatproof", "8hr Battery"],
  },
  {
    id: "prod_sleep_buds",
    name: "Sleep Buds",
    description: "Ultra-comfortable earbuds designed for sleeping and relaxation",
    price: 16900,
    image: "/placeholder.svg?height=400&width=400",
    features: ["Ultra Comfort", "Sleep Sounds", "10hr Battery", "Tiny Design"],
  },
  {
    id: "prod_dj_master",
    name: "DJ Master",
    description: "Professional DJ headphones with swivel cups and coiled cable",
    price: 32900,
    image: "/placeholder.svg?height=400&width=400",
    features: ["Swivel Cups", "Coiled Cable", "Powerful Bass", "Durable"],
  },
  {
    id: "prod_office_comfort",
    name: "Office Comfort",
    description: "All-day comfort with built-in microphone for video calls",
    price: 21900,
    image: "/placeholder.svg?height=400&width=400",
    features: ["All-Day Comfort", "Clear Mic", "Multi-Point", "35hr Battery"],
  },
  {
    id: "prod_luxury_edition",
    name: "Luxury Edition",
    description: "Hand-crafted premium materials with exceptional sound quality",
    price: 79900,
    image: "/placeholder.svg?height=400&width=400",
    features: ["Hand-Crafted", "Premium Materials", "Exceptional Sound", "Limited Edition"],
  },
  {
    id: "prod_budget_best",
    name: "Budget Best",
    description: "Affordable quality sound for everyday listening",
    price: 9900,
    image: "/placeholder.svg?height=400&width=400",
    features: ["Great Value", "Comfortable", "20hr Battery", "Reliable"],
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
