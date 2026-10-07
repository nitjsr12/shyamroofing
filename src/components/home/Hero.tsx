import Link from "next/link";
import Image from "next/image";

const heroServices = [
  { label: "Residential Roofing", icon: "🏠" },
  { label: "Commercial Roofing", icon: "🏭" },
  { label: "Roof Repair", icon: "🔧" },
  { label: "Waterproofing", icon: "💧" },
  { label: "Cold Storage", icon: "❄️" },
  { label: "Fabricated House & Cottage", icon: "🏗️" },
  { label: "Capsule House", icon: "🏡" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <Image
        src="/images/hero-bg.webp"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950/92 via-primary-950/75 to-primary-950/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-primary-950/40" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-20 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          <div className="max-w-xl">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-semibold text-white leading-[1.12] animate-slide-up opacity-0" style={{ animationDelay: "100ms" }}>
              Quality{" "}
              <span className="text-primary-300">Roofing</span> and
              Construction Across World
            </h1>
            <p className="mt-6 text-base sm:text-lg text-primary-200/90 leading-relaxed animate-slide-up opacity-0" style={{ animationDelay: "250ms" }}>
              From residential repairs to cold storage facilities — expert
              craftsmanship, durable materials, and transparent pricing. Get a
              free site inspection today.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-slide-up opacity-0" style={{ animationDelay: "400ms" }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-primary-500 text-white font-semibold hover:bg-primary-400 transition-colors shadow-lg shadow-primary-900/40"
              >
                Get Free Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="tel:+917022939030"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/25 bg-white/10 text-white font-semibold backdrop-blur-md hover:bg-white/15 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                Call Now
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-lg lg:max-w-none lg:ml-auto w-full animate-fade-in opacity-0" style={{ animationDelay: "350ms" }}>
            {heroServices.map((service, index) => (
              <div
                key={service.label}
                className="flex flex-col items-start gap-2 px-5 py-5 rounded-2xl border border-white/10 bg-[#1a2838]/90 backdrop-blur-lg text-white text-sm sm:text-base font-semibold shadow-lg shadow-black/30 hover:bg-[#1f3045]/95 hover:border-white/15 transition-colors"
              >
                <span className="text-2xl leading-none" aria-hidden>
                  {service.icon}
                </span>
                <span className="leading-snug">{service.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
