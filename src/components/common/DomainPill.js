import Link from "next/link";

export default function DomainPill({ tag, color, href }) {
  const content = (
    <span className="pill-chip" style={{ backgroundColor: color }}>
      {tag}
    </span>
  );

  if (!href) {
    return content;
  }

  return <Link href={href}>{content}</Link>;
}
