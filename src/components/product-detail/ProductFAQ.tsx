"use client";

import React, { useState } from "react";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProductFAQData } from "@/data/products/productDetailTypes";

export function ProductFAQ({ data }: { data: ProductFAQData }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-space bg-slate-50 relative overflow-hidden" id="faq">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeader
          eyebrow={data.eyebrow}
          title={data.title}
          highlight={data.highlight}
          highlightBlock={true}
          className="max-w-[90%] md:max-w-none"
        />
        
        <div className="mx-auto max-w-4xl mt-10 sm:mt-14">
          <div className="grid gap-4">
            {data.faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={cn(
                    "rounded-2xl border transition-all duration-500 overflow-hidden",
                    isOpen ? "border-secondary bg-white shadow-[0_4px_20px_-4px_rgba(239,123,16,0.1)]" : "border-gray-200 bg-white hover:border-primary/30"
                  )}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                    aria-expanded={isOpen}
                  >
                    <span className={cn(
                      "text-sm sm:text-base md:text-lg font-bold pr-4 transition-colors duration-500",
                      isOpen ? "text-secondary" : "text-primary"
                    )}>
                      {faq.question}
                    </span>
                    <div className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-500",
                      isOpen ? "bg-secondary/10 text-secondary" : "bg-gray-100 text-gray-500"
                    )}>
                      <ChevronDown 
                        className={cn("h-5 w-5 transition-transform duration-500", isOpen && "rotate-180")} 
                        strokeWidth={2.5}
                      />
                    </div>
                  </button>
                  <div 
                    className={cn(
                      "grid transition-all duration-500 ease-in-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-sm sm:text-base text-text-dark leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
