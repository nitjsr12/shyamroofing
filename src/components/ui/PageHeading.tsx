interface PageHeadingProps {
  title: string;
  subtitle?: string;
}

export default function PageHeading({ title, subtitle }: PageHeadingProps) {
  return (
    <div className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-primary-900" />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg text-slate-300">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
}
