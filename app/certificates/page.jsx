import Link from "next/link";
import CurrentlyTaking from "../components/currently-taking";
import SiteShell from "../components/site-shell";
import { certificates } from "../data/profile";

export const metadata = {
  title: "Certificates",
  description: "Certificates and credentials earned by Carl Gemuel Taberna.",
  alternates: { canonical: "/certificates" }
};

export default function CertificatesPage() {
  return (
    <SiteShell narrow>
      <main className="page">
        <Link className="back-link" href="/#certifications">
          ← back
        </Link>
        <h1 className="page-title">Certificates</h1>
        <p className="page-lead">Credentials I&apos;ve earned while learning web development.</p>

        <ul className="cert-gallery">
          {certificates.map((certificate) => (
            <li key={certificate.title}>
              <a className="cert-preview" href={certificate.link} target="_blank" rel="noreferrer">
                <span className="cert-preview-frame">
                  <img src={certificate.previewImage} alt={`${certificate.title} certificate`} loading="lazy" decoding="async" />
                </span>
                <span className="cert-preview-body">
                  <span className="cert-title">{certificate.title}</span>
                  <span className="cert-issuer">
                    {certificate.issuer} · {certificate.year}
                  </span>
                </span>
                <span className="cert-verify">
                  view <span aria-hidden="true">↗</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <CurrentlyTaking />
      </main>
    </SiteShell>
  );
}
