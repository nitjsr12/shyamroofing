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
  return (
    <section
      className={`relative py-16 lg:py-24 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-primary-900" />
      <div className="absolute inset-0 bg-hero-gradient opacity-95" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-slate-300">{subtitle}</p>
          )}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent-600 transition-colors"
            >
              {primaryLabel}
            </Link>
            {secondaryLabel && (
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-white text-white font-medium hover:bg-white hover:text-primary-900 transition-colors"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
