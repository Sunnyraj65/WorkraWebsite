import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { StepsSection } from "./components/StepsSection";
import { WhyChooseSection } from "./components/WhyChooseSection";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { DeleteAccount } from "./components/DeleteAccount";
import { AllServicesPage } from "./components/AllServicesPage";
import { ServiceDetailPage } from "./components/ServiceDetailPage";

// Homepage-only JSON-LD schemas — injected via useEffect so they only appear on "/"
const HOMEPAGE_SCHEMAS = [
  // LocalBusiness
  {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://useworkra.com/#localbusiness",
    "name": "Workra - Cleaning Service in Patna",
    "alternateName": "Workra Home Services",
    "description": "Best cleaning service in Patna. Book verified cleaners, plumbers, electricians & carpenters. India's first 0% commission home services platform with AI-powered booking.",
    "url": "https://useworkra.com/",
    "logo": "https://useworkra.com/wlogo.png",
    "image": "https://useworkra.com/wlogo.png",
    "telephone": "+916205683473",
    "email": "workraservice@gmail.com",
    "priceRange": "₹₹",
    "address": { "@type": "PostalAddress", "streetAddress": "Patna", "addressLocality": "Patna", "addressRegion": "Bihar", "postalCode": "800001", "addressCountry": "IN" },
    "geo": { "@type": "GeoCoordinates", "latitude": "25.6093", "longitude": "85.1376" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "07:00", "closes": "22:00" },
    "areaServed": { "@type": "City", "name": "Patna", "sameAs": "https://en.wikipedia.org/wiki/Patna" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog", "name": "Home Services",
      "itemListElement": [
        { "@type": "OfferCatalog", "name": "Cleaning Services", "itemListElement": [
          {"@type":"Offer","itemOffered":{"@type":"Service","name":"House Cleaning in Patna"}},
          {"@type":"Offer","itemOffered":{"@type":"Service","name":"Bathroom Cleaning in Patna"}},
          {"@type":"Offer","itemOffered":{"@type":"Service","name":"Deep Cleaning in Patna"}},
          {"@type":"Offer","itemOffered":{"@type":"Service","name":"Sofa Cleaning in Patna"}},
          {"@type":"Offer","itemOffered":{"@type":"Service","name":"Glass Cleaning in Patna"}},
          {"@type":"Offer","itemOffered":{"@type":"Service","name":"Utensil Cleaning in Patna"}},
          {"@type":"Offer","itemOffered":{"@type":"Service","name":"Dusting Service in Patna"}},
          {"@type":"Offer","itemOffered":{"@type":"Service","name":"Window Cleaning in Patna"}}
        ]},
        { "@type": "OfferCatalog", "name": "Repair Services", "itemListElement": [
          {"@type":"Offer","itemOffered":{"@type":"Service","name":"Plumber in Patna"}},
          {"@type":"Offer","itemOffered":{"@type":"Service","name":"Electrician in Patna"}},
          {"@type":"Offer","itemOffered":{"@type":"Service","name":"AC Repair in Patna"}},
          {"@type":"Offer","itemOffered":{"@type":"Service","name":"Carpenter in Patna"}}
        ]}
      ]
    },
    "sameAs": ["https://www.linkedin.com/company/workra","https://www.instagram.com/workra_","https://www.facebook.com/profile.php?id=61582246742034","https://play.google.com/store/apps/details?id=com.workra.mobile"],
    "parentOrganization": { "@id": "https://useworkra.com/#organization" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "1800", "bestRating": "5" }
  },
  // FAQPage
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How do I book a service on Workra?", "acceptedAnswer": { "@type": "Answer", "text": "Just select a service or chat with our AI about your problem. We'll find the right professional, let you choose a time slot, and confirm your booking in minutes." }},
      { "@type": "Question", "name": "Are Workra professionals verified?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. All professionals are background-checked and verified before joining Workra." }},
      { "@type": "Question", "name": "How is pricing decided on Workra?", "acceptedAnswer": { "@type": "Answer", "text": "Pricing depends on the type of service. You'll see the base price before booking. Final cost is confirmed after inspection (if required)." }},
      { "@type": "Question", "name": "Are there any hidden charges on Workra?", "acceptedAnswer": { "@type": "Answer", "text": "No. Workra follows transparent pricing. Any additional cost will be discussed before work begins." }},
      { "@type": "Question", "name": "Can I reschedule or cancel my Workra booking?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can reschedule or cancel from your dashboard before the service time." }},
      { "@type": "Question", "name": "Is there an inspection before major work?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. For complex tasks, we recommend booking an expert visit before starting the full job." }},
      { "@type": "Question", "name": "What if I'm not satisfied with the service?", "acceptedAnswer": { "@type": "Answer", "text": "Please contact our support team. We aim to resolve issues quickly and fairly." }},
      { "@type": "Question", "name": "Do I need to provide tools or materials?", "acceptedAnswer": { "@type": "Answer", "text": "Basic tools are carried by professionals. Material costs (if required) are separate and discussed beforehand." }},
      { "@type": "Question", "name": "How quickly can a professional arrive?", "acceptedAnswer": { "@type": "Answer", "text": "Arrival time depends on availability, but we aim for fast and reliable service." }}
    ]
  },
  // MobileApplication
  {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "Workra",
    "operatingSystem": "Android",
    "applicationCategory": "LifestyleApplication",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
    "url": "https://play.google.com/store/apps/details?id=com.workra.mobile",
    "description": "Workra – India's first 0% commission home services app. Book verified plumbers, electricians, carpenters and cleaners in Patna with AI-powered instant quotes."
  },
  // SiteNavigationElement
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Workra Services",
    "itemListElement": [
      { "@type": "SiteNavigationElement", "position": 1, "name": "All Services", "description": "Browse all home services — cleaning, plumbing, electrician, carpenter & more in Patna", "url": "https://useworkra.com/all-services" },
      { "@type": "SiteNavigationElement", "position": 2, "name": "Deep Cleaning in Patna", "description": "Complete home deep cleaning and sanitization — every room, corner and surface covered", "url": "https://useworkra.com/services/deep-cleaning" },
      { "@type": "SiteNavigationElement", "position": 3, "name": "House Cleaning in Patna", "description": "Complete house cleaning — floors, rooms, kitchen, balcony and every corner of your home professionally cleaned", "url": "https://useworkra.com/services/house-cleaning" },
      { "@type": "SiteNavigationElement", "position": 4, "name": "Bathroom Cleaning in Patna", "description": "Deep sanitization and scrubbing of toilets, tiles, fixtures and entire bathroom", "url": "https://useworkra.com/services/bathroom-cleaning" },
      { "@type": "SiteNavigationElement", "position": 5, "name": "AC Repair in Patna", "description": "Expert AC installation, repair, gas refilling and maintenance for all brands", "url": "https://useworkra.com/services/ac-repair" },
      { "@type": "SiteNavigationElement", "position": 6, "name": "Plumber in Patna", "description": "Leak fixes, pipe fitting, tap repair, drain cleaning and complete plumbing solutions", "url": "https://useworkra.com/services/plumbing" },
      { "@type": "SiteNavigationElement", "position": 7, "name": "Electrician & Wiring in Patna", "description": "Complete electrical wiring, rewiring, circuit setup and safety inspections", "url": "https://useworkra.com/services/wiring" },
      { "@type": "SiteNavigationElement", "position": 8, "name": "Carpenter in Patna", "description": "Skilled carpenters for furniture repair, assembly, custom woodwork and door/window fixes", "url": "https://useworkra.com/services/carpenter" }
    ]
  }
];

const LandingPage = () => {
  // Inject homepage-only JSON-LD schemas
  useEffect(() => {
    const scripts = HOMEPAGE_SCHEMAS.map((schema) => {
      const el = document.createElement("script");
      el.type = "application/ld+json";
      el.textContent = JSON.stringify(schema);
      el.dataset.homepageSchema = "true";
      document.head.appendChild(el);
      return el;
    });
    return () => {
      scripts.forEach((el) => {
        if (el.parentNode) el.parentNode.removeChild(el);
      });
    };
  }, []);

  return (
    <div className="landing-page">
      <Header />
      <HeroSection />

      <div id="services">
        <ServicesSection />
      </div>

      <div id="how-it-works">
        <StepsSection />
      </div>
      <div id="why-us">
        <WhyChooseSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="/all-services" element={<AllServicesPage />} />
          <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
