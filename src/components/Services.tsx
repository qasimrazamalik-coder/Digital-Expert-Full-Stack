"use client";

import { motion, type Variants } from "framer-motion";
import {
  ShoppingBag,
  Globe,
  Code2,
  LayoutDashboard,
  Wrench,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: ShoppingBag,
    title: "Shopify Development",
    description:
      "Custom Shopify themes, app integrations, and performance-tuned storefronts that convert browsers into buyers.",
    tags: ["Theme Development", "App Integration", "Headless Commerce"],
  },
  {
    icon: Globe,
    title: "WordPress Websites",
    description:
      "Fast, scalable WordPress sites built with clean code, ACF, and custom block editors - no bloated page builders.",
    tags: ["Custom Themes", "Gutenberg Blocks", "WooCommerce"],
  },
  {
    icon: Code2,
    title: "Custom Web Apps",
    description:
      "Full-stack web applications built with React and Next.js - scalable architecture, clean APIs, and great UX.",
    tags: ["React / Next.js", "REST & GraphQL APIs", "PostgreSQL / Supabase"],
  },
  {
    icon: LayoutDashboard,
    title: "SaaS UI / UX Design",
    description:
      "Product design for SaaS platforms - from wireframes to polished interfaces that users actually enjoy using.",
    tags: ["Design Systems", "Component Libraries", "Figma Handoff"],
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Ongoing care plans that keep your site secure, up to date, and running at peak performance month after month.",
    tags: ["Security Patches", "Uptime Monitoring", "Priority Support"],
  },
  {
    icon: Zap,
    title: "Performance Optimisation",
    description:
      "Core Web Vitals audits, image optimisation, caching strategies, and code splitting to maximise your Lighthouse scores.",
    tags: ["Core Web Vitals", "CDN & Caching", "Lighthouse Audits"],
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section id="services" className="section-pad">
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
            What we do
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
            Services built for
            <br />
            <span className="text-gradient">modern businesses.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Every engagement is tailored. We don&apos;t do cookie-cutter -
            we build what your business actually needs.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={card}
                className="group glass-light rounded-2xl p-7 hover:border-blue-500/20 transition-all duration-300 hover:glow-blue cursor-default"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:bg-blue-500/15 transition-colors">
                  <Icon size={20} className="text-blue-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2.5">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-slate-500 border border-white/8 rounded-full px-3 py-1 bg-white/[0.03]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
