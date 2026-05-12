import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service, WorkProject } from "@/lib/site";
import { ButtonLink, Chip, Panel } from "@/components/ui";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block rounded-[1.75rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
    >
      <Panel className="premium-panel-interactive flex h-full flex-col justify-between rounded-[1.75rem] p-6 sm:p-7">
        <div className="relative z-10">
          <div className="mb-8 flex items-center justify-between">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-cyan-200 transition group-hover:border-cyan-300/30 group-hover:bg-cyan-300/10">
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
        <div className="relative z-10 mt-8 flex flex-wrap gap-2">
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
  project: WorkProject;
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block rounded-[2rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
    >
      <Panel className="premium-panel-interactive rounded-[2rem] p-5 sm:p-6 lg:p-7">
        <div className="relative z-10 grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <WorkMockup variant={project.visual} title={project.title} />
          <div className="flex flex-col justify-between">
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <Chip>{project.type}</Chip>
                <Chip>{project.category}</Chip>
              </div>
              <h3 className="text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                {project.title}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
                {project.summary}
              </p>
            </div>
            <div className="mt-8 grid gap-5 border-t border-white/10 pt-6 md:grid-cols-2">
              <div>
                <h4 className="text-sm font-semibold text-white">Opportunity</h4>
                <p className="mt-2 text-sm leading-7 text-slate-400">{project.opportunity}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Stack</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.slice(0, 4).map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </div>
            </div>
            <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 transition group-hover:text-white">
              Read case study
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Panel>
    </Link>
  );
}

export function WorkMockup({
  variant,
  title,
  size = "card",
}: {
  variant: WorkProject["visual"];
  title: string;
  size?: "card" | "hero";
}) {
  const isHero = size === "hero";

  return (
    <div
      aria-label={`${title} visual system preview`}
      className={`relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#050914] ${
        isHero ? "min-h-[26rem] p-5 sm:p-7" : "min-h-[22rem] p-4 sm:p-5"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(98,212,255,0.16),transparent_18rem)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/40 to-transparent" />
      {variant === "commerce" ? <CommerceMockup isHero={isHero} /> : null}
      {variant === "analytics" ? <AnalyticsMockup isHero={isHero} /> : null}
      {variant === "platform" ? <PlatformMockup isHero={isHero} /> : null}
    </div>
  );
}

function CommerceMockup({ isHero }: { isHero: boolean }) {
  return (
    <div className="relative z-10 grid h-full gap-4">
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
        <div className="h-2 w-24 rounded-full bg-white/70" />
        <div className="flex gap-2">
          <span className="h-2 w-8 rounded-full bg-cyan-200/70" />
          <span className="h-2 w-8 rounded-full bg-white/25" />
        </div>
      </div>
      <div className={`grid gap-4 ${isHero ? "sm:grid-cols-[1.1fr_0.9fr]" : ""}`}>
        <div className="rounded-[1.25rem] border border-white/10 bg-gradient-to-br from-slate-200/16 to-slate-400/5 p-5">
          <div className="mb-14 h-4 w-28 rounded-full bg-cyan-200/70" />
          <div className="mt-auto space-y-3">
            <div className="h-6 w-3/4 rounded-full bg-white/80" />
            <div className="h-3 w-1/2 rounded-full bg-white/28" />
            <div className="h-10 w-36 rounded-full bg-cyan-100/85" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.045] p-3">
              <div className="mb-9 h-16 rounded-xl bg-white/[0.06]" />
              <div className="h-2 w-2/3 rounded-full bg-white/50" />
              <div className="mt-2 h-2 w-1/2 rounded-full bg-white/20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AnalyticsMockup({ isHero }: { isHero: boolean }) {
  return (
    <div className="relative z-10 grid h-full gap-4">
      <div className={`grid gap-3 ${isHero ? "sm:grid-cols-4" : "grid-cols-2"}`}>
        {["Revenue", "Users", "Health", "Risk"].map((label, index) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
            <div className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-500">{label}</div>
            <div className="mt-4 h-5 w-16 rounded-full bg-white/75" />
            <div className={`mt-4 h-1.5 rounded-full ${index % 2 ? "bg-cyan-200/70" : "bg-white/20"}`} />
          </div>
        ))}
      </div>
      <div className="grid flex-1 gap-4 sm:grid-cols-[1fr_0.72fr]">
        <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.035] p-5">
          <div className="mb-8 flex items-end gap-2">
            {[38, 58, 44, 76, 62, 88, 69].map((height) => (
              <span key={height} className="w-full rounded-t-lg bg-cyan-200/60" style={{ height }} />
            ))}
          </div>
          <div className="grid gap-2">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl bg-white/[0.04] p-3">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-200" />
                <span className="h-2 w-1/2 rounded-full bg-white/35" />
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.035] p-5">
          <div className="h-32 rounded-full border-[18px] border-cyan-200/55 border-r-white/10 border-t-white/15" />
          <div className="mt-6 space-y-3">
            <div className="h-2 rounded-full bg-white/35" />
            <div className="h-2 w-2/3 rounded-full bg-white/18" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PlatformMockup({ isHero }: { isHero: boolean }) {
  return (
    <div className="relative z-10 grid h-full gap-4">
      <div className="grid gap-4 sm:grid-cols-[0.42fr_1fr]">
        <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-4">
          <div className="mb-6 h-3 w-20 rounded-full bg-white/55" />
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="mb-3 h-9 rounded-xl bg-white/[0.045]" />
          ))}
        </div>
        <div className="rounded-[1.25rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.025] p-5">
          <div className="mb-12 h-4 w-28 rounded-full bg-cyan-200/70" />
          <div className="h-7 w-4/5 rounded-full bg-white/80" />
          <div className="mt-3 h-3 w-2/3 rounded-full bg-white/22" />
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="h-20 rounded-2xl border border-white/10 bg-white/[0.04]" />
            ))}
          </div>
        </div>
      </div>
      {isHero ? (
        <div className="grid gap-4 sm:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
              <div className="h-3 w-24 rounded-full bg-white/45" />
              <div className="mt-8 h-2 w-full rounded-full bg-cyan-200/45" />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function CTASection() {
  return (
    <section className="py-18 lg:py-24">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <Panel className="premium-panel-interactive relative overflow-hidden rounded-[2rem] p-8 sm:p-10 lg:p-12">
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
            <ButtonLink href="/contact">Start a project</ButtonLink>
          </div>
        </Panel>
      </div>
    </section>
  );
}
