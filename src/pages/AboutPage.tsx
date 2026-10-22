import React from "react";
import { ArrowRight, GraduationCap, Globe2, Compass, CheckCircle2, HeartHandshake, Shield, Sparkles } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { PERSONAL_DETAILS, EDUCATION, CERTIFICATIONS } from "../data/portfolioData";

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24 sm:space-y-28 pt-28 pb-20">
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1.5px] bg-[#9BAF91]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#798E6F]">
              Biography &amp; Background
            </span>
          </div>
          <h1 className="headline-section font-display font-normal text-[#292824]">
            Driven by discipline,{" "}
            <span className="italic font-editorial text-[#798E6F]">
              inspired by movement.
            </span>
          </h1>
          <p className="text-base sm:text-xl text-[#77736C] leading-relaxed">
            Anushka Jadhav combines structured athletic field conditioning with certified instruction in Zumba, yoga, and expressive stage dance.
          </p>
        </div>
      </section>

      {/* SECTION 1: ABOUT ANUSHKA & EDITORIAL PROFILE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait side */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/5] border border-[#E5DFD5] shadow-lg bg-[#F0E9DF]">
                <img
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop"
                  alt="Anushka Jadhav lifestyle and coaching profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quiet caption */}
              <div className="mt-3 text-xs text-[#77736C] flex items-center justify-between">
                <span>Certified Movement Professional</span>
                <span className="italic font-editorial text-sm text-[#798E6F]">Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#798E6F] font-bold">
              01. The Practitioner
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#292824] font-normal">
              A holistic perspective on physical performance.
            </h2>
            <div className="space-y-4 text-base text-[#77736C] leading-relaxed">
              <p>
                Anushka&apos;s approach to physical fitness was forged at the intersection of discipline and creative joy. As a Ground Coach at <strong>Shivratna Career Academy</strong>, she leads daily conditioning sessions designed to test and cultivate endurance, agility, and mental tenacity.
              </p>
              <p>
                In her independent practice, she guides clients through customized strength training, certified Zumba group workouts, restorative yoga flows, and dynamic dance choreography. She believes that physical fitness is not a seasonal endeavor, but a sustainable foundation for lifelong health and confidence.
              </p>
              <p>
                Her coaching methodology places paramount emphasis on foundational biomechanics, injury prevention, and building cardiovascular capacity step by step.
              </p>
            </div>

            {/* Languages & Core Traits (anti-slop clean typography) */}
            <div className="pt-4 border-t border-[#E5DFD5] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#798E6F] font-semibold block mb-1">
                  Languages Spoken
                </span>
                <p className="text-sm font-medium text-[#292824]">
                  {PERSONAL_DETAILS.languages.join(" · ")}
                </p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#798E6F] font-semibold block mb-1">
                  Core Certifications
                </span>
                <p className="text-sm font-medium text-[#292824]">
                  Certified Zumba · Certified Yoga Teacher
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: COACHING APPROACH & FOUR PILLARS */}
      <section className="bg-[#F0E9DF]/80 border-y border-[#E5DFD5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Coaching Approach"
            title="The principles that guide"
            italicPhrase="every session."
            subtitle="Four foundational pillars designed to ensure every trainee progresses safely, purposefully, and sustainably."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FAF8F3] p-7 rounded-2xl border border-[#E5DFD5] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#F0E9DF] flex items-center justify-center text-[#798E6F] mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#798E6F] font-bold">01. Form First</span>
              <h3 className="font-display text-xl text-[#292824]">Biomechanical Integrity</h3>
              <p className="text-sm text-[#77736C] leading-relaxed">
                Prioritizing clean movement mechanics and joint safety before escalating intensity or volume.
              </p>
            </div>

            <div className="bg-[#FAF8F3] p-7 rounded-2xl border border-[#E5DFD5] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#F0E9DF] flex items-center justify-center text-[#798E6F] mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#798E6F] font-bold">02. Progressive</span>
              <h3 className="font-display text-xl text-[#292824]">Stamina &amp; Agility</h3>
              <p className="text-sm text-[#77736C] leading-relaxed">
                Structured interval drills that progressively build athletic endurance and cardiovascular threshold.
              </p>
            </div>

            <div className="bg-[#FAF8F3] p-7 rounded-2xl border border-[#E5DFD5] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#F0E9DF] flex items-center justify-center text-[#798E6F] mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#798E6F] font-bold">03. Centered</span>
              <h3 className="font-display text-xl text-[#292824]">Breath &amp; Recovery</h3>
              <p className="text-sm text-[#77736C] leading-relaxed">
                Integrating mindful yoga postures and breath control to alleviate tension and promote active tissue recovery.
              </p>
            </div>

            <div className="bg-[#FAF8F3] p-7 rounded-2xl border border-[#E5DFD5] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#F0E9DF] flex items-center justify-center text-[#798E6F] mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#798E6F] font-bold">04. Expressive</span>
              <h3 className="font-display text-xl text-[#292824]">Rhythm &amp; Confidence</h3>
              <p className="text-sm text-[#77736C] leading-relaxed">
                Cultivating musicality, stage presence, and organic body language through dance choreography.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: EDUCATION & CREDENTIALS (Strictly verified) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Education column */}
          <div className="lg:col-span-7 space-y-8">
            <SectionHeading
              eyebrow="Academic Background"
              title="Education &"
              italicPhrase="formative studies."
              subtitle="Formal qualifications as documented in the professional resume record."
            />

            <div className="space-y-6">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#E5DFD5] shadow-2xs space-y-3"
                >
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#798E6F] font-semibold">
                    <GraduationCap className="w-4 h-4" />
                    <span>Academic Qualification</span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl text-[#292824] font-medium">
                    {edu.degree}
                  </h3>
                  <p className="text-base font-semibold text-[#798E6F]">
                    {edu.institution}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-[#77736C] font-mono">
                    Specialization: {edu.field}
                  </p>
                  {edu.note && (
                    <p className="text-sm text-[#77736C] pt-2 border-t border-[#E5DFD5]/60">
                      {edu.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Interests & Personal Dimensions */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#798E6F] font-semibold">
                Personal Interests
              </span>
              <h3 className="font-display text-2xl text-[#292824]">
                Passion for dynamic arts &amp; play.
              </h3>
              <p className="text-sm text-[#77736C] leading-relaxed">
                Beyond formal coaching sessions, Anushka brings a lifelong enthusiasm for active arts and interactive disciplines.
              </p>
            </div>

            <div className="bg-[#FAF8F3] p-6 sm:p-8 rounded-2xl border border-[#E5DFD5] space-y-4">
              <h4 className="text-xs uppercase tracking-wider text-[#798E6F] font-semibold">
                Documented Passions
              </h4>
              <ul className="space-y-3 text-sm text-[#292824]">
                {PERSONAL_DETAILS.interests.map((interest) => (
                  <li key={interest} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#9BAF91] shrink-0" />
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Contact Prompt */}
            <div className="p-6 rounded-2xl bg-[#F0E9DF] border border-[#E5DFD5] space-y-3">
              <h4 className="font-display text-lg text-[#292824]">
                Have a collaboration or training question?
              </h4>
              <p className="text-xs text-[#77736C]">
                Get in touch to discuss institutional ground coaching or private training.
              </p>
              <button
                onClick={() => onNavigate("contact")}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#292824] hover:text-[#798E6F] transition-colors cursor-pointer"
              >
                <span>Contact Anushka</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
