import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/ui/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <FeaturedProjects />
      <Testimonials />
      <CTA
        title="Free Site Inspection & Consultation"
        subtitle="Get a no-obligation assessment and quote. Our team will visit your site and recommend the best solution for your needs."
        primaryLabel="Request Free Inspection"
        primaryHref="/contact"
        secondaryLabel="Call Now"
        secondaryHref="tel:+917022939030"
      />
    </>
  );
}
