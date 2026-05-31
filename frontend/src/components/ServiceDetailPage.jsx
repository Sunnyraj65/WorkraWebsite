import React, { useRef, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
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

// Importing images from assets
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

const servicesData = {
  "floor-cleaning": {
    name: "Floor Cleaning",
    image: floorCleaning,
    tagline: "Floor Cleaning Services Across India",
    shortDesc:
      "Professional floor mopping, scrubbing & polishing for tiles, marble, wood and all types of flooring.",
    about:
      "A clean floor transforms your entire home. Our trained professionals use the right techniques and eco-friendly products to mop, scrub, and polish all types of flooring — from marble and tiles to hardwood and vinyl. Whether it's daily maintenance or a deep floor clean, we ensure spotless, streak-free results every time. Our experts arrive at your doorstep fully equipped and ready to work.",
    highlights: [
      "All floor types — marble, tiles, wood, vinyl",
      "Eco-friendly cleaning products used",
      "Streak-free, spotless finish",
      "Daily or one-time deep cleaning available",
      "Fully equipped professionals",
    ],
    duration: "1-3 hours",
    category: "House Help",
  },
  "glass-cleaning": {
    name: "Glass Cleaning",
    image: glassCleaning,
    tagline: "Glass Cleaning Services Across India",
    shortDesc:
      "Crystal-clear cleaning for windows, mirrors, glass doors, partitions and all glass surfaces.",
    about:
      "Sparkling clean glass surfaces make your home look brighter and more inviting. Our professionals use streak-free cleaning solutions and professional-grade tools to clean windows, mirrors, glass partitions, shower enclosures, and glass doors. We handle both interior and exterior glass surfaces with care, ensuring no watermarks or residue are left behind.",
    highlights: [
      "Windows, mirrors & glass doors",
      "Streak-free cleaning solutions",
      "Interior & exterior surfaces",
      "Shower enclosures & partitions",
      "No watermarks or residue",
    ],
    duration: "1-2 hours",
    category: "House Help",
  },
  "utensil-cleaning": {
    name: "Utensil Cleaning",
    image: utensilCleaning,
    tagline: "Utensil Cleaning Services Across India",
    shortDesc:
      "Thorough cleaning and scrubbing of all kitchen utensils, pots, pans and cookware.",
    about:
      "Tired of piling dishes? Our utensil cleaning service takes care of all your kitchen cleaning needs. From everyday dishes and glasses to greasy pots, pans, and heavy cookware — our trained helpers wash, scrub, and dry everything to perfection. We use safe, food-grade cleaning agents and ensure your kitchen stays hygienic and organized.",
    highlights: [
      "All types of utensils & cookware",
      "Food-grade cleaning agents",
      "Greasy pots & pans handled",
      "Kitchen organization included",
      "Hygienic & thorough cleaning",
    ],
    duration: "1-2 hours",
    category: "House Help",
  },
  "bathroom-cleaning": {
    name: "Bathroom Cleaning",
    image: bathroomCleaning,
    tagline: "Bathroom Cleaning Services Across India",
    shortDesc:
      "Deep sanitization and scrubbing of toilets, tiles, fixtures, mirrors and entire bathroom.",
    about:
      "A sparkling bathroom is essential for a healthy home. Our bathroom cleaning service covers everything — from scrubbing tiles and grout to sanitizing toilets, sinks, and fixtures. We remove soap scum, hard water stains, and mold buildup using professional-grade disinfectants. Your bathroom will look, smell, and feel brand new after every session.",
    highlights: [
      "Complete toilet & fixture sanitization",
      "Tile & grout deep scrubbing",
      "Hard water stain removal",
      "Mold & mildew treatment",
      "Professional-grade disinfectants",
    ],
    duration: "1-2 hours",
    category: "House Help",
  },
  "deep-cleaning": {
    name: "Deep Cleaning",
    image: deepCleaning,
    tagline: "Deep Cleaning Services Across India",
    shortDesc:
      "Complete home deep cleaning and sanitization — every room, corner and surface covered.",
    about:
      "Our deep cleaning service is the ultimate solution for a thoroughly clean home. We go beyond regular cleaning to reach every hidden corner, behind furniture, inside cabinets, under beds, and along baseboards. Using industrial-grade equipment and safe cleaning products, our team scrubs, dusts, and sanitizes your entire home from top to bottom. Ideal for move-ins, festivals, or periodic refreshes.",
    highlights: [
      "Every room covered top to bottom",
      "Behind furniture & hidden corners",
      "Industrial-grade equipment",
      "Ideal for move-ins & festivals",
      "Complete sanitization included",
    ],
    duration: "4-8 hours",
    category: "House Help",
  },
  dusting: {
    name: "Dusting",
    image: dusting,
    tagline: "Dusting Services Across India",
    shortDesc:
      "Thorough dusting of all surfaces, furniture, shelves, fans, fixtures and hard-to-reach areas.",
    about:
      "Dust accumulates fast and affects air quality and aesthetics. Our dusting service covers all surfaces in your home — from furniture, shelves, and countertops to ceiling fans, light fixtures, and window ledges. We use microfiber cloths and proper techniques to trap dust instead of spreading it. Regular dusting keeps your home fresh, allergen-free, and looking its best.",
    highlights: [
      "All surfaces & furniture covered",
      "Ceiling fans & light fixtures",
      "Microfiber dust-trapping technique",
      "Hard-to-reach areas included",
      "Allergen reduction",
    ],
    duration: "1-3 hours",
    category: "House Help",
  },
  "ac-repair": {
    name: "AC Repair",
    image: acRepair,
    tagline: "AC Repair & Service Across India",
    shortDesc:
      "Expert AC installation, repair, gas refilling and annual maintenance for all brands.",
    about:
      "Beat the heat with our professional AC repair and servicing. Our certified technicians handle all types of AC units — split, window, and central — across all major brands. From routine servicing and filter cleaning to gas refilling, compressor repair, and complete installation, we've got you covered. Fast diagnosis, transparent pricing, and genuine spare parts guaranteed.",
    highlights: [
      "All brands & AC types supported",
      "Gas refilling & compressor repair",
      "Filter cleaning & deep servicing",
      "Installation & uninstallation",
      "Genuine spare parts warranty",
    ],
    duration: "1-3 hours",
    category: "Repair",
  },
  carpenter: {
    name: "Carpenter",
    image: carpenter,
    tagline: "Carpentry Services Across India",
    shortDesc:
      "Skilled carpenters for furniture repair, assembly, custom woodwork and door/window fixes.",
    about:
      "Our experienced carpenters handle all woodwork needs in your home. From repairing broken furniture, fixing doors and windows, to assembling flat-pack furniture and custom shelving — we deliver quality craftsmanship at your doorstep. Whether it's a minor fix or a complete renovation project, our carpenters bring their own tools and ensure a clean finish.",
    highlights: [
      "Furniture repair & assembly",
      "Door & window fixing",
      "Custom shelving & woodwork",
      "Tools & materials provided",
      "Clean finish guaranteed",
    ],
    duration: "2-5 hours",
    category: "Repair",
  },
  "equipment-repair": {
    name: "Equipment Repair",
    image: equipmentRepair,
    tagline: "Equipment Repair Services Across India",
    shortDesc:
      "Fix and maintain all household appliances, equipment and electronic devices.",
    about:
      "Don't let a broken appliance disrupt your day. Our equipment repair technicians diagnose and fix a wide range of household appliances — from washing machines and refrigerators to geysers, microwaves, and more. We provide on-site repair with transparent pricing and use genuine replacement parts to ensure long-lasting fixes.",
    highlights: [
      "All major appliances covered",
      "On-site diagnosis & repair",
      "Genuine replacement parts",
      "Transparent pricing upfront",
      "Post-repair warranty",
    ],
    duration: "1-3 hours",
    category: "Repair",
  },
  plumbing: {
    name: "Plumbing",
    image: plumbing,
    tagline: "Plumbing Services Across India",
    shortDesc:
      "Leak fixes, pipe fitting, tap repair, drain cleaning and complete plumbing solutions.",
    about:
      "From minor leaks to major pipe installations, our certified plumbers handle it all. We offer tap repair, pipe fitting, drain unclogging, water tank cleaning, and bathroom fixture installation. Our plumbers arrive with all necessary tools, provide upfront cost estimates, and ensure a mess-free experience. Emergency plumbing support is also available.",
    highlights: [
      "Leak detection & repair",
      "Pipe fitting & replacement",
      "Drain unclogging & cleaning",
      "Tap & fixture installation",
      "Emergency support available",
    ],
    duration: "1-3 hours",
    category: "Repair",
  },
  "socket-repair": {
    name: "Socket Repair",
    image: socketRepair,
    tagline: "Socket & Switch Repair Across India",
    shortDesc:
      "Switch and socket installation, repair, replacement and electrical safety checks.",
    about:
      "Faulty switches and sockets are not just inconvenient — they can be dangerous. Our trained electricians handle all types of switch and socket repairs, replacements, and new installations. We ensure proper wiring, safe connections, and compliance with safety standards. Whether it's a single socket fix or rewiring an entire room, we deliver reliable results.",
    highlights: [
      "Switch & socket replacement",
      "New installation & wiring",
      "Electrical safety compliance",
      "All socket types supported",
      "Same-day service available",
    ],
    duration: "30 min - 2 hours",
    category: "Repair",
  },
  "window-cleaning": {
    name: "Window Cleaning",
    image: windowCleaning,
    tagline: "Window Cleaning Services Across India",
    shortDesc:
      "Window cleaning for glass panes, frames, grills and sills, inside and reachable outside.",
    about:
      "Clean windows brighten up a room almost instantly. Our trained and background-verified professionals clean all types of windows — glass panes, frames, grills, and sills — both inside and reachable outside surfaces. We use professional squeegees and eco-friendly solutions that leave your windows sparkling without streaks or watermarks.",
    highlights: [
      "Glass panes, frames & grills",
      "Interior & exterior cleaning",
      "Professional squeegees used",
      "Eco-friendly solutions",
      "Streak-free, spotless results",
    ],
    duration: "1-2 hours",
    category: "House Help",
  },
  wiring: {
    name: "Wiring",
    image: wiring,
    tagline: "Electrical Wiring Services Across India",
    shortDesc:
      "Complete electrical wiring, rewiring, circuit setup and safety inspections for your home.",
    about:
      "Safe and efficient wiring is the backbone of every home. Our certified electricians provide new wiring installations, rewiring of old circuits, MCB/fuse box setup, and comprehensive electrical safety inspections. We handle everything from single-room wiring to full-house electrical setups, ensuring compliance with safety codes and long-term reliability.",
    highlights: [
      "New wiring & rewiring",
      "MCB & fuse box setup",
      "Safety inspections & compliance",
      "Full-house electrical work",
      "Certified electricians only",
    ],
    duration: "2-6 hours",
    category: "Repair",
  },
};

// Helper to get all services as array
const getAllServices = () =>
  Object.entries(servicesData).map(([slug, data]) => ({
    slug,
    ...data,
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
        title={`${service.name} in Patna – Book ${service.name} Service Online`}
        description={`${service.shortDesc} Book verified ${service.name.toLowerCase()} experts in Patna with Workra. 0% commission, background-verified professionals.`}
        path={`/services/${serviceSlug}`}
        keywords={`${service.name} Patna, ${service.name.toLowerCase()} service Patna, book ${service.name.toLowerCase()}, ${service.name.toLowerCase()} near me, Workra ${service.name.toLowerCase()}, home services Patna`}
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
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-black/10">
                <img
                  src={service.image}
                  alt={`${service.name} service in Patna — professional ${service.name.toLowerCase()} by Workra`}
                  className="w-full h-full object-cover"
                />
                {/* Subtle gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
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
                  className="group flex-shrink-0 w-[160px] sm:w-[200px] md:w-[220px]"
                >
                  <div className="relative rounded-2xl overflow-hidden aspect-[3/2] mb-1">
                    <img
                      src={s.image}
                      alt={s.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-white text-xs sm:text-sm font-semibold">
                        {s.name}
                      </span>
                      <div className="w-6 h-6 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/50 transition-colors">
                        <ArrowRight className="w-3 h-3 text-white" />
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
