"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { navItems, services } from "@/lib/site";
import { ButtonLink } from "@/components/ui";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setServicesOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/10 bg-[#050914]/88 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1220px] items-center justify-between px-5 sm:px-8">
        <Link href="/" className="brand-link flex items-center gap-3 rounded-full transition hover:opacity-90">
          <Image src="/brand/favicon.png" alt="Digital Experts" width={38} height={38} priority className="h-9 w-9 sm:h-10 sm:w-10" />
          <span className="text-sm font-semibold tracking-[-0.02em] text-white sm:text-base">
            Digital Experts
          </span>
        </Link>

        <nav aria-label="Main navigation" className="nav-shell hidden items-center gap-1 rounded-full p-1 lg:flex">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);

            if (item.href === "/services") {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setServicesOpen((value) => !value)}
                    aria-expanded={servicesOpen}
                    aria-haspopup="menu"
                    className={`nav-link inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium ${
                      active ? "nav-link-active" : ""
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>

                  {servicesOpen ? (
                    <div
                      role="menu"
                      className="absolute left-1/2 top-[calc(100%+0.85rem)] w-[28rem] -translate-x-1/2 rounded-[1.35rem] border border-[rgba(212,175,55,0.18)] bg-[#0b0907]/96 p-2 shadow-[0_24px_70px_rgba(0,0,0,0.42)] backdrop-blur-xl"
                    >
                      <div className="grid gap-1">
                        <Link
                          href="/services"
                          role="menuitem"
                          onClick={() => setServicesOpen(false)}
                          className="rounded-[1rem] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[rgba(255,248,235,0.065)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)]"
                        >
                          Explore all services
                        </Link>
                        <div className="hairline my-1" />
                        {services.map((service) => {
                          const Icon = service.icon;

                          return (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              role="menuitem"
                              onClick={() => setServicesOpen(false)}
                              className="group grid grid-cols-[2.25rem_1fr] gap-3 rounded-[1rem] px-3 py-3 transition hover:bg-[rgba(255,248,235,0.065)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)]"
                            >
                              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(212,175,55,0.16)] bg-[rgba(255,248,235,0.045)] text-[var(--accent)] transition group-hover:border-[rgba(212,175,55,0.34)] group-hover:bg-[rgba(212,175,55,0.1)]">
                                <Icon size={17} aria-hidden="true" />
                              </span>
                              <span className="min-w-0">
                                <span className="block text-sm font-semibold text-white">{service.title}</span>
                                <span className="mt-0.5 line-clamp-2 block text-xs leading-5 text-[var(--text-soft)]">
                                  {service.summary}
                                </span>
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`nav-link px-4 py-2 text-sm font-medium ${active ? "nav-link-active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/contact" variant="secondary">Start a project</ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="nav-link inline-flex h-11 w-11 items-center justify-center bg-[rgba(248,250,252,0.04)] text-white lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[#050914]/96 px-5 py-5 backdrop-blur-xl lg:hidden">
          <nav aria-label="Mobile navigation" className="mx-auto grid max-w-[1220px] gap-2">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);

              if (item.href === "/services") {
                return (
                  <div key={item.href} className="grid gap-2">
                    <button
                      type="button"
                      onClick={() => setServicesOpen((value) => !value)}
                      aria-expanded={servicesOpen}
                      className={`nav-link flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium ${
                        active ? "nav-link-active" : ""
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>

                    {servicesOpen ? (
                      <div className="grid gap-1 rounded-[1.25rem] border border-[rgba(212,175,55,0.14)] bg-[rgba(255,248,235,0.035)] p-2">
                        <Link
                          href="/services"
                          onClick={() => setOpen(false)}
                          className="rounded-[1rem] px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-[rgba(255,248,235,0.065)]"
                        >
                          Explore all services
                        </Link>
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            onClick={() => setOpen(false)}
                            className="rounded-[1rem] px-3 py-2.5 text-sm font-medium text-[var(--text-soft)] transition hover:bg-[rgba(255,248,235,0.065)] hover:text-white"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`nav-link rounded-2xl px-4 py-3 text-base font-medium ${
                    active ? "nav-link-active" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link className="btn btn-primary mt-2 rounded-2xl px-4 py-3 text-base" href="/contact" onClick={() => setOpen(false)}>
              Start a project
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
