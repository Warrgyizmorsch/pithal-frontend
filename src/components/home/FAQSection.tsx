"use client";

import React, { useState } from "react";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is a stone crusher machine?",
    answer:
      "A stone crusher machine is equipment used to reduce large rocks and stones into smaller sizes for mining, quarrying, aggregate production, construction and infrastructure applications.",
  },
  {
    question: "What factors affect stone crusher machine cost?",
    answer:
      "The stone crusher machine cost depends on crusher type, production capacity, material characteristics, feed size, output requirements, number of crushing stages, screening, conveyors and the overall plant configuration.",
  },
  {
    question: "Which type of stone crusher is suitable for hard rock?",
    answer:
      "Jaw crushers are commonly used for primary crushing of hard rock. Cone crushers or other equipment may be used for further reduction depending on the required product size and crushing circuit.",
  },
  {
    question: "What is the difference between a jaw crusher, cone crusher and VSI crusher?",
    answer:
      "A jaw crusher is generally used for primary crushing, a cone crusher is commonly used for secondary or tertiary crushing and a VSI crusher is used for fine crushing and particle shaping. The appropriate combination depends on the material and final product requirements.",
  },
  {
    question: "What should I consider before buying a stone crusher?",
    answer:
      "Consider the material type, hardness, abrasiveness, maximum feed size, required production capacity, final product size, number of crushing stages and screening requirements before selecting a stone crusher.",
  },
  {
    question: "Can Pithal Machines provide a complete crushing plant?",
    answer:
      "Yes. Pithal Machines provides crushing and screening solutions that can integrate crushers, vibrating screens and conveyor systems according to the production capacity and material-processing requirements of the project.",
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
