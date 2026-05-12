"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { services } from "@/lib/site";
import { Select, TextArea, TextInput } from "@/components/ui";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setError("Please complete your name, email, and project summary.");
      return;
    }

    setError("");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="premium-panel rounded-[2rem] p-8 text-center sm:p-10">
        <div className="mx-auto mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
          <Send size={19} />
        </div>
        <h2 className="text-2xl font-semibold tracking-[-0.02em] text-white">
          Inquiry received.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-400">
          This demo form is ready for backend integration. Your details were validated locally and the success state is working.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="premium-panel rounded-[2rem] p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-300">
          Name
          <TextInput name="name" placeholder="Your name" autoComplete="name" className="mt-2" />
        </label>
        <label className="text-sm font-medium text-slate-300">
          Email
          <TextInput name="email" type="email" placeholder="you@company.com" autoComplete="email" className="mt-2" />
        </label>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-300">
          Service
          <Select name="service" defaultValue="" className="mt-2">
            <option value="" disabled>Choose a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>{service.title}</option>
            ))}
          </Select>
        </label>
        <label className="text-sm font-medium text-slate-300">
          Budget range
          <Select name="budget" defaultValue="" className="mt-2">
            <option value="" disabled>Select a range</option>
            <option>Under GBP 5,000</option>
            <option>GBP 5,000 - GBP 15,000</option>
            <option>GBP 15,000 - GBP 30,000</option>
            <option>GBP 30,000+</option>
            <option>Not sure yet</option>
          </Select>
        </label>
      </div>

      <label className="mt-5 block text-sm font-medium text-slate-300">
        Project summary
        <TextArea name="message" placeholder="What are you building, improving, or trying to solve?" className="mt-2" />
      </label>

      {error ? <p className="mt-4 text-sm text-red-300">{error}</p> : null}

      <button className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
        Send inquiry
        <Send size={16} />
      </button>
    </form>
  );
}
