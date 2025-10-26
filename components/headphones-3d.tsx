"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type { Mesh } from "three"

export function Headphones3D() {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      // Subtle floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group ref={meshRef}>
      {/* Headband */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <torusGeometry args={[1, 0.08, 16, 100, Math.PI]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Left ear cup */}
      <group position={[-1, 0, 0]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.5, 0.5, 0.2, 32]} />
          <meshStandardMaterial color="#0a0a0a" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0, 0.11]}>
          <cylinderGeometry args={[0.4, 0.4, 0.02, 32]} />
          <meshStandardMaterial color="#2a2a2a" metalness={0.3} roughness={0.7} />
        </mesh>
      </group>

      {/* Right ear cup */}
      <group position={[1, 0, 0]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.5, 0.5, 0.2, 32]} />
          <meshStandardMaterial color="#0a0a0a" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0, 0.11]}>
          <cylinderGeometry args={[0.4, 0.4, 0.02, 32]} />
          <meshStandardMaterial color="#2a2a2a" metalness={0.3} roughness={0.7} />
        </mesh>
      </group>

      {/* Left connector */}
      <mesh position={[-1, 0.4, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 0.4, 16]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Right connector */}
      <mesh position={[1, 0.4, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 0.4, 16]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Accent details on headband */}
      <mesh position={[0, 0.5, 0.09]} rotation={[0, 0, 0]}>
        <torusGeometry args={[1, 0.02, 8, 100, Math.PI]} />
        <meshStandardMaterial
          color="#d4a574"
          metalness={0.9}
          roughness={0.1}
          emissive="#d4a574"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  )
}
