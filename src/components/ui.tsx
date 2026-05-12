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
    <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-cyan-200/85">
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
      <h1 className="balance text-5xl font-semibold leading-[0.94] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
        {title}
      </h1>
      {text ? (
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300/86 sm:text-xl sm:leading-9">
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
      <h2 className="balance text-3xl font-semibold leading-[1.02] tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {text ? <p className="mt-5 max-w-[42rem] text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{text}</p> : null}
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
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "btn-ghost",
  };

  return (
    <Link
      href={href}
      className={`btn group ${variants[variant]} ${className}`}
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

export function PanelLink({
  href,
  children,
  className = "",
}: ContainerProps & { href: string }) {
  return (
    <Link
      href={href}
      className={`premium-panel premium-panel-interactive block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200 ${className}`}
    >
      {children}
    </Link>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="chip">
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
