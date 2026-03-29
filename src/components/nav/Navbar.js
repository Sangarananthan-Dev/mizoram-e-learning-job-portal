"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/learn", label: "Learn" },
  { href: "/freelance", label: "Freelance" },
  { href: "/#about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--color-border)] bg-[rgba(247,244,239,0.96)] backdrop-blur">
      <div className="shell flex h-[72px] items-center justify-between gap-4 py-4">
        <Link
          href="/"
          className="display-heading text-2xl text-[var(--color-terracotta)]"
        >
          Mizoram SkillLink
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-[var(--color-copy)] md:flex">
          {links.map((link) => {
            const active =
              link.href === "/#about"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? "text-[var(--color-heading)]"
                    : "hover:text-[var(--color-heading)]"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/dashboard" className="button-tertiary px-3 sm:px-4">
            Dashboard
          </Link>
          <Link href="/learn" className="button-primary px-3 sm:px-4">
            Join Free
          </Link>
        </div>
      </div>
    </header>
  );
}
