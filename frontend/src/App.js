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
    "parentOrganization": { "@id": "https://useworkra.com/#organization" }
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
  // Service pages navigation
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Workra Services",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "All Services", "url": "https://useworkra.com/all-services" },
      { "@type": "ListItem", "position": 2, "name": "Deep Cleaning in Patna", "url": "https://useworkra.com/services/deep-cleaning" },
      { "@type": "ListItem", "position": 3, "name": "House Cleaning in Patna", "url": "https://useworkra.com/services/house-cleaning" },
      { "@type": "ListItem", "position": 4, "name": "Bathroom Cleaning in Patna", "url": "https://useworkra.com/services/bathroom-cleaning" },
      { "@type": "ListItem", "position": 5, "name": "AC Repair in Patna", "url": "https://useworkra.com/services/ac-repair" },
      { "@type": "ListItem", "position": 6, "name": "Plumber in Patna", "url": "https://useworkra.com/services/plumbing" },
      { "@type": "ListItem", "position": 7, "name": "Electrician & Wiring in Patna", "url": "https://useworkra.com/services/wiring" },
      { "@type": "ListItem", "position": 8, "name": "Carpenter in Patna", "url": "https://useworkra.com/services/carpenter" }
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
