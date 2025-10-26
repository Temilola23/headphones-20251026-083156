"use client"

import { Button } from "@/components/ui/button"
import { Menu, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold tracking-tight text-foreground">HeadPhones</div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/shop" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Shop
            </Link>
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost" size="sm" className="hidden md:inline-flex text-foreground">
              Contact Sales
            </Button>
            <Link href="/shop">
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Shop Now
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
