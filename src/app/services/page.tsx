import type { Metadata } from "next";
import { ServiceCard } from "@/components/cards";
import { CTASection } from "@/components/sections";
import { Container, PageHeader, Panel, Section, SectionIntro } from "@/components/ui";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Digital Experts services across Shopify development, WordPress development, custom website development, and SaaS product development.",
};

export default function ServicesPage() {
  return (
    <>
      <Section>
        <Container>
          <PageHeader
            eyebrow="Services"
            title="Focused digital services for premium web and product work."
            text="Each service is designed around outcomes: better brand perception, clearer user journeys, stronger performance, and systems your team can maintain."
          />
        </Container>
      </Section>

      <Section className="bg-[#060b13]">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="Outcomes"
            title="The work is measured by what it improves."
            text="We care about how the site or product performs after the launch moment: speed, clarity, conversion paths, editorial control, and long-term maintainability."
          />
          <div className="grid gap-4 md:grid-cols-4">
            {["Brand credibility", "Conversion clarity", "Operational control", "Technical longevity"].map((item) => (
              <Panel key={item} className="premium-panel-interactive rounded-3xl p-6">
                <p className="text-lg font-semibold text-white">{item}</p>
              </Panel>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
