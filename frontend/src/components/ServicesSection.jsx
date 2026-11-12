import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Sparkles, ShieldCheck, MapPin } from "lucide-react";
import { LocalityRequestModal } from "./LocalityRequestModal";

// Importing custom 3D service icons
import floorCleaning from "../assets/service-icons/sweeping-mopping.jpg";
import utensilCleaning from "../assets/service-icons/utensils.jpg";
import dusting from "../assets/service-icons/dusting.jpg";
import bathroomCleaning from "../assets/service-icons/bathroom-surface-cleaning.jpg";
import wardrobeCleaning from "../assets/service-icons/complete-wardrobe-cleaning.jpg";
import kitchenCabinet from "../assets/service-icons/kitchen-cabinet-cleaning.jpg";
import ironing from "../assets/service-icons/ironing-folding.jpg";
import windowCleaning from "../assets/service-icons/window.jpg";
import iconPayHour from "../assets/icon-pay-hour.jpg";

export const highlightCategories = [
  {
    id: "clean-home",
    title: "House Cleaning (Jhadu-Pocha)",
    description: "Daily sweeping, mopping, surface wipe down, and balcony cleaning.",
    price: "₹99/hr",
    duration: "Book 1 - 4 hours",
    badge: "Most Popular",
    icon: floorCleaning,
    link: "/services/house-cleaning",
  },
  {
    id: "get-sorted",
    title: "Utensil Washing (Bartan)",
    description: "Dishes, scrubbing pots & pans, sink cleanup, and kitchen organization.",
    price: "₹99/hr",
    duration: "~30 - 60 min",
    badge: "Daily Help",
    icon: utensilCleaning,
    link: "/services/utensil-cleaning",
  },
  {
    id: "pay-by-hour",
    title: "Any Household Chore",
    description: "You set the task list — cleaning, dishes, dusting, kitchen prep, or multiple chores.",
    price: "₹99/hr",
    duration: "Book 1 - 8 hours",
    badge: "Flat ₹99/hr",
    icon: iconPayHour,
    link: "/all-services",
  },
];

export const services = [
  { name: "House Cleaning (Jhadu-Pocha)", image: floorCleaning, slug: "house-cleaning", price: 99 },
  { name: "Utensil Cleaning (Bartan)", image: utensilCleaning, slug: "utensil-cleaning", price: 99 },
  { name: "Dusting & Organizing", image: dusting, slug: "dusting", price: 99 },
  { name: "Bathroom Cleaning", image: bathroomCleaning, slug: "bathroom-cleaning", price: 99 },
  { name: "Complete Wardrobe Cleaning", image: wardrobeCleaning, slug: "wardrobe-cleaning", price: 99 },
  { name: "Kitchen Cabinet Cleaning", image: kitchenCabinet, slug: "kitchen-cabinet-cleaning", price: 99 },
  { name: "Ironing & Folding", image: ironing, slug: "ironing-and-folding", price: 99 },
  { name: "Window Cleaning", image: windowCleaning, slug: "window-cleaning", price: 99 },
];

export const ServicesSection = ({ showHighlights = true, hideWave = false }) => {
  const [isLocalityModalOpen, setIsLocalityModalOpen] = useState(false);
  const [activeHighlightIndex, setActiveHighlightIndex] = useState(0);
  const highlightScrollRef = useRef(null);

  const handleHighlightScroll = () => {
    if (!highlightScrollRef.current) return;
    const container = highlightScrollRef.current;
    const scrollLeft = container.scrollLeft;
    const cards = container.querySelectorAll(".highlight-card-item");
    if (!cards || cards.length === 0) return;

    const baseOffset = cards[0].offsetLeft;
    let closestIndex = 0;
    let minDiff = Infinity;
    cards.forEach((card, index) => {
      const cardTarget = card.offsetLeft - baseOffset;
      const diff = Math.abs(scrollLeft - cardTarget);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = index;
      }
    });
    setActiveHighlightIndex(closestIndex);
  };

  const scrollToHighlight = (index) => {
    if (highlightScrollRef.current) {
      const container = highlightScrollRef.current;
      const cards = container.querySelectorAll(".highlight-card-item");
      if (cards && cards[index]) {
        const baseOffset = cards[0].offsetLeft;
        const targetLeft = cards[index].offsetLeft - baseOffset;
        container.scrollTo({
          left: targetLeft,
          behavior: "smooth",
        });
        setActiveHighlightIndex(index);
      }
    }
  };

  // Inject ItemList JSON-LD structured data for services grid
  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Workra House Help Services",
      "description": "Book trusted female house help in Patna — sweeping, mopping, utensil washing, dusting, and daily household chores at flat ₹99/hr.",
      "numberOfItems": services.length,
      "itemListElement": services.map((service, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": service.name,
        "url": `https://useworkra.com/services/${service.slug}`,
      })),
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(jsonLd);
    script.id = "services-itemlist-jsonld";
    // Avoid duplicates
    const existing = document.getElementById("services-itemlist-jsonld");
    if (existing) existing.remove();
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById("services-itemlist-jsonld");
      if (el) el.remove();
    };
  }, []);

  return (
    <section
      className="relative pt-6 md:pt-10 pb-12 md:pb-18 px-4 md:px-8 lg:px-16 bg-[#fafaf8] overflow-x-clip"
      aria-label="Home cleaning and repair services"
    >
      {/* Top curved wave connector from hero section */}
      {!hideWave && (
        <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none pointer-events-none -translate-y-[99%]">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-6 sm:h-9 md:h-12 block"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C380,55 980,55 1440,0 L1440,60 L0,60 Z"
              fill="#fafaf8"
            />
          </svg>
        </div>
      )}

      <div className="max-w-[1400px] mx-auto">
        {/* ── 'What can we take care of?' Overview Section ── */}
        {showHighlights && (
          <div className="mb-6 md:mb-10">
            {/* Header */}
            <div className="mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#2e6e3b] animate-pulse"></span>
                <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#2e6e3b]">
                  WHAT WE DO
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                What can we{" "}
                <span className="font-serif italic font-semibold text-[#2b6534]">
                  take care of?
                </span>
              </h2>
              <p className="text-slate-500 text-sm sm:text-base mt-2.5 max-w-xl leading-relaxed">
                Nearly all homes we've served book again. Book a verified female house helper in one tap for sweeping, mopping, utensils, or hourly help at flat ₹99/hr.
              </p>
            </div>

            {/* 3 Highlight Cards - Side by side horizontal swipe on mobile, grid on desktop */}
            <div
              ref={highlightScrollRef}
              onScroll={handleHighlightScroll}
              className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 overflow-x-auto md:overflow-visible pt-1 pb-4 md:pb-0 -mx-4 px-6 sm:-mx-8 sm:px-8 md:mx-0 md:px-0 snap-x snap-mandatory scroll-pl-6 sm:scroll-pl-8 scrollbar-hide items-stretch"
            >
              {highlightCategories.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                  className="highlight-card-item group bg-white rounded-3xl p-6 sm:p-7 lg:p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_36px_-8px_rgba(46,110,59,0.16)] hover:border-[#2e6e3b]/30 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden w-[80vw] max-w-[325px] md:w-auto md:max-w-none shrink-0 md:shrink snap-start"
                >
                  {/* Top: Icon & Badge */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-emerald-50/50 p-1.5 border border-emerald-100/60 shadow-sm group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-xl"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-50 text-[#2e6e3b] border border-emerald-200/60 tracking-tight">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#2e6e3b] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom meta row */}
                  <div className="pt-5 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <div>
                      <div className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
                        {item.price}
                      </div>
                      <div className="text-xs text-slate-400 font-medium mt-0.5">
                        {item.duration}
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-[#2e6e3b] group-hover:text-white group-hover:shadow-md group-hover:shadow-emerald-900/20 transition-all duration-300">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}

              {/* Trailing spacer for smooth right edge padding on mobile */}
              <div className="w-4 shrink-0 md:hidden" aria-hidden="true" />
            </div>

            {/* Carousel pagination dots indicator (mobile only) */}
            <div className="flex md:hidden items-center justify-center gap-2 mt-5 mb-2">
              {highlightCategories.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollToHighlight(idx)}
                  className={`h-2.5 transition-all duration-300 rounded-full cursor-pointer p-0 border-0 ${
                    activeHighlightIndex === idx
                      ? "w-7 bg-[#2e6e3b]"
                      : "w-2.5 bg-slate-200 hover:bg-slate-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* ── Services Catalogue Grid ── */}
        <div className="mt-12 md:mt-20" role="region" aria-label="Browse all home services">
          {/* Headline */}
          <div className="mb-8 md:mb-12 max-w-xl">
            <span
              className="inline-block text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3 md:mb-4"
              style={{ color: "#3D7B52", letterSpacing: "0.2em" }}
            >
              OUR SERVICES
            </span>
            <h2
              className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4"
              style={{ color: "#1a1a1a" }}
            >
              Book trusted house
              <br />
              <span className="font-serif italic font-semibold text-[#2b6534]">
                help in minutes.
              </span>
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              From hourly bookings to everyday chores, Workra delivers verified
              female domestic helpers to your doorstep in 10 minutes.{" "}
              <span className="font-semibold text-slate-700">
                Flat ₹99/hour
              </span>
              , transparent pricing.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3.5 sm:gap-4 md:gap-6">
            {services.map((service, index) => (
              <Link
                to={`/services/${service.slug}`}
                key={index}
                className="group cursor-pointer flex flex-col"
                style={{
                  opacity: 0,
                  animation: `fadeInUp 0.5s ease-out forwards`,
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_32px_-8px_rgba(61,123,82,0.18)] hover:border-[#3D7B52]/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between h-full p-3 sm:p-4">
                  {/* Card Image */}
                  <div className="aspect-square rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#f8faf9] to-[#f1f6f3] p-3 sm:p-4 flex items-center justify-center overflow-hidden mb-3 group-hover:from-[#f0f7f2] group-hover:to-[#e5f0e8] transition-colors">
                    <img
                      src={service.image}
                      alt={`${service.name} service in Patna — book on Workra`}
                      loading="lazy"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-108 drop-shadow-sm"
                    />
                  </div>

                  {/* Card Footer */}
                  <div className="flex-1 flex flex-col justify-between">
                    <h3
                      className="text-xs sm:text-sm font-bold leading-tight mb-2 group-hover:text-[#3D7B52] transition-colors"
                      style={{ color: "#1a3a2a" }}
                    >
                      {service.name}
                    </h3>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                      {service.price ? (
                        <div className="flex items-baseline gap-1">
                          <span className="text-[10px] sm:text-xs text-slate-400 font-medium">Flat</span>
                          <span className="text-xs sm:text-sm font-extrabold text-[#3D7B52]">₹{service.price}/hr</span>
                        </div>
                      ) : (
                        <span></span>
                      )}
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#3D7B52]/10 flex items-center justify-center text-[#3D7B52] group-hover:bg-[#3D7B52] group-hover:text-white transition-all duration-300">
                        <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Locality Request Callout Banner */}
          <div className="mt-8 sm:mt-12 p-4 sm:p-6 rounded-2xl bg-emerald-50/70 border border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#3D7B52]/10 flex items-center justify-center text-[#3D7B52] shrink-0 hidden sm:flex">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm sm:text-base font-bold text-gray-900">
                  Can't find your area or society?
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                  We're expanding rapidly across Patna. Tell us where you want Workra next!
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsLocalityModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3D7B52] hover:bg-[#2A4D35] text-white font-medium text-xs sm:text-sm rounded-xl transition-all shrink-0 cursor-pointer shadow-sm active:scale-95"
            >
              <span>Request Workra in your locality</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Locality Request Modal */}
      <LocalityRequestModal
        isOpen={isLocalityModalOpen}
        onClose={() => setIsLocalityModalOpen(false)}
      />
    </section>
  );
};
