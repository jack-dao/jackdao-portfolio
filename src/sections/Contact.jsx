// src/sections/Contact.jsx
import { FaEnvelope, FaGithub, FaLinkedin, FaPen } from "react-icons/fa"
import Astronaut from "../assets/astronaut.png"

export default function Contact() {
  return (
    <section
      id="contact"
      className="pt-24 pb-32 px-6 sm:px-8 lg:px-12"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        {/* title row */}
        <div className="flex items-center gap-4 mb-10">
          <h2 className="font-display text-[2.4rem] sm:text-[2.8rem] font-bold tracking-tight text-[#c9d6ff]">
            Contact
          </h2>
          <div className="h-px flex-1 bg-slate-700" />
        </div>

        {/* main content */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center">
          {/* left: text plus actions */}
          <div className="space-y-8 max-w-2xl text-[#8892b0]">
            <div className="space-y-4">
              <p className="text-[#64ffda] font-medium uppercase tracking-[0.18em] text-xs sm:text-sm">
                Lets build something together
              </p>

              <p className="font-display text-2xl sm:text-3xl leading-snug">
                I am always interested in learning and discussing new opportunities.
                Feel free to reach out if you would like to work together!
              </p>
            </div>

            <div className="flex flex-col items-start gap-6">
              <a
                href="mailto:jack.dao03@gmail.com"
                className="
                  inline-flex items-center gap-2
                  rounded-xl px-5 py-3
                  text-sm sm:text-base font-semibold
                  bg-[#64ffda]/10 text-[#64ffda]
                  border border-[#64ffda]/40
                  shadow-[0_0_25px_rgba(100,255,218,0.2)]
                  hover:bg-[#64ffda]/20 hover:border-[#64ffda]
                  transition
                "
              >
                <FaEnvelope className="text-xl" />
                <span>Email me</span>
              </a>

              <div className="flex items-center gap-6 text-3xl text-slate-300">
                <a
                  href="https://github.com/jack-dao"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#64ffda] transition"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/jack-dao/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#64ffda] transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="/Jack%20Dao%20-%20Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#64ffda] transition"
                  aria-label="Resume"
                >
                  <FaPen />
                </a>
              </div>
            </div>
          </div>

          {/* right: info cloud to the left, astronaut to the right */}
          <div className="hidden md:flex justify-end lg:justify-end">
            <div className="contact-orbit flex items-center gap-6 lg:gap-8 -translate-y-4">
              {/* info card */}
              <div
                className="
                  w-80 sm:w-[22rem]
                  rounded-2xl border border-[#64ffda]/60
                  bg-[#020c1b]/85 backdrop-blur
                  px-7 py-6 sm:px-8 sm:py-7
                  shadow-[0_0_25px_rgba(100,255,218,0.25)]
                  astronaut-glow
                "
              >
                <p className="text-[0.75rem] sm:text-sm font-semibold tracking-[0.18em] uppercase text-[#64ffda] mb-4">
                  What I enjoy working on
                </p>
                <div className="flex flex-wrap gap-3 text-[0.8rem] sm:text-sm text-slate-200">
                  <span className="rounded-full border border-slate-600/80 bg-slate-900/60 px-3.5 py-1.5">
                    Clean, responsive UIs
                  </span>
                  <span className="rounded-full border border-slate-600/80 bg-slate-900/60 px-3.5 py-1.5">
                    Full stack web apps
                  </span>
                  <span className="rounded-full border border-slate-600/80 bg-slate-900/60 px-3.5 py-1.5">
                    Tools that help students
                  </span>
                  <span className="rounded-full border border-slate-600/80 bg-slate-900/60 px-3.5 py-1.5">
                    Data driven features
                  </span>
                  <span className="rounded-full border border-slate-600/80 bg-slate-900/60 px-3.5 py-1.5">
                    Polished UX details
                  </span>
                </div>
              </div>

              <img
                src={Astronaut}
                alt=""
                aria-hidden="true"
                className="
                  w-48 sm:w-56 lg:w-64
                  opacity-80
                  select-none
                  astronaut-float astronaut-glow
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
