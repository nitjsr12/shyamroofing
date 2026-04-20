const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "2000+", label: "Happy Clients" },
  { value: "50+", label: "Cities Covered" },
];

const points = [
  {
    title: "Proven Expertise",
    description: "Over 15 years of roofing and construction experience across residential and commercial projects.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Warranty & Quality",
    description: "We back our work with clear warranties and use only certified, durable materials.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Transparent Pricing",
    description: "No hidden charges. Get clear quotes and fair, competitive rates for every project.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900">
            Why Choose Shyam Roofing?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Trust, quality, and reliability — the foundation of every project we deliver.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
            >
              <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary-600">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Trust points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {points.map((point) => (
            <div
              key={point.title}
              className="group flex flex-col items-center text-center p-6 lg:p-8 rounded-2xl bg-slate-50 hover:bg-primary-50 border border-transparent hover:border-primary-100 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center group-hover:bg-primary-200 group-hover:scale-110 transition-all duration-300">
                {point.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{point.title}</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
