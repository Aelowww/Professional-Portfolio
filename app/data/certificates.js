// Certificates shown on the home page and /certificates. Add or edit certificates here only.
// The home page shows the first three; the rest appear on the "See all" page.
//
// Each entry:
//   name                name shown on the card
//   overview            short description shown in the Details modal
//   issuer              issuing organisation
//   year                year earned (string)
//   url                 public verification page, or null when there isn't one yet
//   status              "earned" | "in-progress"
//   statusNote          optional status line shown under the name
//   previewImage        optional image in /public
//   previewPlaceholder  text shown in the preview frame when there is no image
//   includes            optional [{ name, url }]; items with url: null show as plain text

const FCC = "https://www.freecodecamp.org/certification/aelowww10";
const COURSERA = "https://coursera.org/verify";
const CREDLY_NETWORK_TECHNICIAN = "https://www.credly.com/badges/cfdcf0b2-7e42-4843-8dd1-40f3a33ce8ef";

export const certificates = [
  {
    name: "Legacy Full-Stack Certification",
    overview:
      "freeCodeCamp’s legacy full-stack certification, awarded for completing six developer certifications covering responsive web design, JavaScript algorithms and data structures, front-end libraries, data visualization, back-end APIs, and information security and QA.",
    issuer: "freeCodeCamp",
    year: "2026",
    url: `${FCC}/full-stack`,
    status: "earned",
    previewImage: "/Certificates/LEGACY%20FULL-STACK%20CERTIFICATE.png",
    includes: [
      { name: "Legacy Responsive Web Design V8", url: `${FCC}/responsive-web-design` },
      { name: "Legacy JavaScript Algorithms and Data Structures V7", url: `${FCC}/javascript-algorithms-and-data-structures` },
      { name: "Front-End Development Libraries V8", url: `${FCC}/front-end-development-libraries` },
      { name: "Data Visualization V8", url: `${FCC}/data-visualization` },
      { name: "Back-End Development and APIs V8", url: `${FCC}/back-end-development-and-apis` },
      { name: "Legacy Information Security and Quality Assurance", url: `${FCC}/information-security-and-quality-assurance` }
    ]
  },
  {
    name: "Network Technician Career Path",
    overview:
      "Cisco Networking Academy career path covering network standards and protocols, Ethernet and switching, IPv4 and IPv6 addressing, wireless setup, DNS and DHCP, routing, troubleshooting and help desk practices, and secure user access.",
    issuer: "Cisco Networking Academy",
    year: "2026",
    url: CREDLY_NETWORK_TECHNICIAN,
    status: "earned",
    previewImage: "/Certificates/NETWORK%20TECHNICIAN%20CAREER%20PATH.png",
    // The courses have no badges of their own, so they link to the career path badge.
    includes: [
      { name: "Networking Basics", url: CREDLY_NETWORK_TECHNICIAN },
      { name: "Networking Devices and Initial Configuration", url: CREDLY_NETWORK_TECHNICIAN },
      { name: "Network Addressing and Basic Troubleshooting", url: CREDLY_NETWORK_TECHNICIAN },
      { name: "Network Support and Security", url: CREDLY_NETWORK_TECHNICIAN }
    ]
  },
  {
    name: "Google Data Analytics",
    overview:
      "Nine-course professional certificate developed by Google covering the full data analysis process: asking questions, preparing and cleaning data, analysing it and sharing results, using spreadsheets, SQL, Tableau and Python.",
    issuer: "Google · Coursera",
    year: "2026",
    url: `${COURSERA}/professional-cert/7JSDRF9GR171`,
    status: "earned",
    previewImage: "/Certificates/GOOGLE%20DATA%20ANALYTICS%20CERTIFICATE.png",
    includes: [
      { name: "Foundations: Data, Data, Everywhere", url: `${COURSERA}/JGPBESOBVTUS` },
      { name: "Ask Questions to Make Data-Driven Decisions", url: `${COURSERA}/G155QAGQIRQE` },
      { name: "Prepare Data for Exploration", url: `${COURSERA}/R1A3C19PVDXS` },
      { name: "Process Data from Dirty to Clean", url: `${COURSERA}/C9PH3ANY0EEZ` },
      { name: "Analyze Data to Answer Questions", url: `${COURSERA}/RWKXZU2ADP99` },
      { name: "Share Data Through the Art of Visualization", url: `${COURSERA}/UBO81U5D6N0T` },
      { name: "Introduction to Data Analysis Using Python", url: `${COURSERA}/WYC8MCRCCDOJ` },
      { name: "Google Data Analytics Capstone: Complete a Case Study", url: `${COURSERA}/1GAHC135XXGG` },
      { name: "Accelerate Your Job Search with AI", url: `${COURSERA}/2BW7RGXX2BS3` }
    ]
  },
  {
    name: "Certified Full-Stack Developer",
    overview:
      "freeCodeCamp’s new full-stack curriculum. All six required certifications are complete; the certification is awarded after passing the final exam, which opens in late 2026.",
    issuer: "freeCodeCamp",
    year: "2026",
    // No verification page until the final exam is passed.
    url: null,
    status: "in-progress",
    statusNote: "6 of 6 certifications complete · final exam pending (opens late 2026)",
    previewPlaceholder: "Coming in 2026",
    includes: [
      { name: "Responsive Web Design", url: `${FCC}/responsive-web-design-v9` },
      { name: "JavaScript", url: `${FCC}/javascript-v9` },
      { name: "Front-End Development Libraries", url: `${FCC}/front-end-development-libraries-v9` },
      { name: "Python", url: `${FCC}/python-v9` },
      { name: "Relational Databases", url: `${FCC}/relational-databases-v9` },
      { name: "Back-End Development and APIs", url: `${FCC}/back-end-development-and-apis-v9` }
    ]
  },
  {
    name: "HTML Fundamentals",
    overview:
      "Codecred assessment of foundational HTML: document structure, elements, semantic markup, forms and accessibility. Passed with a final score of 96%.",
    issuer: "Codecred",
    year: "2026",
    url: "https://codecred.dev/verify/6d8dff92-a05d-4562-bd9a-56640d18c8af",
    status: "earned",
    previewImage: "/Certificates/HTML%20FUNDAMENTALS%20CERTIFICATE.png"
  }
];

// Certificate programs in progress, shown under the earned certificates.
export const currentlyTaking = [
  { title: "Google IT Support", issuer: "Google · Coursera" },
  { title: "Oracle Cloud Infrastructure Foundations Associate", issuer: "Oracle" }
];
