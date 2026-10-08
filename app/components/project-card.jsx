import Link from "next/link";
import { isExternalLink } from "../data/projects";

export function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ProjectLinks({ project }) {
  return (
    <div className="text-links">
      {isExternalLink(project.link) ? (
        <a href={project.link} target="_blank" rel="noreferrer">
          live site <span aria-hidden="true">↗</span>
        </a>
      ) : null}
      {project.repo ? (
        <a href={project.repo} target="_blank" rel="noreferrer">
          source code <span aria-hidden="true">↗</span>
        </a>
      ) : null}
    </div>
  );
}

// Project tile for the home grid; the whole tile opens the case study.
// Shows the desktop screenshot with the mobile one in a phone frame on top.
export default function ProjectCard({ project }) {
  const { desktop, mobile } = project.cover;
  const cover = desktop ?? mobile;
  const isPhoneCover = !desktop;

  const caseStudy = `/projects/${project.slug}`;

  // The title link stretches over the whole tile; the action links sit above it.
  return (
    <article className="project-tile">
      <span className={`project-thumb${isPhoneCover ? " project-thumb-phone" : ""}`}>
        <img src={cover.src} alt="" width={cover.width} height={cover.height} loading="lazy" decoding="async" />
        {desktop && mobile ? (
          <span className="project-thumb-mobile">
            <img src={mobile.src} alt="" width={mobile.width} height={mobile.height} loading="lazy" decoding="async" />
          </span>
        ) : null}
      </span>
      <h3 className="project-tile-title">
        <Link className="project-tile-link" href={caseStudy}>
          {project.title}
        </Link>
      </h3>
      <span className="project-tile-meta">
        {project.category}
        {project.status === "Ongoing" ? <span className="project-status">Ongoing</span> : null}
      </span>
      <div className="project-tile-actions">
        <Link className="chip-link" href={caseStudy}>
          case study
          <ArrowRightIcon />
        </Link>
        {isExternalLink(project.link) ? (
          <a className="chip-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`${project.title} live site`}>
            live site <span aria-hidden="true">↗</span>
          </a>
        ) : null}
        {project.repo ? (
          <a className="chip-link" href={project.repo} target="_blank" rel="noreferrer" aria-label={`${project.title} source code`}>
            source code <span aria-hidden="true">↗</span>
          </a>
        ) : null}
      </div>
    </article>
  );
}
