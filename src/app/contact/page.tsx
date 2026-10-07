"use client";

import { useState } from "react";
import ContactHero from "@/components/contact/ContactHero";

const serviceOptions = [
  "Residential Roofing",
  "Commercial Roofing",
  "Roof Repair & Maintenance",
  "Waterproofing & Insulation",
  "Cold Storage Construction",
  "Fabricated House & Cottage",
  "Capsule House",
  "Other",
];

const initialForm = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

function InfoCard({
  label,
  children,
  icon,
}: {
  label: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 p-5 rounded-2xl border border-slate-200 bg-white">
      <div className="shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary-600">
          {label}
        </p>
        <div className="mt-1 text-slate-900 font-medium leading-snug">{children}</div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const phoneDisplay = "+91 70229 39030";
  const phoneTel = "+917022939030";
  const whatsappUrl = "https://wa.me/917022939030";
  const mapEmbedSrc =
    "https://maps.google.com/maps?q=Syno+8,+Thupalya+Road,+Bommasandra+Industrial+Area,+Bangalore,+560099&t=&z=15&ie=UTF8&iwloc=&output=embed";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as
          | { ok?: boolean; error?: string }
          | null;
        throw new Error(data?.error || "Unable to submit. Please try again.");
      }

      setForm(initialForm);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Unable to submit. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 outline-none transition";

  return (
    <>
      <ContactHero />

      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            <div className="space-y-4">
              <InfoCard
                label="Phone"
                icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                }
              >
                <a href={`tel:${phoneTel}`} className="hover:text-primary-600 transition-colors">
                  {phoneDisplay}
                </a>
              </InfoCard>

              <InfoCard
                label="Email"
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
              >
                <a href="mailto:ssrs0421@gmail.com" className="hover:text-primary-600 transition-colors break-all">
                  ssrs0421@gmail.com
                </a>
              </InfoCard>

              <InfoCard
                label="Working Hours"
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
              >
                Mon – Sat: 9:00 AM – 6:00 PM
              </InfoCard>

              <InfoCard
                label="Address"
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                }
              >
                Syno 8, Thupalya Road, Bommasandra Industrial Area, Bangalore, India,
                560099
              </InfoCard>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#20bd5a] transition-colors shadow-md shadow-green-600/20"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                Send Us a Message
              </h2>
              <p className="mt-2 text-sm text-primary-600">
                Fill in your details and we&apos;ll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Full Name *"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Phone Number *"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Email Address"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="sr-only">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat`}
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                    }}
                  >
                    <option value="">Service Required</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    placeholder="Message"
                  />
                </div>

                {status === "success" && (
                  <p className="text-green-600 text-sm font-medium">
                    Thank you! We&apos;ll get back to you within 24 hours.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-600 text-sm font-medium">
                    Something went wrong. Please try again or call us.
                    {errorMsg ? ` ${errorMsg}` : ""}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-primary-500 text-white font-semibold hover:bg-primary-400 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 lg:pb-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-slate-900 mb-4">
            Find Us on the Map
          </h2>
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-[21/9] min-h-[280px] bg-slate-100">
            <iframe
              title="Shyam Roofing office location"
              src={mapEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[280px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
