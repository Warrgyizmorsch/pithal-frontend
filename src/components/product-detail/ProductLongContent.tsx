"use client";

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Container } from "@/components/common/Container";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProductLongContentData } from "@/data/products/productDetailTypes";

export function ProductLongContent({ data }: { data: ProductLongContentData }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-16 bg-white relative">
      <Container>
        <div className="mx-auto max-w-4xl relative">
          <div
            className={cn(
              "prose prose-slate max-w-none text-text-dark sm:prose-lg prose-headings:text-primary prose-headings:font-black prose-a:text-secondary hover:prose-a:text-secondary/80 transition-all duration-500 ease-in-out",
              !isExpanded && "max-h-[250px] overflow-hidden"
            )}
          >
            <ReactMarkdown>{data.content}</ReactMarkdown>
          </div>

          {!isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none translate-y-[-50px]" />
          )}

          <div className={cn("flex justify-center", !isExpanded ? "mt-4" : "mt-8")}>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="group flex items-center gap-2 rounded-full border-2 border-secondary px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-secondary transition-all hover:bg-secondary hover:text-white"
            >
              {isExpanded ? "Read Less" : "Read More"}
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-300",
                  isExpanded && "rotate-180"
                )}
                strokeWidth={2.5}
              />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
