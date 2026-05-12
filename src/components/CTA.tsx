"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="section-pad bg-[#080c18]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f1729] to-[#0a0f1e] border border-blue-500/15 rounded-3xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/8 via-transparent to-indigo-600/5 rounded-3xl" />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-30 rounded-3xl"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />

          {/* Glow blobs */}
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-blue-500/10 blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-indigo-500/8 blur-[80px] pointer-events-none" />

          <div className="relative z-10 text-center px-8 py-20 sm:py-24">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/8 text-blue-400 text-sm font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Ready when you are
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Let&apos;s build something
              <br />
              <span className="text-gradient-blue">worth showing off.</span>
            </h2>

            <p className="text-slate-400 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed mb-10">
              Tell us about your project. We&apos;ll respond within one business
              day with honest thoughts and a clear path forward.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold text-base transition-all duration-200 hover:shadow-2xl hover:shadow-blue-500/30"
              >
                Start a Conversation
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <a
                href="mailto:hello@digitalexperts.dev"
                className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
              >
                Or email us directly
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
