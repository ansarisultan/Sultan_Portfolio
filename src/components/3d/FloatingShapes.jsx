import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere, Torus, Octahedron } from '@react-three/drei'

function FloatingShape({ position, color, speed = 1, distort = 0.3 }) {
  const mesh = useRef()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    mesh.current.position.y = position[1] + Math.sin(time * speed) * 0.2
    mesh.current.rotation.x = Math.sin(time * 0.3) * 0.2
    mesh.current.rotation.y += 0.005
    mesh.current.rotation.z = Math.cos(time * 0.2) * 0.1
  })

  const shapes = [
    <Sphere args={[0.4, 64, 64]} />,
    <Torus args={[0.3, 0.1, 32, 64]} />,
    <Octahedron args={[0.35, 0]} />
  ]

  const ShapeComponent = shapes[Math.floor(Math.random() * shapes.length)]

  return (
    <mesh ref={mesh} position={position}>
      {ShapeComponent}
      <MeshDistortMaterial
        color={color}
        speed={2}
        distort={distort}
        radius={0.5}
        transparent
        opacity={0.15}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  )
}

const FloatingShapes = () => {
  const shapes = [
    { position: [-2, 1, -2], color: '#6366f1', speed: 1.2 },
    { position: [2.5, -0.5, -3], color: '#8b5cf6', speed: 0.8 },
    { position: [-1.5, -1, -1], color: '#06b6d4', speed: 1.5 },
    { position: [1.8, 1.2, -2.5], color: '#ec4899', speed: 1 },
    { position: [-2.2, -0.8, -3.5], color: '#f59e0b', speed: 0.9 },
  ]

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        {shapes.map((shape, index) => (
          <FloatingShape key={index} {...shape} />
        ))}
      </Canvas>
    </div>
  )
}

export default FloatingShapes