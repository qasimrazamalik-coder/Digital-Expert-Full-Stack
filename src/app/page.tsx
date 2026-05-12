import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import FeaturedWork from "@/components/FeaturedWork";
import Process from "@/components/Process";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <FeaturedWork />
      <Process />
      <About />
      <CTA />
      <Contact />
    </>
  );
}
