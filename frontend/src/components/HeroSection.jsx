import { useState } from "react";
import {
  Play,
  Globe,
  TrendingUp,
  HandHeart,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { heroData } from "../data/mock";
import heroImage from "../assets/hero-cleaners.jpg";
import { LocalityRequestModal } from "./LocalityRequestModal";

const services = [
  { name: "House Cleaning", icon: Sparkles },
  { name: "Deep Cleaning", icon: Sparkles },
  { name: "Bathroom Cleaning", icon: Sparkles },
  { name: "Sofa Cleaning", icon: Sparkles },
  { name: "Utensil Cleaning", icon: Sparkles },
  { name: "Maid & Handy Help", icon: HandHeart },
];

export const HeroSection = () => {
  const [isLocalityModalOpen, setIsLocalityModalOpen] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-[#45844b] to-[#3a703f] min-h-screen overflow-hidden">
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/20 pointer-events-none"></div>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <div className="relative z-10">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-sm mb-6 animate-fade-in-up">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#181818] tracking-tight">
                Trusted by 150+ homes in Patna
              </span>
            </div>

            <h1 className="text-white leading-[1.15] animate-fade-in-up">
              <span className="font-sans text-4xl md:text-5xl lg:text-[4.5rem] font-semibold block">
                Home help that
              </span>
              <span className="font-sans text-4xl md:text-5xl lg:text-[4.5rem] font-semibold block mt-1">
                arrives in
              </span>
              <span className="font-sans text-4xl md:text-5xl lg:text-[4.5rem] font-semibold block mt-1">
                <span className="text-[#a8e6a3]">10 minutes!</span>
              </span>
            </h1>
            <p
              className="text-white/70 text-base md:text-lg mt-8 max-w-[480px] leading-relaxed font-light animate-fade-in-up delay-200"
              style={{
                opacity: 0,
                animationFillMode: "forwards",
                animationDelay: "200ms",
              }}
            >
              {heroData.subtitle}
            </p>

            {/* App Store Buttons */}
            <div
              className="mt-10 flex flex-row gap-3 sm:gap-4 animate-fade-in-up w-full max-w-md sm:max-w-none"
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
                className="flex-1 sm:flex-none flex items-center justify-center sm:justify-start gap-3 px-6 sm:px-7 py-3 sm:py-3.5 bg-[#181818] border border-white/20 rounded-xl hover:bg-white/5 transition-colors group min-w-0"
              >
                <svg
                  className="w-8 h-8 text-white group-hover:scale-105 transition-transform shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm11.396 11.39l2.84 2.845L5.78 22.893l9.225-9.69zm1.205-1.205l3.22 3.22a1 1 0 001.414 0l.37-.37c1.33-1.33 1.33-3.488 0-4.818l-.37-.37a1 1 0 00-1.414 0l-3.22 3.22zM5.78 1.107l12.065 6.836-2.84 2.844L5.78 1.107z" />
                </svg>
                <div className="flex flex-col text-left min-w-0">
                  <span className="text-[10px] uppercase font-medium text-white/60 leading-none mb-1 truncate">
                    GET IT ON
                  </span>
                  <span className="text-base sm:text-lg font-semibold text-white leading-none font-sans truncate">
                    Google Play
                  </span>
                </div>
              </a>
            </div>

            {/* Request Locality Link */}
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
                className="inline-flex items-center gap-1.5 text-[#a8e6a3] hover:text-white font-medium text-sm sm:text-base group transition-colors cursor-pointer"
              >
                <span className="underline underline-offset-4 decoration-[#a8e6a3]/40 group-hover:decoration-white">
                  Request Workra in your locality
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Service Icons Marquee */}
            <div className="mt-14 w-full overflow-hidden mask-gradient-sides">
              <div className="flex gap-16 animate-marquee w-max">
                {[...Array(4)].map((_, setIndex) => (
                  <div
                    key={setIndex}
                    className="flex items-center gap-16 shrink-0"
                  >
                    {services.map((service, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-white/70"
                      >
                        <service.icon className="w-6 h-6" />
                        <span className="text-lg font-semibold whitespace-nowrap">
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
          <div className="relative mt-8 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-h-[600px] lg:max-h-[700px] shadow-2xl bg-white">
              <img
                src={heroImage}
                alt="Workra Verified Cleaning & House Help Team in Patna"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Trusted Experts Card */}
            <div
              className="absolute bottom-[10%] right-[-10px] md:right-[-20px] bg-white/10 backdrop-blur-2xl border border-white/20 rounded-xl px-5 py-4 min-w-[220px] shadow-2xl animate-float"
              style={{ animationDelay: "2s" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-[#00C885] rounded-full flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
                <span className="text-white text-sm font-medium">
                  Verified Cleaners
                </span>
              </div>
              <div className="mt-2">
                <p className="text-white/80 text-xl font-medium italic tracking-wide">
                  Ready in <span className="text-[#a8e6a3] not-italic font-bold">10 mins</span>
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
