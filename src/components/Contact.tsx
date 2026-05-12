"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MessageSquare, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email us",
    value: "hello@digitalexperts.dev",
    sub: "We reply within 1 business day",
  },
  {
    icon: MessageSquare,
    label: "Quick chat",
    value: "Book a 30-min call",
    sub: "No commitment, just a conversation",
  },
  {
    icon: Clock,
    label: "Response time",
    value: "< 24 hours",
    sub: "Mon-Fri, 9am-6pm GMT",
  },
];

const budgetOptions = [
  "Under GBP 5,000",
  "GBP 5,000 - GBP 15,000",
  "GBP 15,000 - GBP 30,000",
  "GBP 30,000+",
  "Not sure yet",
];

const serviceOptions = [
  "Shopify Development",
  "WordPress Website",
  "Custom Web App",
  "SaaS UI/UX Design",
  "Maintenance & Support",
  "Performance Optimisation",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - integrate your preferred backend/form service here
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-pad">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl mb-14"
        >
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Get in touch
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
            Start your project
            <br />
            <span className="text-gradient">today.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Fill in the form and we&apos;ll follow up with a structured brief
            questionnaire and a no-obligation proposal.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="glass-light rounded-2xl p-6 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs mb-0.5">{item.label}</p>
                    <p className="text-white text-sm font-semibold">{item.value}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{item.sub}</p>
                  </div>
                </div>
              );
            })}

            <div className="glass-light rounded-2xl p-6">
              <p className="text-slate-400 text-sm leading-relaxed">
                Not ready to commit yet?{" "}
                <span className="text-white">That&apos;s fine.</span> Send us a
                rough idea and we&apos;ll give you an honest sense of what&apos;s
                involved - no sales pitch.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="glass-light rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-5">
                  <Send size={22} className="text-emerald-400" />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">
                  Message sent!
                </h3>
                <p className="text-slate-400 text-sm max-w-sm">
                  Thanks for reaching out. We&apos;ll review your project details
                  and be in touch within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-light rounded-2xl p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wide">
                      Your name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-white/[0.04] border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wide">
                      Email address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-white/[0.04] border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wide">
                      Service needed
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full bg-white/[0.04] border border-white/8 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 transition-all appearance-none cursor-pointer"
                      style={{ color: formData.service ? "#f8fafc" : "#475569" }}
                    >
                      <option value="" disabled>
                        Select a service...
                      </option>
                      {serviceOptions.map((s) => (
                        <option
                          key={s}
                          value={s}
                          style={{ background: "#0f1729", color: "#f8fafc" }}
                        >
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wide">
                      Budget range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="w-full bg-white/[0.04] border border-white/8 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 transition-all appearance-none cursor-pointer"
                      style={{ color: formData.budget ? "#f8fafc" : "#475569" }}
                    >
                      <option value="" disabled>
                        Select budget...
                      </option>
                      {budgetOptions.map((b) => (
                        <option
                          key={b}
                          value={b}
                          style={{ background: "#0f1729", color: "#f8fafc" }}
                        >
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wide">
                    Tell us about your project *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="What are you building? What's the main challenge or goal? What does success look like?"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-white/[0.04] border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold text-base transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/25"
                >
                  Send Message
                  <Send
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </button>

                <p className="text-slate-600 text-xs text-center">
                  No spam. No sales calls without your consent. Your information
                  is kept private.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
