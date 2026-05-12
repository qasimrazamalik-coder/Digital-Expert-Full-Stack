import Image from "next/image";
import Link from "next/link";
import { footerSocials, navItems, services, site } from "@/lib/site";
import { Container } from "@/components/ui";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050912]">
      <Container className="py-14 lg:py-18">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="brand-link inline-flex items-center gap-3 rounded-full transition hover:opacity-90">
              <Image src="/brand/logo-mark.svg" alt="Digital Experts" width={40} height={40} />
              <span className="text-base font-semibold tracking-[-0.02em] text-white">Digital Experts</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Premium web development and digital solutions for brands and product teams that need thoughtful strategy, polished interfaces, and reliable implementation.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Pages</h2>
            <ul className="mt-4 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link className="text-sm text-slate-400 transition hover:text-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Services</h2>
            <ul className="mt-4 space-y-3">
              {services.slice(0, 5).map((serviceItem) => (
                <li key={serviceItem.slug}>
                  <Link className="text-sm text-slate-400 transition hover:text-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200" href={`/services/${serviceItem.slug}`}>
                    {serviceItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Contact</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <a className="block transition hover:text-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <a className="block transition hover:text-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200" href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}>
                WhatsApp
              </a>
              <div className="flex gap-3 pt-2">
                {footerSocials.map((social) => {
                  const Icon = social.icon;
                  const className = "nav-link inline-flex h-9 w-9 items-center justify-center text-slate-300 hover:border-cyan-300/40 hover:text-white";

                  return social.href.startsWith("/") ? (
                    <Link key={social.label} href={social.href} aria-label={social.label} className={className}>
                      <Icon size={15} />
                    </Link>
                  ) : (
                    <a key={social.label} href={social.href} aria-label={social.label} className={className}>
                      <Icon size={15} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) {new Date().getFullYear()} Digital Experts. All rights reserved.</p>
          <p>Strategy, design, engineering, and long-term support.</p>
        </div>
      </Container>
    </footer>
  );
}
