// src/sections/Experience.jsx
import { useState } from "react"

const experiences = [
  {
    id: "wilmers",
    company: "Wilmers Lab",
    role: "Software Engineer Intern",
    location: "Santa Cruz, CA",
    period: "Sep 2025 – Present",
    bullets: [
      "Built a Python desktop GUI for schedule setup, run control, and CSV log export for a wildlife predator deterrence speaker.",
      "Implemented UART and Bluetooth command response in C with ACK and timeout retries, cutting command failures by about 30 percent.",
      "Delivered CSV logs and faster workflows so 4 plus researchers can run 10 to 15 experiments each week without manual log wrangling.",
      "Added schedule import and export with validation and overlap checks to prevent invalid runs and operator errors."
    ]
  },
  {
    id: "knobull",
    company: "Knobull",
    role: "Software Engineer Intern",
    location: "Remote",
    period: "Jun 2025 – Sep 2025",
    bullets: [
      "Built a real time mentor chat app with React, Node and Express, Socket IO, and PostgreSQL serving over 1 000 students.",
      "Modernized the React UI with responsive layouts and accessibility fixes to improve cross device usability.",
      "Scaled an Elasticsearch academic search engine to more than 5 million sources with ad and SEO filtering for 5 000 plus searches.",
      "Integrated Stripe checkout and Firebase Authentication for subscriptions and cross device single sign on."
    ]
  },
  {
    id: "tech4good",
    company: "Tech4Good Lab",
    role: "Full Stack Web Developer",
    location: "Santa Cruz, CA",
    period: "Mar 2025 – Sep 2025",
    bullets: [
      "Built a student onboarding app in Angular with TypeScript and NgRx that reduced onboarding time about 40 percent for 30 plus users.",
      "Developed a task manager app on Firebase with Angular and NgRx to organize tasks and deadlines for student teams.",
      "Implemented NgRx Store and Effects with optimistic updates, caching, and error handling to improve UI stability.",
      "Set up Firebase Authorization and Firestore security rules for role based access and per user data isolation."
    ]
  }
]

export default function Experience() {
  const [activeId, setActiveId] = useState(experiences[0].id)
  const active = experiences.find(exp => exp.id === activeId)

  return (
    <section
      id="experience"
      className="pt-16 pb-20 px-6 sm:px-8 lg:px-12"   // was py-24
    >
      <div className="w-full max-w-[1400px] mx-auto">
        {/* title */}
        <div className="flex items-center gap-4 mb-10">  {/* was mb-12 */}
          <h2 className="font-display text-[2.4rem] sm:text-[2.8rem] font-bold tracking-tight text-[#c9d6ff]">
            Experiences
          </h2>
          <div className="h-px flex-1 bg-slate-700" />
        </div>

        <div className="grid gap-10 lg:gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.8fr)] items-start">
          {/* company list */}
          <div className="relative">
            <div className="absolute left-0 top-0 h-full w-px bg-slate-800" />
            <div className="space-y-1">
              {experiences.map(exp => {
                const isActive = exp.id === activeId
                return (
                  <button
                    key={exp.id}
                    onClick={() => setActiveId(exp.id)}
                    className={[
                      "relative flex w-full items-center pl-6 pr-4 py-3",
                      "text-xs sm:text-sm tracking-[0.12em] uppercase",
                      "transition-colors duration-200 cursor-pointer",
                      "outline-none focus-visible:outline-none",
                      isActive
                        ? "text-[#c9d6ff]"
                        : "text-slate-400 hover:text-slate-100"
                    ].join(" ")}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-0 h-full w-px bg-[#64ffda]" />
                    )}
                    <span>{exp.company}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* details */}
          <div key={activeId} className="space-y-4 animate-experienceEnter">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#c9d6ff]">
                {active.role}{" "}
                <span className="text-[#64ffda]">@ {active.company}</span>
              </h3>

              <p className="mt-2 font-display text-[18px] md:text-[20px] leading-[1.9rem] text-[#8892b0] flex items-center">
                <span>{active.period}</span>
                <span className="mx-2 inline-block w-1.5 h-1.5 rounded-full bg-[#8892b0]" />
                <span>{active.location}</span>
              </p>
            </div>

            <ul className="mt-4 space-y-3 font-display text-[20px] md:text-[22px] leading-[2.1rem] text-[#8892b0] max-w-3xl">
              {active.bullets.map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="mt-[4px] text-[#64ffda]">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
