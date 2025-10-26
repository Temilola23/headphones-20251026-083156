"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, PerspectiveCamera } from "@react-three/drei"
import { Headphones3D } from "@/components/headphones-3d"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative w-full h-screen bg-background">
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <Suspense fallback={null}>
            <Headphones3D />
            <Environment preset="studio" />
          </Suspense>
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            enableRotate={true}
            minDistance={3}
            maxDistance={8}
            autoRotate
            autoRotateSpeed={0.5}
            rotateSpeed={0.8}
          />
        </Canvas>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 h-full flex flex-col justify-between py-24 pointer-events-none">
        <div className="flex-1 flex flex-col justify-center items-center text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-mono">
              Premium Audio Collection
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
              Sound Without
              <br />
              <span className="text-accent">Limitation</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Experience unparalleled audio clarity with our custom-engineered headphones. Designed for those who demand
              perfection.
            </p>
            <div className="pt-4 pointer-events-auto">
              <Link href="/shop">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 pb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Drag to Rotate</p>
          <ChevronDown className="h-6 w-6 text-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  )
}
