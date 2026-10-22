import React, { useState } from "react";
import { Phone, Mail, Globe2, Send, CheckCircle2, Copy, Check, MessageSquare, AlertCircle } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { PERSONAL_DETAILS } from "../data/portfolioData";

interface ContactPageProps {
  initialSubject?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialSubject }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: initialSubject || "Personal Fitness Coaching",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isPrepared, setIsPrepared] = useState(false);
  const [copied, setCopied] = useState(false);

  const subjectOptions = [
    "Sports & Ground Training",
    "Personal Fitness Coaching",
    "Zumba & Yoga Instruction",
    "Dance & Choreography",
    "Shivratna Academy Training Inquiry",
    "General Consultation / Other",
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please provide a valid email address.";
    }
    if (!formData.message.trim()) {
      errs.message = "Please enter your message or training goals.";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Please write at least 10 characters.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const constructMailtoUrl = () => {
    const subjectLine = `[Inquiry] ${formData.subject} - from ${formData.name}`;
    const bodyContent = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not provided"}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n\nSent from Anushka Jadhav Portfolio`;
    return `mailto:${PERSONAL_DETAILS.email}?subject=${encodeURIComponent(
      subjectLine
    )}&body=${encodeURIComponent(bodyContent)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsPrepared(true);

    // Also persist in local storage history so inquiries are never lost
    try {
      const stored = JSON.parse(localStorage.getItem("anushka_inquiries") || "[]");
      stored.unshift({
        ...formData,
        date: new Date().toISOString(),
      });
      localStorage.setItem("anushka_inquiries", JSON.stringify(stored));
    } catch {
      // Fallback silently if localStorage is restricted
    }
  };

  const handleCopy = () => {
    const text = `To: ${PERSONAL_DETAILS.email}\nSubject: [Inquiry] ${formData.subject}\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage:\n${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-20 sm:space-y-24 pt-28 pb-20">
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1.5px] bg-[#9BAF91]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#798E6F]">
              Contact &amp; Inquiries
            </span>
          </div>
          <h1 className="headline-section font-display font-normal text-[#292824]">
            Let&apos;s move forward,{" "}
            <span className="italic font-editorial text-[#798E6F]">
              together.
            </span>
          </h1>
          <p className="text-base sm:text-xl text-[#77736C] leading-relaxed">
            Have a fitness goal, a dance collaboration, or a wellness opportunity in mind? Get in touch.
          </p>
        </div>
      </section>

      {/* MAIN CONTACT CONTENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Info (Strictly authentic) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#E5DFD5] shadow-2xs space-y-6">
              <h2 className="font-display text-2xl text-[#292824]">
                Direct Communication
              </h2>
              <p className="text-sm text-[#77736C] leading-relaxed">
                Connect directly with Anushka for ground coaching schedules, private fitness consultations, and workshop bookings.
              </p>

              <div className="space-y-5 pt-2">
                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F3] border border-[#E5DFD5] flex items-center justify-center text-[#798E6F] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-xs uppercase tracking-wider text-[#77736C] font-medium block">
                      Phone / Mobile
                    </span>
                    <a
                      href={`tel:${PERSONAL_DETAILS.phone}`}
                      className="text-base font-semibold text-[#292824] hover:text-[#798E6F] transition-colors block"
                    >
                      {PERSONAL_DETAILS.phone}
                    </a>
                    <span className="text-xs text-[#77736C]">Available for calls and direct messages</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F3] border border-[#E5DFD5] flex items-center justify-center text-[#798E6F] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-xs uppercase tracking-wider text-[#77736C] font-medium block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${PERSONAL_DETAILS.email}`}
                      className="text-base font-semibold text-[#292824] hover:text-[#798E6F] transition-colors block break-all"
                    >
                      {PERSONAL_DETAILS.email}
                    </a>
                    <span className="text-xs text-[#77736C]">Inquiries answered promptly</span>
                  </div>
                </div>

                {/* Languages */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F3] border border-[#E5DFD5] flex items-center justify-center text-[#798E6F] shrink-0 mt-0.5">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-xs uppercase tracking-wider text-[#77736C] font-medium block">
                      Languages Spoken
                    </span>
                    <p className="text-sm font-semibold text-[#292824]">
                      {PERSONAL_DETAILS.languages.join(" · ")}
                    </p>
                    <span className="text-xs text-[#77736C]">Fluent coaching in English, Marathi, and Hindi</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Context Card */}
            <div className="p-6 bg-[#F0E9DF]/70 rounded-2xl border border-[#E5DFD5] space-y-2">
              <span className="text-xs uppercase tracking-wider text-[#798E6F] font-bold">
                Coaching Locations
              </span>
              <p className="text-sm text-[#292824] font-medium">
                Mumbai Metropolitan Region &amp; Shivratna Career Academy Ground
              </p>
              <p className="text-xs text-[#77736C]">
                Institutional sessions at academy grounds; private and small-group coaching at designated studios.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] p-8 sm:p-10 rounded-3xl border border-[#E5DFD5] shadow-sm space-y-6">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#798E6F] font-bold">
                  Send a Message
                </span>
                <h3 className="font-display text-2xl text-[#292824] font-normal">
                  Inquire about training or classes
                </h3>
              </div>

              {!isPrepared ? (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs uppercase tracking-wider font-semibold text-[#292824]"
                    >
                      Your Full Name <span className="text-[#BF877E]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Priya Sharma"
                      className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F3] border text-sm text-[#292824] placeholder-[#77736C]/60 focus:bg-white transition-colors ${
                        errors.name ? "border-[#BF877E]" : "border-[#E5DFD5]"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-[#BF877E] flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-email"
                        className="block text-xs uppercase tracking-wider font-semibold text-[#292824]"
                      >
                        Email Address <span className="text-[#BF877E]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. name@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F3] border text-sm text-[#292824] placeholder-[#77736C]/60 focus:bg-white transition-colors ${
                          errors.email ? "border-[#BF877E]" : "border-[#E5DFD5]"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-[#BF877E] flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs uppercase tracking-wider font-semibold text-[#292824]"
                      >
                        Phone Number (Optional)
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +91 9876543210"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F3] border border-[#E5DFD5] text-sm text-[#292824] placeholder-[#77736C]/60 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject dropdown */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs uppercase tracking-wider font-semibold text-[#292824]"
                    >
                      Area of Interest
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F3] border border-[#E5DFD5] text-sm text-[#292824] focus:bg-white transition-colors"
                    >
                      {subjectOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-message"
                      className="block text-xs uppercase tracking-wider font-semibold text-[#292824]"
                    >
                      Your Message / Goals <span className="text-[#BF877E]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Share your current fitness level, goals, or inquiry details..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F3] border text-sm text-[#292824] placeholder-[#77736C]/60 focus:bg-white transition-colors ${
                        errors.message ? "border-[#BF877E]" : "border-[#E5DFD5]"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-[#BF877E] flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-[#292824] text-[#FAF8F3] hover:bg-[#798E6F] rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Prepare &amp; Send Message</span>
                  </button>
                </form>
              ) : (
                /* Honest, clear submission state with immediate mailto action and copy utility */
                <div className="p-6 bg-[#F0E9DF]/80 rounded-2xl border border-[#9BAF91] space-y-6 animate-fadeIn">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#9BAF91] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-display text-xl text-[#292824]">
                        Inquiry Ready to Dispatch
                      </h4>
                      <p className="text-xs text-[#77736C] leading-relaxed">
                        Your inquiry for <strong>{formData.subject}</strong> is formatted. Click below to launch your default mail app, or copy the formatted text.
                      </p>
                    </div>
                  </div>

                  {/* Summary preview */}
                  <div className="p-4 bg-[#FAF8F3] rounded-xl border border-[#E5DFD5] text-xs space-y-1.5 text-[#292824] font-mono">
                    <p><strong>To:</strong> {PERSONAL_DETAILS.email}</p>
                    <p><strong>From:</strong> {formData.name} ({formData.email})</p>
                    <p><strong>Phone:</strong> {formData.phone || "N/A"}</p>
                    <p className="pt-2 font-sans text-xs text-[#77736C] border-t border-[#E5DFD5]">
                      {formData.message}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={constructMailtoUrl()}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 bg-[#292824] text-[#FAF8F3] hover:bg-[#798E6F] rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors text-center"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Email App</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopy}
                      className="inline-flex items-center justify-center gap-2 py-3 px-5 bg-[#FAF8F3] text-[#292824] border border-[#E5DFD5] hover:bg-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      {copied ? <Check className="w-4 h-4 text-[#798E6F]" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? "Copied to Clipboard!" : "Copy Details"}</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsPrepared(false)}
                    className="text-xs text-[#77736C] hover:text-[#292824] underline cursor-pointer"
                  >
                    ← Edit message details
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
