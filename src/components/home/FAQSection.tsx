"use client";

import React, { useState } from "react";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
const faqs = [
  {
    question: "What does a stone crusher manufacturer do?",
    answer:
      "A stone crusher manufacturer designs and produces machinery used to reduce large rocks into smaller sizes. These machines are used in construction, mining, quarrying and aggregate production.",
  },
  {
    question: "Which type of stone crusher is best for industrial use?",
    answer:
      "Jaw crushers are generally used for primary crushing, cone crushers for secondary and tertiary crushing and VSI crushers for particle shaping and manufactured sand production. The right choice depends on the material and required output.",
  },
  {
    question: "What is the stone crusher machine cost in India?",
    answer:
      "The cost varies according to machine type, production capacity, technical specifications and configuration. Individual crushers and complete crushing plants have different investment requirements.",
  },
  {
    question: "How do I select the right stone crusher machine?",
    answer:
      "Consider the type of stone, feed size, required production capacity and final aggregate size. Installation space, power requirements and crushing stages should also be evaluated.",
  },
  {
    question: "Which industries use industrial stone crushers?",
    answer:
      "Industrial stone crushers are commonly used in construction, mining, quarrying, road development and aggregate production.",
  },
  {
    question: "Can different crushers be used in one crushing plant?",
    answer:
      "Yes. A crushing plant can combine jaw crushers, cone crushers, VSI crushers and vibrating screens. The configuration depends on the raw material, production capacity and final product requirements.",
  },
];

export function FAQSection() {
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
          eyebrow="Frequently Asked Questions"
          title="Everything You Need to Know About Our"
          highlight="Crushing & Screening Solutions"
          highlightBlock={true}
          className="max-w-[90%] md:max-w-none [&_h2]:text-[clamp(1.5rem,4vw,2.5rem)]"
        />
        
        <div className="mx-auto max-w-4xl mt-6 sm:mt-8">
          <div className="grid gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={cn(
                    "rounded-2xl border transition-all duration-300 overflow-hidden",
                    isOpen ? "border-secondary bg-white shadow-[0_4px_20px_-4px_rgba(239,123,16,0.1)]" : "border-gray-200 bg-white hover:border-primary/30"
                  )}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                    aria-expanded={isOpen}
                  >
                    <span className={cn(
                      "text-sm sm:text-base md:text-lg font-bold pr-4 transition-colors duration-300",
                      isOpen ? "text-secondary" : "text-primary"
                    )}>
                      {faq.question}
                    </span>
                    <div className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                      isOpen ? "bg-secondary/10 text-secondary" : "bg-gray-100 text-gray-500"
                    )}>
                      <ChevronDown 
                        className={cn("h-5 w-5 transition-transform duration-300", isOpen && "rotate-180")} 
                        strokeWidth={2.5}
                      />
                    </div>
                  </button>
                  <div 
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
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
