import { useState } from "react"

const experiences = [
  {
    id: "knobull",
    company: "Knobull",
    role: "Software Engineer Intern",
    location: "Remote",
    period: "Jun 2025 – Sep 2025",
    bullets: [
      "Enabled the company’s first revenue stream by engineering a secure payment flow with Stripe Checkout and Supabase Auth, facilitating paid subscriptions and robust session management.",
      "Developed a real-time chat app using Socket.IO, React, and Node.js, handling concurrent mentor-student sessions with reliable message delivery.",
      "Automated cloud deployments on AWS using GitHub Actions for CI/CD, reducing production downtime andstreamlining the testing pipeline."
    ]
  },
]

export default function Experience() {
  const [activeId, setActiveId] = useState(experiences[0].id)
  const active = experiences.find(exp => exp.id === activeId)

  return (
    <section
      id="experience"
      className="pt-16 pb-20 px-6 sm:px-8 lg:px-12"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        {/* title */}
        <div className="flex items-center gap-4 mb-10">
          <h2 className="font-display text-[2.6rem] sm:text-[3rem] font-bold tracking-tight text-[#c9d6ff]">
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
                      "relative flex w-full items-center pl-6 pr-4 py-3.5",
                      "text-base sm:text-lg tracking-[0.16em] uppercase",
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
              <h3 className="font-display text-[1.9rem] sm:text-[2.3rem] md:text-[2.5rem] font-semibold text-[#c9d6ff]">
                {active.role}{" "}
                <span className="text-[#64ffda]">@ {active.company}</span>
              </h3>

              <p className="mt-2 font-display text-[19px] md:text-[21px] leading-[1.9rem] text-[#8892b0] flex items-center">
                <span>{active.period}</span>
                <span className="mx-2 inline-block w-1.5 h-1.5 rounded-full bg-[#8892b0]" />
                <span>{active.location}</span>
              </p>
            </div>

            <ul className="mt-4 space-y-3 font-display text-[22px] md:text-[24px] leading-[2.2rem] text-[#8892b0] max-w-3xl">
              {active.bullets.map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="mt-[6px] text-[#64ffda]">▸</span>
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