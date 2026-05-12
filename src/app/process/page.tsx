import type { Metadata } from "next";
import { CTASection } from "@/components/sections";
import { Chip, Container, PageHeader, Panel, Section, SectionIntro } from "@/components/ui";
import { processSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Process",
  description:
    "See how Digital Experts scopes, designs, develops, optimizes, launches, and supports premium websites and digital products.",
};

export default function ProcessPage() {
  return (
    <>
      <Section>
        <Container>
          <PageHeader
            eyebrow="Process"
            title="A structured delivery model that removes ambiguity before it becomes expensive."
            text="Good process is not ceremony. It is how we protect quality, keep decisions visible, and move from strategy to launch without losing the original intent."
          />
        </Container>
      </Section>

      <Section className="bg-[#060b13]">
        <Container>
          <div className="grid gap-4">
            {processSteps.map((step, index) => (
              <Panel key={step.title} className="premium-panel-interactive rounded-[2rem] p-6 sm:p-8">
                <div className="grid gap-5 md:grid-cols-[8rem_1fr] md:items-start">
                  <Chip>0{index + 1}</Chip>
                  <div>
                    <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white">{step.title}</h2>
                    <p className="mt-3 max-w-3xl text-base leading-7 text-slate-400">{step.text}</p>
                  </div>
                </div>
              </Panel>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="Trust"
            title="The client experience should feel calm."
            text="We make progress visible, decisions documented, and trade-offs clear. That gives stakeholders confidence and gives the build the room it needs to be excellent."
          />
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
