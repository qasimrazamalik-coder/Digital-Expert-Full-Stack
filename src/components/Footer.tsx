import Link from "next/link";
import { ExternalLink } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Shopify Development", href: "#services" },
    { label: "WordPress Websites", href: "#services" },
    { label: "Custom Web Apps", href: "#services" },
    { label: "SaaS UI/UX Design", href: "#services" },
    { label: "Maintenance & Support", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Our Process", href: "#process" },
    { label: "Featured Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
};

const socialLinks = ["GitHub", "LinkedIn", "X"];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#080c18]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">DE</span>
              </div>
              <span className="font-semibold text-white text-base tracking-tight">
                Digital<span className="text-blue-400">Experts</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              We build high-performance digital products - from Shopify stores to
              custom SaaS platforms. Quality-first, always.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((label) => (
                <a
                  key={label}
                  href="#"
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all"
                  aria-label={label}
                >
                  <ExternalLink size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white text-sm font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-400 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            (c) {new Date().getFullYear()} Digital Experts. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Built with Next.js | Crafted with care
          </p>
        </div>
      </div>
    </footer>
  );
}
