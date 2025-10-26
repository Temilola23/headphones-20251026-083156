import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-8 py-16">
            <div className="flex justify-center">
              <CheckCircle className="h-24 w-24 text-accent" />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Order Confirmed!</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Thank you for your purchase. Your order has been successfully processed and you will receive a
                confirmation email shortly.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href="/shop">
                <Button size="lg" variant="outline">
                  Continue Shopping
                </Button>
              </Link>
              <Link href="/">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
