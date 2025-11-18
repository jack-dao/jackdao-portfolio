// src/App.jsx
import NavBar from "./components/NavBar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Experience from "./sections/Experience"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import StarsBackground from "./components/StarsBackground"

export default function App() {
  return (
    <div className="relative min-h-screen text-[#ccd6f6]">
      <StarsBackground />
      <NavBar />

      <main className="pt-[64px] min-h-screen overflow-x-hidden">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />  
      </main>
    </div>
  )
}
