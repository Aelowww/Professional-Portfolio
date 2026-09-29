import Link from "next/link";
import BrandIcon from "./components/brand-icon";
import ProjectCard from "./components/project-card";
import SiteShell from "./components/site-shell";
import { certificates, galleryPhotos, profile, socialLinks, timeline } from "./data/profile";
import { projects } from "./data/projects";
import { skillGroups, skills } from "./data/skills";

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: "https://carldev.vercel.app",
  image: `https://carldev.vercel.app${profile.photo}`,
  jobTitle: "Aspiring Full-Stack Developer",
  description:
    "Portfolio of Carl Gemuel Taberna, a BSIT student and aspiring full-stack developer based in Iloilo City, Philippines.",
  address: { "@type": "PostalAddress", addressLocality: "Iloilo City", addressCountry: "PH" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Western Institute of Technology" },
  sameAs: socialLinks.map((link) => link.href)
};

// Started programming in 2024 (see the "Started Programming" timeline entry).
const codingSince = 2024;

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </svg>
  );
}

function Card({ id, title, action, className = "", children }) {
  return (
    <section id={id} className={`card ${className}`} aria-labelledby={`${id}-title`}>
      <div className="card-header">
        <h2 id={`${id}-title`}>{title}</h2>
        {action}
      </div>
      {children}
    </section>
  );
}

export default function Home() {
  const contactLinks = [
    { key: "email", label: "Email", href: `mailto:${profile.email}` },
    ...socialLinks.map((link) => ({ key: link.label, label: link.name, href: link.href }))
  ];

  const stats = [
    {
      label: "Projects",
      value: projects.length,
      icon: <path d="M3 7.5A1.5 1.5 0 0 1 4.5 6h4l2 2h9A1.5 1.5 0 0 1 21 9.5v8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-10Z" />
    },
    {
      label: "Certificates",
      value: certificates.length,
      icon: (
        <>
          <circle cx="12" cy="9" r="5" />
          <path d="m9 13.5-1.5 7 4.5-2.5 4.5 2.5-1.5-7" />
        </>
      )
    },
    {
      label: "Years coding",
      value: `${new Date().getFullYear() - codingSince}+`,
      icon: <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />
    }
  ];

  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }} />

      <main className="home">
        <header className="profile">
          <img className="profile-photo" src={profile.photo} alt={`Portrait of ${profile.name}`} width="168" height="168" />
          <div className="profile-info">
            <h1>
              {profile.name}
              <svg className="verified" viewBox="0 0 24 24" aria-label="Verified">
                <path
                  fill="#1d9bf0"
                  d="M22.5 12.5c0-1.58-.88-2.95-2.18-3.65.15-.44.23-.91.23-1.4 0-2.21-1.71-3.99-3.82-3.99-.47 0-.92.08-1.34.25C14.8 2.46 13.5 1.5 12 1.5s-2.8.96-3.39 2.26a3.7 3.7 0 0 0-1.34-.25c-2.11 0-3.82 1.78-3.82 3.99 0 .49.08.96.23 1.4-1.3.7-2.18 2.07-2.18 3.6 0 1.46.77 2.73 1.9 3.44-.02.2-.03.4-.03.6 0 2.2 1.71 4 3.82 4 .47 0 .92-.09 1.34-.25.59 1.3 1.89 2.26 3.39 2.26s2.8-.96 3.39-2.26c.42.16.87.25 1.34.25 2.11 0 3.82-1.8 3.82-4 0-.2-.01-.4-.03-.6a4.02 4.02 0 0 0 1.87-3.44Z"
                />
                <path fill="#fff" d="m9.99 16.6-3.54-3.54 1.4-1.42 2.08 2.08 5.17-5.63 1.47 1.36-6.58 7.15Z" />
              </svg>
            </h1>
            <a className="profile-location" href={profile.locationLink} target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
                <circle cx="12" cy="10" r="2.4" />
              </svg>
              {profile.location}
            </a>
            <p className="profile-role">
              {profile.role} <span aria-hidden="true">\</span> {profile.subRole}
            </p>
            <div className="profile-actions">
              <a className="button button-solid" href={`mailto:${profile.email}`}>
                <MailIcon />
                Send Email
              </a>
              <a className="button button-ghost" href={profile.resume} target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                  <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
                </svg>
                View Resume
              </a>
            </div>
          </div>

          <aside className="profile-panel" aria-label="At a glance">
            <dl className="profile-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="stat">
                  <svg className="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {stat.icon}
                  </svg>
                  <dd>{stat.value}</dd>
                  <dt>{stat.label}</dt>
                </div>
              ))}
            </dl>
            <a className="status" href={`mailto:${profile.email}`}>
              <span className="status-main">
                <span className="status-dot" aria-hidden="true" />
                Open to internship
              </span>
              <span className="status-cta">
                Let&apos;s talk <span aria-hidden="true">→</span>
              </span>
            </a>
          </aside>
        </header>

        <div className="bento">
          <Card id="about" title="About" className="area-about">
            <div className="prose">
              <p>
                I&apos;m a 2nd year BS Information Technology student at Western Institute of Technology and an aspiring
                full-stack developer based in Iloilo City. I enjoy building clean, responsive interfaces backed by
                practical, reliable backends.
              </p>
              <p>
                I&apos;ve built projects with Next.js, React, TypeScript, Node.js, PostgreSQL and MongoDB, including
                KonektBarangay, a barangay e-services platform, and Teech, a student–faculty consultation booking system
                where I&apos;m the head full-stack developer on my team.
              </p>
              <p>
                Before IT, I started in Civil Engineering and worked in technical support at iQor and Transcom and in
                operations at WNS and Sagility, where I used scheduling and reservation systems every day. That taught me
                how much good software matters to the people using it. I&apos;m now looking for an internship where I can
                learn from an experienced team.
              </p>
            </div>
          </Card>

          <Card id="experience" title="Experience" className="area-experience">
            <ol className="timeline">
              {timeline.map((item, index) => (
                <li key={`${item.title}-${item.detail}`} className={index === 0 ? "is-current" : undefined}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                  {item.year ? <span className="timeline-year">{item.year}</span> : null}
                </li>
              ))}
            </ol>
          </Card>

          <Card id="stack" title="Tech Stack" className="area-stack">
            <div className="stack">
              {skillGroups.map((group) => (
                <div key={group.key} className="stack-group">
                  <h3>{group.label}</h3>
                  <ul className="chips">
                    {skills
                      .filter((skill) => skill.category === group.key)
                      .map((skill) => (
                        <li key={skill.name}>
                          <BrandIcon name={skill.logo} />
                          {skill.name}
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>

          <Card id="projects" title="Recent Projects" className="area-projects">
            <div className="project-grid">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </Card>

          <Card
            id="certifications"
            title="Certificates"
            className="area-certs"
            action={
              <Link className="card-action" href="/certificates">
                View all →
              </Link>
            }
          >
            <ul className="list-links">
              {certificates.map((certificate) => (
                <li key={certificate.title}>
                  <a href={certificate.link} target="_blank" rel="noreferrer">
                    <span>
                      <strong>{certificate.title}</strong>
                      <small>
                        {certificate.issuer} · {certificate.year}
                      </small>
                    </span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </Card>

          <Card id="contact" title="Social Links" className="area-social">
            <ul className="list-links">
              {contactLinks.map((link) => (
                <li key={link.key}>
                  <a href={link.href} target={link.key === "email" ? undefined : "_blank"} rel="noreferrer">
                    <span className="list-icon">
                      <BrandIcon name={link.key} />
                      <strong>{link.label}</strong>
                    </span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </Card>

          <Card id="gallery" title="Beyond Coding" className="area-gallery">
            <ul className="photo-strip">
              {galleryPhotos.map((src, index) => (
                <li key={src}>
                  <img src={src} alt={`Personal photo ${index + 1}`} loading="lazy" decoding="async" />
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </main>
    </SiteShell>
  );
}
