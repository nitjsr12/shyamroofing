"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const advantages = [
  {
    title: "15+ Years Experience",
    description:
      "Decades of hands-on expertise across residential, commercial, and industrial projects.",
  },
  {
    title: "Quality Materials",
    description:
      "We source only certified, high-grade materials for every project we undertake.",
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden costs. Detailed quotes upfront so you always know what you're paying for.",
  },
  {
    title: "Guaranteed Workmanship",
    description:
      "Backed by our finest engineers and architects — every project is delivered with precision, care, and a full workmanship warranty.",
  },
];

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">
          <div
            className={`lg:sticky lg:top-28 transition-all duration-700 ease-out ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <p className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold uppercase tracking-[0.2em] border border-primary-100">
              Our Advantage
            </p>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-slate-900 leading-tight">
              Why Choose Shyam Roofing?
            </h2>
            <p className="mt-5 text-lg text-primary-600 leading-relaxed max-w-md">
              Trust, quality, and reliability — the foundation of every project
              we deliver.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-500 text-white font-semibold hover:bg-primary-600 transition-colors shadow-md shadow-primary-500/20"
            >
              About Us
              <span aria-hidden>→</span>
            </Link>
          </div>

          <ul className="flex flex-col gap-4 sm:gap-5">
            {advantages.map((item, index) => (
              <li
                key={item.title}
                className={`flex gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/80 hover:border-primary-100 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: visible ? `${200 + index * 120}ms` : "0ms",
                }}
              >
                <div className="shrink-0 flex h-11 w-11 items-center justify-center rounded-full bg-primary-500 shadow-md shadow-primary-500/25">
                  <CheckIcon />
                </div>
                <div className="min-w-0 pt-0.5">
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
