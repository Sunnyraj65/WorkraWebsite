import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import workraWhiteLogo from "../assets/workrawhitelogo.png";

const WhatsAppIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 lg:px-16 py-5">
      <div className="flex items-center">
        <div
          className={`flex items-center rounded-full px-4 py-2.5 border transition-all duration-500 ${
            scrolled
              ? "bg-zinc-800/80 backdrop-blur-2xl border-zinc-700/30 shadow-lg"
              : "bg-white/10 backdrop-blur-xl border-white/10"
          }`}
        >
          <img
            src={workraWhiteLogo}
            alt="Workra"
            className="h-6 md:h-8 w-auto mr-3 transition-opacity duration-500"
          />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-white text-zinc-900 rounded-full px-5 py-1.5 text-sm font-medium hover:bg-zinc-100 transition-colors duration-200"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-[72px] bg-verge-green/98 backdrop-blur-lg z-40 transition-all duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-start px-8 pt-10 gap-6">
          {["Services", "How It Works", "Why Us", "FAQ"].map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-white text-2xl font-serif hover:text-verge-accent transition-colors duration-200"
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-4 w-full sm:w-auto">
            <a
              href="https://wa.me/917050701478"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-verge-accent text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-verge-accent/85 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              +91 70507 01478
            </a>
            <a
              href="https://wa.me/919798105359"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-verge-accent text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-verge-accent/85 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              +91 97981 05359
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
