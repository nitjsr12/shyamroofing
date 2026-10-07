"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const darkNav = !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur-sm"
          : "bg-[#141e2d]/85 backdrop-blur-md border-b border-white/10"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            href="/"
            className={`flex items-center gap-3 font-display text-xl lg:text-2xl font-semibold transition-colors ${
              darkNav ? "text-white hover:text-primary-200" : "text-primary-800 hover:text-primary-600"
            }`}
          >
            <span className={`relative w-10 h-10 lg:w-11 lg:h-11 overflow-hidden rounded-xl ring-1 ${
              darkNav ? "bg-white/90 ring-white/20" : "bg-white/70 ring-primary-100"
            }`}
            >
              <Image
                src="/images/logo.png"
                alt="Shyam Roofing"
                fill
                sizes="(max-width: 768px) 40px, 44px"
                className="object-contain p-1"
                priority
              />
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors ${
                      isActive
                        ? darkNav
                          ? "text-primary-300"
                          : "text-primary-600"
                        : darkNav
                          ? "text-white/90 hover:text-white"
                          : "text-slate-700 hover:text-primary-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+917022939030"
              className={`hidden lg:inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                darkNav ? "text-white/90 hover:text-white" : "text-slate-700"
              }`}
            >
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              +91 70229 39030
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-primary-500 text-white text-sm font-semibold hover:bg-primary-400 transition-colors"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              darkNav ? "text-white" : "text-slate-800"
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-white/20 animate-fade-in bg-primary-950/95 backdrop-blur-md rounded-b-xl -mx-4 px-4 sm:-mx-6 sm:px-6">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-white/90 font-medium hover:text-primary-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-primary-500 text-white text-sm font-medium"
                >
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
