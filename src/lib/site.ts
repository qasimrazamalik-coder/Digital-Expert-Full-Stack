import {
  ArrowUpRight,
  Blocks,
  Layers3,
  MonitorSmartphone,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "Digital Experts",
  url: "https://digitalexperts.dev",
  email: "hello@digitalexperts.dev",
  whatsapp: "+44 0000 000000",
  description:
    "Premium web development and digital solutions agency for serious brands, commerce teams, and product companies.",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  intro: string;
  icon: LucideIcon;
  outcomes: string[];
  idealFor: string[];
  problems: string[];
  deliverables: string[];
  workflow: string[];
  capabilities: string[];
  useCases: string[];
};

export type WorkProject = {
  slug: string;
  title: string;
  type: string;
  category: string;
  summary: string;
  problem: string;
  opportunity: string;
  approach: string[];
  features: string[];
  stack: string[];
  outcome: string;
  suitedFor: string[];
  relatedServices: string[];
  visual: "commerce" | "analytics" | "platform";
};

export const services: Service[] = [
  {
    slug: "shopify-development",
    title: "Shopify Development",
    eyebrow: "Commerce engineering",
    summary:
      "High-performing Shopify storefronts, theme systems, migrations, and integrations built for conversion and long-term maintainability.",
    intro:
      "We design and engineer Shopify experiences that give commerce teams more control, faster storefronts, cleaner operations, and a stronger path from product discovery to checkout.",
    icon: ShoppingBag,
    outcomes: [
      "Faster buying journeys with cleaner merchandising patterns",
      "Theme systems that marketing teams can use without breaking design quality",
      "Reduced app bloat through careful integration and performance review",
    ],
    idealFor: [
      "Premium brands outgrowing off-the-shelf themes",
      "Teams planning a Shopify or Shopify Plus redesign",
      "Stores with conversion, speed, or operational friction",
    ],
    problems: [
      "Generic templates that make the brand feel interchangeable",
      "Slow product pages, bloated scripts, and fragile app stacks",
      "Checkout and content flows that do not support how customers decide",
    ],
    deliverables: [
      "Custom theme architecture",
      "Section and block library",
      "App integration review",
      "Performance pass",
      "Launch support and handover",
    ],
    workflow: [
      "Audit the current buying journey and technical stack",
      "Define merchandising, content, and conversion priorities",
      "Design key templates and reusable commerce sections",
      "Build, QA, measure, and prepare the store team for launch",
    ],
    capabilities: ["Shopify", "Shopify Plus", "Liquid", "Headless commerce", "Subscriptions", "Analytics"],
    useCases: ["Premium storefront redesign", "Theme rebuild", "Migration to Shopify", "Conversion-focused product page system"],
  },
  {
    slug: "wordpress-development",
    title: "WordPress Development",
    eyebrow: "WordPress engineering",
    summary:
      "Custom WordPress development with considered content architecture, clean editing workflows, and durable front-end implementation.",
    intro:
      "We build WordPress for organizations that need publishing flexibility without sacrificing speed, accessibility, security, or brand expression.",
    icon: MonitorSmartphone,
    outcomes: [
      "A CMS your team can actually manage",
      "Custom blocks that protect design quality",
      "Cleaner performance and maintenance than page-builder-heavy builds",
    ],
    idealFor: ["Professional services firms", "B2B companies", "Content-led brands", "Organizations refreshing an aging CMS"],
    problems: ["Messy editing experiences", "Slow page-builder sites", "Inconsistent page layouts", "Security and plugin risk"],
    deliverables: ["Information architecture", "Custom theme", "Block library", "CMS training", "Security baseline"],
    workflow: ["Plan content models", "Prototype key page systems", "Build reusable editor blocks", "Migrate and QA content", "Launch with training"],
    capabilities: ["WordPress", "ACF", "Gutenberg", "WooCommerce", "Technical SEO", "Performance tuning"],
    useCases: ["Corporate website", "Knowledge hub", "Professional services website", "Marketing site rebuild"],
  },
  {
    slug: "custom-website-development",
    title: "Custom Website Development",
    eyebrow: "Custom web engineering",
    summary:
      "Bespoke websites and web applications for brands that need more control than templates or generic site builders can provide.",
    intro:
      "When a generic website cannot carry the brand, workflow, or customer journey, we design and build custom web experiences around the real goals your business depends on.",
    icon: Blocks,
    outcomes: ["Distinct brand experience", "Cleaner interfaces for complex content", "Scalable foundations for future growth"],
    idealFor: ["Brands outgrowing templates", "Teams building conversion-focused websites", "Companies needing custom front-end behavior"],
    problems: ["Generic page layouts", "Disconnected systems", "Poor content flexibility", "Sites that do not match the business workflow"],
    deliverables: ["Website strategy", "UX flows", "Custom front-end build", "CMS or API integration", "Launch-ready page system"],
    workflow: ["Map goals and content needs", "Plan the page system", "Design core templates", "Build reusable sections", "Test, optimize, and launch"],
    capabilities: ["Next.js", "React", "TypeScript", "CMS integration", "APIs", "Performance"],
    useCases: ["Marketing website", "Service website", "Client portal", "Interactive landing page system"],
  },
  {
    slug: "saas-product-development",
    title: "SaaS Product Development",
    eyebrow: "From MVP to mature UI",
    summary:
      "SaaS interfaces, product systems, onboarding flows, dashboards, and front-end architecture built for serious product teams.",
    intro:
      "We help SaaS teams turn product strategy into interfaces that feel clear, credible, and commercially useful from the first session.",
    icon: Layers3,
    outcomes: ["Sharper product positioning in the interface", "Reusable UI systems", "Better activation and feature comprehension"],
    idealFor: ["Founders preparing an MVP", "Teams redesigning a dated SaaS UI", "Product companies needing front-end velocity"],
    problems: ["Feature-heavy screens without hierarchy", "Inconsistent components", "Weak onboarding", "Prototype-to-production gaps"],
    deliverables: ["Product UX audit", "Design system foundations", "Application UI", "Onboarding flow", "Front-end implementation"],
    workflow: ["Clarify product jobs", "Structure core flows", "Design the interface system", "Implement key screens", "Measure and iterate"],
    capabilities: ["SaaS dashboards", "Design systems", "React", "Next.js", "Product onboarding", "Role-based UI"],
    useCases: ["MVP build", "Dashboard redesign", "Account setup flow", "Feature launch interface"],
  },
];

export const work: WorkProject[] = [
  {
    slug: "luxury-fashion-store",
    title: "Luxury Fashion Store",
    type: "Internal showcase",
    category: "Shopify / Premium Commerce",
    summary:
      "A luxury commerce concept exploring how a fashion storefront can feel editorial, fast, and conversion-aware without becoming visually loud.",
    problem:
      "Premium fashion brands often need richer storytelling than standard product grids, but heavy editorial pages can slow down the path to purchase and make merchandising difficult for internal teams.",
    opportunity:
      "Create a storefront system that protects brand atmosphere while giving commerce teams practical control over product launches, collections, and campaign storytelling.",
    approach: [
      "Frame the shopping journey around collection intent, product detail, and quiet conversion cues rather than aggressive sales patterns.",
      "Design modular editorial blocks that can be reused by the commerce team without breaking the visual system.",
      "Keep motion, imagery treatment, and product information restrained so the interface supports luxury perception instead of competing with it.",
    ],
    features: [
      "Editorial collection landing system",
      "Premium product detail layout",
      "Campaign-ready content sections",
      "Performance-aware media treatment",
      "Checkout path and cart UX review",
    ],
    stack: ["Shopify", "Liquid", "Theme architecture", "Performance UX", "Analytics"],
    outcome:
      "A polished commerce direction that demonstrates how Shopify can support a premium brand experience while staying manageable for a lean in-house team.",
    suitedFor: [
      "Fashion and lifestyle brands outgrowing generic Shopify themes",
      "Commerce teams preparing seasonal launches",
      "Brands that need a more editorial product discovery experience",
    ],
    relatedServices: ["shopify-development", "custom-website-development"],
    visual: "commerce",
  },
  {
    slug: "saas-analytics-dashboard",
    title: "SaaS Analytics Dashboard",
    type: "Concept case study",
    category: "SaaS Product / Data UI",
    summary:
      "A dense but calm analytics interface concept for product teams that need decision-ready dashboards rather than decorative charts.",
    problem:
      "SaaS dashboards can become cluttered quickly: too many cards, inconsistent states, unclear priorities, and charts that look impressive but do not help teams act.",
    opportunity:
      "Use interface hierarchy, data grouping, and product system rules to make repeated dashboard use feel clear, fast, and confident.",
    approach: [
      "Define the primary decisions each dashboard view needs to support before designing the visual system.",
      "Create reusable status, filter, table, and chart patterns that maintain clarity across dense screens.",
      "Balance premium visual polish with operational readability so the UI feels sophisticated without becoming precious.",
    ],
    features: [
      "Executive overview screen",
      "Segmented analytics filters",
      "Reusable metric card system",
      "Responsive data table treatment",
      "Empty, loading, and priority states",
    ],
    stack: ["Next.js", "React", "TypeScript", "Design system", "Data visualization"],
    outcome:
      "A product interface direction for teams that need dashboard density, hierarchy, and visual credibility in the same system.",
    suitedFor: [
      "SaaS teams redesigning a dated dashboard",
      "Founders turning prototype screens into a product UI",
      "Product teams needing a scalable interface system",
    ],
    relatedServices: ["saas-product-development", "custom-website-development"],
    visual: "analytics",
  },
  {
    slug: "growth-agency-platform",
    title: "Growth Agency Platform",
    type: "Internal concept",
    category: "WordPress / Web Application",
    summary:
      "A platform concept for a specialist growth agency combining a premium marketing site, insight publishing, and client-facing operational surfaces.",
    problem:
      "Agencies often operate with disconnected marketing pages, scattered insight content, and manual client communication workflows that weaken trust after the first sale.",
    opportunity:
      "Create a credible agency platform that supports positioning, publishing, lead qualification, and a cleaner path toward client portal features.",
    approach: [
      "Structure the public site around service clarity, proof of thinking, and deeper conversion paths instead of generic brochure sections.",
      "Design content models that make publishing repeatable while keeping editorial quality high.",
      "Plan the platform so future client portal and reporting features can sit naturally beside the marketing experience.",
    ],
    features: [
      "Service architecture and page system",
      "Editorial insights model",
      "Lead qualification flow",
      "Client portal foundation",
      "Technical SEO and CMS governance",
    ],
    stack: ["WordPress", "ACF", "Gutenberg", "Next.js option", "Technical SEO"],
    outcome:
      "A digital platform direction for agencies that need to look more established while improving the operational experience behind the site.",
    suitedFor: [
      "Specialist agencies repositioning upmarket",
      "Professional service teams with publishing ambitions",
      "Businesses planning a future portal or client dashboard",
    ],
    relatedServices: ["wordpress-development", "custom-website-development"],
    visual: "platform",
  },
];

export const processSteps = [
  {
    title: "Discovery",
    text: "We clarify goals, audiences, constraints, current systems, and what success should look like commercially and operationally.",
  },
  {
    title: "Strategy",
    text: "We turn the brief into a practical plan: page architecture, product flows, content priorities, technical scope, and rollout sequence.",
  },
  {
    title: "Design",
    text: "We establish hierarchy, interface direction, responsive behavior, and the component rules needed for a premium digital experience.",
  },
  {
    title: "Development",
    text: "We build with maintainable front-end architecture, clean integrations, careful accessibility, and performance as a baseline.",
  },
  {
    title: "QA & Optimization",
    text: "We test across breakpoints, browsers, flows, content states, performance budgets, and launch-critical edge cases.",
  },
  {
    title: "Launch",
    text: "We manage the final release path, analytics checks, redirects, DNS coordination, and a practical handover.",
  },
  {
    title: "Support",
    text: "We stay close after launch with improvements, maintenance, and technical stewardship where the business needs it.",
  },
];

export const proofPoints = [
  "Senior-led delivery",
  "Design and engineering together",
  "Clear scope before build",
  "Performance-aware by default",
];

export const footerSocials = [
  { label: "GitHub", href: "https://github.com/qasimrazamalik-coder", icon: ArrowUpRight },
  { label: "Contact", href: "/contact", icon: ArrowUpRight },
  { label: "Work", href: "/work", icon: ArrowUpRight },
];
