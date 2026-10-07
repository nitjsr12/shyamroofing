"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type ServiceParallaxCardProps = {
  title: string;
  description: string;
  image: string;
  href: string;
  comingSoon?: boolean;
};

export default function ServiceParallaxCard({
  title,
  description,
  image,
  href,
  comingSoon,
}: ServiceParallaxCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const [parallaxY, setParallaxY] = useState(0);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const updateParallax = () => {
      if (reduceMotion) {
        setParallaxY(0);
        return;
      }
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const centerY = rect.top + rect.height / 2;
      const progress = (centerY - vh / 2) / vh;
      setParallaxY(progress * 48);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    updateParallax();
    window.addEventListener("scroll", updateParallax, { passive: true });
    window.addEventListener("resize", updateParallax);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateParallax);
      window.removeEventListener("resize", updateParallax);
    };
  }, []);

  return (
    <article
      ref={cardRef}
      className={`group relative flex flex-col min-h-[320px] sm:min-h-[340px] rounded-2xl overflow-hidden border border-white/10 bg-slate-900 transition-all duration-700 ease-out ${
        revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-x-0 top-[-15%] h-[130%] will-change-transform relative"
          style={{ transform: `translate3d(0, ${parallaxY}px, 0)` }}
        >
          <Image
            src={image}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-[#0b1120]/85 to-[#0b1120]/35" />

      {comingSoon && (
        <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-md bg-primary-500 text-[10px] font-bold uppercase tracking-wider text-white">
          Coming Soon
        </span>
      )}

      <div className="relative z-10 mt-auto p-5 sm:p-6 flex flex-col">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-slate-300/90 leading-relaxed line-clamp-4">
          {description}
        </p>
        <Link
          href={href}
          className="mt-4 inline-flex items-center text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors"
        >
          Learn more
          <span className="ml-1" aria-hidden>
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
