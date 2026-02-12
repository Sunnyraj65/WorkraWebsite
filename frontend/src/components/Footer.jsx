import React from "react";
import { Mail, Linkedin, Facebook, Instagram, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-verge-green py-12 md:py-16 text-white text-left">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Contact Header */}
        {/* Contact Header */}
        <div className="flex flex-col items-start justify-start mb-12 border-b border-white/10 pb-12">
          <p className="text-white/90 text-lg font-medium mb-6">
            Feel free to reach us at:
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="mailto:workraservice@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all duration-300 backdrop-blur-sm group"
            >
              <Mail className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              <span className="text-white font-medium tracking-wide">
                workraservice@gmail.com
              </span>
            </a>
            <a
              href="tel:+917050701478"
              className="inline-flex items-center gap-3 px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all duration-300 backdrop-blur-sm group"
            >
              <Phone className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              <span className="text-white font-medium tracking-wide">
                +91 70507 01478
              </span>
            </a>
            <a
              href="tel:+919798105359"
              className="inline-flex items-center gap-3 px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all duration-300 backdrop-blur-sm group"
            >
              <Phone className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              <span className="text-white font-medium tracking-wide">
                +91 97981 05359
              </span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-16 max-w-4xl mr-auto text-left">
          {/* Company */}
          <div className="flex flex-col items-start">
            <h3 className="text-white/40 text-xs font-bold tracking-[0.2em] uppercase mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-white font-medium hover:text-[#00C885] hover:bg-white/10 px-3 py-1 -ml-3 rounded-lg transition-all"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="mailto:careers@workra.com"
                  className="text-[#00C885] font-medium hover:underline block mb-2"
                >
                  careers@workra.com
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white font-medium hover:text-[#00C885] hover:bg-white/10 px-3 py-1 -ml-3 rounded-lg transition-all"
                >
                  Become a Workra Professional
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-start">
            <h3 className="text-white/40 text-xs font-bold tracking-[0.2em] uppercase mb-6">
              Legal
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-white font-medium hover:text-[#00C885] hover:bg-white/10 px-3 py-1 -ml-3 rounded-lg transition-all"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white font-medium hover:text-[#00C885] hover:bg-white/10 px-3 py-1 -ml-3 rounded-lg transition-all"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="flex flex-col items-start">
            <h3 className="text-white/40 text-xs font-bold tracking-[0.2em] uppercase mb-6">
              Support
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-white font-medium hover:text-[#00C885] hover:bg-white/10 px-3 py-1 -ml-3 rounded-lg transition-all"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center border-t border-white/10 pt-10">
          <div className="flex gap-6 mb-6">
            <a
              href="#"
              className="bg-white/10 p-3 rounded-full hover:bg-white/20 hover:scale-110 transition-all text-white"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="bg-white/10 p-3 rounded-full hover:bg-white/20 hover:scale-110 transition-all text-white"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/workra_"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-3 rounded-full hover:bg-white/20 hover:scale-110 transition-all text-white"
            >
              <Instagram size={20} />
            </a>
          </div>
          <p className="text-white/40 text-sm font-medium">Workra © 2025</p>
        </div>
      </div>
    </footer>
  );
};
