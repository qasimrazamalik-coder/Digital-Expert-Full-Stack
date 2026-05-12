import type { Metadata } from "next";
import { ButtonLink, Container, PageHeader, Panel, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Digital Experts insights placeholder for future writing on web development, product design, performance, and digital strategy.",
};

export default function InsightsPage() {
  return (
    <Section>
      <Container>
        <PageHeader
          eyebrow="Insights"
          title="A quiet place for practical notes on better digital work."
          text="The insights section is intentionally reserved for future publishing. It can become a useful home for build notes, technical guidance, design thinking, and platform strategy."
        />
        <Panel className="mt-10 rounded-[2rem] p-8">
          <p className="max-w-2xl text-base leading-7 text-slate-400">
            No placeholder articles are being faked here. When content is published, it should be specific, useful, and grounded in real decisions.
          </p>
          <div className="mt-6">
            <ButtonLink href="/contact" variant="secondary">Talk to the studio</ButtonLink>
          </div>
        </Panel>
      </Container>
    </Section>
  );
}
