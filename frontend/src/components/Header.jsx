import { useState, useEffect } from "react";
import workraWhiteLogo from "../assets/workrawhitelogo.png";

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
          {["Home", "Features", "Pricing", "Blog", "Contact"].map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white text-2xl font-serif hover:text-verge-accent transition-colors duration-200"
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="mt-4 bg-verge-accent text-white rounded-full px-8 py-3 text-sm font-medium hover:bg-verge-accent/85 transition-colors duration-200">
            Schedule a demo
          </button>
        </nav>
      </div>
    </header>
  );
};
