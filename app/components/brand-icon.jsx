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

// LinkedIn isn't in simple-icons, so it is drawn here.
const custom = {
  linkedin: {
    hex: "0A66C2",
    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"
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

// Concepts with no brand get colored line icons. Mid-tone colors read on both themes.
const lineIcons = {
  // Two opposing arrows: traffic forwarded both ways
  routing: { color: "#0EA5E9", path: "M4 8h15m0 0-3.5-3.5M19 8l-3.5 3.5M20 16H5m0 0 3.5-3.5M5 16l3.5 3.5" },
  // Address hash
  addressing: { color: "#8B5CF6", path: "M9.5 4 7.5 20M16.5 4l-2 16M4.5 9h16M3.5 15h16" },
  // Globe
  dns: {
    color: "#10B981",
    path: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM3 12h18M12 3c2.4 2.5 3.6 5.5 3.6 9s-1.2 6.5-3.6 9M12 3c-2.4 2.5-3.6 5.5-3.6 9s1.2 6.5 3.6 9"
  },
  // Wrench
  troubleshooting: {
    color: "#F59E0B",
    path: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z"
  }
};

export default function BrandIcon({ name, className = "brand-icon" }) {
  const lineIcon = lineIcons[name];
  if (lineIcon) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke={lineIcon.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d={lineIcon.path} />
      </svg>
    );
  }

  const icon = icons[name];
  if (!icon) return null;

  return (
    <svg className={className} viewBox="0 0 24 24" fill={colorFor(icon.hex)} aria-hidden="true">
      <path d={icon.path} />
    </svg>
  );
}
