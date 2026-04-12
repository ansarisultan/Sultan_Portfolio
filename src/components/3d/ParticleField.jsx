// Pure Canvas particle field — zero Three.js / maath dependency (~1 KB vs 4.8 MiB)
import React, { useEffect, useRef } from 'react'

const PARTICLE_COUNT = 1200

const ParticleField = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let W = canvas.offsetWidth
    let H = canvas.offsetHeight
    canvas.width = W * Math.min(window.devicePixelRatio, 1.5)
    canvas.height = H * Math.min(window.devicePixelRatio, 1.5)
    ctx.scale(Math.min(window.devicePixelRatio, 1.5), Math.min(window.devicePixelRatio, 1.5))

    // Distribute particles randomly in a sphere-like distribution
    const particles = Array.from({ length: PARTICLE_COUNT }, () => {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = Math.cbrt(Math.random()) // cube-root for uniform sphere
      return {
        x: W / 2 + r * (W * 0.45) * Math.sin(phi) * Math.cos(theta),
        y: H / 2 + r * (H * 0.45) * Math.sin(phi) * Math.sin(theta),
        z: r, // used for depth sizing
        baseX: 0,
        baseY: 0,
        baseTheta: theta,
        basePhi: phi,
        baseR: r,
      }
    })

    let angle = 0
    let raf = 0

    function draw() {
      ctx.clearRect(0, 0, W, H)

      angle += 0.0004

      particles.forEach(p => {
        // Slowly rotate the sphere
        const theta = p.baseTheta + angle
        p.x = W / 2 + p.baseR * Math.min(W, H) * 0.46 * Math.sin(p.basePhi) * Math.cos(theta)
        p.y = H / 2 + p.baseR * Math.min(W, H) * 0.46 * Math.sin(p.basePhi) * Math.sin(theta)

        const size = 0.7 + p.baseR * 1.1  // farther = slightly bigger for star effect
        const alpha = 0.25 + p.baseR * 0.45

        ctx.beginPath()
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(99,102,241,${alpha})`
        ctx.fill()
      })

      raf = requestAnimationFrame(draw)
    }

    draw()

    const onResize = () => {
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width = W * Math.min(window.devicePixelRatio, 1.5)
      canvas.height = H * Math.min(window.devicePixelRatio, 1.5)
      ctx.scale(Math.min(window.devicePixelRatio, 1.5), Math.min(window.devicePixelRatio, 1.5))
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    />
  )
}

export default ParticleField
