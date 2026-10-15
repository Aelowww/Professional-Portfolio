import {
  siCisco,
  siCss,
  siDiscord,
  siExpress,
  siFacebook,
  siFigma,
  siFirebase,
  siGit,
  siGithub,
  siGmail,
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
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel
} from "simple-icons";

// LinkedIn and Tableau aren't in simple-icons, so those two are drawn here.
const custom = {
  linkedin: {
    hex: "0A66C2",
    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"
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
  express: siExpress,
  python: siPython,
  mongodb: siMongodb,
  postgresql: siPostgresql,
  supabase: siSupabase,
  firebase: siFirebase,
  vercel: siVercel,
  cisco: siCisco,
  git: siGit,
  figma: siFigma,
  github: siGithub,
  instagram: siInstagram,
  facebook: siFacebook,
  discord: siDiscord,
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
