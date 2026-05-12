import { ButtonLink, Panel } from "@/components/ui";

export function CTASection() {
  return (
    <section className="py-20 lg:py-24">
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
