import type { Metadata } from "next";
import { CTASection, WorkCard } from "@/components/cards";
import { Container, PageHeader, Panel, Section } from "@/components/ui";
import { work } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore Digital Experts concept and sample case studies across Shopify, SaaS products, WordPress, and digital platform design.",
};

export default function WorkPage() {
  return (
    <>
      <Section>
        <Container>
          <PageHeader
            eyebrow="Work"
            title="Selected case studies, framed with the strategy behind the interface."
            text="These are concept and sample studies, clearly labeled. They show how we think about business context, structure, interface quality, and implementation direction without inventing fake client claims."
          />
        </Container>
      </Section>
      <Section className="bg-[#070c15]">
        <Container>
          <div className="grid gap-6">
            {work.map((project) => <WorkCard key={project.slug} project={project} />)}
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <Panel className="rounded-[2rem] p-8 sm:p-10">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white">
              Real client work can be presented privately.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
              Where confidentiality applies, we can walk qualified prospects through the decision-making, architecture, and delivery model without exposing client-sensitive details publicly.
            </p>
          </Panel>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
