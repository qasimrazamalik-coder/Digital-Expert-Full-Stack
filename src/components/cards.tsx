import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/site";
import { Chip, Panel } from "@/components/ui";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
    >
      <Panel className="flex h-full flex-col justify-between rounded-[1.75rem] p-6 transition duration-300 group-hover:-translate-y-1 group-hover:border-cyan-300/28 sm:p-7">
        <div>
          <div className="mb-8 flex items-center justify-between">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-cyan-200">
              <Icon size={20} />
            </div>
            <ArrowUpRight size={18} className="text-slate-500 transition group-hover:text-cyan-200" />
          </div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/75">
            {service.eyebrow}
          </p>
          <h3 className="text-2xl font-semibold tracking-[-0.02em] text-white">
            {service.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            {service.summary}
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {service.capabilities.slice(0, 3).map((capability) => (
            <Chip key={capability}>{capability}</Chip>
          ))}
        </div>
      </Panel>
    </Link>
  );
}

export function WorkCard({
  project,
}: {
  project: {
    slug: string;
    title: string;
    type: string;
    category: string;
    summary: string;
    challenge: string;
    direction: string;
    stack: string[];
  };
}) {
  return (
    <Panel className="rounded-[2rem] p-6 sm:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/75">
            {project.type}
          </p>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white">
            {project.title}
          </h3>
          <p className="mt-4 text-base leading-7 text-slate-400">{project.summary}</p>
        </div>
        <Chip>{project.category}</Chip>
      </div>
      <div className="mt-8 grid gap-5 border-t border-white/10 pt-6 md:grid-cols-2">
        <div>
          <h4 className="text-sm font-semibold text-white">Challenge</h4>
          <p className="mt-2 text-sm leading-7 text-slate-400">{project.challenge}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white">Solution direction</h4>
          <p className="mt-2 text-sm leading-7 text-slate-400">{project.direction}</p>
        </div>
      </div>
      <div className="mt-7 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <Chip key={item}>{item}</Chip>
        ))}
      </div>
    </Panel>
  );
}

export function CTASection() {
  return (
    <section className="py-18 lg:py-24">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <Panel className="relative overflow-hidden rounded-[2rem] p-8 sm:p-10 lg:p-12">
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-cyan-300/85">
                Start carefully
              </p>
              <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl">
                Bring us the hard part. We will help shape the right digital path.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
                Tell us what you are building, where the friction is, and what the business needs from the next version.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
            >
              Start a project
            </Link>
          </div>
        </Panel>
      </div>
    </section>
  );
}
