"use client"
import { Canvas } from "@react-three/fiber"
import Sphere from "./animatedSphere"
import { OrbitControls } from "@react-three/drei"
import { Suspense } from "react"
export default function ThreeShpere() {
  return (
    <div className="sphere">
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Sphere />
        </Suspense>
      </Canvas>
    </div>
  )
}
