"use client";

import { useState } from "react";

export default function PostGig() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div
        className="section-card p-6"
        style={{ borderLeftColor: "var(--color-terracotta)" }}
      >
        <p className="display-heading text-2xl">Gig drafted</p>
        <p className="mt-3 text-sm leading-7 text-[var(--color-copy)]">
          Your listing has been staged for review. In a production build, this
          would move into moderation before going live.
        </p>
      </div>
    );
  }

  return (
    <form
      className="section-card p-6"
      style={{ borderLeftColor: "var(--color-terracotta)" }}
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <p className="eyebrow mb-3">Post a Gig</p>
      <h3 className="display-heading text-3xl">Need local talent?</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-copy)]">
        A simple mock form for departments, NGOs, or businesses to start posting
        work.
      </p>

      <div className="mt-5 grid gap-4">
        <input className="input-field" placeholder="Gig title" required />
        <input
          className="input-field"
          placeholder="Organisation name"
          required
        />
        <select className="select-field" defaultValue="IT">
          <option value="IT">IT</option>
          <option value="Craft">Craft</option>
          <option value="Tourism">Tourism</option>
          <option value="Agriculture">Agriculture</option>
        </select>
        <textarea
          className="textarea-field min-h-28"
          placeholder="Brief description of the work"
          required
        />
      </div>

      <button type="submit" className="button-primary mt-5">
        Submit Gig
      </button>
    </form>
  );
}
