import {
  siCisco,
  siCss,
  siD3,
  siExpress,
  siFacebook,
  siFigma,
  siFirebase,
  siGit,
  siGithub,
  siGmail,
  siGnubash,
  siGooglegemini,
  siGooglesheets,
  siHtml5,
  siInstagram,
  siJavascript,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siPhp,
  siPostgresql,
  siPython,
  siReact,
  siSocketdotio,
  siSqlite,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
  siVite,
  siX
} from "simple-icons";

// LinkedIn and Tableau aren't in simple-icons, and "REST API" and "SQL" have no brand mark, so those are drawn here.
const custom = {
  linkedin: {
    hex: "0A66C2",
    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"
  },
  api: {
    hex: "6366F1",
    path: "M7.4 6.6 2 12l5.4 5.4 1.4-1.4L4.8 12l4-4-1.4-1.4Zm9.2 0-1.4 1.4 4 4-4 4 1.4 1.4L22 12l-5.4-5.4ZM13.1 4l-4.2 16h2l4.2-16h-2Z"
  },
  // Database cylinder.
  sql: {
    hex: "0EA5E9",
    path: "M12 3c-4.4 0-8 1.3-8 3s3.6 3 8 3 8-1.3 8-3-3.6-3-8-3ZM4 8.5V12c0 1.7 3.6 3 8 3s8-1.3 8-3V8.5c-1.7 1.1-4.7 1.8-8 1.8s-6.3-.7-8-1.8ZM4 14.5V18c0 1.7 3.6 3 8 3s8-1.3 8-3v-3.5c-1.7 1.1-4.7 1.8-8 1.8s-6.3-.7-8-1.8Z"
  },
  // Simplified Tableau mark: a large cross with four small ones at the corners.
  tableau: {
    hex: "E97627",
    path: "M11 6h2v5h5v2h-5v5h-2v-5H6v-2h5V6ZM3.9 2.5h1.2v1.4h1.4v1.2h-1.4V6.5h-1.2v-1.4H2.5v-1.2h1.4ZM18.9 2.5h1.2v1.4h1.4v1.2h-1.4V6.5h-1.2v-1.4H17.5v-1.2h1.4ZM3.9 17.5h1.2v1.4h1.4v1.2h-1.4V21.5h-1.2v-1.4H2.5v-1.2h1.4ZM18.9 17.5h1.2v1.4h1.4v1.2h-1.4V21.5h-1.2v-1.4H17.5v-1.2h1.4Z"
  }
};

const icons = {
  html: siHtml5,
  css: siCss,
  javascript: siJavascript,
  typescript: siTypescript,
  react: siReact,
  nextjs: siNextdotjs,
  nodejs: siNodedotjs,
  php: siPhp,
  tailwind: siTailwindcss,
  vite: siVite,
  express: siExpress,
  python: siPython,
  socketio: siSocketdotio,
  mongodb: siMongodb,
  postgresql: siPostgresql,
  supabase: siSupabase,
  firebase: siFirebase,
  sqlite: siSqlite,
  sheets: siGooglesheets,
  d3: siD3,
  bash: siGnubash,
  vercel: siVercel,
  gemini: siGooglegemini,
  cisco: siCisco,
  git: siGit,
  figma: siFigma,
  github: siGithub,
  instagram: siInstagram,
  facebook: siFacebook,
  x: siX,
  email: siGmail,
  ...custom
};

// Near-black logos would disappear in dark mode, so they follow the text color instead.
function colorFor(hex) {
  const value = Number.parseInt(hex, 16);
  const luminance = 0.2126 * ((value >> 16) & 255) + 0.7152 * ((value >> 8) & 255) + 0.0722 * (value & 255);
  return luminance < 40 ? "currentColor" : `#${hex}`;
}

export default function BrandIcon({ name, className = "brand-icon" }) {
  const icon = icons[name];
  if (!icon) return null;

  return (
    <svg className={className} viewBox="0 0 24 24" fill={colorFor(icon.hex)} aria-hidden="true">
      <path d={icon.path} />
    </svg>
  );
}
