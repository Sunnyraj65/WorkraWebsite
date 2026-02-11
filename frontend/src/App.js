import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ValueBar } from "./components/ValueBar";
import { FeaturesSection } from "./components/FeaturesSection";
import { TestimonialSection } from "./components/TestimonialSection";
import { DashboardPreview } from "./components/DashboardPreview";
import { Footer } from "./components/Footer";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <HeroSection />
      <ValueBar />
      <FeaturesSection />
      <TestimonialSection />
      <DashboardPreview />
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
