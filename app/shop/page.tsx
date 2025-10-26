import { Header } from "@/components/header"
import { ProductGrid } from "@/components/product-grid"

export default function ShopPage() {
  console.log("[v0] Shop page rendering")

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-accent font-mono">Premium Collection</p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance text-foreground">
                Discover Your Perfect Sound
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Each model is meticulously crafted to deliver an unparalleled audio experience
              </p>
            </div>

            <ProductGrid />
          </div>
        </div>
      </main>
    </div>
  )
}
