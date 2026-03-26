import { NavLinks } from "@/constant/constant";

export default function HeroSection() {
  return (
    <header id="home" className="grid items-center gap-10 lg:grid-cols-2">
      <div className="space-y-5">
        <nav className="flex flex-wrap gap-2 rounded-xl border border-slate-800 bg-slate-900/60 p-2 backdrop-blur">
          {NavLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              className="rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-300 transition hover:bg-slate-800 hover:text-cyan-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Fullstack Developer
        </p>
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          Building modern web products with a 3D-style visual identity.
        </h1>
        <p className="max-w-xl text-base leading-7 text-slate-300 md:text-lg">
          Hi, I&apos;m Hoai Nam. I design and develop fast, scalable web applications
          with beautiful interfaces, thoughtful interactions, and reliable backend systems.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="#projects"
            className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-slate-700 bg-slate-900/70 px-5 py-3 text-sm font-semibold transition hover:border-cyan-300"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="relative h-72 md:h-96">
        <div className="absolute left-6 top-8 h-56 w-56 rounded-3xl border border-white/20 bg-white/10 shadow-2xl shadow-cyan-500/20 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:rotate-2" />
        <div className="absolute right-8 top-0 h-48 w-48 rounded-3xl border border-white/20 bg-white/10 shadow-2xl shadow-fuchsia-500/20 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:-rotate-2" />
        <div className="absolute bottom-2 left-16 right-10 rounded-3xl border border-slate-700 bg-slate-900/80 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl transition duration-500 hover:-translate-y-2">
          <p className="text-sm text-cyan-300">Now Building</p>
          <h2 className="mt-2 text-xl font-semibold">Premium 3D Portfolio UI</h2>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Layered depth, smooth motion, and production-ready contact integration.
          </p>
        </div>
      </div>
    </header>
  );
}
