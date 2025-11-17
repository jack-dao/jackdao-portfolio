// src/App.jsx
import NavBar from "./components/NavBar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Experience from "./sections/Experience"
import Projects from "./sections/Projects"

export default function App() {
  return (
    <>
      <NavBar />
      <main className="pt-[64px] bg-[#0a192f] text-[#ccd6f6] min-h-screen overflow-x-hidden">
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
    </>
  )
}
