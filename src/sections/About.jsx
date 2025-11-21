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
          <h2 className="font-display text-[2.6rem] sm:text-[3rem] font-bold tracking-tight text-[#c9d6ff]">
            About Me
          </h2>
          <div className="h-px flex-1 bg-slate-700" />
        </div>

        {/* main content grid */}
        <div className="grid gap-8 lg:gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] items-start">
          {/* text column */}
          <div className="max-w-2xl text-left">
            <p className="font-display text-[24px] md:text-[26px] leading-[2.4rem] text-[#8892b0]">
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
              . I enjoy building things that are simple, useful and reliable, from small tools to full stack applications.
            </p>

            <p className="font-display mt-6 text-[24px] md:text-[26px] leading-[2.4rem] text-[#8892b0]">
              I am always trying to learn how real world systems are built and how good engineers think about design, communication and long term maintainability.
            </p>

            <p className="font-display mt-6 text-[24px] md:text-[26px] leading-[2.4rem] text-[#8892b0]">
              I am especially interested in projects where I can own a piece of production code, understand how it fits into the larger system and make it a little clearer and easier for the next person who touches it.
            </p>
          </div>

          {/* photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-88 md:w-80 md:h-[26rem] rounded-xl overflow-hidden shadow-xl shadow-black/40">
              <img
                src={Portrait}
                alt="Jack Dao"
                draggable={false}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
