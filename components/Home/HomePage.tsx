import HeroSection from "./Hero/HeroSection";
import ParticleBackground from "./Hero/ParticleBackground";

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type HomePageProps = {
  formData: ContactForm;
  isSubmitting: boolean;
  statusMessage: string;
  isError: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setFormData: React.Dispatch<React.SetStateAction<ContactForm>>;
};

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "REST API",
  "Docker",
];

const projects = [
  {
    title: "3D Portfolio Experience",
    description:
      "Immersive personal website with layered cards, depth-based motion, and clean component architecture.",
    stack: "Next.js • Tailwind • TypeScript",
  },
  {
    title: "E-commerce Admin Dashboard",
    description:
      "Real-time analytics dashboard with secure authentication, product pipelines, and role-based management.",
    stack: "React • Node.js • PostgreSQL",
  },
  {
    title: "Realtime Team Workspace",
    description:
      "Collaborative workspace featuring activity feeds, notification channels, and optimized data fetching.",
    stack: "Next.js • Prisma • WebSocket",
  },
];

export default function HomePage({
  formData,
  isSubmitting,
  statusMessage,
  isError,
  onSubmit,
  setFormData,
}: HomePageProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <ParticleBackground />

      <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-16 md:py-24">
        <HeroSection />

        <section id="services" className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Frontend Craft",
              text: "Polished UI systems with animation, responsive design, and reusable React components.",
            },
            {
              title: "Backend Reliability",
              text: "Secure APIs, robust validation, and dependable integrations like SMTP sendmail.",
            },
            {
              title: "Performance Focus",
              text: "Optimized rendering and clean architecture for smooth user experience.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl shadow-black/30 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
            </article>
          ))}
        </section>

        <section id="projects" className="space-y-5">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="group rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-5 shadow-xl shadow-black/30 transition duration-300 hover:-translate-y-1 hover:border-fuchsia-400/60">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{project.stack}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="space-y-4">
          <h2 className="text-3xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 shadow-lg shadow-black/30 backdrop-blur-md">{skill}</span>
            ))}
          </div>
        </section>

        <section id="contact" className="rounded-2xl border border-slate-800 bg-slate-900/75 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl md:p-8">
          <h2 className="text-2xl font-semibold">Contact Me</h2>
          <p className="mt-2 text-sm text-slate-300">Let&apos;s discuss your project. Send me a message and I&apos;ll get back to you quickly.</p>

          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input type="text" placeholder="Your name" value={formData.name} onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))} required className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm outline-none transition focus:border-cyan-400" />
              <input type="email" placeholder="Your email" value={formData.email} onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))} required className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm outline-none transition focus:border-cyan-400" />
            </div>

            <input type="text" placeholder="Subject" value={formData.subject} onChange={(e) => setFormData((prev) => ({ ...prev, subject: e.target.value }))} required className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm outline-none transition focus:border-cyan-400" />

            <textarea placeholder="Message" value={formData.message} onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))} required rows={6} className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm outline-none transition focus:border-cyan-400" />

            <button type="submit" disabled={isSubmitting} className="w-fit rounded-lg bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70">
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {statusMessage && <p className={`text-sm ${isError ? "text-red-400" : "text-emerald-400"}`}>{statusMessage}</p>}
          </form>
        </section>
      </section>
    </main>
  );
}
