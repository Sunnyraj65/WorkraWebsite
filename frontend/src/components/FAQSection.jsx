import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How do I book house help on Workra?",
    answer:
      "Just select your chore or hours in the app. We'll dispatch a verified female helper near you, and she will arrive at your doorstep in 10 minutes. 🚀",
  },
  {
    question: "What tasks can a Workra house helper do?",
    answer:
      "Our verified female helpers handle all everyday domestic chores — sweeping & mopping (jhadu-pocha), utensil washing (bartan), dusting furniture, kitchen prep (chopping vegetables, kneading dough), bathroom upkeep, and bed making.",
  },
  {
    question: "How does the pricing work?",
    answer:
      "Workra has a simple, flat pricing model: ₹99 per hour. No monthly maid commitments, no advance deposits, and zero commission.",
  },
  {
    question: "How quickly does the helper arrive?",
    answer:
      "Workra delivers house help in minutes — typically within 10 to 15 minutes of booking anywhere in our covered areas in Patna.",
  },
  {
    question: "Are Workra helpers background-checked and safe?",
    answer:
      "Yes. Every helper undergoes strict police background verification, Aadhaar verification, and hands-on domestic skill assessment before joining.",
  },
  {
    question: "Are there any hidden charges?",
    answer:
      "No. Transparent flat ₹99/hour pricing. You pay only for the hours you book.",
  },
  {
    question: "Can I reschedule or cancel my booking?",
    answer:
      "Yes. You can reschedule or cancel your booking directly from the Workra app without any hassle.",
  },
  {
    question: "Do I need to provide cleaning supplies?",
    answer:
      "We recommend providing your household cleaning essentials (broom, mop, dishwashing liquid/soap, scrubber) since helpers use what your home is accustomed to.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white" aria-label="Frequently asked questions about Workra home services in Patna">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-4 md:gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 md:p-6 text-left focus:outline-none group"
              >
                <span className="text-base md:text-xl font-semibold text-gray-900 group-hover:text-[#00C885] transition-colors leading-snug">
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 ml-4 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? "bg-[#00C885] text-white rotate-180" : "bg-black text-white"}`}
                >
                  {openIndex === index ? (
                    <Minus size={16} className="md:w-5 md:h-5" />
                  ) : (
                    <Plus size={16} className="md:w-5 md:h-5" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="p-4 pt-0 md:p-6 md:pt-0 text-sm md:text-base text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
