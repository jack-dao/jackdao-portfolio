// src/components/Footer.jsx
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 sm:px-8 lg:px-12">
      <div className="w-full max-w-[1400px] mx-auto">
        <p className="text-center text-sm text-slate-500">
          Built and designed by{" "}
          <span className="font-semibold text-slate-300">Jack Dao</span>.
        </p>
        <p className="mt-1 text-center text-xs text-slate-600">
          All rights reserved © {year}
        </p>
      </div>
    </footer>
  )
}
