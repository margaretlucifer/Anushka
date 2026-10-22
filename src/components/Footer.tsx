import React from "react";
import { Phone, Mail, ArrowUp, Sparkles, Heart } from "lucide-react";
import { PERSONAL_DETAILS } from "../data/portfolioData";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Expertise" },
    { id: "experience", label: "Experience" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <footer className="bg-[#F0E9DF] border-t border-[#E5DFD5] pt-16 pb-12 text-[#292824] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pb-12 border-b border-[#E5DFD5]">
          {/* Brand & Identity Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#798E6F] font-semibold">
              <span className="w-6 h-[1px] bg-[#9BAF91]" />
              <span>Personal Brand</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-[#292824]">
              {PERSONAL_DETAILS.name}
            </h3>
            <p className="text-sm text-[#77736C] leading-relaxed max-w-md">
              {PERSONAL_DETAILS.title}
            </p>
            <p className="text-xs text-[#77736C]/90 italic font-editorial text-base">
              &ldquo;Strength, agility, and joy discovered through intentional movement.&rdquo;
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-[#77736C]">
              <span className="font-medium text-[#292824]">Languages:</span>
              {PERSONAL_DETAILS.languages.map((lang, idx) => (
                <span key={lang}>
                  {lang}
                  {idx < PERSONAL_DETAILS.languages.length - 1 && <span className="mx-1 text-[#E5DFD5]">·</span>}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#292824]">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onNavigate(link.id);
                      scrollToTop();
                    }}
                    className="text-[#77736C] hover:text-[#292824] transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#292824]">
              Get In Touch
            </h4>
            <p className="text-sm text-[#77736C]">
              Direct communication for training inquiries, academy sessions, and workshop collaborations.
            </p>

            <div className="space-y-2.5 text-sm">
              <a
                href={`tel:${PERSONAL_DETAILS.phone}`}
                className="flex items-center gap-2.5 text-[#292824] hover:text-[#798E6F] transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-[#FAF8F3] border border-[#E5DFD5] flex items-center justify-center group-hover:border-[#9BAF91] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#798E6F]" />
                </div>
                <span>{PERSONAL_DETAILS.phone}</span>
              </a>

              <a
                href={`mailto:${PERSONAL_DETAILS.email}`}
                className="flex items-center gap-2.5 text-[#292824] hover:text-[#798E6F] transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-[#FAF8F3] border border-[#E5DFD5] flex items-center justify-center group-hover:border-[#9BAF91] transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#798E6F]" />
                </div>
                <span className="break-all">{PERSONAL_DETAILS.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#77736C]">
          <p>© {currentYear} Anushka Jadhav. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#77736C]">
              Ground Coach · Shivratna Career Academy
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF8F3] border border-[#E5DFD5] text-[#292824] hover:bg-[#292824] hover:text-[#FAF8F3] transition-all cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
