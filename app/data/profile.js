// Personal details, experience, education, certificates and links shared across pages.

export const profile = {
  name: "Carl Gemuel Taberna",
  role: "Aspiring Full-Stack Developer",
  subRole: "BSIT Student",
  location: "Iloilo City, Philippines",
  locationLink: "https://www.google.com/maps/search/?api=1&query=Iloilo+City+Philippines",
  email: "taberna.carlq11a@gmail.com",
  phone: "+639079240488",
  photo: "/Portfolio-Photo/Portfolio%20Photo.jpg",
  resume: "/resume/view"
};

export const socialLinks = [
  { label: "linkedin", name: "LinkedIn", href: "https://www.linkedin.com/in/carlgemueltaberna" },
  { label: "github", name: "GitHub", href: "https://github.com/Aelowww" },
  { label: "instagram", name: "Instagram", href: "https://www.instagram.com/crlxgml/" },
  { label: "facebook", name: "Facebook", href: "https://www.facebook.com/cgtaberna.10" },
  { label: "x", name: "X", href: "https://x.com/aelowww" }
];

// Work and education in one timeline, newest first. The first entry is marked as current.
// Months before Mar 2026 are approximate.
export const timeline = [
  { year: "Sep 2026", title: "Head Full-Stack Developer", detail: "Teech · school consultation booking project" },
  { year: "Jul 2026", title: "Technical Support", detail: "iQor · router and satellite TV troubleshooting" },
  { year: "Apr 2026", title: "Technical Support", detail: "Transcom · telecommunication systems troubleshooting" },
  { year: "Mar 2026", title: "Project Manager", detail: "School web application project" },
  { year: "Jun 2025", title: "Operations Associate", detail: "Sagility · healthcare scheduling systems" },
  { year: "Aug 2024", title: "BS Information Technology", detail: "Western Institute of Technology · shifted from Civil Engineering" },
  { year: "Jan 2024", title: "Started Programming", detail: "Began learning programming fundamentals" },
  { year: "Mar 2023", title: "Operations Associate", detail: "WNS · travel reservation systems" },
  { year: "Jul 2022", title: "Senior High School Graduate", detail: "Western Institute of Technology" }
];

export const certificates = [
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2026",
    link: "/certificates/responsive-web-design/view",
    previewImage: "/Certificates/RESPONSIVE%20WEB%20DESIGN%20CERTIFICATE.png"
  },
  {
    title: "JavaScript",
    issuer: "freeCodeCamp",
    year: "2026",
    link: "/certificates/javascript/view",
    previewImage: "/Certificates/JAVASCRIPT%20CERTIFICATE.png"
  },
  {
    title: "HTML Fundamentals",
    issuer: "Codecred",
    year: "2026",
    link: "/certificates/html-fundamentals/view",
    previewImage: "/Certificates/HTML%20FUNDAMENTALS%20CERTIFICATE.png"
  }
];

// Square 720px crops of the original gallery photos.
export const galleryPhotos = [
  "/photos/9ec30d49-45f3-4d42-897a-1881897309df.webp",
  "/photos/c9cb84e0-381d-483d-b734-c4891251255f.webp",
  "/photos/a4c16df2-f70c-48b1-8249-bec083a48e53.webp",
  "/photos/9dabe1c1-c2a9-48e0-9bd6-344eb0c3abde.webp",
  "/photos/e5ed610b-b3b9-4c5f-9c74-736ae82365c9.webp",
  "/photos/d6a84459-47ff-4597-a90d-7551e9c06345.webp"
];

export const navSections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certificates" }
];
