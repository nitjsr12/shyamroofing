"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Homeowner, Bangalore",
    text: "Shyam Roofing repaired our terrace leak within two days. Professional team, clear quote, and no hidden costs. Highly recommended.",
  },
  {
    name: "Priya Sharma",
    role: "Factory Owner, Pune",
    text: "We got our industrial shed roof done by Shyam Roofing. The PUF panels have reduced heat significantly and the installation was quick and neat.",
  },
  {
    name: "Amit Verma",
    role: "Property Developer, Delhi",
    text: "Their waterproofing service saved our terrace from further damage. Quick response, fair pricing, and lasting results. Will use again.",
  },
  {
    name: "Vikram Singh",
    role: "Builder, Delhi NCR",
    text: "We have partnered with Shyam Roofing for multiple projects. Their quality and timelines are consistent. A trusted name in roofing.",
  },
  {
    name: "Anita Nair",
    role: "Commercial Property Manager, Chennai",
    text: "From inspection to completion, the process was smooth. The team explained every step and the waterproofing has held up perfectly through the monsoon.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-amber-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const child = track.children[index] as HTMLElement | undefined;
    if (!child) return;
    const offset =
      child.offsetLeft - (track.clientWidth - child.clientWidth) / 2;
    track.scrollTo({ left: offset, behavior: "smooth" });
    activeRef.current = index;
    setActive(index);
  }, []);

  const goNext = useCallback(() => {
    const next = (activeRef.current + 1) % testimonials.length;
    scrollToIndex(next);
  }, [scrollToIndex]);

  const goPrev = useCallback(() => {
    const prev =
      (activeRef.current - 1 + testimonials.length) % testimonials.length;
    scrollToIndex(prev);
  }, [scrollToIndex]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) setHeaderVisible(true);
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    scrollToIndex(0);
  }, [scrollToIndex]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const center = track.scrollLeft + track.clientWidth / 2;
      let closest = 0;
      let minDist = Infinity;
      Array.from(track.children).forEach((child, i) => {
        const el = child as HTMLElement;
        const childCenter = el.offsetLeft + el.clientWidth / 2;
        const dist = Math.abs(center - childCenter);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      activeRef.current = closest;
      setActive(closest);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!inView || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const t = setInterval(goNext, 4000);
    return () => clearInterval(t);
  }, [inView, paused, goNext]);

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-2xl mx-auto mb-10 lg:mb-14 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold uppercase tracking-[0.2em] border border-primary-100">
            Testimonials
          </p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900">
            What Our Clients Say
          </h2>
          <p className="mt-3 text-base sm:text-lg text-primary-600">
            Trusted by homeowners and businesses across India.
          </p>
        </div>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          ref={trackRef}
          className="flex gap-5 lg:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 px-[max(1rem,calc(50%-min(340px,42vw)))] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="snap-center shrink-0 w-[min(340px,85vw)] sm:w-[380px] flex flex-col rounded-2xl border border-slate-200 bg-slate-50/80 p-6 sm:p-8 shadow-sm"
            >
              <Stars />
              <blockquote className="mt-5 flex-1">
                <p className="text-slate-800 italic leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
              </blockquote>
              <footer className="mt-6 flex items-center gap-3">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-500 text-white font-semibold text-lg"
                  aria-hidden
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{t.name}</p>
                  <p className="text-sm text-primary-600">{t.role}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={goPrev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:border-primary-300 hover:text-primary-600 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-primary-500" : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goNext}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:border-primary-300 hover:text-primary-600 transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
