// src/components/StarsBackground.jsx
import { useMemo } from "react"

export default function StarsBackground() {
  // generate some stars once
  const stars = useMemo(
    () =>
      Array.from({ length: 80 }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() < 0.7 ? 1.2 : 2,
        opacity: 0.3 + Math.random() * 0.4
      })),
    []
  )

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 bg-[#020c1b]">
      {/* very faint nebula glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(100,255,218,0.09),_transparent_55%),radial-gradient(circle_at_20%_80%,_rgba(56,189,248,0.06),_transparent_55%)]" />

      {/* star dots */}
      {stars.map(star => (
        <span
          key={star.id}
          className="absolute rounded-full bg-slate-100"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            boxShadow: "0 0 6px rgba(248, 250, 252, 0.6)"
          }}
        />
      ))}
    </div>
  )
}
