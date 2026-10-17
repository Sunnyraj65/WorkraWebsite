import React, { useRef, useEffect } from "react";
import { Link, useParams, useNavigate, Navigate } from "react-router-dom";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Star,
  ShieldCheck,
  Award,
  CheckCircle2,
  Clock,
  Phone,
  Sparkles,
} from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SEO } from "./SEO";

// Importing custom 3D service icons
import floorCleaning from "../assets/service-icons/sweeping-mopping.jpg";
import utensilCleaning from "../assets/service-icons/utensils.jpg";
import dusting from "../assets/service-icons/dusting.jpg";
import bathroomCleaning from "../assets/service-icons/bathroom-surface-cleaning.jpg";
import wardrobeCleaning from "../assets/service-icons/complete-wardrobe-cleaning.jpg";
import kitchenCabinet from "../assets/service-icons/kitchen-cabinet-cleaning.jpg";
import ironing from "../assets/service-icons/ironing-folding.jpg";
import windowCleaning from "../assets/service-icons/window.jpg";

const servicesData = {
  "house-cleaning": {
    name: "House Cleaning (Jhadu-Pocha)",
    image: floorCleaning,
    tagline: "House Cleaning Services in Patna",
    shortDesc:
      "Complete house sweeping, mopping, dusting, and room upkeep by verified female house helpers.",
    about:
      "Our house cleaning service gives you instant, reliable female domestic help for your home. Our verified helpers handle sweeping and mopping (jhadu-pocha) of all rooms, dusting surfaces, balcony cleaning, and kitchen cleanup. Book in 60 seconds and a trusted helper arrives at your door in 10 minutes. Flat ₹99 per hour with zero monthly commitments.",
    highlights: [
      "Sweeping & mopping (Jhadu-Pocha) of all rooms",
      "Dusting furniture, tables & shelves",
      "Balcony & corridor cleaning",
      "Arrives in 10 minutes at your door",
      "Flat ₹99/hour transparent pricing",
    ],
    duration: "1-3 hours",
    category: "House Help",
    price: 99,
  },
  "utensil-cleaning": {
    name: "Utensil Cleaning (Bartan)",
    image: utensilCleaning,
    tagline: "Utensil Cleaning Services in Patna",
    shortDesc:
      "Thorough cleaning, scrubbing, and drying of all kitchen utensils, pots, pans, and cookware.",
    about:
      "Piled-up dishes after meals? Book verified female house help on-demand. Our helpers wash, scrub, rinse, and dry all plates, spoons, glassware, cooker, kadhai, and pots to sparkling cleanliness. Flat ₹99 per hour, helper at your door in 10 minutes.",
    highlights: [
      "All kitchen utensils, pots & pans scrubbed",
      "Safe dishwashing soaps & hygiene care",
      "Kitchen counter & sink cleaned",
      "Dishes dried & organized",
      "Flat ₹99/hour transparent pricing",
    ],
    duration: "1-2 hours",
    category: "House Help",
    price: 99,
  },
  "dusting": {
    name: "Dusting & Organizing",
    image: dusting,
    tagline: "Dusting & Organizing Services in Patna",
    shortDesc:
      "Thorough dusting of all surfaces, furniture, shelves, fans, and home organizing.",
    about:
      "Keep your home spotless and allergen-free. Our helpers dust furniture, TV units, tables, shelves, ceiling fans, and window ledges, as well as fold clothes and tidy up rooms. Flat ₹99 per hour.",
    highlights: [
      "Furniture, shelves & tabletop dusting",
      "Ceiling fans & switchboard wipe down",
      "Bed making & room tidying",
      "Clothes folding & organizing",
      "Flat ₹99/hour transparent pricing",
    ],
    duration: "1-2 hours",
    category: "House Help",
    price: 99,
  },
  "bathroom-cleaning": {
    name: "Bathroom Cleaning",
    image: bathroomCleaning,
    tagline: "Bathroom Cleaning Services in Patna",
    shortDesc:
      "Everyday bathroom floor scrubbing, toilet disinfection, and washbasin sanitization.",
    about:
      "A clean bathroom is essential for a healthy home. Our verified helpers scrub bathroom floor tiles, disinfect washbasins and toilet bowls, and wipe down mirror and fixtures. Flat ₹99 per hour.",
    highlights: [
      "Toilet bowl & washbasin sanitization",
      "Bathroom floor tile scrubbing",
      "Mirror & faucet wipe down",
      "Trash disposal & air fresh",
      "Flat ₹99/hour transparent pricing",
    ],
    duration: "1-2 hours",
    category: "House Help",
    price: 99,
  },
  "wardrobe-cleaning": {
    name: "Complete Wardrobe Cleaning",
    image: wardrobeCleaning,
    tagline: "Wardrobe & Closet Organizing Services in Patna",
    shortDesc:
      "Complete wardrobe cleaning, clothes folding, seasonal sorting, and shelf organizing.",
    about:
      "Messy closet slowing down your mornings? Book verified female house help on-demand. Our helpers declutter, wipe down wardrobe shelves and modular drawers, iron and fold clothes neatly, sort garments by category, and stack everything in order. Flat ₹99 per hour, helper at your door in 10 minutes.",
    highlights: [
      "Closet decluttering & shelf wipe down",
      "Neat clothes folding & hanger arrangement",
      "Drawer sorting & seasonal clothing stacking",
      "Ironing & wardrobe organization",
      "Flat ₹99/hour transparent pricing",
    ],
    duration: "1-3 hours",
    category: "House Help",
    price: 99,
  },
  "kitchen-cabinet-cleaning": {
    name: "Kitchen Cabinet Cleaning",
    image: kitchenCabinet,
    tagline: "Kitchen Cabinet & Cupboard Cleaning in Patna",
    shortDesc:
      "Thorough cleaning, degreasing, and organizing of all kitchen cabinet boxes, modular drawers, and shelves.",
    about:
      "Sticky grime, oil buildup, or disorganised kitchen cabinets? Book verified female house help on-demand. Our helpers wipe down cabinet exteriors, deep-clean modular shelves, reorganize spice boxes and cookware, and sanitize your kitchen storage. Flat ₹99 per hour with zero commitments.",
    highlights: [
      "Interior & exterior kitchen cabinet wiping",
      "Modular shelves & spice box organizing",
      "Oil, grease & dust removal",
      "Cookware & utensil realignment",
      "Flat ₹99/hour transparent pricing",
    ],
    duration: "1-2 hours",
    category: "House Help",
    price: 99,
  },
  "ironing-and-folding": {
    name: "Ironing & Folding",
    image: ironing,
    tagline: "Clothes Ironing & Folding Services in Patna",
    shortDesc:
      "Crisp clothes ironing, crease removal, and neat clothes folding & wardrobe organizing.",
    about:
      "Tired of laundry piles? Book verified female house help on-demand. Our helpers press and iron your shirts, pants, sarees, kurtas, and everyday clothes with care, followed by neat folding and wardrobe stacking. Flat ₹99 per hour, helper at your door in 10 minutes.",
    highlights: [
      "Crisp steam & dry clothes ironing",
      "Shirts, trousers, sarees & daily wear",
      "Neat clothes folding & wardrobe stacking",
      "Delicate fabrics handled with care",
      "Flat ₹99/hour transparent pricing",
    ],
    duration: "1-2 hours",
    category: "House Help",
    price: 99,
  },
  "window-cleaning": {
    name: "Window Cleaning",
    image: windowCleaning,
    tagline: "Window Cleaning Services in Patna",
    shortDesc:
      "Window cleaning for glass panes, frames, grills and sills.",
    about:
      "Clean windows brighten up a room almost instantly. Our background-verified helpers clean window glass panes, frames, and grills to remove dust and dirt without streaks.",
    highlights: [
      "Glass panes, frames & grills",
      "Dust and smudge removal",
      "Eco-friendly solutions",
      "Streak-free spotless finish",
      "Flat ₹99/hour transparent pricing",
    ],
    duration: "1-2 hours",
    category: "House Help",
    price: 99,
  },
};

// Aliases for slug flexibility
servicesData["wardrobe"] = servicesData["wardrobe-cleaning"];
servicesData["complete-wardrobe-cleaning"] = servicesData["wardrobe-cleaning"];
servicesData["kitchen-cabinet"] = servicesData["kitchen-cabinet-cleaning"];

// Canonical slugs for service list
const CANONICAL_SLUGS = [
  "house-cleaning",
  "utensil-cleaning",
  "dusting",
  "bathroom-cleaning",
  "wardrobe-cleaning",
  "kitchen-cabinet-cleaning",
  "ironing-and-folding",
  "window-cleaning",
];

// Helper to get all canonical services as array
const getAllServices = () =>
  CANONICAL_SLUGS.map((slug) => ({
    slug,
    ...servicesData[slug],
  }));

export const ServiceDetailPage = () => {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const service = servicesData[serviceSlug];

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceSlug]);

  if (serviceSlug === "deep-cleaning") {
    return <Navigate to="/services/house-cleaning" replace />;
  }

  if (serviceSlug === "glass-cleaning") {
    return <Navigate to="/services/ironing-and-folding" replace />;
  }

  if (!service) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-40 pb-20 text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Service Not Found
          </h1>
          <p className="text-slate-500 mb-8">
            The service you're looking for doesn't exist.
          </p>
          <Link
            to="/all-services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#45844b] text-white rounded-xl font-medium hover:bg-[#3a703f] transition-colors"
          >
            Browse All Services
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const allServices = getAllServices().filter((s) => s.slug !== serviceSlug);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${service.name} in Patna – Book Online at ₹99/hr | Workra`}
        description={`${service.shortDesc}${service.price ? ` Flat ₹${service.price}/hour.` : ''} Book verified female house help in Patna with Workra. Arrives in 10 minutes.`}
        path={`/services/${serviceSlug}`}
        keywords={`${service.name} Patna, ${service.name.toLowerCase()} service Patna, book ${service.name.toLowerCase()}, ${service.name.toLowerCase()} near me, Workra ${service.name.toLowerCase()}, house help Patna, 99 per hour maid Patna`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": `${service.name} – Workra`,
          "description": service.shortDesc,
          "url": `https://useworkra.com/services/${serviceSlug}`,
          "provider": {
            "@type": "Organization",
            "name": "Workra",
            "url": "https://useworkra.com"
          },
          "areaServed": {
            "@type": "City",
            "name": "Patna"
          },
          "serviceType": service.name,
          ...(service.price && {
            "offers": {
              "@type": "Offer",
              "priceCurrency": "INR",
              "price": String(service.price),
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "priceCurrency": "INR",
                "price": String(service.price),
                "unitText": "session"
              },
              "availability": "https://schema.org/InStock",
              "url": `https://useworkra.com/services/${serviceSlug}`,
              "seller": {
                "@type": "Organization",
                "name": "Workra"
              }
            }
          }),
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://useworkra.com/" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://useworkra.com/all-services" },
              { "@type": "ListItem", "position": 3, "name": service.name, "item": `https://useworkra.com/services/${serviceSlug}` }
            ]
          }
        }}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 md:pt-32 pb-10 md:pb-20 bg-gradient-to-br from-[#f8f5f1] via-[#fdf6f0] to-[#f0ebe5] overflow-hidden">
        {/* Subtle decorative shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#45844b]/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#45844b]/3 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs sm:text-sm mb-6 md:mb-8 flex-wrap">
            <Link
              to="/"
              className="text-slate-400 hover:text-[#45844b] transition-colors"
            >
              Home
            </Link>
            <span className="text-slate-300">›</span>
            <Link
              to="/all-services"
              className="text-slate-400 hover:text-[#45844b] transition-colors"
            >
              Services
            </Link>
            <span className="text-slate-300">›</span>
            <span className="text-[#45844b] font-medium">{service.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-slate-900 leading-tight mb-4 md:mb-5">
                {service.tagline}
              </h1>

              <p className="text-slate-500 text-sm md:text-lg leading-relaxed mb-6 md:mb-8 max-w-xl">
                {service.shortDesc}
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 md:mb-8">
                {service.price && (
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-[#45844b] rounded-full">
                    <span className="text-xs sm:text-sm font-semibold text-white/80">
                      Flat
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-white">
                      ₹{service.price}/hr
                    </span>
                  </div>
                )}
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-[#45844b]/10 rounded-full">
                  <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#45844b]" />
                  <span className="text-xs sm:text-sm font-semibold text-[#45844b]">
                    Top Rated Experts
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-[#45844b]/10 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#45844b]" />
                  <span className="text-xs sm:text-sm font-semibold text-[#45844b]">
                    Background Verified
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-[#45844b]/10 rounded-full">
                  <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#45844b]" />
                  <span className="text-xs sm:text-sm font-semibold text-[#45844b]">
                    Professional Training
                  </span>
                </div>
              </div>

              <a
                href="https://play.google.com/store/apps/details?id=com.workra.mobile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#45844b] text-white rounded-xl font-semibold text-sm hover:bg-[#3a703f] transition-all duration-300 shadow-lg shadow-[#45844b]/25 hover:shadow-xl hover:shadow-[#45844b]/30 hover:-translate-y-0.5"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm11.396 11.39l2.84 2.845L5.78 22.893l9.225-9.69zm1.205-1.205l3.22 3.22a1 1 0 001.414 0l.37-.37c1.33-1.33 1.33-3.488 0-4.818l-.37-.37a1 1 0 00-1.414 0l-3.22 3.22zM5.78 1.107l12.065 6.836-2.84 2.844L5.78 1.107z" />
                </svg>
                Download App
              </a>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-b from-white/95 to-[#f3f7f4] p-6 sm:p-10 flex items-center justify-center border border-slate-200/70 shadow-2xl shadow-black/5">
                <img
                  src={service.image}
                  alt={`${service.name} service in Patna — professional ${service.name.toLowerCase()} by Workra`}
                  className="w-full h-full object-contain max-h-[320px] drop-shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning in Minutes Stats Strip */}
      <section
        className="py-8 md:py-14 bg-white"
        aria-label={`Fast and reliable ${service.name} booking — book in seconds, arrive in minutes`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="bg-gradient-to-br from-[#1a3a2a] to-[#2d5e33] rounded-2xl md:rounded-3xl p-5 sm:p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-10">
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
                  Book a verified {service.name.toLowerCase()} professional and get your home serviced — fast, easy, no hassle.
                </p>
              </div>

              {/* Right — Stat Cards */}
              <div className="flex flex-nowrap gap-2 sm:gap-3 md:gap-4 flex-1 md:justify-end">
                {/* Card 1 */}
                <div className="flex-1 max-w-[180px] bg-white/10 backdrop-blur-md rounded-xl border border-white/10 p-2 sm:p-3 md:p-4 text-center hover:bg-white/15 hover:border-white/25 transition-all duration-300 group">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-1.5 sm:mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-emerald-400" />
                  </div>
                  <div className="text-base sm:text-xl md:text-2xl font-bold text-white mb-0.5">60s</div>
                  <div className="text-white/50 text-[9px] sm:text-[10px] md:text-xs font-medium">Book in Sec</div>
                </div>

                {/* Card 2 */}
                <div className="flex-1 max-w-[180px] bg-white/10 backdrop-blur-md rounded-xl border border-white/10 p-2 sm:p-3 md:p-4 text-center hover:bg-white/15 hover:border-white/25 transition-all duration-300 group">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-1.5 sm:mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-emerald-400" />
                  </div>
                  <div className="text-base sm:text-xl md:text-2xl font-bold text-white mb-0.5">10 min</div>
                  <div className="text-white/50 text-[9px] sm:text-[10px] md:text-xs font-medium">Arrive in Minutes</div>
                </div>

                {/* Card 3 */}
                <div className="flex-1 max-w-[180px] bg-white/10 backdrop-blur-md rounded-xl border border-white/10 p-2 sm:p-3 md:p-4 text-center hover:bg-white/15 hover:border-white/25 transition-all duration-300 group">
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
      </section>

      {/* Related Services - "Your Expert" Section */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-8 md:mb-10">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#45844b] mb-2 block">
              YOUR EXPERT
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">
              One {service.name} Expert,{" "}
              <span className="italic text-[#45844b]">To Do It All</span>
            </h2>
          </div>

          {/* Horizontal Scroll */}
          <div className="relative">
            <button
              onClick={() => scroll("left")}
              className="hidden md:absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-100 md:flex items-center justify-center hover:bg-slate-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="hidden md:absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-100 md:flex items-center justify-center hover:bg-slate-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>

            <div
              ref={scrollRef}
              className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide pb-4 px-1"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {allServices.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="group flex-shrink-0 w-[170px] sm:w-[210px] md:w-[230px]"
                >
                  <div className="bg-white rounded-2xl border border-slate-200/80 p-3 sm:p-4 hover:shadow-lg hover:border-[#45844b]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
                    <div className="aspect-square rounded-xl bg-gradient-to-b from-[#f8faf9] to-[#f1f6f3] p-3 flex items-center justify-center mb-2.5 group-hover:from-[#f0f7f2] group-hover:to-[#e5f0e8] transition-colors">
                      <img
                        src={s.image}
                        alt={`${s.name} service in Patna by Workra`}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-108 drop-shadow-sm"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4 className="text-slate-900 text-xs sm:text-sm font-bold group-hover:text-[#45844b] transition-colors line-clamp-1">
                        {s.name}
                      </h4>
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100">
                        <span className="text-[11px] font-bold text-[#45844b]">Flat ₹{s.price || 99}/hr</span>
                        <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#45844b] group-hover:text-white transition-colors">
                          <ArrowRight className="w-2.5 h-2.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About The Service */}
      <section className="py-10 md:py-20 bg-[#faf9f7]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - About Text */}
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#45844b] mb-3 block">
                ABOUT THE SERVICE
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                About {service.name}
              </h2>
              <p className="text-slate-500 text-base leading-relaxed mb-8">
                {service.about}
              </p>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-4">
                {service.price && (
                  <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white rounded-xl border border-[#45844b]/15 shadow-sm relative overflow-hidden">
                    <div className="absolute left-0 top-1.5 bottom-1.5 w-0.5 rounded-full bg-gradient-to-b from-[#45844b] to-emerald-400"></div>
                    <span className="text-sm text-slate-500 ml-1">Flat</span>
                    <span className="text-base font-bold text-[#45844b]">₹{service.price}/hr</span>
                  </div>
                )}
                <div className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl border border-slate-100">
                  <Clock className="w-4 h-4 text-[#45844b]" />
                  <span className="text-sm text-slate-600">
                    <span className="font-semibold text-slate-800">
                      Duration:
                    </span>{" "}
                    {service.duration}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl border border-slate-100">
                  <Phone className="w-4 h-4 text-[#45844b]" />
                  <span className="text-sm text-slate-600">
                    <span className="font-semibold text-slate-800">
                      Category:
                    </span>{" "}
                    {service.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Right - Highlights */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                What's Included
              </h3>
              <div className="space-y-4">
                {service.highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:border-[#45844b]/20 hover:shadow-sm transition-all duration-300"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#45844b]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-[#45844b]" />
                    </div>
                    <span className="text-slate-700 text-sm font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#45844b] to-[#2d5e33] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
            Ready to Book {service.name}?
          </h2>
          <p className="text-white/60 text-base md:text-lg mb-8 max-w-lg mx-auto">
            Download the Workra app and get an expert at your doorstep in
            minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.workra.mobile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-7 py-3.5 bg-white text-[#45844b] rounded-xl font-semibold text-sm hover:bg-white/90 transition-all duration-300 shadow-lg"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm11.396 11.39l2.84 2.845L5.78 22.893l9.225-9.69zm1.205-1.205l3.22 3.22a1 1 0 001.414 0l.37-.37c1.33-1.33 1.33-3.488 0-4.818l-.37-.37a1 1 0 00-1.414 0l-3.22 3.22zM5.78 1.107l12.065 6.836-2.84 2.844L5.78 1.107z" />
              </svg>
              Google Play
            </a>
            <a
              href="https://wa.me/919334132209"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-7 py-3.5 bg-white/10 border border-white/20 text-white rounded-xl font-semibold text-sm hover:bg-white/20 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
