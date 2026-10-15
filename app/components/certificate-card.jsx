"use client";

import { useEffect, useRef, useState } from "react";

const external = { target: "_blank", rel: "noopener noreferrer" };

// Same arrow as the project "case study" chip.
function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function issuedLine(certificate) {
  return `${certificate.issuer} · ${certificate.year}`;
}

// Certificate image, or a text placeholder when there is no image yet.
function CertificatePreview({ certificate }) {
  if (certificate.previewImage) {
    return <img src={certificate.previewImage} alt="" loading="lazy" decoding="async" />;
  }

  return <span className="cert-placeholder">{certificate.previewPlaceholder ?? "Preview coming soon"}</span>;
}

function CertificateStatus({ certificate }) {
  if (certificate.status === "earned" && !certificate.statusNote) return null;
  return (
    <span className={`cert-status cert-status-${certificate.status}`}>{certificate.statusNote ?? "In progress"}</span>
  );
}

function IncludesList({ includes }) {
  return (
    <ul className="cert-includes">
      {includes.map((item) => (
        <li key={item.name}>
          {item.url ? (
            <a href={item.url} {...external}>
              {item.name} <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <span>{item.name}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

// "Verify certificate" goes to the issuer's verification page; "Details" opens the modal.
function CertificateActions({ certificate, onDetails }) {
  return (
    <div className="cert-actions">
      {certificate.url ? (
        <a className="chip-link" href={certificate.url} {...external} aria-label={`Verify ${certificate.name}`}>
          verify certificate <span aria-hidden="true">↗</span>
        </a>
      ) : (
        <span className="chip-link chip-link-muted">verification pending</span>
      )}
      <button type="button" className="chip-link" onClick={onDetails} aria-label={`${certificate.name} details`}>
        details
        <ArrowRightIcon />
      </button>
    </div>
  );
}

// Modal with the certificate overview and the certificates it includes.
function CertificateDialog({ certificate, open, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const closeOnBackdrop = (event) => {
    if (event.target === event.currentTarget) dialogRef.current?.close();
  };

  return (
    <dialog ref={dialogRef} className="cert-dialog" aria-label={`${certificate.name} details`} onClose={onClose} onClick={closeOnBackdrop}>
      <div className="cert-dialog-body">
        <button type="button" className="cert-dialog-close" aria-label="Close" onClick={() => dialogRef.current?.close()}>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </button>
        <span className="cert-issuer">{issuedLine(certificate)}</span>
        <h2>{certificate.name}</h2>
        <CertificateStatus certificate={certificate} />
        {certificate.overview ? <p className="cert-overview">{certificate.overview}</p> : null}
        {certificate.includes?.length ? (
          <>
            <h3>Included certificates</h3>
            <IncludesList includes={certificate.includes} />
          </>
        ) : null}
        {certificate.url ? (
          <a className="chip-link cert-dialog-verify" href={certificate.url} {...external}>
            verify certificate <span aria-hidden="true">↗</span>
          </a>
        ) : null}
      </div>
    </dialog>
  );
}

function useCertificateDialog(certificate) {
  const [open, setOpen] = useState(false);
  return {
    show: () => setOpen(true),
    dialog: <CertificateDialog certificate={certificate} open={open} onClose={() => setOpen(false)} />
  };
}

// Full-width row on the /certificates page.
export function CertificateRow({ certificate }) {
  const details = useCertificateDialog(certificate);

  return (
    <article className="cert-preview">
      <span className="cert-preview-frame">
        <CertificatePreview certificate={certificate} />
      </span>
      <div className="cert-preview-body">
        <h2 className="cert-title">{certificate.name}</h2>
        <span className="cert-issuer">{issuedLine(certificate)}</span>
        <CertificateStatus certificate={certificate} />
        <CertificateActions certificate={certificate} onDetails={details.show} />
      </div>
      {details.dialog}
    </article>
  );
}

// Compact tile in the home page certificates card.
export function CertificateThumb({ certificate }) {
  const details = useCertificateDialog(certificate);

  return (
    <div className="cert-thumb">
      <button type="button" className="cert-thumb-frame" aria-label={`${certificate.name} details`} onClick={details.show}>
        <CertificatePreview certificate={certificate} />
      </button>
      <strong>{certificate.name}</strong>
      <small>{issuedLine(certificate)}</small>
      <CertificateActions certificate={certificate} onDetails={details.show} />
      {details.dialog}
    </div>
  );
}
