import React from "react";
import { Star } from "lucide-react";

// Importing images directly from assets
import acRepair from "../assets/ac repair.jpg";
import carpenter from "../assets/carpenter.jpg";
import dusting from "../assets/dusting.jpg";
import equipmentRepair from "../assets/equiment repair.jpg"; // specific filename typo in assets
import plumbing from "../assets/plumbring.jpg"; // specific filename typo in assets
import socketRepair from "../assets/socket repair.jpg";
import windowCleaning from "../assets/window cleaning.jpg";
import wiring from "../assets/wiring.jpg";

const services = [
  { name: "AC Repair", image: acRepair },
  { name: "Carpenter", image: carpenter },
  { name: "Dusting", image: dusting },
  { name: "Equipment Repair", image: equipmentRepair },
  { name: "Plumbing", image: plumbing },
  { name: "Socket Repair", image: socketRepair },
  { name: "Window Cleaning", image: windowCleaning },
  { name: "Wiring", image: wiring },
];

export const ServicesSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full mb-6">
            <Star className="w-4 h-4 text-slate-700" />
            <span className="text-sm font-medium text-slate-700">
              Our Services
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Book Trusted Skilled
            <span className="block mt-2">Workers</span>
          </h2>

          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Skilled workers for every problem, delivered to your home.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex flex-col items-center cursor-pointer"
            >
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 mb-4 transition-transform duration-300 group-hover:-translate-y-1 shadow-sm group-hover:shadow-md">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
              </div>

              <h3 className="text-lg md:text-xl font-bold text-slate-800 text-center group-hover:text-black transition-colors">
                {service.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
