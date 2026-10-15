import { projects } from "./data/projects";

const baseUrl = "https://carltaberna.vercel.app";

export default function sitemap() {
  const caseStudies = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    ...caseStudies,
    {
      url: `${baseUrl}/certificates`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/resume/view`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7
    }
  ];
}
