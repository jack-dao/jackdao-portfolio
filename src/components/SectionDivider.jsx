// src/components/SectionDivider.jsx
export default function SectionDivider() {
  return (
    <div className="flex justify-center py-10">
      <div className="flex items-center gap-2 text-[#64ffda]">
        <Dot />
        <Line />
        <Dot />
        <Line long />
        <Dot />
        <Line />
        <Dot />
      </div>
    </div>
  )
}

function Dot() {
  return (
    <span className="w-1.5 h-1.5 rounded-full bg-[#64ffda] shadow-[0_0_12px_rgba(100,255,218,0.7)]" />
  )
}

function Line({ long }) {
  return (
    <span
      className={`h-px bg-[#1d3353] ${
        long ? "w-16" : "w-10"
      }`}
    />
  )
}
