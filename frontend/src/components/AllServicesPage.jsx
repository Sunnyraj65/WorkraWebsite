import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SEO } from "./SEO";

// Importing custom 3D service icons
import girlcleaning from "../assets/girlcleaning.png";
import floorCleaning from "../assets/service-icons/sweeping-mopping.jpg";
import utensilCleaning from "../assets/service-icons/utensils.jpg";
import dusting from "../assets/service-icons/dusting.jpg";
import bathroomCleaning from "../assets/service-icons/bathroom-surface-cleaning.jpg";
import wardrobeCleaning from "../assets/service-icons/complete-wardrobe-cleaning.jpg";
import kitchenCabinet from "../assets/service-icons/kitchen-cabinet-cleaning.jpg";
import ironing from "../assets/service-icons/ironing-folding.jpg";
import windowCleaning from "../assets/service-icons/window.jpg";

const allServices = [
  {
    name: "House Cleaning (Jhadu-Pocha)",
    image: floorCleaning,
    slug: "house-cleaning",
    description: "Sweeping, mopping, and everyday floor upkeep — flat ₹99/hr",
    price: 99,
  },
  {
    name: "Utensil Cleaning (Bartan)",
    image: utensilCleaning,
    slug: "utensil-cleaning",
    description: "Thorough kitchen utensil & cookware washing — flat ₹99/hr",
    price: 99,
  },
  {
    name: "Dusting & Organizing",
    image: dusting,
    slug: "dusting",
    description: "Furniture dusting, bed-making, and room tidying — flat ₹99/hr",
    price: 99,
  },
  {
    name: "Bathroom Cleaning",
    image: bathroomCleaning,
    slug: "bathroom-cleaning",
    description: "Everyday bathroom tile scrubbing & toilet sanitization — flat ₹99/hr",
    price: 99,
  },
  {
    name: "Complete Wardrobe Cleaning",
    image: wardrobeCleaning,
    slug: "wardrobe-cleaning",
    description: "Closet decluttering, clothes folding & shelf organizing — flat ₹99/hr",
    price: 99,
  },
  {
    name: "Kitchen Cabinet Cleaning",
    image: kitchenCabinet,
    slug: "kitchen-cabinet-cleaning",
    description: "Modular kitchen boxes, shelves & cupboard degreasing — flat ₹99/hr",
    price: 99,
  },
  {
    name: "Ironing & Folding",
    image: ironing,
    slug: "ironing-and-folding",
    description: "Crisp clothes ironing, folding & wardrobe organizing — flat ₹99/hr",
    price: 99,
  },
  {
    name: "Window Cleaning",
    image: windowCleaning,
    slug: "window-cleaning",
    description: "Spotless window glass & grill cleaning — flat ₹99/hr",
    price: 99,
  },
];

export const AllServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="All House Help & Maid Services in Patna – Flat ₹99/Hour | Workra"
        description="Browse Workra house help services in Patna: sweeping & mopping (jhadu-pocha), utensil washing (bartan), dusting, bathroom cleaning & more at flat ₹99/hour."
        path="/all-services"
        keywords="house help Patna, maid services Patna, 99 per hour maid Patna, utensil washing Patna, jhadu pocha Patna, Workra services"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "All House Help & Maid Services – Workra",
          "description": "Browse all on-demand house help and maid services in Patna at flat ₹99/hour on Workra.",
          "url": "https://useworkra.com/all-services",
          "isPartOf": { "@id": "https://useworkra.com/#website" },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://useworkra.com/" },
              { "@type": "ListItem", "position": 2, "name": "All Services", "item": "https://useworkra.com/all-services" }
            ]
          }
        }}
      />
      <Header />

      {/* Hero Banner */}
      <section className="relative pt-24 md:pt-36 pb-12 md:pb-20 bg-gradient-to-br from-[#45844b] to-[#2d5e33] overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/8 via-transparent to-black/20 pointer-events-none"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors group"
          >
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span>Back to Home</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <span
                className="inline-block text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-white/60 mb-4"
              >
                ALL SERVICES
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6">
                Expert Services
                <span className="block mt-1 text-white/80">at Your Doorstep</span>
              </h1>
              <p className="text-white/60 text-sm md:text-lg max-w-xl leading-relaxed">
                Skilled workers for every problem, delivered to your home. Browse
                all available services and book with confidence.
              </p>
            </div>

            {/* Right Image */}
            <div className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-h-[420px] shadow-2xl shadow-black/20">
                <img
                  src={girlcleaning}
                  alt="Professional home cleaning service in Patna by Workra"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          {/* Section Header */}
          <div className="flex items-end justify-between mb-8 md:mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Browse All Services
              </h2>
              <p className="text-slate-500 mt-2 text-sm md:text-base">
                {allServices.length} services available for you
              </p>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-5 md:gap-7">
            {allServices.map((service, index) => (
              <Link
                to={`/services/${service.slug}`}
                key={index}
                className="group cursor-pointer flex flex-col"
                style={{
                  opacity: 0,
                  animation: `fadeInUp 0.6s ease-out forwards`,
                  animationDelay: `${index * 60}ms`,
                }}
              >
                {/* Card */}
                <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_-8px_rgba(69,132,75,0.18)] hover:border-[#45844b]/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full p-3 sm:p-5">
                  {/* 3D Icon Container */}
                  <div className="relative aspect-square w-full rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#f8faf9] to-[#f1f6f3] flex items-center justify-center p-3 sm:p-6 overflow-hidden mb-3 sm:mb-4 group-hover:from-[#f0f7f2] group-hover:to-[#e5f0e8] transition-colors duration-300">
                    <img
                      src={service.image}
                      alt={`${service.name} service in Patna by Workra`}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-108 drop-shadow-sm"
                      loading="lazy"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 group-hover:text-[#45844b] transition-colors leading-snug">
                        {service.name}
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-sm mt-1 sm:mt-1.5 leading-relaxed line-clamp-2">
                        {service.description}
                      </p>
                    </div>

                    {/* Footer Row */}
                    <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] sm:text-xs font-bold text-[#45844b] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                        Flat ₹{service.price}/hr
                      </span>
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#45844b] group-hover:text-white group-hover:shadow-md group-hover:shadow-[#45844b]/20 transition-all duration-300">
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
