"use client";

import { motion } from "framer-motion";
import { MapPin, Coffee } from "lucide-react";

const values = [
  "Quality over speed",
  "Transparent communication",
  "Ownership mentality",
  "Pragmatic engineering",
  "Long-term thinking",
  "Genuine partnership",
];

const techStack = [
  "Next.js", "React", "TypeScript", "Tailwind CSS",
  "Node.js", "Supabase", "PostgreSQL", "Shopify",
  "WordPress", "Figma", "AWS", "Vercel",
];

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
              About us
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              A small team with
              <br />
              <span className="text-gradient">high standards.</span>
            </h2>
            <div className="space-y-4 text-slate-400 text-base leading-relaxed">
              <p>
                Digital Experts was founded on one belief: that small, focused
                agencies produce better work than large, distracted ones. We
                keep our team lean and our attention undivided.
              </p>
              <p>
                Every project is handled by senior developers and designers -
                not juniors overseen from afar. You get direct access to the
                people building your product.
              </p>
              <p>
                We work with businesses that value craft over shortcuts and
                want a partner who treats their digital presence with the same
                care they do.
              </p>
            </div>

            <div className="flex items-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <MapPin size={15} className="text-blue-400" />
                <span>Remote-first | Worldwide clients</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Coffee size={15} className="text-blue-400" />
                <span>Est. 2018</span>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Values */}
            <div className="glass-light rounded-2xl p-7">
              <h3 className="text-white font-semibold text-base mb-5">
                What we stand for
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {values.map((value) => (
                  <div
                    key={value}
                    className="flex items-center gap-2.5 text-slate-400 text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    {value}
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack */}
            <div className="glass-light rounded-2xl p-7">
              <h3 className="text-white font-semibold text-base mb-5">
                Technologies we work with
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm text-slate-300 border border-white/10 rounded-lg px-3.5 py-1.5 bg-white/[0.04] hover:border-blue-500/30 hover:text-white transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Availability bar */}
            <div className="glass-light rounded-2xl p-6 flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <div>
                <p className="text-white text-sm font-semibold">
                  Currently accepting new projects
                </p>
                <p className="text-slate-500 text-xs mt-0.5">
                  Typical start date: 2-3 weeks from enquiry
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
