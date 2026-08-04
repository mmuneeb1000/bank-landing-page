import { useState } from "react";
import DarkLogo from "/images/logo-dark.svg";
import LightLogo from "/images/logo-light.svg";
import HamburgerLight from "/images/icon-hamburger-light.svg";
import HamburgerDark from "/images/icon-hamburger-dark.svg";
import Close from "/images/icon-close.svg";
import useTheme from "../hooks/useTheme";
import SunIcon from "../icons/SunIcon";
import MoonIcon from "../icons/MoonIcon";

const navLinks = ["Home", "About", "Contact", "Blog", "Careers"];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const closeMenu = () => setIsMenuOpen(false);

  const linkClass =
    "relative text-sm font-semibold text-primary transition-colors hover:text-secondary after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full";

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
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className={linkClass}>
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-primary"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            className="
              rounded-full bg-gradient-to-r from-secondary to-accent
              px-7 py-3 text-sm font-semibold text-white
              transition-opacity hover:opacity-80
            "
          >
            Request Invite
          </button>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
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
        className={`
          absolute left-6 right-6 top-full z-50 rounded-md bg-background
          px-6 py-6 shadow-xl transition-all duration-200 md:hidden
          ${
            isMenuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          }
        `}
      >
        <nav className="flex flex-col items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={closeMenu}
              className="font-semibold text-primary"
            >
              {link}
            </a>
          ))}

          <button
            onClick={closeMenu}
            className="
              mt-2 rounded-full bg-gradient-to-r from-secondary to-accent
              px-7 py-3 text-sm font-semibold text-white
            "
          >
            Request Invite
          </button>
        </nav>
      </div>
    </header>
  );
}
