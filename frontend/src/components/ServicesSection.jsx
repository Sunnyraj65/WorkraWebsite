import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

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

const services = [
  { name: "Floor Cleaning", image: floorCleaning, slug: "floor-cleaning" },
  { name: "Glass Cleaning", image: glassCleaning, slug: "glass-cleaning" },
  { name: "Utensil Cleaning", image: utensilCleaning, slug: "utensil-cleaning" },
  { name: "Bathroom Cleaning", image: bathroomCleaning, slug: "bathroom-cleaning" },
  { name: "Deep Cleaning", image: deepCleaning, slug: "deep-cleaning" },
  { name: "Dusting", image: dusting, slug: "dusting" },
  { name: "AC Repair", image: acRepair, slug: "ac-repair" },
  { name: "Carpenter", image: carpenter, slug: "carpenter" },
  { name: "Equipment Repair", image: equipmentRepair, slug: "equipment-repair" },
  { name: "Plumbing", image: plumbing, slug: "plumbing" },
  { name: "Socket Repair", image: socketRepair, slug: "socket-repair" },
  { name: "Window Cleaning", image: windowCleaning, slug: "window-cleaning" },
  { name: "Wiring", image: wiring, slug: "wiring" },
];

export const ServicesSection = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      return () => el.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = 280;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-8 md:py-14 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        {/* Main Card Container */}
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden min-h-[400px] sm:min-h-[480px] md:min-h-[600px] lg:min-h-[650px]">
          {/* Background Image */}
          <img
            src={girlcleaning}
            alt="Home cleaning services"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-between p-4 sm:p-6 md:p-10 lg:p-12 min-h-[400px] sm:min-h-[480px] md:min-h-[600px] lg:min-h-[650px]">
            {/* Top Content */}
            <div className="flex justify-between items-start">
              <div>
                <span
                  className="inline-block text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-white/80 mb-3 md:mb-4"
                  style={{ letterSpacing: "0.2em" }}
                >
                  SERVICES
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-lg">
                  What Can Your House
                  <br />
                  Help Do?
                </h2>
              </div>

              {/* View All Button */}
              <Link
                to="/all-services"
                className="hidden md:flex items-center gap-2 text-white text-sm font-medium group hover:opacity-80 transition-opacity"
              >
                <span>View All</span>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </Link>
            </div>

            {/* Bottom Service Cards */}
            <div className="mt-auto">
              {/* Mobile View All */}
              <div className="flex md:hidden justify-end mb-4">
                <Link
                  to="/all-services"
                  className="flex items-center gap-2 text-white text-sm font-medium"
                >
                  <span>View All</span>
                  <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </Link>
              </div>

              {/* Scroll Navigation Arrows */}
              <div className="relative">
                {canScrollLeft && (
                  <button
                    onClick={() => scroll("left")}
                    className="absolute -left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-slate-700" />
                  </button>
                )}
                {canScrollRight && (
                  <button
                    onClick={() => scroll("right")}
                    className="absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-slate-700" />
                  </button>
                )}

                {/* Scrollable Cards */}
                <div
                  ref={scrollRef}
                  className="flex gap-3 md:gap-4 overflow-x-auto pb-2 scrollbar-hide"
                  style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                  }}
                >
                  {services.map((service, index) => (
                    <Link
                      to={`/services/${service.slug}`}
                      key={index}
                      className="group flex-shrink-0 w-[120px] sm:w-[140px] md:w-[170px] lg:w-[190px] cursor-pointer"
                    >
                      <div className="relative bg-white/15 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/25">
                        {/* Card Image */}
                        <div className="aspect-square overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.name}
                            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>

                        {/* Card Footer */}
                        <div className="flex items-center justify-between px-3 py-2.5">
                          <span className="text-white text-xs md:text-sm font-semibold truncate">
                            {service.name}
                          </span>
                          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white/40 transition-colors">
                            <ArrowRight className="w-3 h-3 text-white" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
