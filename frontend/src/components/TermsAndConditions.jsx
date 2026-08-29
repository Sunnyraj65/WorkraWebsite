import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SEO } from "./SEO";
import {
  FileText,
  UserCheck,
  Sparkles,
  CreditCard,
  XCircle,
  ShieldCheck,
  AlertTriangle,
  Scale,
  Building2,
  RefreshCw,
  Mail,
  ArrowLeft,
  ChevronRight,
  Handshake,
} from "lucide-react";

const SectionCard = ({ icon: Icon, iconColor, title, children, index }) => (
  <div
    className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-verge-green/20 transition-all duration-500 overflow-hidden group"
    style={{ animationDelay: `${index * 80}ms` }}
  >
    <div className="p-6 md:p-8">
      <div className="flex items-start gap-4 mb-5">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${iconColor}`}
        >
          <Icon className="w-6 h-6" />
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight pt-2">
          {title}
        </h2>
      </div>
      <div className="text-gray-600 leading-relaxed space-y-3 ml-0 md:ml-16">
        {children}
      </div>
    </div>
  </div>
);

const BulletItem = ({ children }) => (
  <div className="flex items-start gap-3">
    <ChevronRight className="w-4 h-4 text-verge-green mt-1 shrink-0" />
    <span>{children}</span>
  </div>
);

const SubSection = ({ emoji, title, children }) => (
  <div className="bg-gray-50 rounded-xl p-4 md:p-5 border border-gray-100">
    <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
      <span className="text-lg">{emoji}</span> {title}
    </h3>
    <div className="space-y-2 text-sm md:text-base">{children}</div>
  </div>
);

export const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-verge-cream">
      <SEO
        title="Terms & Conditions"
        description="Workra Terms and Conditions – Read the terms of service governing the use of Workra's cleaning and house help platform in Patna."
        path="/terms-and-conditions"
        keywords="Workra terms and conditions, terms of service, user agreement, cleaning service terms Patna"
      />
      <Header />

      {/* Hero Banner */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-verge-green-dark via-verge-green to-verge-accent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,200,133,0.15),transparent_50%)]" />

        {/* Floating decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-verge-accent/10 rounded-full blur-2xl" />

        <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
              <FileText className="w-7 h-7 md:w-8 md:h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Terms &amp; Conditions
              </h1>
              <p className="text-white/70 text-sm md:text-base mt-1">
                Last updated: August 2026 &bull; Effective for all users and partners
              </p>
            </div>
          </div>

          <p className="text-white/80 text-base md:text-lg max-w-3xl leading-relaxed">
            Welcome to Workra. These Terms and Conditions constitute a legally binding agreement
            between you (&ldquo;User&rdquo;, &ldquo;Customer&rdquo;, or &ldquo;You&rdquo;) and
            Workra (&ldquo;Company&rdquo;, &ldquo;We&rdquo;, &ldquo;Us&rdquo;, or &ldquo;Our&rdquo;)
            governing your access to and use of our website (useworkra.com), mobile application,
            and on-demand cleaning &amp; house help services in Patna.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 space-y-6 md:space-y-8">

          {/* 1. Acceptance of Terms */}
          <SectionCard
            icon={Handshake}
            iconColor="bg-emerald-50 text-emerald-600"
            title="1. Acceptance of Terms"
            index={0}
          >
            <p>
              By accessing, downloading, registering with, or using the Workra platform or mobile application,
              you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions
              and our <Link to="/privacy-policy" className="text-verge-green font-semibold hover:underline">Privacy Policy</Link>.
            </p>
            <p>
              If you do not agree with any part of these Terms, you must immediately discontinue using our website,
              application, and services.
            </p>
          </SectionCard>

          {/* 2. Eligibility & Account Registration */}
          <SectionCard
            icon={UserCheck}
            iconColor="bg-blue-50 text-blue-600"
            title="2. Eligibility &amp; Account Registration"
            index={1}
          >
            <p>
              To use Workra, you must be at least 18 years old and capable of entering into a legally binding contract under applicable Indian laws.
            </p>
            <BulletItem>
              <strong>Accurate Information:</strong> You agree to provide accurate, current, and complete information during registration (including your full name, phone number, and address in Patna).
            </BulletItem>
            <BulletItem>
              <strong>Account Security:</strong> You are solely responsible for maintaining the confidentiality of your account credentials, OTPs, and for all activities that occur under your account.
            </BulletItem>
            <BulletItem>
              <strong>One Account Per User:</strong> You may not maintain multiple active accounts or transfer your account to another person without our prior written consent.
            </BulletItem>
          </SectionCard>

          {/* 3. Nature of Services */}
          <SectionCard
            icon={Sparkles}
            iconColor="bg-purple-50 text-purple-600"
            title="3. Scope of Services &amp; Platform Role"
            index={2}
          >
            <p>
              Workra operates as an AI-powered technology marketplace that connects customers in Patna with verified independent service providers (cleaners, maids, and handy helpers).
            </p>
            <SubSection emoji="🧹" title="Our Services in Patna Include:">
              <BulletItem>House Cleaning &amp; Floor Mopping</BulletItem>
              <BulletItem>Deep Cleaning &amp; Sanitization</BulletItem>
              <BulletItem>Bathroom Cleaning &amp; Scrubbing</BulletItem>
              <BulletItem>Sofa &amp; Upholstery Steam/Dry Cleaning</BulletItem>
              <BulletItem>Kitchen Utensil Cleaning &amp; Dishwashing</BulletItem>
              <BulletItem>Glass &amp; Window Cleaning</BulletItem>
              <BulletItem>Dusting &amp; Daily Upkeep Services</BulletItem>
            </SubSection>
            <p className="text-sm text-gray-500 mt-2">
              Workra acts as an intermediary platform connecting users to independent service professionals. While we conduct identity and background verification on all workers, services are delivered by independent professionals.
            </p>
          </SectionCard>

          {/* 4. Booking & Pricing */}
          <SectionCard
            icon={CreditCard}
            iconColor="bg-green-50 text-green-600"
            title="4. Bookings, Pricing &amp; 0% Commission Model"
            index={3}
          >
            <BulletItem>
              <strong>Upfront Flat Pricing:</strong> All service base prices are displayed clearly on the platform before booking. There are no hidden fees or surge charges.
            </BulletItem>
            <BulletItem>
              <strong>Zero Commission Model:</strong> Workra operates on a 0% commission model for workers. 100% of the service fee goes directly to the hardworking service professional.
            </BulletItem>
            <BulletItem>
              <strong>Additional Scope:</strong> If on-site inspection reveals additional work beyond the selected package, any extra charges must be agreed upon mutually before work begins.
            </BulletItem>
            <BulletItem>
              <strong>Payment Methods:</strong> Payments can be made via UPI, digital payment gateways, or cash directly upon satisfactory completion of the service.
            </BulletItem>
          </SectionCard>

          {/* 5. Cancellation & Rescheduling */}
          <SectionCard
            icon={XCircle}
            iconColor="bg-amber-50 text-amber-600"
            title="5. Cancellation &amp; Rescheduling Policy"
            index={4}
          >
            <BulletItem>
              <strong>Free Cancellation:</strong> You may cancel or reschedule your booking free of charge up to 30 minutes before the scheduled arrival time through the Workra app or support team.
            </BulletItem>
            <BulletItem>
              <strong>Late Cancellation:</strong> If you cancel after a professional has already arrived at your doorstep, a nominal travel convenience fee may apply to compensate the worker for their time and travel.
            </BulletItem>
            <BulletItem>
              <strong>Provider Cancellation:</strong> In the rare event a service provider cannot attend due to an emergency, Workra will promptly reassign another verified expert or reschedule at your convenience.
            </BulletItem>
          </SectionCard>

          {/* 6. Customer Obligations */}
          <SectionCard
            icon={ShieldCheck}
            iconColor="bg-teal-50 text-teal-600"
            title="6. Customer Obligations &amp; Safety"
            index={5}
          >
            <BulletItem>
              <strong>Safe Environment:</strong> You agree to provide a safe, respectful, and harassment-free working environment for all service professionals visiting your premises.
            </BulletItem>
            <BulletItem>
              <strong>Access to Utilities:</strong> You are responsible for providing basic required utilities (such as running water and electricity) necessary for cleaning tasks.
            </BulletItem>
            <BulletItem>
              <strong>Valuables &amp; Cash:</strong> We strongly advise customers to secure all cash, jewellery, and high-value personal belongings prior to the commencement of any home cleaning service.
            </BulletItem>
          </SectionCard>

          {/* 7. Service Guarantee & Resolution */}
          <SectionCard
            icon={AlertTriangle}
            iconColor="bg-rose-50 text-rose-600"
            title="7. Quality Guarantee &amp; Issue Resolution"
            index={6}
          >
            <p>
              Customer satisfaction is our highest priority. If you are not completely satisfied with the quality of cleaning:
            </p>
            <BulletItem>
              <strong>24-Hour Reporting Window:</strong> Please notify our customer support team within 24 hours of service completion via WhatsApp (+91 93341 32209) or email (support@workra.in) with details or photos.
            </BulletItem>
            <BulletItem>
              <strong>Re-cleaning / Fair Resolution:</strong> We will review your issue and, where appropriate, arrange a free touch-up cleaning or issue a fair resolution.
            </BulletItem>
          </SectionCard>

          {/* 8. Limitation of Liability */}
          <SectionCard
            icon={Scale}
            iconColor="bg-indigo-50 text-indigo-600"
            title="8. Limitation of Liability &amp; Disclaimers"
            index={7}
          >
            <p>
              To the maximum extent permitted by applicable Indian law, Workra shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the platform or services.
            </p>
            <p>
              While all professionals undergo background verification and identity screening, Workra is not responsible for pre-existing property defects, normal wear and tear, or delicate items damaged due to prior fragility.
            </p>
          </SectionCard>

          {/* 9. Governing Law & Jurisdiction */}
          <SectionCard
            icon={Building2}
            iconColor="bg-cyan-50 text-cyan-600"
            title="9. Governing Law &amp; Jurisdiction"
            index={8}
          >
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India.
            </p>
            <p>
              Any disputes, controversies, or claims arising out of or in connection with these Terms or your use of Workra services shall be subject to the exclusive jurisdiction of the competent courts located in <strong>Patna, Bihar, India</strong>.
            </p>
          </SectionCard>

          {/* 10. Modifications to Terms */}
          <SectionCard
            icon={RefreshCw}
            iconColor="bg-orange-50 text-orange-600"
            title="10. Modifications to Terms"
            index={9}
          >
            <p>
              Workra reserves the right to modify, amend, or update these Terms and Conditions at any time. Any changes will be effective immediately upon posting on this page with an updated &ldquo;Last Updated&rdquo; date.
            </p>
            <p>
              Your continued use of the platform following the posting of revised Terms constitutes your acceptance of the changes.
            </p>
          </SectionCard>

          {/* 11. Contact Information */}
          <SectionCard
            icon={Mail}
            iconColor="bg-verge-green/10 text-verge-green"
            title="11. Contact Us"
            index={10}
          >
            <p>
              If you have any questions, grievances, or feedback regarding these Terms and Conditions, please reach out to our team:
            </p>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 space-y-3 mt-4">
              <p className="font-semibold text-gray-800">Workra Legal &amp; Support Team</p>
              <p>Email: <a href="mailto:support@workra.in" className="text-verge-green font-medium hover:underline">support@workra.in</a></p>
              <p>WhatsApp / Phone: <a href="tel:+919334132209" className="text-verge-green font-medium hover:underline">+91 93341 32209</a></p>
              <p>Location: Patna, Bihar 800001, India</p>
            </div>
          </SectionCard>

        </div>
      </section>

      <Footer />
    </div>
  );
};
