import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Line, Sphere } from '@react-three/drei'
import * as THREE from 'three'

function NeuralNodes({ count = 30 }) {
  const groupRef = useRef()
  
  const points = useMemo(() => {
    const pts = []
    for (let i = 0; i < count; i++) {
      pts.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8
        ),
        color: new THREE.Color().setHSL(0.6 + Math.random() * 0.3, 0.8, 0.5),
      })
    }
    return pts
  }, [count])

  const connections = useMemo(() => {
    const conns = []
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const dist = points[i].position.distanceTo(points[j].position)
        if (dist < 3) {
          conns.push([i, j])
        }
      }
    }
    return conns
  }, [points])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    groupRef.current.rotation.y = Math.sin(time * 0.05) * 0.1
    groupRef.current.rotation.x = Math.sin(time * 0.03) * 0.05
  })

  return (
    <group ref={groupRef}>
      {connections.map(([i, j], index) => (
        <Line
          key={index}
          points={[points[i].position, points[j].position]}
          color="#6366f1"
          opacity={0.15}
          transparent
          lineWidth={0.5}
        />
      ))}
      {points.map((point, index) => (
        <Sphere key={index} position={point.position} args={[0.05, 16, 16]}>
          <meshStandardMaterial
            color={point.color}
            emissive={point.color}
            emissiveIntensity={0.5}
            transparent
            opacity={0.8}
          />
        </Sphere>
      ))}
    </group>
  )
}

const NeuralNetwork = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <NeuralNodes count={25} />
      </Canvas>
    </div>
  )
}

export default NeuralNetwork