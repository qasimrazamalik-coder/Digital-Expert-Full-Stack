import type { Metadata } from "next";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Services - Digital Experts",
  description:
    "Explore our full range of web development services: Shopify, WordPress, custom web apps, SaaS UI/UX design, maintenance, and performance optimisation.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            What we offer
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
            Our Services
          </h1>
          <p className="text-slate-400 text-xl leading-relaxed max-w-2xl mx-auto">
            We specialise in six core disciplines - all focused on building
            digital products that are fast, functional, and built to last.
          </p>
        </div>
      </section>

      <Services />
      <CTA />
      <Contact />
    </>
  );
}
