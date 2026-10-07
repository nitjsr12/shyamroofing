import Link from "next/link";

interface CTAProps {
  title: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  className?: string;
}

export default function CTA({
  title,
  subtitle,
  primaryLabel = "Get Free Quote",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref = "tel:+917022939030",
  className = "",
}: CTAProps) {
  const secondaryClassName =
    "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-white/15 bg-white/5 text-white text-sm font-semibold backdrop-blur-sm hover:bg-white/10 transition-colors";

  return (
    <section
      className={`relative py-14 lg:py-16 overflow-hidden bg-[#0a0f18] ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(12,142,231,0.12)_0%,transparent_65%)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f18] via-[#0c121c] to-[#0a0f18]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 shrink-0">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-primary-500 text-white text-sm font-semibold hover:bg-primary-400 transition-colors shadow-lg shadow-primary-900/30"
            >
              {primaryLabel}
            </Link>
            {secondaryLabel &&
              (secondaryHref.startsWith("tel:") ? (
                <a href={secondaryHref} className={secondaryClassName}>
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  {secondaryLabel}
                </a>
              ) : (
                <Link href={secondaryHref} className={secondaryClassName}>
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  {secondaryLabel}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
