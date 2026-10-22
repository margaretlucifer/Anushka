import React from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Dumbbell, Award, Flame } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { EXPERIENCES, PERSONAL_DETAILS } from "../data/portfolioData";

interface ExperiencePageProps {
  onNavigate: (page: string) => void;
}

export const ExperiencePage: React.FC<ExperiencePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24 sm:space-y-28 pt-28 pb-20">
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1.5px] bg-[#9BAF91]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#798E6F]">
              Professional Record
            </span>
          </div>
          <h1 className="headline-section font-display font-normal text-[#292824]">
            Proven leadership in the{" "}
            <span className="italic font-editorial text-[#798E6F]">
              academy and field.
            </span>
          </h1>
          <p className="text-base sm:text-xl text-[#77736C] leading-relaxed">
            Documented coaching tenure spanning institutional ground preparation at Shivratna Career Academy and independent instruction in fitness, dance, Zumba, and yoga.
          </p>
        </div>
      </section>

      {/* EDITORIAL TIMELINE / EXPERIENCE CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16 lg:space-y-20">
          {EXPERIENCES.map((exp, index) => {
            return (
              <div
                key={exp.id}
                className="bg-[#FFFFFF] rounded-3xl border border-[#E5DFD5] overflow-hidden shadow-2xs p-8 sm:p-12 transition-all hover:border-[#9BAF91]/80"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Left Column: Role Details */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono tracking-widest uppercase text-[#798E6F] font-semibold">
                        Role 0{index + 1}
                      </span>
                      <span className="text-[#E5DFD5]">·</span>
                      <span className="text-xs uppercase tracking-wider text-[#77736C]">
                        {exp.type}
                      </span>
                    </div>

                    <h2 className="font-display text-2xl sm:text-3xl text-[#292824] font-normal">
                      {exp.role}
                    </h2>

                    <div className="p-4 bg-[#F0E9DF]/60 rounded-xl border border-[#E5DFD5]/80 space-y-1">
                      <span className="text-xs uppercase tracking-wider text-[#798E6F] font-bold block">
                        Organization / Practice
                      </span>
                      <p className="font-display text-lg text-[#292824]">
                        {exp.organization}
                      </p>
                    </div>

                    <p className="text-sm text-[#77736C] leading-relaxed">
                      {exp.summary}
                    </p>

                    {/* Skills Tagged */}
                    <div className="pt-2">
                      <span className="text-xs uppercase tracking-wider text-[#292824] font-semibold block mb-2">
                        Key Competencies
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {exp.skillsEmphasized.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-[#FAF8F3] border border-[#E5DFD5] rounded-md text-xs text-[#292824]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Responsibilities as listed in the resume */}
                  <div className="lg:col-span-7 space-y-6 lg:border-l lg:border-[#E5DFD5] lg:pl-10">
                    <h3 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#292824]">
                      Core Responsibilities &amp; Impact
                    </h3>

                    <ul className="space-y-4">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#FAF8F3] border border-[#9BAF91] flex items-center justify-center shrink-0 mt-0.5 text-[#798E6F]">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-sm sm:text-base text-[#292824] leading-relaxed">
                            {resp}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Contextual image */}
                    {exp.image && (
                      <div className="pt-4">
                        <div className="rounded-2xl overflow-hidden aspect-[16/7] border border-[#E5DFD5]">
                          <img
                            src={exp.image}
                            alt={`${exp.role} training session`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* VERIFIED CREDENTIALS NOTE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF8F3] border border-[#E5DFD5] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#798E6F] font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Authentic Experience Record</span>
            </div>
            <h3 className="font-display text-xl text-[#292824]">
              Strictly grounded in documented qualifications.
            </h3>
            <p className="text-xs sm:text-sm text-[#77736C]">
              All roles, institutional affiliations, and responsibilities presented above reflect the verified resume details for Anushka Jadhav.
            </p>
          </div>

          <button
            onClick={() => onNavigate("contact")}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#292824] text-[#FAF8F3] hover:bg-[#798E6F] text-xs font-semibold uppercase tracking-wider rounded-full transition-colors cursor-pointer"
          >
            <span>Request Coaching Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </div>
  );
};
