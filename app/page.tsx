import { Hero } from "@/components/hero"
import { Header } from "@/components/header"
import { Features } from "@/components/features"
import { About } from "@/components/about"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <About />
    </main>
  )
}
