import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Shyam Roofing | Trusted Roofing & Construction in India",
    template: "%s | Shyam Roofing",
  },
  description:
    "Shyam Roofing offers professional roofing solutions across India. Residential & commercial roofing, repairs, and construction. Free site inspection. Get a quote today.",
  keywords: [
    "roofing India",
    "roof repair",
    "construction company",
    "Shyam Roofing",
    "residential roofing",
    "commercial roofing",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
