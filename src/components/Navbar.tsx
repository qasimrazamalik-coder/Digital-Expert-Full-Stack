"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/site";
import { ButtonLink } from "@/components/ui";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/10 bg-[#060b14]/82 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1220px] items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200">
          <Image src="/brand/logo-mark.svg" alt="Digital Experts" width={40} height={40} priority />
          <span className="text-sm font-semibold tracking-tight text-white sm:text-base">
            Digital Experts
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive(pathname, item.href)
                  ? "bg-white text-slate-950"
                  : "text-slate-300 hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/contact" variant="secondary">Start a project</ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200 lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[#060b14]/96 px-5 py-5 backdrop-blur-xl lg:hidden">
          <nav aria-label="Mobile navigation" className="mx-auto grid max-w-[1220px] gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-2xl px-4 py-3 text-base font-medium ${
                  isActive(pathname, item.href)
                    ? "bg-white text-slate-950"
                    : "text-slate-300 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link className="mt-2 rounded-2xl bg-white px-4 py-3 text-center text-base font-semibold text-slate-950" href="/contact">
              Start a project
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
