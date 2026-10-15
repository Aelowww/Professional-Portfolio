import Link from "next/link";
import { CertificateRow } from "../components/certificate-card";
import CurrentlyTaking from "../components/currently-taking";
import SiteShell from "../components/site-shell";
import { certificates } from "../data/certificates";

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
            <li key={certificate.name}>
              <CertificateRow certificate={certificate} />
            </li>
          ))}
        </ul>
        <CurrentlyTaking />
      </main>
    </SiteShell>
  );
}
