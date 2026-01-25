import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function NavBar() {
  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50 h-[64px]
        border-b border-slate-800
        text-[#ccd6f6]
        bg-[#020c1b]
        overflow-hidden
      "
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(100,255,218,0.14),_transparent_60%),radial-gradient(circle_at_18%_80%,_rgba(56,189,248,0.09),_transparent_55%),radial-gradient(circle_at_82%_75%,_rgba(147,197,253,0.09),_transparent_55%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 h-full grid grid-cols-2 sm:grid-cols-3 items-center">
        {/* left */}
        <div className="font-display text-lg md:text-xl font-semibold justify-self-start">
          Jack Dao
        </div>

        {/* middle - hidden on mobile */}
        <div className="hidden sm:flex justify-self-center items-center gap-8 text-base">
          <a href="#home" className="hover:text-[#64ffda]">Home</a>
          <a href="#about" className="hover:text-[#64ffda]">About</a>
          <a href="#experience" className="hover:text-[#64ffda]">Experience</a>
          <a href="#projects" className="hover:text-[#64ffda]">Projects</a>
          <a href="#skills" className="hover:text-[#64ffda]">Skills</a>
          <a href="#contact" className="hover:text-[#64ffda]">Contact</a>
        </div>

        {/* right - in mobile column 2 (right side), in desktop column 3 (right side) */}
        <div className="justify-self-end flex items-center gap-4 text-xl">
          <a
            href="mailto:jack.dao03@gmail.com"
            className="hover:text-[#64ffda]"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/jack-dao"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#64ffda]"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jack-dao/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#64ffda]"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  )
}