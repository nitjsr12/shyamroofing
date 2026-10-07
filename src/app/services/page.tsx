import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesConsultationCta from "@/components/services/ServicesConsultationCta";
import { servicesPageContent } from "@/content/servicesPage";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Residential & commercial roofing, repairs, waterproofing, cold storage, fabricated homes & more. Explore Shyam Roofing's seven specialized construction solutions.",
};

function FeatureCheck() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      {servicesPageContent.map((service, index) => {
        const imageFirst = index % 2 === 0;

        const imageBlock = (
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-200/80">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {service.comingSoon && (
              <span className="absolute top-4 right-4 z-10 px-3 py-1 rounded-md bg-primary-500 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                Coming Soon
              </span>
            )}
          </div>
        );

        const textBlock = (
          <div className="max-w-xl">
            <p className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold uppercase tracking-[0.12em] sm:tracking-[0.15em] border border-primary-100">
              {service.tag}
            </p>
            <h2
              id={service.id}
              className="mt-5 font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 scroll-mt-28"
            >
              {service.title}
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">{service.description}</p>
            <ul className="mt-6 space-y-3">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                    <FeatureCheck />
                  </span>
                  <span className="text-sm sm:text-base leading-snug">{feature}</span>
                </li>
              ))}
            </ul>
            {service.comingSoon ? (
              <span
                className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-200 text-slate-500 font-semibold cursor-not-allowed"
                aria-disabled
              >
                <span aria-hidden>🚀</span>
                Coming Soon
              </span>
            ) : (
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-primary-500 text-white font-semibold hover:bg-primary-400 transition-colors shadow-md shadow-primary-500/20"
              >
                Get a Quote
                <span aria-hidden>→</span>
              </Link>
            )}
          </div>
        );

        return (
          <section
            key={service.id}
            className={`py-16 lg:py-24 ${index % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {imageFirst ? (
                  <>
                    {imageBlock}
                    {textBlock}
                  </>
                ) : (
                  <>
                    <div className="lg:order-2">{imageBlock}</div>
                    <div className="lg:order-1">{textBlock}</div>
                  </>
                )}
              </div>
            </div>
          </section>
        );
      })}

      <ServicesConsultationCta />
    </>
  );
}
