"use client";

import React, { useState } from "react";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What types of crushing equipment does Pithal Machines offer?",
    answer: "Pithal Machines provides crushing solutions designed for different material-processing requirements, including crushing plants and equipment for applications such as mining, quarrying, construction and aggregate processing."
  },
  {
    question: "What capacity crushing plants does Pithal Machines provide?",
    answer: "Our crushing plant solutions can be configured for different production requirements and capacities. Contact our team with your required output, material type and application to discuss the most suitable solution."
  },
  {
    question: "How do I choose the right crushing plant for my application?",
    answer: "The right crushing plant depends on factors such as material type, feed size, required output, desired product size, production capacity and application. Our team can help determine a suitable configuration based on your requirements."
  },
  {
    question: "What is the difference between crushing and screening?",
    answer: "Crushing reduces large rocks and other materials into smaller sizes, while screening separates processed material into different sizes. A combined crushing and screening plant can perform both processes as part of an efficient material-processing operation."
  },
  {
    question: "Can Pithal Machines provide customized crushing plant solutions?",
    answer: "Yes. Crushing and screening solutions can be configured according to production requirements, material characteristics, application and desired output. Contact Pithal Machines to discuss your specific plant requirements."
  },
  {
    question: "Do Pithal Machines provide after-sales support?",
    answer: "Pithal Machines provides after-sales support to help customers maintain reliable equipment performance and minimize operational downtime. Contact the team for information about available service and support."
  },
  {
    question: "How can I get a quote for a crushing or screening plant?",
    answer: "You can contact Pithal Machines with details such as your required production capacity, material type, application and location. Our team can then discuss the appropriate crushing or screening solution for your requirements."
  }
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
        
        <div className="mx-auto max-w-4xl mt-10 sm:mt-14">
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
