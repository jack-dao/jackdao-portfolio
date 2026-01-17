// src/sections/Skills.jsx
import { useState } from "react"
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiC,
  SiCplusplus,
  SiGit,
  SiGithub,
  SiSupabase,
  SiSocketdotio,
  SiGithubactions,
  SiLinux,
  SiVercel,
  SiVite,
  SiVitest,
  SiDocker,
  SiPrisma,
  SiTailwindcss,
  SiNumpy,
  SiScikitlearn,
  SiPandas
} from "react-icons/si"

import { 
  FaExchangeAlt, 
  FaProjectDiagram, 
  FaNetworkWired, 
  FaBrain 
} from "react-icons/fa"

const categories = [
  { id: "languages", label: "Programming Languages" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "datascience", label: "Data Science & ML" },
  { id: "tools", label: "Tools and Platforms" },
  { id: "concepts", label: "Architecture & Concepts" }
]

const skillsByCategory = {
  languages: [
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Python", icon: SiPython },
    { name: "C", icon: SiC },
    { name: "C++", icon: SiCplusplus }
  ],
  frontend: [
    { name: "React", icon: SiReact },
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },
    { name: "Tailwind CSS", icon: SiTailwindcss }
  ],
  backend: [
    { name: "Node", icon: SiNodedotjs },
    { name: "Express", icon: SiNodedotjs },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Supabase", icon: SiSupabase },
    { name: "Socket.io", icon: SiSocketdotio },
    { name: "Prisma", icon: SiPrisma }
  ],
  datascience: [
    { name: "NumPy", icon: SiNumpy },
    { name: "Pandas", icon: SiPandas },
    { name: "Scikit-learn", icon: SiScikitlearn }
  ],
  tools: [
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "GitHub Actions", icon: SiGithubactions },
    { name: "Docker", icon: SiDocker },
    { name: "Linux", icon: SiLinux },
    { name: "Vercel", icon: SiVercel },
    { name: "Vite", icon: SiVite },
    { name: "Vitest", icon: SiVitest }
  ],
  concepts: [
    { name: "REST API Design", icon: FaExchangeAlt },
    { name: "Database Schema Design", icon: FaProjectDiagram },
    { name: "Client-Server Architecture", icon: FaNetworkWired },
    { name: "Retrieval-Augmented Generation (RAG)", icon: FaBrain }
  ]
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("languages")
  const activeSkills = skillsByCategory[activeCategory]

  return (
    <section
      id="skills"
      className="pt-28 pb-32 px-6 sm:px-8 lg:px-12"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        {/* title */}
        <div className="flex items-center gap-4 mb-16">
          <h2 className="font-display text-[2.6rem] sm:text-[3rem] font-bold tracking-tight text-[#c9d6ff]">
            Skills
          </h2>
          <div className="h-px flex-1 bg-slate-700" />
        </div>

        {/* grid: fixed sidebar width + flexible cards area */}
        <div className="grid gap-12 md:grid-cols-[230px_minmax(0,1fr)] items-start">
          {/* sidebar */}
          <div className="space-y-8">
            {categories.map(cat => {
              const isActive = cat.id === activeCategory
              return (
                <div
                  key={cat.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveCategory(cat.id)}
                  onKeyDown={e => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActiveCategory(cat.id)
                    }
                  }}
                  className="
                    flex items-center gap-4 cursor-pointer select-none group
                    outline-none focus:outline-none focus-visible:outline-none
                  "
                >
                  {/* vertical bar */}
                  <div
                    className={
                      "w-[4px] h-10 rounded-full transition-colors " +
                      (isActive
                        ? "bg-[#64ffda]"
                        : "bg-slate-600 group-hover:bg-slate-400")
                    }
                  />
                  {/* label */}
                  <span
                    className={
                      "font-display font-semibold tracking-tight transition-colors " +
                      (isActive
                        ? "text-[1.4rem] text-[#64ffda]"
                        : "text-[1.3rem] text-slate-300 group-hover:text-slate-100")
                    }
                  >
                    {cat.label}
                  </span>
                </div>
              )
            })}
          </div>

          {/* cards: Changed to Grid on mobile, Flex on Desktop */}
          <div className="grid grid-cols-2 gap-4 md:flex md:flex-wrap md:gap-8">
            {activeSkills.map(skill => {
              const Icon = skill.icon
              return (
                <div
                  key={skill.name}
                  className="
                    w-full md:w-[190px] h-[140px] md:h-[160px]
                    bg-slate-950/70 border border-slate-800/80 rounded-2xl
                    flex flex-col items-center justify-center gap-4
                    shadow-xl shadow-black/50 backdrop-blur-sm
                    hover:border-[#64ffda] hover:-translate-y-1
                    transition-transform transition-colors
                  "
                >
                  <Icon className="text-3xl md:text-4xl text-[#64ffda]" />
                  <span className="text-[15px] md:text-[18px] text-slate-200 font-display text-center px-2">
                    {skill.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}