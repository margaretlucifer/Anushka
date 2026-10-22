import React from "react";
import { ArrowRight, CheckCircle2, MessageSquare, Sparkles } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { SERVICES } from "../data/portfolioData";

interface ServicesPageProps {
  onNavigate: (page: string, params?: { subject?: string }) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24 sm:space-y-28 pt-28 pb-20">
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1.5px] bg-[#9BAF91]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#798E6F]">
              Expertise &amp; Offerings
            </span>
          </div>
          <h1 className="headline-section font-display font-normal text-[#292824]">
            Disciplined conditioning,{" "}
            <span className="italic font-editorial text-[#798E6F]">
              joyful movement.
            </span>
          </h1>
          <p className="text-base sm:text-xl text-[#77736C] leading-relaxed">
            Four specialized coaching disciplines combining rigorous athletic ground standards with personal fitness, certified Zumba &amp; yoga practices, and expressive dance choreography.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
        {SERVICES.map((service, index) => {
          const isReversed = index % 2 === 1;

          return (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
            >
              {/* Image side */}
              <div
                className={`lg:col-span-5 ${
                  isReversed ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="relative group">
                  <div className="rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[4/3] border border-[#E5DFD5] shadow-md bg-[#F0E9DF]">
                    <img
                      src={service.image}
                      alt={service.altText}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Clean unboxed index stamp */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#FAF8F3]/95 backdrop-blur-xs rounded-full border border-[#E5DFD5] text-xs font-mono text-[#292824]">
                    Service {service.number}
                  </div>
                </div>
              </div>

              {/* Text side */}
              <div
                className={`lg:col-span-7 space-y-6 ${
                  isReversed ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest text-[#798E6F] font-semibold">
                    {service.subtitle}
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl text-[#292824] font-normal">
                    {service.title}
                  </h2>
                </div>

                <p className="text-base sm:text-lg text-[#77736C] leading-relaxed">
                  {service.fullDescription}
                </p>

                {/* Focus Areas */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs uppercase tracking-wider text-[#292824] font-semibold">
                    Core Focus &amp; Methodology
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-[#77736C]">
                    {service.focusAreas.map((focus, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#9BAF91] shrink-0 mt-0.5" />
                        <span>{focus}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quote statement */}
                {service.quote && (
                  <p className="font-editorial italic text-base sm:text-lg text-[#798E6F] border-l-2 border-[#9BAF91] pl-4 py-1">
                    &ldquo;{service.quote}&rdquo;
                  </p>
                )}

                {/* CTA Link */}
                <div className="pt-4 flex items-center gap-4">
                  <button
                    onClick={() =>
                      onNavigate("contact", { subject: service.title })
                    }
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#292824] text-[#FAF8F3] hover:bg-[#798E6F] text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-200 cursor-pointer shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Discuss Your Goals</span>
                  </button>
                  <span className="text-xs text-[#77736C]">
                    Direct consultation with Anushka
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* BOTTOM INVITATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F0E9DF] rounded-3xl p-8 sm:p-12 border border-[#E5DFD5] text-center space-y-4 max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-[#798E6F] font-semibold">
            Collaborative Approach
          </span>
          <h3 className="font-display text-2xl sm:text-3xl text-[#292824]">
            Custom arrangements for academies, studios, and individuals.
          </h3>
          <p className="text-sm sm:text-base text-[#77736C] max-w-xl mx-auto leading-relaxed">
            Every session is structured around your specific athletic conditioning, personal fitness milestones, or workshop objectives.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate("contact")}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#292824] text-[#FAF8F3] hover:bg-[#798E6F] text-xs font-semibold uppercase tracking-wider rounded-full transition-all cursor-pointer"
            >
              <span>Connect for Inquiries</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
