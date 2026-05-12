import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTASection, ServiceCard } from "@/components/cards";
import { Chip, Container, PageHeader, Panel, Section, SectionIntro } from "@/components/ui";
import { services } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
    openGraph: {
      title: `${service.title} | Digital Experts`,
      description: service.summary,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const Icon = service.icon;
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_22rem] lg:items-end">
            <PageHeader eyebrow={service.eyebrow} title={service.title} text={service.intro} />
            <Panel className="rounded-[2rem] p-7">
              <div className="mb-7 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
                <Icon size={24} />
              </div>
              <p className="text-sm leading-7 text-slate-400">{service.summary}</p>
            </Panel>
          </div>
        </Container>
      </Section>

      <Section className="bg-[#060b13]">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            <Panel className="premium-panel-interactive rounded-[1.75rem] p-7">
              <h2 className="text-xl font-semibold text-white">Who it is for</h2>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-400">
                {service.idealFor.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </Panel>
            <Panel className="premium-panel-interactive rounded-[1.75rem] p-7">
              <h2 className="text-xl font-semibold text-white">Problems solved</h2>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-400">
                {service.problems.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </Panel>
            <Panel className="premium-panel-interactive rounded-[1.75rem] p-7">
              <h2 className="text-xl font-semibold text-white">Business outcomes</h2>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-400">
                {service.outcomes.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </Panel>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionIntro
              eyebrow="Delivery"
              title="Substantive work, clearly packaged."
              text="Each engagement is scoped around the exact platform, product, and business constraint rather than a generic checklist."
            />
            <div className="grid gap-5">
              <Panel className="premium-panel-interactive rounded-[1.75rem] p-7">
                <h2 className="text-xl font-semibold text-white">Deliverables</h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.deliverables.map((item) => <Chip key={item}>{item}</Chip>)}
                </div>
              </Panel>
              <Panel className="premium-panel-interactive rounded-[1.75rem] p-7">
                <h2 className="text-xl font-semibold text-white">Workflow</h2>
                <ol className="mt-5 space-y-4">
                  {service.workflow.map((item, index) => (
                    <li key={item} className="grid grid-cols-[2.5rem_1fr] gap-4 text-sm leading-7 text-slate-400">
                      <span className="font-semibold text-cyan-200">0{index + 1}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </Panel>
              <Panel className="premium-panel-interactive rounded-[1.75rem] p-7">
                <h2 className="text-xl font-semibold text-white">Capabilities</h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.capabilities.map((item) => <Chip key={item}>{item}</Chip>)}
                </div>
              </Panel>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-[#060b13]">
        <Container>
          <SectionIntro eyebrow="Use cases" title="Where this service usually creates leverage." />
          <div className="grid gap-4 md:grid-cols-4">
            {service.useCases.map((item) => (
              <Panel key={item} className="premium-panel-interactive rounded-3xl p-6">
                <p className="text-base font-semibold leading-7 text-white">{item}</p>
              </Panel>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro eyebrow="Related services" title="Often paired with this work." />
          <div className="grid gap-5 md:grid-cols-3">
            {related.map((item) => <ServiceCard key={item.slug} service={item} />)}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
