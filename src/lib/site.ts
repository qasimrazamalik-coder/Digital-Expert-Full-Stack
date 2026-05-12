import {
  ArrowUpRight,
  Blocks,
  Gauge,
  Layers3,
  LifeBuoy,
  MonitorSmartphone,
  PenTool,
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
    slug: "wordpress-websites",
    title: "WordPress Websites",
    eyebrow: "Editorial CMS builds",
    summary:
      "Custom WordPress websites with considered content architecture, clean editing workflows, and durable front-end implementation.",
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
    slug: "custom-web-applications",
    title: "Custom Web Applications",
    eyebrow: "Product engineering",
    summary:
      "Bespoke web applications for operations, portals, dashboards, internal tools, and customer-facing digital products.",
    intro:
      "When a generic tool cannot carry the workflow, we design and build focused web applications around the real processes your business depends on.",
    icon: Blocks,
    outcomes: ["Purpose-built workflows", "Cleaner interfaces for complex tasks", "Scalable foundations for future product decisions"],
    idealFor: ["Businesses replacing spreadsheet-heavy operations", "Teams building client portals", "Companies validating a new digital product"],
    problems: ["Manual processes", "Disconnected systems", "Poor data visibility", "Tools that do not match the team workflow"],
    deliverables: ["Product brief", "UX flows", "Front-end application", "API integration", "Admin/dashboard interfaces"],
    workflow: ["Map workflows", "Prioritize the MVP", "Design core screens", "Build in thin vertical slices", "Test with real users"],
    capabilities: ["Next.js", "React", "TypeScript", "APIs", "Authentication", "Dashboards"],
    useCases: ["Client portal", "Internal operations system", "Booking platform", "Data dashboard"],
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
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    eyebrow: "Interface direction",
    summary:
      "Strategic interface design for websites and products, balancing brand perception, usability, and conversion clarity.",
    intro:
      "We design digital experiences that look premium because the structure is right: clear priorities, thoughtful interaction, and visual systems that can scale.",
    icon: PenTool,
    outcomes: ["Sharper hierarchy", "More confident brand perception", "Interfaces developers can build accurately"],
    idealFor: ["Brands preparing a redesign", "Product teams needing UX direction", "Founders turning ideas into prototypes"],
    problems: ["Generic pages", "Unclear user journeys", "Inconsistent components", "Design that does not translate into production"],
    deliverables: ["UX review", "Wireframes", "High-fidelity UI", "Responsive states", "Design handoff"],
    workflow: ["Define audiences and goals", "Map journeys", "Explore visual direction", "Design core screens", "Document interaction rules"],
    capabilities: ["UX strategy", "Wireframing", "Interface systems", "Responsive design", "Design QA", "Conversion UX"],
    useCases: ["Website redesign", "SaaS interface", "Landing page system", "Prototype for validation"],
  },
  {
    slug: "website-optimization",
    title: "Website Optimization",
    eyebrow: "Performance and conversion",
    summary:
      "Technical, UX, and performance improvements that make existing websites faster, clearer, and easier to convert.",
    intro:
      "Optimization is where design judgment meets engineering discipline. We improve the parts of a site that influence speed, comprehension, trust, and action.",
    icon: Gauge,
    outcomes: ["Better Core Web Vitals", "Cleaner conversion paths", "Reduced friction across key pages"],
    idealFor: ["Sites with slow load times", "Brands with traffic but weak conversion", "Teams preparing campaigns or launches"],
    problems: ["Heavy pages", "Unclear CTAs", "Content hierarchy issues", "Analytics without action"],
    deliverables: ["Performance audit", "UX review", "Technical fixes", "Priority roadmap", "Before/after reporting"],
    workflow: ["Measure current performance", "Identify high-leverage fixes", "Implement carefully", "Retest and document improvements"],
    capabilities: ["Core Web Vitals", "Lighthouse", "Image strategy", "Code splitting", "Analytics review", "Technical SEO"],
    useCases: ["Speed recovery", "Conversion page polish", "Pre-launch optimization", "Technical cleanup sprint"],
  },
  {
    slug: "maintenance-support",
    title: "Maintenance & Support",
    eyebrow: "Long-term care",
    summary:
      "Ongoing technical support, improvements, security updates, and careful stewardship for business-critical websites and products.",
    intro:
      "A serious website needs more than a launch. We keep platforms stable, current, secure, and evolving with the business.",
    icon: LifeBuoy,
    outcomes: ["Reduced operational risk", "Reliable update cadence", "A partner who understands the system over time"],
    idealFor: ["Teams without in-house web engineering", "Businesses with mission-critical websites", "Brands needing ongoing improvement"],
    problems: ["Unmaintained dependencies", "Reactive fixes", "No ownership after launch", "Small issues becoming expensive later"],
    deliverables: ["Maintenance plan", "Security updates", "Priority support", "Monthly improvements", "Technical documentation"],
    workflow: ["Baseline audit", "Stabilize risks", "Create support cadence", "Handle updates and improvements", "Report clearly"],
    capabilities: ["Next.js", "Shopify", "WordPress", "Monitoring", "Security patches", "Small feature delivery"],
    useCases: ["Post-launch support", "Monthly retained improvements", "Security and update care", "Emergency issue response"],
  },
];

export const work = [
  {
    slug: "atelier-commerce-system",
    title: "Atelier Commerce System",
    type: "Concept case study",
    category: "Shopify / Commerce",
    summary:
      "A premium storefront concept for a design-led homeware brand, focused on richer merchandising and a cleaner path to purchase.",
    challenge:
      "The concept explores how a high-consideration product catalog can feel editorial without slowing down the buying journey.",
    direction:
      "We framed the experience around product storytelling, modular collection pages, and restrained conversion cues that support premium positioning.",
    stack: ["Shopify", "Liquid", "Performance UX", "Analytics"],
  },
  {
    slug: "operator-dashboard",
    title: "Operator Dashboard",
    type: "Internal concept",
    category: "SaaS Product",
    summary:
      "A dense but calm SaaS dashboard concept for teams managing multi-step service operations.",
    challenge:
      "Operational interfaces often become visually loud while hiding the decisions teams need to make quickly.",
    direction:
      "We used a tighter information hierarchy, priority states, and reusable interaction patterns for repeated daily use.",
    stack: ["Next.js", "TypeScript", "Design System", "Data UI"],
  },
  {
    slug: "advisory-wordpress-platform",
    title: "Advisory WordPress Platform",
    type: "Sample case study",
    category: "WordPress / CMS",
    summary:
      "A professional services website concept built around credibility, content governance, and a more useful publishing model.",
    challenge:
      "The goal was to move away from generic brochure pages and toward a CMS structure that supports thought leadership.",
    direction:
      "We organized services, insight content, and conversion pathways into a calm editorial system with strong governance.",
    stack: ["WordPress", "ACF", "Gutenberg", "Technical SEO"],
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
  { label: "LinkedIn", href: "#", icon: ArrowUpRight },
  { label: "X", href: "#", icon: ArrowUpRight },
];
