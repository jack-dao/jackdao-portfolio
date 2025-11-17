// src/components/StarsBackground.jsx
import { useEffect, useMemo, useState } from "react"

function makeStars(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() < 0.75 ? 1.1 : 1.8,
    opacity: 0.18 + Math.random() * 0.35
  }))
}

function StarLayer({ stars, translateY, blur }) {
  return (
    <div
      className="absolute inset-0"
      style={{ transform: `translateY(${translateY}px)` }}
    >
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
            filter: `blur(${blur})`,
            boxShadow: "0 0 6px rgba(248, 250, 252, 0.7)"
          }}
        />
      ))}
    </div>
  )
}

function ShootingStar() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="shooting-star" />
    </div>
  )
}

export default function StarsBackground() {
  const layer1 = useMemo(() => makeStars(70), [])
  const layer2 = useMemo(() => makeStars(40), [])
  const layer3 = useMemo(() => makeStars(25), [])

  const [scrollY, setScrollY] = useState(0)
  const [shootKey, setShootKey] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || 0)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // comet timing 8 to 15 seconds
  useEffect(() => {
    const delay = 8000 + Math.random() * 7000
    const id = setTimeout(() => {
      setShootKey(k => k + 1)
    }, delay)
    return () => clearTimeout(id)
  }, [shootKey])

  const translate1 = scrollY * 0.01
  const translate2 = scrollY * 0.02
  const translate3 = scrollY * 0.03

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 bg-[#020c1b]">
      {/* nebula glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(100,255,218,0.10),_transparent_60%),radial-gradient(circle_at_18%_80%,_rgba(56,189,248,0.06),_transparent_55%),radial-gradient(circle_at_82%_75%,_rgba(147,197,253,0.07),_transparent_55%)]" />

      {/* parallax stars */}
      <StarLayer stars={layer1} translateY={translate1} blur="2px" />
      <StarLayer stars={layer2} translateY={translate2} blur="3px" />
      <StarLayer stars={layer3} translateY={translate3} blur="4px" />

      {/* comet */}
      <ShootingStar key={shootKey} />
    </div>
  )
}
