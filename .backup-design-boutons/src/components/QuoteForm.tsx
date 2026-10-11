"use client";

import { useState } from "react";

const projects = ["Kitchen", "Bathroom", "Flooring", "Addition", "Other"];

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="rounded-lg bg-soft p-6 text-brand">
        Thank you! Your request was sent. We will get back to you shortly.
      </p>
    );
  }

  const field = "w-full rounded border border-slate-300 px-3 py-2 focus:border-accent focus:outline-none";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="grid gap-4 md:grid-cols-2">
        <input name="name" required placeholder="Your name" className={field} />
        <input name="phone" required placeholder="Phone number" className={field} />
        <input name="email" type="email" placeholder="Email (optional)" className={field} />
        <input name="city" placeholder="City" className={field} />
      </div>
      <select name="project" className={field} defaultValue="Kitchen">
        {projects.map((p) => (
          <option key={p}>{p}</option>
        ))}
      </select>
      <textarea name="message" required rows={5} placeholder="Tell us about your project" className={field} />
      <button
        disabled={status === "sending"}
        className="rounded-full bg-accent px-6 py-3 font-semibold text-brand hover:bg-accent-dark disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Request a Quote"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please call us instead.</p>
      )}
    </form>
  );
}
