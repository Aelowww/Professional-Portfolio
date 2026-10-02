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

// Newest first. The first entry of each list is marked as current.
// `icon` is a key in the timeline icon set on the home page.
export const experience = [
  { year: "Sep 2026", title: "Head Full-Stack Developer", org: "Teech", icon: "code", detail: "Built a student–faculty consultation booking app (school project)." },
  { year: "Jul 2026", title: "Network & Broadband Technical Associate", org: "iQor · Bell Canada", icon: "router", detail: "Configured Bell internet, routers and satellite TV." },
  { year: "Apr 2026", title: "Telecommunication Associate", org: "Transcom · Xfinity", icon: "phone", detail: "Troubleshot Xfinity Mobile devices and phone plans." },
  { year: "Mar 2026", title: "Project Manager", org: "KonektBarangay", icon: "clipboard", detail: "Led planning and delivery of a barangay e-services app (school project)." },
  { year: "Jun 2025", title: "Operations Associate", org: "Sagility · Iloilo City", icon: "calendar", detail: "Managed healthcare appointment and scheduling systems." },
  { year: "Jan 2024", title: "Started Programming Journey", org: "Self-taught", icon: "terminal", detail: "Learned programming basics and built practice projects." },
  { year: "Mar 2023", title: "Operations Associate", org: "WNS · Iloilo City", icon: "plane", detail: "Handled travel reservation systems and booking issues." }
];

export const education = [
  { year: "2024 – Now", title: "BS Information Technology · 3rd Year", org: "Western Institute of Technology", icon: "cap" },
  { year: "2022 – 2024", title: "BS Civil Engineering", org: "Western Institute of Technology · shifted to IT", icon: "ruler" },
  { year: "2022", title: "Senior High School", org: "Western Institute of Technology", icon: "school" },
  { year: "2020", title: "High School", org: "Iloilo National High School", icon: "school" },
  { year: "2016", title: "Elementary", org: "Bito-on Elementary School", icon: "school" }
];


export const certificates = [
  {
    title: "Front-End Development Libraries",
    issuer: "freeCodeCamp",
    year: "2026",
    link: "/certificates/front-end-development-libraries/view",
    previewImage: "/Certificates/FRONT-END%20DEVELOPMENT%20LIBRARIES.png"
  },
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
  },
  {
    title: "Relational Database V8",
    issuer: "freeCodeCamp",
    year: "2026",
    link: "/certificates/relational-database-v8/view",
    previewImage: "/Certificates/RELATIONAL%20DATABASE%20V8%20CERTIFICATE.png"
  },
  {
    title: "Relational Database",
    issuer: "freeCodeCamp",
    year: "2026",
    link: "/certificates/relational-database/view",
    previewImage: "/Certificates/RELATIONAL%20DATABASE%20CERTIFICATE.png"
  }
];

// Square 720px crops of the Personal Portfolio gallery photos, in the same order.
export const galleryPhotos = [
  "/photos/photo-1.webp",
  "/photos/photo-5.webp",
  "/photos/photo-2.webp",
  "/photos/photo-6.webp",
  "/photos/photo-3.webp",
  "/photos/photo-7.webp",
  "/photos/photo-4.webp",
  "/photos/photo-8.webp"
];

export const navSections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certificates" },
  { id: "gallery", label: "Gallery" }
];
