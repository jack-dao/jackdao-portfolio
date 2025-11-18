import { FaGithub, FaLinkedin, FaEnvelope, FaPen } from "react-icons/fa"

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent text-[#ccd6f6] h-[64px] shadow-none border-0">
      <div className="mx-auto max-w-6xl px-6 h-full grid grid-cols-3 items-center">
        {/* left */}
        <div className="font-display text-lg font-semibold justify-self-start">
          Jack Dao
        </div>

        {/* middle */}
        <div className="hidden sm:flex justify-self-center items-center gap-8 text-sm">
          <a href="#home" className="hover:text-[#64ffda]">Home</a>
          <a href="#about" className="hover:text-[#64ffda]">About</a>
          <a href="#experience" className="hover:text-[#64ffda]">Experience</a>
          <a href="#projects" className="hover:text-[#64ffda]">Projects</a>
        </div>

        {/* right */}
        <div className="justify-self-end flex items-center gap-4 text-lg">
          <a
            href="mailto:jack.dao03@gmail.com"
            className="hover:text-[#64ffda]"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/JackDao-cloud"
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
          <a
            href="#contact"
            className="hover:text-[#64ffda]"
            aria-label="Writing"
          >
            <FaPen />
          </a>
        </div>
      </div>
    </nav>
  )
}
