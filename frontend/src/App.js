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
        description="Workra – India's first 0% commission home services platform. Book verified plumbers, electricians, carpenters & cleaners in Patna. AI-powered instant quotes."
        path="/"
        keywords="home services Patna, plumber Patna, electrician Patna, carpenter Patna, cleaning services Patna, AC repair Patna, Workra, book home services, 0% commission home services"
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
