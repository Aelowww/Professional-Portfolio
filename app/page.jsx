import Link from "next/link";
import BrandIcon from "./components/brand-icon";
import Marquee from "./components/marquee";
import ProjectCard from "./components/project-card";
import SiteShell from "./components/site-shell";
import { certificates, education, experience, galleryPhotos, profile, socialLinks } from "./data/profile";
import { projects } from "./data/projects";
import { skillGroups, skills } from "./data/skills";

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: "https://carltaberna.vercel.app",
  image: `https://carltaberna.vercel.app${profile.photo}`,
  jobTitle: "Aspiring Web Developer",
  description:
    "Portfolio of Carl Gemuel Taberna, a BSIT student and aspiring web developer based in Iloilo City, Philippines.",
  address: { "@type": "PostalAddress", addressLocality: "Iloilo City", addressCountry: "PH" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Western Institute of Technology" },
  sameAs: socialLinks.map((link) => link.href)
};

// Started programming in 2024 (see the "Started Programming Journey" experience entry).
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

// Line icons for experience and education rows, keyed by `icon` in data/profile.js.
const timelineIcons = {
  code: <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />,
  router: (
    <>
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 16.5h.01M11 16.5h.01M12 13V9M8.5 6.5a5 5 0 0 1 7 0M6 4a8.5 8.5 0 0 1 12 0" />
    </>
  ),
  phone: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2.4" />
      <path d="M11 17.8h2" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4.5" width="14" height="16.5" rx="2" />
      <path d="M9 4.5V3.5h6v1M9 11l2 2 4-4M9 17h6" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4M10 15h4M12 13v4" />
    </>
  ),
  terminal: (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="2" />
      <path d="m7 10 3 2.5L7 15M12.5 15H17" />
    </>
  ),
  plane: (
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2Z" />
  ),
  cap: (
    <>
      <path d="M12 4 2.5 9 12 14l9.5-5L12 4Z" />
      <path d="M6.5 11.2V15c0 1.9 2.5 3.5 5.5 3.5s5.5-1.6 5.5-3.5v-3.8M21.5 9v5" />
    </>
  ),
  ruler: (
    <>
      <path d="M3 17.5 17.5 3 21 6.5 6.5 21Z" />
      <path d="m7.5 13 2 2M10.5 10l2 2M13.5 7l2 2" />
    </>
  ),
  school: (
    <>
      <path d="M3 21h18M5 21V10l7-5 7 5v11" />
      <path d="M10 21v-5h4v5M12 10.5h.01" />
    </>
  )
};

// Compact rows: icon, role and place, date. The first row is marked current.
function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((item, index) => (
        <li key={`${item.title}-${item.year}`} className={index === 0 ? "is-current" : undefined}>
          <span className="timeline-badge" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              {timelineIcons[item.icon]}
            </svg>
          </span>
          <div className="timeline-body">
            <div className="timeline-head">
              <h3>{item.title}</h3>
              <span className="timeline-year">{index === 0 ? "Current" : item.year}</span>
            </div>
            <p className="timeline-org">{index === 0 ? `${item.org} · ${item.year}` : item.org}</p>
            {item.detail ? <p className="timeline-detail">{item.detail}</p> : null}
          </div>
        </li>
      ))}
    </ol>
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

          <div className="profile-pitch">
            <p className="profile-tagline">I build clean, modern web experiences with solid web development fundamentals.</p>
            <a className="status" href={`mailto:${profile.email}`}>
              <span className="status-main">
                <span className="status-dot" aria-hidden="true" />
                Open to internship
              </span>
              <span className="status-cta">
                Let&apos;s talk <span aria-hidden="true">→</span>
              </span>
            </a>
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
          </aside>
        </header>

        <div className="bento">
          <div className="bento-main">
            <Card id="about" title="About" className="area-about">
              <div className="prose">
                <p>
                  I am a Bachelor of Science in Information Technology student with a growing focus on building modern,
                  user-centered digital solutions. My interests span web development, mobile applications, and software
                  engineering, and I continue to strengthen my skills through hands-on projects and continuous learning.
                </p>
                <p>
                  I enjoy using technology to solve real-world problems, whether that means improving everyday processes or
                  turning ideas into working applications. I am currently seeking internship opportunities where I can
                  contribute, learn from experienced teams, and continue growing as a professional developer.
                </p>
              </div>
            </Card>

            <Card
              id="projects"
              title="Recent Projects"
              className="area-projects"
              action={
                <Link className="card-action" href="/projects">
                  See all {projects.length} →
                </Link>
              }
            >
              <div className="project-grid">
                {projects.slice(0, 3).map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
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

            <Card
              id="certifications"
              title="Certificates"
              className="area-certs"
              action={
                <Link className="card-action" href="/certificates">
                  See all {certificates.length} →
                </Link>
              }
            >
              <ul className="cert-thumbs">
                {certificates.slice(0, 3).map((certificate) => (
                  <li key={certificate.title}>
                    <a href={certificate.link} target="_blank" rel="noreferrer">
                      <span className="cert-thumb-frame">
                        <img src={certificate.previewImage} alt="" loading="lazy" decoding="async" />
                      </span>
                      <strong>{certificate.title}</strong>
                      <small>
                        {certificate.issuer} · {certificate.year}
                      </small>
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="bento-side">
            <Card id="experience" title="Experience" className="area-experience">
              <Timeline items={experience} />
            </Card>

            <Card id="education" title="Education" className="area-education">
              <Timeline items={education} />
            </Card>

            <Card id="contact" title="Social Links" className="area-social">
              <ul className="social-tiles">
                {contactLinks.map((link) => (
                  <li key={link.key}>
                    <a href={link.href} target={link.key === "email" ? undefined : "_blank"} rel="noreferrer">
                      <BrandIcon name={link.key} />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <Card id="gallery" title="Beyond Coding" className="area-gallery">
            <Marquee label="Personal photos" className="photo-strip" duration={40} repeat={2}>
              {galleryPhotos.map((src, index) => (
                <li key={src}>
                  <img src={src} alt={`Personal photo ${index + 1}`} loading="lazy" decoding="async" />
                </li>
              ))}
            </Marquee>
          </Card>
        </div>
      </main>
    </SiteShell>
  );
}
