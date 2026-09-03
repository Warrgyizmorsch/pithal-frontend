"use client";

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
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
              isExpanded ? "max-h-[8000px]" : "max-h-[250px]"
            )}
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h3: 'h2',
                h4: 'h2',
                h5: 'h2',
                h6: 'h2',
                h1: ({ node: _node, ...props }: any) => <h1 className="!text-[2.5rem] !leading-tight !mt-0 !mb-[15px]" {...props} />,
                h2: ({ node: _node, ...props }: any) => <h2 className="!text-[2rem] !leading-tight !mt-[30px] !mb-[15px]" {...props} />,
                table: ({ node: _node, ...props }: any) => (
                  <div className="not-prose my-6 w-full">
                    <div className="flex items-center gap-1.5 text-xs text-text-muted mb-2 sm:hidden px-1">
                      <svg className="h-4 w-4 text-secondary shrink-0 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                      <span className="font-semibold text-primary">Slide horizontally to view complete table</span>
                    </div>
                    <div className="relative w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm [scrollbar-width:thin]">
                      <table className="w-full min-w-[600px] border-collapse text-left text-sm" {...props} />
                    </div>
                  </div>
                ),
                thead: ({ node: _node, ...props }: any) => (
                  <thead className="border-b-2 border-slate-200 bg-slate-50/90" {...props} />
                ),
                th: ({ node: _node, ...props }: any) => (
                  <th className="px-5 py-4 text-[13px] sm:text-[14px] font-extrabold uppercase tracking-wider text-primary whitespace-nowrap" {...props} />
                ),
                tbody: ({ node: _node, ...props }: any) => (
                  <tbody className="divide-y divide-slate-100 bg-white" {...props} />
                ),
                tr: ({ node: _node, ...props }: any) => (
                  <tr className="transition-colors hover:bg-slate-50/80 odd:bg-white even:bg-slate-50/50" {...props} />
                ),
                td: ({ node: _node, ...props }: any) => (
                  <td className="px-5 py-3.5 text-[13.5px] font-medium text-slate-800 whitespace-nowrap" {...props} />
                ),
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
