import { ReactNode } from "react";
import Link from "next/link";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href = "/services",
}: ServiceCardProps) {
  const content = (
    <>
      <div className="w-14 h-14 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center text-2xl transition-transform group-hover:scale-110 group-hover:bg-primary-200">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-slate-900 mt-4">{title}</h3>
      <p className="mt-2 text-slate-600 leading-relaxed">{description}</p>
      {href && (
        <span className="mt-4 inline-flex items-center text-primary-600 font-medium group-hover:text-accent">
          Learn more
          <svg
            className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      )}
    </>
  );

  return (
    <div className="group p-6 lg:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary-200 transition-all duration-300 h-full flex flex-col">
      {href ? (
        <Link href={href} className="flex flex-col h-full">
          {content}
        </Link>
      ) : (
        content
      )}
    </div>
  );
}
