export default function ProjectsHero() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-[#0a0f18]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(12,142,231,0.14)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f18] via-[#0c121c] to-[#0a0f18]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="inline-block px-4 py-1.5 rounded-full bg-primary-500/15 text-primary-300 text-xs font-semibold uppercase tracking-[0.2em] border border-primary-400/20">
            Our Work
          </p>
          <h1 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-semibold text-white leading-tight">
            Projects Across India
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed">
            From residential homes to large industrial facilities — a look at some
            of our completed work.
          </p>
        </div>
      </div>
    </section>
  );
}
