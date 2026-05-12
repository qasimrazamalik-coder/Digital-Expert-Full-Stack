import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/site";
import { Chip, Panel } from "@/components/ui";

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
