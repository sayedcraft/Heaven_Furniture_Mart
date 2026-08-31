"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  inquiry: "Custom furniture",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  function handleChange(event) {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
    setSent(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
    setForm(initialForm);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t border-[var(--line)] pt-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="text-xs uppercase tracking-[0.14em] text-[var(--brown)]">
          Name
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            className="mt-3 w-full border-b border-[var(--line)] bg-transparent px-0 py-3 text-sm normal-case tracking-normal text-[var(--deep-brown)] outline-none transition-colors placeholder:text-[var(--brown)]/50 focus:border-[var(--brass)]"
            placeholder="Your name"
          />
        </label>
        <label className="text-xs uppercase tracking-[0.14em] text-[var(--brown)]">
          Phone
          <input
            required
            name="phone"
            value={form.phone}
            onChange={handleChange}
            type="tel"
            autoComplete="tel"
            className="mt-3 w-full border-b border-[var(--line)] bg-transparent px-0 py-3 text-sm normal-case tracking-normal text-[var(--deep-brown)] outline-none transition-colors placeholder:text-[var(--brown)]/50 focus:border-[var(--brass)]"
            placeholder="Your phone number"
          />
        </label>
        <label className="text-xs uppercase tracking-[0.14em] text-[var(--brown)]">
          Email
          <input
            required
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            autoComplete="email"
            className="mt-3 w-full border-b border-[var(--line)] bg-transparent px-0 py-3 text-sm normal-case tracking-normal text-[var(--deep-brown)] outline-none transition-colors placeholder:text-[var(--brown)]/50 focus:border-[var(--brass)]"
            placeholder="you@example.com"
          />
        </label>
        <label className="text-xs uppercase tracking-[0.14em] text-[var(--brown)]">
          Inquiry type
          <select
            name="inquiry"
            value={form.inquiry}
            onChange={handleChange}
            className="mt-3 w-full border-b border-[var(--line)] bg-transparent px-0 py-3 text-sm normal-case tracking-normal text-[var(--deep-brown)] outline-none focus:border-[var(--brass)]"
          >
            <option>Custom furniture</option>
            <option>Existing collection</option>
            <option>Showroom visit</option>
            <option>Interior project</option>
          </select>
        </label>
      </div>
      <label className="mt-8 block text-xs uppercase tracking-[0.14em] text-[var(--brown)]">
        Message
        <textarea
          required
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className="mt-3 w-full resize-y border-b border-[var(--line)] bg-transparent px-0 py-3 text-sm normal-case tracking-normal text-[var(--deep-brown)] outline-none transition-colors placeholder:text-[var(--brown)]/50 focus:border-[var(--brass)]"
          placeholder="Tell us about your space or idea"
        />
      </label>
      <div className="mt-8 flex flex-wrap items-center gap-5">
        <Button type="submit">Send enquiry</Button>
        {sent && (
          <p role="status" className="text-sm text-[var(--brown)]">
            Thank you. We&apos;ll be in touch shortly.
          </p>
        )}
      </div>
    </form>
  );
}
