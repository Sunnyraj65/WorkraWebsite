import { useState } from "react";
import {
  HandHeart,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  MapPin,
} from "lucide-react";
import { heroData } from "../data/mock";
import heroImage from "../assets/3workers.png";
import { LocalityRequestModal } from "./LocalityRequestModal";

const services = [
  { name: "House Cleaning (Jhadu-Pocha)", icon: Sparkles },
  { name: "Utensil Washing (Bartan)", icon: Sparkles },
  { name: "Kitchen Help & Chores", icon: HandHeart },
  { name: "Dusting & Organizing", icon: Sparkles },
  { name: "Bathroom Cleaning", icon: Sparkles },
  { name: "Flat ₹99/Hour House Help", icon: HandHeart },
];

export const HeroSection = () => {
  const [isLocalityModalOpen, setIsLocalityModalOpen] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-[#2b6534] via-[#377540] to-[#1f4e28] min-h-screen overflow-hidden">
      {/* Ambient Decorative Glows & Subtle Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/25 pointer-events-none"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#a8e6a3]/15 rounded-full blur-[110px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-[#ffde59]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left Content */}
          <div className="relative z-10">
            {/* Refined Trust Badge Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 pl-3.5 pr-2 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white/70 shadow-[0_8px_30px_rgba(0,0,0,0.16)] mb-7 animate-fade-in-up">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10b981]"></span>
              </span>
              <span className="text-xs sm:text-[13px] font-semibold text-slate-800 tracking-tight">
                Workra House Help • Arrives in 10 mins
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#e6f7e9] text-[#1e5e28] text-[11px] sm:text-xs font-extrabold tracking-tight border border-[#2b6534]/15">
                Flat ₹99/hr in Patna
              </span>
            </div>

            {/* Editorial + Modern Display Font Paired Headline */}
            <h1 className="text-white leading-[1.08] tracking-[-0.025em] animate-fade-in-up">
              <span className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold block drop-shadow-sm">
                Your last minute
              </span>
              <span className="relative inline-block mt-2">
                <span className="font-serif italic font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[4.6rem] bg-gradient-to-r from-[#ffea85] via-[#d9f99d] to-[#a8e6a3] bg-clip-text text-transparent pr-2">
                  househelp
                </span>
                {/* Hand-drawn style curved accent underline */}
                <svg
                  className="w-full h-3 sm:h-3.5 -mt-1 text-[#ffea85]/80"
                  viewBox="0 0 280 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 10.5C72 2.5 195 1.5 277 9.5"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtitle with key value highlights */}
            <p
              className="text-white/85 text-base md:text-[17.5px] mt-7 max-w-[510px] leading-[1.7] font-normal animate-fade-in-up delay-200"
              style={{
                opacity: 0,
                animationFillMode: "forwards",
                animationDelay: "200ms",
              }}
            >
              Book{" "}
              <span className="text-white font-semibold">
                verified female house helpers
              </span>{" "}
              for sweeping, mopping, utensil washing, dusting, and everyday
              household chores in Patna. A trusted helper at your door in 10
              minutes for{" "}
              <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/15 text-[#ffea85] font-bold border border-white/15 shadow-sm">
                just ₹99/hour
              </span>
              .
            </p>

            {/* Quick Feature Micro-Pills */}
            <div
              className="mt-6 flex flex-wrap items-center gap-2 sm:gap-2.5 animate-fade-in-up"
              style={{
                opacity: 0,
                animationFillMode: "forwards",
                animationDelay: "300ms",
              }}
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/20 border border-white/15 text-white/95 text-xs font-medium backdrop-blur-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-[#a8e6a3] shrink-0" />
                <span>Police Verified</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/20 border border-white/15 text-white/95 text-xs font-medium backdrop-blur-sm">
                <Clock className="w-3.5 h-3.5 text-[#ffea85] shrink-0" />
                <span>10-Min Doorstep Arrival</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/20 border border-white/15 text-white/95 text-xs font-medium backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#a8e6a3] shrink-0" />
                <span>No Hidden Charges</span>
              </div>
            </div>

            {/* App Store Buttons */}
            <div
              className="mt-8 flex flex-row flex-wrap sm:flex-nowrap gap-3.5 sm:gap-4 animate-fade-in-up w-full max-w-md sm:max-w-none"
              style={{
                opacity: 0,
                animationFillMode: "forwards",
                animationDelay: "400ms",
              }}
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.workra.mobile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none flex items-center justify-center sm:justify-start gap-3.5 px-6 sm:px-7 py-3.5 bg-[#101512] hover:bg-[#18201b] border border-white/25 hover:border-[#a8e6a3]/60 rounded-2xl shadow-[0_12px_30px_-6px_rgba(0,0,0,0.45)] hover:shadow-[0_16px_36px_-6px_rgba(0,0,0,0.55)] hover:-translate-y-0.5 transition-all duration-300 group min-w-0 ring-1 ring-inset ring-white/5"
              >
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-white group-hover:scale-105 transition-transform shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm11.396 11.39l2.84 2.845L5.78 22.893l9.225-9.69zm1.205-1.205l3.22 3.22a1 1 0 001.414 0l.37-.37c1.33-1.33 1.33-3.488 0-4.818l-.37-.37a1 1 0 00-1.414 0l-3.22 3.22zM5.78 1.107l12.065 6.836-2.84 2.844L5.78 1.107z" />
                </svg>
                <div className="flex flex-col text-left min-w-0">
                  <span className="text-[10px] uppercase tracking-[0.08em] font-semibold text-white/60 leading-none mb-1 truncate">
                    GET IT ON
                  </span>
                  <span className="font-display text-base sm:text-[19px] font-bold text-white leading-none tracking-tight truncate">
                    Google Play
                  </span>
                </div>
              </a>

              <a
                href="https://apps.apple.com/in/app/workra/id6820196978"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none flex items-center justify-center sm:justify-start gap-3.5 px-6 sm:px-7 py-3.5 bg-[#101512] hover:bg-[#18201b] border border-white/25 hover:border-[#a8e6a3]/60 rounded-2xl shadow-[0_12px_30px_-6px_rgba(0,0,0,0.45)] hover:shadow-[0_16px_36px_-6px_rgba(0,0,0,0.55)] hover:-translate-y-0.5 transition-all duration-300 group min-w-0 ring-1 ring-inset ring-white/5"
              >
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-white group-hover:scale-105 transition-transform shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.73-.95 2.76.99.08 2.03-.51 2.67-1.26z" />
                </svg>
                <div className="flex flex-col text-left min-w-0">
                  <span className="text-[10px] uppercase tracking-[0.08em] font-semibold text-white/60 leading-none mb-1 truncate">
                    Download on the
                  </span>
                  <span className="font-display text-base sm:text-[19px] font-bold text-white leading-none tracking-tight truncate">
                    App Store
                  </span>
                </div>
              </a>
            </div>

            {/* Request Locality Interactive Pill Link */}
            <div
              className="mt-6 animate-fade-in-up"
              style={{
                opacity: 0,
                animationFillMode: "forwards",
                animationDelay: "500ms",
              }}
            >
              <button
                type="button"
                onClick={() => setIsLocalityModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 hover:border-white/30 text-[#d9f99d] hover:text-white font-medium text-xs sm:text-sm group transition-all duration-300 backdrop-blur-sm cursor-pointer shadow-sm"
              >
                <MapPin className="w-3.5 h-3.5 text-[#ffea85] shrink-0" />
                <span className="underline underline-offset-4 decoration-[#a8e6a3]/50 group-hover:decoration-white">
                  Request Workra in your locality
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Service Icons Marquee */}
            <div className="mt-12 w-full overflow-hidden mask-gradient-sides">
              <div className="flex gap-14 animate-marquee w-max">
                {[...Array(4)].map((_, setIndex) => (
                  <div
                    key={setIndex}
                    className="flex items-center gap-14 shrink-0"
                  >
                    {services.map((service, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2.5 text-white/75"
                      >
                        <service.icon className="w-5 h-5 text-[#a8e6a3]" />
                        <span className="text-base font-medium whitespace-nowrap tracking-tight">
                          {service.name}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image + Stats */}
          <div className="relative mt-6 lg:mt-14 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[640px] rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.45)] ring-4 ring-white/15 bg-white pt-4 px-2 sm:pt-6 sm:px-4">
              <img
                src={heroImage}
                alt="Workra Verified Cleaning & House Help Team in Patna"
                className="w-full h-auto object-contain object-bottom block"
              />
            </div>

            {/* Trusted Experts Card */}
            <div
              className="absolute -bottom-3 right-2 sm:-bottom-4 md:right-4 bg-[#101813]/85 backdrop-blur-2xl border border-white/25 rounded-xl sm:rounded-2xl px-2.5 py-1.5 sm:px-4 sm:py-3 shadow-[0_14px_30px_rgba(0,0,0,0.35)] animate-float"
              style={{ animationDelay: "2s" }}
            >
              <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1.5">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#00C885] rounded-full flex items-center justify-center shadow-sm shrink-0">
                  <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                </div>
                <span className="text-white text-[10px] sm:text-xs md:text-sm font-semibold tracking-tight">
                  Verified House Help
                </span>
              </div>
              <div>
                <p className="text-white/85 text-xs sm:text-sm md:text-base font-serif italic tracking-wide leading-tight">
                  Ready in{" "}
                  <span className="font-display text-[#ffea85] not-italic font-bold">
                    10 mins
                  </span>{" "}
                  •{" "}
                  <span className="font-display text-white not-italic font-bold">
                    ₹99/hr
                  </span>
                </p>
              </div>
            </div>
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
