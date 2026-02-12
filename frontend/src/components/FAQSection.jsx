import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How do I book a service on Workra?",
    answer:
      "Just select a service or chat with our AI about your problem. We’ll find the right professional, let you choose a time slot, and confirm your booking in minutes. 🚀",
  },
  {
    question: "Are Workra professionals verified?",
    answer:
      "Yes. All professionals are background-checked and verified before joining Workra.",
  },
  {
    question: "How is pricing decided?",
    answer:
      "Pricing depends on the type of service. You’ll see the base price before booking. Final cost is confirmed after inspection (if required).",
  },
  {
    question: "Is there an inspection before major work?",
    answer:
      "Yes. For complex tasks, we recommend booking an expert visit before starting the full job.",
  },
  {
    question: "Are there any hidden charges?",
    answer:
      "No. Workra follows transparent pricing. Any additional cost will be discussed before work begins.",
  },
  {
    question: "Can I reschedule or cancel my booking?",
    answer:
      "Yes. You can reschedule or cancel from your dashboard before the service time.",
  },
  {
    question: "What if I’m not satisfied with the service?",
    answer:
      "Please contact our support team. We aim to resolve issues quickly and fairly.",
  },
  {
    question: "Do I need to provide tools or materials?",
    answer:
      "Basic tools are carried by professionals. Material costs (if required) are separate and discussed beforehand.",
  },
  {
    question: "How quickly can a professional arrive?",
    answer:
      "Arrival time depends on availability, but we aim for fast and reliable service.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
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
