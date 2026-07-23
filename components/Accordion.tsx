"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Accordion({
  items
}: {
  items: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-mist border border-mist rounded-2xl overflow-hidden bg-white">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
            >
              <span className="font-semibold text-navy">{item.question}</span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-gold transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-5 text-sm text-navy-ink/70 leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
