"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export function BlogFaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndexes, setOpenIndexes] = useState<{ [key: number]: boolean }>({ 0: true });

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="pt-8 border-t border-gray-200 space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-600">
          <HelpCircle size={24} />
        </div>
        <div>
          <h2 className="text-xl font-black uppercase text-primary tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-text-muted">Key technical inquiries related to this article</p>
        </div>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = Boolean(openIndexes[index]);
          return (
            <div
              key={index}
              className="bg-white border border-border rounded-2xl overflow-hidden shadow-xs transition-all duration-200"
            >
              <button
                type="button"
                onClick={() => toggleIndex(index)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-primary hover:text-secondary transition-colors cursor-pointer"
              >
                <span className="text-sm md:text-base leading-snug">{faq.question}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-secondary transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-96 opacity-100 p-5 pt-0 border-t border-gray-100" : "max-h-0 opacity-0 p-0"
                }`}
              >
                <p className="text-sm text-text-dark leading-relaxed font-medium pt-3">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
