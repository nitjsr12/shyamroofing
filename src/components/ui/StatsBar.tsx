export type StatItem = {
  value: string;
  label: string;
};

const defaultStats: StatItem[] = [
  { value: "15+", label: "Years Experience" },
  { value: "2000+", label: "Happy Clients" },
  { value: "50+", label: "Cities Served" },
];

type StatsBarProps = {
  stats?: StatItem[];
  className?: string;
};

function statCellClass(index: number, count: number) {
  const parts = [
    "flex flex-col items-center justify-center text-center px-6 py-6 sm:py-0",
  ];

  if (index > 0) {
    parts.push("border-t border-white/20");
  }

  if (count === 4) {
    if (index % 2 === 1) {
      parts.push("sm:border-l sm:border-white/25");
    }
    if (index >= 2) {
      parts.push("sm:border-t sm:border-white/20");
    }
    if (index > 0) {
      parts.push("lg:border-t-0 lg:border-l lg:border-white/25");
    }
  } else if (index > 0) {
    parts.push("sm:border-t-0 sm:border-l sm:border-white/25");
  }

  return parts.join(" ");
}

export default function StatsBar({ stats = defaultStats, className = "" }: StatsBarProps) {
  const gridClass =
    stats.length === 4
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      : "grid-cols-1 sm:grid-cols-3";

  return (
    <section
      className={`bg-primary-500 ${className}`}
      aria-label="Company statistics"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <dl className={`grid ${gridClass} py-10 sm:py-12 lg:py-14`}>
          {stats.map((stat, index) => (
            <div key={stat.label} className={statCellClass(index, stats.length)}>
              <dt className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold text-white leading-none">
                {stat.value}
              </dt>
              <dd className="mt-3 text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-white/95">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
