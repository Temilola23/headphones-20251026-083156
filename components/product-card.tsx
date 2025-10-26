"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Check } from "lucide-react"
import { checkout } from "@/app/actions/checkout"

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  features: string[]
}

export function ProductCard({ product }: { product: Product }) {
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckout = async () => {
    setIsLoading(true)
    try {
      const url = await checkout(product.id, product.name, product.price, product.image)
      window.location.href = url
    } catch (error) {
      console.error("Checkout error:", error)
      setIsLoading(false)
    }
  }

  return (
    <Card className="group overflow-hidden border-border bg-card hover:border-accent transition-all duration-300">
      <CardHeader className="p-0">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div>
          <CardTitle className="text-2xl mb-2">{product.name}</CardTitle>
          <CardDescription className="text-muted-foreground leading-relaxed">{product.description}</CardDescription>
        </div>
        <div className="flex flex-wrap gap-2">
          {product.features.map((feature) => (
            <Badge key={feature} variant="secondary" className="text-xs">
              <Check className="h-3 w-3 mr-1" />
              {feature}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex items-center justify-between">
        <div className="text-3xl font-bold">${(product.price / 100).toFixed(2)}</div>
        <Button
          onClick={handleCheckout}
          disabled={isLoading}
          className="bg-accent text-accent-foreground hover:bg-accent/90"
        >
          {isLoading ? (
            "Processing..."
          ) : (
            <>
              <ShoppingCart className="h-4 w-4 mr-2" />
              Buy Now
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
