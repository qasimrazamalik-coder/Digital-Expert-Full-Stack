"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, MessageSquare, TrendingUp, ShieldCheck, Users } from "lucide-react";

const reasons = [
  {
    icon: CheckCircle2,
    title: "Quality without compromise",
    description:
      "We write clean, maintainable code with thorough testing. No shortcuts. No technical debt handed off to you.",
  },
  {
    icon: Clock,
    title: "Reliable timelines",
    description:
      "We scope projects carefully and communicate proactively. Deadlines are commitments, not suggestions.",
  },
  {
    icon: MessageSquare,
    title: "Clear communication",
    description:
      "You get a single point of contact, regular updates, and access to a shared project board throughout the build.",
  },
  {
    icon: TrendingUp,
    title: "Conversion-focused thinking",
    description:
      "We don't just make things look good - every decision is measured against whether it helps your business grow.",
  },
  {
    icon: ShieldCheck,
    title: "Security & compliance",
    description:
      "GDPR-aware builds, secure authentication patterns, and hardened server configurations come standard.",
  },
  {
    icon: Users,
    title: "Long-term partnership",
    description:
      "Our best client relationships span years, not sprints. We invest in understanding your business deeply.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section-pad bg-[#080c18]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:sticky lg:top-28"
          >
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Why Digital Experts
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              The agency that
              <br />
              <span className="text-gradient">actually delivers.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              We&apos;ve heard the horror stories - missed deadlines, bloated
              codebases, agencies that disappear after launch. We&apos;re built
              differently.
            </p>
            <div className="p-6 glass-light rounded-2xl border-l-2 border-blue-500">
              <p className="text-slate-300 text-base leading-relaxed italic">
                &ldquo;What sets a great agency apart isn&apos;t just technical
                skill - it&apos;s the discipline to do things properly, and the
                integrity to say no when something isn&apos;t right.&rdquo;
              </p>
              <p className="text-slate-500 text-sm mt-3">- Our founding principle</p>
            </div>
          </motion.div>

          {/* Right: reasons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="glass-light rounded-2xl p-6 hover:border-white/10 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
