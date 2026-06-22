import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Sparkles, ShieldCheck } from "lucide-react";

// Importing images from assets
import girlcleaning from "../assets/girlcleaning.png";
import acRepair from "../assets/ac repair.jpg";
import carpenter from "../assets/carpenter.jpg";
import dusting from "../assets/dusting.jpg";
import equipmentRepair from "../assets/equiment repair.jpg";
import plumbing from "../assets/plumbring.jpg";
import socketRepair from "../assets/socket repair.jpg";
import windowCleaning from "../assets/window cleaning.jpg";
import wiring from "../assets/wiring.jpg";
import floorCleaning from "../assets/floor cleaning.png";
import glassCleaning from "../assets/glass cleaning.png";
import utensilCleaning from "../assets/utensil cleaning.png";
import bathroomCleaning from "../assets/bathroom cleaning.png";
import deepCleaning from "../assets/deep cleaning.png";
import sofaCleaning from "../assets/sofa cleaning.png";

const services = [
  { name: "Floor Cleaning", image: floorCleaning, slug: "floor-cleaning" },
  { name: "Glass Cleaning", image: glassCleaning, slug: "glass-cleaning" },
  { name: "Utensil Cleaning", image: utensilCleaning, slug: "utensil-cleaning" },
  { name: "Bathroom Cleaning", image: bathroomCleaning, slug: "bathroom-cleaning" },
  { name: "Deep Cleaning", image: deepCleaning, slug: "deep-cleaning" },
  { name: "Sofa Cleaning", image: sofaCleaning, slug: "sofa-cleaning" },
  { name: "Dusting", image: dusting, slug: "dusting" },
  { name: "AC Repair", image: acRepair, slug: "ac-repair" },
  { name: "Carpenter", image: carpenter, slug: "carpenter" },
  { name: "Equipment Repair", image: equipmentRepair, slug: "equipment-repair" },
  { name: "Plumbing", image: plumbing, slug: "plumbing" },
  { name: "Socket Repair", image: socketRepair, slug: "socket-repair" },
  { name: "Window Cleaning", image: windowCleaning, slug: "window-cleaning" },
  { name: "Wiring", image: wiring, slug: "wiring" },
];

export const ServicesSection = () => {
  // Inject ItemList JSON-LD structured data for services grid
  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Workra Home Services",
      "description": "Book trusted house help — from hourly bookings to express cleans to daily upkeep. 13 services with transparent flat pricing.",
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
      className="py-8 md:py-14 px-4 md:px-8 lg:px-16"
      aria-label="Home cleaning and repair services"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Main Card Container */}
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden min-h-[400px] sm:min-h-[480px] md:min-h-[600px] lg:min-h-[650px]">
          {/* Background Image */}
          <img
            src={girlcleaning}
            alt="Professional home cleaning service by Workra in Patna — trusted house help for floor cleaning, bathroom cleaning, dusting and more"
            className="absolute inset-0 w-full h-full object-cover object-top"
            loading="eager"
          />

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-between p-4 sm:p-6 md:p-10 lg:p-12 min-h-[400px] sm:min-h-[480px] md:min-h-[600px] lg:min-h-[650px]">
            {/* Top Content */}
            <div className="flex justify-between items-start">
              <div>
                <span
                  className="inline-block text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-white/80 mb-3 md:mb-4"
                  style={{ letterSpacing: "0.2em" }}
                >
                  SERVICES
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-lg">
                  What Can Your House
                  <br />
                  Help Do?
                </h2>
              </div>

              {/* View All Button */}
              <Link
                to="/all-services"
                className="hidden md:flex items-center gap-2 text-white text-sm font-medium group hover:opacity-80 transition-opacity"
              >
                <span>View All</span>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </Link>
            </div>

            {/* Bottom — Cleaning in Minutes Feature */}
            <div className="mt-auto">
              {/* Mobile View All */}
              <div className="flex md:hidden justify-end mb-4">
                <Link
                  to="/all-services"
                  className="flex items-center gap-2 text-white text-sm font-medium"
                >
                  <span>View All</span>
                  <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </Link>
              </div>

              {/* Cleaning in Minutes Banner */}
              <div
                className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/15 p-3 sm:p-5 md:p-8"
                role="region"
                aria-label="Quick booking stats — book in 60 seconds, arrive in 10 minutes, 100% satisfaction"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-8">
                  {/* Left — Tagline */}
                  <div className="flex-shrink-0 max-w-sm">
                    <div className="flex items-center gap-2 mb-1 md:mb-2">
                      <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-400" />
                      <span className="text-emerald-400 text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase">
                        Fast & Reliable
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-white leading-snug">
                      Sparkling Clean, <span className="text-emerald-400">In Minutes.</span>
                    </h3>
                    <p className="hidden sm:block text-white/50 text-xs sm:text-sm mt-2 leading-relaxed">
                      Book a verified professional and get your home cleaned — fast, easy, no hassle.
                    </p>
                  </div>

                  {/* Right — Stat Cards */}
                  <div className="flex flex-nowrap gap-2 sm:gap-3 md:gap-4 flex-1 md:justify-end">
                    {/* Card 1 */}
                    <div className="flex-1 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 p-2 sm:p-3 md:p-4 text-center hover:bg-white/15 hover:border-white/25 transition-all duration-300 group">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-1.5 sm:mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-emerald-400" />
                      </div>
                      <div className="text-base sm:text-xl md:text-2xl font-bold text-white mb-0.5">60s</div>
                      <div className="text-white/50 text-[9px] sm:text-[10px] md:text-xs font-medium">Book in Sec</div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex-1 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 p-2 sm:p-3 md:p-4 text-center hover:bg-white/15 hover:border-white/25 transition-all duration-300 group">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-1.5 sm:mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-emerald-400" />
                      </div>
                      <div className="text-base sm:text-xl md:text-2xl font-bold text-white mb-0.5">10 min</div>
                      <div className="text-white/50 text-[9px] sm:text-[10px] md:text-xs font-medium">Arrive in Minutes</div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex-1 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 p-2 sm:p-3 md:p-4 text-center hover:bg-white/15 hover:border-white/25 transition-all duration-300 group">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-1.5 sm:mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                        <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-emerald-400" />
                      </div>
                      <div className="text-base sm:text-xl md:text-2xl font-bold text-white mb-0.5">100%</div>
                      <div className="text-white/50 text-[9px] sm:text-[10px] md:text-xs font-medium">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4"
              style={{ color: "#1a1a1a" }}
            >
              Book trusted house
              <br />
              help.
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              From hourly bookings to express cleans to daily upkeep, Workra's
              got you covered.{" "}
              <span className="font-semibold text-slate-700">
                {services.length} services
              </span>
              , transparent flat pricing.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
            {services.map((service, index) => (
              <Link
                to={`/services/${service.slug}`}
                key={index}
                className="group cursor-pointer"
                style={{
                  opacity: 0,
                  animation: `fadeInUp 0.5s ease-out forwards`,
                  animationDelay: `${index * 60}ms`,
                }}
              >
                <div className="bg-[#f5f5f5] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-[#efefef]">
                  {/* Card Image */}
                  <div className="aspect-square p-3 md:p-4 flex items-center justify-center">
                    <img
                      src={service.image}
                      alt={`${service.name} service in Patna — book on Workra`}
                      loading="lazy"
                      className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Card Footer */}
                  <div className="px-3 md:px-4 pb-3 md:pb-4">
                    <h3
                      className="text-xs sm:text-sm font-bold leading-tight mb-1.5"
                      style={{ color: "#1a3a2a" }}
                    >
                      {service.name}
                    </h3>
                    <div className="flex items-center gap-1 text-slate-400 group-hover:text-[#3D7B52] transition-colors">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
