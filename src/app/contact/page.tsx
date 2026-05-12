import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Container, PageHeader, Panel, Section } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Digital Experts. Send a web development, SaaS, Shopify, WordPress, optimization, or support inquiry.",
};

export default function ContactPage() {
  return (
    <>
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div>
              <PageHeader
                eyebrow="Contact"
                title="Tell us what needs to become sharper, faster, or more useful."
                text="A good first conversation is practical. Share the goal, the current friction, the timeline, and what a successful outcome needs to change for the business."
              />
              <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <Panel className="rounded-3xl p-6">
                  <p className="text-sm text-slate-500">Email</p>
                  <a className="mt-2 block text-lg font-semibold text-white" href={`mailto:${site.email}`}>{site.email}</a>
                </Panel>
                <Panel className="rounded-3xl p-6">
                  <p className="text-sm text-slate-500">WhatsApp</p>
                  <a className="mt-2 block text-lg font-semibold text-white" href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}>Message the studio</a>
                </Panel>
              </div>
            </div>
            <ContactForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
