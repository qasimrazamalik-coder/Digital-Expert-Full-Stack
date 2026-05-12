import type { Metadata } from "next";
import { CTASection } from "@/components/cards";
import { Container, PageHeader, Panel, Section, SectionIntro } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Digital Experts approaches premium web development, product design, engineering quality, and long-term digital support.",
};

export default function AboutPage() {
  return (
    <>
      <Section>
        <Container>
          <PageHeader
            eyebrow="About Digital Experts"
            title="A senior digital partner for brands that care how the work is made."
            text="Digital Experts exists for organizations that need more than a vendor moving pixels around. We combine design judgment, front-end engineering, and business context to build digital platforms that feel intentional from the first impression to the admin workflow."
          />
        </Container>
      </Section>

      <Section className="bg-[#060b13]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionIntro
              eyebrow="Philosophy"
              title="Premium is a discipline, not an effect."
              text="A premium website is not made by adding glow, animation, or expensive-looking words. It is made by understanding the business, choosing the right structure, editing the interface, and building with care."
            />
            <div className="grid gap-4">
              {[
                "Strategy before decoration",
                "Design systems that survive real content",
                "Performance and accessibility as baseline quality",
                "Clear communication and practical trade-offs",
              ].map((item) => (
                <Panel key={item} className="premium-panel-interactive rounded-3xl p-6">
                  <p className="text-xl font-semibold tracking-[-0.02em] text-white">{item}</p>
                </Panel>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="Standards"
            title="How we protect quality."
            text="We work across strategy, interface, and implementation because the strongest digital experiences are shaped by all three."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["Design", "Clear hierarchy, polished responsive systems, restrained motion, and interfaces that make the brand feel more credible."],
              ["Engineering", "Maintainable React and Next.js builds, careful component boundaries, semantic structure, and performance-minded implementation."],
              ["Business", "Scope clarity, conversion paths, operational constraints, handover needs, and the realities of maintaining a platform over time."],
            ].map(([title, text]) => (
              <Panel key={title} className="premium-panel-interactive rounded-[1.75rem] p-7">
                <h2 className="text-2xl font-semibold text-white">{title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-400">{text}</p>
              </Panel>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
