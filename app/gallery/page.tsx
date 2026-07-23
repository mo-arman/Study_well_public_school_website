"use client";

import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const categories = [
  "Annual Function", "Sports Day", "Science Fair", "Independence Day",
  "Republic Day", "Art & Craft", "Dance", "Campus Tour"
];

// Flatten into one ordered list so the lightbox can navigate across
// category boundaries too (TODO: replace with real photo URLs).
const allPhotos = categories.flatMap((cat) =>
  [1, 2, 3, 4].map((n) => ({ category: cat, index: n }))
);

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const showNext = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % allPhotos.length));
  const showPrev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + allPhotos.length) % allPhotos.length));

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  // Basic touch-swipe support for mobile
  let touchStartX = 0;
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = e.changedTouches[0].clientX - touchStartX;
    if (delta > 50) showPrev();
    if (delta < -50) showNext();
  };

  let flatCursor = 0;

  return (
    <>
      <PageHeader eyebrow="Gallery" title="Life at School" />
      <div className="container-custom py-16">
        {categories.map((cat) => {
          const startIndex = flatCursor;
          flatCursor += 4;
          return (
            <div key={cat} className="mb-14">
              <h2 className="font-display text-2xl text-navy font-semibold mb-5">{cat}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((n, i) => (
                  <button
                    key={n}
                    onClick={() => setActiveIndex(startIndex + i)}
                    className="aspect-square rounded-xl bg-mist flex items-center justify-center text-navy-ink/40 text-xs text-center px-3 hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    [ {cat} photo {n} ]
                  </button>
                ))}
              </div>
            </div>
          );
        })}
        <p className="text-navy-ink/50 text-sm">
          TODO: Replace placeholders with real photos once the school shares
          them — the lightbox above already supports tap-to-zoom, swipe, and
          arrow-key navigation, no code changes needed.
        </p>
      </div>

      {/* Lightbox overlay */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          <button
            onClick={close}
            aria-label="Close photo viewer"
            className="absolute top-5 right-5 text-white/80 hover:text-white"
          >
            <X size={28} />
          </button>

          <button
            onClick={showPrev}
            aria-label="Previous photo"
            className="absolute left-3 sm:left-8 text-white/70 hover:text-white"
          >
            <ChevronLeft size={36} />
          </button>

          <div className="max-w-lg w-full aspect-square bg-white/5 rounded-2xl flex items-center justify-center mx-16 text-white/50 text-sm text-center px-6">
            [ {allPhotos[activeIndex].category} photo {allPhotos[activeIndex].index} — full size ]
          </div>

          <button
            onClick={showNext}
            aria-label="Next photo"
            className="absolute right-3 sm:right-8 text-white/70 hover:text-white"
          >
            <ChevronRight size={36} />
          </button>

          <p className="absolute bottom-6 text-white/50 text-xs">
            {activeIndex + 1} / {allPhotos.length}
          </p>
        </div>
      )}
    </>
  );
}
