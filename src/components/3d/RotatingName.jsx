// Pure CSS rotating name — zero Three.js / opentype dependency
import React from 'react'

const RotatingName = () => (
  <div style={{
    display: 'inline-block',
    animation: 'rotateName 6s ease-in-out infinite',
    transformStyle: 'preserve-3d',
  }}>
    <style>{`
      @keyframes rotateName {
        0%,100% { transform: rotateY(0deg) rotateX(0deg) translateY(0px); }
        25%      { transform: rotateY(12deg) rotateX(6deg) translateY(-6px); }
        50%      { transform: rotateY(0deg) rotateX(-4deg) translateY(6px); }
        75%      { transform: rotateY(-12deg) rotateX(6deg) translateY(-4px); }
      }
    `}</style>
    <span style={{ fontSize: 'inherit', fontWeight: 'inherit', color: 'inherit' }}>
      Sultan Ansari
    </span>
  </div>
)

export default RotatingName
