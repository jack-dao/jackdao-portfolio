// src/sections/Projects.jsx
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi"

// ⚡️ Import the image from your assets folder
import scheduleViewImg from "../assets/schedule-view.png"

const projects = [
  {
    title: "AI Slug Navigator",
    timeframe: "January 2026",
    blurb:
      "A comprehensive course planning platform for UCSC students integrating real-time search, interactive schedule building, and AI-powered academic advising.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Google Gemini API", "GitHub Actions"],
    bullets: [
      "Engineered a RAG-based scheduling assistant using the Google Gemini API, generating conflict-free course plans by contextually retrieving live catalog data.",
      "Built a high-concurrency Node.js scraper to ingest 1,500+ course records into PostgreSQL, enabling instant search and interactive schedule building.",
      "Automated a nightly ETL pipeline using GitHub Actions to sync professor ratings, ensuring data freshness without manual intervention."
    ],
    github: "https://github.com/jack-dao/ai-slug-navigator",
    demo: "https://aislugnavigator.com",
    image: scheduleViewImg
  },
  {
    title: "Future systems project",
    timeframe: "Coming soon",
    blurb:
      "A lower level or systems style project where performance and correctness matter.",
    tech: ["C or C++", "Concurrency", "Testing"],
    bullets: [
      "Explore data structures, memory, and concurrency primitives in practice.",
      "Emphasis on tests, benchmarks, and clear documentation.",
      "Details and repository links will be added when this is shipped."
    ],
    github: "",
    demo: "",
    image: null
  },
  {
    title: "Future embedded or tools project",
    timeframe: "Coming soon",
    blurb:
      "An embedded, scripting, or tooling project that supports research or day to day work.",
    tech: ["Python", "Automation", "Embedded"],
    bullets: [
      "Bridge between hardware, scripts, and user facing interfaces.",
      "Turn repetitive workflows into reliable, one click tools.",
      "Code and demo will appear here once this is production ready."
    ],
    github: "",
    demo: "",
    image: null
  }
]

export default function Projects() {
  return (
    <section id="projects" className="pt-16 pb-20 px-6 sm:px-8 lg:px-12">
      <div className="w-full max-w-[1400px] mx-auto">
        {/* title */}
        <div className="flex items-center gap-4 mb-10">
          <h2 className="font-display text-[2.6rem] sm:text-[3rem] font-bold tracking-tight text-[#c9d6ff]">
            Projects
          </h2>
          <div className="h-px flex-1 bg-slate-700" />
        </div>

        <div className="grid gap-6 md:gap-8 lg:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <article
              key={project.title}
              className="relative flex flex-col bg-[#09172a] border border-slate-800/80 rounded-3xl shadow-[0_18px_50px_rgba(0,0,0,0.6)] hover:border-[#64ffda] hover:shadow-[0_0_40px_rgba(100,255,218,0.25)] hover:-translate-y-1 transition-transform transition-shadow duration-300 overflow-hidden"
            >
              {/* image area */}
              <div className="relative w-full aspect-video overflow-hidden group bg-[#020c1b]">
                {project.image ? (
                  <>
                    {/* blurred backdrop */}
                    <img
                      src={project.image}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-35"
                    />
                    <div className="absolute inset-0 bg-[#020c1b]/40" />

                    {/* foreground image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="relative z-10 w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </>
                ) : (
                  <div className="w-full h-full bg-gradient-to-tr from-[#112240] via-[#0b2238] to-[#64ffda]/25 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3 text-[#a8b2d1]">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#020c1b]/80 text-[#64ffda]">
                        <FiFolder className="h-6 w-6" />
                      </div>
                      <p className="font-display text-sm tracking-[0.18em] uppercase text-[#64ffda]">
                        image placeholder
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* body */}
              <div className="flex-1 flex flex-col px-7 py-7 sm:px-8 sm:py-8">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-display text-[1.35rem] sm:text-[1.5rem] font-semibold text-[#e6f1ff] leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#8892b0] whitespace-nowrap mt-1">
                    {project.timeframe}
                  </p>
                </div>

                <p className="text-[0.97rem] text-[#a8b2d1] leading-relaxed mb-4">
                  {project.blurb}
                </p>

                <ul className="space-y-2 text-[0.97rem] text-[#a8b2d1]">
                  {project.bullets.map(line => (
                    <li key={line} className="flex gap-2">
                      <span className="mt-[3px] text-[#64ffda] text-xs">▸</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map(tag => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#64ffda]/40 bg-[#0b2238]/70 px-3 py-1 text-xs font-medium text-[#64ffda]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between text-xs text-[#64ffda]">
                  <div className="flex items-center gap-4 text-slate-400">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 hover:text-[#64ffda] transition-colors"
                      >
                        <FiGithub className="h-4 w-4" />
                        <span>Code</span>
                      </a>
                    ) : (
                      <span className="opacity-70">Code link coming soon</span>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 hover:text-[#64ffda] transition-colors"
                      >
                        <FiExternalLink className="h-4 w-4" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
