import React from "react";
import firstPageImage from "../assets/first page.jpg";
import chatImage from "../assets/Chat.png";
import acBookingImage from "../assets/ac booking.png";

const steps = [
  {
    step: "STEP 1",
    title: "Download the Workra \nApp Powered by AI",
    image: firstPageImage,
    delay: 0,
  },
  {
    step: "STEP 2",
    title: "Just chat and tell \nus your problem",
    image: chatImage,
    delay: 200,
  },
  {
    step: "STEP 3",
    title: "Choose instant, \nscheduled, or recurring. \nPay & done!",
    image: acBookingImage,
    delay: 400,
  },
];

export const StepsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 text-[#00C885] font-medium text-sm mb-6 shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-lightbulb"
            >
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2 1.5-3.5A6 6 0 0 0 6 8c0 1 .5 2 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
              <path d="M9 18h6" />
              <path d="M10 22h4" />
            </svg>
            How it works
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            Get skilled workers in just 3 easy steps
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Tell us your issue, and Workra sends the right expert.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#00C885] rounded-[2rem] pt-8 px-11 pb-0 relative overflow-hidden flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full"
              style={{
                animationDelay: `${step.delay}ms`,
              }}
            >
              {/* Step Pill */}
              <div className="bg-white text-[#00C885] font-bold px-5 py-1.5 rounded-full mb-6 text-xs tracking-wider shadow-sm uppercase z-10 font-sans">
                {step.step}
              </div>

              {/* Heading */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-8 leading-snug z-10 whitespace-pre-line min-h-[3em] font-sans">
                {step.title}
              </h3>

              {/* White Container "Window" behind image */}
              <div className="bg-white w-full rounded-t-[2rem] p-0 z-10 shadow-2xl flex justify-center mt-auto overflow-hidden">
                {/* Image Container */}
                <div className="relative w-full">
                  <img
                    src={step.image}
                    alt={`${step.step} UI`}
                    className="w-full h-auto object-cover object-top block"
                    style={{
                      maskImage:
                        "linear-gradient(to bottom, black 90%, transparent 100%)",
                      WebkitMaskImage:
                        "linear-gradient(to bottom, black 90%, transparent 100%)",
                    }}
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
