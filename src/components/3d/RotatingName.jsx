// components/3d/RotatingName.jsx
import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text3D, Center } from '@react-three/drei'

function RotatingText() {
  const textRef = useRef()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    textRef.current.rotation.y = Math.sin(time * 0.3) * 0.2
    textRef.current.rotation.x = Math.sin(time * 0.2) * 0.1
    textRef.current.position.y = Math.sin(time * 0.5) * 0.1
  })

  return (
    <Text3D
      ref={textRef}
      font="/fonts/ClashDisplay_Regular.json"
      size={1.5}
      height={0.2}
      curveSegments={12}
      bevelEnabled
      bevelThickness={0.02}
      bevelSize={0.02}
      bevelOffset={0}
      bevelSegments={5}
    >
      Sultan Ansari
      <meshNormalMaterial />
    </Text3D>
  )
}

