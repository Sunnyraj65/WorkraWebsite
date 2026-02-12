import React from "react";
import timeImage from "../assets/Time.png";
import inspectionImage from "../assets/Inspection.png";
import pricingImage from "../assets/pricing.png";
import supportImage from "../assets/Support.png";

const features = [
  {
    title: "On-time Service",
    description:
      "We value your time. Our professionals arrive at your doorstep exactly when scheduled.",
    image: timeImage,
    delay: 0,
  },
  {
    title: "Verified Experts",
    description:
      "Every professional undergoes a rigorous background check and skill verification process.",
    image: inspectionImage,
    delay: 100,
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden costs. You pay exactly what you see, with complete breakdown of charges.",
    image: pricingImage,
    delay: 200,
  },
  {
    title: "Dedicated Support",
    description:
      "Our customer support team is available 24/7 to assist you with any queries or issues.",
    image: supportImage,
    delay: 300,
  },
];

export const WhyChooseSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#333] tracking-tight uppercase">
            WHY CHOOSE <span className="text-[#00C885]">WORKRA</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#00C885] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl md:rounded-[2rem] p-4 pb-6 md:p-6 md:pb-8 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100"
              style={{
                animationDelay: `${feature.delay}ms`,
              }}
            >
              {/* Image Container */}
              <div className="w-full aspect-square mb-4 md:mb-6 rounded-xl md:rounded-[1.5rem] overflow-hidden bg-gray-50 flex items-center justify-center p-4 md:p-6 group-hover:scale-105 transition-transform duration-500">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text Content */}
              <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-2 md:mb-3 leading-tight">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
