import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { SEO } from "./components/SEO";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { TestimonialSection } from "./components/TestimonialSection";
import { StepsSection } from "./components/StepsSection";
import { WhyChooseSection } from "./components/WhyChooseSection";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { DeleteAccount } from "./components/DeleteAccount";
import { AllServicesPage } from "./components/AllServicesPage";
import { ServiceDetailPage } from "./components/ServiceDetailPage";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <SEO
        title="Home Services in Patna – Book Plumber, Electrician, Cleaner"
        description="From cleaning to repairs — Workra brings trusted, verified house help to your doorstep in Patna. Book in 60 seconds, expert arrives in 10 minutes. 0% commission."
        path="/"
        keywords="cleaning service in Patna, cleaning services Patna, home cleaning Patna, best cleaning service Patna, book cleaner Patna, floor cleaning Patna, bathroom cleaning Patna, deep cleaning Patna, home services Patna, plumber Patna, electrician Patna, carpenter Patna, AC repair Patna, Workra, house help Patna, cleaning company Patna, maid service Patna"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Workra – Home Services in Patna",
          "description": "From cleaning to repairs — Workra brings trusted, verified house help to your doorstep in Patna. Book in 60 seconds, expert arrives in 10 minutes. 0% commission.",
          "url": "https://useworkra.com/",
          "isPartOf": { "@id": "https://useworkra.com/#website" },
          "about": {
            "@type": "Thing",
            "name": "Home Services",
            "description": "Professional home cleaning, repair and maintenance services in Patna, Bihar — including floor cleaning, bathroom cleaning, deep cleaning, plumbing, electrical work and carpentry."
          },
          "specialty": "Home cleaning and repair services including floor cleaning, bathroom cleaning, deep cleaning, AC repair, plumbing, carpentry, wiring, and more in Patna"
        }}
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
