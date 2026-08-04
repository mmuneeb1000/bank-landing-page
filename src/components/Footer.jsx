import Logo from "/images/logo-light.svg";
import Facebook from "/images/icon-facebook.svg";
import Youtube from "/images/icon-youtube.svg";
import Twitter from "/images/icon-twitter.svg";
import Pinterest from "/images/icon-pinterest.svg";
import Instagram from "/images/icon-instagram.svg";

const links = [
  ["About Us", "Contact", "Blog"],
  ["Careers", "Support", "Privacy Policy"],
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 px-6 py-12 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row lg:justify-between lg:items-start">
        <div className="flex flex-col items-center gap-8 lg:items-start">
          <img src={Logo} alt="Easybank" className="w-36" />

          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook">
              <img src={Facebook} alt="" className="h-5 w-5" />
            </a>

            <a href="#" aria-label="YouTube">
              <img src={Youtube} alt="" className="h-5 w-5" />
            </a>

            <a href="#" aria-label="Twitter">
              <img src={Twitter} alt="" className="h-5 w-5" />
            </a>

            <a href="#" aria-label="Pinterest">
              <img src={Pinterest} alt="" className="h-5 w-5" />
            </a>

            <a href="#" aria-label="Instagram">
              <img src={Instagram} alt="" className="h-5 w-5" />
            </a>
          </div>
        </div>

        <nav
          className="flex flex-col items-center gap-4 text-sm font-semibold
        lg:flex-row lg:items-start lg:gap-20"
        >
          <div className="flex flex-col items-center gap-4 lg:items-start">
            <a
              href="#about"
              className="text-gray-300 transition-colors hover:text-green-400"
            >
              About Us
            </a>

            <a
              href="#contact"
              className="text-gray-300 transition-colors hover:text-green-400"
            >
              Contact
            </a>

            <a
              href="#blog"
              className="text-gray-300 transition-colors hover:text-green-400"
            >
              Blog
            </a>
          </div>

          <div className="flex flex-col items-center gap-4 lg:items-start">
            <a
              href="#careers"
              className="text-gray-300 transition-colors hover:text-green-400"
            >
              Careers
            </a>

            <a
              href="#support"
              className="text-gray-300 transition-colors hover:text-green-400"
            >
              Support
            </a>

            <a
              href="#privacy"
              className="text-gray-300 transition-colors hover:text-green-400"
            >
              Privacy Policy
            </a>
          </div>
        </nav>

        {/* CTA + Copyright */}
        <div className="flex flex-col items-center gap-6 lg:items-end">
          <button className="rounded-full bg-gradient-to-r from-green-400 to-cyan-400 px-7 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-80">
            Request Invite
          </button>

          <p className="text-center text-xs text-muted lg:text-right">
            © Easybank. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
