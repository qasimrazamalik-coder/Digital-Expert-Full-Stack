import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { ServiceCard, WorkCard, CTASection } from "@/components/cards";
import { ButtonLink, Chip, Container, Eyebrow, Panel, Section, SectionIntro } from "@/components/ui";
import { processSteps, proofPoints, services, work } from "@/lib/site";

export const metadata: Metadata = {
  title: "Premium Web Development Agency",
  description:
    "Digital Experts designs and builds premium websites, commerce systems, SaaS interfaces, and custom web applications for serious teams.",
};

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <Eyebrow>Premium web development agency</Eyebrow>
              <h1 className="balance max-w-4xl text-[clamp(3.35rem,8vw,7rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-white">
                Digital platforms with sharper strategy and quieter confidence.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300/88 sm:text-xl sm:leading-9">
                Digital Experts partners with ambitious brands and product teams to design, build, optimize, and support web experiences that feel polished, perform reliably, and stand up to serious client scrutiny.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact">Discuss a project</ButtonLink>
                <ButtonLink href="/work" variant="secondary">View selected work</ButtonLink>
              </div>
            </div>

            <Panel className="premium-panel-interactive relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
              <div className="absolute right-[-6rem] top-[-6rem] h-56 w-56 rounded-full bg-cyan-300/12 blur-3xl" />
              <div className="relative">
                <p className="text-sm font-medium text-slate-400">Studio focus</p>
                <div className="mt-7 grid gap-4">
                  {proofPoints.map((point, index) => (
                    <div key={point} className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0">
                      <span className="text-3xl font-semibold text-white/30">0{index + 1}</span>
                      <span className="max-w-[16rem] text-right text-lg font-medium text-white">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Panel>
          </div>
        </Container>
      </section>

      <Section className="border-y border-white/10 bg-[rgba(248,250,252,0.022)]" tight>
        <Container>
          <div className="grid gap-6 md:grid-cols-4">
            {["Commerce", "CMS", "SaaS", "Optimization"].map((item) => (
              <div key={item}>
                <p className="text-sm text-slate-500">Built around</p>
                <p className="mt-2 text-xl font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="Services"
            title="Depth where the website, product, and business model meet."
            text="The work is intentionally focused: premium websites, commerce systems, custom applications, SaaS interfaces, optimization, and long-term support."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href="/services" variant="secondary">Explore all services</ButtonLink>
          </div>
        </Container>
      </Section>

      <Section className="bg-[#060b13]">
        <Container>
          <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <SectionIntro
              eyebrow="Selected work"
              title="Concept case studies with real strategic framing."
              text="Sample projects are clearly labeled and used to show the level of thinking, structure, and implementation quality clients can expect."
              className="mb-0"
            />
            <ButtonLink href="/work" variant="ghost">View work archive</ButtonLink>
          </div>
          <div className="grid gap-5">
            {work.slice(0, 2).map((project) => (
              <WorkCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionIntro
              eyebrow="Why Digital Experts"
              title="A small senior partner for high-stakes digital work."
              text="Premium does not mean ornamental. It means fewer weak decisions, cleaner systems, better handover, and a site or product that can keep improving after launch."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {["Design quality protected in build", "Technical decisions explained clearly", "Content structure treated as product UX", "Maintenance considered from day one"].map((item) => (
                <Panel key={item} className="premium-panel-interactive rounded-3xl p-6">
                  <ArrowUpRight className="mb-8 text-cyan-200" size={18} />
                  <p className="text-lg font-semibold leading-7 text-white">{item}</p>
                </Panel>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-[rgba(248,250,252,0.022)]">
        <Container>
          <SectionIntro
            eyebrow="Process"
            title="A calm delivery model for complex digital work."
            text="Every engagement is shaped to reduce ambiguity before build and protect quality through launch."
          />
          <div className="grid gap-3 md:grid-cols-7">
            {processSteps.map((step, index) => (
              <div key={step.title} className="premium-panel-interactive rounded-3xl border border-white/10 bg-white/[0.035] p-5">
                <Chip>0{index + 1}</Chip>
                <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
