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
export default function ProjectCard({ project }) {
  const cover = project.cover.desktop ?? project.cover.mobile;
  const isPhoneCover = !project.cover.desktop;

  return (
    <Link className="project-tile" href={`/projects/${project.slug}`}>
      <span className={`project-thumb${isPhoneCover ? " project-thumb-phone" : ""}`}>
        <img src={cover.src} alt="" width={cover.width} height={cover.height} loading="lazy" decoding="async" />
      </span>
      <span className="project-tile-title">{project.title}</span>
      <span className="project-tile-meta">{project.category}</span>
      <span className="chip-link">
        case study
        <ArrowRightIcon />
      </span>
    </Link>
  );
}
