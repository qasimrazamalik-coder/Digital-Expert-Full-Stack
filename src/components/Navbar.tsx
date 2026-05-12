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
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
              className={`nav-link px-4 py-2 text-sm font-medium ${
                isActive(pathname, item.href)
                  ? "nav-link-active"
                  : ""
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
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`nav-link rounded-2xl px-4 py-3 text-base font-medium ${
                  isActive(pathname, item.href)
                    ? "nav-link-active"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link className="btn btn-primary mt-2 rounded-2xl px-4 py-3 text-base" href="/contact" onClick={() => setOpen(false)}>
              Start a project
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
