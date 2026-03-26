"use client";

export default function ParticleBackground() {
  return (
    <>
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="pointer-events-none absolute top-24 right-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-2 w-2 rounded-full bg-white/70 shadow-[0_0_20px_6px_rgba(255,255,255,0.35)]" />
      <div className="pointer-events-none absolute right-1/3 top-1/4 h-2 w-2 rounded-full bg-cyan-200/80 shadow-[0_0_20px_6px_rgba(34,211,238,0.35)]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-2 w-2 rounded-full bg-fuchsia-200/80 shadow-[0_0_20px_6px_rgba(232,121,249,0.35)]" />
    </>
  );
}
