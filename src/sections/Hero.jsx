import { useEffect, useState } from "react"
import FractalTree from "../components/FractalTree"
import { FaEnvelope } from "react-icons/fa"

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
    <section className="min-h-[calc(100vh-64px)] flex items-start md:items-center justify-center">
      <div className="relative w-full max-w-5xl mx-auto text-center px-6 pt-8 md:pt-0">
        <div className="mx-auto mb-6 scale-125 md:scale-150">
          <FractalTree />
        </div>

        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-[#c9d6ff]">
          <span>{tBefore}</span>
          <span className="whitespace-nowrap">
            <span className="text-[#64ffda]">{tName}</span>
            <span>{tAfter}</span>
            <span className="caret ml-1" />
          </span>
        </h1>

        <p className="mt-3 max-w-3xl mx-auto text-2xl sm:text-3xl text-[#8892b0]">
          I solve problems and create cool stuff.
        </p>

        <p className="mt-7 max-w-3xl mx-auto text-lg sm:text-xl leading-8 text-[#8892b0]">
          I build full stack apps, backend systems, and little tools that make life easier
          for students and teams. I focus on writing better software and building things
          with real users in mind.
        </p>

        <a
          href="mailto:jack.dao03@gmail.com"
          className="
            font-display inline-flex items-center gap-6 mt-12 px-16 py-5
            rounded-2xl border-2 border-[#64ffda]
            text-[#64ffda] text-xl sm:text-2xl
            hover:bg-[#64ffda] hover:text-[#0a192f]
            transition-colors duration-200
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#64ffda]/70
          "
          aria-label="Email Jack"
        >
          <FaEnvelope className="h-8 w-8 sm:h-9 sm:w-9" aria-hidden="true" />
          <span className="font-semibold leading-none">
            Let's connect!
          </span>
        </a>
      </div>
    </section>
  )
}