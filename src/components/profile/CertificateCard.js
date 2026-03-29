import DomainPill from "@/components/common/DomainPill";

export default function CertificateCard({ certificate }) {
  return (
    <article
      className="section-card p-5"
      style={{ borderLeftColor: `#${certificate.course.domainColor}` }}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <DomainPill
          tag={certificate.course.domainTag}
          color={`#${certificate.course.domainColor}`}
        />
        <span className="text-sm text-[var(--color-copy)]">
          {certificate.issuedOn}
        </span>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-[var(--color-heading)]">
        {certificate.course.title}
      </h3>
      <p className="mt-2 text-sm text-[var(--color-copy)]">
        Issued certificate
      </p>
      <button type="button" className="button-secondary mt-5">
        Download
      </button>
    </article>
  );
}
