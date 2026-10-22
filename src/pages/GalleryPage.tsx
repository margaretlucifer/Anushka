import React, { useState } from "react";
import { Maximize2, Camera, Info, Sparkles } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { LightboxModal } from "../components/LightboxModal";
import { GALLERY_ITEMS, GalleryItem } from "../data/portfolioData";

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: "all", label: "All Movements" },
    { id: "fitness", label: "Ground Training & Fitness" },
    { id: "yoga", label: "Yoga & Breath" },
    { id: "dance", label: "Dance & Choreography" },
    { id: "zumba", label: "Zumba Cardio" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-16 sm:space-y-20 pt-28 pb-20">
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1.5px] bg-[#9BAF91]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#798E6F]">
              Visual Gallery
            </span>
          </div>
          <h1 className="headline-section font-display font-normal text-[#292824]">
            Rhythm, form &amp;{" "}
            <span className="italic font-editorial text-[#798E6F]">
              poise in motion.
            </span>
          </h1>
          <p className="text-base sm:text-xl text-[#77736C] leading-relaxed">
            A curated visual chronicle of ground conditioning, yoga alignment, dynamic Zumba vitality, and expressive dance choreography.
          </p>
        </div>

        {/* Informative Editorial Banner on Illustrative Imagery (Strict adherence to prompt rule) */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-[#F0E9DF]/80 border border-[#E5DFD5] flex items-start gap-3.5 text-xs text-[#77736C]">
          <Info className="w-4 h-4 text-[#798E6F] shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <p className="font-semibold text-[#292824]">
              Visual Note &amp; Asset Configuration
            </p>
            <p>
              These curated photographs illustrate Anushka Jadhav&apos;s movement disciplines (athletic ground drills, yoga, dance, and Zumba). All visual assets are centralized in <code className="font-mono text-[#292824]">/src/data/portfolioData.ts</code>, ready to seamlessly accommodate Anushka&apos;s direct personal event and academy photography.
            </p>
          </div>
        </div>

        {/* Category Filter Tabs (Interactive controls with clean segmented style) */}
        <div className="mt-10 flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#292824] text-[#FAF8F3] shadow-xs"
                    : "bg-[#FFFFFF] text-[#77736C] hover:text-[#292824] border border-[#E5DFD5] hover:bg-[#F0E9DF]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative bg-[#FFFFFF] rounded-2xl overflow-hidden border border-[#E5DFD5] shadow-2xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container with varied heights */}
              <div
                className={`relative overflow-hidden bg-[#E5DFD5]/40 ${
                  item.aspectRatio === "tall"
                    ? "aspect-[3/4]"
                    : item.aspectRatio === "square"
                    ? "aspect-square"
                    : "aspect-[4/3]"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-600 ease-out"
                />

                <div className="absolute inset-0 bg-[#292824]/0 group-hover:bg-[#292824]/20 transition-colors duration-300" />

                {/* Floating zoom icon */}
                <div className="absolute top-3 right-3 p-2 rounded-full bg-[#FAF8F3]/90 text-[#292824] opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Category stamp */}
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-[#FAF8F3]/90 backdrop-blur-xs text-[11px] font-semibold tracking-wider uppercase text-[#798E6F]">
                  {item.categoryLabel}
                </div>
              </div>

              {/* Caption */}
              <div className="p-5 space-y-1 bg-[#FFFFFF]">
                <h3 className="font-display text-lg text-[#292824] group-hover:text-[#798E6F] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#77736C] line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <LightboxModal
        item={selectedItem}
        items={filteredItems}
        onClose={() => setSelectedItem(null)}
        onNavigate={(item) => setSelectedItem(item)}
      />
    </div>
  );
};
