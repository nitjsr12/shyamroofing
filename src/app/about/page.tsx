import type { Metadata } from "next";
import PageHeading from "@/components/ui/PageHeading";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Shyam Roofing — 15+ years of roofing and construction excellence across India. Our story, values, and commitment to quality.",
};

const values = [
  {
    title: "Quality First",
    description: "We use only certified materials and follow best practices in every project.",
  },
  {
    title: "Transparency",
    description: "Clear quotes, no hidden charges, and honest communication from start to finish.",
  },
  {
    title: "Customer Trust",
    description: "We build long-term relationships by delivering on our promises, every time.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeading
        title="About Shyam Roofing"
        subtitle="Trusted roofing and construction solutions across India since 2009."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Shyam Roofing team at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-slate-900">
                Our Story
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Shyam Roofing started with a simple mission: to provide reliable, high-quality
                roofing and construction services that Indian homeowners and businesses could
                trust. What began as a small team has grown into a pan-India presence, serving
                thousands of satisfied clients.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                We specialise in residential roofing, commercial and industrial sheds, PUF
                panels, waterproofing, and general construction. Our in-house engineers and
                skilled workforce ensure that every project meets the highest standards of
                durability and safety, suited to India&apos;s diverse climate.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="px-4 py-2 rounded-lg bg-primary-50 text-primary-700 font-medium">
                  15+ Years Experience
                </div>
                <div className="px-4 py-2 rounded-lg bg-primary-50 text-primary-700 font-medium">
                  2000+ Projects
                </div>
                <div className="px-4 py-2 rounded-lg bg-primary-50 text-primary-700 font-medium">
                  50+ Cities
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-slate-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-6 lg:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-slate-900">{v.title}</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
