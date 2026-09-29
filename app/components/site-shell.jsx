import Link from "next/link";
import MobileMenu from "./mobile-menu";
import ThemeToggle from "./theme-toggle";
import { navSections, profile } from "../data/profile";

// Slim top bar + centered page container shared by every content page.
export default function SiteShell({ children, narrow = false }) {
  const year = new Date().getFullYear();

  return (
    <div className={`shell${narrow ? " shell-narrow" : ""}`}>
      <header className="topbar">
        <div className="topbar-inner">
          <Link className="topbar-name" href="/">
            {profile.name}
          </Link>
          <nav className="topbar-nav" aria-label="Sections">
            {navSections.map((section) => (
              <Link key={section.id} href={`/#${section.id}`}>
                {section.label}
              </Link>
            ))}
            <ThemeToggle />
          </nav>
          <MobileMenu sections={navSections} resume={profile.resume} />
        </div>
      </header>

      {children}

      <footer className="footer">
        © {year} {profile.name}. All rights reserved.
      </footer>
    </div>
  );
}
