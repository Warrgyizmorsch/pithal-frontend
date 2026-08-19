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
              "prose prose-slate max-w-none text-text-dark sm:prose-lg prose-headings:text-primary prose-headings:font-black prose-a:text-secondary hover:prose-a:text-secondary/80 prose-p:!my-[15px] transition-all duration-700 ease-in-out overflow-hidden",
              isExpanded ? "max-h-[3000px]" : "max-h-[250px]"
            )}
          >
            <ReactMarkdown
              components={{
                h3: 'h2',
                h4: 'h2',
                h5: 'h2',
                h6: 'h2',
                h1: ({ node, ...props }) => <h1 className="!text-[2.5rem] !leading-tight !mt-0 !mb-[15px]" {...props} />,
                h2: ({ node, ...props }) => <h2 className="!text-[2rem] !leading-tight !mt-[30px] !mb-[15px]" {...props} />
              }}
            >
              {data.content}
            </ReactMarkdown>
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
