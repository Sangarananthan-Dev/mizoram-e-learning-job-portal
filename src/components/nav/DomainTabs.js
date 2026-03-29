"use client";

export default function DomainTabs({ options, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const active = option === value;
        return (
          <button
            key={option}
            type="button"
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              active
                ? "border-[var(--color-terracotta)] bg-[var(--color-terracotta)] text-white"
                : "border-[var(--color-border)] bg-white text-[var(--color-copy)] hover:border-[var(--color-border-strong)]"
            }`}
            onClick={() => onChange(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
