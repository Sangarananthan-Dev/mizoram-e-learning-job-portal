"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/learn", label: "Learn" },
  { href: "/freelance", label: "Freelance" },
  { href: "/#about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--color-border)] bg-[rgba(247,244,239,0.96)] backdrop-blur">
      <div className="shell flex h-18 items-center justify-between gap-4 py-4">
        <Link href="/" className="display-heading text-2xl text-[var(--color-terracotta)]">
          Zawlbuk
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-[var(--color-copy)] md:flex">
          {links.map((link) => {
            const active =
              link.href === "/#about" ? pathname === "/" : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={active ? "text-[var(--color-heading)]" : "hover:text-[var(--color-heading)]"}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/dashboard" className="button-tertiary">
            Dashboard
          </Link>
          <Link href="/learn" className="button-primary">
            Join Free
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="button-tertiary md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>
      </div>

      {open ? (
        <div className="shell border-t border-[var(--color-border)] py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-semibold text-[var(--color-copy)]">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/dashboard" onClick={() => setOpen(false)}>
              Dashboard
            </Link>
            <Link href="/learn" className="button-primary mt-2" onClick={() => setOpen(false)}>
              Join Free
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
