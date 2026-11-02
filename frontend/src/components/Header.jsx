import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import workraWhiteLogo from "../assets/workrawhitelogo.png";
import workraGreenLogo from "../assets/workrawhitelogo2.png";

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

// Service categories and their sub-services
const serviceCategories = [
  {
    name: "House Help Services",
    services: [
      { name: "House Cleaning (Jhadu-Pocha)", slug: "house-cleaning" },
      { name: "Utensil Washing (Bartan)", slug: "utensil-cleaning" },
      { name: "Dusting & Organizing", slug: "dusting" },
      { name: "Bathroom Cleaning", slug: "bathroom-cleaning" },
      { name: "Complete Wardrobe Cleaning", slug: "wardrobe-cleaning" },
      { name: "Kitchen Cabinet Cleaning", slug: "kitchen-cabinet-cleaning" },
      { name: "Ironing & Folding", slug: "ironing-and-folding" },
      { name: "Window Cleaning", slug: "window-cleaning" },
    ],
  },
  {
    name: "By The Hour (₹99/hr)",
    services: [
      { name: "1-Hour Express Chore (₹99)", slug: "house-cleaning" },
      { name: "Full House Reset (₹198)", slug: "house-cleaning" },
      { name: "Kitchen Prep & Utensils (₹99/hr)", slug: "utensil-cleaning" },
      { name: "Any Custom Chore (₹99/hr)", slug: "house-cleaning" },
    ],
  },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location]);

  const isHomePage = location.pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHomePage
          ? "bg-white shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 flex-shrink-0"
          >
            <img
              src={scrolled || !isHomePage ? workraGreenLogo : workraWhiteLogo}
              alt="Workra"
              className="h-6 md:h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Services Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  servicesOpen
                    ? "bg-[#45844b]/10 text-[#45844b]"
                    : scrolled || !isHomePage
                    ? "text-slate-700 hover:text-[#45844b] hover:bg-slate-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Panel */}
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[520px] bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden animate-fade-in-up">
                  <div className="flex">
                    {/* Left - Categories */}
                    <div className="w-[200px] bg-slate-50/80 border-r border-slate-100 p-3">
                      <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-slate-400 px-3 mb-2 block">
                        SERVICES
                      </span>
                      {serviceCategories.map((category, index) => (
                        <button
                          key={category.name}
                          onMouseEnter={() => setActiveCategory(index)}
                          onClick={() => setActiveCategory(index)}
                          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                            activeCategory === index
                              ? "bg-[#45844b]/10 text-[#45844b]"
                              : "text-slate-600 hover:bg-slate-100"
                          }`}
                        >
                          {category.name}
                          <ChevronRight className="w-4 h-4 opacity-50" />
                        </button>
                      ))}
                    </div>

                    {/* Right - Sub Services */}
                    <div className="flex-1 p-3">
                      <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-slate-400 px-3 mb-2 block">
                        {serviceCategories[activeCategory].name.toUpperCase()}{" "}
                        FOR
                      </span>
                      <div className="space-y-0.5">
                        {serviceCategories[activeCategory].services.map(
                          (service) => (
                            <Link
                              key={service.slug}
                              to={`/services/${service.slug}`}
                              onClick={() => setServicesOpen(false)}
                              className="block px-3 py-2.5 text-sm text-slate-600 hover:text-[#45844b] hover:bg-[#45844b]/5 rounded-xl transition-all duration-200 font-medium"
                            >
                              {service.name}
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Bottom link */}
                  <div className="border-t border-slate-100 px-5 py-3">
                    <Link
                      to="/all-services"
                      onClick={() => setServicesOpen(false)}
                      className="text-sm text-[#45844b] font-semibold hover:underline"
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* About link */}
            <a
              href={isHomePage ? "#why-us" : "/#why-us"}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                scrolled || !isHomePage
                  ? "text-slate-700 hover:text-[#45844b] hover:bg-slate-50"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              About
            </a>

            {/* FAQ link */}
            <a
              href={isHomePage ? "#faq" : "/#faq"}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                scrolled || !isHomePage
                  ? "text-slate-700 hover:text-[#45844b] hover:bg-slate-50"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              FAQ
            </a>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Download App Button - Desktop Dropdown */}
            <div className="relative group hidden lg:block">
              <button
                type="button"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#45844b] text-white rounded-full text-sm font-semibold hover:bg-[#3a703f] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
              >
                <span>Download App</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              <div className="absolute right-0 top-full pt-2 opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50 min-w-[200px]">
                <div className="bg-white rounded-2xl p-2 shadow-xl border border-slate-100 flex flex-col gap-1">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.workra.mobile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors text-slate-800 text-sm font-medium"
                  >
                    <svg
                      className="w-4 h-4 text-[#45844b] shrink-0"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm11.396 11.39l2.84 2.845L5.78 22.893l9.225-9.69zm1.205-1.205l3.22 3.22a1 1 0 001.414 0l.37-.37c1.33-1.33 1.33-3.488 0-4.818l-.37-.37a1 1 0 00-1.414 0l-3.22 3.22zM5.78 1.107l12.065 6.836-2.84 2.844L5.78 1.107z" />
                    </svg>
                    <span>Google Play</span>
                  </a>
                  <a
                    href="https://apps.apple.com/in/app/workra/id6820196978"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors text-slate-800 text-sm font-medium"
                  >
                    <svg
                      className="w-4 h-4 text-[#181818] shrink-0"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.73-.95 2.76.99.08 2.03-.51 2.67-1.26z" />
                    </svg>
                    <span>App Store (iOS)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => {
                setMenuOpen(!menuOpen);
                if (menuOpen) setMobileServicesOpen(false);
              }}
              className={`lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${
                scrolled || !isHomePage
                  ? "text-slate-700 hover:bg-slate-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-16 bg-white z-40 transition-all duration-300 overflow-y-auto ${
          menuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-2"
        }`}
      >
        <nav className="flex flex-col px-5 pt-4 pb-8">
          {/* Services Accordion */}
          <div className="border-b border-slate-100">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between py-4 text-base font-semibold text-slate-800"
            >
              Services
              <ChevronDown
                className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileServicesOpen && (
              <div className="pb-4 space-y-4">
                {serviceCategories.map((category) => (
                  <div key={category.name}>
                    <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-slate-400 block mb-2 px-1">
                      {category.name}
                    </span>
                    <div className="grid grid-cols-2 gap-1">
                      {category.services.map((service) => (
                        <Link
                          key={service.slug}
                          to={`/services/${service.slug}`}
                          onClick={() => {
                            setMenuOpen(false);
                            setMobileServicesOpen(false);
                          }}
                          className="text-sm text-slate-600 hover:text-[#45844b] py-2 px-3 rounded-lg hover:bg-[#45844b]/5 transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                <Link
                  to="/all-services"
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm text-[#45844b] font-semibold px-1 pt-1"
                >
                  View All Services →
                </Link>
              </div>
            )}
          </div>

          {/* About */}
          <a
            href={isHomePage ? "#why-us" : "/#why-us"}
            onClick={() => setMenuOpen(false)}
            className="py-4 text-base font-semibold text-slate-800 border-b border-slate-100"
          >
            About
          </a>

          {/* FAQ */}
          <a
            href={isHomePage ? "#faq" : "/#faq"}
            onClick={() => setMenuOpen(false)}
            className="py-4 text-base font-semibold text-slate-800 border-b border-slate-100"
          >
            FAQ
          </a>

          {/* CTA Buttons */}
          <div className="mt-6 space-y-3">
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href="https://play.google.com/store/apps/details?id=com.workra.mobile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 bg-[#45844b] text-white rounded-xl font-semibold text-xs sm:text-sm hover:bg-[#3a703f] transition-colors"
              >
                <svg
                  className="w-4 h-4 shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm11.396 11.39l2.84 2.845L5.78 22.893l9.225-9.69zm1.205-1.205l3.22 3.22a1 1 0 001.414 0l.37-.37c1.33-1.33 1.33-3.488 0-4.818l-.37-.37a1 1 0 00-1.414 0l-3.22 3.22zM5.78 1.107l12.065 6.836-2.84 2.844L5.78 1.107z" />
                </svg>
                Google Play
              </a>

              <a
                href="https://apps.apple.com/in/app/workra/id6820196978"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 bg-[#181818] text-white rounded-xl font-semibold text-xs sm:text-sm hover:bg-black transition-colors"
              >
                <svg
                  className="w-4 h-4 shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.73-.95 2.76.99.08 2.03-.51 2.67-1.26z" />
                </svg>
                App Store
              </a>
            </div>

            <a
              href="https://wa.me/919296897288"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#45844b]/10 text-[#45844b] rounded-xl font-semibold text-sm hover:bg-[#45844b]/15 transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              +91 92968 97288
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
