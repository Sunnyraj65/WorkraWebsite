import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import {
  Shield,
  MapPin,
  Camera,
  Lock,
  CreditCard,
  Database,
  Share2,
  ShieldCheck,
  Clock,
  UserCheck,
  Baby,
  RefreshCw,
  Mail,
  ArrowLeft,
  ChevronRight,
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

export const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-verge-cream">
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
              <Shield className="w-7 h-7 md:w-8 md:h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-white font-serif">
                Privacy Policy
              </h1>
            </div>
          </div>

          <p className="text-white/70 text-base md:text-lg max-w-2xl leading-relaxed">
            Your privacy matters to us. This document explains how Workra
            collects, uses, and protects your information when you use our app.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/15">
            <Clock className="w-4 h-4 text-white/60" />
            <span className="text-white/60 text-sm">
              Last updated: February 2026
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-[900px] mx-auto px-6 md:px-10 -mt-6 pb-20 relative z-10">
        {/* Intro Note */}
        <div className="bg-gradient-to-r from-verge-green/5 to-verge-accent/5 border border-verge-green/15 rounded-2xl p-5 md:p-6 mb-8">
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Workra (<strong>"we"</strong>, <strong>"our"</strong>, or{" "}
            <strong>"us"</strong>) operates the Workra mobile application (the{" "}
            <strong>"Service"</strong>). By using Workra, you agree to the
            collection and use of information in accordance with this policy.
          </p>
        </div>

        <div className="space-y-6">
          {/* Section 1 - Information We Collect */}
          <SectionCard
            icon={Database}
            iconColor="bg-blue-50 text-blue-600"
            title="1. Information We Collect"
            index={0}
          >
            <div className="space-y-4">
              <SubSection emoji="✅" title="Personal Information">
                <p className="text-gray-500 mb-2">
                  We may collect the following:
                </p>
                <BulletItem>Full name</BulletItem>
                <BulletItem>Phone number</BulletItem>
                <BulletItem>Address and location details</BulletItem>
                <BulletItem>Service booking details</BulletItem>
                <p className="text-gray-500 mt-2 text-sm italic">
                  This information is required to provide home services and
                  connect you with service professionals.
                </p>
              </SubSection>

              <SubSection emoji="📍" title="Location Information">
                <p className="text-gray-500 mb-2">
                  Workra collects real-time location data to:
                </p>
                <BulletItem>Show nearby service providers</BulletItem>
                <BulletItem>Enable accurate service delivery</BulletItem>
                <BulletItem>Improve service availability</BulletItem>
                <p className="text-gray-500 mt-2 text-sm italic">
                  You can disable location services in device settings, but some
                  features may not work properly.
                </p>
              </SubSection>

              <SubSection emoji="📷" title="Photos & Media">
                <p className="text-gray-500 mb-2">
                  Users may upload photos to:
                </p>
                <BulletItem>Describe repair or service needs</BulletItem>
                <BulletItem>
                  Help service providers understand the problem
                </BulletItem>
                <p className="text-gray-500 mt-2 text-sm italic">
                  These images are used only for service fulfillment.
                </p>
              </SubSection>

              <SubSection emoji="🔐" title="Authentication Information">
                <p className="text-gray-500 mb-2">
                  We use phone number verification (OTP) to:
                </p>
                <BulletItem>Authenticate users</BulletItem>
                <BulletItem>Prevent fraud</BulletItem>
                <BulletItem>Secure accounts</BulletItem>
              </SubSection>

              <SubSection emoji="💳" title="Payment Information">
                <BulletItem>
                  Workra may support online payments via secure third-party
                  payment gateways (such as UPI or Razorpay).
                </BulletItem>
                <BulletItem>
                  We do not store debit/credit card details on our servers.
                </BulletItem>
                <BulletItem>
                  Payments are processed securely by trusted payment providers.
                </BulletItem>
              </SubSection>
            </div>
          </SectionCard>

          {/* Section 2 - How We Use Your Information */}
          <SectionCard
            icon={ShieldCheck}
            iconColor="bg-green-50 text-green-600"
            title="2. How We Use Your Information"
            index={1}
          >
            <p className="text-gray-500 mb-3">We use collected data to:</p>
            <BulletItem>Provide and manage services</BulletItem>
            <BulletItem>Connect users with service professionals</BulletItem>
            <BulletItem>Process bookings and payments</BulletItem>
            <BulletItem>Improve app performance</BulletItem>
            <BulletItem>Ensure safety and prevent fraud</BulletItem>
            <BulletItem>Provide customer support</BulletItem>
          </SectionCard>

          {/* Section 3 - Third-Party Services */}
          <SectionCard
            icon={Share2}
            iconColor="bg-purple-50 text-purple-600"
            title="3. Third-Party Services"
            index={2}
          >
            <p className="text-gray-500 mb-4">
              Workra uses trusted third-party services to operate effectively:
            </p>
            <div className="space-y-4">
              <SubSection emoji="🔹" title="Firebase (Google)">
                <p className="text-gray-500 mb-1">Used for:</p>
                <BulletItem>Authentication</BulletItem>
                <BulletItem>App analytics</BulletItem>
                <BulletItem>Crash reporting</BulletItem>
                <BulletItem>Notifications</BulletItem>
              </SubSection>

              <SubSection emoji="🔹" title="Google Maps & Places API">
                <p className="text-gray-500 mb-1">Used for:</p>
                <BulletItem>Location services</BulletItem>
                <BulletItem>Address search</BulletItem>
                <BulletItem>Navigation assistance</BulletItem>
              </SubSection>

              <SubSection emoji="🔹" title="Payment Gateways">
                <BulletItem>
                  Used to securely process online payments.
                </BulletItem>
              </SubSection>
            </div>
            <p className="text-gray-500 mt-3 text-sm italic">
              These providers may collect information as governed by their
              privacy policies.
            </p>
          </SectionCard>

          {/* Section 4 - Data Sharing */}
          <SectionCard
            icon={Share2}
            iconColor="bg-orange-50 text-orange-600"
            title="4. Data Sharing"
            index={3}
          >
            <p className="text-gray-500 mb-3">
              We may share necessary information with:
            </p>
            <BulletItem>Service professionals to complete bookings</BulletItem>
            <BulletItem>Payment providers to process payments</BulletItem>
            <BulletItem>Legal authorities if required by law</BulletItem>
            <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-green-800 font-medium text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                We do not sell or rent personal data to third parties.
              </p>
            </div>
          </SectionCard>

          {/* Section 5 - Data Security */}
          <SectionCard
            icon={Lock}
            iconColor="bg-red-50 text-red-600"
            title="5. Data Security"
            index={4}
          >
            <p>
              We implement reasonable security measures to protect your data.
              However, no method of electronic storage is 100% secure.
            </p>
          </SectionCard>

          {/* Section 6 - Data Retention */}
          <SectionCard
            icon={Clock}
            iconColor="bg-amber-50 text-amber-600"
            title="6. Data Retention"
            index={5}
          >
            <p className="text-gray-500 mb-3">
              We retain user information only as long as necessary to:
            </p>
            <BulletItem>Provide services</BulletItem>
            <BulletItem>Comply with legal obligations</BulletItem>
            <BulletItem>Resolve disputes</BulletItem>
          </SectionCard>

          {/* Section 7 - Your Rights & Choices */}
          <SectionCard
            icon={UserCheck}
            iconColor="bg-teal-50 text-teal-600"
            title="7. Your Rights & Choices"
            index={6}
          >
            <p className="text-gray-500 mb-3">You may:</p>
            <BulletItem>Update profile information</BulletItem>
            <BulletItem>Disable location access</BulletItem>
            <BulletItem>Request account deletion</BulletItem>
            <p className="text-gray-500 mt-3 text-sm">
              To request data deletion, contact us at the email below.
            </p>
          </SectionCard>

          {/* Section 8 - Children's Privacy */}
          <SectionCard
            icon={Baby}
            iconColor="bg-pink-50 text-pink-600"
            title="8. Children's Privacy"
            index={7}
          >
            <p>
              Workra is not intended for children under 13. We do not knowingly
              collect data from children.
            </p>
          </SectionCard>

          {/* Section 9 - Changes to This Policy */}
          <SectionCard
            icon={RefreshCw}
            iconColor="bg-indigo-50 text-indigo-600"
            title="9. Changes to This Policy"
            index={8}
          >
            <p>
              We may update this Privacy Policy from time to time. Updates will
              be posted within the app.
            </p>
          </SectionCard>

          {/* Section 10 - Contact Us */}
          <SectionCard
            icon={Mail}
            iconColor="bg-emerald-50 text-emerald-600"
            title="10. Contact Us"
            index={9}
          >
            <p className="mb-4">
              If you have questions about this Privacy Policy, contact us:
            </p>
            <a
              href="mailto:workraservice@gmail.com"
              className="inline-flex items-center gap-3 bg-verge-green/10 hover:bg-verge-green/20 border border-verge-green/20 rounded-xl px-5 py-3 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-verge-green group-hover:scale-110 transition-transform" />
              <span className="text-verge-green font-semibold">
                workraservice@gmail.com
              </span>
            </a>
            <p className="text-gray-400 text-sm mt-3 italic">
              (This email may be updated to a professional domain in the
              future.)
            </p>
          </SectionCard>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-verge-green text-white px-8 py-3 rounded-full font-medium hover:bg-verge-green-dark transition-all duration-300 hover:shadow-lg hover:shadow-verge-green/25 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};
