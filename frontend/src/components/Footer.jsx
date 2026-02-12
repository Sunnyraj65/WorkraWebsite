import React from "react";
import { Mail, Linkedin, Facebook, Instagram, Phone } from "lucide-react";

const WhatsAppIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

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
              href="https://wa.me/917050701478"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all duration-300 backdrop-blur-sm group"
            >
              <WhatsAppIcon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              <span className="text-white font-medium tracking-wide">
                +91 70507 01478
              </span>
            </a>
            <a
              href="https://wa.me/919798105359"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all duration-300 backdrop-blur-sm group"
            >
              <WhatsAppIcon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
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
