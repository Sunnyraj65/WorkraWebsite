import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
        description="Workra – India's first 0% commission home services platform. Book trusted house help in Patna: floor cleaning, bathroom cleaning, deep cleaning, AC repair, plumbing, carpentry & more. Book in 60 seconds, expert arrives in 10 minutes."
        path="/"
        keywords="home services Patna, plumber Patna, electrician Patna, carpenter Patna, cleaning services Patna, AC repair Patna, Workra, book home services, 0% commission home services, house help Patna, floor cleaning Patna, bathroom cleaning Patna, deep cleaning Patna, dusting service Patna, utensil cleaning, glass cleaning, trusted house help, book cleaner online"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Workra – Home Services in Patna",
          "description": "India's first 0% commission home services platform. Book trusted house help – floor cleaning, bathroom cleaning, deep cleaning, AC repair, plumbing, carpentry and more in Patna.",
          "url": "https://useworkra.com/",
          "isPartOf": { "@id": "https://useworkra.com/#website" },
          "about": {
            "@type": "Thing",
            "name": "Home Services",
            "description": "Professional home cleaning, repair and maintenance services in Patna, Bihar"
          },
          "specialty": "Home cleaning and repair services including floor cleaning, bathroom cleaning, deep cleaning, AC repair, plumbing, carpentry, wiring, and more"
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
