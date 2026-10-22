import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Phone, Mail } from "lucide-react";
import { PERSONAL_DETAILS } from "../data/portfolioData";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Expertise" },
    { id: "experience", label: "Experience" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF8F3]/90 backdrop-blur-md border-b border-[#E5DFD5] shadow-xs py-3"
          : "bg-[#FAF8F3]/60 backdrop-blur-xs py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <button
            onClick={() => handleNavClick("home")}
            className="text-left group cursor-pointer"
            aria-label="Anushka Jadhav Home"
          >
            <span className="font-display text-xl sm:text-2xl font-medium tracking-tight text-[#292824] group-hover:text-[#798E6F] transition-colors">
              Anushka Jadhav
            </span>
            <span className="hidden sm:block text-[11px] uppercase tracking-[0.16em] text-[#77736C] font-medium -mt-0.5">
              Movement & Fitness
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-1.5 text-sm font-medium transition-colors relative cursor-pointer ${
                    isActive
                      ? "text-[#292824]"
                      : "text-[#77736C] hover:text-[#292824]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#9BAF91] rounded-full transition-all" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={() => handleNavClick("contact")}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#292824] text-[#FAF8F3] hover:bg-[#798E6F] rounded-full transition-all duration-200 cursor-pointer shadow-xs"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#292824] hover:text-[#798E6F] transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F3] border-b border-[#E5DFD5] shadow-lg animate-fadeIn">
          <div className="px-5 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`block w-full text-left py-2.5 px-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "bg-[#F0E9DF] text-[#292824] font-semibold"
                      : "text-[#77736C] hover:bg-[#F0E9DF]/60 hover:text-[#292824]"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="pt-4 border-t border-[#E5DFD5] space-y-3">
              <button
                onClick={() => handleNavClick("contact")}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#292824] text-[#FAF8F3] text-sm font-medium uppercase tracking-wider rounded-lg hover:bg-[#798E6F] transition-colors"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="flex flex-col gap-1.5 pt-2 text-xs text-[#77736C]">
                <a
                  href={`tel:${PERSONAL_DETAILS.phone}`}
                  className="flex items-center gap-2 hover:text-[#292824] py-1"
                >
                  <Phone className="w-3.5 h-3.5 text-[#9BAF91]" />
                  <span>{PERSONAL_DETAILS.phone}</span>
                </a>
                <a
                  href={`mailto:${PERSONAL_DETAILS.email}`}
                  className="flex items-center gap-2 hover:text-[#292824] py-1"
                >
                  <Mail className="w-3.5 h-3.5 text-[#9BAF91]" />
                  <span>{PERSONAL_DETAILS.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
