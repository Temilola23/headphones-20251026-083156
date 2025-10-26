import { Headphones, Zap, Shield, Waves } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Headphones,
      title: "Premium Audio Quality",
      description: "Experience crystal-clear sound with our advanced acoustic engineering and high-fidelity drivers.",
    },
    {
      icon: Zap,
      title: "40-Hour Battery Life",
      description: "Enjoy uninterrupted listening with our long-lasting battery that keeps the music playing all day.",
    },
    {
      icon: Shield,
      title: "Active Noise Cancellation",
      description: "Immerse yourself in pure sound with industry-leading ANC technology that blocks out distractions.",
    },
    {
      icon: Waves,
      title: "Adaptive Sound",
      description: "Smart audio that automatically adjusts to your environment for the perfect listening experience.",
    },
  ]

  return (
    <section id="features" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-accent font-mono">Features</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance text-foreground">
              Engineered for Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Every detail is crafted to deliver an exceptional audio experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-lg bg-background border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
