import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection, ServiceCard, WorkMockup } from "@/components/cards";
import { ButtonLink, Chip, Container, PageHeader, Panel, Section, SectionIntro } from "@/components/ui";
import { services, work } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return work.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = work.find((item) => item.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Digital Experts Work`,
      description: project.summary,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = work.find((item) => item.slug === slug);
  if (!project) notFound();

  const relatedServices = project.relatedServices
    .map((serviceSlug) => services.find((service) => service.slug === serviceSlug))
    .filter((service): service is (typeof services)[number] => Boolean(service));

  const relatedProjects = work.filter((item) => item.slug !== project.slug).slice(0, 2);

  return (
    <>
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <PageHeader
              eyebrow={`${project.type} / ${project.category}`}
              title={project.title}
              text={project.summary}
            >
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact">Start a similar project</ButtonLink>
                <ButtonLink href="/work" variant="secondary">Back to work</ButtonLink>
              </div>
            </PageHeader>
            <WorkMockup variant={project.visual} title={project.title} size="hero" />
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-[rgba(248,250,252,0.022)]" tight>
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            <Panel className="premium-panel-interactive rounded-3xl p-6">
              <p className="text-sm text-slate-500">Project type</p>
              <p className="mt-3 text-xl font-semibold text-white">{project.type}</p>
            </Panel>
            <Panel className="premium-panel-interactive rounded-3xl p-6">
              <p className="text-sm text-slate-500">Category</p>
              <p className="mt-3 text-xl font-semibold text-white">{project.category}</p>
            </Panel>
            <Panel className="premium-panel-interactive rounded-3xl p-6">
              <p className="text-sm text-slate-500">Best suited for</p>
              <p className="mt-3 text-xl font-semibold text-white">{project.suitedFor[0]}</p>
            </Panel>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionIntro
              eyebrow="Overview"
              title="The strategic frame behind the visual direction."
              text="The goal of the case study is to show how Digital Experts turns a business context into a buildable digital system, not to pretend this is a public client launch."
            />
            <div className="grid gap-5">
              <Panel className="premium-panel-interactive rounded-[1.75rem] p-7">
                <h2 className="text-xl font-semibold text-white">Problem or opportunity</h2>
                <p className="mt-4 text-sm leading-7 text-slate-400">{project.problem}</p>
              </Panel>
              <Panel className="premium-panel-interactive rounded-[1.75rem] p-7">
                <h2 className="text-xl font-semibold text-white">Strategic opportunity</h2>
                <p className="mt-4 text-sm leading-7 text-slate-400">{project.opportunity}</p>
              </Panel>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-[#060b13]">
        <Container>
          <SectionIntro
            eyebrow="Approach"
            title="Design and development direction."
            text="The work is structured to balance premium perception, usability, maintainability, and the technical reality of shipping."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {project.approach.map((item, index) => (
              <Panel key={item} className="premium-panel-interactive rounded-[1.75rem] p-7">
                <Chip>0{index + 1}</Chip>
                <p className="mt-6 text-base font-semibold leading-7 text-white">{item}</p>
              </Panel>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <Panel className="premium-panel-interactive rounded-[2rem] p-7 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white">
                Selected features
              </h2>
              <div className="mt-6 grid gap-3">
                {project.features.map((feature) => (
                  <div key={feature} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                    <p className="text-sm font-semibold text-white">{feature}</p>
                  </div>
                ))}
              </div>
            </Panel>
            <Panel className="premium-panel-interactive rounded-[2rem] p-7 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white">
                Technology and build notes
              </h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
              <p className="mt-6 text-sm leading-7 text-slate-400">{project.outcome}</p>
            </Panel>
          </div>
        </Container>
      </Section>

      <Section className="bg-[#060b13]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionIntro
              eyebrow="Business fit"
              title="Who this direction is designed to serve."
              text="The strongest digital work starts by knowing the kind of organization, workflow, and buying journey the system needs to support."
            />
            <div className="grid gap-4">
              {project.suitedFor.map((item) => (
                <Panel key={item} className="premium-panel-interactive rounded-3xl p-6">
                  <p className="text-lg font-semibold leading-7 text-white">{item}</p>
                </Panel>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="Related services"
            title="The capabilities behind this kind of project."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {relatedServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-[rgba(248,250,252,0.022)]">
        <Container>
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionIntro
              eyebrow="More work"
              title="Explore adjacent showcase studies."
              className="mb-0"
            />
            <Link className="btn btn-secondary" href="/work">
              View all work
            </Link>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {relatedProjects.map((item) => (
              <Link
                key={item.slug}
                href={`/work/${item.slug}`}
                className="premium-panel premium-panel-interactive rounded-[1.75rem] p-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
              >
                <Chip>{item.category}</Chip>
                <h2 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.summary}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
