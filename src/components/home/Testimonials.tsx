"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Homeowner, Bangalore",
    text: "Shyam Roofing repaired our terrace leak within two days. Professional team, clear quote, and no hidden costs. Highly recommended.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Factory Owner, Pune",
    text: "We got our industrial shed roof done by Shyam Roofing. The PUF panels have reduced heat significantly and the installation was quick and neat.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Builder, Delhi NCR",
    text: "We have partnered with Shyam Roofing for multiple projects. Their quality and timelines are consistent. A trusted name in roofing.",
    rating: 5,
  },
  {
    name: "Anita Nair",
    role: "Commercial Property Manager, Chennai",
    text: "From inspection to completion, the process was smooth. The team explained every step and the waterproofing has held up perfectly through the monsoon.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Trusted by homeowners and businesses across India.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`transition-all duration-500 ${
                i === active
                  ? "opacity-100 block"
                  : "opacity-0 absolute inset-0 pointer-events-none"
              }`}
            >
              <blockquote className="text-center">
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <svg
                      key={j}
                      className="w-5 h-5 text-accent-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
                <footer className="mt-8">
                  <p className="font-semibold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </footer>
              </blockquote>
            </div>
          ))}

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === active ? "bg-primary-600 w-8" : "bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
