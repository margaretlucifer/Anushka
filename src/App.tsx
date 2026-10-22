import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { GalleryPage } from "./pages/GalleryPage";
import { ContactPage } from "./pages/ContactPage";

export default function App() {
  const getInitialPage = (): string => {
    const hash = window.location.hash.replace("#/", "").replace("#", "");
    const validPages = ["home", "about", "services", "experience", "gallery", "contact"];
    return validPages.includes(hash) ? hash : "home";
  };

  const [currentPage, setCurrentPage] = useState<string>(getInitialPage());
  const [contactSubject, setContactSubject] = useState<string | undefined>(undefined);

  // Sync hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const page = getInitialPage();
      setCurrentPage(page);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = (page: string, params?: { subject?: string }) => {
    setCurrentPage(page);
    if (params?.subject) {
      setContactSubject(params.subject);
    }
    window.location.hash = `/${page === "home" ? "" : page}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F3] text-[#292824] antialiased selection:bg-[#9BAF91]/25 selection:text-[#292824]">
      {/* Top Navbar */}
      <Navbar currentPage={currentPage} onNavigate={(page) => navigateTo(page)} />

      {/* Main Content Area with Dynamic Page View */}
      <main className="flex-1">
        {currentPage === "home" && <HomePage onNavigate={navigateTo} />}
        {currentPage === "about" && <AboutPage onNavigate={navigateTo} />}
        {currentPage === "services" && <ServicesPage onNavigate={navigateTo} />}
        {currentPage === "experience" && <ExperiencePage onNavigate={navigateTo} />}
        {currentPage === "gallery" && <GalleryPage />}
        {currentPage === "contact" && <ContactPage initialSubject={contactSubject} />}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
