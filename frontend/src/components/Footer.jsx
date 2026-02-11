import { footerData } from '../data/mock';

export const Footer = () => {
  return (
    <footer className="bg-verge-green py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-12 md:gap-16">
          {/* Brand */}
          <div>
            <h2 className="font-serif text-3xl text-white">Vergé</h2>
            <p className="text-white/50 text-sm mt-4 max-w-[300px] leading-relaxed font-light">
              {footerData.description}
            </p>
            <p className="text-white/30 text-xs mt-8 font-light">
              {footerData.copyright}
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-5">Pages</h3>
            <nav className="flex flex-col gap-3">
              {footerData.pages.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/50 text-sm hover:text-white transition-colors font-light"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-5">Information</h3>
            <nav className="flex flex-col gap-3">
              {footerData.information.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/50 text-sm hover:text-white transition-colors font-light"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
