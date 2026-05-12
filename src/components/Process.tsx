"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Scoping",
    description:
      "We start with a structured brief - goals, constraints, audience, and success metrics. No vague briefs, no wasted sprints. You get a fixed-price proposal before anything starts.",
    duration: "Week 1",
  },
  {
    number: "02",
    title: "Design & Architecture",
    description:
      "Wireframes, design system, component inventory, and technical architecture decisions are locked in before a single line of production code is written.",
    duration: "Weeks 2-3",
  },
  {
    number: "03",
    title: "Build & Iterate",
    description:
      "Development happens in short cycles with working previews shared regularly. You review, we refine. No big-bang reveals at the end.",
    duration: "Weeks 4-8",
  },
  {
    number: "04",
    title: "QA & Optimisation",
    description:
      "Cross-browser testing, accessibility audits, performance profiling, and security review. We don't ship until the Lighthouse scores make us proud.",
    duration: "Week 9",
  },
  {
    number: "05",
    title: "Launch & Handover",
    description:
      "Managed deployment, DNS transition, monitoring setup, and a thorough handover session. You own everything - code, accounts, documentation.",
    duration: "Week 10",
  },
];

export default function Process() {
  return (
    <section id="process" className="section-pad bg-[#080c18]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl mb-16"
        >
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            How we work
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
            A process built for
            <br />
            <span className="text-gradient">predictability.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            No surprises. No scope creep by stealth. You always know where your
            project stands.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-blue-500/10 to-transparent hidden sm:block" />

          <div className="space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.65,
                  ease: "easeOut",
                }}
                className="group relative flex gap-8 items-start"
              >
                {/* Step number node */}
                <div className="relative flex-shrink-0 hidden sm:flex w-16 h-16 rounded-2xl glass-light border border-blue-500/20 group-hover:border-blue-500/40 items-center justify-center transition-all duration-300">
                  <span className="text-blue-400 font-bold text-lg">{step.number}</span>
                </div>

                {/* Content */}
                <div className="flex-1 glass-light rounded-2xl p-7 group-hover:border-white/10 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3 sm:hidden">
                      <span className="text-blue-400 font-bold text-sm">{step.number}</span>
                    </div>
                    <h3 className="text-white font-semibold text-xl">{step.title}</h3>
                    <span className="text-xs font-medium text-slate-500 border border-white/8 rounded-full px-3 py-1 bg-white/[0.03] whitespace-nowrap self-start">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-slate-400 text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
