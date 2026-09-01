import React, { useState } from "react";
import { X, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

export const LocalityRequestModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    street: "",
    locality: "",
    city: "Patna",
    whatsapp: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.street.trim() || !formData.locality.trim() || !formData.city.trim()) {
      setError("Please fill in all required fields marked with *");
      return;
    }

    // Format WhatsApp message to Workra (+91 93341 32209)
    const message = `*New Locality Request for Workra!* 🚀\n\n` +
      `📍 *Street/Society:* ${formData.street.trim()}\n` +
      `🏘️ *Locality:* ${formData.locality.trim()}\n` +
      `🌆 *City:* ${formData.city.trim()}\n` +
      `📱 *Customer WhatsApp:* ${formData.whatsapp.trim() || "Not provided"}\n\n` +
      `_Sent from useworkra.com_`;

    const whatsappUrl = `https://wa.me/919334132209?text=${encodeURIComponent(message)}`;

    // Save in localStorage as a backup so leads are never lost
    try {
      const existing = JSON.parse(localStorage.getItem("workra_locality_requests") || "[]");
      existing.push({
        ...formData,
        date: new Date().toISOString(),
      });
      localStorage.setItem("workra_locality_requests", JSON.stringify(existing));
    } catch (err) {
      console.warn("Could not save to localStorage", err);
    }

    setSubmitted(true);

    // Automatically open WhatsApp in a new tab
    const win = window.open(whatsappUrl, "_blank");
    if (!win) {
      // Fallback if popup is blocked
      window.location.href = whatsappUrl;
    }
  };

  const handleReset = () => {
    setFormData({
      street: "",
      locality: "",
      city: "Patna",
      whatsapp: "",
    });
    setSubmitted(false);
    setError("");
    onClose();
  };

  const getWhatsAppLink = () => {
    const message = `*New Locality Request for Workra!* 🚀\n\n` +
      `📍 *Street/Society:* ${formData.street.trim()}\n` +
      `🏘️ *Locality:* ${formData.locality.trim()}\n` +
      `🌆 *City:* ${formData.city.trim()}\n` +
      `📱 *Customer WhatsApp:* ${formData.whatsapp.trim() || "Not provided"}\n\n` +
      `_Sent from useworkra.com_`;
    return `https://wa.me/919334132209?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      {/* Modal Card */}
      <div
        className="bg-white rounded-2xl w-full max-w-md md:max-w-lg p-6 sm:p-8 shadow-2xl relative border border-gray-100 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight mb-2">
              Request Workra in your locality!
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Tell us where you want 10-minute house help. We expand to localities with the highest demand first!
            </p>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm rounded-lg">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Field 1: Street name, apartment */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
                  Street name, apartment, or gated society <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  placeholder="Enter street name, apartment, or gated society"
                  className="w-full px-3.5 py-2.5 sm:py-3 text-sm text-gray-800 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#45844b] focus:ring-2 focus:ring-[#45844b]/20 transition-all placeholder:text-gray-400"
                  required
                />
              </div>

              {/* Field 2: Locality */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
                  Locality <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="locality"
                  value={formData.locality}
                  onChange={handleChange}
                  placeholder="Enter locality (e.g. Kankarbagh, Boring Road)"
                  className="w-full px-3.5 py-2.5 sm:py-3 text-sm text-gray-800 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#45844b] focus:ring-2 focus:ring-[#45844b]/20 transition-all placeholder:text-gray-400"
                  required
                />
              </div>

              {/* Field 3: City */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter city"
                  className="w-full px-3.5 py-2.5 sm:py-3 text-sm text-gray-800 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#45844b] focus:ring-2 focus:ring-[#45844b]/20 transition-all placeholder:text-gray-400"
                  required
                />
              </div>

              {/* Field 4: WhatsApp Number */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
                  WhatsApp number <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="Enter whatsapp number (optional)"
                  className="w-full px-3.5 py-2.5 sm:py-3 text-sm text-gray-800 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#45844b] focus:ring-2 focus:ring-[#45844b]/20 transition-all placeholder:text-gray-400"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-black hover:bg-neutral-800 text-white font-medium text-sm rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <span>Submit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center py-4">
            <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Request Sent!
            </h3>
            <p className="text-sm text-gray-600 mb-6 max-w-sm mx-auto leading-relaxed">
              We have received your request for <strong>{formData.locality}, {formData.city}</strong>! WhatsApp has been opened so you can send it directly to our team.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20ba57] text-white font-semibold text-sm rounded-xl transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open in WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium text-sm rounded-xl transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
