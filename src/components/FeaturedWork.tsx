"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    label: "E-commerce",
    title: "Artisan Goods Co.",
    description:
      "A Shopify storefront redesign for a premium homeware brand - custom theme, 3D product viewer integration, and checkout optimisation resulting in a 34% increase in conversion rate.",
    stack: ["Shopify", "Liquid", "Alpine.js", "Three.js"],
    metric: "+34% CVR",
    color: "from-blue-600/20 to-indigo-600/10",
  },
  {
    label: "SaaS Platform",
    title: "FlowDesk - Project Management",
    description:
      "End-to-end UI/UX design and frontend development for a B2B SaaS project management tool. Full design system, interactive dashboard, and role-based access patterns.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Figma"],
    metric: "0 to 1 product",
    color: "from-violet-600/20 to-purple-600/10",
  },
  {
    label: "Corporate",
    title: "Nexus Legal Partners",
    description:
      "A fast, WCAG-compliant WordPress website for a UK law firm - custom Gutenberg blocks, advanced forms, and a robust CMS for their content team.",
    stack: ["WordPress", "PHP", "ACF", "GSAP"],
    metric: "98 Lighthouse score",
    color: "from-cyan-600/20 to-blue-600/10",
  },
];

export default function FeaturedWork() {
  return (
    <section id="work" className="section-pad">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
        >
          <div>
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Featured Work
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              What we&apos;ve
              <br />
              <span className="text-gradient">shipped.</span>
            </h2>
          </div>
          <p className="text-slate-400 text-base max-w-sm leading-relaxed">
            A sample of recent projects. Specifics are confidential where
            requested by clients.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.65,
                ease: "easeOut",
              }}
              className="group relative glass-light rounded-2xl p-8 sm:p-10 overflow-hidden hover:border-white/10 transition-all duration-300"
            >
              {/* BG gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-8">
                {/* Left */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1">
                      {project.label}
                    </span>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1">
                      {project.metric}
                    </span>
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-base leading-relaxed max-w-2xl">
                    {project.description}
                  </p>
                </div>

                {/* Right */}
                <div className="flex flex-col gap-4 lg:items-end lg:min-w-[200px]">
                  <div className="flex flex-wrap gap-2 lg:justify-end">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-slate-400 border border-white/8 rounded-full px-3 py-1 bg-white/[0.03]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="inline-flex items-center gap-2 text-sm text-slate-400 group-hover:text-white transition-colors font-medium">
                    View case study{" "}
                    <ExternalLink
                      size={14}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
