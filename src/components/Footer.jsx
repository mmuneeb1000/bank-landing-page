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

const socialLinks = [
  { name: "Facebook", icon: Facebook },
  { name: "YouTube", icon: Youtube },
  { name: "Twitter", icon: Twitter },
  { name: "Pinterest", icon: Pinterest },
  { name: "Instagram", icon: Instagram },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 px-6 py-12 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col items-center gap-8 lg:items-start">
          <img src={Logo} alt="Easybank" className="w-36" />

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a key={social.name} href="#" aria-label={social.name}>
                <img src={social.icon} alt="" className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <nav
          className="
            flex flex-col items-center gap-4 text-sm font-semibold
            lg:flex-row lg:items-start lg:gap-20
          "
        >
          {links.map((column, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 lg:items-start"
            >
              {column.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
                  className="text-gray-300 transition-colors hover:text-green-400"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </nav>

        <div className="flex flex-col items-center gap-6 lg:items-end">
          <button
            className="
              rounded-full bg-gradient-to-r from-secondary to-accent
              px-7 py-3 text-sm font-semibold text-white
              transition-opacity hover:opacity-80
            "
          >
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
