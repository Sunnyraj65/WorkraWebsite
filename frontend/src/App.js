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
import { TermsAndConditions } from "./components/TermsAndConditions";
import { DeleteAccount } from "./components/DeleteAccount";
import { AllServicesPage } from "./components/AllServicesPage";
import { ServiceDetailPage } from "./components/ServiceDetailPage";
import { CleanHomePage } from "./components/CleanHomePage";
import { SEO } from "./components/SEO";

// Homepage-only JSON-LD schemas — injected via useEffect so they only appear on "/"
const HOMEPAGE_SCHEMAS = [
  // LocalBusiness
  {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://useworkra.com/#localbusiness",
    "name": "Workra - House Help in Minutes in Patna",
    "alternateName": ["Workra", "Workra House Help", "Workra Patna", "Workra Maid Service", "Workra Cleaning Services"],
    "description": "Patna's trusted on-demand house help platform. Book verified female domestic helpers for sweeping, mopping, utensil washing, and daily chores at flat ₹99/hour.",
    "url": "https://useworkra.com/",
    "logo": "https://useworkra.com/wlogo.png",
    "image": "https://useworkra.com/wlogo.png",
    "telephone": "+919296897288",
    "email": "support@workra.in",
    "priceRange": "₹",
    "address": { "@type": "PostalAddress", "streetAddress": "Patna", "addressLocality": "Patna", "addressRegion": "Bihar", "postalCode": "800001", "addressCountry": "IN" },
    "geo": { "@type": "GeoCoordinates", "latitude": "25.6093", "longitude": "85.1376" },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "07:00", "closes": "22:00" },
    "areaServed": { "@type": "City", "name": "Patna", "sameAs": "https://en.wikipedia.org/wiki/Patna" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog", "name": "House Help & Maid Services",
      "itemListElement": [
        { "@type": "OfferCatalog", "name": "House Help Services", "itemListElement": [
          {"@type":"Offer","itemOffered":{"@type":"Service","name":"House Cleaning in Patna"}},
          {"@type":"Offer","itemOffered":{"@type":"Service","name":"Utensil Cleaning in Patna"}},
          {"@type":"Offer","itemOffered":{"@type":"Service","name":"Dusting Service in Patna"}},
          {"@type":"Offer","itemOffered":{"@type":"Service","name":"Bathroom Cleaning in Patna"}},
          {"@type":"Offer","itemOffered":{"@type":"Service","name":"Ironing & Folding in Patna"}},
          {"@type":"Offer","itemOffered":{"@type":"Service","name":"Window Cleaning in Patna"}}
        ]}
      ]
    },
    "sameAs": ["https://www.linkedin.com/company/workra","https://www.instagram.com/workra_","https://www.facebook.com/profile.php?id=61582246742034","https://play.google.com/store/apps/details?id=com.workra.mobile","https://apps.apple.com/in/app/workra/id6820196978"],
    "parentOrganization": { "@id": "https://useworkra.com/#organization" }
  },

  // MobileApplication - Android
  {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "Workra",
    "operatingSystem": "Android",
    "applicationCategory": "LifestyleApplication",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
    "url": "https://play.google.com/store/apps/details?id=com.workra.mobile",
    "description": "Workra – Patna's on-demand house help app. Book verified female domestic helpers in minutes at flat ₹99/hour."
  },
  // MobileApplication - iOS
  {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "Workra",
    "operatingSystem": "iOS",
    "applicationCategory": "LifestyleApplication",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
    "url": "https://apps.apple.com/in/app/workra/id6820196978",
    "description": "Workra – Patna's on-demand house help app. Book verified female domestic helpers in minutes at flat ₹99/hour."
  },
  // Service pages navigation
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Workra House Help Services",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "All Services", "url": "https://useworkra.com/all-services" },
      { "@type": "ListItem", "position": 2, "name": "House Cleaning in Patna", "url": "https://useworkra.com/services/house-cleaning" },
      { "@type": "ListItem", "position": 3, "name": "Utensil Cleaning in Patna", "url": "https://useworkra.com/services/utensil-cleaning" },
      { "@type": "ListItem", "position": 4, "name": "Dusting Service in Patna", "url": "https://useworkra.com/services/dusting" },
      { "@type": "ListItem", "position": 5, "name": "Bathroom Cleaning in Patna", "url": "https://useworkra.com/services/bathroom-cleaning" },
      { "@type": "ListItem", "position": 6, "name": "Complete Wardrobe Cleaning in Patna", "url": "https://useworkra.com/services/wardrobe-cleaning" },
      { "@type": "ListItem", "position": 7, "name": "Kitchen Cabinet Cleaning in Patna", "url": "https://useworkra.com/services/kitchen-cabinet-cleaning" },
      { "@type": "ListItem", "position": 8, "name": "Ironing & Folding in Patna", "url": "https://useworkra.com/services/ironing-and-folding" },
      { "@type": "ListItem", "position": 9, "name": "Window Cleaning in Patna", "url": "https://useworkra.com/services/window-cleaning" }
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
      <SEO
        title="Workra – House Help at Your Door in Minutes | ₹99/Hour in Patna"
        description="Patna's trusted on-demand house help in minutes. Book verified female domestic helpers for sweeping, mopping, utensil washing, and daily chores at flat ₹99/hour."
        path="/"
        keywords="Workra, Workra house help, Workra Patna, house help Patna, maid service Patna, 99 per hour maid Patna, jhadu pocha Patna, utensil washing Patna, bathroom cleaning Patna, dusting Patna"
      />
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
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/terms" element={<Navigate to="/terms-and-conditions" replace />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="/all-services" element={<AllServicesPage />} />
          <Route path="/services/clean-home" element={<CleanHomePage />} />
          <Route path="/clean-home" element={<Navigate to="/services/clean-home" replace />} />
          <Route path="/services/deep-cleaning" element={<Navigate to="/services/house-cleaning" replace />} />
          <Route path="/deep-cleaning" element={<Navigate to="/services/house-cleaning" replace />} />
          <Route path="/services/glass-cleaning" element={<Navigate to="/services/ironing-and-folding" replace />} />
          <Route path="/glass-cleaning" element={<Navigate to="/services/ironing-and-folding" replace />} />
          <Route path="/wardrobe" element={<Navigate to="/services/wardrobe-cleaning" replace />} />
          <Route path="/services/wardrobe" element={<Navigate to="/services/wardrobe-cleaning" replace />} />
          <Route path="/services/complete-wardrobe-cleaning" element={<Navigate to="/services/wardrobe-cleaning" replace />} />
          <Route path="/kitchen-cabinet" element={<Navigate to="/services/kitchen-cabinet-cleaning" replace />} />
          <Route path="/services/kitchen-cabinet" element={<Navigate to="/services/kitchen-cabinet-cleaning" replace />} />
          <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
