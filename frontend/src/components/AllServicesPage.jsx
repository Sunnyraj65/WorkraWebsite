import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SEO } from "./SEO";

// Importing images from assets
import girlcleaning from "../assets/girlcleaning.png";
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
import sofaCleaning from "../assets/sofa cleaning.png";

const allServices = [
  {
    name: "House Cleaning",
    image: floorCleaning,
    slug: "house-cleaning",
    description: "Complete house cleaning — every room, kitchen & balcony",
  },
  {
    name: "Glass Cleaning",
    image: glassCleaning,
    slug: "glass-cleaning",
    description: "Crystal-clear glass & mirror cleaning services",
  },
  {
    name: "Utensil Cleaning",
    image: utensilCleaning,
    slug: "utensil-cleaning",
    description: "Thorough kitchen utensil & cookware washing",
  },
  {
    name: "Bathroom Cleaning",
    image: bathroomCleaning,
    slug: "bathroom-cleaning",
    description: "Deep sanitization & scrubbing of bathrooms",
  },
  {
    name: "Deep Cleaning",
    image: deepCleaning,
    slug: "deep-cleaning",
    description: "Complete home deep cleaning & sanitization",
  },
  {
    name: "Sofa Cleaning",
    image: sofaCleaning,
    slug: "sofa-cleaning",
    description: "Professional sofa & upholstery deep steam cleaning",
  },
  {
    name: "Dusting",
    image: dusting,
    slug: "dusting",
    description: "Deep cleaning & dusting for every corner of your home",
  },
  {
    name: "AC Repair",
    image: acRepair,
    slug: "ac-repair",
    description: "Expert AC installation, repair & maintenance services",
  },
  {
    name: "Carpenter",
    image: carpenter,
    slug: "carpenter",
    description: "Furniture repair, assembly & custom woodwork",
  },
  {
    name: "Equipment Repair",
    image: equipmentRepair,
    slug: "equipment-repair",
    description: "Fix & maintain all household appliances & equipment",
  },
  {
    name: "Plumbing",
    image: plumbing,
    slug: "plumbing",
    description: "Leak fixes, pipe fitting & complete plumbing solutions",
  },
  {
    name: "Socket Repair",
    image: socketRepair,
    slug: "socket-repair",
    description: "Switch & socket installation, repair & replacement",
  },
  {
    name: "Window Cleaning",
    image: windowCleaning,
    slug: "window-cleaning",
    description: "Spotless window & glass cleaning services",
  },
  {
    name: "Wiring",
    image: wiring,
    slug: "wiring",
    description: "Electrical wiring, rewiring & safety inspections",
  },
];

export const AllServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="All Home Services in Patna – Cleaning, Plumbing, Electrician & More"
        description="Browse all Workra home services in Patna: floor cleaning, bathroom cleaning, AC repair, plumbing, carpentry, wiring & more. 0% commission. Book verified experts now."
        path="/all-services"
        keywords="home services Patna, cleaning services Patna, plumber Patna, electrician Patna, AC repair Patna, floor cleaning, bathroom cleaning, deep cleaning, Workra services"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "All Home Services – Workra",
          "description": "Browse all home services available on Workra in Patna. Cleaning, repairs, plumbing, electrical & more.",
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
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-8">
            {allServices.map((service, index) => (
              <Link
                to={`/services/${service.slug}`}
                key={index}
                className="group cursor-pointer"
                style={{
                  opacity: 0,
                  animation: `fadeInUp 0.6s ease-out forwards`,
                  animationDelay: `${index * 80}ms`,
                }}
              >
                {/* Card */}
                <div className="relative bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden">
                    <img
                      src={service.image}
                      alt={`${service.name} service in Patna by Workra`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Book Now Button - appears on hover */}
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <button className="w-full py-3 bg-[#45844b] text-white rounded-xl font-semibold text-sm hover:bg-[#3a703f] transition-colors flex items-center justify-center gap-2">
                        Book Now
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-3 sm:p-4 md:p-5">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 group-hover:text-[#45844b] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm mt-1 sm:mt-1.5 leading-relaxed hidden sm:block">
                      {service.description}
                    </p>
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
