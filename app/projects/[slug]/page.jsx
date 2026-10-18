import Link from "next/link";
import { notFound } from "next/navigation";
import DevicePreview from "../../components/device-preview";
import ProjectGallery from "../../components/project-gallery";
import { ProjectLinks } from "../../components/project-card";
import SiteShell from "../../components/site-shell";
import { getProject, projects } from "../../data/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const description = project.summary;
  const ogImage = project.cover.desktop ?? project.cover.mobile;
  return {
    title: `${project.title} Case Study`,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} Case Study`,
      description,
      url: `/projects/${project.slug}`,
      type: "article",
      images: [{ url: ogImage.src, width: ogImage.width, height: ogImage.height }]
    }
  };
}

function CaseSection({ index, id, title, children }) {
  return (
    <section id={id} className="case-section" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="case-heading">
        <span className="section-index">{String(index).padStart(2, "0")}</span> — {title}
      </h2>
      {children}
    </section>
  );
}

function StackRows({ project }) {
  return (
    <ul className="rows">
      {project.techStack.map((technology) => (
        <li key={technology.name} className="row row-two">
          <span className="row-title">{technology.name}</span>
          <span className="row-org">{technology.purpose}</span>
        </li>
      ))}
    </ul>
  );
}

// Featured case study: summary, role, features, decisions, design, results, stack, links.
function FeaturedCaseStudy({ project }) {
  const { featured, caseStudy } = project;
  const features = featured.features.map((title) => caseStudy.features.find((feature) => feature.title === title)).filter(Boolean);
  let index = 0;

  return (
    <>
      <CaseSection index={++index} id="role" title="my role">
        <p className="case-role">
          {project.role}
          {featured.teamProject ? <span> · Team project</span> : null}
        </p>
        <ul className="dash-list">
          {featured.built.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </CaseSection>

      <CaseSection index={++index} id="features" title="key features">
        <ul className="feature-grid">
          {features.map((feature) => (
            <li key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.detail}</p>
            </li>
          ))}
        </ul>
      </CaseSection>

      <CaseSection index={++index} id="decisions" title="key decisions">
        <ol className="decisions">
          {featured.decisions.map((item) => (
            <li key={item.decision}>
              <h3>{item.decision}</h3>
              <p>{item.why}</p>
            </li>
          ))}
        </ol>
      </CaseSection>

      <CaseSection index={++index} id="design" title="design">
        <div className="case-design">
          <DevicePreview project={project} size="hero" />
          {project.designFrames?.length ? (
            <figure className="design-board">
              <ul>
                {project.designFrames.map((frame) => (
                  <li key={frame.src}>
                    <img src={frame.src} alt={frame.alt} width="412" height="896" loading="lazy" decoding="async" />
                  </li>
                ))}
              </ul>
              <figcaption>
                <span>Figma design</span>
                {project.prototype ? (
                  <a href={project.prototype} target="_blank" rel="noreferrer">
                    View in Figma <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
              </figcaption>
            </figure>
          ) : null}
        </div>
        <ul className="dash-list case-design-notes">
          {featured.design.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </CaseSection>

      {featured.results.length ? (
        <CaseSection index={++index} id="results" title="results">
          <ul className="dash-list">
            {featured.results.map((result) => (
              <li key={result}>{result}</li>
            ))}
          </ul>
        </CaseSection>
      ) : null}

      <CaseSection index={++index} id="stack" title="stack">
        <StackRows project={project} />
      </CaseSection>

      <CaseSection index={++index} id="links" title="links">
        <ProjectLinks project={project} />
        {project.linkNote ? <p className="case-note">{project.linkNote}</p> : null}
      </CaseSection>
    </>
  );
}

// Full case study for projects that aren't featured.
function ClassicCaseStudy({ project }) {
  const { caseStudy } = project;
  let index = 0;

  return (
    <>
      <DevicePreview project={project} size="hero" />

      <CaseSection index={++index} id="overview" title="overview">
        <p>{caseStudy.overview}</p>
      </CaseSection>

      <CaseSection index={++index} id="problem" title="the problem">
        <p>{caseStudy.problem}</p>
      </CaseSection>

      <CaseSection index={++index} id="goals" title="goals">
        <ul className="dash-list">
          {caseStudy.goals.map((goal) => (
            <li key={goal}>{goal}</li>
          ))}
        </ul>
      </CaseSection>

      <CaseSection index={++index} id="approach" title="approach">
        <p>{caseStudy.approach}</p>
      </CaseSection>

      <CaseSection index={++index} id="stack" title="stack">
        <ul className="rows">
          {project.techStack.map((technology) => (
            <li key={technology.name} className="row row-two">
              <span className="row-title">{technology.name}</span>
              <span className="row-org">{technology.purpose}</span>
            </li>
          ))}
        </ul>
      </CaseSection>

      <CaseSection index={++index} id="features" title="key features">
        <ul className="feature-grid">
          {caseStudy.features.map((feature) => (
            <li key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.detail}</p>
            </li>
          ))}
        </ul>
      </CaseSection>

      <CaseSection index={++index} id="challenges" title="challenges & solutions">
        <ol className="challenges">
          {caseStudy.challenges.map((challenge) => (
            <li key={challenge.title}>
              <h3>{challenge.title}</h3>
              <dl>
                <div>
                  <dt>Problem</dt>
                  <dd>{challenge.problem}</dd>
                </div>
                <div>
                  <dt>Solution</dt>
                  <dd>{challenge.solution}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ol>
      </CaseSection>

      <CaseSection index={++index} id="outcomes" title="outcomes">
        <ul className="dash-list">
          {caseStudy.outcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
      </CaseSection>

      <CaseSection index={++index} id="learnings" title="what I learned">
        <ul className="dash-list">
          {caseStudy.learnings.map((learning) => (
            <li key={learning}>{learning}</li>
          ))}
        </ul>
      </CaseSection>

      {caseStudy.nextSteps.length ? (
        <CaseSection index={++index} id="next-steps" title="what I'd improve next">
          <ul className="dash-list">
            {caseStudy.nextSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </CaseSection>
      ) : null}

      <CaseSection index={++index} id="screens" title="screens">
        <ProjectGallery title={project.title} images={project.gallery} />
      </CaseSection>
    </>
  );
}

export default async function ProjectCaseStudy({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const position = projects.findIndex((item) => item.slug === project.slug);
  const previous = projects[(position - 1 + projects.length) % projects.length];
  const next = projects[(position + 1) % projects.length];

  return (
    <SiteShell narrow>
      <main className="page case-study">
        <Link className="back-link" href="/#projects">
          ← all projects
        </Link>

        <header className="case-header">
          <p className="label">
            Case study · {project.category}
          </p>
          <h1 className="page-title">{project.title}</h1>
          <p className="page-lead">{project.featured?.summary ?? project.summary}</p>

          <dl className="case-facts">
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Year</dt>
              <dd>{project.year}</dd>
            </div>
            <div>
              <dt>Type</dt>
              <dd>{project.type}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{project.status}</dd>
            </div>
          </dl>

          {/* Featured case studies list their links in the last section instead. */}
          {project.featured ? null : (
            <>
              <ProjectLinks project={project} />
              {project.linkNote ? <p className="case-note">{project.linkNote}</p> : null}
            </>
          )}
        </header>

        {project.featured ? <FeaturedCaseStudy project={project} /> : <ClassicCaseStudy project={project} />}

        <nav className="pager" aria-label="More projects">
          <Link href={`/projects/${previous.slug}`}>
            <span className="label">Previous</span>
            <span className="pager-title">← {previous.title}</span>
          </Link>
          <Link className="pager-next" href={`/projects/${next.slug}`}>
            <span className="label">Next</span>
            <span className="pager-title">{next.title} →</span>
          </Link>
        </nav>
      </main>
    </SiteShell>
  );
}
