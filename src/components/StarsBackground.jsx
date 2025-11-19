// src/components/StarsBackground.jsx
import { useEffect, useMemo, useState } from "react"

function makeStars(count) {
  return Array.from({ length: count }, (_, i) => {
    const sizeRoll = Math.random()
    let size
    if (sizeRoll < 0.65) {
      size = 1.4
    } else if (sizeRoll < 0.9) {
      size = 2.1
    } else {
      size = 2.8
    }

    return {
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size,
      opacity: 0.4 + Math.random() * 0.3,
      glow: Math.random() < 0.28
    }
  })
}

function StarLayer({ stars, translateY, blur }) {
  return (
    <div
      className="absolute inset-0 will-change-transform"
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
            boxShadow: star.glow
              ? "0 0 10px rgba(248, 250, 252, 0.85)"
              : "none"
          }}
        />
      ))}
    </div>
  )
}

function ShootingStar({ top, angle, driftY, duration }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="shooting-star"
        style={{
          top: `${top}%`,
          "--angle": `${angle}deg`,
          "--driftY": `${driftY}vh`,
          animationDuration: `${duration}s`
        }}
      />
    </div>
  )
}

export default function StarsBackground() {
  const layer1 = useMemo(() => makeStars(110), [])
  const layer2 = useMemo(() => makeStars(80), [])
  const layer3 = useMemo(() => makeStars(50), [])

  const [scrollY, setScrollY] = useState(0)
  const [comets, setComets] = useState([])

  // throttled scroll listener
  useEffect(() => {
    let frameId = null

    const onScroll = () => {
      const y = window.scrollY || 0
      if (frameId == null) {
        frameId = window.requestAnimationFrame(() => {
          setScrollY(y)
          frameId = null
        })
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (frameId != null) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [])

  // comet spawning more often, one at a time
  useEffect(() => {
    let cancelled = false

    function spawnComet() {
      const id = Date.now() + Math.random()
      const comet = {
        id,
        top: 5 + Math.random() * 65,
        angle: 12 + Math.random() * 12,
        driftY: 18 + Math.random() * 26,
        duration: 1.5 + Math.random() * 1.4
      }

      setComets(prev => [...prev, comet])

      const lifetime = comet.duration * 1000 + 400
      setTimeout(() => {
        setComets(prev => prev.filter(c => c.id !== id))
      }, lifetime)
    }

    function scheduleNext() {
      // about every 2.1 to 5.3 seconds
      const delay = 2100 + Math.random() * 3200
      setTimeout(() => {
        if (cancelled) return
        spawnComet()
        scheduleNext()
      }, delay)
    }

    scheduleNext()
    return () => {
      cancelled = true
    }
  }, [])

  const translate1 = scrollY * 0.01
  const translate2 = scrollY * 0.02
  const translate3 = scrollY * 0.03

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 bg-[#020c1b]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(100,255,218,0.13),_transparent_60%),radial-gradient(circle_at_18%_80%,_rgba(56,189,248,0.09),_transparent_55%),radial-gradient(circle_at_82%_75%,_rgba(147,197,253,0.1),_transparent_55%)]" />

      <StarLayer stars={layer1} translateY={translate1} blur="0.9px" />
      <StarLayer stars={layer2} translateY={translate2} blur="1.6px" />
      <StarLayer stars={layer3} translateY={translate3} blur="2.3px" />

      {comets.map(comet => (
        <ShootingStar
          key={comet.id}
          top={comet.top}
          angle={comet.angle}
          driftY={comet.driftY}
          duration={comet.duration}
        />
      ))}
    </div>
  )
}
