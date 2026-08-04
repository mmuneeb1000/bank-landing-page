import { useState } from "react";
import DarkLogo from "/images/logo-dark.svg";
import LightLogo from "/images/logo-light.svg";
import HamburgerLight from "/images/icon-hamburger-light.svg";
import HamburgerDark from "/images/icon-hamburger-dark.svg";
import Close from "/images/icon-close.svg";
import useTheme from "../hooks/useTheme";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="relative z-100 bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a href="/" onClick={closeMenu}>
          <img
            src={isDark ? LightLogo : DarkLogo}
            alt="Easybank"
            className="w-36"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-sm font-semibold text-primary transition-colors hover:text-secondary"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-sm font-semibold text-primary transition-colors hover:text-secondary"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm font-semibold text-primary transition-colors hover:text-secondary"
          >
            Contact
          </a>

          <a
            href="#blog"
            className="text-sm font-semibold text-primary transition-colors hover:text-secondary"
          >
            Blog
          </a>

          <a
            href="#careers"
            className="text-sm font-semibold text-primary transition-colors hover:text-secondary"
          >
            Careers
          </a>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              isDark ? "Switch to light theme" : "Switch to dark theme"
            }
            className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-primary transition-colors hover:bg-muted/20"
          >
            {isDark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <circle cx="12" cy="12" r="4" /> <path d="M12 2v2" />
                <path d="M12 20v2" /> <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" /> <path d="M2 12h2" />
                <path d="M20 12h2" /> <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <button
            className="rounded-full bg-gradient-to-r from-secondary to-accent px-7 py-3 text-sm font-semibold 
          text-white transition-opacity hover:opacity-80"
          >
            Request Invite
          </button>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="md:hidden"
        >
          <img
            src={isMenuOpen ? Close : isDark ? HamburgerLight : HamburgerDark}
            alt=""
            className="h-4 w-4"
          />
        </button>
      </div>

      <div
        className={`absolute left-6 right-6 top-full z-50 rounded-md bg-background px-6 py-6
          shadow-xl transition-all duration-200 md:hidden ${
            isMenuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          }`}
      >
        <nav className="flex flex-col items-center gap-5">
          <a
            href="#home"
            onClick={closeMenu}
            className="font-semibold text-primary"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={closeMenu}
            className="font-semibold text-primary"
          >
            About
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
            className="font-semibold text-primary"
          >
            Contact
          </a>

          <a
            href="#blog"
            onClick={closeMenu}
            className="font-semibold text-primary"
          >
            Blog
          </a>

          <a
            href="#careers"
            onClick={closeMenu}
            className="font-semibold text-primary"
          >
            Careers
          </a>

          <button
            onClick={closeMenu}
            className="mt-2 rounded-full bg-gradient-to-r from-secondary to-accent 
            px-7 py-3 text-sm font-semibold text-white"
          >
            Request Invite
          </button>
        </nav>
      </div>
    </header>
  );
}
