"use client"
import { Sphere, MeshDistortMaterial } from "@react-three/drei"

export default function Animated() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#fff"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0}
      />
    </Sphere>
  )
}
