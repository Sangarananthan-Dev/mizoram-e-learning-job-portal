export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="display-heading text-3xl leading-tight sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-3 text-base leading-7 text-[var(--color-copy)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
