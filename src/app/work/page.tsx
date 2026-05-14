import type { Metadata } from "next";
import { CTASection } from "@/components/sections";
import { WorkCard } from "@/components/work";
import { ButtonLink, Chip, Container, PageHeader, Panel, PanelLink, Section, SectionIntro } from "@/components/ui";
import { services, work } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore Digital Experts premium internal showcase and concept case studies across Shopify, SaaS dashboards, WordPress platforms, and custom website development.",
};

const categories = ["Premium Commerce", "SaaS Product", "CMS Platforms"];

export default function WorkPage() {
  return (
    <>
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <PageHeader
              eyebrow="Work"
              title="Concept work with the depth of a serious client engagement."
              text="When public client details are not available, we show internal showcase projects honestly. Each study demonstrates how Digital Experts thinks about positioning, product structure, interface quality, and build execution."
            />
            <Panel className="premium-panel-interactive rounded-[2rem] p-6 sm:p-8">
              <p className="text-sm font-semibold text-white">Portfolio standard</p>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                No fake logos, no invented testimonials, no inflated ROI claims. The work is presented as a strategic preview of the thinking and craft clients can expect.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Chip key={category}>{category}</Chip>
                ))}
              </div>
            </Panel>
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-[rgba(248,250,252,0.022)]" tight>
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Strategic", "Every project is framed around the business problem before the interface."],
              ["Buildable", "The visual direction is paired with practical front-end and CMS thinking."],
              ["Honest", "Concept studies are labeled clearly instead of pretending to be client proof."],
            ].map(([title, text]) => (
              <div key={title}>
                <p className="text-xl font-semibold text-white">{title}</p>
                <p className="mt-2 max-w-sm text-sm leading-7 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-[#060b13]">
        <Container>
          <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <SectionIntro
              eyebrow="Featured studies"
              title="Three premium directions across commerce, SaaS, and platform work."
              text="Each showcase includes the problem, approach, technical direction, feature priorities, and the type of business it is designed to support."
              className="mb-0"
            />
            <ButtonLink href="/contact" variant="secondary">Discuss similar work</ButtonLink>
          </div>
          <div className="grid gap-6">
            {work.map((project) => (
              <WorkCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionIntro
              eyebrow="Connected services"
              title="Portfolio thinking connects directly to delivery."
              text="The work section is not a mood board. Each study is tied to the service capabilities Digital Experts can scope, design, and build."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <PanelLink
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="rounded-3xl p-5"
                >
                  <p className="text-base font-semibold text-white">{service.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{service.eyebrow}</p>
                </PanelLink>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
