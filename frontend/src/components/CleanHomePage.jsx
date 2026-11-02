import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Clock,
  Check,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SEO } from "./SEO";
import { ServicesSection } from "./ServicesSection";

// 3D Plan Card Images
import imgDailyEssentials from "../assets/plan-daily-essentials.jpg";
import imgWorkraComplete from "../assets/plan-workra-complete.jpg";
import imgHourlyHelp from "../assets/plan-hourly-help.jpg";

// 3 Tailored Plan Options - Compact & sleek in minimum space
const planOptions = [
  {
    id: "1-hour-chore",
    title: "1-Hour Express Help",
    subtitle: "Quick chore or single room reset",
    duration: "1 Hour",
    badge: null,
    isPopular: false,
    image: imgDailyEssentials,
    price: "₹99",
    priceNote: "Flat ₹99 for 1 hour",
    features: [
      "Floor sweeping & mopping (jhadu-pocha)",
      "Utensil washing & kitchen sink clean",
      "Dusting surfaces and tidying up",
      "Verified female helper in 10 mins",
    ],
    buttonText: "Get on the app",
  },
  {
    id: "2-hour-reset",
    title: "2-Hour Home Reset",
    subtitle: "Full house cleaning & chores",
    duration: "2 Hours",
    badge: "MOST POPULAR",
    isPopular: true,
    image: imgWorkraComplete,
    price: "₹198",
    priceNote: "Flat ₹99/hr (2 hours)",
    features: [
      "Complete home sweeping & mopping",
      "All kitchen utensils washed & dried",
      "Surface dusting & bed making",
      "Bathroom cleaning & trash disposal",
    ],
    buttonText: "Get on the app",
  },
  {
    id: "custom-hourly",
    title: "Hourly House Help",
    subtitle: "Pay ₹99/hr for your custom chore list",
    duration: "Flexible (1-8 hrs)",
    badge: null,
    isPopular: false,
    image: imgHourlyHelp,
    price: "₹99/hr",
    priceNote: "Billed per hour",
    features: [
      "Set any custom task list",
      "Cooking prep & chopping vegetables",
      "Folding clothes & wardrobe organizing",
      "Same verified helper upon request",
    ],
    buttonText: "Get on the app",
  },
];

export const CleanHomePage = () => {
  const [activePlanIndex, setActivePlanIndex] = useState(0);
  const planScrollRef = useRef(null);

  const handlePlanScroll = () => {
    if (!planScrollRef.current) return;
    const container = planScrollRef.current;
    const scrollLeft = container.scrollLeft;
    const cards = container.querySelectorAll(".plan-card-item");
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
    setActivePlanIndex(closestIndex);
  };

  const scrollToPlan = (index) => {
    if (planScrollRef.current) {
      const container = planScrollRef.current;
      const cards = container.querySelectorAll(".plan-card-item");
      if (cards && cards[index]) {
        const baseOffset = cards[0].offsetLeft;
        const targetLeft = cards[index].offsetLeft - baseOffset;
        container.scrollTo({
          left: targetLeft,
          behavior: "smooth",
        });
        setActivePlanIndex(index);
      }
    }
  };

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const playStoreUrl =
    "https://play.google.com/store/apps/details?id=com.workra.mobile";
  const appStoreUrl =
    "https://apps.apple.com/in/app/workra/id6820196978";

  const [downloadUrl, setDownloadUrl] = useState(playStoreUrl);

  useEffect(() => {
    if (typeof navigator !== "undefined" && /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent)) {
      setDownloadUrl(appStoreUrl);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#fafaf8] overflow-x-clip w-full max-w-full">
      <SEO
        title="House Help in Minutes – Flat ₹99/Hour in Patna | Workra"
        description="Book verified female house helpers in Patna for sweeping, mopping, utensil washing, and daily chores. Helper arrives in 10 minutes at flat ₹99/hour."
        path="/services/clean-home"
        keywords="house help Patna, maid service Patna, 99 per hour maid Patna, utensil cleaning Patna, jhadu pocha service Patna, Workra house help, daily house chores Patna"
      />

      <Header />

      {/* ── 1. Hero Section (Distinctive Workra Theme & Layout) ── */}
      <section className="relative pt-24 sm:pt-28 md:pt-36 pb-16 md:pb-24 bg-gradient-to-b from-[#14341f] via-[#1a4427] to-[#255f36] overflow-hidden text-white">
        {/* Subtle dot mesh background overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none"></div>

        {/* Ambient radial lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-400/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 md:px-8 relative z-10 text-center">
          {/* Breadcrumb - Hidden on mobile for clean look */}
          <nav className="hidden sm:inline-flex items-center gap-2 text-xs sm:text-sm text-emerald-200/80 mb-6 font-medium">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <Link to="/all-services" className="hover:text-white transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-white font-semibold">House help</span>
          </nav>

          {/* Eyebrow / Brand Tagline */}
          <div className="flex justify-center mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm font-bold tracking-[0.22em] text-[#ffde59] uppercase">
              HOUSE HELP IN MINUTES
            </span>
          </div>

          {/* Big Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.12] max-w-2xl mx-auto drop-shadow-sm">
            Your chores sorted. <br />
            <span className="text-[#ffde59]">In 10 minutes.</span>
          </h1>

          {/* Subtitle with ₹99 starting price */}
          <p className="mt-3.5 sm:mt-5 text-sm sm:text-base md:text-lg text-emerald-100/90 max-w-lg mx-auto font-normal leading-relaxed">
            From sweeping and mopping to utensil washing and daily chores.{" "}
            <span className="font-semibold text-white">Flat ₹99 per hour.</span>
          </p>

          {/* CTA Buttons Row - Side-by-side on mobile */}
          <div className="mt-7 sm:mt-9 flex items-center justify-center gap-2.5 sm:gap-3.5 max-w-sm mx-auto px-1">
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 sm:px-6 py-3 rounded-full bg-[#ffde59] hover:bg-[#fed330] text-slate-900 font-bold text-xs sm:text-sm shadow-[0_4px_22px_rgba(255,222,89,0.32)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
            >
              <span>Download the App</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={() => scrollToSection("packages")}
              className="flex-1 inline-flex items-center justify-center px-4 sm:px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 backdrop-blur-md transition-all duration-300 active:scale-[0.98] whitespace-nowrap cursor-pointer"
            >
              <span>See Packages</span>
            </button>
          </div>

          {/* Trust Badges Cluster - 3-badge 2+1 layout */}
          <div className="mt-8 sm:mt-11 flex flex-col items-center gap-2 text-xs sm:text-sm text-emerald-100/90 font-medium">
            <div className="flex items-center justify-center gap-2 sm:gap-2.5 flex-wrap">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white/95">
                <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Background Verified</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white/95">
                <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Workra Kit Included</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white/95">
                <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Live GPS Tracking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Four Ways to Get Your Home Sorted / Plans (Tall & Slender with Perfect Width) ── */}
      <section
        id="packages"
        className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 scroll-mt-20 bg-[#fafaf8] overflow-x-clip"
        role="region"
        aria-label="Home cleaning package plans"
      >
        {/* Top curved organic wave connector matching reference */}
        <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none pointer-events-none -translate-y-[98%] z-10">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-8 sm:h-12 md:h-16 block"
            preserveAspectRatio="none"
          >
            <path
              d="M0,40 C360,75 1080,5 1440,35 L1440,85 L0,85 Z"
              fill="#fafaf8"
            />
          </svg>
        </div>

        <div className="max-w-[1020px] mx-auto">
          {/* Section Header */}
          <div className="mb-8 sm:mb-10 text-left">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#2e6e3b]"></span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#2e6e3b]">
                PICK A PLAN
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Three ways to get your <br className="hidden sm:inline" />
              home sorted.
            </h2>
          </div>

          {/* 3 Plan Cards - Side-by-side horizontal swipe on mobile, 3-col on desktop */}
          <div
            ref={planScrollRef}
            onScroll={handlePlanScroll}
            className="flex lg:grid lg:grid-cols-3 gap-5 sm:gap-6 overflow-x-auto lg:overflow-visible pt-2 pb-6 -mx-4 px-5 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 snap-x snap-mandatory scroll-pl-5 sm:scroll-pl-6 scrollbar-hide items-stretch justify-start lg:justify-center"
          >
            {planOptions.map((plan) => (
              <div
                key={plan.id}
                className={`plan-card-item rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 relative w-[82vw] max-w-[330px] sm:w-[290px] lg:w-full lg:max-w-none shrink-0 lg:shrink snap-start min-h-[430px] lg:min-h-[500px] ${
                  plan.isPopular
                    ? "bg-[#184528] text-white shadow-xl shadow-emerald-950/20 ring-1 ring-emerald-400/30"
                    : "bg-white text-slate-900 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-lg hover:border-slate-200"
                }`}
              >
                {/* Top Badge for Featured Card */}
                {plan.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider bg-white/20 text-white border border-white/25 backdrop-blur-sm whitespace-nowrap shadow-sm">
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Top content */}
                <div>
                  {/* Circular 3D Image Avatar */}
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 shrink-0 aspect-square rounded-full overflow-hidden p-1 flex items-center justify-center mb-3.5 sm:mb-4.5 ${
                      plan.isPopular
                        ? "bg-white/95 shadow-sm"
                        : "bg-[#f6f2ec]"
                    }`}
                  >
                    <img
                      src={plan.image}
                      alt={plan.title}
                      className="w-full h-full object-cover object-center scale-110 rounded-full"
                    />
                  </div>

                  {/* Title & Subtitle */}
                  <h3
                    className={`text-lg sm:text-[20px] font-bold tracking-tight leading-tight ${
                      plan.isPopular ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {plan.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-[13px] mt-1 font-normal ${
                      plan.isPopular ? "text-emerald-100/75" : "text-slate-400"
                    }`}
                  >
                    {plan.subtitle}
                  </p>

                  {/* Duration text (clean, unboxed) */}
                  <div
                    className={`text-[12px] sm:text-[13px] font-medium mt-1 mb-4 sm:mb-5 ${
                      plan.isPopular ? "text-[#a8f0b0]" : "text-[#2e6e3b]"
                    }`}
                  >
                    {plan.duration}
                  </div>

                  {/* Features checklist with wrapped lines */}
                  <ul className="space-y-2.5 sm:space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check
                          className={`w-3.5 h-3.5 shrink-0 mt-0.5 stroke-[2.5] ${
                            plan.isPopular ? "text-[#a8f0b0]" : "text-[#2e6e3b]"
                          }`}
                        />
                        <span
                          className={`text-xs sm:text-[13px] font-normal leading-[1.38] ${
                            plan.isPopular
                              ? "text-emerald-50/90"
                              : "text-slate-600"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Pricing & CTA Button */}
                <div className="mt-auto pt-6">
                  <div className="mb-3">
                    <div
                      className={`text-[26px] sm:text-[28px] font-extrabold tracking-tight leading-none ${
                        plan.isPopular ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {plan.price}
                    </div>
                    <div
                      className={`text-[11px] font-normal mt-1 ${
                        plan.isPopular ? "text-emerald-200/70" : "text-slate-400"
                      }`}
                    >
                      {plan.priceNote}
                    </div>
                  </div>

                  <a
                    href={downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2.5 px-4 rounded-full flex items-center justify-center gap-1.5 font-semibold text-[13px] transition-all duration-200 active:scale-[0.98] ${
                      plan.isPopular
                        ? "bg-[#fed049] hover:bg-[#fcc832] text-slate-900 shadow-sm"
                        : "bg-[#0f172a] hover:bg-slate-800 text-white shadow-sm"
                    }`}
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}

            {/* Trailing spacer so the 3rd card has right padding when scrolled on mobile */}
            <div className="w-2 shrink-0 lg:hidden" aria-hidden="true" />
          </div>

          {/* Carousel pagination dots indicator (mobile only) */}
          <div className="flex lg:hidden items-center justify-center gap-2 mt-4 mb-2">
            {planOptions.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToPlan(idx)}
                className={`h-2.5 transition-all duration-300 rounded-full cursor-pointer p-0 border-0 ${
                  activePlanIndex === idx
                    ? "w-7 bg-[#2e6e3b]"
                    : "w-2.5 bg-slate-200 hover:bg-slate-300"
                }`}
                aria-label={`Go to plan ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Full Services Section ── */}
      <div id="all-services-catalogue">
        <ServicesSection showHighlights={false} hideWave={true} />
      </div>

      <Footer />
    </div>
  );
};
