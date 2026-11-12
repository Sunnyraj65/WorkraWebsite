import React from "react";
import { Sparkles } from "lucide-react";
import screen1 from "../assets/screen1.png";
import screen2 from "../assets/screen2.png";
import screen3 from "../assets/screen3.png";
import screen4 from "../assets/screen 4.png";

const steps = [
  {
    number: "01",
    step: "STEP 1",
    title: "Choose your\nhouse help service",
    subtitle: "Pick sweeping, utensils, or hourly help",
    image: screen1,
    delay: 0,
  },
  {
    number: "02",
    step: "STEP 2",
    title: "Select Instant\nor Schedule",
    subtitle: "Get help today or book ahead",
    image: screen2,
    delay: 150,
  },
  {
    number: "03",
    step: "STEP 3",
    title: "Pick duration\n& time slot",
    subtitle: "Flexible slots from 30 mins to 2 hrs",
    image: screen3,
    delay: 300,
  },
  {
    number: "04",
    step: "STEP 4",
    title: "Confirm booking\n& pay easily",
    subtitle: "Pay via UPI or after service completion",
    image: screen4,
    delay: 450,
  },
];

export const StepsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#fafaf8] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Header Section */}
        <div className="text-center mb-14 md:mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e8f5ea] border border-[#2b6534]/15 text-[#2b6534] font-semibold text-xs sm:text-sm tracking-wide uppercase mb-5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#2b6534]" />
            <span>How It Works</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight tracking-tight">
            Book house help in{" "}
            <span className="font-serif italic font-semibold text-[#2b6534]">
              just 4 easy steps
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Select your task, pick your duration, and get a verified female
            helper at your doorstep in minutes.
          </p>
        </div>

        {/* Steps Grid - 4 Columns on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-[#2b6534] via-[#26592e] to-[#1b4322] rounded-3xl pt-6 px-5 pb-0 overflow-hidden flex flex-col items-center text-center shadow-[0_12px_32px_-8px_rgba(30,75,39,0.28)] hover:shadow-[0_20px_44px_-10px_rgba(30,75,39,0.4)] border border-[#2b6534]/20 transition-all duration-300 hover:-translate-y-1.5 h-full"
              style={{
                animationDelay: `${step.delay}ms`,
              }}
            >
              {/* Subtle radial top glow */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#a8e6a3]/15 rounded-full blur-2xl pointer-events-none" />

              {/* Step Pill Badge */}
              <div className="relative z-10 inline-flex items-center gap-1.5 bg-white/12 backdrop-blur-md border border-white/20 text-[#ffea85] font-bold px-3.5 py-1 rounded-full mb-4 text-[11px] tracking-[0.12em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffea85]" />
                {step.step}
              </div>

              {/* Heading */}
              <h3 className="relative z-10 font-display text-xl md:text-[21px] font-bold text-white mb-1.5 leading-snug whitespace-pre-line">
                {step.title}
              </h3>

              {/* Short Subtitle */}
              <p className="relative z-10 text-white/70 text-xs font-normal mb-5 max-w-[210px] leading-relaxed">
                {step.subtitle}
              </p>

              {/* Frosted Glass Pedestal + Clean Phone Frame */}
              <div className="relative z-10 bg-white/10 backdrop-blur-sm border-t border-x border-white/15 w-full rounded-t-2xl pt-4 px-3.5 pb-4 flex justify-center mt-auto">
                <div className="w-full max-w-[215px] rounded-[1.6rem] border-[5px] border-[#141a16] bg-[#141a16] shadow-[0_14px_30px_rgba(0,0,0,0.35)] overflow-hidden group-hover:scale-[1.01] transition-transform duration-300">
                  {/* Top Phone Bezel Bar (does not overlap screenshot content) */}
                  <div className="bg-[#141a16] h-3.5 w-full flex items-center justify-center">
                    <div className="w-10 h-1 bg-white/20 rounded-full" />
                  </div>

                  {/* App Screenshot */}
                  <img
                    src={step.image}
                    alt={`Workra app ${step.step} - book house help in Patna`}
                    className="w-full h-auto block rounded-b-[1.25rem] bg-white"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
