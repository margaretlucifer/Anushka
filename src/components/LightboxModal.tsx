import React, { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "../data/portfolioData";

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (item: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onNavigate,
}) => {
  const currentIndex = item ? items.findIndex((i) => i.id === item.id) : -1;

  const handleNext = useCallback(() => {
    if (currentIndex >= 0 && currentIndex < items.length - 1) {
      onNavigate(items[currentIndex + 1]);
    } else if (items.length > 0) {
      onNavigate(items[0]);
    }
  }, [currentIndex, items, onNavigate]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(items[currentIndex - 1]);
    } else if (items.length > 0) {
      onNavigate(items[items.length - 1]);
    }
  }, [currentIndex, items, onNavigate]);

  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [item, onClose, handleNext, handlePrev]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#292824]/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[92vh] flex flex-col bg-[#FAF8F3] rounded-2xl overflow-hidden shadow-2xl border border-[#E5DFD5]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5DFD5] bg-[#FAF8F3]">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#798E6F] font-semibold">
              {item.categoryLabel}
            </span>
            <h3 className="font-display text-lg sm:text-xl text-[#292824] font-medium">
              {item.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#F0E9DF] text-[#77736C] hover:text-[#292824] transition-colors cursor-pointer"
            aria-label="Close image preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image viewport */}
        <div className="relative bg-[#292824]/5 flex-1 min-h-[300px] max-h-[65vh] flex items-center justify-center overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain max-h-[65vh]"
          />

          {/* Navigation Controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#FAF8F3]/90 text-[#292824] hover:bg-[#FAF8F3] shadow-md transition-all cursor-pointer hover:scale-105"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#FAF8F3]/90 text-[#292824] hover:bg-[#FAF8F3] shadow-md transition-all cursor-pointer hover:scale-105"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Footer info */}
        <div className="px-6 py-3.5 bg-[#FAF8F3] border-t border-[#E5DFD5] flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-[#77736C] gap-2">
          <p>{item.description}</p>
          <div className="shrink-0 text-right">
            <span>
              {currentIndex + 1} of {items.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
