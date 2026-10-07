import Link from "next/link";

export default function ProjectsPageCta() {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden bg-[#0a0f18]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(12,142,231,0.16)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f18] via-[#0c121c] to-[#0a0f18]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight">
            Have a Project in Mind?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Tell us about your requirements and get a free site assessment.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary-500 text-white font-semibold hover:bg-primary-400 transition-colors shadow-lg shadow-primary-900/30"
          >
            Start Your Project
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
