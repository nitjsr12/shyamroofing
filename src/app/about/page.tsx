import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import StatsBar from "@/components/ui/StatsBar";
import Image from "next/image";
import Link from "next/link";

const aboutStats = [
  { value: "15+", label: "Years in Business" },
  { value: "2000+", label: "Projects Completed" },
  { value: "50+", label: "Cities Served" },
  { value: "6", label: "Service Verticals" },
];

const coreValues = [
  {
    title: "Quality First",
    description:
      "We use only certified, durable materials and follow best-in-class construction practices on every project.",
  },
  {
    title: "Transparency",
    description:
      "No hidden costs. Every quote is detailed, every process is explained, and every client is kept informed.",
  },
  {
    title: "Reliability",
    description:
      "We deliver on time, every time. Our track record of 2000+ completed projects speaks for itself.",
  },
  {
    title: "Innovation",
    description:
      "From PUF panels to prefabricated homes, we embrace modern construction methods for better outcomes.",
  },
];

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Shyam Roofing — 15+ years of roofing and construction excellence across India. Our story, values, and commitment to quality.",
};

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StatsBar stats={aboutStats} />

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold uppercase tracking-[0.2em] border border-primary-100">
                Our Story
              </p>
              <h2 className="mt-5 font-display text-3xl sm:text-4xl font-semibold text-slate-900">
                Our Story
              </h2>
              <p className="mt-5 text-slate-600 leading-relaxed">
                Shyam Roofing began in Bangalore with a clear purpose: deliver roofing
                and construction work that families and businesses could rely on for
                decades, not just seasons.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Over 15 years, we expanded from local residential jobs to pan-India
                projects — commercial sheds, cold storage facilities, waterproofing,
                and prefabricated housing — while keeping the same hands-on approach
                and accountability.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Today our engineers, site teams, and project managers work together
                so every build meets Indian climate demands, safety standards, and
                the timelines we promise our clients.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-200/80">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80"
                alt="Construction team at a project site"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-[#0b1120]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 lg:mb-14">
            <p className="inline-block px-4 py-1.5 rounded-full bg-primary-500/15 text-primary-300 text-xs font-semibold uppercase tracking-[0.2em] border border-primary-400/20">
              What We Stand For
            </p>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
              Our Core Values
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
            {coreValues.map((value) => (
              <article
                key={value.title}
                className="flex gap-4 sm:gap-5 p-6 sm:p-7 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] hover:border-white/15 transition-colors"
              >
                <div className="shrink-0 flex h-11 w-11 items-center justify-center rounded-full bg-primary-500 shadow-md shadow-primary-900/40">
                  <CheckIcon />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-200/80">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80"
                alt="Consultation with clients"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="max-w-lg">
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
                Ready to Start Your Project?
              </h2>
              <p className="mt-4 text-lg text-primary-600 leading-relaxed">
                Get in touch for a free consultation and site inspection.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-primary-500 text-white font-semibold hover:bg-primary-400 transition-colors shadow-md shadow-primary-500/20"
              >
                Contact Us
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
