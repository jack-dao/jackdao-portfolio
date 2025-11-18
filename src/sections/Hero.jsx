// src/sections/Hero.jsx
import { useEffect, useState } from "react"
import FractalTree from "../components/FractalTree"
import { FaEnvelope } from "react-icons/fa"
import Astronaut from "../assets/astronaut.png"

export default function Hero() {
  const before = "Hello, I'm "
  const name = "Jack Dao"
  const after = "!"
  const full = before + name + after

  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count >= full.length) return
    const id = setTimeout(() => setCount(c => c + 1), 60)
    return () => clearTimeout(id)
  }, [count, full.length])

  const typed = full.slice(0, count)
  const tBefore = typed.slice(0, Math.min(before.length, typed.length))
  const tName = typed.slice(
    Math.max(0, before.length),
    Math.min(before.length + name.length, typed.length)
  )
  const tAfter = typed.slice(Math.max(before.length + name.length, 0))

  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center">
      <div className="relative w-full max-w-3xl mx-auto text-center px-6">
        <div className="mx-auto mb-6">
          <FractalTree />
        </div>

        <h1 className="font-display text-[3.9rem] md:text-[4.7rem] font-bold leading-tight tracking-tight text-[#c9d6ff]">
          <span>{tBefore}</span>
          <span className="text-[#64ffda]">{tName}</span>
          <span>{tAfter}</span>
          <span className="caret ml-2" />
        </h1>

        {count >= full.length && (
          <img
            src={Astronaut}
            alt="Astronaut illustration"
            className="
              hidden md:block
              absolute
              top-[46%] -right-40
              w-40 h-40 md:w-48 md:h-48
              astronaut-fx astronaut-glow
            "
          />
        )}

        <p className="mt-1 max-w-2xl mx-auto text-[1.55rem] md:text-[1.7rem] text-[#8892b0]">
          I like solving problems and creating cool stuff.
        </p>

        <p className="mt-6 max-w-2xl mx-auto text-[15px] md:text-[16px] leading-7 text-[#8892b0]">
          I’m a 3rd year Computer Science student at UC Santa Cruz who likes building
          full stack apps, backend systems, and little tools that make life easier for
          students and teams. Lately I’ve been focusing on writing better software and
          building things with real users in mind.
        </p>

        <a
          href="mailto:jack.dao03@gmail.com"
          className="
            font-display inline-flex items-center gap-5 mt-14 px-12 py-4
            rounded-xl border-2 border-[#64ffda]
            text-[#64ffda]
            hover:bg-[#64ffda] hover:text-[#0a192f]
            transition-colors duration-200
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#64ffda]/70
          "
          aria-label="Email Jack"
        >
          <FaEnvelope className="h-7 w-7" aria-hidden="true" />
          <span className="text-[20px] font-semibold leading-none">
            Let's connect!
          </span>
        </a>
      </div>
    </section>
  )
}
