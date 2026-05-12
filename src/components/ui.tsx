import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1180px] px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
  tight = false,
}: ContainerProps & { tight?: boolean }) {
  return (
    <section className={`${tight ? "py-16 lg:py-20" : "py-20 lg:py-28"} ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-cyan-300/85">
      {children}
    </p>
  );
}

export function PageHeader({
  eyebrow,
  title,
  text,
  children,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  children?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h1 className="balance text-5xl font-semibold leading-[0.96] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
        {title}
      </h1>
      {text ? (
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300/82 sm:text-xl">
          {text}
        </p>
      ) : null}
      {children}
    </div>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  text,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  className?: string;
}) {
  return (
    <div className={`mb-12 max-w-2xl ${className}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="balance text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {text ? <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">{text}</p> : null}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const variants = {
    primary:
      "bg-white text-slate-950 hover:bg-cyan-100 focus-visible:outline-white",
    secondary:
      "border border-white/12 bg-white/[0.04] text-white hover:border-cyan-300/35 hover:bg-cyan-300/10 focus-visible:outline-cyan-200",
    ghost:
      "text-slate-300 hover:text-white focus-visible:outline-cyan-200",
  };

  return (
    <Link
      href={href}
      className={`group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${variants[variant]} ${className}`}
    >
      {children}
      <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

export function Panel({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div className={`premium-panel ${className}`}>
      {children}
    </div>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-xs font-medium text-slate-300">
      {children}
    </span>
  );
}

export function TextInput(props: ComponentPropsWithoutRef<"input">) {
  return (
    <input
      {...props}
      className={`field ${props.className ?? ""}`}
    />
  );
}

export function TextArea(props: ComponentPropsWithoutRef<"textarea">) {
  return (
    <textarea
      {...props}
      className={`field min-h-36 resize-y ${props.className ?? ""}`}
    />
  );
}

export function Select(props: ComponentPropsWithoutRef<"select">) {
  return (
    <select
      {...props}
      className={`field appearance-none ${props.className ?? ""}`}
    />
  );
}
