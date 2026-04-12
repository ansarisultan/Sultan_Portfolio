// Pure CSS floating shapes — zero Three.js dependency
import React, { useMemo } from 'react'

const SHAPES = [
  { type: 'sphere',    color: '#6366f1', x: 12,  y: 20,  size: 60,  dur: 8,  delay: 0   },
  { type: 'torus',     color: '#8b5cf6', x: 78,  y: 60,  size: 45,  dur: 11, delay: 1.5 },
  { type: 'diamond',   color: '#06b6d4', x: 25,  y: 70,  size: 35,  dur: 9,  delay: 3   },
  { type: 'sphere',    color: '#ec4899', x: 65,  y: 15,  size: 50,  dur: 13, delay: 0.8 },
  { type: 'diamond',   color: '#f59e0b', x: 88,  y: 75,  size: 30,  dur: 10, delay: 2   },
  { type: 'torus',     color: '#6366f1', x: 45,  y: 85,  size: 40,  dur: 7,  delay: 4   },
  { type: 'sphere',    color: '#8b5cf6', x: 5,   y: 50,  size: 25,  dur: 14, delay: 1   },
]

function Shape({ type, color, x, y, size, dur, delay }) {
  const base = {
    position: 'absolute',
    left: `${x}%`,
    top: `${y}%`,
    width: size,
    height: size,
    opacity: 0.12,
    animation: `floatShape ${dur}s ease-in-out ${delay}s infinite`,
    pointerEvents: 'none',
  }

  if (type === 'sphere') {
    return (
      <div style={{
        ...base,
        borderRadius: '50%',
        background: `radial-gradient(circle at 35% 35%, ${color}cc, ${color}22)`,
        boxShadow: `0 0 ${size * 0.6}px ${color}44`,
      }} />
    )
  }
  if (type === 'torus') {
    return (
      <div style={{
        ...base,
        borderRadius: '50%',
        border: `${Math.max(4, size * 0.12)}px solid ${color}88`,
        boxShadow: `0 0 ${size * 0.4}px ${color}33, inset 0 0 ${size * 0.4}px ${color}11`,
        background: 'transparent',
      }} />
    )
  }
  // diamond
  return (
    <div style={{
      ...base,
      transform: `rotate(45deg)`,
      borderRadius: size * 0.15,
      background: `linear-gradient(135deg, ${color}88, ${color}22)`,
      boxShadow: `0 0 ${size * 0.5}px ${color}33`,
    }} />
  )
}

const FloatingShapes = () => (
  <>
    <style>{`
      @keyframes floatShape {
        0%,100% { transform: translateY(0px) rotate(0deg); }
        33%      { transform: translateY(-22px) rotate(6deg); }
        66%      { transform: translateY(14px) rotate(-4deg); }
      }
    `}</style>
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {SHAPES.map((s, i) => <Shape key={i} {...s} />)}
    </div>
  </>
)

export default FloatingShapes