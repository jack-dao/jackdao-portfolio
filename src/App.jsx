// src/App.jsx
import NavBar from "./components/NavBar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Experience from "./sections/Experience"
import Projects from "./sections/Projects"
import StarsBackground from "./components/StarsBackground"
import SectionDivider from "./components/SectionDivider"

export default function App() {
  return (
    <div className="relative min-h-screen text-[#ccd6f6]">
      {/* space background behind everything */}
      <StarsBackground />

      <NavBar />

      <main className="pt-[64px] min-h-screen overflow-x-hidden">
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Projects />
      </main>
    </div>
  )
}
