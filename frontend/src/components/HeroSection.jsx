import {
  Play,
  Globe,
  TrendingUp,
  Wrench,
  Zap,
  Hammer,
  HandHeart,
  Sparkles,
} from "lucide-react";
import { heroData } from "../data/mock";
import heroImage from "../assets/test.jpg";

const services = [
  { name: "Plumber", icon: Wrench },
  { name: "Electrician", icon: Zap },
  { name: "Carpenter", icon: Hammer },
  { name: "Helper", icon: HandHeart },
  { name: "Cleaner", icon: Sparkles },
];

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#45844b] to-[#3a703f] min-h-screen overflow-hidden">
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/20 pointer-events-none"></div>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <div className="relative z-10">
            <h1 className="text-white leading-[1.2] animate-fade-in-up">
              <span className="font-sans text-5xl md:text-6xl lg:text-[5.5rem] font-semibold block">
                {heroData.title}
              </span>
              <span className="font-sans text-5xl md:text-6xl lg:text-[5.5rem] italic font-semibold block mt-1">
                {heroData.titleItalic}
              </span>
            </h1>
            <p
              className="text-white/60 text-base md:text-lg mt-8 max-w-[480px] leading-relaxed font-light animate-fade-in-up delay-200"
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
                href="#"
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

              <a
                href="#"
                className="flex-1 sm:flex-none flex items-center justify-center sm:justify-start gap-3 px-6 sm:px-7 py-3 sm:py-3.5 bg-[#181818] border border-white/20 rounded-xl hover:bg-white/5 transition-colors group min-w-0"
              >
                <svg
                  className="w-8 h-8 text-white group-hover:scale-105 transition-transform shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-.35-.16-1.07-.16-1.42 0-1.03.48-2.1.55-3.08-.4-1.93-1.87-3.26-6.43-1.36-9.17 1.16-1.68 2.92-2.12 4.14-1.61.64.27 1.22.28 1.86 0 1.21-.53 3.09-.13 4.16 1.63-.1.06-.92.54-1.12 1.68-.23 1.35.38 2.76 1.94 3.39-.42 1.25-1.04 2.5-1.92 3.52-.12.14-.24.28-.35.43-.63.74-1.1 1.07-1.78 1.07-.06 0-.12 0-.17-.02zM12.04 7.25c-.24-2.84 2.1-5.18 4.95-5.25.26 3.12-2.82 5.6-4.95 5.25z" />
                </svg>
                <div className="flex flex-col text-left min-w-0">
                  <span className="text-[10px] uppercase font-medium text-white/60 leading-none mb-1 truncate">
                    Download on the
                  </span>
                  <span className="text-base sm:text-lg font-semibold text-white leading-none font-sans truncate">
                    App Store
                  </span>
                </div>
              </a>
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
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-h-[600px] lg:max-h-[700px]">
              <img
                src={heroImage}
                alt="Workra Team"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Todays Visitors Card */}
            <div
              className="absolute bottom-[10%] right-[-10px] md:right-[-20px] bg-white/10 backdrop-blur-2xl border border-white/20 rounded-xl px-5 py-4 min-w-[220px] shadow-2xl animate-float"
              style={{ animationDelay: "2s" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-verge-accent rounded-full flex items-center justify-center">
                  <Globe className="w-3 h-3 text-white" />
                </div>
                <span className="text-white text-sm font-medium">
                  Todays Visitors
                </span>
              </div>
              <div className="flex items-baseline gap-3">
                <p className="text-white text-3xl font-serif">17,640</p>
                <span className="flex items-center text-verge-accent text-sm">
                  <TrendingUp className="w-3.5 h-3.5 mr-1" />
                  51%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
