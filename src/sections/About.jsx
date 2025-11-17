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

            {/* tech list */}
            <div className="mt-5">
              <p className="font-display text-[20px] md:text-[22px] leading-[2.1rem] text-[#8892b0]">
                Here are some technologies I have been working with:
              </p>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-y-1 text-[20px] md:text-[22px] text-[#8892b0]">
                <ul className="space-y-1">
                  <li className="flex items-center gap-1.5 font-display">
                    <span className="text-[#64ffda]">▸</span>
                    <span>TypeScript</span>
                  </li>
                  <li className="flex items-center gap-1.5 font-display">
                    <span className="text-[#64ffda]">▸</span>
                    <span>React</span>
                  </li>
                  <li className="flex items-center gap-1.5 font-display">
                    <span className="text-[#64ffda]">▸</span>
                    <span>Node and Express</span>
                  </li>
                  <li className="flex items-center gap-1.5 font-display">
                    <span className="text-[#64ffda]">▸</span>
                    <span>PostgreSQL</span>
                  </li>
                </ul>

                <ul className="space-y-1">
                  <li className="flex items-center gap-1.5 font-display">
                    <span className="text-[#64ffda]">▸</span>
                    <span>JavaScript ES6+</span>
                  </li>
                  <li className="flex items-center gap-1.5 font-display">
                    <span className="text-[#64ffda]">▸</span>
                    <span>Python</span>
                  </li>
                  <li className="flex items-center gap-1.5 font-display">
                    <span className="text-[#64ffda]">▸</span>
                    <span>C and C++</span>
                  </li>
                  <li className="flex items-center gap-1.5 font-display">
                    <span className="text-[#64ffda]">▸</span>
                    <span>Git and GitHub</span>
                  </li>
                </ul>
              </div>
            </div>
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
