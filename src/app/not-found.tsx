import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl text-center">
        <p className="font-display text-3xl sm:text-4xl font-semibold text-primary-700">
          Page not found
        </p>
        <p className="mt-4 text-slate-600 leading-relaxed">
          The page you are looking for doesn&apos;t exist or may have been moved.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors"
          >
            Go to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-primary-100 bg-white font-medium text-primary-700 hover:border-primary-200 hover:text-primary-800 transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
