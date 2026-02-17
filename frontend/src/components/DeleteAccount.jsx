import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import {
  UserX,
  ArrowLeft,
  Clock,
  AlertTriangle,
  CheckCircle2,
  Send,
  Shield,
  Trash2,
  Database,
  ChevronRight,
} from "lucide-react";

const InfoCard = ({ icon: Icon, iconColor, title, children }) => (
  <div className="bg-white rounded-xl border border-gray-100 p-5 md:p-6">
    <div className="flex items-start gap-3 mb-3">
      <div
        className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${iconColor}`}
      >
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="font-semibold text-gray-900 pt-2 text-sm md:text-base">
        {title}
      </h3>
    </div>
    <div className="text-gray-600 text-sm leading-relaxed ml-13 md:ml-[52px]">
      {children}
    </div>
  </div>
);

const BulletItem = ({ children }) => (
  <div className="flex items-start gap-2">
    <ChevronRight className="w-3.5 h-3.5 text-verge-green mt-0.5 shrink-0" />
    <span>{children}</span>
  </div>
);

export const DeleteAccount = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    reason: "",
    confirm: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending the request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-verge-cream">
      <Header />

      {/* Hero Banner */}
      <section className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(61,123,82,0.1),transparent_50%)]" />

        <div className="relative max-w-[900px] mx-auto px-6 md:px-10 lg:px-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium mb-8 transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-red-500/15 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-red-500/20">
              <UserX className="w-7 h-7 md:w-8 md:h-8 text-red-400" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white font-serif">
                Delete Account
              </h1>
              <p className="text-white/50 text-sm mt-1">Workra App</p>
            </div>
          </div>

          <p className="text-white/60 text-base md:text-lg max-w-2xl leading-relaxed">
            Request deletion of your Workra account and all associated data.
            Please read the information below before submitting your request.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-[900px] mx-auto px-6 md:px-10 -mt-4 pb-20 relative z-10">
        {/* Steps & Info */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            Before You Delete Your Account
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <InfoCard
              icon={Trash2}
              iconColor="bg-red-50 text-red-500"
              title="Data That Will Be Deleted"
            >
              <div className="space-y-1.5 mt-1">
                <BulletItem>
                  Your profile information (name, phone, email)
                </BulletItem>
                <BulletItem>Service booking history</BulletItem>
                <BulletItem>Uploaded photos and media</BulletItem>
                <BulletItem>Chat and conversation history</BulletItem>
                <BulletItem>Saved addresses and preferences</BulletItem>
              </div>
            </InfoCard>

            <InfoCard
              icon={Database}
              iconColor="bg-amber-50 text-amber-500"
              title="Data That May Be Retained"
            >
              <div className="space-y-1.5 mt-1">
                <BulletItem>
                  Transaction records (as required by law, up to 7 years)
                </BulletItem>
                <BulletItem>Fraud prevention data (up to 1 year)</BulletItem>
                <BulletItem>
                  Anonymized analytics data (non-identifiable)
                </BulletItem>
              </div>
            </InfoCard>
          </div>

          <div className="flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-xl p-4">
            <Clock className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
            <div>
              <p className="text-blue-900 font-medium text-sm">
                Processing Time
              </p>
              <p className="text-blue-700 text-sm mt-1">
                Account deletion requests are processed within{" "}
                <strong>7 business days</strong>. You will receive a
                confirmation email once your account has been deleted. During
                this period, you can contact us to cancel the request.
              </p>
            </div>
          </div>
        </div>

        {/* Steps to delete */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-verge-green" />
            How to Delete Your Account
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            To request deletion of your Workra account, follow these steps:
          </p>
          <ol className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-verge-green/10 text-verge-green font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                1
              </span>
              <span>
                Fill out the deletion request form below with your registered
                details (name, phone number, and email).
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-verge-green/10 text-verge-green font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                2
              </span>
              <span>
                Confirm that you understand your data will be permanently
                deleted by checking the confirmation box.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-verge-green/10 text-verge-green font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                3
              </span>
              <span>
                Submit the request. Our team will process it within 7 business
                days.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-verge-green/10 text-verge-green font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                4
              </span>
              <span>
                You will receive a confirmation email at your registered email
                address once the deletion is complete.
              </span>
            </li>
          </ol>
        </div>

        {/* Form or Success */}
        {submitted ? (
          <div className="bg-white rounded-2xl shadow-sm border border-green-200 p-8 md:p-12 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Request Submitted Successfully
            </h2>
            <p className="text-gray-600 max-w-md mx-auto mb-2">
              Your account deletion request has been received. We will process
              it within <strong>7 business days</strong>.
            </p>
            <p className="text-gray-500 text-sm mb-6">
              A confirmation will be sent to your registered email address. To
              cancel this request, email us at{" "}
              <a
                href="mailto:workraservice@gmail.com"
                className="text-verge-green font-medium hover:underline"
              >
                workraservice@gmail.com
              </a>
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-verge-green text-white px-8 py-3 rounded-full font-medium hover:bg-verge-green-dark transition-all duration-300 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-1">
              Account Deletion Request Form
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Please provide the details linked to your Workra account.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-verge-green/30 focus:border-verge-green transition-all text-sm"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Registered Phone Number{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-verge-green/30 focus:border-verge-green transition-all text-sm"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email Address (optional)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-verge-green/30 focus:border-verge-green transition-all text-sm"
                />
              </div>

              {/* Reason */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Reason for Deletion (optional)
                </label>
                <textarea
                  name="reason"
                  rows={3}
                  value={formData.reason}
                  onChange={handleChange}
                  placeholder="Let us know why you'd like to delete your account..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-verge-green/30 focus:border-verge-green transition-all text-sm resize-none"
                />
              </div>

              {/* Confirmation Checkbox */}
              <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="confirm"
                    required
                    checked={formData.confirm}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-500 cursor-pointer accent-red-600"
                  />
                  <span className="text-sm text-red-800 leading-relaxed">
                    I understand that deleting my account is{" "}
                    <strong>permanent and irreversible</strong>. All my personal
                    data, booking history, photos, and preferences will be
                    permanently removed from Workra's servers within 7 business
                    days.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || !formData.confirm}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  formData.confirm
                    ? "bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/20 hover:shadow-red-600/30"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Deletion Request
                  </>
                )}
              </button>
            </form>

            <p className="text-gray-400 text-xs text-center mt-4">
              You can also request account deletion by emailing{" "}
              <a
                href="mailto:workraservice@gmail.com"
                className="text-verge-green hover:underline"
              >
                workraservice@gmail.com
              </a>
            </p>
          </div>
        )}

        {/* Back to Home */}
        {!submitted && (
          <div className="mt-10 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-verge-green font-medium text-sm transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Changed your mind? Go back to Home
            </Link>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};
