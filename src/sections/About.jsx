// src/sections/About.jsx
import Portrait from "../assets/Portrait.jpg"

export default function About() {
  return (
    <section
      id="about"
      className="pt-20 pb-16 px-6 sm:px-8 lg:px-12"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        {/* title */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-display text-[2.4rem] sm:text-[2.8rem] font-bold tracking-tight text-[#c9d6ff]">
            About Me
          </h2>
          <div className="h-px flex-1 bg-slate-700" />
        </div>

        {/* main content grid */}
        <div className="grid gap-8 lg:gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] items-start">
          {/* text column */}
          <div className="max-w-2xl text-left">
            <p className="font-display text-[20px] md:text-[22px] leading-[2.1rem] text-[#8892b0]">
              I am a third year{" "}
              <span className="font-semibold text-[#a8b2d1]">Computer Science</span> student at{" "}
              <a
                href="https://www.ucsc.edu/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#64ffda] hover:underline"
              >
                UC Santa Cruz
              </a>{" "}
              and a{" "}
              <span className="font-semibold text-[#a8b2d1]">Software Engineer Intern</span> at{" "}
              <a
                href="https://wildlife.ucsc.edu/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#64ffda] hover:underline"
              >
                Wilmers Lab
              </a>
              . I focus on building full stack applications, backend systems, and small tools that
              actually get used.
            </p>

            <p className="font-display mt-6 text-[20px] md:text-[22px] leading-[2.1rem] text-[#8892b0]">
              Outside of classes I like exploring new technologies, reading about how real world
              systems are built, and learning from engineers who care about craft and clear
              communication.
            </p>

            <p className="font-display mt-6 text-[20px] md:text-[22px] leading-[2.1rem] text-[#8892b0]">
              Recently I have been spending most of my time with{" "}
              <span className="font-semibold text-[#a8b2d1]">TypeScript</span>,{" "}
              <span className="font-semibold text-[#a8b2d1]">React</span>,{" "}
              <span className="font-semibold text-[#a8b2d1]">Node and Express</span>, and{" "}
              <span className="font-semibold text-[#a8b2d1]">PostgreSQL</span>. You can see the rest
              of my stack in the Skills section below.
            </p>
          </div>

          {/* photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-88 md:w-80 md:h-[26rem] rounded-xl overflow-hidden shadow-xl shadow-black/40">
              <img
                src={Portrait}
                alt="Jack Dao"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
