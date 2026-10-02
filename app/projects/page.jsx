import Link from "next/link";
import ProjectCard from "../components/project-card";
import SiteShell from "../components/site-shell";
import { projects } from "../data/projects";

export const metadata = {
  title: "Projects",
  description: "Projects and case studies by Carl Gemuel Taberna.",
  alternates: { canonical: "/projects" }
};

export default function ProjectsPage() {
  return (
    <SiteShell>
      <main className="page">
        <Link className="back-link" href="/#projects">
          ← back
        </Link>
        <h1 className="page-title">Projects</h1>
        <p className="page-lead">Everything I&apos;ve built, with desktop and mobile views. Open one to read the case study.</p>

        <div className="project-grid project-grid-page">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </main>
    </SiteShell>
  );
}
