import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Award, Heart, Zap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-accent font-mono">About the Creator</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance text-foreground">
                Born from Passion, Built with Purpose
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  HeadPhones was founded by Alex Chen, a former audio engineer and lifelong music enthusiast who spent
                  over a decade working with top recording studios around the world. Frustrated by the compromise
                  between quality and affordability in the consumer market, Alex set out to change the game.
                </p>
                <p>
                  "I've heard music the way it's meant to be heard," Alex says. "In the studio, every detail matters. I
                  wanted to bring that same experience to everyday listeners without the premium price tag that usually
                  comes with it."
                </p>
                <p>
                  Starting in a small workshop in 2019, Alex personally designed and tested hundreds of prototypes,
                  combining professional-grade components with innovative acoustic engineering. Today, HeadPhones has
                  grown into a global brand trusted by musicians, producers, and audiophiles who refuse to compromise on
                  sound quality.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="flex flex-col items-center text-center p-4 rounded-lg bg-secondary/50 border border-border">
                  <Award className="w-8 h-8 text-accent mb-2" />
                  <p className="text-2xl font-bold text-foreground">15+</p>
                  <p className="text-xs text-muted-foreground">Years Experience</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-lg bg-secondary/50 border border-border">
                  <Heart className="w-8 h-8 text-accent mb-2" />
                  <p className="text-2xl font-bold text-foreground">50K+</p>
                  <p className="text-xs text-muted-foreground">Happy Customers</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-lg bg-secondary/50 border border-border">
                  <Zap className="w-8 h-8 text-accent mb-2" />
                  <p className="text-2xl font-bold text-foreground">100%</p>
                  <p className="text-xs text-muted-foreground">Handcrafted</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/shop">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Explore Collection
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:bg-secondary bg-transparent"
                >
                  Meet the Team
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-secondary/50 border border-border">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Alex Chen, Founder of HeadPhones"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-accent/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
