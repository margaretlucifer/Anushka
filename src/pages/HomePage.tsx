import React from "react";
import { ArrowUpRight, ArrowRight, ShieldCheck, Sparkles, Activity, Heart, Award } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { PERSONAL_DETAILS, SERVICES, EXPERIENCES } from "../data/portfolioData";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24 sm:space-y-32 pt-28 pb-20">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Editorial Branding */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1.5px] bg-[#9BAF91]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#798E6F]">
                FITNESS • MOVEMENT • WELLNESS
              </span>
            </div>

            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#77736C]">
                {PERSONAL_DETAILS.name}
              </p>
              <h1 className="headline-hero font-display text-[#292824] font-normal">
                Strength in{" "}
                <span className="italic font-editorial text-[#798E6F] font-normal">
                  every move.
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-xl text-[#77736C] font-normal leading-relaxed max-w-xl">
              {PERSONAL_DETAILS.bio}
            </p>

            <div className="pt-1">
              <p className="text-xs tracking-wider uppercase font-medium text-[#292824]">
                {PERSONAL_DETAILS.title}
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate("about")}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#292824] text-[#FAF8F3] hover:bg-[#798E6F] text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 shadow-sm cursor-pointer group"
              >
                <span>Explore My Journey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate("contact")}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent hover:bg-[#F0E9DF] text-[#292824] border border-[#E5DFD5] text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 cursor-pointer"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Unboxed Metadata Line (Anti-Slop compliant: clean unboxed metadata with separators) */}
            <div className="pt-6 border-t border-[#E5DFD5] flex flex-wrap items-center gap-y-2 text-xs text-[#77736C]">
              <span className="font-medium text-[#292824]">Ground Coach at Shivratna Career Academy</span>
              <span className="mx-2.5 text-[#E5DFD5]">·</span>
              <span>Certified Zumba &amp; Yoga</span>
              <span className="mx-2.5 text-[#E5DFD5]">·</span>
              <span>Somaiya College Alumnus</span>
            </div>
          </div>

          {/* Right Column: Hero Visual with Refined Editorial Crop */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Soft decorative background shape */}
              <div className="absolute -top-6 -right-6 w-full h-full rounded-[2.5rem] bg-[#F0E9DF] -z-10 transform rotate-1" />

              {/* Main Image Container */}
              <div className="relative rounded-[2rem] overflow-hidden border border-[#E5DFD5] shadow-lg aspect-[4/5] bg-[#E5DFD5]/40 group">
                <img
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop"
                  alt="Anushka Jadhav - Movement and Fitness Coach"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                />

                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#292824]/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating Editorial Label */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#FAF8F3]/95 backdrop-blur-md border border-[#E5DFD5] shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#798E6F] font-bold">
                      Guiding Philosophy
                    </p>
                    <p className="font-display italic text-[#292824] text-sm">
                      &ldquo;Movement is a lifestyle.&rdquo;
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#FAF8F3] border border-[#9BAF91] flex items-center justify-center text-[#798E6F]">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION SECTION */}
      <section className="bg-[#F0E9DF]/70 border-y border-[#E5DFD5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-[#E5DFD5] aspect-[4/3] sm:aspect-[16/11] shadow-md bg-[#FAF8F3]">
                <img
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop"
                  alt="Mindful movement and yoga balance"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Editorial Copy */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#798E6F] font-semibold">
                <span className="w-5 h-[1.5px] bg-[#9BAF91]" />
                <span>Introduction</span>
              </div>

              <h2 className="headline-section font-display font-normal text-[#292824]">
                More than fitness.{" "}
                <span className="italic font-editorial text-[#798E6F]">
                  A way of life.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-[#77736C] leading-relaxed">
                Dedicated and results-driven, Anushka Jadhav brings together rigorous ground coaching with the artistic freedom of dance and the centering grounding of certified yoga. Her work is rooted in daily physical discipline, athletic performance, and holistic body awareness.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#FAF8F3] rounded-xl border border-[#E5DFD5]/80 space-y-1">
                  <span className="text-xs uppercase tracking-wider text-[#798E6F] font-semibold">
                    Ground Conditioning
                  </span>
                  <p className="text-sm text-[#77736C]">
                    High-endurance conditioning, agility drills, and physical resilience for competitive readiness.
                  </p>
                </div>

                <div className="p-4 bg-[#FAF8F3] rounded-xl border border-[#E5DFD5]/80 space-y-1">
                  <span className="text-xs uppercase tracking-wider text-[#798E6F] font-semibold">
                    Holistic Movement
                  </span>
                  <p className="text-sm text-[#77736C]">
                    Cardiovascular Zumba beats, mindful yoga alignment, and expressive group choreography.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate("about")}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#292824] hover:text-[#798E6F] transition-colors cursor-pointer group"
                >
                  <span>Read Full Background &amp; Philosophy</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE PREVIEW (4 Visually Distinct Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Areas of Practice"
            title="Tailored disciplines for"
            italicPhrase="every dimension."
            subtitle="Explore specialized coaching domains spanning academy ground drills, personal fitness, certified Zumba & yoga instruction, and stage dance."
          />

          <button
            onClick={() => onNavigate("services")}
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 border border-[#E5DFD5] hover:bg-[#F0E9DF] rounded-full text-xs font-semibold uppercase tracking-wider text-[#292824] transition-colors cursor-pointer"
          >
            <span>View All Services</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-[#FFFFFF] rounded-2xl border border-[#E5DFD5] overflow-hidden hover:border-[#9BAF91] transition-all duration-300 flex flex-col justify-between shadow-2xs hover:shadow-md"
            >
              <div className="relative h-64 overflow-hidden bg-[#E5DFD5]/30">
                <img
                  src={service.image}
                  alt={service.altText}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#FAF8F3]/90 backdrop-blur-xs rounded-full border border-[#E5DFD5] text-[11px] font-mono tracking-wider text-[#292824]">
                  {service.number}
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest text-[#798E6F] font-semibold">
                    {service.subtitle}
                  </span>
                  <h3 className="font-display text-2xl font-normal text-[#292824] group-hover:text-[#798E6F] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#77736C] leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5DFD5]/60 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate("services")}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#292824] group-hover:text-[#798E6F] transition-colors cursor-pointer"
                  >
                    <span>Explore Methodology</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[11px] text-[#77736C]">In-Person &amp; Group</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="bg-[#FAF8F3] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#798E6F] font-semibold">
            <span className="w-8 h-[1.5px] bg-[#9BAF91]" />
            <span>Core Philosophy</span>
            <span className="w-8 h-[1.5px] bg-[#9BAF91]" />
          </div>

          <h2 className="headline-section font-display font-normal text-[#292824]">
            Movement with{" "}
            <span className="italic font-editorial text-[#798E6F]">
              meaning.
            </span>
          </h2>

          <blockquote className="font-editorial italic text-2xl sm:text-3xl lg:text-4xl text-[#292824] leading-relaxed max-w-3xl mx-auto">
            &ldquo;Physical strength and athletic discipline create the foundation. Dance and mindful breath turn that power into personal expression and lasting confidence.&rdquo;
          </blockquote>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 text-left">
            <div className="p-6 bg-[#F0E9DF]/60 rounded-xl border border-[#E5DFD5]">
              <span className="text-xs uppercase tracking-widest text-[#798E6F] font-bold">01. Discipline</span>
              <h4 className="font-display text-lg text-[#292824] mt-1 mb-2">Ground Stamina</h4>
              <p className="text-xs sm:text-sm text-[#77736C]">
                Systematic physical routines, form integrity, and endurance that prepare students for demanding physical standards.
              </p>
            </div>

            <div className="p-6 bg-[#F0E9DF]/60 rounded-xl border border-[#E5DFD5]">
              <span className="text-xs uppercase tracking-widest text-[#798E6F] font-bold">02. Rhythm</span>
              <h4 className="font-display text-lg text-[#292824] mt-1 mb-2">Joyful Expression</h4>
              <p className="text-xs sm:text-sm text-[#77736C]">
                Transforming exercise into celebration through dynamic Zumba choreography and performance artistry.
              </p>
            </div>

            <div className="p-6 bg-[#F0E9DF]/60 rounded-xl border border-[#E5DFD5]">
              <span className="text-xs uppercase tracking-widest text-[#798E6F] font-bold">03. Awareness</span>
              <h4 className="font-display text-lg text-[#292824] mt-1 mb-2">Centering Stillness</h4>
              <p className="text-xs sm:text-sm text-[#77736C]">
                Mindful yoga asanas and breath control that relieve mental stress and protect joints for long-term health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK EXPERIENCE HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F0E9DF] rounded-3xl p-8 sm:p-12 border border-[#E5DFD5]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#798E6F] font-semibold">
                Professional Appointments
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-[#292824] mt-1">
                Committed coaching in the academy and the studio.
              </h3>
            </div>
            <button
              onClick={() => onNavigate("experience")}
              className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 bg-[#292824] text-[#FAF8F3] hover:bg-[#798E6F] rounded-full text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>Explore Roles &amp; Responsibilities</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className="bg-[#FAF8F3] p-6 sm:p-7 rounded-2xl border border-[#E5DFD5] space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-[#798E6F] font-bold">
                    {exp.type}
                  </span>
                  <span className="text-xs text-[#77736C]">Verified Resume Record</span>
                </div>
                <h4 className="font-display text-xl text-[#292824] font-medium">
                  {exp.role}
                </h4>
                <p className="text-sm font-semibold text-[#798E6F]">
                  {exp.organization}
                </p>
                <p className="text-sm text-[#77736C] leading-relaxed">
                  {exp.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-[#292824] text-[#FAF8F3] px-6 py-16 sm:px-12 sm:py-20 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#9BAF91] font-semibold">
              Begin Your Journey
            </span>
            <h2 className="headline-section font-display font-normal text-[#FAF8F3]">
              Your next chapter starts{" "}
              <span className="italic font-editorial text-[#9BAF91]">
                with movement.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#FAF8F3]/80 leading-relaxed">
              Whether you are preparing for rigorous ground stamina, seeking individualized fitness guidance, or looking to infuse your routine with the joy of Zumba and yoga — let&apos;s connect.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => onNavigate("contact")}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#9BAF91] text-[#292824] hover:bg-[#FAF8F3] text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 shadow-md cursor-pointer"
              >
                <span>Connect with Anushka</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate("services")}
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent hover:bg-white/10 text-[#FAF8F3] border border-white/20 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 cursor-pointer"
              >
                <span>Explore Services</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
